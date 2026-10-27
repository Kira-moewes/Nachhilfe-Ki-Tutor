# KI-Tutor für die Nachhilfe-App

Hinweise statt Lösungen – auf Basis von Kiras Merkkästen und Lösungswegen, Verarbeitung in der EU (Amazon Bedrock, Frankfurt).
Ergänzt die App [`Kira-moewes/Nachhilfe-`](https://github.com/Kira-moewes/Nachhilfe-), ohne sie zu ändern.

| Ordner | Inhalt |
|---|---|
| `PLAN.md` | Plan, Entscheidungen, Kosten |
| `EINBAU.md` | Einrichten (AWS, Supabase), Testen, Freischalten, Einbau in die App |
| `supabase/functions/tutor/` | Edge Function (`index.ts`), Regeln + Prüfungen (`logik.ts`), Wissensbasis (`wissen.ts`, erzeugt) |
| `wissen/erzeugen.py` | baut `wissen.ts` aus `lernpfad/*.js` der App |
| `sql/tutor.sql` | neue Tabellen: Zugang/Einwilligung, Tageslimit, Kosten, Protokoll (Testphase) |
| `web/` | Chat-Fenster (`tutor.js`, `tutor.css`) und Testseite für Kira |
| `tests/` | `npx deno test tests/` |
| `unterlagen/` | Datenschutzinfo, Einwilligung, Verzeichnis, Honorarvereinbarung, Geschäftsplan |
