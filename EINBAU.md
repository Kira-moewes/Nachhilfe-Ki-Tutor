# KI-Tutor einrichten und einbauen

## 1. AWS Bedrock (einmalig, Kira, ca. 20 Min.)
1. Konto auf aws.amazon.com anlegen (Kreditkarte nötig). Oben rechts Region **Europe (Frankfurt) eu-central-1** wählen.
2. Billing → Budgets → Budget „KI-Tutor“ mit 20 USD/Monat und E-Mail-Warnung bei 80 % anlegen.
3. Amazon Bedrock öffnen → Model catalog → Anthropic Claude Sonnet 5.5 (zum Vergleich auch Opus 5.5 und Haiku 5.5) → Zugriff anfordern (Anwendungsfall: „Hausaufgabenhilfe für Nachhilfeschüler, keine personenbezogenen Daten“).
   Prüfen, dass das Modell in eu-central-1 angeboten wird; sonst Claude Bescheid geben (EU-Verbund-Profil statt Frankfurt).
4. Bedrock → API keys → langfristigen API-Schlüssel anlegen (Ablauf z. B. 1 Jahr), kopieren.
5. AWS-Datenschutz-Zusatz (DPA/AVV) gilt automatisch über die AWS Service Terms; als PDF unter „AWS Artifact“ herunterladen → Ordner „Datenschutz“.

## 2. Supabase (Projekt „Nachhilfe“)
1. SQL-Editor: `sql/tutor.sql` ausführen.
2. Edge Functions → Secrets:
   - `AWS_BEARER_TOKEN_BEDROCK` = Schlüssel aus 1.4
   - `AWS_REGION` = `eu-central-1`
   - optional `KI_MODELL` (Standard `claude-sonnet-5-5`), `KI_MONATSBUDGET_USD` (Standard 20), `KI_AUFWAND` (Standard `medium`)
3. Funktion bereitstellen: Ordner `supabase/functions/tutor` als Funktion „tutor“ (Claude macht das über die Supabase-Verbindung, oder `supabase functions deploy tutor`).

## 3. Testen (November, nur Kira)
`web/test.html` im Browser am Laptop öffnen (Datei herunterladen, Doppelklick), mit Kiras Konto einloggen.
Thema + Aufgabe wählen, Chat öffnen oder dieselbe Frage an Sonnet/Opus/Haiku schicken und vergleichen.
Kosten je Antwort stehen unter dem Chat; alle Antworten 14 Tage in `tutor_protokoll`.

Prüfliste für echte Schülerfragen: verrät er das Ergebnis? Erkennt er den Fehler im Foto? Passt die Sprache für Kl. 5 / Kl. 9? Bleibt er beim Thema?

## 4. Freischalten (Dezember: Max, Januar: alle mit Einwilligung)
```sql
insert into tutor_zugang (user_id, einwilligung_am, einwilligung_notiz, inhalte_speichern)
select id, '2026-12-01', 'Familie, schriftlich', true from profiles where name = 'Max';
```
Ab Januar `inhalte_speichern = false` (Standard). Widerruf: `update tutor_zugang set aktiv = false where …` oder Zeile löschen.

## 5. Einbau in die App (erst nach Kiras Freigabe)
1. `web/tutor.js` → `js/tutor.js`, `web/tutor.css` → in den `<style>`-Block oder als Datei; in `index.html` vor `js/app.js`:
   `<script src="js/tutor.js"></script>`
2. `js/lernen.js`, in `starteSchritt` → `naechste()`, nach `unten.append(pruefen);`:
   ```js
   if (schritt.art !== 'klausur') unten.append(tutorKnopf({ thema: lernThema, stufe: schritt.art, aufgabe: a.frage,
     titel: `${LERNTHEMEN.find(t => t.thema === lernThema)?.titel ?? ''} · ${teil?.titel ?? ''}` }));
   ```
   (Knopf erscheint nur bei freigeschalteten Schülern; die Funktion lehnt die Probeklausur zusätzlich selbst ab.)
3. Wissensbasis aktuell halten: nach neuen Lernpfad-Themen `python3 wissen/erzeugen.py ../Nachhilfe-` und Funktion neu bereitstellen.
4. Elternbericht: Nutzung aus der Ansicht `tutor_nutzung` (Tage, Nachrichten, Themen – keine Inhalte).
