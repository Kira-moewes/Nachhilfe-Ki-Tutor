-- KI-Tutor. Einmal im Supabase SQL-Editor ausführen (nach allen SQL-Dateien der App).
-- Legt nur neue Tabellen und Funktionen an; bestehende Tabellen und Regeln der App bleiben unverändert.

-- Wer den Tutor nutzen darf. Nur Kira schreibt; ohne Zeile (oder ohne Einwilligung) kein Tutor. Kira selbst braucht keine Zeile.
create table tutor_zugang (
  user_id uuid primary key references auth.users on delete cascade,
  aktiv boolean not null default true,
  einwilligung_am date,                      -- Datum der Einwilligung der Eltern (Nachweis)
  einwilligung_notiz text,                   -- z. B. „Mutter, unterschrieben, Ordner Datenschutz“
  inhalte_speichern boolean not null default false,  -- nur Testphase: Fragen + Antworten 14 Tage für Kira (Fotos nie)
  limit_nachrichten int not null default 15 check (limit_nachrichten between 0 and 100),
  limit_fotos int not null default 5 check (limit_fotos between 0 and 30),
  geaendert timestamptz not null default now()
);
alter table tutor_zugang enable row level security;
create policy "Tutor: Kira verwaltet" on tutor_zugang for all to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
create policy "Tutor: eigener Zugang" on tutor_zugang for select to authenticated using (user_id = auth.uid());

-- Zähler pro Tag (für das Tageslimit). Schreiben nur über die Funktionen unten (Edge Function mit Dienstschlüssel).
create table tutor_tage (
  user_id uuid not null references auth.users on delete cascade,
  tag date not null default (now() at time zone 'Europe/Berlin')::date,  -- Tag nach deutscher Uhrzeit
  nachrichten int not null default 0,
  fotos int not null default 0,
  primary key (user_id, tag)
);
alter table tutor_tage enable row level security;
create policy "Tutor: eigene Tage" on tutor_tage for select to authenticated using (user_id = auth.uid() or (select public.is_admin()));

-- Verbrauch je Antwort: für Monatsbudget, Kostenübersicht und Elternbericht (welches Thema, wie oft). Kein Text.
create table tutor_kosten (
  id bigint generated always as identity primary key,
  user_id uuid references auth.users on delete cascade,
  erstellt timestamptz not null default now(),
  modell text not null,
  thema text,
  teil text,
  foto boolean not null default false,
  eingabe int, cache_lesen int, cache_schreiben int, ausgabe int,
  usd numeric(10, 5) not null
);
create index on tutor_kosten (erstellt);
alter table tutor_kosten enable row level security;
create policy "Tutor: Kira sieht Kosten" on tutor_kosten for select to authenticated using ((select public.is_admin()));

-- Gesprächsinhalte nur bei tutor_zugang.inhalte_speichern (Testphase), nach 14 Tagen gelöscht.
create table tutor_protokoll (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users on delete cascade,
  erstellt timestamptz not null default now(),
  thema text, aufgabe text, frage text, antwort text, modell text,
  mit_foto boolean not null default false
);
alter table tutor_protokoll enable row level security;
create policy "Tutor: Kira sieht Protokoll" on tutor_protokoll for select to authenticated using ((select public.is_admin()));
create policy "Tutor: Kira löscht Protokoll" on tutor_protokoll for delete to authenticated using ((select public.is_admin()));

-- Zählt eine Nachricht, wenn das Tageslimit es erlaubt (atomar, auch bei gleichzeitigen Anfragen).
-- Antwort: {"ok": true/false, "nachrichten": …, "fotos": …} (heute schon verbraucht).
create function tutor_zaehlen(uid uuid, mit_foto boolean, max_nachrichten int, max_fotos int) returns jsonb
language plpgsql security definer set search_path = '' as $$
declare heute date := (now() at time zone 'Europe/Berlin')::date; z public.tutor_tage;
begin
  insert into public.tutor_tage (user_id, tag) values (uid, heute) on conflict do nothing;
  update public.tutor_tage set nachrichten = nachrichten + 1, fotos = fotos + mit_foto::int
   where user_id = uid and tag = heute and nachrichten < max_nachrichten and (not mit_foto or fotos < max_fotos)
  returning * into z;
  if found then return jsonb_build_object('ok', true, 'nachrichten', z.nachrichten, 'fotos', z.fotos); end if;
  return jsonb_build_object('ok', false);
end $$;

-- Gibt die Nachricht zurück, wenn die KI nicht antworten konnte (Fehler sollen das Limit nicht aufbrauchen).
create function tutor_zurueck(uid uuid, mit_foto boolean) returns void language sql security definer set search_path = '' as $$
  update public.tutor_tage set nachrichten = greatest(nachrichten - 1, 0), fotos = greatest(fotos - mit_foto::int, 0)
   where user_id = uid and tag = (now() at time zone 'Europe/Berlin')::date
$$;

-- Kosten aller Schüler im laufenden Monat (für das Monatsbudget).
create function tutor_monatskosten() returns numeric language sql stable security definer set search_path = '' as $$
  select coalesce(sum(usd), 0) from public.tutor_kosten where erstellt >= date_trunc('month', now() at time zone 'Europe/Berlin') at time zone 'Europe/Berlin'
$$;
revoke execute on function tutor_zaehlen(uuid, boolean, int, int) from public, anon, authenticated;
revoke execute on function tutor_zurueck(uuid, boolean) from public, anon, authenticated;
revoke execute on function tutor_monatskosten() from public, anon, authenticated;

-- Aufräumen jede Nacht: Protokoll nach 14 Tagen, Tageszähler nach 60 Tagen, Kostenzeilen nach 13 Monaten.
select cron.schedule('tutor_aufraeumen', '41 3 * * *', $$
  delete from public.tutor_protokoll where erstellt < now() - interval '14 days';
  delete from public.tutor_tage where tag < current_date - 60;
  delete from public.tutor_kosten where erstellt < now() - interval '13 months';
$$);

-- Nutzung für Elternbericht und Kira: Tage, Nachrichten und Themen je Schüler und Monat (ohne Inhalte).
create view tutor_nutzung with (security_invoker = true) as
  select user_id, date_trunc('month', erstellt)::date as monat, count(*) as nachrichten,
         count(distinct erstellt::date) as tage, count(*) filter (where foto) as fotos,
         array_agg(distinct thema) filter (where thema is not null) as themen, round(sum(usd), 2) as usd
    from tutor_kosten group by 1, 2;

-- Beispiele (Kira, im SQL-Editor):
--   Testphase für Kira selbst: nichts nötig.
--   Max freischalten (Dezember):  insert into tutor_zugang (user_id, einwilligung_am, einwilligung_notiz, inhalte_speichern)
--                                 select id, '2026-12-01', 'Familie, schriftlich', true from profiles where name = 'Max';
--   Ab Januar Protokoll aus:      update tutor_zugang set inhalte_speichern = false;
--   Kosten diesen Monat:          select round(sum(usd), 2) from tutor_kosten where erstellt >= date_trunc('month', now());
