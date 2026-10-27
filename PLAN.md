# KI-Tutor – Plan (Stand 27.10.2026)

Ziel: Schüler bekommen jeden Tag Hilfe, ohne dass Kira dauernd antworten muss – aber so, dass sie **selbst** rechnen (Hinweise statt Lösungen), Kira sieht, wo es hakt (Merkliste), und Eltern dem Datenschutz vertrauen können. Die bestehende App (`Kira-moewes/Nachhilfe-`) bleibt unverändert; dieses Repo liefert alles fertig zum späteren Einbinden (3 Zeilen in der App, erst nach Kiras Freigabe).

## Entscheidungen (27.10.2026)
- Anbieter: **Amazon Bedrock, Frankfurt** (eu-central-1).
- Modell: **Claude Sonnet 5.5** als Standard. Opus ist für Kl. 5–10 nicht nötig; im Testmonat mit denselben Fragen gegen Opus/Haiku vergleichen (Testseite), bei schwacher Foto-Auswertung umstellen (`KI_MODELL`).
- Inhalte speichern: **nur in der Testphase** (Kira, Max), 14 Tage. Eltern behalten trotzdem den Überblick: Monatsbericht mit Nutzung (Tage, Anzahl, Themen, 🚩), der Verlauf ist auf dem Gerät des Kindes sichtbar. Inhalte dauerhaft für Eltern zu speichern hieße mehr Daten über das Kind – bewusst nicht.
- Tageslimit: **15 Nachrichten + 5 Fotos**, Monatsbudget 20 $.

## 1. Wichtiger Befund: „EU-Verarbeitung“

Die Anthropic-API direkt kennt nur die Regionen „global“ und „us“ – **keine EU-Option**. Echte Verarbeitung in der EU gibt es nur über einen Cloud-Anbieter, der Claude in EU-Rechenzentren betreibt:

| Weg | Wo läuft die KI | Auftragsverarbeiter | Aufwand für Kira |
|---|---|---|---|
| **A: Amazon Bedrock, Frankfurt** (Empfehlung) | eu-central-1 (wie Supabase) bzw. EU-Verbund | Amazon Web Services EMEA (Luxemburg) | AWS-Konto, Claude im Bedrock-Menü freischalten, Zugangsschlüssel anlegen (Anleitung von Claude) |
| B: Google Vertex AI, EU | Region „eu“ / europe-west | Google Cloud EMEA (Irland) | Google-Cloud-Konto, Dienstkonto-Schlüssel |
| C: Anthropic direkt | weltweit (meist USA) | Anthropic (USA, Standardvertragsklauseln) | am einfachsten, aber **nicht** EU |

→ Folge für den Fahrplan: Auftragsverarbeiter für die KI ist bei A/B **AWS bzw. Google, nicht Anthropic**. Die Datenschutzunterlagen werden entsprechend geschrieben. Der Code bekommt eine Weiche (`KI_ANBIETER`), sodass ein späterer Wechsel nur eine Einstellung ist.

Zusätzlich: Die Edge Function wird beim Aufruf fest auf **eu-central-1** gelegt (Supabase verteilt Funktionen sonst auf die nächstgelegene Region).

## 2. Wie der Tutor arbeitet

```
Schüler (App)  ──Frage/Foto + Thema/Teilbereich/Aufgabe──▶  Edge Function „tutor“ (Frankfurt)
                                                             1. Login prüfen, Freischaltung + Einwilligung prüfen
                                                             2. Tageslimit + Monatsbudget prüfen
                                                             3. Name des Kindes aus dem Text entfernen
                                                             4. Wissen laden: Merkkästen + Lösungswege des Themas
                                                             5. Claude (EU) fragen, Antwort prüfen (verrät sie das Ergebnis?)
                                                             6. nur Zähler + Tokens speichern, keinen Inhalt
Schüler  ◀── Hinweis (Stufe 1–3) ── + Knopf „🚩 Mit Kira klären“ → Zeile in `merkliste`
```

