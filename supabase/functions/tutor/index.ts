// KI-Tutor: Hinweise statt Lösungen, auf Basis von Kiras Merkkästen und Lösungswegen (wissen.ts).
// Aufruf aus der App mit dem Login des Schülers, Region fest eu-central-1:
//   db.functions.invoke("tutor", { body: { thema, stufe?, aufgabe?, nachricht, foto?, fotoTyp?, verlauf? }, region: "eu-central-1" })
//   → { antwort, rest: { nachrichten, fotos } }  bzw. { fehler }
// An die KI gehen nur Thema, Aufgabe, Klasse, Text und Foto – kein Name, keine Nutzer-ID, keine E-Mail.
// Einstellungen (Supabase → Edge Functions → Secrets):
//   KI_ANBIETER        bedrock (Standard, Verarbeitung in der EU) | anthropic (nur zum Vergleich, nicht EU)
//   AWS_REGION         eu-central-1 (Frankfurt)
//   AWS_BEARER_TOKEN_BEDROCK  Bedrock-API-Schlüssel (oder AWS_ACCESS_KEY_ID + AWS_SECRET_ACCESS_KEY)
//   KI_MODELL          claude-sonnet-5-5 (Standard) | claude-opus-5-5 | claude-haiku-5-5
//   KI_ERSATZMODELL    optional: Modell, das übernimmt, wenn das erste aus Sicherheitsgründen ablehnt
//   KI_AUFWAND         low | medium (Standard) | high – wie gründlich die KI nachdenkt
//   KI_MONATSBUDGET_USD  20 (Standard) – danach antwortet der Tutor bis Monatsende nicht mehr
import { createClient } from "npm:@supabase/supabase-js@2";
import Anthropic, { betaRefusalFallbackMiddleware } from "npm:@anthropic-ai/sdk@1.3.0";
import { AnthropicBedrockMantle } from "npm:@anthropic-ai/bedrock-sdk@1.1.0";
import { WISSEN } from "./wissen.ts";
import { anfragePruefen, ERSATZ_HINWEIS, kontext, kosten, namenEntfernen, REGELN, verraetErgebnis } from "./logik.ts";

const KIRA = "kira.moewes@gmail.com";
const MODELLE = ["claude-sonnet-5-5", "claude-opus-5-5", "claude-haiku-5-5"];
const env = (k: string, standard = "") => Deno.env.get(k) || standard;
const BEDROCK = env("KI_ANBIETER", "bedrock") !== "anthropic";
const modellId = (m: string) => (BEDROCK && !m.startsWith("anthropic.") ? "anthropic." + m : m);
const ersatz = env("KI_ERSATZMODELL");
const middleware = ersatz ? [betaRefusalFallbackMiddleware([{ model: modellId(ersatz) }])] : [];
const ki = BEDROCK ? new AnthropicBedrockMantle({ awsRegion: env("AWS_REGION", "eu-central-1"), middleware }) : new Anthropic({ middleware });

