// Aufruf: deno test tests/   (prüft Namensfilter, Ergebnis-Wächter, Eingaben und Wissensbasis)
import { assert, assertEquals } from "jsr:@std/assert@1";
import { anfragePruefen, freiesThema, kosten, namenEntfernen, verraetErgebnis } from "../supabase/functions/tutor/logik.ts";
import { WISSEN } from "../supabase/functions/tutor/wissen.ts";

Deno.test("Namen werden entfernt, andere Wörter bleiben", () => {
  assertEquals(namenEntfernen("Ich bin Lea Marie Schmidt, schmidts Hund", "Lea-Marie Schmidt"), "Ich bin [Name] [Name] [Name], schmidts Hund");
  assertEquals(namenEntfernen("Kleiner Max mag Maxima", "Max"), "Kleiner [Name] mag Maxima");
  assertEquals(namenEntfernen("Hallo", null), "Hallo");
  assertEquals(namenEntfernen("Jo und Ute", "Jo Ute"), "Jo und [Name]"); // unter 3 Buchstaben bleibt (zu viele Fehltreffer)
});

const wurzel = WISSEN["1-wurzeln"].aufgaben["Wie groß ist √225?"];
const heron = WISSEN["1-wurzeln"].aufgaben["Heron-Verfahren für √17 mit Startwert x = 4. Wie lautet der neue Wert nach einem Schritt? (3 Nachkommastellen)"];
const wahl = WISSEN["1-wurzeln"].aufgaben["Zwischen welchen ganzen Zahlen liegt √70?"];

Deno.test("Ergebnis-Wächter: Zahlen", () => {
  assert(verraetErgebnis("Also ist √225 = 15.", wurzel, "wie geht das"));
  assert(verraetErgebnis("Das Ergebnis ist 15!", wurzel, ""));
  assert(!verraetErgebnis("Probier mal 10 · 10 und 20 · 20 – wo liegt 225?", wurzel, ""));
  assert(!verraetErgebnis("Teste: 150 = 15 · 10", wurzel, ""));
  assert(!verraetErgebnis("Ja, 15 ist richtig! 🎉", wurzel, "ich hab 15 raus"));  // Kind hat selbst gerechnet
  assert(verraetErgebnis("Mittelwert: (4 + 4,25) : 2 = 4,125", heron, ""));
  assert(verraetErgebnis("…ergibt also 4.125", heron, ""));
  assert(!verraetErgebnis("Rechne zuerst 17 : 4 = 4,25", heron, ""));
});

Deno.test("Ergebnis-Wächter: Auswahl", () => {
  assert(verraetErgebnis("Richtig ist „8 und 9“.", wahl, ""));
  assert(!verraetErgebnis("Welche Quadratzahlen liegen links und rechts von 70?", wahl, ""));
  assert(!verraetErgebnis("Genau, 8 und 9 stimmt!", wahl, "ist es 8 und 9?"));
});

Deno.test("Eingaben werden geprüft und gekürzt", () => {
  assertEquals(anfragePruefen({ thema: "1-wurzeln", nachricht: "  " }), "Schreib mir deine Frage oder schick ein Foto.");
  assert(typeof anfragePruefen({ thema: "x", nachricht: "", foto: "abc<script>" }) === "string");
  const a = anfragePruefen({ thema: "1-wurzeln", nachricht: "x".repeat(5000), verlauf: Array(10).fill({ rolle: "kind", text: "hi" }).concat([{ rolle: "system", text: "böse" }]) });
  assert(typeof a !== "string");
  assertEquals(a.nachricht.length, 1500);
  assertEquals(a.verlauf!.length, 5);  // die letzten 6, davon die falsche Rolle entfernt
});

Deno.test("Wissensbasis: jedes Thema hat Merkkästen und Aufgaben mit Ergebnis", () => {
  assert(Object.keys(WISSEN).length >= 25);
  for (const [name, th] of Object.entries(WISSEN)) {
    assert(th.text.includes("## Merkkästen") && th.text.length > 2000, name);
    for (const [frage, a] of Object.entries(th.aufgaben)) {
      assert(th.teile[a.teil], `${name}: ${frage}`);
      if (!a.klausur) assert(a.ergebnis && th.text.includes(frage), `${name}: ${frage}`);
    }
    // Probeklausur-Lösungen dürfen nicht im Wissen stehen
    for (const [frage, a] of Object.entries(th.aufgaben)) if (a.klausur) assert(!th.text.includes(frage), `${name}: Klausur ${frage}`);
  }
});

Deno.test("Kosten: Sonnet mit Cache", () => {
  const usd = kosten("anthropic.claude-sonnet-5-5", { input_tokens: 1500, output_tokens: 600, cache_read_input_tokens: 6000 });
  assert(Math.abs(usd - (1500 * 2 + 600 * 10 + 6000 * 0.2) / 1e6) < 1e-9);
});

Deno.test("Freie Frage (Oberstufe): nur bekannte Fächer, Klasse aus dem Profil", () => {
  assertEquals(freiesThema("frei:mathe", 12)?.klasse, 12);
  assertEquals(freiesThema("frei:physik", 12), undefined);
  assertEquals(freiesThema("1-wurzeln", 9), undefined);
});