**Wissensbasis** – `wissen/erzeugen.py` liest die Lernpfad-Dateien der App (`lernpfad/*.js`, bereits aus `inhalte/*.py` erzeugt) und schreibt je Thema eine kompakte Textdatei: Merkkasten je Teilbereich (HTML → Text) + alle Fragen mit Lösungsweg (`weg`). Die Funktion schickt nur das Thema, in dem der Schüler gerade ist (spart Kosten, verhindert Ausflüge). Neue Themen in der App → Skript neu laufen lassen.

**Hinweise statt Lösungen** (Regeln im festen Systemtext, zwischengespeichert = billig):
- Stufe 1: Welche Regel/welcher Merkkasten passt? Rückfrage an den Schüler.
- Stufe 2: Erster Schritt bzw. Fehler im Rechenweg zeigen („In Zeile 2 …“).
- Stufe 3 (erst nach eigenem Versuch): Schritt für Schritt bis kurz vor das Ergebnis – das Ergebnis rechnet der Schüler.
- Nie das Endergebnis einer Lernpfad-Aufgabe; in der **Probeklausur ist der Tutor aus**.
- Technische Sicherung: Kennt die Funktion das Ergebnis der aktuellen Aufgabe (`antwort`/richtige Option), prüft sie die Antwort darauf und lässt sie notfalls neu formulieren.
- Nur Fächer/Themen der App; sonst freundlich zurück zum Thema. Bei Sorgen/Krisen: an Eltern/Kira verweisen + Nummer gegen Kummer 116 111.
- Sprache: einfach, kurz, Du-Form, deutsche Fachbegriffe wie auf den Arbeitsblättern; Spaß-Modus → noch kürzer, Emojis.

**Foto vom Rechenweg** – Bild wird im Browser verkleinert (max. 1600 px, JPEG) und dabei von Metadaten (GPS, Gerät) befreit, nur im Speicher verarbeitet, **nicht gespeichert**. Hinweis vor dem Hochladen: „Nur das Heft fotografieren, keine Namen, keine Gesichter.“

**Keine Namen an die KI** – an die KI gehen nur: Klasse, Fach, Thema, Aufgabe, Text, Foto. Kein Name, keine Nutzer-ID, keine E-Mail. Vor- und Nachname aus `profiles.name` werden im Text durch „[Name]“ ersetzt. Gesprächsverlauf bleibt im Browser (max. 6 Nachrichten), nicht in der Datenbank.

**Tageslimit + Kostenbremse** – je Schüler z. B. 15 Nachrichten und 5 Fotos pro Tag (Tabelle `tutor_tage`), zusätzlich Monatsbudget gesamt (z. B. 20 €), danach „Heute ist der Tutor müde – frag Kira 🚩“. Kira hat kein Limit.

**Weitergabe an die Merkliste** – Knopf „🚩 Mit Kira klären“ schreibt (mit dem Login des Schülers, also über die bestehenden Zugriffsregeln) eine Zeile in `merkliste`: Thema „KI-Tutor · 2.1a“, Frage des Schülers + Ein-Satz-Zusammenfassung, wo es hakt. Kira sieht sie wie gewohnt im Tab Termine.

**Freischaltung** – neue Tabelle `tutor_zugang` (nur Kira schreibt): aktiv ja/nein, Einwilligung am/von wem. Ohne Eintrag kein Tutor. So lässt sich der Fahrplan abbilden: November nur Kira → Dezember Max → Januar alle mit Einwilligung.

## 3. Bausteine in diesem Repo