const cors = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, content-type, apikey, x-client-info, x-region" };
const antwort = (daten: unknown, status = 200) =>
  new Response(JSON.stringify(daten), { status, headers: { ...cors, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  const admin = createClient(env("SUPABASE_URL"), env("SUPABASE_SERVICE_ROLE_KEY"));
  const jwt = (req.headers.get("Authorization") ?? "").replace("Bearer ", "");
  const { data: { user } } = await admin.auth.getUser(jwt);
  if (!user) return antwort({ fehler: "Bitte neu einloggen." }, 401);
  const istKira = user.email === KIRA;

  const e = anfragePruefen(await req.json().catch(() => ({})));
  if (typeof e === "string") return antwort({ fehler: e }, 400);
  const th = WISSEN[e.thema];
  if (!th) return antwort({ fehler: "Zu diesem Thema kann ich (noch) nicht helfen." }, 400);
  const aufgabe = e.aufgabe ? th.aufgaben[e.aufgabe] : undefined;
  if (e.stufe === "klausur" || aufgabe?.klausur) return antwort({ fehler: "In der Probeklausur bist du auf dich gestellt – du schaffst das! 💪" }, 403);

  const { data: profil } = await admin.from("profiles").select("name, klasse, faecher, freigegeben, spass").eq("id", user.id).single();
  const { data: zugang } = await admin.from("tutor_zugang").select("*").eq("user_id", user.id).maybeSingle();
  if (!istKira) {
    if (!profil?.freigegeben || !zugang?.aktiv || !zugang.einwilligung_am) return antwort({ fehler: "Der KI-Tutor ist für dich noch nicht freigeschaltet." }, 403);
    if (th.klasse !== profil.klasse || !(profil.faecher ?? []).includes(th.fach)) return antwort({ fehler: "Dieses Thema gehört nicht zu deinen Fächern." }, 403);
  }

  // Monatsbudget für alle zusammen, dann Tageslimit des Schülers.
  const { data: summe } = await admin.rpc("tutor_monatskosten");
  if (Number(summe ?? 0) >= Number(env("KI_MONATSBUDGET_USD", "20")))
    return antwort({ fehler: "Der Tutor macht bis Monatsende Pause. Merk dir die Frage mit 🚩 für Kira." }, 429);
  const mitFoto = !!e.foto;
  const lim = { nachrichten: zugang?.limit_nachrichten ?? 15, fotos: zugang?.limit_fotos ?? 5 };
  let heute = { nachrichten: 0, fotos: 0 };
  if (!istKira) {
    const { data: z } = await admin.rpc("tutor_zaehlen", { uid: user.id, mit_foto: mitFoto, max_nachrichten: lim.nachrichten, max_fotos: lim.fotos });
    if (z?.ok) heute = z;
    else return antwort({ fehler: mitFoto ? "Für heute sind deine Fotos aufgebraucht – tipp den Rechenweg ab oder merk die Frage mit 🚩 für Kira." : "Für heute ist Schluss mit Tutor-Fragen. Morgen geht's weiter – oder merk die Frage mit 🚩 für Kira." }, 429);
  }

  // Namen raus, dann Nachrichten bauen. Verlauf nur als Text (Fotos werden nicht erneut geschickt).
  const ohneName = (t: string) => namenEntfernen(t, profil?.name);
  const nachricht = ohneName(e.nachricht);
  const messages: Anthropic.MessageParam[] = (e.verlauf ?? []).map((v) => ({ role: v.rolle === "kind" ? "user" : "assistant", content: ohneName(v.text) }));
  while (messages.length && messages[0].role !== "user") messages.shift();  // muss mit dem Kind beginnen
  const inhalt: Anthropic.ContentBlockParam[] = [];
  if (e.foto) inhalt.push({ type: "image", source: { type: "base64", media_type: e.fotoTyp as "image/jpeg", data: e.foto } });
  inhalt.push({ type: "text", text: kontext(th, aufgabe, e, !!profil?.spass) + "\n" + (nachricht || "Schau dir bitte meinen Rechenweg an.") });
  if (messages.at(-1)?.role === "user") messages.push({ role: "assistant", content: "…" });
  messages.push({ role: "user", content: inhalt });

  const modell = istKira && e.modell && MODELLE.includes(e.modell) ? e.modell : env("KI_MODELL", "claude-sonnet-5-5");
  const fragen = (msgs: Anthropic.MessageParam[]) => ki.beta.messages.create({
    model: modellId(modell),
    max_tokens: 4000,
    output_config: { effort: env("KI_AUFWAND", "medium") as "medium" },
    // Regeln + Themenwissen sind für alle Fragen zum Thema gleich → zwischengespeichert (10 % des Preises beim Lesen).
    system: [{ type: "text", text: REGELN }, { type: "text", text: th.text, cache_control: { type: "ephemeral" } }],
    messages: msgs,
  });

  let text = "", gesamt = 0;
  try {
    let r = await fragen(messages);
    gesamt += kosten(r.model ?? modell, r.usage);
    text = r.stop_reason === "refusal" ? "" : r.content.map((b) => (b.type === "text" ? b.text : "")).join("").trim();
    // Ergebnis-Wächter: verrät die Antwort das Ergebnis der aktuellen Aufgabe, einmal neu formulieren lassen.
    if (verraetErgebnis(text, aufgabe, nachricht)) {
      r = await fragen([...messages, { role: "assistant", content: text },
        { role: "user", content: "[App] Deine letzte Antwort verrät das Ergebnis. Schreib sie neu als Hinweis, ohne das Ergebnis und ohne die richtige Auswahl zu nennen. Das Kind sieht nur die neue Fassung." }]);
      gesamt += kosten(r.model ?? modell, r.usage);
      text = r.content.map((b) => (b.type === "text" ? b.text : "")).join("").trim();
      if (verraetErgebnis(text, aufgabe, nachricht)) text = ERSATZ_HINWEIS;
    }
    if (!text) text = "Dabei kann ich dir leider nicht helfen. Frag am besten Kira – merk dir die Frage mit 🚩.";
    await admin.from("tutor_kosten").insert({ user_id: user.id, modell, thema: e.thema, teil: aufgabe?.teil, foto: mitFoto,
      eingabe: r.usage.input_tokens, cache_lesen: r.usage.cache_read_input_tokens, cache_schreiben: r.usage.cache_creation_input_tokens,
      ausgabe: r.usage.output_tokens, usd: gesamt });
  } catch (err) {
    if (!istKira) await admin.rpc("tutor_zurueck", { uid: user.id, mit_foto: mitFoto });
    console.error("KI-Fehler", err instanceof Anthropic.APIError ? `${err.status} ${err.message}` : err);
    const besetzt = err instanceof Anthropic.RateLimitError || (err instanceof Anthropic.APIError && (err.status ?? 0) >= 500);
    return antwort({ fehler: besetzt ? "Der Tutor ist gerade sehr beschäftigt. Versuch es gleich nochmal." : "Das hat nicht geklappt. Versuch es nochmal." }, 502);
  }

  if (zugang?.inhalte_speichern || istKira)
    await admin.from("tutor_protokoll").insert({ user_id: user.id, thema: e.thema, aufgabe: e.aufgabe, frage: nachricht, antwort: text, modell, mit_foto: mitFoto });
  return antwort({
    antwort: text,
    rest: istKira ? null : { nachrichten: lim.nachrichten - heute.nachrichten, fotos: lim.fotos - heute.fotos },
    ...(istKira ? { modell, usd: Math.round(gesamt * 10000) / 10000 } : {}),
  });
});
