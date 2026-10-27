// Form der Wissensbasis (wissen.ts, erzeugt von wissen/erzeugen.py).
export interface Aufgabe {
  teil: string;
  typ: "wahl" | "zahl";
  ergebnis?: string;     // so, wie die App es als richtige Lösung anzeigt
  antwort?: number;      // Zahlenaufgaben
  optionen?: string[];   // Auswahlaufgaben
  klausur?: boolean;     // Probeklausur: kein Tutor
}

export interface Thema {
  titel: string;
  fach: string;
  klasse: number;
  teile: Record<string, string>;
  text: string;          // Merkkästen + Lösungswege, geht als zwischengespeicherter Block an die KI
  aufgaben: Record<string, Aufgabe>;  // Schlüssel = Aufgabentext, wie ihn die App anzeigt
}