| Datei | Inhalt |
|---|---|
| `supabase/functions/tutor/index.ts` | Edge Function (Deno, Anthropic-SDK mit Bedrock-/Vertex-Client) |
| `supabase/functions/tutor/wissen/*.json` | erzeugte Wissensbasis je Thema |
| `wissen/erzeugen.py` | baut die Wissensbasis aus dem App-Repo |
| `sql/tutor.sql` | nur **neue** Tabellen/Funktionen: `tutor_zugang`, `tutor_tage`, `tutor_kosten`, RLS; bestehende Tabellen bleiben unangetastet |
| `web/tutor.js`, `web/tutor.css` | Chat-Fenster für die App (Foto, Hinweisstufen, 🚩, Spaß-Modus, Vorlesen) |
| `web/test.html` | eigene Testseite für Kira (Login, Thema wählen, fragen) – funktioniert ohne Änderung der App |
| `tests/` | Prüfungen: Wissensbasis vollständig, Namensfilter, Ergebnis-Wächter, Limits; Probefragen-Set für den Testmonat |
| `EINBAU.md` | die 3 Zeilen, die später in die App kommen (`index.html` Script-Tag, Knopf in `js/lernen.js`, Häkchen in Kiras Schülerkarte) |

## 4. Unterlagen (`unterlagen/`, HTML + PDF, Stil wie in der App)

1. **Datenschutzinfo für Eltern** (Art. 13 DSGVO, verständlich): wer, welche Daten, wozu, wo (Frankfurt), wie lange, Empfänger (Supabase, Cloudflare, AWS/Google), Rechte, Widerruf.
2. **Einwilligung** KI-Tutor (+ optional Monatsbericht): freiwillig, Nachhilfe und App funktionieren auch ohne KI (Kopplungsverbot), jederzeit widerrufbar.
3. **Verzeichnis der Verarbeitungstätigkeiten** (Art. 30, eine Seite): Konto, Termine/Minuten, Lernstand/Noten, Chat, Push, KI-Tutor, Abrechnung – je Zweck, Rechtsgrundlage, Daten, Empfänger, Löschfrist, Schutzmaßnahmen.
4. **Honorarvereinbarung für Helfer** (freie Mitarbeit): Aufgaben, Honorar je 45 Min., Abrechnung, Verschwiegenheit + Datenschutz-Verpflichtung, erweitertes Führungszeugnis, kein Abwerben/keine eigenen Verträge mit Kiras Familien, Kündigung; Hinweis Scheinselbstständigkeit.
5. **Geschäftsplan**: Angebot, Pakete (heute 49/79/109 €, ab Februar laut Fahrplan Plus 120 Min. 79 € / 180 Min. 99 €), Lernclub, Kooperation mit der Schülernachhilfe, Kosten je Schüler (Supabase, Cloudflare, KI), Kapazität Kira + Helfer, Preis-/Gewinnrechnung, Risiken, Meilensteine.

Alle Rechtstexte sind Entwürfe; vor dem Verschicken von IHK-Gründungsberatung/Steuerberatung (Fahrplan Dezember) prüfen lassen. Claude verschickt nichts an Eltern.

## 5. Kosten (Schätzung, Preise Anthropic direkt; Bedrock/Vertex ähnlich)

Je Nachricht ≈ 6 000 Token Wissen (zwischengespeichert) + 1 500 Token Frage/Foto + 600 Token Antwort.

| Modell | je Nachricht | 8 Schüler × 5 Nachrichten × 20 Tage |
|---|---|---|
| Claude Opus 5.5 (beste Erklärungen) | ≈ 2–3 ct | ≈ 20 € |
| Claude Sonnet 5.5 | ≈ 1 ct | ≈ 10 € |
| Claude Haiku 5.5 | ≈ 0,1 ct | unter 1 € |

Modell ist eine Einstellung (`KI_MODELL`); im Testmonat lassen sich mehrere mit denselben echten Schülerfragen vergleichen.

## 6. Reihenfolge

1. ✓ Entscheidungen
2. ✓ Wissensbasis + SQL + Edge Function + Tests
3. ✓ Testseite + Chat-Fenster
4. ✓ Datenschutzinfo, Einwilligung, Verzeichnis
5. ✓ Honorarvereinbarung, Geschäftsplan
6. Kira: Konto beim Anbieter anlegen, Schlüssel als Supabase-Secret, `tutor.sql` ausführen, Funktion bereitstellen, testen (November) → Einbau in die App erst nach Freigabe
