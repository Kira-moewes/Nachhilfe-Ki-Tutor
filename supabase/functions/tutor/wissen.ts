// Automatisch erzeugt von wissen/erzeugen.py aus den Lernpfaden der App – nicht von Hand bearbeiten.
import type { Thema } from "./typen.ts";

export const WISSEN: Record<string, Thema> = {
 "1-wurzeln": {
  "titel": "Wurzeln",
  "fach": "mathe",
  "klasse": 9,
  "teile": {
   "1.1a": "Quadratzahlen und Wurzeln",
   "1.1b": "Wurzeln im Kopf",
   "1.2a": "Rational oder irrational?",
   "1.2b": "Wurzeln abschätzen",
   "1.2c": "Heron-Verfahren",
   "1.3a": "Produktregel",
   "1.3b": "Quotientenregel",
   "1.3c": "Teilweise Wurzelziehen"
  },
  "text": "# Wurzeln (Mathe, Klasse 9)\n\n## Merkkästen der Arbeitsblätter\n### 1.1a Quadratzahlen und Wurzeln\nDie Wurzel √a ist die positive Zahl, die mit sich selbst malgenommen a ergibt.\nWurzelziehen ist die Umkehrung vom Quadrieren: 7² = 49, also √49 = 7.\n1 Frage: Welche Zahl mal sich selbst ist 49?\n2 Antwort: 7 · 7 = 49\n3 Also: √49 = 7\n\n### 1.1b Wurzeln im Kopf\nBrüche: Wurzel aus Zähler und Nenner einzeln ziehen: √(4/9) = 2/3.\nDezimalzahlen: Das Ergebnis hat halb so viele Nachkommastellen.\n1 Ohne Komma denken: √9 = 3\n2 0,09 hat 2 Stellen → Ergebnis 1 Stelle\n3 √0,09 = 0,3 (Probe: 0,3 · 0,3 = 0,09)\n\n### 1.2a Rational oder irrational?\nRational: lässt sich als Bruch schreiben. Die Dezimalzahl bricht ab (0,25) oder ist periodisch (0,333… = 0,3\n).\nIrrational: unendlich viele Nachkommastellen ohne Muster, z. B. √2 = 1,41421356… oder π.\n1 Bruch? → rational\n2 Wurzel aus Quadratzahl? → rational (√49 = 7)\n3 Wurzel aus anderer Zahl? → irrational\n\n### 1.2b Wurzeln abschätzen\nSuche die Quadratzahlen direkt links und rechts von der Zahl unter der Wurzel.\n1 Nachbarn: 25 < 30 < 36\n2 Wurzeln: 5 < √30 < 6\n3 30 liegt etwa mittig → √30 ≈ 5,5\n\n### 1.2c Heron-Verfahren\nIdee: Aus einem Rechteck mit Fläche a wird Schritt für Schritt ein Quadrat. Seine Seite ist dann √a.\nNeuer Wert = (x + a : x) : 2   Beispiel √10 mit Startwert x = 3:\n1 10 : 3 ≈ 3,333\n2 (3 + 3,333) : 2 ≈ 3,167\n3 Wiederholen → 3,1623 ✓\n\n### 1.3a Produktregel\nWurzeln darf man beim Malnehmen zusammenfassen: √a · √b = √(a · b)\nDas geht auch rückwärts. Aber Achtung: nicht bei Plus und Minus!\n1 Zusammenfassen: √2 · √8 = √(2 · 8)\n2 Ausrechnen: = √16\n3 Wurzel ziehen: = 4\n\n### 1.3b Quotientenregel\nWurzeln darf man beim Teilen zusammenfassen: √a : √b = √(a : b)\nDas geht auch rückwärts: √(a : b) = √a : √b. Aber wieder: nicht bei Plus und Minus!\n1 Zusammenfassen: √72 : √2 = √(72 : 2)\n2 Ausrechnen: = √36\n3 Wurzel ziehen: = 6\n\n### 1.3c Teilweise Wurzelziehen\nZerlege die Zahl unter der Wurzel so, dass eine Quadratzahl als Faktor drinsteckt – am besten die größte.\n1 Zerlegen: 50 = 25 · 2\n2 Aufteilen: √50 = √25 · √2\n3 Ergebnis: 5 · √2 = 5√2\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 1.1a Quadratzahlen und Wurzeln] Wie groß ist √225?\n  Ergebnis: 15\n  Weg: Die Wurzel fragt: Welche positive Zahl ergibt mit sich selbst malgenommen 225? Weil 10 · 10 = 100 und 20 · 20 = 400, liegt das Ergebnis zwischen 10 und 20; die Endziffer 5 passt zu 5 · 5 = 25. Also 15: 15 · 15 = 225 ✓. Achtung: Wurzel ziehen ist nicht halbieren (225 : 2 wäre falsch).\n- [Einstiegsquiz, 1.1b Wurzeln im Kopf] Wie groß ist √0,49? Auswahl: 0,7 | 0,07 | 0,245 | 7\n  Ergebnis: 0,7\n  Weg: Beim Wurzelziehen aus einer Dezimalzahl hat das Ergebnis halb so viele Nachkommastellen wie die Zahl. 0,49 hat 2 Nachkommastellen → √49 = 7, Ergebnis mit 1 Stelle: 0,7. Probe: 0,7 · 0,7 = 0,49 ✓. Achtung: 0,07 wäre falsch, denn 0,07 · 0,07 = 0,0049.\n- [Einstiegsquiz, 1.2a Rational oder irrational?] Welche dieser Zahlen ist irrational? Auswahl: √36 | √(9/4) | √10 | 0,25\n  Ergebnis: √10\n  Weg: Irrational heißt: nicht als Bruch schreibbar, die Nachkommastellen hören nie auf und wiederholen sich nicht. Das passiert bei Wurzeln aus Zahlen, die keine Quadratzahl (oder Bruch aus Quadratzahlen) sind. √36 = 6, √(9/4) = 3/2 und 0,25 = 1/4 sind Brüche → rational. 10 liegt zwischen 3² = 9 und 4² = 16, also ist √10 ≈ 3,162… irrational.\n- [Einstiegsquiz, 1.2b Wurzeln abschätzen] Zwischen welchen ganzen Zahlen liegt √70? Auswahl: 7 und 8 | 8 und 9 | 9 und 10 | 35 und 36\n  Ergebnis: 8 und 9\n  Weg: Die Wurzel liegt zwischen den Wurzeln der Quadratzahlen links und rechts von der Zahl. 8² = 64 und 9² = 81, also 64 < 70 < 81 → 8 < √70 < 9. Achtung: „7 und 8“ wäre falsch, denn schon 8² = 64 ist kleiner als 70.\n- [Einstiegsquiz, 1.2c Heron-Verfahren] Heron-Verfahren für √17 mit Startwert x = 4. Wie lautet der neue Wert nach einem Schritt? (3 Nachkommastellen)\n  Ergebnis: 4,125\n  Weg: Beim Heron-Verfahren nimmst du den Mittelwert aus x und a : x. Ist x zu klein, ist a : x zu groß (und umgekehrt), der Mittelwert liegt also näher an √a. 17 : 4 = 4,25 → (4 + 4,25) : 2 = 8,25 : 2 = 4,125. Probe: 4,125² ≈ 17,02 – schon sehr nah an 17 ✓.\n- [Einstiegsquiz, 1.3a Produktregel] Berechne √8 · √18.\n  Ergebnis: 12\n  Weg: Produktregel: √a · √b = √(a · b). Man darf zwei Wurzeln beim Malnehmen unter einer Wurzel zusammenfassen. √8 · √18 = √(8 · 18) = √144 = 12. Probe: 12 · 12 = 144 ✓.\n- [Einstiegsquiz, 1.3b Quotientenregel] Wie groß ist √90 : √10? Auswahl: 3 | 9 | 8 | √80\n  Ergebnis: 3\n  Weg: Quotientenregel: √a : √b = √(a : b). Beim Teilen darf man unter einer Wurzel zusammenfassen. √90 : √10 = √(90 : 10) = √9 = 3. Achtung: 9 wäre falsch, denn 90 : 10 = 9 steht noch unter der Wurzel – danach muss noch √9 = 3 gezogen werden.\n- [Einstiegsquiz, 1.3c Teilweise Wurzelziehen] Wie lautet √45 vollständig vereinfacht? Auswahl: 3√5 | 5√3 | 9√5 | 15√3\n  Ergebnis: 3√5\n  Weg: Teilweises Wurzelziehen: Zerlege die Zahl unter der Wurzel in eine Quadratzahl mal einen Rest, dann kannst du aus der Quadratzahl die Wurzel ziehen. 45 = 9 · 5 → √45 = √9 · √5 = 3√5. Probe: (3√5)² = 9 · 5 = 45 ✓. Achtung: 9√5 wäre falsch, denn aus der 9 wird √9 = 3.\n- [Übungsaufgaben 1, 1.1a Quadratzahlen und Wurzeln] Ein quadratischer Spielplatz ist 256 m² groß und soll rundherum eingezäunt werden. Wie viele Meter Zaun braucht man?\n  Ergebnis: 64 m\n  Weg: Die Seite eines Quadrats ist die Wurzel aus dem Flächeninhalt, weil A = a · a. Der Zaun geht um alle vier Seiten (Umfang). a = √256 = 16 m (16 · 16 = 256), Umfang u = 4 · a = 4 · 16 = 64 m. Achtung: 16 m ist nur eine Seite, der Zaun braucht alle vier.\n- [Übungsaufgaben 1, 1.1b Wurzeln im Kopf] Eine quadratische Fliese hat eine Fläche von 0,64 m². Wie viele Fliesen passen nebeneinander an eine 4,8 m lange Wand? Auswahl: 6 Fliesen | 8 Fliesen | 3 Fliesen | 60 Fliesen\n  Ergebnis: 6 Fliesen\n  Weg: Eine quadratische Fliese hat die Seitenlänge a = √A, weil A = a · a. a = √0,64 = 0,8 m (0,8 · 0,8 = 0,64). Auf die Wand: 4,8 : 0,8 = 48 : 8 = 6 Fliesen. Achtung: 60 käme von √0,64 = 0,08 – aber 0,08 · 0,08 = 0,0064, nicht 0,64.\n- [Übungsaufgaben 1, 1.2a Rational oder irrational?] Lena sagt: „√50 ist rational, denn mein Taschenrechner zeigt nur 7,0710678 an und hört dann auf.“ Was stimmt? Auswahl: Falsch: 50 ist keine Quadratzahl, √50 hat unendlich viele Nachkommastellen ohne Muster | Richtig, die Anzeige endet ja | Falsch, denn 7² = 50 | Richtig, weil 50 gerade ist\n  Ergebnis: Falsch: 50 ist keine Quadratzahl, √50 hat unendlich viele Nachkommastellen ohne Muster\n  Weg: Irrational heißt: unendlich viele Nachkommastellen ohne Muster. Ein Taschenrechner zeigt aber nur etwa 8 bis 10 Stellen und schneidet dann ab. 50 ist keine Quadratzahl (7² = 49, 8² = 64), also ist √50 ≈ 7,0710678… irrational. Achtung: Dass die Anzeige endet, beweist nicht, dass die Zahl rational ist.\n- [Übungsaufgaben 1, 1.2b Wurzeln abschätzen] Eine quadratische Wiese hat 55 m². Schätze die Seitenlänge und gib sie auf eine Nachkommastelle gerundet an.\n  Ergebnis: 7,4 m\n  Weg: Liegt eine Zahl zwischen zwei Quadratzahlen, liegt ihre Wurzel zwischen deren Wurzeln. 49 < 55 < 64 → 7 < √55 < 8. 55 ist näher an 49, also eher bei 7. Taschenrechner: √55 ≈ 7,416 → 7,4 m. Probe: 7,4² = 54,76 ≈ 55 ✓.\n- [Übungsaufgaben 1, 1.2c Heron-Verfahren] Heron-Verfahren für √12 mit Startwert 3: Wie lautet der Wert nach dem zweiten Schritt? (4 Nachkommastellen)\n  Ergebnis: 3,4643\n  Weg: Heron: Der neue Wert ist der Mittelwert aus x und a : x – jeder Schritt kommt √12 näher. 1. Schritt: 12 : 3 = 4 → (3 + 4) : 2 = 3,5. 2. Schritt: 12 : 3,5 ≈ 3,4286 → (3,5 + 3,4286) : 2 ≈ 3,4643. Probe: √12 ≈ 3,4641 – sehr nah ✓.\n- [Übungsaufgaben 1, 1.3a Produktregel] Ein rechteckiges Beet ist √7 m lang und √28 m breit. Wie groß ist seine Fläche?\n  Ergebnis: 14 m²\n  Weg: Produktregel: √a · √b = √(a · b). Die Fläche eines Rechtecks ist Länge mal Breite. A = √7 · √28 = √(7 · 28) = √196 = 14 m² (14 · 14 = 196). Achtung: Nicht √7 + √28 rechnen – Flächen werden malgenommen.\n- [Übungsaufgaben 1, 1.3b Quotientenregel] Wie kann man √(49/9) schreiben? Auswahl: 7/3 | 49/3 | 7/9 | √40\n  Ergebnis: 7/3\n  Weg: Quotientenregel rückwärts: √(a/b) = √a : √b – Zähler und Nenner bekommen jeweils ihre eigene Wurzel. √(49/9) = √49 : √9 = 7/3. Probe: (7/3)² = 49/9 ✓. Achtung: 49/3 oder 7/9 wären falsch, weil nur eine der beiden Zahlen die Wurzel bekommen hätte.\n- [Übungsaufgaben 1, 1.3c Teilweise Wurzelziehen] Vereinfache √80 = a · √5. Wie groß ist a?\n  Ergebnis: 4\n  Weg: Teilweises Wurzelziehen: Zerlege 80 in eine Quadratzahl mal einen Rest, dann ziehe aus der Quadratzahl die Wurzel. 80 = 16 · 5 → √80 = √16 · √5 = 4√5, also a = 4. Probe: (4√5)² = 16 · 5 = 80 ✓.\n- [Abschlussquiz, 1.1a Quadratzahlen und Wurzeln] Welche dieser Zahlen ist keine Quadratzahl? Auswahl: 121 | 144 | 150 | 169\n  Ergebnis: 150\n  Weg: Quadratzahlen sind Zahlen n · n mit ganzem n. Ob eine Zahl dazugehört, siehst du, wenn sie genau auf einer Quadratzahl landet. 11² = 121, 12² = 144 und 13² = 169 sind Quadratzahlen. 150 liegt dazwischen (144 < 150 < 169), ist also keine.\n- [Abschlussquiz, 1.1b Wurzeln im Kopf] Wie groß ist √(81/100)? (als Dezimalzahl)\n  Ergebnis: 0,9\n  Weg: Bei Brüchen darfst du Zähler und Nenner einzeln wurzeln: √(a/b) = √a : √b. √81 = 9 und √100 = 10 → 9/10 = 0,9. Probe: 0,9 · 0,9 = 0,81 = 81/100 ✓.\n- [Abschlussquiz, 1.2a Rational oder irrational?] Welche dieser Zahlen ist rational? Auswahl: √2 | π | √(16/25) | 0,1234567… (ohne Muster)\n  Ergebnis: √(16/25)\n  Weg: Rational heißt: als Bruch schreibbar. Wurzeln aus Quadratzahlen oder aus Brüchen von Quadratzahlen sind rational. √(16/25) = 4/5 ist ein Bruch → rational. √2, π und 0,1234567… haben unendlich viele Stellen ohne Muster → irrational.\n- [Abschlussquiz, 1.2b Wurzeln abschätzen] Gib √40 mit dem Taschenrechner an. (2 Nachkommastellen)\n  Ergebnis: 6,32\n  Weg: Erst mit Quadratzahlen einschließen, dann den Taschenrechner nutzen. 6² = 36 < 40 < 49 = 7², also liegt √40 zwischen 6 und 7; √40 ≈ 6,3246 → gerundet 6,32. Probe: 6,32² = 39,94 ≈ 40 ✓.\n- [Abschlussquiz, 1.2c Heron-Verfahren] Wie lautet beim Heron-Verfahren für √a mit Startwert x der neue Wert? Auswahl: (x + a : x) : 2 | (x + a) : 2 | x · a : 2 | (x − a : x) : 2\n  Ergebnis: (x + a : x) : 2\n  Weg: Ist x zu klein, ist a : x zu groß (denn x · (a : x) = a). Der Mittelwert der beiden liegt dazwischen und ist die bessere Näherung. Darum (x + a : x) : 2. Achtung: (x + a) : 2 verwendet a statt a : x, und bei (x − a : x) : 2 wird abgezogen statt der Mittelwert gebildet.\n- [Abschlussquiz, 1.3a Produktregel] Welche Rechnung stimmt? Auswahl: √4 + √9 = √13 | √4 · √9 = √36 | √9 · √16 = √25 | √(4 + 9) = √4 + √9\n  Ergebnis: √4 · √9 = √36\n  Weg: Die Produktregel gilt nur beim Malnehmen, nicht beim Addieren. √4 · √9 = √36 = 6, und tatsächlich 2 · 3 = 6 ✓. Achtung: √4 + √9 = 2 + 3 = 5, aber √13 ≈ 3,61 – Summen darf man nicht unter einer Wurzel zusammenfassen.\n- [Abschlussquiz, 1.3b Quotientenregel] Berechne √32 : √2.\n  Ergebnis: 4\n  Weg: Quotientenregel: √a : √b = √(a : b). √32 : √2 = √(32 : 2) = √16 = 4. Probe: 4 · √2 = √16 · √2 = √32 ✓.\n- [Abschlussquiz, 1.3c Teilweise Wurzelziehen] Vereinfache √125 = a · √5. Wie groß ist a?\n  Ergebnis: 5\n  Weg: Zerlege 125 in eine Quadratzahl mal einen Rest: 125 = 25 · 5. Dann ist √125 = √25 · √5 = 5√5, also a = 5. Probe: (5√5)² = 25 · 5 = 125 ✓.\n- [Übungsaufgaben 2, 1.1a Quadratzahlen und Wurzeln] Ein quadratisches Bild hat eine Fläche von 625 cm². Wie lang ist eine Holzleiste für den Rahmen rundherum? Auswahl: 100 cm | 25 cm | 156,25 cm | 625 cm\n  Ergebnis: 100 cm\n  Weg: Die Seitenlänge ist die Wurzel aus der Fläche. Die Leiste läuft rundherum, also um alle vier Seiten. √625 = 25 cm (25 · 25 = 625), Umfang 4 · 25 = 100 cm. Achtung: 25 cm ist nur eine Seite; 156,25 cm wäre 625 : 4 – das ist keine Seitenlänge.\n- [Übungsaufgaben 2, 1.1b Wurzeln im Kopf] Eine quadratische Solarplatte hat eine Fläche von 1,21 m². Wie lang ist eine Seite?\n  Ergebnis: 1,1 m\n  Weg: Eine quadratische Platte mit Fläche A hat die Seitenlänge √A. Bei Dezimalzahlen hat die Wurzel halb so viele Nachkommastellen: 1,21 hat 2, √1,21 hat 1. √121 = 11 → √1,21 = 1,1 m. Probe: 1,1 · 1,1 = 1,21 ✓.\n- [Übungsaufgaben 2, 1.2a Rational oder irrational?] Ein Quadrat hat die Seitenlänge 1 m, seine Diagonale ist √2 m lang. Was stimmt? Auswahl: Die Länge ist irrational, sie lässt sich nicht als Bruch schreiben | Die Länge ist genau 1,41 m | Die Länge ist genau 7/5 m | Länge kann man messen, also ist sie rational\n  Ergebnis: Die Länge ist irrational, sie lässt sich nicht als Bruch schreiben\n  Weg: Irrational heißt: nicht als Bruch schreibbar. Näherungen wie 1,41 oder 7/5 treffen die 2 nie genau, wenn man sie quadriert. 1,41² = 1,9881 und (7/5)² = 1,96 – beide ungleich 2. √2 ≈ 1,41421356… hat unendlich viele Stellen ohne Muster. Also ist die Diagonale irrational.\n- [Übungsaufgaben 2, 1.2b Wurzeln abschätzen] Ein quadratisches Zimmer hat 45 m². Wie lang ist eine Wand ungefähr? (1 Nachkommastelle)\n  Ergebnis: 6,7 m\n  Weg: Zwischen zwei Quadratzahlen einschließen: 36 < 45 < 49 → 6 < √45 < 7. 45 liegt näher an 49, also eher bei 7. Taschenrechner: √45 ≈ 6,708 → 6,7 m. Probe: 6,7² = 44,89 ≈ 45 ✓.\n- [Übungsaufgaben 2, 1.2c Heron-Verfahren] Heron-Verfahren für √6 mit Startwert 2: Wie lautet der Wert nach dem zweiten Schritt? (2 Nachkommastellen)\n  Ergebnis: 2,45\n  Weg: Heron: Mittelwert aus x und a : x – jeder Schritt wird genauer. 1. Schritt: 6 : 2 = 3 → (2 + 3) : 2 = 2,5. 2. Schritt: 6 : 2,5 = 2,4 → (2,5 + 2,4) : 2 = 2,45. Probe: √6 ≈ 2,449 ✓.\n- [Übungsaufgaben 2, 1.3a Produktregel] Ein Rechteck ist √12 m lang und √3 m breit. Wie groß ist die Fläche? Auswahl: 6 m² | 15 m² | √15 m² | 4 m²\n  Ergebnis: 6 m²\n  Weg: Produktregel: √a · √b = √(a · b). Fläche = Länge · Breite. √12 · √3 = √36 = 6 m². Achtung: 15 wäre 12 + 3 (addiert), 4 wäre 12 : 3 – gefragt ist aber das Produkt.\n- [Übungsaufgaben 2, 1.3b Quotientenregel] Quadrat A hat 288 cm², Quadrat B hat 2 cm². Wie oft passt die Seite von B in die Seite von A?\n  Ergebnis: 12\n  Weg: Die Seite eines Quadrats ist √A. Wie oft die kleine Seite in die große passt, sagt der Quotient, und √a : √b = √(a : b). √288 : √2 = √(288 : 2) = √144 = 12. Probe: 12 · √2 = √(144 · 2) = √288 ✓.\n- [Übungsaufgaben 2, 1.3c Teilweise Wurzelziehen] Eine quadratische Wiese hat 75 m². Schreibe die Seite als a · √3 und gib sie gerundet an. (2 Nachkommastellen)\n  Ergebnis: 8,66 m\n  Weg: Teilweises Wurzelziehen: 75 = 25 · 3, und 25 ist eine Quadratzahl → √75 = √25 · √3 = 5√3. Mit √3 ≈ 1,7321: 5 · 1,7321 ≈ 8,66 m. Probe: 8,66² ≈ 75 ✓.",
  "aufgaben": {
   "Wie groß ist √225?": {
    "teil": "1.1a",
    "typ": "zahl",
    "ergebnis": "15",
    "antwort": 15
   },
   "Wie groß ist √0,49?": {
    "teil": "1.1b",
    "typ": "wahl",
    "ergebnis": "0,7",
    "optionen": [
     "0,7",
     "0,07",
     "0,245",
     "7"
    ]
   },
   "Welche dieser Zahlen ist irrational?": {
    "teil": "1.2a",
    "typ": "wahl",
    "ergebnis": "√10",
    "optionen": [
     "√36",
     "√(9/4)",
     "√10",
     "0,25"
    ]
   },
   "Zwischen welchen ganzen Zahlen liegt √70?": {
    "teil": "1.2b",
    "typ": "wahl",
    "ergebnis": "8 und 9",
    "optionen": [
     "7 und 8",
     "8 und 9",
     "9 und 10",
     "35 und 36"
    ]
   },
   "Heron-Verfahren für √17 mit Startwert x = 4. Wie lautet der neue Wert nach einem Schritt? (3 Nachkommastellen)": {
    "teil": "1.2c",
    "typ": "zahl",
    "ergebnis": "4,125",
    "antwort": 4.125
   },
   "Berechne √8 · √18.": {
    "teil": "1.3a",
    "typ": "zahl",
    "ergebnis": "12",
    "antwort": 12
   },
   "Wie groß ist √90 : √10?": {
    "teil": "1.3b",
    "typ": "wahl",
    "ergebnis": "3",
    "optionen": [
     "3",
     "9",
     "8",
     "√80"
    ]
   },
   "Wie lautet √45 vollständig vereinfacht?": {
    "teil": "1.3c",
    "typ": "wahl",
    "ergebnis": "3√5",
    "optionen": [
     "3√5",
     "5√3",
     "9√5",
     "15√3"
    ]
   },
   "Ein quadratischer Spielplatz ist 256 m² groß und soll rundherum eingezäunt werden. Wie viele Meter Zaun braucht man?": {
    "teil": "1.1a",
    "typ": "zahl",
    "ergebnis": "64 m",
    "antwort": 64
   },
   "Eine quadratische Fliese hat eine Fläche von 0,64 m². Wie viele Fliesen passen nebeneinander an eine 4,8 m lange Wand?": {
    "teil": "1.1b",
    "typ": "wahl",
    "ergebnis": "6 Fliesen",
    "optionen": [
     "6 Fliesen",
     "8 Fliesen",
     "3 Fliesen",
     "60 Fliesen"
    ]
   },
   "Lena sagt: „√50 ist rational, denn mein Taschenrechner zeigt nur 7,0710678 an und hört dann auf.“ Was stimmt?": {
    "teil": "1.2a",
    "typ": "wahl",
    "ergebnis": "Falsch: 50 ist keine Quadratzahl, √50 hat unendlich viele Nachkommastellen ohne Muster",
    "optionen": [
     "Falsch: 50 ist keine Quadratzahl, √50 hat unendlich viele Nachkommastellen ohne Muster",
     "Richtig, die Anzeige endet ja",
     "Falsch, denn 7² = 50",
     "Richtig, weil 50 gerade ist"
    ]
   },
   "Eine quadratische Wiese hat 55 m². Schätze die Seitenlänge und gib sie auf eine Nachkommastelle gerundet an.": {
    "teil": "1.2b",
    "typ": "zahl",
    "ergebnis": "7,4 m",
    "antwort": 7.4
   },
   "Heron-Verfahren für √12 mit Startwert 3: Wie lautet der Wert nach dem zweiten Schritt? (4 Nachkommastellen)": {
    "teil": "1.2c",
    "typ": "zahl",
    "ergebnis": "3,4643",
    "antwort": 3.4643
   },
   "Ein rechteckiges Beet ist √7 m lang und √28 m breit. Wie groß ist seine Fläche?": {
    "teil": "1.3a",
    "typ": "zahl",
    "ergebnis": "14 m²",
    "antwort": 14
   },
   "Wie kann man √(49/9) schreiben?": {
    "teil": "1.3b",
    "typ": "wahl",
    "ergebnis": "7/3",
    "optionen": [
     "7/3",
     "49/3",
     "7/9",
     "√40"
    ]
   },
   "Vereinfache √80 = a · √5. Wie groß ist a?": {
    "teil": "1.3c",
    "typ": "zahl",
    "ergebnis": "4",
    "antwort": 4
   },
   "Welche dieser Zahlen ist keine Quadratzahl?": {
    "teil": "1.1a",
    "typ": "wahl",
    "ergebnis": "150",
    "optionen": [
     "121",
     "144",
     "150",
     "169"
    ]
   },
   "Wie groß ist √(81/100)? (als Dezimalzahl)": {
    "teil": "1.1b",
    "typ": "zahl",
    "ergebnis": "0,9",
    "antwort": 0.9
   },
   "Welche dieser Zahlen ist rational?": {
    "teil": "1.2a",
    "typ": "wahl",
    "ergebnis": "√(16/25)",
    "optionen": [
     "√2",
     "π",
     "√(16/25)",
     "0,1234567… (ohne Muster)"
    ]
   },
   "Gib √40 mit dem Taschenrechner an. (2 Nachkommastellen)": {
    "teil": "1.2b",
    "typ": "zahl",
    "ergebnis": "6,32",
    "antwort": 6.32
   },
   "Wie lautet beim Heron-Verfahren für √a mit Startwert x der neue Wert?": {
    "teil": "1.2c",
    "typ": "wahl",
    "ergebnis": "(x + a : x) : 2",
    "optionen": [
     "(x + a : x) : 2",
     "(x + a) : 2",
     "x · a : 2",
     "(x − a : x) : 2"
    ]
   },
   "Welche Rechnung stimmt?": {
    "teil": "1.3a",
    "typ": "wahl",
    "ergebnis": "√4 · √9 = √36",
    "optionen": [
     "√4 + √9 = √13",
     "√4 · √9 = √36",
     "√9 · √16 = √25",
     "√(4 + 9) = √4 + √9"
    ]
   },
   "Berechne √32 : √2.": {
    "teil": "1.3b",
    "typ": "zahl",
    "ergebnis": "4",
    "antwort": 4
   },
   "Vereinfache √125 = a · √5. Wie groß ist a?": {
    "teil": "1.3c",
    "typ": "zahl",
    "ergebnis": "5",
    "antwort": 5
   },
   "Ein quadratisches Bild hat eine Fläche von 625 cm². Wie lang ist eine Holzleiste für den Rahmen rundherum?": {
    "teil": "1.1a",
    "typ": "wahl",
    "ergebnis": "100 cm",
    "optionen": [
     "100 cm",
     "25 cm",
     "156,25 cm",
     "625 cm"
    ]
   },
   "Eine quadratische Solarplatte hat eine Fläche von 1,21 m². Wie lang ist eine Seite?": {
    "teil": "1.1b",
    "typ": "zahl",
    "ergebnis": "1,1 m",
    "antwort": 1.1
   },
   "Ein Quadrat hat die Seitenlänge 1 m, seine Diagonale ist √2 m lang. Was stimmt?": {
    "teil": "1.2a",
    "typ": "wahl",
    "ergebnis": "Die Länge ist irrational, sie lässt sich nicht als Bruch schreiben",
    "optionen": [
     "Die Länge ist irrational, sie lässt sich nicht als Bruch schreiben",
     "Die Länge ist genau 1,41 m",
     "Die Länge ist genau 7/5 m",
     "Länge kann man messen, also ist sie rational"
    ]
   },
   "Ein quadratisches Zimmer hat 45 m². Wie lang ist eine Wand ungefähr? (1 Nachkommastelle)": {
    "teil": "1.2b",
    "typ": "zahl",
    "ergebnis": "6,7 m",
    "antwort": 6.7
   },
   "Heron-Verfahren für √6 mit Startwert 2: Wie lautet der Wert nach dem zweiten Schritt? (2 Nachkommastellen)": {
    "teil": "1.2c",
    "typ": "zahl",
    "ergebnis": "2,45",
    "antwort": 2.45
   },
   "Ein Rechteck ist √12 m lang und √3 m breit. Wie groß ist die Fläche?": {
    "teil": "1.3a",
    "typ": "wahl",
    "ergebnis": "6 m²",
    "optionen": [
     "6 m²",
     "15 m²",
     "√15 m²",
     "4 m²"
    ]
   },
   "Quadrat A hat 288 cm², Quadrat B hat 2 cm². Wie oft passt die Seite von B in die Seite von A?": {
    "teil": "1.3b",
    "typ": "zahl",
    "ergebnis": "12",
    "antwort": 12
   },
   "Eine quadratische Wiese hat 75 m². Schreibe die Seite als a · √3 und gib sie gerundet an. (2 Nachkommastellen)": {
    "teil": "1.3c",
    "typ": "zahl",
    "ergebnis": "8,66 m",
    "antwort": 8.66
   },
   "Ein quadratisches Feld ist 1 764 m² groß. Wie viele Meter Zaun braucht man rundherum?": {
    "teil": "1.1a",
    "typ": "zahl",
    "klausur": true
   },
   "Berechne √0,0144 + √1,44.": {
    "teil": "1.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Welche Aussage stimmt?": {
    "teil": "1.2a",
    "typ": "wahl",
    "klausur": true
   },
   "Gib √130 auf eine ganze Zahl gerundet an.": {
    "teil": "1.2b",
    "typ": "zahl",
    "klausur": true
   },
   "Heron-Verfahren für √8 mit Startwert 3: Wie lautet der Wert nach einem Schritt? (4 Nachkommastellen)": {
    "teil": "1.2c",
    "typ": "zahl",
    "klausur": true
   },
   "Berechne √2 · √50 + √3 · √27.": {
    "teil": "1.3a",
    "typ": "zahl",
    "klausur": true
   },
   "Berechne √242 : √2 − √18 : √2.": {
    "teil": "1.3b",
    "typ": "zahl",
    "klausur": true
   },
   "Vereinfache √180 vollständig und berechne dann √180 − 4√5. (2 Nachkommastellen)": {
    "teil": "1.3c",
    "typ": "zahl",
    "klausur": true
   }
  }
 },
 "2-quadratische-funktionen": {
  "titel": "Quadratische Funktionen",
  "fach": "mathe",
  "klasse": 9,
  "teile": {
   "2.1a": "Wertetabelle und Graph",
   "2.1b": "Eigenschaften der Normalparabel",
   "2.1c": "Linear, antiproportional oder quadratisch?",
   "2.2a": "Strecken, Stauchen, Spiegeln",
   "2.2b": "Nach oben und unten verschieben",
   "2.2c": "Nach links und rechts verschieben",
   "2.3a": "Scheitelpunkt ablesen",
   "2.3b": "Vom Graphen zum Term",
   "2.4a": "In Normalform umwandeln",
   "2.4b": "Quadratische Ergänzung",
   "2.5a": "Nullstellen bestimmen",
   "2.5b": "Die größte Fläche",
   "2.5c": "Parabeln im Alltag"
  },
  "text": "# Quadratische Funktionen (Mathe, Klasse 9)\n\n## Merkkästen der Arbeitsblätter\n### 2.1a Wertetabelle und Graph\nBei f(x) = x²\nwird jeder x-Wert quadriert. Der Graph heißt Normalparabel.\nAchtung: Auch negative Zahlen werden beim Quadrieren positiv.\n1 x wählen: x = −2\n2 Quadrieren: (−2)² = 4\n3 Punkt eintragen: (−2 | 4)\n\n### 2.1b Eigenschaften der Normalparabel\nDer tiefste Punkt heißt Scheitelpunkt: S(0 | 0)\nDie Parabel ist symmetrisch zur y-Achse und nach oben geöffnet.\n1 Scheitel: S(0 | 0)\n2 Symmetrie: f(−2) = f(2) = 4\n3 Öffnung: nach oben\n\n### 2.1c Linear, antiproportional oder quadratisch?\nLinear: gleiche x-Schritte → y wächst immer gleich viel (Gerade).\nAntiproportional: x · y ist immer gleich (Hyperbel).   Quadratisch: y = a · x² (Parabel).\n1 Differenzen gleich? → linear\n2 Produkte x · y gleich? → antiproportional\n3 y : x² gleich? → quadratisch\n\n### 2.2a Strecken, Stauchen, Spiegeln\nBei f(x) = a · x²\nbestimmt a die Form:\na > 1: schmaler (gestreckt)   0 < a < 1: breiter (gestaucht)   a negativ: nach unten geöffnet\n1 Beispiel f(x) = 2x²\n2 x = 2: 2 · 2² = 8\n3 8 statt 4 → schmaler\n\n### 2.2b Nach oben und unten verschieben\nBei f(x) = x² + e\nwird die Normalparabel senkrecht verschoben:\n+ e: nach oben   − e: nach unten. Der Scheitelpunkt ist S(0 | e).\n1 f(x) = x² − 3\n2 um 3 nach unten\n3 S(0 | −3)\n\n### 2.2c Nach links und rechts verschieben\nBei f(x) = (x − d)²\nwird die Normalparabel waagerecht verschoben. Der Scheitel ist S(d | 0).\nAchtung, umgekehrt: (x − 3)² → nach rechts   (x + 3)² → nach links\n1 Wann ist die Klammer 0? x − 3 = 0 → x = 3\n2 3 nach rechts\n3 S(3 | 0)\n\n### 2.3a Scheitelpunkt ablesen\nScheitelpunktform: f(x) = a · (x − d)² + e\n→   S(d | e)\nBei d das Vorzeichen umdrehen, e bleibt. a sagt: Öffnung und Form.\n1 f(x) = 2(x − 1)² + 3\n2 d = 1, e = 3 → S(1 | 3)\n3 a = 2: nach oben, schmaler\n\n### 2.3b Vom Graphen zum Term\nSo findest du den Term einer Parabel im Koordinatensystem:\nf(x) = a · (x − d)² + e\n1 Scheitel ablesen: S(2 | 1)\n2 Vom Scheitel 1 nach rechts: 2 hoch → a = 2\n3 f(x) = 2(x − 2)² + 1\n\n### 2.4a In Normalform umwandeln\nMit der binomischen Formel (x − d)² = x² − 2dx + d²\nwird aus der Scheitelpunktform die Normalform x² + px + q.\n1 (x − 3)² + 2\n2 = x² − 6x + 9 + 2\n3 = x² − 6x + 11\n\n### 2.4b Quadratische Ergänzung\nVon der Normalform zurück zum Scheitel: Ergänze so, dass eine binomische Formel entsteht.\nx² + 6x + 5\nHälfte von 6 ist 3, und 3² = 9\n1 + 9 − 9 einfügen: x² + 6x + 9 − 9 + 5\n2 Formel: (x + 3)² − 4\n3 S(−3 | −4)\n\n### 2.5a Nullstellen bestimmen\nNullstellen sind die Stellen, an denen der Graph die x-Achse schneidet. Dort ist f(x) = 0\n.\nEine Parabel hat 2, 1 oder keine Nullstelle.\n1 x² − 9 = 0\n2 x² = 9\n3 x = 3 oder x = −3\n\n### 2.5b Die größte Fläche\nGesucht ist ein größter oder kleinster Wert? Term aufstellen, Scheitel finden!\nBeispiel: 20 m Zaun für ein Rechteck. Seite x, andere Seite 10 − x.\n1 A(x) = x · (10 − x) = −x² + 10x\n2 = −(x − 5)² + 25\n3 x = 5 m → größte Fläche 25 m²\n\n### 2.5c Parabeln im Alltag\nWürfe, Wasserstrahlen und Brückenbögen sind Parabeln. Der Scheitel ist der höchste Punkt, die Nullstellen sind Start und Landung.\nAuch der Bremsweg wächst quadratisch: Bremsweg ≈ (v : 10)²\n(v in km/h, Weg in m)\n1 v = 50 km/h: 50 : 10 = 5\n2 Quadrieren: 5² = 25\n3 Bremsweg ≈ 25 m\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 2.1a Wertetabelle und Graph] Gegeben ist f(x) = x². Wie groß ist f(−7)?\n  Ergebnis: 49\n  Weg: Quadrieren heißt: eine Zahl mit sich selbst malnehmen. Minus mal Minus ergibt Plus, darum ist ein Quadrat nie negativ. f(−7) = (−7)² = (−7) · (−7) = 49. Achtung: −49 wäre falsch, denn die Klammer gehört zum Quadrat: (−7)² = 49, aber −7² (ohne Klammer) wäre −49.\n- [Einstiegsquiz, 2.1b Eigenschaften der Normalparabel] Der Punkt (2,5 | 6,25) liegt auf der Normalparabel. Welcher Punkt ist sein Spiegelpunkt an der y-Achse? Auswahl: (−2,5 | 6,25) | (2,5 | −6,25) | (−2,5 | −6,25) | (6,25 | 2,5)\n  Ergebnis: (−2,5 | 6,25)\n  Weg: Die Normalparabel ist symmetrisch zur y-Achse: Zu jedem Punkt (x | y) gehört der Punkt (−x | y), weil (−x)² = x² ist. Also nur das Vorzeichen von x umdrehen, y bleibt gleich: (2,5 | 6,25) → (−2,5 | 6,25). Probe: (−2,5)² = 6,25 ✓. Achtung: (2,5 | −6,25) wäre die Spiegelung an der x-Achse – die liegt gar nicht auf der Normalparabel.\n- [Einstiegsquiz, 2.1c Linear, antiproportional oder quadratisch?] Eine Tabelle zeigt x = 1, 2, 3, 4 und y = 12, 6, 4, 3. Welcher Typ ist das? Auswahl: linear | antiproportional | quadratisch\n  Ergebnis: antiproportional\n  Weg: Antiproportional heißt: Wird x größer, wird y im gleichen Verhältnis kleiner – das Produkt x · y bleibt gleich. 1 · 12 = 2 · 6 = 3 · 4 = 4 · 3 = 12 → immer 12. Achtung: Nicht linear (y sinkt um −6, −2, −1, also nicht gleichmäßig) und nicht quadratisch (y wächst nicht).\n- [Einstiegsquiz, 2.2a Strecken, Stauchen, Spiegeln] Welche Parabel ist nach unten geöffnet und schmaler als die Normalparabel? Auswahl: f(x) = −3x² | f(x) = −0,3x² | f(x) = 3x² | f(x) = 0,3x²\n  Ergebnis: f(x) = −3x²\n  Weg: Der Faktor a in a · x² bestimmt die Form: a < 0 öffnet die Parabel nach unten; |a| > 1 macht sie schmaler, |a| < 1 breiter. Gesucht ist also Minus und ein Betrag größer als 1: a = −3. Achtung: −0,3x² ist zwar nach unten geöffnet, aber breiter, weil 0,3 < 1.\n- [Einstiegsquiz, 2.2b Nach oben und unten verschieben] Wo liegt der Scheitel von f(x) = x² − 6? Auswahl: S(0 | 6) | S(0 | −6) | S(6 | 0) | S(−6 | 0)\n  Ergebnis: S(0 | −6)\n  Weg: In f(x) = x² + e verschiebt e die Parabel nach oben (e positiv) oder unten (e negativ), weil zu jedem y-Wert e addiert wird. Hier e = −6: Der Scheitel wandert von (0 | 0) nach (0 | −6). Probe: f(0) = 0² − 6 = −6 ✓. Achtung: S(−6 | 0) wäre eine Verschiebung nach links – die steht in der Klammer.\n- [Einstiegsquiz, 2.2c Nach links und rechts verschieben] Wo liegt der Scheitel von f(x) = (x + 5)²? Auswahl: S(5 | 0) | S(−5 | 0) | S(0 | 5) | S(0 | −5)\n  Ergebnis: S(−5 | 0)\n  Weg: Bei f(x) = (x − d)² liegt der Scheitel bei x = d, weil die Klammer genau dort null wird (kleinster Wert). x + 5 = 0 → x = −5, also S(−5 | 0). Probe: f(−5) = (−5 + 5)² = 0 ✓. Achtung: S(5 | 0) wäre falsch – „+ 5“ verschiebt nach links, nicht nach rechts.\n- [Einstiegsquiz, 2.3a Scheitelpunkt ablesen] Welchen Scheitel hat f(x) = −2(x + 3)² + 4? Auswahl: S(3 | 4) | S(−3 | 4) | S(−3 | −4) | S(−2 | 4)\n  Ergebnis: S(−3 | 4)\n  Weg: In der Scheitelpunktform f(x) = a(x − d)² + e ist S(d | e) der Scheitel. Das Vorzeichen von d dreht sich, denn x − d ist null bei x = d. (x + 3) = (x − (−3)) → d = −3, e = 4 → S(−3 | 4). Wegen a = −2 < 0 ist die Parabel nach unten geöffnet. Achtung: S(3 | 4) übernimmt das Vorzeichen aus der Klammer; S(−2 | 4) verwechselt a mit d.\n- [Einstiegsquiz, 2.3b Vom Graphen zum Term] Der Scheitel einer Parabel liegt bei S(0 | 0) und sie geht durch P(2 | 12). Wie groß ist a in f(x) = a · x²?\n  Ergebnis: 3\n  Weg: Hat die Parabel den Scheitel S(0 | 0), lautet der Term f(x) = a · x². Setzt man einen Punkt ein, erhält man a. P(2 | 12): 12 = a · 2² = 4a → a = 12 : 4 = 3. Probe: 3 · 2² = 12 ✓.\n- [Einstiegsquiz, 2.4a In Normalform umwandeln] Wandle f(x) = (x − 5)² + 1 in die Normalform um. Auswahl: x² − 10x + 26 | x² − 10x + 6 | x² − 25x + 26 | x² + 10x + 26\n  Ergebnis: x² − 10x + 26\n  Weg: Die Klammer löst man mit der binomischen Formel auf: (x − p)² = x² − 2px + p², das Mittelglied −2px darf nicht fehlen. (x − 5)² = x² − 10x + 25, dann + 1: x² − 10x + 26. Achtung: (x − 5)² ist nicht x² − 25, sondern hat das Mittelglied −10x.\n- [Einstiegsquiz, 2.4b Quadratische Ergänzung] Bringe x² + 8x + 10 in die Scheitelpunktform. Auswahl: (x + 4)² − 6 | (x + 4)² + 10 | (x + 8)² − 6 | (x + 4)² + 6\n  Ergebnis: (x + 4)² − 6\n  Weg: Quadratische Ergänzung: Aus x² + px wird ein Quadrat, indem man (p/2)² addiert und im selben Schritt wieder abzieht. p = 8 → Hälfte 4, 4² = 16: x² + 8x + 16 − 16 + 10 = (x + 4)² − 6. Probe: (x + 4)² − 6 = x² + 8x + 16 − 6 = x² + 8x + 10 ✓.\n- [Einstiegsquiz, 2.5a Nullstellen bestimmen] Welche Nullstellen hat f(x) = x² − 36? Auswahl: x = 6 | x = 6 oder x = −6 | x = 18 oder x = −18 | keine Nullstelle\n  Ergebnis: x = 6 oder x = −6\n  Weg: Nullstellen sind die x-Werte mit f(x) = 0. Hier gibt es zwei, denn (+6)² und (−6)² ergeben beide 36. x² − 36 = 0 → x² = 36 → x = 6 oder x = −6. Achtung: x = 18 käme von 36 : 2 – Wurzelziehen ist nicht halbieren.\n- [Einstiegsquiz, 2.5b Die größte Fläche] Ein Rechteck hat 24 m Umfang. Eine Seite ist x, die andere 12 − x. Wie groß ist die größte mögliche Fläche?\n  Ergebnis: 36 m²\n  Weg: Bei festem Umfang hat das Quadrat die größte Fläche: A(x) = x · (12 − x) ist eine nach unten geöffnete Parabel mit dem Scheitel in der Mitte. x = 12 : 2 = 6, andere Seite 12 − 6 = 6 → A = 6 · 6 = 36 m². Probe: x = 5 gibt 5 · 7 = 35 m², das ist kleiner ✓.\n- [Einstiegsquiz, 2.5c Parabeln im Alltag] Bremsweg ≈ (v : 10)² (v in km/h, Weg in m). Wie lang ist der Bremsweg bei 80 km/h?\n  Ergebnis: 64 m\n  Weg: Der Bremsweg wächst mit dem Quadrat der Geschwindigkeit: Doppelt so schnell heißt vierfacher Weg. 80 : 10 = 8, dann quadrieren: 8² = 64 m. Achtung: Erst durch 10 teilen, dann quadrieren – nicht 80² : 10 = 640.\n- [Übungsaufgaben 1, 2.1a Wertetabelle und Graph] Julia zeichnet die Normalparabel. Welchen y-Wert muss sie beim x-Wert −1,5 eintragen?\n  Ergebnis: 2,25\n  Weg: Der y-Wert der Normalparabel ist das Quadrat des x-Werts: y = x². Minus mal Minus ergibt Plus. y = (−1,5)² = (−1,5) · (−1,5) = 2,25. Probe: Der Spiegelpunkt (1,5 | 2,25) hat denselben y-Wert ✓. Achtung: −2,25 ist falsch, die Normalparabel liegt nie unter der x-Achse.\n- [Übungsaufgaben 1, 2.1b Eigenschaften der Normalparabel] Auf der Normalparabel liegen zwei Punkte mit dem y-Wert 12,25. Wie weit liegen sie voneinander entfernt?\n  Ergebnis: 7 Einheiten\n  Weg: Die Normalparabel ist symmetrisch zur y-Achse: Zu jedem y-Wert gehören zwei x-Werte, +x und −x. x² = 12,25 → x = 3,5 oder x = −3,5 (3,5 · 3,5 = 12,25). Abstand: 3,5 + 3,5 = 7. Achtung: 3,5 allein ist nur der Abstand zur y-Achse, nicht zwischen den beiden Punkten.\n- [Übungsaufgaben 1, 2.1c Linear, antiproportional oder quadratisch?] Ein Zug fährt 240 km. Du betrachtest die Fahrzeit t in Abhängigkeit von der Geschwindigkeit v. Welcher Typ ist das? Auswahl: linear | antiproportional | quadratisch\n  Ergebnis: antiproportional\n  Weg: Antiproportional heißt: Das Produkt v · t bleibt gleich. Hier ist es die Strecke 240 km. Doppelte Geschwindigkeit → halbe Zeit, z. B. 80 km/h → 3 h und 160 km/h → 1,5 h (beide Male 240). Achtung: Nicht linear – mit mehr Geschwindigkeit wird die Zeit kleiner statt größer.\n- [Übungsaufgaben 1, 2.2a Strecken, Stauchen, Spiegeln] Ein Brückenbogen hat die Form f(x) = −0,05x² (in m). Wie viele Meter liegt der Bogen 10 m neben der Mitte unter dem Scheitel?\n  Ergebnis: 5 m\n  Weg: In f(x) = a · x² steuert a die Form; hier a = −0,05 – negativ, also nach unten geöffnet, und wegen 0,05 < 1 sehr breit. f(10) = −0,05 · 10² = −0,05 · 100 = −5. Das Minus heißt: 5 m unter dem Scheitel. Achtung: Erst 10² = 100 rechnen, dann mal −0,05 (nicht (−0,05 · 10)² = 0,25).\n- [Übungsaufgaben 1, 2.2b Nach oben und unten verschieben] Eine nach oben oder unten verschobene Normalparabel f(x) = x² + e geht durch P(3 | 5). Wie groß ist e?\n  Ergebnis: -4\n  Weg: Ein Punkt liegt auf der Parabel, wenn seine Koordinaten den Term erfüllen – also einsetzen. P(3 | 5): 5 = 3² + e = 9 + e → e = 5 − 9 = −4. Probe: 3² − 4 = 5 ✓. Der Scheitel liegt dann bei S(0 | −4), also 4 nach unten verschoben.\n- [Übungsaufgaben 1, 2.2c Nach links und rechts verschieben] Eine Normalparabel wird so verschoben, dass ihr Scheitel bei S(−3 | 0) liegt. Wie lautet ihr Term? Auswahl: f(x) = (x − 3)² | f(x) = (x + 3)² | f(x) = x² + 3 | f(x) = x² − 3\n  Ergebnis: f(x) = (x + 3)²\n  Weg: Der Scheitel von f(x) = (x − d)² liegt bei x = d. Für d = −3 steht in der Klammer (x + 3), denn x + 3 = 0 für x = −3. Also f(x) = (x + 3)². Achtung: (x − 3)² hat den Scheitel bei +3, und x² + 3 wäre nach oben verschoben mit Scheitel S(0 | 3).\n- [Übungsaufgaben 1, 2.3a Scheitelpunkt ablesen] Der Wasserstrahl eines Brunnens hat die Form h(x) = −0,5(x − 4)² + 3 (x: Entfernung von der Düse, h: Höhe, in m). Wie hoch steigt er höchstens?\n  Ergebnis: 3 m\n  Weg: Bei h(x) = −0,5(x − 4)² + 3 ist a < 0, die Parabel ist nach unten geöffnet. Dann ist der Scheitel S(d | e) der höchste Punkt. Hier d = 4 und e = 3 → S(4 | 3): Der Strahl steigt höchstens auf 3 m, in 4 m Entfernung. Probe: h(4) = −0,5 · 0² + 3 = 3 ✓; überall sonst wird etwas abgezogen.\n- [Übungsaufgaben 1, 2.3b Vom Graphen zum Term] Eine Parabel hat den Scheitel S(2 | 1) und geht durch P(4 | 9). Wie groß ist a in f(x) = a(x − 2)² + 1?\n  Ergebnis: 2\n  Weg: Der Scheitel S(2 | 1) steckt schon im Term f(x) = a(x − 2)² + 1. Nur a fehlt – das erhält man, indem man P einsetzt. P(4 | 9): 9 = a · (4 − 2)² + 1 = 4a + 1 → 4a = 8 → a = 2. Probe: 2 · (4 − 2)² + 1 = 2 · 4 + 1 = 9 ✓.\n- [Übungsaufgaben 1, 2.4a In Normalform umwandeln] Wandle f(x) = 3(x + 2)² − 5 in die Normalform um. Auswahl: f(x) = 3x² + 12x + 7 | f(x) = 3x² + 6x + 7 | f(x) = 3x² + 12x − 1 | f(x) = 3x² + 12x + 17\n  Ergebnis: f(x) = 3x² + 12x + 7\n  Weg: Erst die Klammer mit der binomischen Formel auflösen: (x + 2)² = x² + 4x + 4. Dann mit 3 malnehmen und −5 anhängen. 3(x² + 4x + 4) − 5 = 3x² + 12x + 12 − 5 = 3x² + 12x + 7. Achtung: Die 3 gilt für alle Glieder in der Klammer, nicht nur für x² (sonst käme 3x² + 4x − 1 heraus).\n- [Übungsaufgaben 1, 2.4b Quadratische Ergänzung] Die Temperatur in einem Gewächshaus ist T(x) = x² − 6x + 14 (in °C, x in Stunden nach 20 Uhr). Wie kalt wird es mindestens?\n  Ergebnis: 5 °C\n  Weg: Der kleinste Wert einer nach oben geöffneten Parabel ist der y-Wert des Scheitels. Den findet man durch quadratische Ergänzung. x² − 6x + 14 = (x − 3)² − 9 + 14 = (x − 3)² + 5 → S(3 | 5): 5 °C um 23 Uhr (3 Std. nach 20 Uhr). Probe: T(3) = 9 − 18 + 14 = 5 ✓.\n- [Übungsaufgaben 1, 2.5a Nullstellen bestimmen] Ein Delfin springt auf der Bahn h(x) = −(x − 4)² + 9 (in m, Wasseroberfläche bei h = 0). Wie weit springt er, also wie weit liegen Aus- und Eintauchpunkt auseinander?\n  Ergebnis: 6 m\n  Weg: Aus- und Eintauchpunkt liegen auf Höhe h = 0 (Wasseroberfläche) – das sind die Nullstellen. −(x − 4)² + 9 = 0 → (x − 4)² = 9 → x − 4 = 3 oder −3 → x = 7 oder x = 1. Weite: 7 − 1 = 6 m. Achtung: Es gibt zwei Lösungen; die Weite ist ihr Abstand, nicht eine von ihnen.\n- [Übungsaufgaben 1, 2.5b Die größte Fläche] Ein Gehege wird an eine Hauswand gebaut, es gibt 20 m Zaun. Zwei Seiten sind x lang, die dritte ist 20 − 2x. Wie groß ist die größte Fläche?\n  Ergebnis: 50 m²\n  Weg: Die Fläche ist x · (20 − 2x) = −2x² + 20x: eine nach unten geöffnete Parabel, ihr Scheitel ist die größte Fläche. x = −20 : (2 · (−2)) = 5 → andere Seite 20 − 2 · 5 = 10 → A = 5 · 10 = 50 m². Probe: x = 4 gibt 4 · 12 = 48 m², das ist kleiner ✓.\n- [Übungsaufgaben 1, 2.5c Parabeln im Alltag] Der Bogen einer Brücke hat die Form h(x) = −0,02x² + 18 (x: Abstand von der Mitte, h: Höhe, in m). Wie hoch ist der Bogen 20 m neben der Mitte?\n  Ergebnis: 10 m\n  Weg: Die Höhe an einer Stelle bekommt man durch Einsetzen von x = 20. h(20) = −0,02 · 20² + 18 = −0,02 · 400 + 18 = −8 + 18 = 10 m. Achtung: Erst 20² = 400, dann mal −0,02 (Potenz vor Punkt vor Strich). In der Mitte ist der Bogen 18 m hoch, außen niedriger.\n- [Abschlussquiz, 2.1a Wertetabelle und Graph] Welche Werte gehören bei f(x) = x² zu x = −2, −1, 0, 1? Auswahl: 4; 1; 0; 1 | −4; −1; 0; 1 | 4; 1; 0; −1 | −4; −1; 0; −1\n  Ergebnis: 4; 1; 0; 1\n  Weg: Beim Quadrieren wird jede Zahl mit sich selbst malgenommen; Minus mal Minus ergibt Plus. (−2)² = 4, (−1)² = 1, 0² = 0, 1² = 1 → 4; 1; 0; 1. Achtung: Negative Werte wie −4 sind unmöglich, denn jedes Quadrat ist null oder positiv.\n- [Abschlussquiz, 2.1b Eigenschaften der Normalparabel] Welche Aussage über die Normalparabel stimmt? Auswahl: Sie ist symmetrisch zur y-Achse. | Sie hat den höchsten Punkt S(0 | 0). | Sie schneidet die x-Achse zweimal. | Sie hat auch negative y-Werte.\n  Ergebnis: Sie ist symmetrisch zur y-Achse.\n  Weg: Die Normalparabel ist symmetrisch zur y-Achse, weil (−x)² = x² ist. Die anderen Aussagen sind falsch: S(0 | 0) ist der tiefste Punkt (nicht der höchste), die Parabel berührt die x-Achse nur einmal, und y = x² ist nie negativ.\n- [Abschlussquiz, 2.1c Linear, antiproportional oder quadratisch?] Eine Tabelle zeigt x = 1, 2, 3, 4 und y = 2, 8, 18, 32. Der Zusammenhang ist quadratisch (y = 2x²). Welchen y-Wert hat x = 5?\n  Ergebnis: 50\n  Weg: Quadratisch heißt: Der Quotient y : x² ist immer gleich. Hier 2 : 1 = 8 : 4 = 18 : 9 = 32 : 16 = 2 → y = 2x². Für x = 5: y = 2 · 5² = 2 · 25 = 50. Achtung: Erst quadrieren, dann mal 2 (nicht 2 · 5 = 10).\n- [Abschlussquiz, 2.2a Strecken, Stauchen, Spiegeln] Wie groß ist f(6) für f(x) = 0,5x²?\n  Ergebnis: 18\n  Weg: Der Faktor a in f(x) = a · x² streckt (a > 1) oder staucht (a < 1) die Normalparabel. Einfach x einsetzen. f(6) = 0,5 · 6² = 0,5 · 36 = 18. Achtung: Erst quadrieren, dann mal 0,5 – nicht (0,5 · 6)² = 9.\n- [Abschlussquiz, 2.2b Nach oben und unten verschieben] Die Normalparabel wird um 2,5 nach unten verschoben. Wie lautet der Term? Auswahl: f(x) = x² − 2,5 | f(x) = x² + 2,5 | f(x) = (x − 2,5)² | f(x) = (x + 2,5)²\n  Ergebnis: f(x) = x² − 2,5\n  Weg: In f(x) = x² + e wird e nach dem Quadrieren addiert; ein Minus verschiebt nach unten. Eine Verschiebung um 2,5 nach unten heißt also e = −2,5. Term: x² − 2,5, Scheitel S(0 | −2,5). Achtung: (x ± 2,5)² würde nach links oder rechts verschieben, nicht nach oben oder unten.\n- [Abschlussquiz, 2.2c Nach links und rechts verschieben] Wie groß ist f(1) für f(x) = (x + 2)²?\n  Ergebnis: 9\n  Weg: Einsetzen, die Klammer zuerst: x = 1. f(1) = (1 + 2)² = 3² = 9. Achtung: Nicht 1² + 2² = 5 rechnen – die Klammer wird als Ganzes quadriert. Der Scheitel liegt bei S(−2 | 0).\n- [Abschlussquiz, 2.3a Scheitelpunkt ablesen] Welcher Term gehört zu einer nach oben geöffneten Normalparabel mit dem Scheitel S(−2 | 5)? Auswahl: f(x) = (x − 2)² + 5 | f(x) = (x + 2)² + 5 | f(x) = (x + 2)² − 5 | f(x) = (x − 5)² + 2\n  Ergebnis: f(x) = (x + 2)² + 5\n  Weg: Scheitelpunktform: f(x) = (x − d)² + e hat den Scheitel S(d | e). Bei d = −2 steht x − (−2) = x + 2 in der Klammer, e = 5 wird addiert. Also f(x) = (x + 2)² + 5. Probe: f(−2) = 0 + 5 = 5 ✓. Achtung: (x − 2)² hätte den Scheitel bei +2.\n- [Abschlussquiz, 2.3b Vom Graphen zum Term] Eine Parabel hat den Scheitel S(1 | −2) und geht durch P(3 | 6). Wie lautet ihr Term? Auswahl: f(x) = 2(x − 1)² − 2 | f(x) = (x − 1)² − 2 | f(x) = 2(x + 1)² − 2 | f(x) = 2(x − 1)² + 2\n  Ergebnis: f(x) = 2(x − 1)² − 2\n  Weg: In f(x) = a(x − 1)² − 2 steckt der Scheitel S(1 | −2) schon drin; a bekommt man aus dem Punkt P. 6 = a(3 − 1)² − 2 = 4a − 2 → 4a = 8 → a = 2. Term: 2(x − 1)² − 2. Probe: 2 · 2² − 2 = 6 ✓. Achtung: (x + 1)² hätte den Scheitel bei x = −1.\n- [Abschlussquiz, 2.4a In Normalform umwandeln] Wandle f(x) = (x − 6)² − 10 in die Normalform x² + px + q um. Wie groß ist q?\n  Ergebnis: 26\n  Weg: Binomische Formel: (x − 6)² = x² − 12x + 36 (Mittelglied 2 · 6 = 12). Dann −10 anhängen: x² − 12x + 36 − 10 = x² − 12x + 26, also q = 26. Achtung: q ist nicht −10 – die 36 aus der binomischen Formel kommt dazu: 36 − 10 = 26.\n- [Abschlussquiz, 2.4b Quadratische Ergänzung] Wie groß ist der kleinste Funktionswert von f(x) = x² − 10x + 30?\n  Ergebnis: 5\n  Weg: Der kleinste Wert einer nach oben geöffneten Parabel ist der y-Wert des Scheitels. Quadratische Ergänzung liefert ihn. x² − 10x + 30 = x² − 10x + 25 − 25 + 30 = (x − 5)² + 5 → S(5 | 5), kleinster Wert 5. Probe: f(5) = 25 − 50 + 30 = 5 ✓.\n- [Abschlussquiz, 2.5a Nullstellen bestimmen] Wie lautet die positive Nullstelle von f(x) = 2x² − 50?\n  Ergebnis: 5\n  Weg: Nullstelle heißt f(x) = 0. Man stellt nach x² um (erst + 50, dann : 2) und zieht die Wurzel. 2x² − 50 = 0 → 2x² = 50 → x² = 25 → x = 5 oder x = −5. Gefragt ist die positive: 5. Probe: 2 · 5² − 50 = 0 ✓.\n- [Abschlussquiz, 2.5b Die größte Fläche] Welches Rechteck mit 40 m Umfang hat die größte Fläche? Auswahl: 10 m × 10 m | 15 m × 5 m | 18 m × 2 m | 12 m × 8 m\n  Ergebnis: 10 m × 10 m\n  Weg: Bei gleichem Umfang hat das Quadrat die größte Fläche. Zur Kontrolle: Alle Rechtecke haben Halbumfang 20 m. Flächen: 10 · 10 = 100, 15 · 5 = 75, 18 · 2 = 36, 12 · 8 = 96 m². Also gewinnt das Quadrat 10 m × 10 m mit 100 m².\n- [Abschlussquiz, 2.5c Parabeln im Alltag] Bremsweg ≈ (v : 10)² (in m). Wie lang ist er bei 120 km/h?\n  Ergebnis: 144 m\n  Weg: Bremsweg ≈ (v : 10)²: erst die Geschwindigkeit durch 10 teilen, dann quadrieren. 120 : 10 = 12 → 12² = 144 m. Achtung: Doppelt so schnell wie 60 km/h (36 m) heißt vierfacher Weg: 4 · 36 = 144 m ✓.\n- [Übungsaufgaben 2, 2.1a Wertetabelle und Graph] Ein Punkt der Normalparabel hat den y-Wert 20,25 und liegt rechts von der y-Achse. Welchen x-Wert hat er?\n  Ergebnis: 4,5\n  Weg: Zu jedem y-Wert größer als 0 gehören zwei x-Werte, +x und −x, weil (−x)² = x² ist. Rechts von der y-Achse ist x positiv. x² = 20,25 → x = 4,5, denn 4,5 · 4,5 = 20,25. Achtung: −4,5 hat dasselbe Quadrat, liegt aber links.\n- [Übungsaufgaben 2, 2.1b Eigenschaften der Normalparabel] Auf der Normalparabel liegt der Punkt A(−6 | 36). Wie weit ist A von seinem Spiegelpunkt B an der y-Achse entfernt?\n  Ergebnis: 12 Einheiten\n  Weg: Spiegeln an der y-Achse ändert nur das Vorzeichen von x, y bleibt gleich, weil (−x)² = x² ist. A(−6 | 36) → B(6 | 36) (Probe: 6² = 36 ✓). Abstand: von −6 bis 6 sind 6 + 6 = 12 Einheiten. Achtung: 6 ist nur der Abstand von A zur y-Achse.\n- [Übungsaufgaben 2, 2.1c Linear, antiproportional oder quadratisch?] Welcher Zusammenhang ist quadratisch? Auswahl: Seitenlänge eines Quadrats → Flächeninhalt | Seitenlänge eines Quadrats → Umfang | Anzahl Kinder → Kuchenstücke pro Kind bei 24 Stücken | Menge Nudeln in kg → Preis bei 3 € pro kg\n  Ergebnis: Seitenlänge eines Quadrats → Flächeninhalt\n  Weg: Quadratisch ist ein Zusammenhang, wenn die Größe mit x² wächst. Beim Quadrat gilt A = x · x = x². Umfang 4x und Preis 3x wachsen gleichmäßig (linear); 24 : Kinder wird mit mehr Kindern kleiner (antiproportional). Beispiel: x = 3 → A = 9, x = 6 → A = 36 (vierfach).\n- [Übungsaufgaben 2, 2.2a Strecken, Stauchen, Spiegeln] Der Querschnitt einer Satellitenschüssel ist f(x) = 0,25x² (x und f(x) in dm). Wie hoch liegt der Rand bei x = 6 dm über dem Scheitel?\n  Ergebnis: 9 dm\n  Weg: Bei f(x) = a · x² hebt sich der Rand um a · x² über den Scheitel. Hier a = 0,25 (breite Schüssel). f(6) = 0,25 · 6² = 0,25 · 36 = 9 dm. Achtung: Erst 6² = 36, dann mal 0,25 – nicht (0,25 · 6)² = 2,25.\n- [Übungsaufgaben 2, 2.2b Nach oben und unten verschieben] Eine Skaterbahn hat den Querschnitt f(x) = x² − 2,5 (in m). Wie hoch liegt die Bahn bei x = 3?\n  Ergebnis: 6,5 m\n  Weg: Bei f(x) = x² + e wird e erst nach dem Quadrieren addiert. Hier e = −2,5. f(3) = 3² − 2,5 = 9 − 2,5 = 6,5 m. Achtung: Nicht (3 − 2,5)² = 0,25 rechnen – die 2,5 steht hinter dem x², nicht in der Klammer.\n- [Übungsaufgaben 2, 2.2c Nach links und rechts verschieben] Eine Normalparabel hat den Term f(x) = (x − 4)². In welchem Punkt (y-Wert) schneidet sie die y-Achse?\n  Ergebnis: 16\n  Weg: Die y-Achse schneidet man bei x = 0, also 0 für x einsetzen. f(0) = (0 − 4)² = (−4)² = 16 (Minus mal Minus ist Plus). Achtung: −16 ist falsch, ein Quadrat ist nie negativ; 4 ist die Stelle des Scheitels S(4 | 0), nicht der y-Achsenabschnitt.\n- [Übungsaufgaben 2, 2.3a Scheitelpunkt ablesen] Ein Gartenspringbrunnen hat die Strahlform h(x) = −0,5(x − 1,5)² + 1,8 (in m). In welcher Entfernung von der Düse ist der Strahl am höchsten?\n  Ergebnis: 1,5 m\n  Weg: Bei a = −0,5 ist die Parabel nach unten geöffnet, der Scheitel S(d | e) ist der höchste Punkt; d ist seine x-Koordinate, also die Entfernung von der Düse. h(x) = −0,5(x − 1,5)² + 1,8 → d = 1,5, e = 1,8. Der Strahl ist bei 1,5 m Entfernung am höchsten (1,8 m hoch). Achtung: 1,8 ist die Höhe, nicht die Entfernung.\n- [Übungsaufgaben 2, 2.3b Vom Graphen zum Term] Ein Tunnel hat die Form f(x) = a·x² + 8. Er ist 8 m hoch und unten 4 m breit, also geht die Parabel durch (2 | 0). Wie groß ist a?\n  Ergebnis: -2\n  Weg: Der Scheitel ist (0 | 8). Der untere Rand (2 | 0) liegt auf der Parabel, also einsetzen. 0 = a · 2² + 8 = 4a + 8 → 4a = −8 → a = −2. Probe: −2 · 4 + 8 = 0 ✓. a ist negativ, weil der Tunnel nach unten geöffnet ist.\n- [Übungsaufgaben 2, 2.4a In Normalform umwandeln] Wandle f(x) = 2(x − 3)² + 1 in die Normalform ax² + bx + c um. Wie groß ist b?\n  Ergebnis: -12\n  Weg: Erst die binomische Formel: (x − 3)² = x² − 6x + 9. Dann mal 2 und + 1. 2(x² − 6x + 9) + 1 = 2x² − 12x + 18 + 1 = 2x² − 12x + 19 → b = −12. Achtung: Die 2 gilt für alle Glieder: b = 2 · (−6) = −12, nicht −6.\n- [Übungsaufgaben 2, 2.4b Quadratische Ergänzung] Bringe f(x) = x² − 6x + 4 in die Scheitelpunktform. Wo liegt der Scheitel? Auswahl: S(3 | −5) | S(−3 | −5) | S(3 | 4) | S(−3 | 5)\n  Ergebnis: S(3 | −5)\n  Weg: Quadratische Ergänzung: Die Hälfte von −6 ist −3, (−3)² = 9 wird addiert und gleich wieder abgezogen. x² − 6x + 9 − 9 + 4 = (x − 3)² − 5 → S(3 | −5). Probe: (x − 3)² − 5 = x² − 6x + 9 − 5 = x² − 6x + 4 ✓.\n- [Übungsaufgaben 2, 2.5a Nullstellen bestimmen] Ein Springbrunnen spritzt Wasser auf der Bahn h(x) = −0,5x² + 8 (in m, x ≥ 0 vom Düsenfuß aus, Boden bei h = 0). Wie weit vom Düsenfuß landet das Wasser?\n  Ergebnis: 4 m\n  Weg: Wo das Wasser landet, ist h = 0 (Boden). Man setzt die Funktion gleich 0 und löst nach x auf. −0,5x² + 8 = 0 → 0,5x² = 8 → x² = 16 → x = 4 oder −4; wegen x ≥ 0 gilt x = 4 m. Probe: −0,5 · 16 + 8 = 0 ✓.\n- [Übungsaufgaben 2, 2.5b Die größte Fläche] Ein Gehege an einer Hauswand wird mit 30 m Zaun gebaut (zweimal x, dazu die Seite 30 − 2x parallel zur Wand). Die Fläche ist am größten bei x = 7,5 m. Wie lang ist dann die Seite an der Wand?\n  Ergebnis: 15 m\n  Weg: Die Seite an der Wand ist 30 − 2x. Bei x = 7,5 m setzt man einfach ein. 30 − 2 · 7,5 = 30 − 15 = 15 m. Fläche: 7,5 · 15 = 112,5 m². Probe: Zaunlänge 7,5 + 7,5 + 15 = 30 ✓.\n- [Übungsaufgaben 2, 2.5c Parabeln im Alltag] Bremsweg ≈ (v : 10)² (in m). Wie viele Meter länger ist der Bremsweg bei 90 km/h als bei 60 km/h?\n  Ergebnis: 45 m\n  Weg: Bremsweg ≈ (v : 10)²: erst durch 10 teilen, dann quadrieren – für beide Geschwindigkeiten, danach den Unterschied bilden. 90 km/h: 9² = 81 m, 60 km/h: 6² = 36 m → 81 − 36 = 45 m. Achtung: Nicht (30 : 10)² = 9 rechnen – die Parabel wächst nicht gleichmäßig.",
  "aufgaben": {
   "Gegeben ist f(x) = x². Wie groß ist f(−7)?": {
    "teil": "2.1a",
    "typ": "zahl",
    "ergebnis": "49",
    "antwort": 49
   },
   "Der Punkt (2,5 | 6,25) liegt auf der Normalparabel. Welcher Punkt ist sein Spiegelpunkt an der y-Achse?": {
    "teil": "2.1b",
    "typ": "wahl",
    "ergebnis": "(−2,5 | 6,25)",
    "optionen": [
     "(−2,5 | 6,25)",
     "(2,5 | −6,25)",
     "(−2,5 | −6,25)",
     "(6,25 | 2,5)"
    ]
   },
   "Eine Tabelle zeigt x = 1, 2, 3, 4 und y = 12, 6, 4, 3. Welcher Typ ist das?": {
    "teil": "2.1c",
    "typ": "wahl",
    "ergebnis": "antiproportional",
    "optionen": [
     "linear",
     "antiproportional",
     "quadratisch"
    ]
   },
   "Welche Parabel ist nach unten geöffnet und schmaler als die Normalparabel?": {
    "teil": "2.2a",
    "typ": "wahl",
    "ergebnis": "f(x) = −3x²",
    "optionen": [
     "f(x) = −3x²",
     "f(x) = −0,3x²",
     "f(x) = 3x²",
     "f(x) = 0,3x²"
    ]
   },
   "Wo liegt der Scheitel von f(x) = x² − 6?": {
    "teil": "2.2b",
    "typ": "wahl",
    "ergebnis": "S(0 | −6)",
    "optionen": [
     "S(0 | 6)",
     "S(0 | −6)",
     "S(6 | 0)",
     "S(−6 | 0)"
    ]
   },
   "Wo liegt der Scheitel von f(x) = (x + 5)²?": {
    "teil": "2.2c",
    "typ": "wahl",
    "ergebnis": "S(−5 | 0)",
    "optionen": [
     "S(5 | 0)",
     "S(−5 | 0)",
     "S(0 | 5)",
     "S(0 | −5)"
    ]
   },
   "Welchen Scheitel hat f(x) = −2(x + 3)² + 4?": {
    "teil": "2.3a",
    "typ": "wahl",
    "ergebnis": "S(−3 | 4)",
    "optionen": [
     "S(3 | 4)",
     "S(−3 | 4)",
     "S(−3 | −4)",
     "S(−2 | 4)"
    ]
   },
   "Der Scheitel einer Parabel liegt bei S(0 | 0) und sie geht durch P(2 | 12). Wie groß ist a in f(x) = a · x²?": {
    "teil": "2.3b",
    "typ": "zahl",
    "ergebnis": "3",
    "antwort": 3
   },
   "Wandle f(x) = (x − 5)² + 1 in die Normalform um.": {
    "teil": "2.4a",
    "typ": "wahl",
    "ergebnis": "x² − 10x + 26",
    "optionen": [
     "x² − 10x + 26",
     "x² − 10x + 6",
     "x² − 25x + 26",
     "x² + 10x + 26"
    ]
   },
   "Bringe x² + 8x + 10 in die Scheitelpunktform.": {
    "teil": "2.4b",
    "typ": "wahl",
    "ergebnis": "(x + 4)² − 6",
    "optionen": [
     "(x + 4)² − 6",
     "(x + 4)² + 10",
     "(x + 8)² − 6",
     "(x + 4)² + 6"
    ]
   },
   "Welche Nullstellen hat f(x) = x² − 36?": {
    "teil": "2.5a",
    "typ": "wahl",
    "ergebnis": "x = 6 oder x = −6",
    "optionen": [
     "x = 6",
     "x = 6 oder x = −6",
     "x = 18 oder x = −18",
     "keine Nullstelle"
    ]
   },
   "Ein Rechteck hat 24 m Umfang. Eine Seite ist x, die andere 12 − x. Wie groß ist die größte mögliche Fläche?": {
    "teil": "2.5b",
    "typ": "zahl",
    "ergebnis": "36 m²",
    "antwort": 36
   },
   "Bremsweg ≈ (v : 10)² (v in km/h, Weg in m). Wie lang ist der Bremsweg bei 80 km/h?": {
    "teil": "2.5c",
    "typ": "zahl",
    "ergebnis": "64 m",
    "antwort": 64
   },
   "Julia zeichnet die Normalparabel. Welchen y-Wert muss sie beim x-Wert −1,5 eintragen?": {
    "teil": "2.1a",
    "typ": "zahl",
    "ergebnis": "2,25",
    "antwort": 2.25
   },
   "Auf der Normalparabel liegen zwei Punkte mit dem y-Wert 12,25. Wie weit liegen sie voneinander entfernt?": {
    "teil": "2.1b",
    "typ": "zahl",
    "ergebnis": "7 Einheiten",
    "antwort": 7
   },
   "Ein Zug fährt 240 km. Du betrachtest die Fahrzeit t in Abhängigkeit von der Geschwindigkeit v. Welcher Typ ist das?": {
    "teil": "2.1c",
    "typ": "wahl",
    "ergebnis": "antiproportional",
    "optionen": [
     "linear",
     "antiproportional",
     "quadratisch"
    ]
   },
   "Ein Brückenbogen hat die Form f(x) = −0,05x² (in m). Wie viele Meter liegt der Bogen 10 m neben der Mitte unter dem Scheitel?": {
    "teil": "2.2a",
    "typ": "zahl",
    "ergebnis": "5 m",
    "antwort": 5
   },
   "Eine nach oben oder unten verschobene Normalparabel f(x) = x² + e geht durch P(3 | 5). Wie groß ist e?": {
    "teil": "2.2b",
    "typ": "zahl",
    "ergebnis": "-4",
    "antwort": -4
   },
   "Eine Normalparabel wird so verschoben, dass ihr Scheitel bei S(−3 | 0) liegt. Wie lautet ihr Term?": {
    "teil": "2.2c",
    "typ": "wahl",
    "ergebnis": "f(x) = (x + 3)²",
    "optionen": [
     "f(x) = (x − 3)²",
     "f(x) = (x + 3)²",
     "f(x) = x² + 3",
     "f(x) = x² − 3"
    ]
   },
   "Der Wasserstrahl eines Brunnens hat die Form h(x) = −0,5(x − 4)² + 3 (x: Entfernung von der Düse, h: Höhe, in m). Wie hoch steigt er höchstens?": {
    "teil": "2.3a",
    "typ": "zahl",
    "ergebnis": "3 m",
    "antwort": 3
   },
   "Eine Parabel hat den Scheitel S(2 | 1) und geht durch P(4 | 9). Wie groß ist a in f(x) = a(x − 2)² + 1?": {
    "teil": "2.3b",
    "typ": "zahl",
    "ergebnis": "2",
    "antwort": 2
   },
   "Wandle f(x) = 3(x + 2)² − 5 in die Normalform um.": {
    "teil": "2.4a",
    "typ": "wahl",
    "ergebnis": "f(x) = 3x² + 12x + 7",
    "optionen": [
     "f(x) = 3x² + 12x + 7",
     "f(x) = 3x² + 6x + 7",
     "f(x) = 3x² + 12x − 1",
     "f(x) = 3x² + 12x + 17"
    ]
   },
   "Die Temperatur in einem Gewächshaus ist T(x) = x² − 6x + 14 (in °C, x in Stunden nach 20 Uhr). Wie kalt wird es mindestens?": {
    "teil": "2.4b",
    "typ": "zahl",
    "ergebnis": "5 °C",
    "antwort": 5
   },
   "Ein Delfin springt auf der Bahn h(x) = −(x − 4)² + 9 (in m, Wasseroberfläche bei h = 0). Wie weit springt er, also wie weit liegen Aus- und Eintauchpunkt auseinander?": {
    "teil": "2.5a",
    "typ": "zahl",
    "ergebnis": "6 m",
    "antwort": 6
   },
   "Ein Gehege wird an eine Hauswand gebaut, es gibt 20 m Zaun. Zwei Seiten sind x lang, die dritte ist 20 − 2x. Wie groß ist die größte Fläche?": {
    "teil": "2.5b",
    "typ": "zahl",
    "ergebnis": "50 m²",
    "antwort": 50
   },
   "Der Bogen einer Brücke hat die Form h(x) = −0,02x² + 18 (x: Abstand von der Mitte, h: Höhe, in m). Wie hoch ist der Bogen 20 m neben der Mitte?": {
    "teil": "2.5c",
    "typ": "zahl",
    "ergebnis": "10 m",
    "antwort": 10
   },
   "Welche Werte gehören bei f(x) = x² zu x = −2, −1, 0, 1?": {
    "teil": "2.1a",
    "typ": "wahl",
    "ergebnis": "4; 1; 0; 1",
    "optionen": [
     "4; 1; 0; 1",
     "−4; −1; 0; 1",
     "4; 1; 0; −1",
     "−4; −1; 0; −1"
    ]
   },
   "Welche Aussage über die Normalparabel stimmt?": {
    "teil": "2.1b",
    "typ": "wahl",
    "ergebnis": "Sie ist symmetrisch zur y-Achse.",
    "optionen": [
     "Sie ist symmetrisch zur y-Achse.",
     "Sie hat den höchsten Punkt S(0 | 0).",
     "Sie schneidet die x-Achse zweimal.",
     "Sie hat auch negative y-Werte."
    ]
   },
   "Eine Tabelle zeigt x = 1, 2, 3, 4 und y = 2, 8, 18, 32. Der Zusammenhang ist quadratisch (y = 2x²). Welchen y-Wert hat x = 5?": {
    "teil": "2.1c",
    "typ": "zahl",
    "ergebnis": "50",
    "antwort": 50
   },
   "Wie groß ist f(6) für f(x) = 0,5x²?": {
    "teil": "2.2a",
    "typ": "zahl",
    "ergebnis": "18",
    "antwort": 18
   },
   "Die Normalparabel wird um 2,5 nach unten verschoben. Wie lautet der Term?": {
    "teil": "2.2b",
    "typ": "wahl",
    "ergebnis": "f(x) = x² − 2,5",
    "optionen": [
     "f(x) = x² − 2,5",
     "f(x) = x² + 2,5",
     "f(x) = (x − 2,5)²",
     "f(x) = (x + 2,5)²"
    ]
   },
   "Wie groß ist f(1) für f(x) = (x + 2)²?": {
    "teil": "2.2c",
    "typ": "zahl",
    "ergebnis": "9",
    "antwort": 9
   },
   "Welcher Term gehört zu einer nach oben geöffneten Normalparabel mit dem Scheitel S(−2 | 5)?": {
    "teil": "2.3a",
    "typ": "wahl",
    "ergebnis": "f(x) = (x + 2)² + 5",
    "optionen": [
     "f(x) = (x − 2)² + 5",
     "f(x) = (x + 2)² + 5",
     "f(x) = (x + 2)² − 5",
     "f(x) = (x − 5)² + 2"
    ]
   },
   "Eine Parabel hat den Scheitel S(1 | −2) und geht durch P(3 | 6). Wie lautet ihr Term?": {
    "teil": "2.3b",
    "typ": "wahl",
    "ergebnis": "f(x) = 2(x − 1)² − 2",
    "optionen": [
     "f(x) = 2(x − 1)² − 2",
     "f(x) = (x − 1)² − 2",
     "f(x) = 2(x + 1)² − 2",
     "f(x) = 2(x − 1)² + 2"
    ]
   },
   "Wandle f(x) = (x − 6)² − 10 in die Normalform x² + px + q um. Wie groß ist q?": {
    "teil": "2.4a",
    "typ": "zahl",
    "ergebnis": "26",
    "antwort": 26
   },
   "Wie groß ist der kleinste Funktionswert von f(x) = x² − 10x + 30?": {
    "teil": "2.4b",
    "typ": "zahl",
    "ergebnis": "5",
    "antwort": 5
   },
   "Wie lautet die positive Nullstelle von f(x) = 2x² − 50?": {
    "teil": "2.5a",
    "typ": "zahl",
    "ergebnis": "5",
    "antwort": 5
   },
   "Welches Rechteck mit 40 m Umfang hat die größte Fläche?": {
    "teil": "2.5b",
    "typ": "wahl",
    "ergebnis": "10 m × 10 m",
    "optionen": [
     "10 m × 10 m",
     "15 m × 5 m",
     "18 m × 2 m",
     "12 m × 8 m"
    ]
   },
   "Bremsweg ≈ (v : 10)² (in m). Wie lang ist er bei 120 km/h?": {
    "teil": "2.5c",
    "typ": "zahl",
    "ergebnis": "144 m",
    "antwort": 144
   },
   "Ein Punkt der Normalparabel hat den y-Wert 20,25 und liegt rechts von der y-Achse. Welchen x-Wert hat er?": {
    "teil": "2.1a",
    "typ": "zahl",
    "ergebnis": "4,5",
    "antwort": 4.5
   },
   "Auf der Normalparabel liegt der Punkt A(−6 | 36). Wie weit ist A von seinem Spiegelpunkt B an der y-Achse entfernt?": {
    "teil": "2.1b",
    "typ": "zahl",
    "ergebnis": "12 Einheiten",
    "antwort": 12
   },
   "Welcher Zusammenhang ist quadratisch?": {
    "teil": "2.1c",
    "typ": "wahl",
    "ergebnis": "Seitenlänge eines Quadrats → Flächeninhalt",
    "optionen": [
     "Seitenlänge eines Quadrats → Flächeninhalt",
     "Seitenlänge eines Quadrats → Umfang",
     "Anzahl Kinder → Kuchenstücke pro Kind bei 24 Stücken",
     "Menge Nudeln in kg → Preis bei 3 € pro kg"
    ]
   },
   "Der Querschnitt einer Satellitenschüssel ist f(x) = 0,25x² (x und f(x) in dm). Wie hoch liegt der Rand bei x = 6 dm über dem Scheitel?": {
    "teil": "2.2a",
    "typ": "zahl",
    "ergebnis": "9 dm",
    "antwort": 9
   },
   "Eine Skaterbahn hat den Querschnitt f(x) = x² − 2,5 (in m). Wie hoch liegt die Bahn bei x = 3?": {
    "teil": "2.2b",
    "typ": "zahl",
    "ergebnis": "6,5 m",
    "antwort": 6.5
   },
   "Eine Normalparabel hat den Term f(x) = (x − 4)². In welchem Punkt (y-Wert) schneidet sie die y-Achse?": {
    "teil": "2.2c",
    "typ": "zahl",
    "ergebnis": "16",
    "antwort": 16
   },
   "Ein Gartenspringbrunnen hat die Strahlform h(x) = −0,5(x − 1,5)² + 1,8 (in m). In welcher Entfernung von der Düse ist der Strahl am höchsten?": {
    "teil": "2.3a",
    "typ": "zahl",
    "ergebnis": "1,5 m",
    "antwort": 1.5
   },
   "Ein Tunnel hat die Form f(x) = a·x² + 8. Er ist 8 m hoch und unten 4 m breit, also geht die Parabel durch (2 | 0). Wie groß ist a?": {
    "teil": "2.3b",
    "typ": "zahl",
    "ergebnis": "-2",
    "antwort": -2
   },
   "Wandle f(x) = 2(x − 3)² + 1 in die Normalform ax² + bx + c um. Wie groß ist b?": {
    "teil": "2.4a",
    "typ": "zahl",
    "ergebnis": "-12",
    "antwort": -12
   },
   "Bringe f(x) = x² − 6x + 4 in die Scheitelpunktform. Wo liegt der Scheitel?": {
    "teil": "2.4b",
    "typ": "wahl",
    "ergebnis": "S(3 | −5)",
    "optionen": [
     "S(3 | −5)",
     "S(−3 | −5)",
     "S(3 | 4)",
     "S(−3 | 5)"
    ]
   },
   "Ein Springbrunnen spritzt Wasser auf der Bahn h(x) = −0,5x² + 8 (in m, x ≥ 0 vom Düsenfuß aus, Boden bei h = 0). Wie weit vom Düsenfuß landet das Wasser?": {
    "teil": "2.5a",
    "typ": "zahl",
    "ergebnis": "4 m",
    "antwort": 4
   },
   "Ein Gehege an einer Hauswand wird mit 30 m Zaun gebaut (zweimal x, dazu die Seite 30 − 2x parallel zur Wand). Die Fläche ist am größten bei x = 7,5 m. Wie lang ist dann die Seite an der Wand?": {
    "teil": "2.5b",
    "typ": "zahl",
    "ergebnis": "15 m",
    "antwort": 15
   },
   "Bremsweg ≈ (v : 10)² (in m). Wie viele Meter länger ist der Bremsweg bei 90 km/h als bei 60 km/h?": {
    "teil": "2.5c",
    "typ": "zahl",
    "ergebnis": "45 m",
    "antwort": 45
   },
   "Eine Parabel f(x) = a · x² geht durch den Punkt P(2 | −8). Welcher Term gehört dazu?": {
    "teil": "2.2a",
    "typ": "wahl",
    "klausur": true
   },
   "Welche Aussage über f(x) = −0,5(x − 4)² + 3 stimmt?": {
    "teil": "2.3a",
    "typ": "wahl",
    "klausur": true
   },
   "Eine Parabel hat den Scheitel S(2 | −3) und geht durch P(1 | −5). Wie groß ist a in f(x) = a(x − 2)² − 3?": {
    "teil": "2.3b",
    "typ": "zahl",
    "klausur": true
   },
   "Wandle f(x) = 3(x − 2)² − 4 in die Normalform um.": {
    "teil": "2.4a",
    "typ": "wahl",
    "klausur": true
   },
   "Bringe f(x) = x² + 12x + 40 in die Scheitelpunktform. Welche x-Koordinate hat der Scheitel?": {
    "teil": "2.4b",
    "typ": "zahl",
    "klausur": true
   },
   "Berechne die Nullstellen von f(x) = 0,5(x + 2)² − 8. Wie weit liegen sie voneinander entfernt?": {
    "teil": "2.5a",
    "typ": "zahl",
    "klausur": true
   },
   "Ein Gehege an einer Hauswand wird mit 40 m Zaun gebaut. Zwei Seiten sind x lang, die dritte ist 40 − 2x. Wie groß ist die größte Fläche?": {
    "teil": "2.5b",
    "typ": "zahl",
    "klausur": true
   },
   "Ein Ball wird aus 1 m Höhe geworfen, seine Höhe ist h(x) = −0,1x² + 0,8x + 1 (in m, x: Entfernung in m). Wie hoch fliegt er höchstens?": {
    "teil": "2.5c",
    "typ": "zahl",
    "klausur": true
   }
  }
 },
 "3-kreis-prisma-zylinder": {
  "titel": "Kreis, Prisma, Zylinder",
  "fach": "mathe",
  "klasse": 9,
  "teile": {
   "3.1a": "Kreiszahl π und Umfang",
   "3.1b": "Rückwärts rechnen",
   "3.2a": "Flächeninhalt des Kreises",
   "3.2b": "Kreisringe und Figuren",
   "3.3a": "Kreisbogen",
   "3.3b": "Kreissektor",
   "3.3c": "Tangente",
   "3.4a": "Prisma: Volumen",
   "3.4b": "Prisma: Oberfläche",
   "3.5a": "Zylinder: Volumen",
   "3.5b": "Zylinder: Oberfläche"
  },
  "text": "# Kreis, Prisma, Zylinder (Mathe, Klasse 9)\n\n## Merkkästen der Arbeitsblätter\n### 3.1a Kreiszahl π und Umfang\nUmfang: u = π · d = 2 · π · r\nmit π ≈ 3,14\nr = Radius (Mitte bis Rand), d = Durchmesser = 2 · r. Bei jedem Kreis ist u : d = π.\n1 r = 5 cm → d = 10 cm\n2 u = π · 10\n3 u ≈ 31,42 cm\n\n### 3.1b Rückwärts rechnen\nDer Umfang ist bekannt? Dann rechne rückwärts:\nd = u : π\nr = d : 2\n1 u = 18,85 cm\n2 d = 18,85 : π ≈ 6 cm\n3 r = 6 : 2 = 3 cm\n\n### 3.2a Flächeninhalt des Kreises\nFlächeninhalt: A = π · r²\n(r² = r · r)\nEin Kreis ist etwas mehr als 3 Quadrate mit der Seitenlänge r.\n1 r = 4 cm\n2 r² = 16\n3 A = π · 16 ≈ 50,27 cm²\n\n### 3.2b Kreisringe und Figuren\nKreisring: großer Kreis minus kleiner Kreis: A = π · R² − π · r²\nAndere Figuren: in bekannte Teile zerlegen, dann addieren oder abziehen.\n1 R = 5, r = 3\n2 π · 25 − π · 9\n3 ≈ 78,54 − 28,27 = 50,27 cm²\n\n### 3.3a Kreisbogen\nBogen = Stück vom Umfang: b = 2 · π · r · α : 360°\nα : 360° ist der Anteil am ganzen Kreis, z. B. 90° = ¼.\n1 r = 6 cm, α = 90°\n2 Umfang: 2 · π · 6 ≈ 37,70\n3 b = 37,70 · ¼ ≈ 9,42 cm\n\n### 3.3b Kreissektor\nEin Kreissektor ist ein Tortenstück: A = π · r² · α : 360°\nWie beim Bogen: erst den ganzen Kreis, dann den Anteil nehmen.\n1 r = 6 cm, α = 60°\n2 Kreis: π · 36 ≈ 113,10\n3 A = 113,10 : 6 ≈ 18,85 cm²\n\n### 3.3c Tangente\nEine Tangente berührt den Kreis in genau einem Punkt P.\nSie steht senkrecht auf dem Radius zu P: Winkel = 90°\n1 Radius von M zu P zeichnen\n2 Geodreieck an den Radius legen\n3 Senkrechte durch P zeichnen\n\n### 3.4a Prisma: Volumen\nVolumen: V = G · h\nEin Prisma hat oben und unten die gleiche Fläche G (Dreieck, Rechteck, Sechseck …). h ist die Höhe des Körpers.\n1 Dreieck: G = ½ · 4 · 3 = 6 cm²\n2 Höhe h = 10 cm\n3 V = 6 · 10 = 60 cm³\n\n### 3.4b Prisma: Oberfläche\nOberfläche = 2 Grundflächen + Mantel: O = 2 · G + u · h\nDer Mantel ist ein langes Rechteck: Umfang der Grundfläche u mal Körperhöhe h.\n1 Dreieck 3, 4, 5 cm: G = 6, u = 12\n2 h = 10: M = 12 · 10 = 120\n3 O = 2 · 6 + 120 = 132 cm²\n\n### 3.5a Zylinder: Volumen\nEin Zylinder ist ein „rundes Prisma“: V = G · h = π · r² · h\nMerke für Getränke: 1 000 cm³ = 1 dm³ = 1 Liter.\n1 r = 3 cm, h = 10 cm\n2 G = π · 9 ≈ 28,27 cm²\n3 V ≈ 28,27 · 10 = 282,74 cm³\n\n### 3.5b Zylinder: Oberfläche\nOberfläche = 2 Kreise + Mantel: O = 2 · π · r² + 2 · π · r · h\nDer Mantel ist ein Rechteck: so lang wie der Kreisumfang, so hoch wie der Zylinder.\n1 r = 3, h = 10: 2 Kreise ≈ 56,55\n2 Mantel: 2 · π · 3 · 10 ≈ 188,50\n3 O ≈ 245,05 cm²\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 3.1a Kreiszahl π und Umfang] Ein Kreis hat den Radius r = 4 cm. Wie groß ist sein Umfang ungefähr? Auswahl: 25,13 cm | 50,27 cm | 12,57 cm | 8 cm\n  Ergebnis: 25,13 cm\n  Weg: Der Umfang ist einmal um den Kreis herum: u = 2 · π · r (π ≈ 3,14 ist das Verhältnis von Umfang zu Durchmesser). u = 2 · π · 4 = 8π ≈ 25,13 cm. Achtung: 50,27 wäre die Fläche π · 4² (andere Einheit, cm²), und 12,57 hat den Faktor 2 vergessen (π · 4).\n- [Einstiegsquiz, 3.1b Rückwärts rechnen] Ein Kreis hat den Umfang u = 43,98 cm. Wie groß ist der Radius? (ganze Zahl)\n  Ergebnis: 7 cm\n  Weg: Rückwärts rechnen: u = π · d, also d = u : π, und der Radius ist die Hälfte: r = d : 2. d = 43,98 : π ≈ 14 cm → r = 14 : 2 = 7 cm. Probe: 2 · π · 7 ≈ 43,98 ✓. Achtung: 14 cm ist nur der Durchmesser.\n- [Einstiegsquiz, 3.2a Flächeninhalt des Kreises] Ein Kreis hat den Radius r = 5 cm. Wie groß ist seine Fläche ungefähr? Auswahl: 78,54 cm² | 314,16 cm² | 31,42 cm² | 157,08 cm²\n  Ergebnis: 78,54 cm²\n  Weg: Die Fläche ist A = π · r², und r² heißt r · r (nicht 2 · r). A = π · 5² = 25π ≈ 78,54 cm². Achtung: 314,16 wäre mit d = 10 statt r gerechnet (π · 10²); 31,42 ist der Umfang π · 10, keine Fläche.\n- [Einstiegsquiz, 3.2b Kreisringe und Figuren] Kreisring mit R = 6 cm und r = 2 cm. Wie groß ist die Fläche? (2 Nachkommastellen)\n  Ergebnis: 100,53 cm²\n  Weg: Ein Kreisring ist die große Kreisfläche minus die kleine (das Loch). A = π · 6² − π · 2² = 36π − 4π = 32π ≈ 100,53 cm². Achtung: Nicht π · (6 − 2)² = 16π rechnen – erst jeden Radius quadrieren, dann abziehen.\n- [Einstiegsquiz, 3.3a Kreisbogen] Wie lang ist der Kreisbogen bei r = 9 cm und α = 60°? (2 Nachkommastellen)\n  Ergebnis: 9,42 cm\n  Weg: Der Bogen ist ein Teil vom Umfang, nämlich α : 360°. Hier 60° : 360° = ⅙. u = 2 · π · 9 = 18π ≈ 56,55 cm → b = 56,55 : 6 = 3π ≈ 9,42 cm. Probe: 6 solche Bögen ergeben den ganzen Umfang: 6 · 9,42 ≈ 56,55 ✓.\n- [Einstiegsquiz, 3.3b Kreissektor] Ein Kreissektor hat r = 6 cm und α = 90°. Wie groß ist seine Fläche ungefähr? Auswahl: 28,27 cm² | 9,42 cm² | 113,10 cm² | 18,85 cm²\n  Ergebnis: 28,27 cm²\n  Weg: Der Sektor ist ein Teil der Kreisfläche, nämlich α : 360°. 90° sind ¼ (ein Viertelkreis). Ganzer Kreis: π · 6² = 36π ≈ 113,10 cm² → A = 113,10 : 4 ≈ 28,27 cm². Achtung: 113,10 ist der ganze Kreis; 9,42 wäre die Länge des Viertelbogens, keine Fläche.\n- [Einstiegsquiz, 3.3c Tangente] Eine Tangente berührt einen Kreis mit r = 6 cm im Punkt P. Der Punkt A auf der Tangente ist 10 cm vom Mittelpunkt M entfernt. Wie lang ist die Strecke AP?\n  Ergebnis: 8 cm\n  Weg: Die Tangente steht im Berührpunkt P senkrecht auf dem Radius MP (90°). So entsteht ein rechtwinkliges Dreieck mit der Hypotenuse AM = 10 cm – Satz des Pythagoras. AP² = 10² − 6² = 100 − 36 = 64 → AP = 8 cm. Probe: 6² + 8² = 36 + 64 = 100 = 10² ✓.\n- [Einstiegsquiz, 3.4a Prisma: Volumen] Ein Dreiecksprisma hat als Grundfläche ein Dreieck mit g = 7 cm und h = 4 cm. Der Körper ist 9 cm hoch. Wie groß ist sein Volumen?\n  Ergebnis: 126 cm³\n  Weg: Prismenvolumen: V = G · h (Grundfläche mal Höhe). Die Grundfläche ist hier ein Dreieck: G = ½ · g · h. G = ½ · 7 · 4 = 14 cm² → V = 14 · 9 = 126 cm³. Achtung: Die 4 cm ist die Höhe des Dreiecks, die 9 cm die Höhe des Prismas – nicht verwechseln.\n- [Einstiegsquiz, 3.4b Prisma: Oberfläche] Prisma mit rechtwinkligem Dreieck (9, 12, 15 cm) als Grundfläche und h = 6 cm. Wie groß ist die Oberfläche?\n  Ergebnis: 324 cm²\n  Weg: Die Oberfläche eines Prismas ist O = 2 · G + M, mit Mantel M = u · h (die zwei Grundflächen plus das abgerollte Rechteck). G = ½ · 9 · 12 = 54, u = 9 + 12 + 15 = 36, M = 36 · 6 = 216 → O = 2 · 54 + 216 = 324 cm². Achtung: Die Grundfläche zählt zweimal (oben und unten).\n- [Einstiegsquiz, 3.5a Zylinder: Volumen] Ein Zylinder hat r = 4 cm und h = 10 cm. Wie groß ist sein Volumen? (2 Nachkommastellen)\n  Ergebnis: 502,65 cm³\n  Weg: Beim Zylinder ist V = G · h, und die Grundfläche ist ein Kreis: G = π · r². V = π · 4² · 10 = 160π ≈ 502,65 cm³. Achtung: r wird quadriert (4² = 16), nicht verdoppelt. Grobe Probe: 3 · 16 · 10 = 480 ≈ 502 ✓.\n- [Einstiegsquiz, 3.5b Zylinder: Oberfläche] Ein geschlossener Zylinder hat r = 2 cm und h = 6 cm. Wie groß ist seine Oberfläche ungefähr? Auswahl: 100,53 cm² | 75,40 cm² | 87,96 cm² | 25,13 cm²\n  Ergebnis: 100,53 cm²\n  Weg: Zylinderoberfläche: O = 2 Kreise (oben und unten) + Mantel. Der Mantel ist abgerollt ein Rechteck aus Umfang 2πr und Höhe h. 2 · π · 2² = 8π ≈ 25,13; Mantel: 2 · π · 2 · 6 = 24π ≈ 75,40 → O ≈ 100,53 cm². Achtung: 75,40 ist nur der Mantel, 87,96 zählt nur einen Kreis statt zwei.\n- [Übungsaufgaben 1, 3.1a Kreiszahl π und Umfang] Ein rundes Trampolin hat 3 m Durchmesser. Wie lang ist das Sicherheitsnetz rundherum? (2 Nachkommastellen)\n  Ergebnis: 9,42 m\n  Weg: Rundherum ist der Umfang; mit dem Durchmesser gilt u = π · d (denn d = 2r). u = π · 3 ≈ 9,42 m. Achtung: Nicht π · d² (28,27 m) und nicht 2 · π · d (18,85 m) rechnen – der Faktor 2 gehört nur zum Radius.\n- [Übungsaufgaben 1, 3.1b Rückwärts rechnen] Um einen Baumstamm misst du mit dem Maßband 188,5 cm. Wie dick ist der Baum (Durchmesser, ganze cm)?\n  Ergebnis: 60 cm\n  Weg: Der Wert vom Maßband ist der Umfang u. Weil u = π · d ist, gilt d = u : π. d = 188,5 : π ≈ 60 cm. Probe: π · 60 ≈ 188,5 ✓. Achtung: 30 cm wäre nur der Radius – gefragt ist der Durchmesser.\n- [Übungsaufgaben 1, 3.2a Flächeninhalt des Kreises] Eine Pizza hat 30 cm Durchmesser. Wie groß ist ihre Fläche? (2 Nachkommastellen)\n  Ergebnis: 706,86 cm²\n  Weg: Die Fläche ist A = π · r². Gegeben ist der Durchmesser, also zuerst halbieren. r = 30 : 2 = 15 cm → A = π · 15² = 225π ≈ 706,86 cm². Achtung: Mit d = 30 statt r käme 2 827,43 cm² heraus – viermal so viel.\n- [Übungsaufgaben 1, 3.2b Kreisringe und Figuren] Um einen runden Springbrunnen (r = 3 m) soll ein 1 m breiter Weg gepflastert werden. Wie groß ist die Wegfläche? (2 Nachkommastellen)\n  Ergebnis: 21,99 m²\n  Weg: Der Weg ist ein Kreisring: großer Kreis (Brunnen plus Weg) minus Brunnen. R = 3 + 1 = 4 m: A = π · 4² − π · 3² = 16π − 9π = 7π ≈ 21,99 m². Achtung: Nicht π · 1² = 3,14 rechnen – der Weg ist kein Kreis mit Radius 1.\n- [Übungsaufgaben 1, 3.3a Kreisbogen] Der Minutenzeiger einer Uhr ist 15 cm lang. Welchen Weg legt seine Spitze in 20 Minuten zurück? (2 Nachkommastellen)\n  Ergebnis: 31,42 cm\n  Weg: Der Bogen ist der Teil α : 360° vom Umfang. Der Minutenzeiger dreht sich in 60 min um 360°, also 6° pro Minute: 20 min = 120° = ⅓. u = 2 · π · 15 = 30π → b = 30π : 3 = 10π ≈ 31,42 cm. Probe: 3 · 31,42 ≈ 94,25 = 30π ✓.\n- [Übungsaufgaben 1, 3.3b Kreissektor] Ein Rasensprenger dreht sich um 270° und spritzt 5 m weit. Wie groß ist die bewässerte Fläche? (2 Nachkommastellen)\n  Ergebnis: 58,9 m²\n  Weg: Die Sektorfläche ist A = π · r² · α : 360°. Hier sind 270° ¾ eines Kreises. A = π · 5² · ¾ = 25π · 0,75 ≈ 58,90 m². Probe: ganzer Kreis 78,54 m², davon ¾ ist 58,90 ✓.\n- [Übungsaufgaben 1, 3.3c Tangente] Von einem Punkt A, der 15 cm vom Mittelpunkt eines Kreises mit r = 9 cm entfernt ist, geht eine Tangente zum Kreis. Wie lang ist die Strecke von A bis zum Berührpunkt?\n  Ergebnis: 12 cm\n  Weg: Die Tangente steht senkrecht auf dem Radius: rechtwinkliges Dreieck mit Hypotenuse AM = 15 cm (längste Seite) und Katheten r = 9 cm und AP. AP² = 15² − 9² = 225 − 81 = 144 → AP = 12 cm. Probe: 9² + 12² = 81 + 144 = 225 = 15² ✓.\n- [Übungsaufgaben 1, 3.4a Prisma: Volumen] Ein Dachboden ist ein Dreiecksprisma: Der Giebel ist 8 m breit und 3 m hoch, das Haus ist 10 m lang. Wie groß ist der Raum?\n  Ergebnis: 120 m³\n  Weg: Prisma: V = G · h. Der Giebel (Dreieck) ist die Grundfläche, die Länge des Hauses ist die Prismenhöhe. G = ½ · 8 · 3 = 12 m² → V = 12 · 10 = 120 m³. Achtung: Das ½ bei der Dreiecksfläche nicht vergessen (sonst 240 m³).\n- [Übungsaufgaben 1, 3.4b Prisma: Oberfläche] Ein Zelt ist ein Dreiecksprisma: Der Giebel ist 3 m breit und 2 m hoch, das Zelt ist 4 m lang. Wie viel Stoff braucht man für 2 Giebelwände und 2 Dachflächen (ohne Boden)?\n  Ergebnis: 26 m²\n  Weg: Das Dach besteht aus zwei Rechtecken. Ihre Breite s ist die schräge Seite im halben Giebel (halbe Breite 1,5 m, Höhe 2 m) – Pythagoras. s = √(1,5² + 2²) = √6,25 = 2,5 m. Giebel: 2 · ½ · 3 · 2 = 6 m², Dach: 2 · 2,5 · 4 = 20 m² → 26 m². Achtung: Der Boden zählt hier nicht mit.\n- [Übungsaufgaben 1, 3.5a Zylinder: Volumen] Eine Konservendose hat r = 5 cm und h = 11 cm. Wie viel passt hinein? (2 Nachkommastellen)\n  Ergebnis: 863,94 cm³\n  Weg: Zylinder: V = π · r² · h. Die Dose hat den Radius r = 5 cm. V = π · 25 · 11 = 275π ≈ 863,94 cm³. Grobe Probe: 3 · 25 · 11 = 825 ≈ 864 ✓. Achtung: r wird quadriert (5² = 25), nicht mit 2 malgenommen.\n- [Übungsaufgaben 1, 3.5b Zylinder: Oberfläche] Das Etikett einer Dose geht einmal ganz herum. Die Dose hat r = 4 cm und ist 12 cm hoch. Wie groß ist das Etikett? (2 Nachkommastellen)\n  Ergebnis: 301,59 cm²\n  Weg: Das Etikett ist der Mantel: abgerollt ein Rechteck mit Länge = Umfang 2πr und Breite = Höhe h. M = 2 · π · 4 · 12 = 96π ≈ 301,59 cm². Achtung: Keine Kreise dazurechnen – das Etikett deckt nur die Seite, nicht Deckel und Boden.\n- [Abschlussquiz, 3.1a Kreiszahl π und Umfang] Ein Kreis hat den Durchmesser d = 10 cm. Wie groß ist sein Umfang ungefähr? Auswahl: 31,42 cm | 62,83 cm | 78,54 cm | 15,71 cm\n  Ergebnis: 31,42 cm\n  Weg: Mit dem Durchmesser gilt u = π · d (weil 2 · r = d). u = π · 10 ≈ 31,42 cm. Achtung: 2 · π · d (62,83 cm) wäre doppelt so viel – der Faktor 2 gehört nur zu r.\n- [Abschlussquiz, 3.1b Rückwärts rechnen] Der Umfang eines Kreises ist bekannt. Wie kommst du auf den Radius? Auswahl: u : π, dann : 2 | u · π, dann : 2 | u : π, dann · 2 | u : 2, dann · π\n  Ergebnis: u : π, dann : 2\n  Weg: Aus u = π · d folgt d = u : π (Durchmesser), und der Radius ist die Hälfte: r = d : 2. Beispiel: u = 31,42 → d = 10 → r = 5. Achtung: u · π ergäbe viel zu große Werte, und r ist die Hälfte von d, nicht das Doppelte.\n- [Abschlussquiz, 3.2a Flächeninhalt des Kreises] Ein Kreis hat den Durchmesser d = 14 cm. Wie groß ist seine Fläche? (2 Nachkommastellen)\n  Ergebnis: 153,94 cm²\n  Weg: A = π · r². Gegeben ist der Durchmesser, also zuerst halbieren: r = d : 2. r = 14 : 2 = 7 cm → A = π · 7² = 49π ≈ 153,94 cm². Achtung: π · 14² = 615,75 wäre viermal so groß (r und d verwechselt).\n- [Abschlussquiz, 3.2b Kreisringe und Figuren] Kreisring mit R = 5 cm und r = 3 cm. Wie groß ist seine Fläche ungefähr? Auswahl: 50,27 cm² | 12,57 cm² | 106,81 cm²\n  Ergebnis: 50,27 cm²\n  Weg: Kreisring: große Kreisfläche minus kleine, jeweils π · Radius². A = π · 5² − π · 3² = 25π − 9π = 16π ≈ 50,27 cm². Achtung: π · (5 − 3)² = 4π ≈ 12,57 ist falsch – man darf nicht erst die Radien abziehen.\n- [Abschlussquiz, 3.3a Kreisbogen] Wie lang ist ein Halbkreisbogen (α = 180°) bei r = 8 cm ungefähr? Auswahl: 25,13 cm | 50,27 cm | 12,57 cm | 201,06 cm\n  Ergebnis: 25,13 cm\n  Weg: Der Bogen ist ein Teil vom Umfang. 180° sind die Hälfte von 360°. Ganzer Umfang: 2 · π · 8 = 16π ≈ 50,27 cm → die Hälfte ≈ 25,13 cm. Achtung: 50,27 cm wäre der ganze Kreis, 12,57 cm nur ein Viertel.\n- [Abschlussquiz, 3.3b Kreissektor] Kreissektor mit r = 10 cm und α = 72°. Wie groß ist seine Fläche? (2 Nachkommastellen)\n  Ergebnis: 62,83 cm²\n  Weg: Die Sektorfläche ist der Teil α : 360° der Kreisfläche. 72 : 360 = ⅕ (denn 72 · 5 = 360). A = π · 10² : 5 = 100π : 5 = 20π ≈ 62,83 cm². Probe: 5 Sektoren zu 72° ergeben 360°; 5 · 62,83 ≈ 314,2 = 100π ✓.\n- [Abschlussquiz, 3.3c Tangente] Wie groß ist der Winkel zwischen einer Tangente und dem Radius zum Berührpunkt? Auswahl: 90° | 45° | 180° | 60°\n  Ergebnis: 90°\n  Weg: Die Tangente berührt den Kreis nur in einem Punkt P, und der Radius MP steht dort senkrecht auf ihr. Das ergibt einen rechten Winkel, also 90°. Darum kann man bei Tangenten oft den Satz des Pythagoras nutzen. Achtung: 180° wäre eine gerade Linie; 45° und 60° sind keine rechten Winkel.\n- [Abschlussquiz, 3.4a Prisma: Volumen] Ein Prisma hat die Grundfläche G = 18 cm² und die Höhe h = 5 cm. Wie groß ist sein Volumen?\n  Ergebnis: 90 cm³\n  Weg: Prismenvolumen: Grundfläche mal Höhe (Schicht mal Anzahl der Schichten). V = 18 cm² · 5 cm = 90 cm³. Achtung: Die Einheit ist cm³, weil Fläche (cm²) mal Länge (cm) einen Raum ergibt.\n- [Abschlussquiz, 3.4b Prisma: Oberfläche] Wie berechnet man die Oberfläche eines Prismas? Auswahl: 2 · G + u · h | G + u · h | 2 · G + G · h | 2 · u + G · h\n  Ergebnis: 2 · G + u · h\n  Weg: Die Oberfläche besteht aus den zwei Grundflächen (oben und unten, 2 · G) und dem Mantel. Der Mantel ist abgerollt ein Rechteck aus Umfang u und Höhe h. Also O = 2 · G + u · h. Achtung: G · h wäre das Volumen, nicht die Oberfläche.\n- [Abschlussquiz, 3.5a Zylinder: Volumen] Zylinder mit r = 3 cm und h = 8 cm. Wie groß ist sein Volumen? (2 Nachkommastellen)\n  Ergebnis: 226,19 cm³\n  Weg: V = π · r² · h (Grundkreis mal Höhe). V = π · 3² · 8 = 9π · 8 = 72π ≈ 226,19 cm³. Achtung: r = 3 wird quadriert (9), nicht mit 2 malgenommen (6).\n- [Abschlussquiz, 3.5b Zylinder: Oberfläche] Geschlossener Zylinder mit r = 3 cm und h = 7 cm. Wie groß ist die Oberfläche? (2 Nachkommastellen)\n  Ergebnis: 188,5 cm²\n  Weg: O = 2 Kreise + Mantel; der Mantel ist Umfang mal Höhe. 2 · π · 3² = 18π, Mantel: 2 · π · 3 · 7 = 42π → O = 60π ≈ 188,50 cm². Achtung: Der Mantel allein (42π ≈ 131,95 cm²) lässt Deckel und Boden weg.\n- [Übungsaufgaben 2, 3.1a Kreiszahl π und Umfang] Ein Pferd auf dem Karussell sitzt 2,5 m von der Mitte entfernt. Wie weit fährt es bei 10 Runden? (2 Nachkommastellen)\n  Ergebnis: 157,08 m\n  Weg: Eine Runde ist der Umfang des Kreises, auf dem das Pferd fährt (Radius 2,5 m). u = 2 · π · 2,5 = 5π ≈ 15,71 m → 10 Runden: 50π ≈ 157,08 m. Achtung: Die 2,5 m sind der Radius, also 2 · π · r (nicht π · 2,5).\n- [Übungsaufgaben 2, 3.1b Rückwärts rechnen] Ein Hula-Hoop-Reifen ist 251,3 cm lang (Umfang). Welchen Durchmesser hat er? (ganze cm)\n  Ergebnis: 80 cm\n  Weg: Der Reifen ist so lang wie der Umfang: u = π · d, also d = u : π. d = 251,3 : π ≈ 80 cm. Probe: π · 80 ≈ 251,3 ✓. Achtung: Teilt man durch 2π, erhält man nur den Radius 40 cm.\n- [Übungsaufgaben 2, 3.2a Flächeninhalt des Kreises] Eine große Pizza hat 40 cm Durchmesser, eine kleine 20 cm. Wie viel cm² mehr Pizza ist die große als zwei kleine zusammen? (2 Nachkommastellen)\n  Ergebnis: 628,32 cm²\n  Weg: Die Fläche wächst mit dem Quadrat des Radius: doppelter Durchmesser = vierfache Fläche. Groß: r = 20 → 400π; klein: r = 10 → 100π, zwei kleine zusammen 200π. Unterschied: 400π − 200π = 200π ≈ 628,32 cm². Achtung: Die große Pizza entspricht vier kleinen, nicht zwei.\n- [Übungsaufgaben 2, 3.2b Kreisringe und Figuren] Ein Fenster besteht aus einem Rechteck (60 cm breit, 90 cm hoch) mit einem Halbkreis obendrauf (Durchmesser 60 cm). Wie groß ist die Glasfläche? (2 Nachkommastellen)\n  Ergebnis: 6813,72 cm²\n  Weg: Zusammengesetzte Figur: Teilflächen einzeln berechnen und addieren. Halbkreis = ½ · π · r². Rechteck: 60 · 90 = 5 400; Halbkreis mit r = 30: ½ · π · 900 = 450π ≈ 1 413,72 → 5 400 + 1 413,72 = 6 813,72 cm². Achtung: Für den Halbkreis den Radius 30 einsetzen, nicht den Durchmesser 60.\n- [Übungsaufgaben 2, 3.3a Kreisbogen] Eine Torte (d = 30 cm) wird in 12 gleich große Stücke geschnitten. Wie lang ist der Tortenrand eines Stücks? (2 Nachkommastellen)\n  Ergebnis: 7,85 cm\n  Weg: Ein Stück ist ein Zwölftel der Torte, sein Rand also ein Zwölftel vom Umfang. u = π · 30 ≈ 94,25 cm → 94,25 : 12 ≈ 7,85 cm. Achtung: Gefragt ist nur der Bogen am Rand, nicht die geraden Schnittkanten.\n- [Übungsaufgaben 2, 3.3b Kreissektor] Eine Torte (d = 24 cm) wird in 6 gleich große Stücke geteilt. Wie groß ist die Oberseite eines Stücks? (2 Nachkommastellen)\n  Ergebnis: 75,4 cm²\n  Weg: Ein Stück ist ein Sechstel der Kreisfläche. Der Radius ist die Hälfte von 24 cm, also r = 12 cm. A = π · 12² : 6 = 144π : 6 = 24π ≈ 75,40 cm². Achtung: Mit dem Durchmesser (π · 24²) wäre das Ergebnis viermal so groß.\n- [Übungsaufgaben 2, 3.3c Tangente] Von einem Punkt A, der 17 cm vom Mittelpunkt M entfernt ist, geht eine Tangente zum Kreis. Die Strecke von A bis zum Berührpunkt ist 15 cm lang. Wie groß ist der Radius?\n  Ergebnis: 8 cm\n  Weg: Die Tangente steht senkrecht auf dem Radius: rechtwinkliges Dreieck mit Hypotenuse AM = 17 cm, Katheten r und AP = 15 cm. r² = 17² − 15² = 289 − 225 = 64 → r = 8 cm. Probe: 8² + 15² = 64 + 225 = 289 = 17² ✓.\n- [Übungsaufgaben 2, 3.4a Prisma: Volumen] Ein Sockel hat als Grundfläche eine L-Form: ein Rechteck 6 m × 4 m, aus dem eine Ecke von 2 m × 2 m fehlt. Er ist 3 m hoch. Wie groß ist das Volumen?\n  Ergebnis: 60 m³\n  Weg: Prisma: V = G · h. Die Grundfläche ist L-förmig: großes Rechteck minus fehlende Ecke. G = 6 · 4 − 2 · 2 = 24 − 4 = 20 m² → V = 20 · 3 = 60 m³. Achtung: Die Höhe 3 m gehört nicht zur Grundfläche, sondern kommt erst am Ende dazu.\n- [Übungsaufgaben 2, 3.4b Prisma: Oberfläche] Prisma mit rechtwinkligem Dreieck (8, 15, 17 cm) als Grundfläche und h = 10 cm. Wie groß ist die Oberfläche?\n  Ergebnis: 520 cm²\n  Weg: O = 2 · G + u · h. Die Grundfläche ist das Dreieck, u ist sein Umfang. G = ½ · 8 · 15 = 60, u = 8 + 15 + 17 = 40, M = 40 · 10 = 400 → O = 2 · 60 + 400 = 520 cm². Achtung: Die Hypotenuse (17 cm) gehört zum Umfang, aber nicht in die Fläche ½ · 8 · 15.\n- [Übungsaufgaben 2, 3.5a Zylinder: Volumen] Eine runde Regentonne hat r = 0,5 m und ist 1,2 m hoch. Wie viele Liter passen hinein? (2 Nachkommastellen, 1 m³ = 1 000 l)\n  Ergebnis: 942,48 l\n  Weg: Erst V = π · r² · h in m³ ausrechnen, dann umrechnen: 1 m³ = 1 000 l. V = π · 0,5² · 1,2 = π · 0,25 · 1,2 = 0,3π ≈ 0,9425 m³ ≈ 942,48 l. Achtung: 0,5² = 0,25 (nicht 1 und nicht 0,5).\n- [Übungsaufgaben 2, 3.5b Zylinder: Oberfläche] Ein Farbeimer (ohne Deckel) hat r = 15 cm und h = 30 cm. Wie viel Blech braucht man? (2 Nachkommastellen)\n  Ergebnis: 3534,29 cm²\n  Weg: Ohne Deckel zählt nur ein Kreis (Boden) plus Mantel: O = π · r² + 2 · π · r · h. Boden: π · 15² = 225π, Mantel: 2 · π · 15 · 30 = 900π → 1 125π ≈ 3 534,29 cm². Achtung: Mit Deckel wären es zwei Kreise (1 350π), hier aber nur einer.",
  "aufgaben": {
   "Ein Kreis hat den Radius r = 4 cm. Wie groß ist sein Umfang ungefähr?": {
    "teil": "3.1a",
    "typ": "wahl",
    "ergebnis": "25,13 cm",
    "optionen": [
     "25,13 cm",
     "50,27 cm",
     "12,57 cm",
     "8 cm"
    ]
   },
   "Ein Kreis hat den Umfang u = 43,98 cm. Wie groß ist der Radius? (ganze Zahl)": {
    "teil": "3.1b",
    "typ": "zahl",
    "ergebnis": "7 cm",
    "antwort": 7
   },
   "Ein Kreis hat den Radius r = 5 cm. Wie groß ist seine Fläche ungefähr?": {
    "teil": "3.2a",
    "typ": "wahl",
    "ergebnis": "78,54 cm²",
    "optionen": [
     "78,54 cm²",
     "314,16 cm²",
     "31,42 cm²",
     "157,08 cm²"
    ]
   },
   "Kreisring mit R = 6 cm und r = 2 cm. Wie groß ist die Fläche? (2 Nachkommastellen)": {
    "teil": "3.2b",
    "typ": "zahl",
    "ergebnis": "100,53 cm²",
    "antwort": 100.53
   },
   "Wie lang ist der Kreisbogen bei r = 9 cm und α = 60°? (2 Nachkommastellen)": {
    "teil": "3.3a",
    "typ": "zahl",
    "ergebnis": "9,42 cm",
    "antwort": 9.42
   },
   "Ein Kreissektor hat r = 6 cm und α = 90°. Wie groß ist seine Fläche ungefähr?": {
    "teil": "3.3b",
    "typ": "wahl",
    "ergebnis": "28,27 cm²",
    "optionen": [
     "28,27 cm²",
     "9,42 cm²",
     "113,10 cm²",
     "18,85 cm²"
    ]
   },
   "Eine Tangente berührt einen Kreis mit r = 6 cm im Punkt P. Der Punkt A auf der Tangente ist 10 cm vom Mittelpunkt M entfernt. Wie lang ist die Strecke AP?": {
    "teil": "3.3c",
    "typ": "zahl",
    "ergebnis": "8 cm",
    "antwort": 8
   },
   "Ein Dreiecksprisma hat als Grundfläche ein Dreieck mit g = 7 cm und h = 4 cm. Der Körper ist 9 cm hoch. Wie groß ist sein Volumen?": {
    "teil": "3.4a",
    "typ": "zahl",
    "ergebnis": "126 cm³",
    "antwort": 126
   },
   "Prisma mit rechtwinkligem Dreieck (9, 12, 15 cm) als Grundfläche und h = 6 cm. Wie groß ist die Oberfläche?": {
    "teil": "3.4b",
    "typ": "zahl",
    "ergebnis": "324 cm²",
    "antwort": 324
   },
   "Ein Zylinder hat r = 4 cm und h = 10 cm. Wie groß ist sein Volumen? (2 Nachkommastellen)": {
    "teil": "3.5a",
    "typ": "zahl",
    "ergebnis": "502,65 cm³",
    "antwort": 502.65
   },
   "Ein geschlossener Zylinder hat r = 2 cm und h = 6 cm. Wie groß ist seine Oberfläche ungefähr?": {
    "teil": "3.5b",
    "typ": "wahl",
    "ergebnis": "100,53 cm²",
    "optionen": [
     "100,53 cm²",
     "75,40 cm²",
     "87,96 cm²",
     "25,13 cm²"
    ]
   },
   "Ein rundes Trampolin hat 3 m Durchmesser. Wie lang ist das Sicherheitsnetz rundherum? (2 Nachkommastellen)": {
    "teil": "3.1a",
    "typ": "zahl",
    "ergebnis": "9,42 m",
    "antwort": 9.42
   },
   "Um einen Baumstamm misst du mit dem Maßband 188,5 cm. Wie dick ist der Baum (Durchmesser, ganze cm)?": {
    "teil": "3.1b",
    "typ": "zahl",
    "ergebnis": "60 cm",
    "antwort": 60
   },
   "Eine Pizza hat 30 cm Durchmesser. Wie groß ist ihre Fläche? (2 Nachkommastellen)": {
    "teil": "3.2a",
    "typ": "zahl",
    "ergebnis": "706,86 cm²",
    "antwort": 706.86
   },
   "Um einen runden Springbrunnen (r = 3 m) soll ein 1 m breiter Weg gepflastert werden. Wie groß ist die Wegfläche? (2 Nachkommastellen)": {
    "teil": "3.2b",
    "typ": "zahl",
    "ergebnis": "21,99 m²",
    "antwort": 21.99
   },
   "Der Minutenzeiger einer Uhr ist 15 cm lang. Welchen Weg legt seine Spitze in 20 Minuten zurück? (2 Nachkommastellen)": {
    "teil": "3.3a",
    "typ": "zahl",
    "ergebnis": "31,42 cm",
    "antwort": 31.42
   },
   "Ein Rasensprenger dreht sich um 270° und spritzt 5 m weit. Wie groß ist die bewässerte Fläche? (2 Nachkommastellen)": {
    "teil": "3.3b",
    "typ": "zahl",
    "ergebnis": "58,9 m²",
    "antwort": 58.9
   },
   "Von einem Punkt A, der 15 cm vom Mittelpunkt eines Kreises mit r = 9 cm entfernt ist, geht eine Tangente zum Kreis. Wie lang ist die Strecke von A bis zum Berührpunkt?": {
    "teil": "3.3c",
    "typ": "zahl",
    "ergebnis": "12 cm",
    "antwort": 12
   },
   "Ein Dachboden ist ein Dreiecksprisma: Der Giebel ist 8 m breit und 3 m hoch, das Haus ist 10 m lang. Wie groß ist der Raum?": {
    "teil": "3.4a",
    "typ": "zahl",
    "ergebnis": "120 m³",
    "antwort": 120
   },
   "Ein Zelt ist ein Dreiecksprisma: Der Giebel ist 3 m breit und 2 m hoch, das Zelt ist 4 m lang. Wie viel Stoff braucht man für 2 Giebelwände und 2 Dachflächen (ohne Boden)?": {
    "teil": "3.4b",
    "typ": "zahl",
    "ergebnis": "26 m²",
    "antwort": 26
   },
   "Eine Konservendose hat r = 5 cm und h = 11 cm. Wie viel passt hinein? (2 Nachkommastellen)": {
    "teil": "3.5a",
    "typ": "zahl",
    "ergebnis": "863,94 cm³",
    "antwort": 863.94
   },
   "Das Etikett einer Dose geht einmal ganz herum. Die Dose hat r = 4 cm und ist 12 cm hoch. Wie groß ist das Etikett? (2 Nachkommastellen)": {
    "teil": "3.5b",
    "typ": "zahl",
    "ergebnis": "301,59 cm²",
    "antwort": 301.59
   },
   "Ein Kreis hat den Durchmesser d = 10 cm. Wie groß ist sein Umfang ungefähr?": {
    "teil": "3.1a",
    "typ": "wahl",
    "ergebnis": "31,42 cm",
    "optionen": [
     "31,42 cm",
     "62,83 cm",
     "78,54 cm",
     "15,71 cm"
    ]
   },
   "Der Umfang eines Kreises ist bekannt. Wie kommst du auf den Radius?": {
    "teil": "3.1b",
    "typ": "wahl",
    "ergebnis": "u : π, dann : 2",
    "optionen": [
     "u : π, dann : 2",
     "u · π, dann : 2",
     "u : π, dann · 2",
     "u : 2, dann · π"
    ]
   },
   "Ein Kreis hat den Durchmesser d = 14 cm. Wie groß ist seine Fläche? (2 Nachkommastellen)": {
    "teil": "3.2a",
    "typ": "zahl",
    "ergebnis": "153,94 cm²",
    "antwort": 153.94
   },
   "Kreisring mit R = 5 cm und r = 3 cm. Wie groß ist seine Fläche ungefähr?": {
    "teil": "3.2b",
    "typ": "wahl",
    "ergebnis": "50,27 cm²",
    "optionen": [
     "50,27 cm²",
     "12,57 cm²",
     "106,81 cm²"
    ]
   },
   "Wie lang ist ein Halbkreisbogen (α = 180°) bei r = 8 cm ungefähr?": {
    "teil": "3.3a",
    "typ": "wahl",
    "ergebnis": "25,13 cm",
    "optionen": [
     "25,13 cm",
     "50,27 cm",
     "12,57 cm",
     "201,06 cm"
    ]
   },
   "Kreissektor mit r = 10 cm und α = 72°. Wie groß ist seine Fläche? (2 Nachkommastellen)": {
    "teil": "3.3b",
    "typ": "zahl",
    "ergebnis": "62,83 cm²",
    "antwort": 62.83
   },
   "Wie groß ist der Winkel zwischen einer Tangente und dem Radius zum Berührpunkt?": {
    "teil": "3.3c",
    "typ": "wahl",
    "ergebnis": "90°",
    "optionen": [
     "90°",
     "45°",
     "180°",
     "60°"
    ]
   },
   "Ein Prisma hat die Grundfläche G = 18 cm² und die Höhe h = 5 cm. Wie groß ist sein Volumen?": {
    "teil": "3.4a",
    "typ": "zahl",
    "ergebnis": "90 cm³",
    "antwort": 90
   },
   "Wie berechnet man die Oberfläche eines Prismas?": {
    "teil": "3.4b",
    "typ": "wahl",
    "ergebnis": "2 · G + u · h",
    "optionen": [
     "2 · G + u · h",
     "G + u · h",
     "2 · G + G · h",
     "2 · u + G · h"
    ]
   },
   "Zylinder mit r = 3 cm und h = 8 cm. Wie groß ist sein Volumen? (2 Nachkommastellen)": {
    "teil": "3.5a",
    "typ": "zahl",
    "ergebnis": "226,19 cm³",
    "antwort": 226.19
   },
   "Geschlossener Zylinder mit r = 3 cm und h = 7 cm. Wie groß ist die Oberfläche? (2 Nachkommastellen)": {
    "teil": "3.5b",
    "typ": "zahl",
    "ergebnis": "188,5 cm²",
    "antwort": 188.5
   },
   "Ein Pferd auf dem Karussell sitzt 2,5 m von der Mitte entfernt. Wie weit fährt es bei 10 Runden? (2 Nachkommastellen)": {
    "teil": "3.1a",
    "typ": "zahl",
    "ergebnis": "157,08 m",
    "antwort": 157.08
   },
   "Ein Hula-Hoop-Reifen ist 251,3 cm lang (Umfang). Welchen Durchmesser hat er? (ganze cm)": {
    "teil": "3.1b",
    "typ": "zahl",
    "ergebnis": "80 cm",
    "antwort": 80
   },
   "Eine große Pizza hat 40 cm Durchmesser, eine kleine 20 cm. Wie viel cm² mehr Pizza ist die große als zwei kleine zusammen? (2 Nachkommastellen)": {
    "teil": "3.2a",
    "typ": "zahl",
    "ergebnis": "628,32 cm²",
    "antwort": 628.32
   },
   "Ein Fenster besteht aus einem Rechteck (60 cm breit, 90 cm hoch) mit einem Halbkreis obendrauf (Durchmesser 60 cm). Wie groß ist die Glasfläche? (2 Nachkommastellen)": {
    "teil": "3.2b",
    "typ": "zahl",
    "ergebnis": "6813,72 cm²",
    "antwort": 6813.72
   },
   "Eine Torte (d = 30 cm) wird in 12 gleich große Stücke geschnitten. Wie lang ist der Tortenrand eines Stücks? (2 Nachkommastellen)": {
    "teil": "3.3a",
    "typ": "zahl",
    "ergebnis": "7,85 cm",
    "antwort": 7.85
   },
   "Eine Torte (d = 24 cm) wird in 6 gleich große Stücke geteilt. Wie groß ist die Oberseite eines Stücks? (2 Nachkommastellen)": {
    "teil": "3.3b",
    "typ": "zahl",
    "ergebnis": "75,4 cm²",
    "antwort": 75.4
   },
   "Von einem Punkt A, der 17 cm vom Mittelpunkt M entfernt ist, geht eine Tangente zum Kreis. Die Strecke von A bis zum Berührpunkt ist 15 cm lang. Wie groß ist der Radius?": {
    "teil": "3.3c",
    "typ": "zahl",
    "ergebnis": "8 cm",
    "antwort": 8
   },
   "Ein Sockel hat als Grundfläche eine L-Form: ein Rechteck 6 m × 4 m, aus dem eine Ecke von 2 m × 2 m fehlt. Er ist 3 m hoch. Wie groß ist das Volumen?": {
    "teil": "3.4a",
    "typ": "zahl",
    "ergebnis": "60 m³",
    "antwort": 60
   },
   "Prisma mit rechtwinkligem Dreieck (8, 15, 17 cm) als Grundfläche und h = 10 cm. Wie groß ist die Oberfläche?": {
    "teil": "3.4b",
    "typ": "zahl",
    "ergebnis": "520 cm²",
    "antwort": 520
   },
   "Eine runde Regentonne hat r = 0,5 m und ist 1,2 m hoch. Wie viele Liter passen hinein? (2 Nachkommastellen, 1 m³ = 1 000 l)": {
    "teil": "3.5a",
    "typ": "zahl",
    "ergebnis": "942,48 l",
    "antwort": 942.48
   },
   "Ein Farbeimer (ohne Deckel) hat r = 15 cm und h = 30 cm. Wie viel Blech braucht man? (2 Nachkommastellen)": {
    "teil": "3.5b",
    "typ": "zahl",
    "ergebnis": "3534,29 cm²",
    "antwort": 3534.29
   },
   "Ein Fahrradreifen hat 65 cm Durchmesser. Wie oft dreht sich das Rad auf 1 km Strecke? (ganze Zahl)": {
    "teil": "3.1a",
    "typ": "zahl",
    "klausur": true
   },
   "Der Radius eines Kreises wird verdoppelt. Was passiert mit der Fläche?": {
    "teil": "3.2a",
    "typ": "wahl",
    "klausur": true
   },
   "Ein Kreisring hat außen den Durchmesser 20 cm und innen 12 cm. Wie groß ist seine Fläche? (2 Nachkommastellen)": {
    "teil": "3.2b",
    "typ": "zahl",
    "klausur": true
   },
   "Kreissektor mit r = 6 cm und α = 80°. Wie groß ist seine Fläche? (2 Nachkommastellen)": {
    "teil": "3.3b",
    "typ": "zahl",
    "klausur": true
   },
   "Ein Kreis hat r = 7 cm. Von A geht eine Tangente zum Berührpunkt P, AP = 24 cm. Wie weit ist A vom Mittelpunkt M entfernt?": {
    "teil": "3.3c",
    "typ": "zahl",
    "klausur": true
   },
   "Ein Prisma hat das Volumen 216 cm³ und die Grundfläche 24 cm². Wie hoch ist es?": {
    "teil": "3.4a",
    "typ": "zahl",
    "klausur": true
   },
   "Ein Zylinder mit r = 4 cm soll 500 cm³ fassen. Wie hoch muss er sein? (2 Nachkommastellen)": {
    "teil": "3.5a",
    "typ": "zahl",
    "klausur": true
   },
   "Geschlossener Zylinder mit r = 5 cm und h = 12 cm. Wie groß ist die Oberfläche? (2 Nachkommastellen)": {
    "teil": "3.5b",
    "typ": "zahl",
    "klausur": true
   }
  }
 },
 "4-potenzen": {
  "titel": "Potenzen",
  "fach": "mathe",
  "klasse": 9,
  "teile": {
   "4.1a": "Basis und Exponent",
   "4.1b": "Große Zahlen",
   "4.1c": "Kleine Zahlen",
   "4.2a": "Gleiche Basis",
   "4.2b": "Gleicher Exponent",
   "4.2c": "Potenzen potenzieren",
   "4.3a": "n-te Wurzeln",
   "4.3b": "Wurzel als Potenz"
  },
  "text": "# Potenzen (Mathe, Klasse 9)\n\n## Merkkästen der Arbeitsblätter\n### 4.1a Basis und Exponent\nEine Potenz ist eine Kurzschreibweise für Malnehmen mit dem gleichen Faktor:\nan = a · a · … · a\n(n Faktoren)\na ist die Basis (der Faktor), n ist der Exponent (wie oft er vorkommt).\n1 Basis erkennen: 25 → 2\n2 Exponent zählt die Faktoren: 5\n3 Ausrechnen: 2 · 2 · 2 · 2 · 2 = 32\n\n### 4.1b Große Zahlen\n10n ist eine 1 mit n Nullen: 106 = 1 000 000.\nGroße Zahlen schreibt man kurz als a · 10n\nmit einer Zahl a zwischen 1 und 10.\n1 Komma nach der 1. Ziffer: 380 000 → 3,8\n2 Stellen zählen: 5\n3 Schreiben: 3,8 · 105\n\n### 4.1c Kleine Zahlen\nEin negativer Exponent bedeutet „1 geteilt durch“: 10−n = 1 : 10n\nKleine Zahlen schreibt man so: 0,00052 = 5,2 · 10−4.\n1 Komma hinter die 1. Ziffer ≠ 0: 0,00052 → 5,2\n2 Stellen nach rechts zählen: 4\n3 Minus davor: 5,2 · 10−4\n\n### 4.2a Gleiche Basis\nBei gleicher Basis: am · an = am+n\nund   am : an = am−n\nWarum? 23 · 24 = (2 · 2 · 2) · (2 · 2 · 2 · 2) = 27\n1 Gleiche Basis? 23 · 24 → ja\n2 Exponenten addieren: 3 + 4 = 7\n3 Basis bleibt: 27 = 128\n\n### 4.2b Gleicher Exponent\nBei gleichem Exponenten: an · bn = (a · b)n\nund   an : bn = (a : b)n\nDamit kann man oft geschickt im Kopf rechnen.\n1 Gleicher Exponent? 23 · 53 → ja\n2 Basen malnehmen: 2 · 5 = 10\n3 Ergebnis: 103 = 1 000\n\n### 4.2c Potenzen potenzieren\nWird eine Potenz potenziert, werden die Exponenten multipliziert:\n(am)n = am · n\n1 (23)2 heißt 23 · 23\n2 Exponenten malnehmen: 3 · 2 = 6\n3 Ergebnis: 26 = 64\n\n### 4.3a n-te Wurzeln\nn√a ist die Zahl, die hoch n genommen a ergibt: 3√8 = 2\n, weil 23 = 8.\nWurzelziehen ist die Umkehrung vom Potenzieren.\n1 Fragen: 3√64 → ? hoch 3 = 64\n2 Probieren: 33 = 27, 43 = 64 ✓\n3 Ergebnis: 3√64 = 4\n\n### 4.3b Wurzel als Potenz\nJede Wurzel lässt sich als Potenz schreiben: n√a = a1/n\nund   n√am = am/n\nDie Quadratwurzel ist der Fall n = 2: √a = a1/2.\n1 Wurzelexponent → Nenner: 3√x = x1/3\n2 Exponent innen → Zähler: 3√x2 = x2/3\n3 Rechnen: 81/3 = 3√8 = 2\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 4.1a Basis und Exponent] Was bedeutet 3⁴? Auswahl: 3 · 4 = 12 | 3 · 3 · 3 · 3 = 81 | 4 · 4 · 4 = 64 | 3 + 3 + 3 + 3 = 12\n  Ergebnis: 3 · 3 · 3 · 3 = 81\n  Weg: Eine Potenz ist eine Kurzschreibweise für wiederholtes Malnehmen: Der Exponent sagt, wie oft die Basis als Faktor vorkommt. Hier: 3⁴ = 3 · 3 · 3 · 3 = 9 · 9 = 81. Achtung: 3 · 4 = 12 wäre falsch – das hieße, die 3 wird nur addiert, nicht malgenommen.\n- [Einstiegsquiz, 4.1b Große Zahlen] Wie schreibt man 6 500 000 in Standardform (Zahl zwischen 1 und 10 mal Zehnerpotenz)? Auswahl: 6,5 · 10⁶ | 65 · 10⁵ | 6,5 · 10⁵ | 0,65 · 10⁷\n  Ergebnis: 6,5 · 10⁶\n  Weg: Eine Zehnerpotenz zählt, wie oft das Komma wandert. Man schreibt die Zahl mit einer Zahl zwischen 1 und 10 vorne (Standardform). 6 500 000: Das Komma muss 6 Stellen nach links, bis es hinter der 6 steht → 6,5 · 10⁶. Probe: 6,5 · 1 000 000 = 6 500 000 ✓. Achtung: 6,5 · 10⁵ wären nur 650 000. 65 · 10⁵ und 0,65 · 10⁷ haben zwar denselben Wert, sind aber keine Standardform (65 und 0,65 liegen nicht zwischen 1 und 10).\n- [Einstiegsquiz, 4.1c Kleine Zahlen] Wie schreibt man 0,0004 mit einer Zehnerpotenz? Auswahl: 4 · 10⁻⁴ | 4 · 10⁴ | 4 · 10⁻³ | 0,4 · 10⁻⁴\n  Ergebnis: 4 · 10⁻⁴\n  Weg: Negative Exponenten stehen für kleine Zahlen: 10⁻ⁿ = 1 : 10ⁿ, das Komma wandert n Stellen nach links. 0,0004: Das Komma muss 4 Stellen nach rechts, bis es hinter der 4 steht → 4 · 10⁻⁴. Probe: 4 : 10 000 = 0,0004 ✓. Achtung: 4 · 10⁴ = 40 000 wäre eine riesige Zahl – der Exponent muss negativ sein.\n- [Einstiegsquiz, 4.2a Gleiche Basis] Was ergibt 2⁵ · 2³? Auswahl: 2⁸ | 2¹⁵ | 4⁸ | 4¹⁵\n  Ergebnis: 2⁸\n  Weg: Beim Malnehmen gleicher Basen zählt man die Faktoren: 2⁵ sind fünf Faktoren 2, 2³ sind drei – zusammen 5 + 3 = 8 Faktoren. Darum addiert man die Exponenten. 2⁵ · 2³ = 2⁵⁺³ = 2⁸ = 256. Probe: 32 · 8 = 256 ✓. Achtung: 2¹⁵ wäre falsch, denn die Exponenten werden hier nicht malgenommen.\n- [Einstiegsquiz, 4.2b Gleicher Exponent] Was ergibt 2⁴ · 5⁴? Auswahl: 10⁴ | 10⁸ | 7⁴ | 10¹⁶\n  Ergebnis: 10⁴\n  Weg: Haben zwei Potenzen denselben Exponenten, darf man die Basen zusammen malnehmen: 2⁴ · 5⁴ = (2 · 5) · (2 · 5) · (2 · 5) · (2 · 5), also vier Faktoren 10. 2⁴ · 5⁴ = (2 · 5)⁴ = 10⁴ = 10 000. Probe: 16 · 625 = 10 000 ✓. Achtung: 10⁸ wäre falsch – der Exponent bleibt 4, er wird nicht addiert.\n- [Einstiegsquiz, 4.2c Potenzen potenzieren] Berechne (2³)².\n  Ergebnis: 64\n  Weg: (2³)² bedeutet, dass die Potenz 2³ zweimal als Faktor vorkommt – das sind 3 · 2 = 6 Faktoren 2. Darum multipliziert man die Exponenten. (2³)² = 2³ˑ² = 2⁶ = 64. Probe: 2³ = 8 und 8² = 64 ✓. Achtung: Addieren (2⁵ = 32) wäre falsch.\n- [Einstiegsquiz, 4.3a n-te Wurzeln] Wie viel ist ⁴√81? (Welche Zahl hoch 4 ergibt 81?)\n  Ergebnis: 3\n  Weg: Die n-te Wurzel fragt rückwärts: Welche Zahl ergibt „hoch n“ die Zahl unter der Wurzel? Bei ⁴√81: Welche Zahl hoch 4 ist 81? Ausprobieren: 2⁴ = 16 (zu klein), 3⁴ = 3 · 3 · 3 · 3 = 81 ✓ → ⁴√81 = 3. Achtung: 81 : 4 ≈ 20 wäre falsch – Wurzelziehen ist kein Teilen.\n- [Einstiegsquiz, 4.3b Wurzel als Potenz] Wie schreibt man die dritte Wurzel ³√x als Potenz? Auswahl: x^(1/3) | x³ | x^(−3) | 3 · x\n  Ergebnis: x^(1/3)\n  Weg: Eine Wurzel ist eine Potenz mit einem Bruch im Exponenten: Der Wurzelexponent kommt in den Nenner, denn Wurzelziehen macht das Potenzieren rückgängig. ³√x = x^(1/3). Probe: (x^(1/3))³ = x^(1/3 · 3) = x¹ = x ✓. Achtung: x^(−3) wäre 1 : x³ – ein negativer Exponent bedeutet Kehrwert, nicht Wurzel.\n- [Übungsaufgaben 1, 4.1a Basis und Exponent] Eine Bakterie verdoppelt sich jede Stunde: nach 1 Stunde sind es 2, nach 2 Stunden 2², … Wie viele Bakterien sind es nach 10 Stunden, wenn man mit einer einzigen startet?\n  Ergebnis: 1024 Bakterien\n  Weg: Jede Stunde verdoppelt sich die Zahl, also kommt pro Stunde ein Faktor 2 dazu: Nach n Stunden gibt es 2ⁿ Bakterien. Nach 10 Stunden: 2¹⁰ = 2⁵ · 2⁵ = 32 · 32 = 1 024. Achtung: 2 · 10 = 20 wäre falsch – das hieße nur +2 pro Stunde statt Verdopplung.\n- [Übungsaufgaben 1, 4.1b Große Zahlen] Die Sonne hat einen Durchmesser von etwa 1 400 000 km. Wie schreibt man das in Standardform (Zahl zwischen 1 und 10 mal Zehnerpotenz)? Auswahl: 1,4 · 10⁶ km | 14 · 10⁵ km | 1,4 · 10⁷ km | 1,4 · 10⁵ km\n  Ergebnis: 1,4 · 10⁶ km\n  Weg: Standardform: eine Zahl zwischen 1 und 10, mal Zehnerpotenz. Der Exponent zählt, wie viele Stellen das Komma wandert. 1 400 000: Das Komma muss 6 Stellen nach links, bis es hinter der 1 steht → 1,4 · 10⁶ km. Probe: 1,4 · 1 000 000 = 1 400 000 ✓. Achtung: 1,4 · 10⁵ wären nur 140 000 km. 14 · 10⁵ km hat denselben Wert, ist aber keine Standardform, weil 14 größer als 10 ist.\n- [Übungsaufgaben 1, 4.1c Kleine Zahlen] Ein Virus ist etwa 0,0000001 m groß. Das schreibt man als 10ⁿ. Welche Zahl ist n?\n  Ergebnis: -7\n  Weg: 10⁻ⁿ ist ein Bruchteil: 10⁻ⁿ = 1 : 10ⁿ. Die Anzahl der Nachkommastellen ist der Betrag des Exponenten. 0,0000001 hat 7 Nachkommastellen = 1 : 10 000 000 = 1 : 10⁷ = 10⁻⁷ → n = −7. Achtung: n = 7 wäre 10⁷ = 10 000 000, also eine riesige statt winzige Zahl – das Minus nicht vergessen.\n- [Übungsaufgaben 1, 4.2a Gleiche Basis] Ein Handy hat 2¹⁰ GB Speicher. Ein Film braucht 2⁴ GB. Wie viele Filme passen darauf?\n  Ergebnis: 64 Filme\n  Weg: Beim Teilen gleicher Basen kürzen sich gemeinsame Faktoren weg – übrig bleiben 10 − 4 Faktoren. Darum subtrahiert man die Exponenten. 2¹⁰ : 2⁴ = 2¹⁰⁻⁴ = 2⁶ = 64 Filme. Probe: 1 024 : 16 = 64 ✓. Achtung: Die Exponenten werden subtrahiert, nicht geteilt (10 : 4 wäre falsch).\n- [Übungsaufgaben 1, 4.2b Gleicher Exponent] Ein kleiner Würfel hat 3 cm lange Kanten. Ein großer Würfel hat 4-mal so lange Kanten. Wie groß ist das Volumen des großen Würfels? Tipp: (4 · 3)³\n  Ergebnis: 1728 cm³\n  Weg: Gleicher Exponent: a³ · b³ = (a · b)³. Wird die Kante 4-mal so lang, wächst das Volumen in allen drei Richtungen, also 4³-mal. Große Kante: 4 · 3 = 12 cm → V = 12³ = 12 · 12 · 12 = 1 728 cm³. Probe: 3³ = 27 und 4³ = 64, 27 · 64 = 1 728 ✓. Achtung: 4 · 3³ = 108 wäre falsch.\n- [Übungsaufgaben 1, 4.2c Potenzen potenzieren] Ein Quadrat hat die Seitenlänge 2⁴ cm. Wie groß ist seine Fläche?\n  Ergebnis: 256 cm²\n  Weg: Die Fläche eines Quadrats ist Seite · Seite = Seite². Die Seite ist selbst eine Potenz, also (2⁴)² – dabei multipliziert man die Exponenten. A = (2⁴)² = 2⁴ˑ² = 2⁸ = 256 cm². Probe: Seite 2⁴ = 16 cm, 16 · 16 = 256 ✓. Achtung: Addieren (2⁶ = 64) wäre falsch.\n- [Übungsaufgaben 1, 4.3a n-te Wurzeln] Ein würfelförmiger Wassertank fasst 512 Liter (1 Liter = 1 dm³). Wie lang ist eine Kante?\n  Ergebnis: 8 dm\n  Weg: Ein Würfel mit der Kante a hat das Volumen a³. Rückwärts ist die Kante die dritte Wurzel des Volumens. 512 Liter = 512 dm³ → a = ³√512. Ausprobieren: 7³ = 343 (zu klein), 8³ = 8 · 8 · 8 = 512 ✓ → a = 8 dm. Achtung: 512 : 3 ≈ 171 wäre falsch – die Kante ist die Wurzel, kein Drittel.\n- [Übungsaufgaben 1, 4.3b Wurzel als Potenz] Rechne aus: 125^(2/3). Tipp: erst die dritte Wurzel, dann hoch 2.\n  Ergebnis: 25\n  Weg: Ein Bruch im Exponenten heißt: Der Nenner gibt die Wurzel an, der Zähler die Potenz. Bei 125^(2/3) also: dritte Wurzel, dann hoch 2. ³√125 = 5 (denn 5 · 5 · 5 = 125), dann 5² = 25. Achtung: 125 · 2 : 3 ≈ 83,3 wäre falsch – der Bruch im Exponenten bedeutet Wurzel und Potenz, nicht Malnehmen und Teilen.\n- [Abschlussquiz, 4.1a Basis und Exponent] Was ergibt (−3)²? Auswahl: 9 | −9 | 6 | −6\n  Ergebnis: 9\n  Weg: Die Klammer gehört zur Basis: (−3)² heißt (−3) · (−3). Minus mal Minus ergibt Plus. (−3)² = (−3) · (−3) = +9. Achtung: −9 wäre das Ergebnis von −3² ohne Klammer, denn dort wird nur die 3 quadriert und das Minus bleibt davor.\n- [Abschlussquiz, 4.1b Große Zahlen] 52 000 000 = a · 10⁷. Wie groß ist a?\n  Ergebnis: 5,2\n  Weg: In der Standardform steht vorne eine Zahl a zwischen 1 und 10, der Exponent zählt die Stellen, die das Komma gewandert ist. 52 000 000: Das Komma muss 7 Stellen nach links, bis es hinter der 5 steht → 5,2 · 10⁷ → a = 5,2. Probe: 5,2 · 10 000 000 = 52 000 000 ✓. Achtung: a = 52 würde 520 000 000 ergeben.\n- [Abschlussquiz, 4.1c Kleine Zahlen] Was ist 10⁻² als Dezimalzahl? Auswahl: 0,01 | −100 | 0,001 | 0,02\n  Ergebnis: 0,01\n  Weg: Ein negativer Exponent bedeutet Kehrwert: 10⁻ⁿ = 1 : 10ⁿ. Die Zahl wird dadurch klein, nicht negativ. 10⁻² = 1 : 10² = 1 : 100 = 0,01. Achtung: −100 wäre falsch, das Minus im Exponenten macht die Zahl nicht negativ. 0,001 wäre 10⁻³ (3 Nachkommastellen).\n- [Abschlussquiz, 4.2a Gleiche Basis] Was ergibt x⁶ : x²? Auswahl: x⁴ | x³ | x⁸ | x¹²\n  Ergebnis: x⁴\n  Weg: Beim Teilen gleicher Basen kürzen sich gemeinsame Faktoren weg: x⁶ : x² = (x·x·x·x·x·x) : (x·x) – vier x bleiben übrig. Darum subtrahiert man die Exponenten. x⁶ : x² = x⁶⁻² = x⁴. Achtung: 6 : 2 = 3 (also x³) wäre falsch – die Exponenten werden subtrahiert, nicht geteilt.\n- [Abschlussquiz, 4.2b Gleicher Exponent] Rechne geschickt: 0,25³ · 4³\n  Ergebnis: 1\n  Weg: Gleicher Exponent: a³ · b³ = (a · b)³. Das lohnt sich, wenn das Produkt der Basen eine glatte Zahl ist. 0,25³ · 4³ = (0,25 · 4)³ = 1³ = 1. Probe: 0,25³ = 0,015625 und 4³ = 64, 0,015625 · 64 = 1 ✓. Beide Wege führen zum Ziel, der erste ist viel kürzer.\n- [Abschlussquiz, 4.2c Potenzen potenzieren] Was ergibt (x³)⁴? Auswahl: x¹² | x⁷ | x⁸¹\n  Ergebnis: x¹²\n  Weg: (x³)⁴ bedeutet, dass die Potenz x³ viermal als Faktor vorkommt – das sind 3 · 4 = 12 Faktoren x. Darum multipliziert man die Exponenten. (x³)⁴ = x³ˑ⁴ = x¹². Achtung: x⁷ (3 + 4) wäre das Ergebnis von x³ · x⁴ – eine andere Rechnung.\n- [Abschlussquiz, 4.3a n-te Wurzeln] Wie viel ist ³√216?\n  Ergebnis: 6\n  Weg: ³√216 fragt: Welche Zahl hoch 3 ergibt 216? Erst einkreisen: 5³ = 125 (zu klein), 7³ = 343 (zu groß). 6³ = 6 · 6 · 6 = 36 · 6 = 216 ✓ → ³√216 = 6. Achtung: 216 : 3 = 72 wäre falsch – Wurzelziehen ist kein Teilen.\n- [Abschlussquiz, 4.3b Wurzel als Potenz] Wie viel ist 25^(1/2)? Auswahl: 5 | 12,5 | 625 | 50\n  Ergebnis: 5\n  Weg: Der Exponent ½ bedeutet Quadratwurzel: x^(1/2) = √x. Der Nenner 2 ist der Wurzelexponent. 25^(1/2) = √25 = 5, denn 5 · 5 = 25. Achtung: 25 : 2 = 12,5 wäre falsch – ein Exponent ½ heißt Wurzel ziehen, nicht halbieren.\n- [Übungsaufgaben 2, 4.1a Basis und Exponent] Ein Gerücht verbreitet sich: An Tag 1 hören es 4 Personen neu. Jede dieser Personen erzählt es am nächsten Tag 4 neuen Personen, und so weiter. Wie viele Personen hören es an Tag 4 neu?\n  Ergebnis: 256 Personen\n  Weg: Jede Person erzählt es 4 neuen weiter, also kommt pro Tag ein Faktor 4 dazu: An Tag n hören es 4ⁿ Personen neu. Tag 4: 4⁴ = 4 · 4 · 4 · 4 = 16 · 16 = 256 Personen. Probe Tag für Tag: 4 → 16 → 64 → 256 ✓. Achtung: 4 · 4 = 16 wäre erst Tag 2.\n- [Übungsaufgaben 2, 4.1b Große Zahlen] Der Mond ist etwa 3,84 · 10⁵ km entfernt. Licht legt etwa 3 · 10⁵ km pro Sekunde zurück. Wie viele Sekunden braucht das Licht bis zum Mond? (2 Nachkommastellen)\n  Ergebnis: 1,28 s\n  Weg: Zeit = Strecke : Geschwindigkeit. Zahlen und Zehnerpotenzen darf man getrennt rechnen; beim Teilen werden die Exponenten subtrahiert (5 − 5 = 0). t = 3,84 · 10⁵ : (3 · 10⁵) = (3,84 : 3) · 10⁰ = 1,28 · 1 = 1,28 s. Probe: 3 · 10⁵ km/s · 1,28 s = 3,84 · 10⁵ km ✓.\n- [Übungsaufgaben 2, 4.1c Kleine Zahlen] Ein Haar ist etwa 0,00008 m = 8 · 10⁻⁵ m dick. Wie viele Haare müsste man nebeneinanderlegen, um 1 mm (= 0,001 m) zu erreichen? (1 Nachkommastelle)\n  Ergebnis: 12,5 Haare\n  Weg: Gefragt ist, wie oft 0,00008 m in 0,001 m hineinpasst – das ist eine Division. 0,001 : 0,00008 = 100 : 8 (beide Zahlen mal 100 000) = 12,5 Haare. Mit Zehnerpotenzen: 10⁻³ : (8 · 10⁻⁵) = 0,125 · 10² = 12,5. Probe: 12,5 · 0,00008 = 0,001 ✓.\n- [Übungsaufgaben 2, 4.2a Gleiche Basis] Eine Bakterienkultur hat 3⁵ Zellen. Nach einer Behandlung sind es nur noch 3² Zellen. Um welchen Faktor sind es weniger geworden?\n  Ergebnis: 27\n  Weg: Beim Teilen gleicher Basen kürzen sich gemeinsame Faktoren 3 weg, also subtrahiert man die Exponenten. 3⁵ : 3² = 3⁵⁻² = 3³ = 27. Probe: 3⁵ = 243 und 3² = 9, 243 : 9 = 27 ✓. Achtung: 5 : 2 = 2,5 wäre falsch – nur die Exponenten werden subtrahiert.\n- [Übungsaufgaben 2, 4.2b Gleicher Exponent] Rechne geschickt im Kopf: 0,2⁵ · 50⁵\n  Ergebnis: 100000\n  Weg: Gleicher Exponent: a⁵ · b⁵ = (a · b)⁵. Hier lohnt es sich, denn 0,2 · 50 = 10 ist eine glatte Zahl. 0,2⁵ · 50⁵ = (0,2 · 50)⁵ = 10⁵ = 100 000. Probe: 0,2⁵ = 0,00032 und 50⁵ = 312 500 000, 0,00032 · 312 500 000 = 100 000 ✓ – aber viel mühsamer.\n- [Übungsaufgaben 2, 4.2c Potenzen potenzieren] Ein Würfel hat die Kantenlänge 10² cm. Wie groß ist sein Volumen? Auswahl: 10⁶ cm³ | 10⁵ cm³ | 10⁸ cm³ | 30² cm³\n  Ergebnis: 10⁶ cm³\n  Weg: Die Kante ist selbst eine Potenz und V = Kante³. Bei (10²)³ kommt 10² dreimal als Faktor vor – 2 · 3 = 6 Faktoren 10. V = (10²)³ = 10²ˑ³ = 10⁶ cm³ = 1 000 000 cm³. Probe: Kante 100 cm, 100 · 100 · 100 = 1 000 000 ✓. Achtung: 10⁵ (2 + 3) wäre falsch.\n- [Übungsaufgaben 2, 4.3a n-te Wurzeln] Eine würfelförmige Spielzeugkiste fasst 3 375 cm³. Wie lang ist eine Kante?\n  Ergebnis: 15 cm\n  Weg: Beim Würfel ist V = a³, also ist die Kante a = ³√V. ³√3 375: 10³ = 1 000 (zu klein), 20³ = 8 000 (zu groß), Endziffer 5 → 15. Probe: 15 · 15 = 225, 225 · 15 = 3 375 ✓ → 15 cm. Achtung: 3 375 : 3 = 1 125 wäre falsch – die Kante ist die dritte Wurzel, kein Drittel.\n- [Übungsaufgaben 2, 4.3b Wurzel als Potenz] Mia sagt: „27^(2/3) = 9“. Ben sagt: „27^(2/3) = 18“. Wer hat recht? Auswahl: Nur Mia | Nur Ben | Beide | Keiner\n  Ergebnis: Nur Mia\n  Weg: Ein Bruch im Exponenten: Der Nenner gibt die Wurzel an, der Zähler die Potenz. Bei 27^(2/3): erst ³√27, dann hoch 2. 27^(2/3) = (³√27)² = 3² = 9, denn 3 · 3 · 3 = 27. Mia hat recht. Achtung: Ben hat 27 · 2 : 3 = 18 gerechnet – der Bruch im Exponenten ist kein Malnehmen und Teilen der Basis.",
  "aufgaben": {
   "Was bedeutet 3⁴?": {
    "teil": "4.1a",
    "typ": "wahl",
    "ergebnis": "3 · 3 · 3 · 3 = 81",
    "optionen": [
     "3 · 4 = 12",
     "3 · 3 · 3 · 3 = 81",
     "4 · 4 · 4 = 64",
     "3 + 3 + 3 + 3 = 12"
    ]
   },
   "Wie schreibt man 6 500 000 in Standardform (Zahl zwischen 1 und 10 mal Zehnerpotenz)?": {
    "teil": "4.1b",
    "typ": "wahl",
    "ergebnis": "6,5 · 10⁶",
    "optionen": [
     "6,5 · 10⁶",
     "65 · 10⁵",
     "6,5 · 10⁵",
     "0,65 · 10⁷"
    ]
   },
   "Wie schreibt man 0,0004 mit einer Zehnerpotenz?": {
    "teil": "4.1c",
    "typ": "wahl",
    "ergebnis": "4 · 10⁻⁴",
    "optionen": [
     "4 · 10⁻⁴",
     "4 · 10⁴",
     "4 · 10⁻³",
     "0,4 · 10⁻⁴"
    ]
   },
   "Was ergibt 2⁵ · 2³?": {
    "teil": "4.2a",
    "typ": "wahl",
    "ergebnis": "2⁸",
    "optionen": [
     "2⁸",
     "2¹⁵",
     "4⁸",
     "4¹⁵"
    ]
   },
   "Was ergibt 2⁴ · 5⁴?": {
    "teil": "4.2b",
    "typ": "wahl",
    "ergebnis": "10⁴",
    "optionen": [
     "10⁴",
     "10⁸",
     "7⁴",
     "10¹⁶"
    ]
   },
   "Berechne (2³)².": {
    "teil": "4.2c",
    "typ": "zahl",
    "ergebnis": "64",
    "antwort": 64
   },
   "Wie viel ist ⁴√81? (Welche Zahl hoch 4 ergibt 81?)": {
    "teil": "4.3a",
    "typ": "zahl",
    "ergebnis": "3",
    "antwort": 3
   },
   "Wie schreibt man die dritte Wurzel ³√x als Potenz?": {
    "teil": "4.3b",
    "typ": "wahl",
    "ergebnis": "x^(1/3)",
    "optionen": [
     "x^(1/3)",
     "x³",
     "x^(−3)",
     "3 · x"
    ]
   },
   "Eine Bakterie verdoppelt sich jede Stunde: nach 1 Stunde sind es 2, nach 2 Stunden 2², … Wie viele Bakterien sind es nach 10 Stunden, wenn man mit einer einzigen startet?": {
    "teil": "4.1a",
    "typ": "zahl",
    "ergebnis": "1024 Bakterien",
    "antwort": 1024
   },
   "Die Sonne hat einen Durchmesser von etwa 1 400 000 km. Wie schreibt man das in Standardform (Zahl zwischen 1 und 10 mal Zehnerpotenz)?": {
    "teil": "4.1b",
    "typ": "wahl",
    "ergebnis": "1,4 · 10⁶ km",
    "optionen": [
     "1,4 · 10⁶ km",
     "14 · 10⁵ km",
     "1,4 · 10⁷ km",
     "1,4 · 10⁵ km"
    ]
   },
   "Ein Virus ist etwa 0,0000001 m groß. Das schreibt man als 10ⁿ. Welche Zahl ist n?": {
    "teil": "4.1c",
    "typ": "zahl",
    "ergebnis": "-7",
    "antwort": -7
   },
   "Ein Handy hat 2¹⁰ GB Speicher. Ein Film braucht 2⁴ GB. Wie viele Filme passen darauf?": {
    "teil": "4.2a",
    "typ": "zahl",
    "ergebnis": "64 Filme",
    "antwort": 64
   },
   "Ein kleiner Würfel hat 3 cm lange Kanten. Ein großer Würfel hat 4-mal so lange Kanten. Wie groß ist das Volumen des großen Würfels? Tipp: (4 · 3)³": {
    "teil": "4.2b",
    "typ": "zahl",
    "ergebnis": "1728 cm³",
    "antwort": 1728
   },
   "Ein Quadrat hat die Seitenlänge 2⁴ cm. Wie groß ist seine Fläche?": {
    "teil": "4.2c",
    "typ": "zahl",
    "ergebnis": "256 cm²",
    "antwort": 256
   },
   "Ein würfelförmiger Wassertank fasst 512 Liter (1 Liter = 1 dm³). Wie lang ist eine Kante?": {
    "teil": "4.3a",
    "typ": "zahl",
    "ergebnis": "8 dm",
    "antwort": 8
   },
   "Rechne aus: 125^(2/3). Tipp: erst die dritte Wurzel, dann hoch 2.": {
    "teil": "4.3b",
    "typ": "zahl",
    "ergebnis": "25",
    "antwort": 25
   },
   "Was ergibt (−3)²?": {
    "teil": "4.1a",
    "typ": "wahl",
    "ergebnis": "9",
    "optionen": [
     "9",
     "−9",
     "6",
     "−6"
    ]
   },
   "52 000 000 = a · 10⁷. Wie groß ist a?": {
    "teil": "4.1b",
    "typ": "zahl",
    "ergebnis": "5,2",
    "antwort": 5.2
   },
   "Was ist 10⁻² als Dezimalzahl?": {
    "teil": "4.1c",
    "typ": "wahl",
    "ergebnis": "0,01",
    "optionen": [
     "0,01",
     "−100",
     "0,001",
     "0,02"
    ]
   },
   "Was ergibt x⁶ : x²?": {
    "teil": "4.2a",
    "typ": "wahl",
    "ergebnis": "x⁴",
    "optionen": [
     "x⁴",
     "x³",
     "x⁸",
     "x¹²"
    ]
   },
   "Rechne geschickt: 0,25³ · 4³": {
    "teil": "4.2b",
    "typ": "zahl",
    "ergebnis": "1",
    "antwort": 1
   },
   "Was ergibt (x³)⁴?": {
    "teil": "4.2c",
    "typ": "wahl",
    "ergebnis": "x¹²",
    "optionen": [
     "x¹²",
     "x⁷",
     "x⁸¹"
    ]
   },
   "Wie viel ist ³√216?": {
    "teil": "4.3a",
    "typ": "zahl",
    "ergebnis": "6",
    "antwort": 6
   },
   "Wie viel ist 25^(1/2)?": {
    "teil": "4.3b",
    "typ": "wahl",
    "ergebnis": "5",
    "optionen": [
     "5",
     "12,5",
     "625",
     "50"
    ]
   },
   "Ein Gerücht verbreitet sich: An Tag 1 hören es 4 Personen neu. Jede dieser Personen erzählt es am nächsten Tag 4 neuen Personen, und so weiter. Wie viele Personen hören es an Tag 4 neu?": {
    "teil": "4.1a",
    "typ": "zahl",
    "ergebnis": "256 Personen",
    "antwort": 256
   },
   "Der Mond ist etwa 3,84 · 10⁵ km entfernt. Licht legt etwa 3 · 10⁵ km pro Sekunde zurück. Wie viele Sekunden braucht das Licht bis zum Mond? (2 Nachkommastellen)": {
    "teil": "4.1b",
    "typ": "zahl",
    "ergebnis": "1,28 s",
    "antwort": 1.28
   },
   "Ein Haar ist etwa 0,00008 m = 8 · 10⁻⁵ m dick. Wie viele Haare müsste man nebeneinanderlegen, um 1 mm (= 0,001 m) zu erreichen? (1 Nachkommastelle)": {
    "teil": "4.1c",
    "typ": "zahl",
    "ergebnis": "12,5 Haare",
    "antwort": 12.5
   },
   "Eine Bakterienkultur hat 3⁵ Zellen. Nach einer Behandlung sind es nur noch 3² Zellen. Um welchen Faktor sind es weniger geworden?": {
    "teil": "4.2a",
    "typ": "zahl",
    "ergebnis": "27",
    "antwort": 27
   },
   "Rechne geschickt im Kopf: 0,2⁵ · 50⁵": {
    "teil": "4.2b",
    "typ": "zahl",
    "ergebnis": "100000",
    "antwort": 100000
   },
   "Ein Würfel hat die Kantenlänge 10² cm. Wie groß ist sein Volumen?": {
    "teil": "4.2c",
    "typ": "wahl",
    "ergebnis": "10⁶ cm³",
    "optionen": [
     "10⁶ cm³",
     "10⁵ cm³",
     "10⁸ cm³",
     "30² cm³"
    ]
   },
   "Eine würfelförmige Spielzeugkiste fasst 3 375 cm³. Wie lang ist eine Kante?": {
    "teil": "4.3a",
    "typ": "zahl",
    "ergebnis": "15 cm",
    "antwort": 15
   },
   "Mia sagt: „27^(2/3) = 9“. Ben sagt: „27^(2/3) = 18“. Wer hat recht?": {
    "teil": "4.3b",
    "typ": "wahl",
    "ergebnis": "Nur Mia",
    "optionen": [
     "Nur Mia",
     "Nur Ben",
     "Beide",
     "Keiner"
    ]
   },
   "Berechne 2⁵ − 5². (Vorsicht: 2⁵ ≠ 5²!)": {
    "teil": "4.1a",
    "typ": "zahl",
    "klausur": true
   },
   "Die Erde wiegt etwa 6 · 10²⁴ kg, der Mond etwa 7,3 · 10²² kg. Wie oft wiegt die Erde so viel wie der Mond? (auf ganze Zahl gerundet)": {
    "teil": "4.1b",
    "typ": "zahl",
    "klausur": true
   },
   "Welche dieser Zahlen ist die kleinste?": {
    "teil": "4.1c",
    "typ": "wahl",
    "klausur": true
   },
   "Vereinfache und berechne: 3⁷ : 3⁴ · 3²": {
    "teil": "4.2a",
    "typ": "zahl",
    "klausur": true
   },
   "Berechne geschickt: (2⁴ · 3⁴) : 6³": {
    "teil": "4.2b",
    "typ": "zahl",
    "klausur": true
   },
   "Was ergibt (a³ · a²)²?": {
    "teil": "4.2c",
    "typ": "wahl",
    "klausur": true
   },
   "Berechne ⁴√16 + ³√27.": {
    "teil": "4.3a",
    "typ": "zahl",
    "klausur": true
   },
   "Berechne 16^(3/4). Tipp: erst vierte Wurzel, dann hoch 3.": {
    "teil": "4.3b",
    "typ": "zahl",
    "klausur": true
   }
  }
 },
 "5-pythagoras-koerper": {
  "titel": "Pythagoras und Körper",
  "fach": "mathe",
  "klasse": 9,
  "teile": {
   "5.1a": "Hypotenuse berechnen",
   "5.1b": "Kathete berechnen",
   "5.1c": "Rechtwinklig oder nicht?",
   "5.1d": "Versteckte Dreiecke",
   "5.1e": "Der Puzzle-Beweis",
   "5.2a": "Pyramide: Volumen",
   "5.2b": "Pyramide: Oberfläche",
   "5.3a": "Kegel: Volumen",
   "5.3b": "Kegel: Oberfläche",
   "5.4a": "Kugel: Volumen",
   "5.4b": "Kugel: Oberfläche"
  },
  "text": "# Pythagoras und Körper (Mathe, Klasse 9)\n\n## Merkkästen der Arbeitsblätter\n### 5.1a Hypotenuse berechnen\nIm rechtwinkligen Dreieck gilt: a² + b² = c²\nc ist die Hypotenuse: die längste Seite, gegenüber vom rechten Winkel.\n1 Quadrieren: 3² + 4² = 9 + 16\n2 Addieren: = 25\n3 Wurzel: √25 = 5\n\n### 5.1b Kathete berechnen\nIst eine Kathete gesucht, wird subtrahiert: b² = c² − a²\nDie Hypotenuse c ist bekannt und steht immer vorne.\n1 Quadrieren: 10² − 6² = 100 − 36\n2 Subtrahieren: = 64\n3 Wurzel: √64 = 8\n\n### 5.1c Rechtwinklig oder nicht?\nGilt a² + b² = c²\n, dann ist das Dreieck rechtwinklig. Sonst nicht.\nWichtig: c ist immer die längste Seite.\n1 c finden: 6, 8, 10 → c = 10\n2 Prüfen: 6² + 8² = 36 + 64 = 100\n3 Vergleichen: 10² = 100 ✓\n\n### 5.1d Versteckte Dreiecke\nIn vielen Figuren steckt ein rechtwinkliges Dreieck. Findest du es, hilft Pythagoras.\nDiagonale im Rechteck: d² = l² + b²\n1 Dreieck einzeichnen\n2 c finden: hier d\n3 Rechnen: 8² + 6² = 100 → d = 10\n\n### 5.1e Der Puzzle-Beweis\nLege 4 gleiche rechtwinklige Dreiecke in ein Quadrat mit Seite a + b. In der Mitte bleibt ein Loch: das Quadrat c².\nGroßes Quadrat = 4 Dreiecke + Loch: (a+b)² = 4 · ½ab + c²\n1 Ausrechnen: a² + 2ab + b² = 2ab + c²\n2 2ab auf beiden Seiten weg\n3 Übrig: a² + b² = c²\n\n### 5.2a Pyramide: Volumen\nVolumen der Pyramide: V = ⅓ · G · h\n(G = Grundfläche, h = Höhe)\nEine Pyramide passt genau 3-mal in einen Quader mit gleicher Grundfläche und Höhe.\n1 Grundfläche: G = 6 · 6 = 36 cm²\n2 Mal Höhe: 36 · 5 = 180\n3 Durch 3: V = 60 cm³\n\n### 5.2b Pyramide: Oberfläche\nOberfläche = Grundfläche + Mantel: O = a² + 4 · ½ · a · hs\nDer Mantel sind 4 gleiche Dreiecke. hs ist die Höhe eines Seitendreiecks.\n1 Grundfläche: 6 · 6 = 36\n2 Mantel: 4 · ½ · 6 · 5 = 60\n3 O = 36 + 60 = 96 cm²\n\n### 5.3a Kegel: Volumen\nVolumen des Kegels: V = ⅓ · π · r² · h\nWie bei der Pyramide: Ein Kegel passt 3-mal in einen Zylinder mit gleichem r und h.\n1 Grundfläche: π · 3² ≈ 28,27 cm²\n2 Mal Höhe: 28,27 · 10 ≈ 282,74\n3 Durch 3: V ≈ 94,25 cm³\n\n### 5.3b Kegel: Oberfläche\nMantel: M = π · r · s\nGrundfläche: G = π · r²\nO = G + M\ns ist die Mantellinie (Spitze bis Rand). Sie ist die Hypotenuse: s² = r² + h².\n1 s = √(3² + 4²) = 5\n2 M = π · 3 · 5 ≈ 47,12\n3 O ≈ 28,27 + 47,12 = 75,39 cm²\n\n### 5.4a Kugel: Volumen\nVolumen der Kugel: V = 4⁄3 · π · r³\nr³ heißt r · r · r. Achtung: Oft ist der Durchmesser d gegeben, dann ist r = d : 2.\n1 Hoch 3: 3³ = 27\n2 Mal π: 27 · π ≈ 84,82\n3 Mal 4, durch 3: V ≈ 113,10 cm³\n\n### 5.4b Kugel: Oberfläche\nOberfläche der Kugel: O = 4 · π · r²\nDie Kugel ist genau so groß wie 4 Kreise mit demselben Radius.\n1 Quadrieren: 5² = 25\n2 Mal π: 25 · π ≈ 78,54\n3 Mal 4: O ≈ 314,16 cm²\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 5.1a Hypotenuse berechnen] Ein rechtwinkliges Dreieck hat die Katheten a = 6 cm und b = 8 cm. Wie lang ist die Hypotenuse c? Auswahl: 14 cm | 10 cm | 48 cm | 100 cm\n  Ergebnis: 10 cm\n  Weg: Satz des Pythagoras: Im rechtwinkligen Dreieck ergeben die Quadrate der beiden Katheten (Seiten am rechten Winkel) zusammen das Quadrat der Hypotenuse (längste Seite, gegenüber dem rechten Winkel): a² + b² = c². 6² + 8² = 36 + 64 = 100 → c = √100 = 10 cm. Achtung: 14 cm (6 + 8) wäre falsch – c ist kürzer als a + b. Und 100 ist erst c², die Wurzel fehlt noch.\n- [Einstiegsquiz, 5.1b Kathete berechnen] c = 13 cm, a = 5 cm. Wie lang ist die Kathete b?\n  Ergebnis: 12 cm\n  Weg: Man kann Pythagoras umstellen: Ist die Hypotenuse c bekannt und eine Kathete fehlt, wird subtrahiert: b² = c² − a². 13² − 5² = 169 − 25 = 144 → b = √144 = 12 cm. Probe: 5² + 12² = 25 + 144 = 169 = 13² ✓. Achtung: Die Kathete muss kürzer sein als die Hypotenuse.\n- [Einstiegsquiz, 5.1c Rechtwinklig oder nicht?] Ist ein Dreieck mit den Seiten 7 cm, 24 cm und 25 cm rechtwinklig? Auswahl: Ja | Nein\n  Ergebnis: Ja\n  Weg: Umkehrung des Pythagoras: Gilt a² + b² = c² (mit der längsten Seite als c), dann ist das Dreieck rechtwinklig – sonst nicht. Längste Seite 25 cm: 7² + 24² = 49 + 576 = 625 und 25² = 625. Beide gleich → ja, rechtwinklig. Achtung: Man vergleicht die Quadrate, nicht die Seitenlängen selbst.\n- [Einstiegsquiz, 5.1d Versteckte Dreiecke] Ein Rechteck ist 9 cm breit und 12 cm lang. Wie lang ist die Diagonale?\n  Ergebnis: 15 cm\n  Weg: Die Diagonale teilt das Rechteck in zwei rechtwinklige Dreiecke: Breite und Länge sind die Katheten, die Diagonale ist die Hypotenuse. d² = 9² + 12² = 81 + 144 = 225 → d = √225 = 15 cm. Probe: 15 ist länger als 12, aber kürzer als 9 + 12 = 21 ✓. Achtung: 21 cm wäre der Weg an den Seiten entlang, nicht die Diagonale.\n- [Einstiegsquiz, 5.1e Der Puzzle-Beweis] Beim Puzzle-Beweis liegen 4 gleiche Dreiecke in einem Quadrat mit der Seite a + b. Was bleibt in der Mitte frei? Auswahl: Ein Quadrat mit der Fläche c² | Ein Rechteck mit der Fläche a · b | Ein Dreieck | Ein Quadrat mit der Fläche a²\n  Ergebnis: Ein Quadrat mit der Fläche c²\n  Weg: Beim Puzzle-Beweis liegen 4 gleiche Dreiecke in einem Quadrat der Seite a + b. Ihre Hypotenusen (alle Länge c) umranden in der Mitte ein Viereck mit 4 gleichen Seiten und rechten Winkeln – ein Quadrat. Seine Fläche ist Seite · Seite = c². Genau dieses Quadrat bleibt frei. Achtung: a · b ist die Fläche eines Rechtecks, a² die eines Quadrats über einer Kathete – beide liegen nicht in der Mitte.\n- [Einstiegsquiz, 5.2a Pyramide: Volumen] Eine Pyramide hat eine quadratische Grundfläche mit a = 6 cm und die Höhe h = 10 cm. Wie groß ist ihr Volumen?\n  Ergebnis: 120 cm³\n  Weg: Eine Pyramide fasst ein Drittel eines Quaders mit gleicher Grundfläche und Höhe: V = ⅓ · G · h. Quadratische Grundfläche: G = 6 · 6 = 36 cm² → V = ⅓ · 36 · 10 = 12 · 10 = 120 cm³. Probe: Quader 36 · 10 = 360 cm³, davon ein Drittel = 120 ✓. Achtung: Ohne ⅓ käme 360 heraus.\n- [Einstiegsquiz, 5.2b Pyramide: Oberfläche] Quadratische Pyramide: a = 4 cm, Höhe der Seitendreiecke h_s = 5 cm. Wie groß ist die Oberfläche?\n  Ergebnis: 56 cm²\n  Weg: Oberfläche einer Pyramide = Grundfläche + Mantel. Der Mantel besteht aus 4 gleichen Dreiecken mit der Höhe h_s (nicht der Pyramidenhöhe). G = 4 · 4 = 16 cm². Ein Dreieck: ½ · 4 · 5 = 10 cm², vier Dreiecke: 40 cm² → O = 16 + 40 = 56 cm². Achtung: Beim Dreieck das ½ nicht vergessen – sonst wäre der Mantel 80 statt 40.\n- [Einstiegsquiz, 5.3a Kegel: Volumen] Ein Kegel hat r = 3 cm und h = 4 cm. Wie groß ist sein Volumen ungefähr? Auswahl: 37,70 cm³ | 113,10 cm³ | 12,57 cm³ | 28,27 cm³\n  Ergebnis: 37,70 cm³\n  Weg: Ein Kegel fasst ein Drittel eines Zylinders mit gleichem Grundkreis und gleicher Höhe: V = ⅓ · π · r² · h. V = ⅓ · π · 3² · 4 = ⅓ · π · 36 = 12π ≈ 37,70 cm³. Achtung: 113,10 cm³ wäre der Zylinder (36π, ohne ⅓): 113,10 : 3 ≈ 37,70 ✓.\n- [Einstiegsquiz, 5.3b Kegel: Oberfläche] Ein Kegel hat r = 6 cm und h = 8 cm. Wie lang ist die Mantellinie s?\n  Ergebnis: 10 cm\n  Weg: Radius r, Höhe h und Mantellinie s (Kante vom Rand zur Spitze) bilden ein rechtwinkliges Dreieck, s ist die Hypotenuse: s² = r² + h². s² = 6² + 8² = 36 + 64 = 100 → s = √100 = 10 cm. Achtung: 14 cm (6 + 8) wäre falsch – s ist die Hypotenuse und damit kürzer als r + h.\n- [Einstiegsquiz, 5.4a Kugel: Volumen] Eine Kugel hat den Durchmesser 6 cm. Wie groß ist ihr Volumen ungefähr? Auswahl: 113,10 cm³ | 904,78 cm³ | 37,70 cm³ | 28,27 cm³\n  Ergebnis: 113,10 cm³\n  Weg: Das Kugelvolumen hängt vom Radius ab: V = ⁴⁄₃ · π · r³. Der Radius ist der halbe Durchmesser. d = 6 cm → r = 3 cm → V = ⁴⁄₃ · π · 27 = 36π ≈ 113,10 cm³. Achtung: Mit r = 6 käme 904,78 cm³ heraus – das ist die Kugel mit 12 cm Durchmesser.\n- [Einstiegsquiz, 5.4b Kugel: Oberfläche] Eine Kugel hat r = 5 cm. Wie groß ist ihre Oberfläche? (2 Nachkommastellen)\n  Ergebnis: 314,16 cm²\n  Weg: Die Oberfläche einer Kugel ist so groß wie vier Kreise mit demselben Radius: O = 4 · π · r². O = 4 · π · 5² = 4 · π · 25 = 100π ≈ 314,16 cm². Achtung: r wird nur quadriert: 5² = 25, nicht 5 · 2 = 10 und nicht 5³.\n- [Übungsaufgaben 1, 5.1a Hypotenuse berechnen] Ein Tablet-Bildschirm ist 24 cm breit und 18 cm hoch. Wie lang ist die Diagonale?\n  Ergebnis: 30 cm\n  Weg: Das Tablet ist ein Rechteck. Breite und Höhe sind Katheten, die Diagonale ist die Hypotenuse: d² = a² + b². 24² + 18² = 576 + 324 = 900 → d = √900 = 30 cm. Probe: 30 ist länger als 24, aber kürzer als 24 + 18 = 42 ✓. Achtung: 42 cm wäre der Weg an den Kanten entlang.\n- [Übungsaufgaben 1, 5.1b Kathete berechnen] Eine 6,5 m lange Leiter lehnt an einer Wand, ihr Fuß steht 2,5 m von der Wand weg. Wie hoch reicht sie?\n  Ergebnis: 6 m\n  Weg: Wand, Boden und Leiter bilden ein rechtwinkliges Dreieck. Die Leiter ist die Hypotenuse, die gesuchte Höhe eine Kathete: h² = c² − a². 6,5² − 2,5² = 42,25 − 6,25 = 36 → h = √36 = 6 m. Probe: 2,5² + 6² = 6,25 + 36 = 42,25 = 6,5² ✓. Achtung: Subtrahieren, weil die Leiter die längste Seite ist.\n- [Übungsaufgaben 1, 5.1c Rechtwinklig oder nicht?] Ein Gärtner misst an einer Beet-Ecke 6 m und 8 m, quer von Ende zu Ende 10 m. Ist die Ecke rechtwinklig? Auswahl: Ja | Nein\n  Ergebnis: Ja\n  Weg: Umkehrung des Pythagoras: Gilt a² + b² = c² mit der längsten Seite als c, dann ist die Ecke rechtwinklig. 6² + 8² = 36 + 64 = 100 und 10² = 100 → gleich, also genau 90°. Achtung: Nicht 6 + 8 = 14 mit 10 vergleichen – es müssen die Quadrate verglichen werden.\n- [Übungsaufgaben 1, 5.1d Versteckte Dreiecke] Ein Quadrat hat die Seitenlänge 5 cm. Wie lang ist die Diagonale? (2 Nachkommastellen)\n  Ergebnis: 7,07 cm\n  Weg: Die Diagonale teilt das Quadrat in zwei rechtwinklige Dreiecke mit zwei gleich langen Katheten (je 5 cm). d² = 5² + 5² = 25 + 25 = 50 → d = √50 ≈ 7,07 cm. Probe: 7,07² ≈ 49,98 ≈ 50 ✓. Achtung: 5 + 5 = 10 wäre falsch – die Diagonale ist kürzer als zwei Seiten zusammen.\n- [Übungsaufgaben 1, 5.1e Der Puzzle-Beweis] Puzzle-Beweis mit a = 5 cm und b = 12 cm: Großes Quadrat minus 4 Dreiecke – wie groß ist das Loch c²?\n  Ergebnis: 169 cm²\n  Weg: Vom großen Quadrat (Seite a + b) nimmt man die 4 Dreiecke weg. Übrig bleibt das Quadrat über der Hypotenuse, c². (5 + 12)² = 17² = 289. Ein Dreieck: ½ · 5 · 12 = 30, vier Dreiecke: 120. Loch: 289 − 120 = 169 cm². Probe: 5² + 12² = 25 + 144 = 169 ✓, also c = √169 = 13 cm.\n- [Übungsaufgaben 1, 5.2a Pyramide: Volumen] Eine Pyramide hat eine rechteckige Grundfläche 8 cm × 6 cm und ist 9 cm hoch. Wie groß ist ihr Volumen?\n  Ergebnis: 144 cm³\n  Weg: V = ⅓ · G · h gilt für jede Pyramide, auch mit rechteckiger Grundfläche; G ist dann die Fläche des Rechtecks. G = 8 · 6 = 48 cm² → V = ⅓ · 48 · 9 = 16 · 9 = 144 cm³. Probe: Quader 48 · 9 = 432 cm³, davon ein Drittel = 144 ✓.\n- [Übungsaufgaben 1, 5.2b Pyramide: Oberfläche] Quadratische Pyramide: a = 10 cm, Höhe h = 12 cm. Berechne erst h_s, dann die Oberfläche.\n  Ergebnis: 360 cm²\n  Weg: Die Höhe h_s der Seitendreiecke ist nicht die Pyramidenhöhe h. Sie bildet mit h und der halben Grundkante (a : 2) ein rechtwinkliges Dreieck: h_s² = h² + (a : 2)². h_s = √(12² + 5²) = √169 = 13 cm. O = G + Mantel = 10 · 10 + 4 · ½ · 10 · 13 = 100 + 260 = 360 cm². Achtung: Die Kathete ist die halbe Grundkante (5), nicht die ganze (10).\n- [Übungsaufgaben 1, 5.3a Kegel: Volumen] Eine Eiswaffel (Kegel) hat oben 8 cm Durchmesser und ist 12 cm hoch. Wie viel passt hinein? (2 Nachkommastellen)\n  Ergebnis: 201,06 cm³\n  Weg: Die Eiswaffel ist ein Kegel: V = ⅓ · π · r² · h. Gegeben ist der Durchmesser, also zuerst halbieren. r = 8 : 2 = 4 cm → V = ⅓ · π · 4² · 12 = ⅓ · π · 192 = 64π ≈ 201,06 cm³. Achtung: Mit r = 8 statt 4 wäre das Ergebnis viermal zu groß.\n- [Übungsaufgaben 1, 5.3b Kegel: Oberfläche] Ein Partyhut (Kegel ohne Boden) hat r = 5 cm und h = 12 cm. Wie viel Pappe braucht man? (2 Nachkommastellen)\n  Ergebnis: 204,2 cm²\n  Weg: Ein Hut ohne Boden hat nur den Mantel: M = π · r · s. Die Mantellinie s ist die Hypotenuse aus r und h. s = √(5² + 12²) = √169 = 13 cm → M = π · 5 · 13 = 65π ≈ 204,20 cm². Achtung: Mit h = 12 statt s = 13 wäre das Ergebnis zu klein (π · 5 · 12 ≈ 188,50).\n- [Übungsaufgaben 1, 5.4a Kugel: Volumen] Ein Fußball hat 22 cm Durchmesser. Wie groß ist sein Volumen? (auf ganze cm³ gerundet)\n  Ergebnis: 5575 cm³\n  Weg: Das Kugelvolumen ist V = ⁴⁄₃ · π · r³, mit dem Radius (halber Durchmesser). r = 22 : 2 = 11 cm → r³ = 11 · 11 · 11 = 1 331 → V = ⁴⁄₃ · π · 1 331 ≈ 5 575 cm³. Achtung: Setzt man d = 22 statt r = 11 ein, wird das Ergebnis 8-mal zu groß (≈ 44 600 cm³).\n- [Übungsaufgaben 1, 5.4b Kugel: Oberfläche] Ein Ball hat r = 10 cm. Wie groß ist seine Oberfläche? (2 Nachkommastellen)\n  Ergebnis: 1256,64 cm²\n  Weg: Die Oberfläche der Kugel ist O = 4 · π · r² (vier Kreisflächen). Nur der Radius wird quadriert. O = 4 · π · 10² = 4 · π · 100 = 400π ≈ 1 256,64 cm². Achtung: r² = 10 · 10 = 100, nicht 2 · 10 = 20 und nicht r³.\n- [Abschlussquiz, 5.1a Hypotenuse berechnen] a = 9 cm, b = 12 cm. Wie lang ist die Hypotenuse c?\n  Ergebnis: 15 cm\n  Weg: Katheten 9 cm und 12 cm, gesucht ist die Hypotenuse (längste Seite): c² = a² + b², hier wird addiert. 9² + 12² = 81 + 144 = 225 → c = √225 = 15 cm. Probe: 15 ist länger als 12, aber kürzer als 9 + 12 = 21 ✓. Achtung: 225 ist erst c², die Wurzel nicht vergessen.\n- [Abschlussquiz, 5.1b Kathete berechnen] c = 10 cm, a = 6 cm. Wie lang ist b? Auswahl: 8 cm | 4 cm | 11,66 cm | 16 cm\n  Ergebnis: 8 cm\n  Weg: Gesucht ist eine Kathete, die Hypotenuse c ist bekannt: Dann wird subtrahiert, b² = c² − a². 10² − 6² = 100 − 36 = 64 → b = √64 = 8 cm. Achtung: 11,66 cm (= √136) käme heraus, wenn man 10² + 6² rechnet – dann wäre die Kathete länger als die Hypotenuse, unmöglich.\n- [Abschlussquiz, 5.1c Rechtwinklig oder nicht?] Welches Zahlen-Trio gehört zu einem rechtwinkligen Dreieck? Auswahl: 5, 6, 8 | 8, 15, 17 | 4, 5, 7 | 6, 7, 9\n  Ergebnis: 8, 15, 17\n  Weg: Ein Zahlen-Trio passt zu einem rechten Winkel, wenn die zwei kleineren Quadrate zusammen das Quadrat der größten Zahl ergeben. 8² + 15² = 64 + 225 = 289 = 17² ✓ → passt. Achtung: Die anderen passen nicht: 5² + 6² = 61 ≠ 64, 4² + 5² = 41 ≠ 49, 6² + 7² = 85 ≠ 81.\n- [Abschlussquiz, 5.1d Versteckte Dreiecke] Ein gleichschenkliges Dreieck hat Schenkel von 5 cm und eine Grundseite von 6 cm. Wie hoch ist es? Auswahl: 4 cm | 7,81 cm | 3 cm | 8 cm\n  Ergebnis: 4 cm\n  Weg: Die Höhe teilt das gleichschenklige Dreieck in zwei rechtwinklige Dreiecke: Hypotenuse = Schenkel (5 cm), eine Kathete = halbe Grundseite, die andere = Höhe. Halbe Grundseite 6 : 2 = 3 cm → h² = 5² − 3² = 25 − 9 = 16 → h = 4 cm. Probe: 3² + 4² = 25 = 5² ✓. Achtung: 7,81 cm (= √61) käme von 5² + 6² – die Höhe wäre dann länger als der Schenkel, unmöglich.\n- [Abschlussquiz, 5.1e Der Puzzle-Beweis] Was zeigt der Puzzle-Beweis? Auswahl: a² + b² = c² | a + b = c | a · b = c² | c² − a² = a · b\n  Ergebnis: a² + b² = c²\n  Weg: Der Puzzle-Beweis legt dasselbe große Quadrat (Seite a + b) und dieselben 4 Dreiecke auf zwei Arten aus. Im einen Bild bleibt c² frei, im anderen a² + b². Großes Quadrat und Dreiecke sind gleich, also müssen auch die freien Flächen gleich sein: c² = a² + b². Achtung: a + b = c wäre falsch – c ist immer kürzer als a + b.\n- [Abschlussquiz, 5.2a Pyramide: Volumen] Wie oft passt eine Pyramide in einen Quader mit gleicher Grundfläche und Höhe? Auswahl: 2-mal | 3-mal | 4-mal | ½-mal\n  Ergebnis: 3-mal\n  Weg: Füllt man eine Pyramide dreimal und kippt sie in einen Quader mit gleicher Grundfläche G und Höhe h, ist der Quader genau voll. Der Quader fasst G · h, die Pyramide also ein Drittel davon. Darum V = ⅓ · G · h. Beispiel: G = 12, h = 5 → Quader 60, Pyramide 20. Achtung: Der Faktor ⅓ gilt für Pyramide und Kegel, nicht für Quader und Zylinder.\n- [Abschlussquiz, 5.2b Pyramide: Oberfläche] Quadratische Pyramide: a = 6 cm, h_s = 4 cm. Wie groß ist die Oberfläche?\n  Ergebnis: 84 cm²\n  Weg: Oberfläche = Grundfläche + Mantel. Der Mantel besteht aus 4 Dreiecken mit ½ · a · h_s (h_s ist schon gegeben). G = 6 · 6 = 36 cm², Mantel = 4 · ½ · 6 · 4 = 48 cm² → O = 36 + 48 = 84 cm². Achtung: Die Grundfläche gehört zur Oberfläche dazu – 48 cm² ist nur der Mantel.\n- [Abschlussquiz, 5.3a Kegel: Volumen] Kegel mit r = 3 cm und h = 10 cm. Volumen? (2 Nachkommastellen)\n  Ergebnis: 94,25 cm³\n  Weg: Kegelvolumen: V = ⅓ · π · r² · h, also ein Drittel von Grundkreis mal Höhe. V = ⅓ · π · 3² · 10 = ⅓ · π · 90 = 30π ≈ 94,25 cm³. Achtung: Nur der Radius wird quadriert (3² = 9), nicht π · 3.\n- [Abschlussquiz, 5.3b Kegel: Oberfläche] Kegel mit r = 3 cm und h = 4 cm. Wie groß ist der Mantel? (2 Nachkommastellen)\n  Ergebnis: 47,12 cm²\n  Weg: Der Mantel eines Kegels ist M = π · r · s. Die Mantellinie s fehlt noch: Sie ist die Hypotenuse aus r und h, s² = r² + h². s² = 3² + 4² = 9 + 16 = 25 → s = 5 cm → M = π · 3 · 5 = 15π ≈ 47,12 cm². Achtung: Mit h = 4 statt s = 5 käme 37,70 heraus – das wäre zu klein.\n- [Abschlussquiz, 5.4a Kugel: Volumen] Kugel mit r = 6 cm. Volumen? (2 Nachkommastellen)\n  Ergebnis: 904,78 cm³\n  Weg: Kugelvolumen: V = ⁴⁄₃ · π · r³. Der Radius kommt dreimal als Faktor vor. r = 6 cm → r³ = 6 · 6 · 6 = 216 → V = ⁴⁄₃ · π · 216 = 288π ≈ 904,78 cm³. Achtung: r³ ist 216, nicht 6 · 3 = 18.\n- [Abschlussquiz, 5.4b Kugel: Oberfläche] Die Oberfläche einer Kugel ist genau so groß wie … Kreise mit gleichem Radius. Auswahl: 2 | 3 | 4 | 6\n  Ergebnis: 4\n  Weg: Die Oberfläche der Kugel ist O = 4 · π · r². Dabei ist π · r² genau die Fläche eines Kreises mit Radius r. Also entspricht O vier Kreisflächen. Beispiel r = 1: Kreis π ≈ 3,14, Kugeloberfläche 4π ≈ 12,57. Achtung: Nicht mit dem Kreisumfang 2 · π · r verwechseln.\n- [Übungsaufgaben 2, 5.1a Hypotenuse berechnen] Ein Fernseher ist 80 cm breit und 60 cm hoch. Wie viel Zoll hat er? (1 Zoll = 2,54 cm, ganze Zahl)\n  Ergebnis: 39 Zoll\n  Weg: Die Zoll-Angabe eines Fernsehers ist seine Bilddiagonale. Breite und Höhe sind Katheten, die Diagonale ist die Hypotenuse. d² = 80² + 60² = 6 400 + 3 600 = 10 000 → d = 100 cm. Umrechnen: 100 : 2,54 ≈ 39,37 ≈ 39 Zoll. Achtung: Von cm zu Zoll wird geteilt (1 Zoll = 2,54 cm), nicht malgenommen.\n- [Übungsaufgaben 2, 5.1b Kathete berechnen] Ein Drachen hängt an 50 m Schnur. Das Kind steht 30 m von der Stelle direkt unter dem Drachen. Wie hoch fliegt er?\n  Ergebnis: 40 m\n  Weg: Schnur (Hypotenuse), Boden und Flughöhe bilden ein rechtwinkliges Dreieck. Die Höhe ist eine Kathete: h² = c² − a². 50² − 30² = 2 500 − 900 = 1 600 → h = √1 600 = 40 m. Probe: 30² + 40² = 900 + 1 600 = 2 500 = 50² ✓ (ein 3-4-5-Dreieck, zehnfach vergrößert).\n- [Übungsaufgaben 2, 5.1c Rechtwinklig oder nicht?] Ist ein Dreieck mit 10 cm, 11 cm und 15 cm rechtwinklig? Auswahl: Ja | Nein\n  Ergebnis: Nein\n  Weg: Prüfung mit der Umkehrung: Die längste Seite ist c. Nur wenn a² + b² = c² genau stimmt, ist der Winkel 90°. 10² + 11² = 100 + 121 = 221, aber 15² = 225. 221 ≠ 225 → nicht rechtwinklig. Achtung: Knapp daneben ist trotzdem nicht rechtwinklig – beide Seiten müssen exakt gleich sein.\n- [Übungsaufgaben 2, 5.1d Versteckte Dreiecke] Ein Regal ist 2 m hoch und 0,5 m tief. Wie lang ist die Diagonale der Seitenwand? (2 Nachkommastellen) Passt es beim Aufrichten in einen 2,05 m hohen Raum?\n  Ergebnis: 2,06 m\n  Weg: Beim Aufrichten schwenkt das Regal über seine Diagonale – sie entscheidet, ob es unter die Decke passt. Sie ist die Hypotenuse aus Höhe und Tiefe. d² = 2² + 0,5² = 4 + 0,25 = 4,25 → d = √4,25 ≈ 2,06 m. Da 2,06 > 2,05 ist, stößt es an die Decke. Achtung: Die Höhe 2 m allein reicht nicht zum Vergleich – 2 < 2,05 würde fälschlich „passt“ ergeben.\n- [Übungsaufgaben 2, 5.1e Der Puzzle-Beweis] Warum darf man beim Puzzle-Beweis die beiden Bilder vergleichen? Auswahl: Großes Quadrat und Dreiecke sind in beiden gleich, also auch die Löcher | Weil a = b ist | Weil c die kürzeste Seite ist | Weil Dreiecke 180° haben\n  Ergebnis: Großes Quadrat und Dreiecke sind in beiden gleich, also auch die Löcher\n  Weg: Gleiches minus Gleiches bleibt gleich: In beiden Bildern ist das große Quadrat gleich groß, und die 4 Dreiecke sind gleich groß. Darum müssen auch die freien Flächen gleich sein: c² (Bild 1) = a² + b² (Bild 2). Achtung: a = b wird nicht gebraucht – der Beweis gilt für jedes rechtwinklige Dreieck.\n- [Übungsaufgaben 2, 5.2a Pyramide: Volumen] Die Cheops-Pyramide war ursprünglich 146 m hoch, Grundkante 230 m. Volumen in Millionen m³? (1 Nachkommastelle)\n  Ergebnis: 2,6 Mio. m³\n  Weg: Pyramidenvolumen: V = ⅓ · G · h. Die Grundfläche ist ein Quadrat mit Kante 230 m. G = 230² = 52 900 m² → V = ⅓ · 52 900 · 146 ≈ 2 574 467 m³ ≈ 2,6 Mio. m³. Probe: Quader 52 900 · 146 = 7 723 400, davon ⅓ ≈ 2 574 467 ✓. Achtung: Ohne ⅓ käme etwa 7,7 Mio. m³ heraus.\n- [Übungsaufgaben 2, 5.2b Pyramide: Oberfläche] Ein Pyramidendach hat eine quadratische Grundfläche mit 6 m Seite und ist 4 m hoch. Wie groß ist die Dachfläche (nur Mantel)?\n  Ergebnis: 60 m²\n  Weg: Mantel = 4 Seitendreiecke mit ½ · a · h_s. h_s fehlt: Sie bildet mit der Pyramidenhöhe h und der halben Grundkante (a : 2) ein rechtwinkliges Dreieck. h_s = √(4² + 3²) = √25 = 5 m → M = 4 · ½ · 6 · 5 = 60 m². Achtung: Die Kathete ist die halbe Grundkante 3 m (nicht 6 m), und die Höhe 4 m ist nicht die Höhe der Dreiecke.\n- [Übungsaufgaben 2, 5.3a Kegel: Volumen] Ein Sandhaufen ist ein Kegel mit r = 2 m und h = 1,5 m. Wie viel Sand ist das? (2 Nachkommastellen)\n  Ergebnis: 6,28 m³\n  Weg: Der Sandhaufen ist ein Kegel: V = ⅓ · π · r² · h. V = ⅓ · π · 2² · 1,5 = ⅓ · π · 6 = 2π ≈ 6,28 m³. Probe: 2 · 3,14 = 6,28 ✓. Achtung: Nur der Radius wird quadriert (2² = 4), die Höhe 1,5 bleibt wie sie ist.\n- [Übungsaufgaben 2, 5.3b Kegel: Oberfläche] Kegel mit r = 9 cm und h = 12 cm. Oberfläche mit Boden? (2 Nachkommastellen)\n  Ergebnis: 678,58 cm²\n  Weg: Oberfläche mit Boden = Grundkreis + Mantel: O = π · r² + π · r · s. Erst s aus s² = r² + h². s = √(81 + 144) = √225 = 15 cm → O = π · 81 + π · 9 · 15 = 81π + 135π = 216π ≈ 678,58 cm². Achtung: Der Boden (81π) gehört dazu – nur der Mantel wäre 135π ≈ 424,12 cm².\n- [Übungsaufgaben 2, 5.4a Kugel: Volumen] Eine Kugel (r = 3 cm) liegt in einer Dose mit r = 3 cm und h = 6 cm. Wie viel Prozent der Dose füllt sie? (1 Nachkommastelle)\n  Ergebnis: 66,7 %\n  Weg: Gefragt ist ein Anteil: Volumen der Kugel durch Volumen der Dose, mal 100 für Prozent. Kugel: ⁴⁄₃ · π · 3³ = 36π. Dose (Zylinder): π · 3² · 6 = 54π. Anteil: 36π : 54π = 36 : 54 = ⅔ ≈ 66,7 % (π kürzt sich weg). Bei gleichem Radius und Höhe = 2r füllt jede Kugel genau zwei Drittel ihrer Dose.\n- [Übungsaufgaben 2, 5.4b Kugel: Oberfläche] Die Erde ist eine Kugel mit r = 6 371 km. Oberfläche in Millionen km²? (ganze Zahl)\n  Ergebnis: 510 Mio. km²\n  Weg: Oberfläche: O = 4 · π · r². Bei großen Zahlen erst r² ausrechnen. 6 371² = 40 589 641 → O = 4 · π · 40 589 641 ≈ 510 064 000 km² ≈ 510 Mio. km². Achtung: „Mio.“ heißt durch 1 000 000 teilen – 510 064 000 : 1 000 000 ≈ 510.",
  "aufgaben": {
   "Ein rechtwinkliges Dreieck hat die Katheten a = 6 cm und b = 8 cm. Wie lang ist die Hypotenuse c?": {
    "teil": "5.1a",
    "typ": "wahl",
    "ergebnis": "10 cm",
    "optionen": [
     "14 cm",
     "10 cm",
     "48 cm",
     "100 cm"
    ]
   },
   "c = 13 cm, a = 5 cm. Wie lang ist die Kathete b?": {
    "teil": "5.1b",
    "typ": "zahl",
    "ergebnis": "12 cm",
    "antwort": 12
   },
   "Ist ein Dreieck mit den Seiten 7 cm, 24 cm und 25 cm rechtwinklig?": {
    "teil": "5.1c",
    "typ": "wahl",
    "ergebnis": "Ja",
    "optionen": [
     "Ja",
     "Nein"
    ]
   },
   "Ein Rechteck ist 9 cm breit und 12 cm lang. Wie lang ist die Diagonale?": {
    "teil": "5.1d",
    "typ": "zahl",
    "ergebnis": "15 cm",
    "antwort": 15
   },
   "Beim Puzzle-Beweis liegen 4 gleiche Dreiecke in einem Quadrat mit der Seite a + b. Was bleibt in der Mitte frei?": {
    "teil": "5.1e",
    "typ": "wahl",
    "ergebnis": "Ein Quadrat mit der Fläche c²",
    "optionen": [
     "Ein Quadrat mit der Fläche c²",
     "Ein Rechteck mit der Fläche a · b",
     "Ein Dreieck",
     "Ein Quadrat mit der Fläche a²"
    ]
   },
   "Eine Pyramide hat eine quadratische Grundfläche mit a = 6 cm und die Höhe h = 10 cm. Wie groß ist ihr Volumen?": {
    "teil": "5.2a",
    "typ": "zahl",
    "ergebnis": "120 cm³",
    "antwort": 120
   },
   "Quadratische Pyramide: a = 4 cm, Höhe der Seitendreiecke h_s = 5 cm. Wie groß ist die Oberfläche?": {
    "teil": "5.2b",
    "typ": "zahl",
    "ergebnis": "56 cm²",
    "antwort": 56
   },
   "Ein Kegel hat r = 3 cm und h = 4 cm. Wie groß ist sein Volumen ungefähr?": {
    "teil": "5.3a",
    "typ": "wahl",
    "ergebnis": "37,70 cm³",
    "optionen": [
     "37,70 cm³",
     "113,10 cm³",
     "12,57 cm³",
     "28,27 cm³"
    ]
   },
   "Ein Kegel hat r = 6 cm und h = 8 cm. Wie lang ist die Mantellinie s?": {
    "teil": "5.3b",
    "typ": "zahl",
    "ergebnis": "10 cm",
    "antwort": 10
   },
   "Eine Kugel hat den Durchmesser 6 cm. Wie groß ist ihr Volumen ungefähr?": {
    "teil": "5.4a",
    "typ": "wahl",
    "ergebnis": "113,10 cm³",
    "optionen": [
     "113,10 cm³",
     "904,78 cm³",
     "37,70 cm³",
     "28,27 cm³"
    ]
   },
   "Eine Kugel hat r = 5 cm. Wie groß ist ihre Oberfläche? (2 Nachkommastellen)": {
    "teil": "5.4b",
    "typ": "zahl",
    "ergebnis": "314,16 cm²",
    "antwort": 314.16
   },
   "Ein Tablet-Bildschirm ist 24 cm breit und 18 cm hoch. Wie lang ist die Diagonale?": {
    "teil": "5.1a",
    "typ": "zahl",
    "ergebnis": "30 cm",
    "antwort": 30
   },
   "Eine 6,5 m lange Leiter lehnt an einer Wand, ihr Fuß steht 2,5 m von der Wand weg. Wie hoch reicht sie?": {
    "teil": "5.1b",
    "typ": "zahl",
    "ergebnis": "6 m",
    "antwort": 6
   },
   "Ein Gärtner misst an einer Beet-Ecke 6 m und 8 m, quer von Ende zu Ende 10 m. Ist die Ecke rechtwinklig?": {
    "teil": "5.1c",
    "typ": "wahl",
    "ergebnis": "Ja",
    "optionen": [
     "Ja",
     "Nein"
    ]
   },
   "Ein Quadrat hat die Seitenlänge 5 cm. Wie lang ist die Diagonale? (2 Nachkommastellen)": {
    "teil": "5.1d",
    "typ": "zahl",
    "ergebnis": "7,07 cm",
    "antwort": 7.07
   },
   "Puzzle-Beweis mit a = 5 cm und b = 12 cm: Großes Quadrat minus 4 Dreiecke – wie groß ist das Loch c²?": {
    "teil": "5.1e",
    "typ": "zahl",
    "ergebnis": "169 cm²",
    "antwort": 169
   },
   "Eine Pyramide hat eine rechteckige Grundfläche 8 cm × 6 cm und ist 9 cm hoch. Wie groß ist ihr Volumen?": {
    "teil": "5.2a",
    "typ": "zahl",
    "ergebnis": "144 cm³",
    "antwort": 144
   },
   "Quadratische Pyramide: a = 10 cm, Höhe h = 12 cm. Berechne erst h_s, dann die Oberfläche.": {
    "teil": "5.2b",
    "typ": "zahl",
    "ergebnis": "360 cm²",
    "antwort": 360
   },
   "Eine Eiswaffel (Kegel) hat oben 8 cm Durchmesser und ist 12 cm hoch. Wie viel passt hinein? (2 Nachkommastellen)": {
    "teil": "5.3a",
    "typ": "zahl",
    "ergebnis": "201,06 cm³",
    "antwort": 201.06
   },
   "Ein Partyhut (Kegel ohne Boden) hat r = 5 cm und h = 12 cm. Wie viel Pappe braucht man? (2 Nachkommastellen)": {
    "teil": "5.3b",
    "typ": "zahl",
    "ergebnis": "204,2 cm²",
    "antwort": 204.2
   },
   "Ein Fußball hat 22 cm Durchmesser. Wie groß ist sein Volumen? (auf ganze cm³ gerundet)": {
    "teil": "5.4a",
    "typ": "zahl",
    "ergebnis": "5575 cm³",
    "antwort": 5575
   },
   "Ein Ball hat r = 10 cm. Wie groß ist seine Oberfläche? (2 Nachkommastellen)": {
    "teil": "5.4b",
    "typ": "zahl",
    "ergebnis": "1256,64 cm²",
    "antwort": 1256.64
   },
   "a = 9 cm, b = 12 cm. Wie lang ist die Hypotenuse c?": {
    "teil": "5.1a",
    "typ": "zahl",
    "ergebnis": "15 cm",
    "antwort": 15
   },
   "c = 10 cm, a = 6 cm. Wie lang ist b?": {
    "teil": "5.1b",
    "typ": "wahl",
    "ergebnis": "8 cm",
    "optionen": [
     "8 cm",
     "4 cm",
     "11,66 cm",
     "16 cm"
    ]
   },
   "Welches Zahlen-Trio gehört zu einem rechtwinkligen Dreieck?": {
    "teil": "5.1c",
    "typ": "wahl",
    "ergebnis": "8, 15, 17",
    "optionen": [
     "5, 6, 8",
     "8, 15, 17",
     "4, 5, 7",
     "6, 7, 9"
    ]
   },
   "Ein gleichschenkliges Dreieck hat Schenkel von 5 cm und eine Grundseite von 6 cm. Wie hoch ist es?": {
    "teil": "5.1d",
    "typ": "wahl",
    "ergebnis": "4 cm",
    "optionen": [
     "4 cm",
     "7,81 cm",
     "3 cm",
     "8 cm"
    ]
   },
   "Was zeigt der Puzzle-Beweis?": {
    "teil": "5.1e",
    "typ": "wahl",
    "ergebnis": "a² + b² = c²",
    "optionen": [
     "a² + b² = c²",
     "a + b = c",
     "a · b = c²",
     "c² − a² = a · b"
    ]
   },
   "Wie oft passt eine Pyramide in einen Quader mit gleicher Grundfläche und Höhe?": {
    "teil": "5.2a",
    "typ": "wahl",
    "ergebnis": "3-mal",
    "optionen": [
     "2-mal",
     "3-mal",
     "4-mal",
     "½-mal"
    ]
   },
   "Quadratische Pyramide: a = 6 cm, h_s = 4 cm. Wie groß ist die Oberfläche?": {
    "teil": "5.2b",
    "typ": "zahl",
    "ergebnis": "84 cm²",
    "antwort": 84
   },
   "Kegel mit r = 3 cm und h = 10 cm. Volumen? (2 Nachkommastellen)": {
    "teil": "5.3a",
    "typ": "zahl",
    "ergebnis": "94,25 cm³",
    "antwort": 94.25
   },
   "Kegel mit r = 3 cm und h = 4 cm. Wie groß ist der Mantel? (2 Nachkommastellen)": {
    "teil": "5.3b",
    "typ": "zahl",
    "ergebnis": "47,12 cm²",
    "antwort": 47.12
   },
   "Kugel mit r = 6 cm. Volumen? (2 Nachkommastellen)": {
    "teil": "5.4a",
    "typ": "zahl",
    "ergebnis": "904,78 cm³",
    "antwort": 904.78
   },
   "Die Oberfläche einer Kugel ist genau so groß wie … Kreise mit gleichem Radius.": {
    "teil": "5.4b",
    "typ": "wahl",
    "ergebnis": "4",
    "optionen": [
     "2",
     "3",
     "4",
     "6"
    ]
   },
   "Ein Fernseher ist 80 cm breit und 60 cm hoch. Wie viel Zoll hat er? (1 Zoll = 2,54 cm, ganze Zahl)": {
    "teil": "5.1a",
    "typ": "zahl",
    "ergebnis": "39 Zoll",
    "antwort": 39
   },
   "Ein Drachen hängt an 50 m Schnur. Das Kind steht 30 m von der Stelle direkt unter dem Drachen. Wie hoch fliegt er?": {
    "teil": "5.1b",
    "typ": "zahl",
    "ergebnis": "40 m",
    "antwort": 40
   },
   "Ist ein Dreieck mit 10 cm, 11 cm und 15 cm rechtwinklig?": {
    "teil": "5.1c",
    "typ": "wahl",
    "ergebnis": "Nein",
    "optionen": [
     "Ja",
     "Nein"
    ]
   },
   "Ein Regal ist 2 m hoch und 0,5 m tief. Wie lang ist die Diagonale der Seitenwand? (2 Nachkommastellen) Passt es beim Aufrichten in einen 2,05 m hohen Raum?": {
    "teil": "5.1d",
    "typ": "zahl",
    "ergebnis": "2,06 m",
    "antwort": 2.06
   },
   "Warum darf man beim Puzzle-Beweis die beiden Bilder vergleichen?": {
    "teil": "5.1e",
    "typ": "wahl",
    "ergebnis": "Großes Quadrat und Dreiecke sind in beiden gleich, also auch die Löcher",
    "optionen": [
     "Großes Quadrat und Dreiecke sind in beiden gleich, also auch die Löcher",
     "Weil a = b ist",
     "Weil c die kürzeste Seite ist",
     "Weil Dreiecke 180° haben"
    ]
   },
   "Die Cheops-Pyramide war ursprünglich 146 m hoch, Grundkante 230 m. Volumen in Millionen m³? (1 Nachkommastelle)": {
    "teil": "5.2a",
    "typ": "zahl",
    "ergebnis": "2,6 Mio. m³",
    "antwort": 2.6
   },
   "Ein Pyramidendach hat eine quadratische Grundfläche mit 6 m Seite und ist 4 m hoch. Wie groß ist die Dachfläche (nur Mantel)?": {
    "teil": "5.2b",
    "typ": "zahl",
    "ergebnis": "60 m²",
    "antwort": 60
   },
   "Ein Sandhaufen ist ein Kegel mit r = 2 m und h = 1,5 m. Wie viel Sand ist das? (2 Nachkommastellen)": {
    "teil": "5.3a",
    "typ": "zahl",
    "ergebnis": "6,28 m³",
    "antwort": 6.28
   },
   "Kegel mit r = 9 cm und h = 12 cm. Oberfläche mit Boden? (2 Nachkommastellen)": {
    "teil": "5.3b",
    "typ": "zahl",
    "ergebnis": "678,58 cm²",
    "antwort": 678.58
   },
   "Eine Kugel (r = 3 cm) liegt in einer Dose mit r = 3 cm und h = 6 cm. Wie viel Prozent der Dose füllt sie? (1 Nachkommastelle)": {
    "teil": "5.4a",
    "typ": "zahl",
    "ergebnis": "66,7 %",
    "antwort": 66.7
   },
   "Die Erde ist eine Kugel mit r = 6 371 km. Oberfläche in Millionen km²? (ganze Zahl)": {
    "teil": "5.4b",
    "typ": "zahl",
    "ergebnis": "510 Mio. km²",
    "antwort": 510
   },
   "Rechtwinkliges Dreieck: c = 17 cm, a = 8 cm. Berechne b und dann den Flächeninhalt des Dreiecks.": {
    "teil": "5.1b",
    "typ": "zahl",
    "klausur": true
   },
   "Ist ein Dreieck mit 12 cm, 35 cm und 37 cm rechtwinklig?": {
    "teil": "5.1c",
    "typ": "wahl",
    "klausur": true
   },
   "Ein Würfel hat 4 cm Kantenlänge. Wie lang ist die Raumdiagonale? (2 Nachkommastellen)": {
    "teil": "5.1d",
    "typ": "zahl",
    "klausur": true
   },
   "Quadratische Pyramide: a = 8 cm, Höhe h = 3 cm. Wie groß ist die Oberfläche?": {
    "teil": "5.2b",
    "typ": "zahl",
    "klausur": true
   },
   "Kegel mit r = 5 cm und h = 9 cm. Volumen? (2 Nachkommastellen)": {
    "teil": "5.3a",
    "typ": "zahl",
    "klausur": true
   },
   "Ein Kegel hat die Mantellinie s = 10 cm und den Radius r = 6 cm. Wie hoch ist er?": {
    "teil": "5.3b",
    "typ": "zahl",
    "klausur": true
   },
   "Kugel mit r = 7 cm. Oberfläche? (2 Nachkommastellen)": {
    "teil": "5.4b",
    "typ": "zahl",
    "klausur": true
   },
   "Was hat mehr Volumen: eine Kugel mit r = 3 cm oder ein Würfel mit 5 cm Kante?": {
    "teil": "5.4a",
    "typ": "wahl",
    "klausur": true
   }
  }
 },
 "6-stochastik": {
  "titel": "Stochastik",
  "fach": "mathe",
  "klasse": 9,
  "teile": {
   "6.1a": "Manipulierte Diagramme",
   "6.1b": "Irreführende Zahlen",
   "6.2a": "Vierfeldertafel ausfüllen",
   "6.2b": "Baumdiagramm und Vierfeldertafel",
   "6.3a": "Bedingte Wahrscheinlichkeit",
   "6.3b": "Stochastisch unabhängig?"
  },
  "text": "# Stochastik (Mathe, Klasse 9)\n\n## Merkkästen der Arbeitsblätter\n### 6.1a Manipulierte Diagramme\nDiagramme können täuschen, obwohl alle Zahlen stimmen. Der häufigste Trick:\nDie y-Achse beginnt nicht bei 0. Dann wirken kleine Unterschiede riesig.\n1 Achse prüfen: Wo beginnt sie?\n2 Echte Werte ablesen\n3 Unterschied selbst ausrechnen\n\n### 6.1b Irreführende Zahlen\nAnzahl und Anteil sind nicht dasselbe: Vergleiche Gruppen immer mit Prozent.\nEin Ausreißer verzerrt den Mittelwert. Dann ist der Median (mittlerer Wert) ehrlicher.\n1 Klasse A: 6 von 20 = 30 %\n2 Klasse B: 8 von 32 = 25 %\n3 B hat mehr, A aber anteilig mehr\n\n### 6.2a Vierfeldertafel ausfüllen\nEine Vierfeldertafel sortiert nach zwei Merkmalen. Innen stehen 4 Felder, außen die Summen.\nJede Zeile und jede Spalte muss aufgehen. Unten rechts steht die Gesamtzahl.\n1 Zeilen addieren\n2 Spalten addieren\n3 Gesamt prüfen: beide Wege gleich?\nBrillekeineSumme\nMädchen51116\nJungen31114\nSumme82230\n\n### 6.2b Baumdiagramm und Vierfeldertafel\nPfadregel: Entlang eines Pfades wird multipliziert. Das Ergebnis gehört in ein Feld der Vierfeldertafel.\nDie Äste an einem Punkt ergeben zusammen immer 1.\n1 100 Schüler, 40 % fahren Rad (R)\n2 75 % der Radfahrer tragen Helm (H)\n3 0,4 · 0,75 = 0,3 → 30 im Feld R und H\n\n### 6.3a Bedingte Wahrscheinlichkeit\n„Wie groß ist der Anteil von B unter A?“\nPA(B) = Anzahl (A und B) : Anzahl A\nTrick: Nur die Zeile oder Spalte von A anschauen. Die Summe von A steht im Nenner.\n1 12 Mädchen, 3 davon mit Brille\n2 Nur Mädchen-Zeile: 3 von 12\n3 PM(Brille) = 3 : 12 = 25 %\n\n### 6.3b Stochastisch unabhängig?\nA und B sind unabhängig, wenn die Bedingung nichts ändert: PA(B) = P(B)\nÄndert sich der Anteil, sind sie abhängig.\n1 Würfel: P(gerade) = 3 : 6 = ½\n2 Unter „größer als 3“ (4, 5, 6): 2 von 3\n3 ⅔ ≠ ½ → abhängig\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 6.1a Manipulierte Diagramme] Ein Säulendiagramm zeigt den Eisverkauf: 52 und 55 Kugeln. Die y-Achse beginnt bei 50. Warum wirkt der Unterschied riesig? Auswahl: Weil die Achse nicht bei 0 beginnt | Weil 55 viel mehr ist als 52 | Weil die Säulen bunt sind | Weil die Zahlen falsch sind\n  Ergebnis: Weil die Achse nicht bei 0 beginnt\n  Weg: Beginnt die y-Achse nicht bei 0, ist der untere Teil der Säulen abgeschnitten – man sieht nur den Überstand, und der wirkt wie der ganze Wert. Hier ragen die Säulen nur 52 − 50 = 2 und 55 − 50 = 5 Einheiten heraus: 5 : 2 = 2,5-mal so hoch. In Wahrheit ist 55 : 52 ≈ 1,06, also nur etwa 6 % mehr. Also immer erst die Achse prüfen.\n- [Einstiegsquiz, 6.1b Irreführende Zahlen] In der Klasse 9c tragen 7 von 28 Schülern eine Brille. Wie viel Prozent sind das?\n  Ergebnis: 25 %\n  Weg: Prozent heißt „von hundert“: Man teilt den Teil durch das Ganze und rechnet mit 100. 7 von 28: 7 : 28 = 0,25 = 25 %. Probe: 25 % von 28 = ¼ von 28 = 7 ✓. Achtung: Das Ganze (28 Schüler) kommt in den Nenner, nicht die Brillenträger.\n- [Einstiegsquiz, 6.2a Vierfeldertafel ausfüllen] In der 9a haben 14 von 25 Kindern ein Haustier, in der 9b 11 von 30 Kindern. Wie viele Kinder haben insgesamt kein Haustier?\n  Ergebnis: 30\n  Weg: In der Vierfeldertafel ergeben die Teile immer das Ganze (hier: mit und ohne Haustier). Ganze: 25 + 30 = 55 Kinder. Mit Haustier: 14 + 11 = 25. Ohne Haustier: 55 − 25 = 30. Probe: 9a ohne: 25 − 14 = 11, 9b ohne: 30 − 11 = 19, 11 + 19 = 30 ✓. Achtung: 25 sind die Kinder mit Haustier – gefragt waren die ohne.\n- [Einstiegsquiz, 6.2b Baumdiagramm und Vierfeldertafel] Im Baumdiagramm fahren 60 % (0,6) der Schüler Rad. Von diesen tragen 80 % (0,8) einen Helm. Wie groß ist P(Rad und Helm)? (Dezimalzahl)\n  Ergebnis: 0,48\n  Weg: Pfadregel im Baumdiagramm: Entlang eines Pfades multipliziert man die Wahrscheinlichkeiten, denn „erst Rad UND dann Helm“ ist ein Anteil von einem Anteil. 0,6 · 0,8 = 0,48 (das sind 48 % aller Schüler). Probe: 80 % von 60 % = 0,8 · 60 % = 48 % ✓. Achtung: Addieren (0,6 + 0,8 = 1,4) geht nie – eine Wahrscheinlichkeit ist höchstens 1.\n- [Einstiegsquiz, 6.3a Bedingte Wahrscheinlichkeit] In einer Klasse mit 50 Schülern sind 20 Mädchen, davon machen 8 Sport. Insgesamt machen 25 Schüler Sport. Wie groß ist der Anteil der Sportler unter den Mädchen? Auswahl: 40 % | 32 % | 16 % | 50 %\n  Ergebnis: 40 %\n  Weg: Bei der bedingten Wahrscheinlichkeit zählt nur die Gruppe, die als Bedingung gegeben ist – hier die Mädchen. Der Anteil wird nur in dieser Zeile berechnet. Sportler unter den Mädchen: 8 : 20 = 0,4 = 40 %. Achtung: 8 : 25 = 32 % teilt durch alle Sportler, 8 : 50 = 16 % durch alle Schüler – beides beantwortet eine andere Frage.\n- [Einstiegsquiz, 6.3b Stochastisch unabhängig?] Von 200 Schülern sind 80 im Sportverein (40 %). Von den 50 Schülern mit Brille sind 20 im Sportverein. Sind „Brille“ und „Sportverein“ unabhängig? Auswahl: Ja, unabhängig | Nein, abhängig | Nur bei Mädchen | Das kann man nicht berechnen\n  Ergebnis: Ja, unabhängig\n  Weg: Stochastisch unabhängig heißt: Die Bedingung ändert die Wahrscheinlichkeit nicht, also P_A(B) = P(B). P(Sport) = 80 : 200 = 0,4. Nur Brille: P_Brille(Sport) = 20 : 50 = 0,4. Beide gleich → unabhängig. Achtung: Nicht die Zahlen 20 und 80 vergleichen, sondern die Anteile 0,4 und 0,4.\n- [Übungsaufgaben 1, 6.1a Manipulierte Diagramme] Eine Zeitung zeigt den Umsatz einer Firma als Säulen. Die y-Achse beginnt bei 96: Letztes Jahr 98 Mio. €, dieses Jahr 102 Mio. €. Die rechte Säule sieht dreimal so hoch aus. Um wie viel Prozent ist der Umsatz wirklich gestiegen? (1 Nachkommastelle)\n  Ergebnis: 4,1 %\n  Weg: Prozentuale Zunahme = (neu − alt) : alt. Die Achse beginnt bei 96, deshalb ragen die Säulen nur 2 und 6 Einheiten heraus (98 − 96, 102 − 96) – die rechte wirkt 3-mal so hoch. Wirklich: 102 − 98 = 4 → 4 : 98 ≈ 0,0408 ≈ 4,1 %. Achtung: Bezugsgröße ist der alte Wert 98, nicht 102.\n- [Übungsaufgaben 1, 6.1b Irreführende Zahlen] Fünf Freunde bekommen 8 €, 10 €, 12 €, 14 € und 56 € Taschengeld. Wie groß ist der Median? (Der Mittelwert von 20 € wird durch den Ausreißer 56 € verzerrt.)\n  Ergebnis: 12 €\n  Weg: Der Median ist der mittlere Wert der geordneten Liste. Ausreißer beeinflussen ihn nicht, den Mittelwert schon. Geordnet: 8, 10, 12, 14, 56 – bei 5 Werten steht der 3. in der Mitte → Median = 12 €. Mittelwert: 100 : 5 = 20 €. Der Mittelwert 20 € liegt über 4 von 5 Taschengeldern – der Ausreißer 56 € verzerrt ihn.\n- [Übungsaufgaben 1, 6.2a Vierfeldertafel ausfüllen] Bei einer Schulumfrage (80 Befragte) sind 30 Jungen und 50 Mädchen dabei. 18 Jungen machen Sport, insgesamt machen 41 Befragte Sport. Wie viele Mädchen machen keinen Sport?\n  Ergebnis: 27\n  Weg: In der Vierfeldertafel ergeben Teile immer das Ganze, fehlende Felder rechnet man der Reihe nach aus. Sport insgesamt 41, davon Jungen 18 → Mädchen mit Sport: 41 − 18 = 23. Mädchen insgesamt 50 → ohne Sport: 50 − 23 = 27. Probe: Jungen ohne Sport 30 − 18 = 12, 12 + 27 = 39 = 80 − 41 ✓.\n- [Übungsaufgaben 1, 6.2b Baumdiagramm und Vierfeldertafel] Schnelltest: 2 000 Menschen, 5 % sind infiziert. Der Test erkennt 80 % der Infizierten, bei den Gesunden zeigt er in 3 % der Fälle fälschlich „positiv“. Wie viele Tests sind insgesamt positiv?\n  Ergebnis: 137\n  Weg: Bei Testaufgaben rechnet man Gruppe für Gruppe (infiziert / gesund) und zählt dann alle Positiven zusammen – auch die falsch-positiven Gesunden. Infiziert: 2 000 · 0,05 = 100, davon 80 % positiv = 80. Gesund: 2 000 − 100 = 1 900, davon 3 % positiv = 57. Zusammen 80 + 57 = 137. Achtung: Die 57 Gesunden mit „positiv“ dürfen nicht fehlen.\n- [Übungsaufgaben 1, 6.3a Bedingte Wahrscheinlichkeit] Von 150 Jugendlichen sind 90 Mädchen und 60 Jungen. Ein Streaming-Abo haben 54 Mädchen und 27 Jungen. Wie viel Prozent der Abo-Nutzer sind Mädchen? (1 Nachkommastelle)\n  Ergebnis: 66,7 %\n  Weg: Bedingte Wahrscheinlichkeit: Als Ganzes zählen nur die Abo-Nutzer. Gefragt ist der Mädchenanteil in dieser Gruppe. Abo insgesamt: 54 + 27 = 81 → 54 : 81 = ⅔ ≈ 0,667 ≈ 66,7 %. Achtung: 54 : 90 = 60 % wäre der Abo-Anteil unter den Mädchen – die Frage andersherum.\n- [Übungsaufgaben 1, 6.3b Stochastisch unabhängig?] Ein Würfel zeigte 4-mal hintereinander eine 6. Ein Spieler sagt: „Jetzt ist keine 6 mehr dran!“ Wie groß ist die Wahrscheinlichkeit für eine 6 beim nächsten Wurf? (Dezimalzahl, 2 Nachkommastellen)\n  Ergebnis: 0,17\n  Weg: Beim Würfeln hat der Würfel kein Gedächtnis: Jeder Wurf ist unabhängig vom vorigen (stochastisch unabhängig). Also P(6) = 1 : 6 ≈ 0,1667 ≈ 0,17 – wie beim allerersten Wurf. Achtung: Der Gedanke „jetzt ist keine 6 mehr dran“ ist ein typischer Denkfehler – 4 Sechsen ändern nichts für den 5. Wurf.\n- [Abschlussquiz, 6.1a Manipulierte Diagramme] In einem Piktogramm verdoppelt sich der Wert. Das Symbol wird dafür doppelt so breit und doppelt so hoch gezeichnet. Wie viel größer wirkt die Symbolfläche? Auswahl: 2-mal so groß | 4-mal so groß | 3-mal so groß | 8-mal so groß\n  Ergebnis: 4-mal so groß\n  Weg: Verdoppelt man bei einem Symbol Breite UND Höhe, wächst die Fläche viel stärker, als dem Wert entspricht. Das Auge sieht die Fläche. Fläche = Breite · Höhe: 2 · 2 = 4. Der Wert ist 2-mal so groß, die Symbolfläche aber 4-mal. Fair wäre es, das Symbol doppelt so oft zu zeichnen.\n- [Abschlussquiz, 6.1b Irreführende Zahlen] Fünf Gehälter: 2 000 €, 2 200 €, 2 400 €, 2 400 € und 12 000 €. Die Chefin sagt „Durchschnitt: 4 200 €“. Welcher Wert beschreibt ein typisches Gehalt besser? Auswahl: Median 2 400 € | Mittelwert 4 200 € | Höchstwert 12 000 € | Summe 21 000 €\n  Ergebnis: Median 2 400 €\n  Weg: Der Mittelwert wird von Ausreißern verzerrt, der Median (mittlerer Wert der geordneten Liste) nicht. Mittelwert: (2 000 + 2 200 + 2 400 + 2 400 + 12 000) : 5 = 21 000 : 5 = 4 200 €. Median: 3. Wert = 2 400 €. Achtung: 4 200 € liegt über 4 von 5 Gehältern – es ist kein typisches Gehalt.\n- [Abschlussquiz, 6.2a Vierfeldertafel ausfüllen] Eine Vierfeldertafel hat die Zeilensummen 18 und 12. Eine Spaltensumme ist 20. Wie groß ist die andere Spaltensumme?\n  Ergebnis: 10\n  Weg: Zeilensummen und Spaltensummen ergeben beide die Gesamtzahl. Gesamt: 18 + 12 = 30. Eine Spalte hat 20 → andere Spalte: 30 − 20 = 10. Probe: 20 + 10 = 30 ✓. Achtung: Die Spaltensumme 20 nicht noch einmal zu 18 + 12 addieren (das wären 50).\n- [Abschlussquiz, 6.2b Baumdiagramm und Vierfeldertafel] Wie berechnet man die Wahrscheinlichkeit entlang eines Pfades im Baumdiagramm? Auswahl: Man multipliziert die Wahrscheinlichkeiten an den Ästen | Man addiert die Wahrscheinlichkeiten an den Ästen | Man subtrahiert sie von 1 | Man teilt die erste durch die zweite\n  Ergebnis: Man multipliziert die Wahrscheinlichkeiten an den Ästen\n  Weg: Ein Pfad bedeutet „erst dies UND dann das“; der zweite Ast ist ein Anteil vom ersten. Anteil von Anteil → malnehmen. Beispiel: 0,6 · 0,8 = 0,48. Addieren würde man nur die Ergebnisse verschiedener Pfade, nicht die Äste eines Pfades. Achtung: 0,6 + 0,8 = 1,4 wäre größer als 1 – das kann keine Wahrscheinlichkeit sein.\n- [Abschlussquiz, 6.3a Bedingte Wahrscheinlichkeit] Von 40 Mädchen spielen 12 ein Instrument, von 35 Jungen 7. Wie viel Prozent der Instrumentspieler sind Mädchen? (1 Nachkommastelle)\n  Ergebnis: 63,2 %\n  Weg: Bedingte Wahrscheinlichkeit: Als Ganzes zählen nur die Instrumentspieler. 12 Mädchen + 7 Jungen = 19 Spieler → Mädchenanteil: 12 : 19 ≈ 0,632 = 63,2 %. Achtung: 12 : 40 = 30 % wäre der Anteil der Spielerinnen unter allen Mädchen – eine andere Frage.\n- [Abschlussquiz, 6.3b Stochastisch unabhängig?] Es gilt P(Brille) = 30 % und für Mädchen P_Mädchen(Brille) = 30 %. Was folgt daraus? Auswahl: Unabhängig: Die Bedingung ändert nichts | Abhängig, weil beide Werte 30 % sind | Abhängig, weil es Mädchen sind | Das lässt sich nicht sagen\n  Ergebnis: Unabhängig: Die Bedingung ändert nichts\n  Weg: Unabhängig heißt: Die Bedingung ändert nichts an der Wahrscheinlichkeit, also P_A(B) = P(B). Hier: P(Brille) = 30 % und P_Mädchen(Brille) = 30 % → gleich → unabhängig. Achtung: Gleiche Werte sprechen für Unabhängigkeit, nicht dagegen – erst ungleiche Werte zeigen Abhängigkeit.\n- [Übungsaufgaben 2, 6.1a Manipulierte Diagramme] Ein Kino zeigt seine Besucherzahlen als Säulen. Die y-Achse beginnt bei 400: 2022 waren es 410 Besucher pro Tag, 2023 dann 460. Die Säule 2023 sieht 6-mal so hoch aus. Um wie viel Prozent sind die Besucherzahlen wirklich gestiegen? (1 Nachkommastelle)\n  Ergebnis: 12,2 %\n  Weg: Prozentuale Zunahme = Zunahme : alter Wert. Die Achse beginnt bei 400, daher ragen die Säulen nur 10 und 60 heraus (60 : 10 = 6-mal so hoch). Wirklich: 460 − 410 = 50 → 50 : 410 ≈ 0,122 = 12,2 %. Achtung: Bezugsgröße ist der alte Wert 410 – durch 460 geteilt wären es nur 10,9 %.\n- [Übungsaufgaben 2, 6.1b Irreführende Zahlen] Schule A: 60 von 400 Schülern kommen mit dem Rad. Schule B: 54 von 300 Schülern. Um wie viele Prozentpunkte liegt Schule B bei den Radfahrern vorn?\n  Ergebnis: 3 Prozentpunkte\n  Weg: Absolute Zahlen täuschen, man muss Anteile vergleichen. Prozentpunkte sind der Unterschied zwischen zwei Prozentwerten. A: 60 : 400 = 15 %. B: 54 : 300 = 18 %. Unterschied: 18 − 15 = 3 Prozentpunkte. Schule A hat zwar mehr Radfahrer (60 > 54), aber auch mehr Schüler – B liegt anteilig vorn.\n- [Übungsaufgaben 2, 6.2a Vierfeldertafel ausfüllen] 200 Jugendliche wurden befragt. 90 spielen ein Instrument, 40 davon singen auch im Chor. Insgesamt singen 70 im Chor. Wie viele machen weder Musik noch Chor?\n  Ergebnis: 80\n  Weg: Die Teile ergeben das Ganze, man füllt zuerst die Felder, die sich direkt ergeben. Chor gesamt 70, davon 40 mit Instrument → Chor ohne Instrument: 70 − 40 = 30. Instrument ODER Chor: 90 + 30 = 120. Weder noch: 200 − 120 = 80. Achtung: 90 + 70 = 160 würde die 40 doppelt zählen.\n- [Übungsaufgaben 2, 6.2b Baumdiagramm und Vierfeldertafel] 30 % der Schüler fahren mit dem Bus. Von diesen kommen 10 % zu spät, von den anderen Schülern nur 4 %. Wie viel Prozent aller Schüler kommen zu spät? (1 Nachkommastelle)\n  Ergebnis: 5,8 %\n  Weg: Baumdiagramm: Entlang der Pfade multiplizieren, dann die Pfade, die zu „zu spät“ führen, addieren. Bus und zu spät: 0,3 · 0,1 = 0,03. Kein Bus (70 %) und zu spät: 0,7 · 0,04 = 0,028. Zusammen: 0,03 + 0,028 = 0,058 = 5,8 %. Achtung: Nicht 10 % und 4 % mitteln ((10 + 4) : 2 = 7 %) – die Gruppen sind verschieden groß.\n- [Übungsaufgaben 2, 6.3a Bedingte Wahrscheinlichkeit] 1 000 Menschen machen einen Test. 72 Kranke werden positiv getestet (8 negativ), von den Gesunden 46 fälschlich positiv (874 negativ). Wie viel Prozent der positiv Getesteten sind wirklich krank? (1 Nachkommastelle)\n  Ergebnis: 61 %\n  Weg: Gesucht ist der Anteil der wirklich Kranken unter allen positiv Getesteten. Die Bedingung ist „positiv“, also zählt nur die positive Spalte. Positiv: 72 (krank) + 46 (gesund) = 118 → 72 : 118 ≈ 0,610 = 61,0 %. Achtung: 72 : 80 = 90 % wäre die Trefferquote bei Kranken – die Frage andersherum.\n- [Übungsaufgaben 2, 6.3b Stochastisch unabhängig?] Von 90 Jugendlichen sind 60 Jungen und 30 Mädchen. 36 spielen Fußball: 30 Jungen und 6 Mädchen. Sind „Geschlecht“ und „Fußball spielen“ unabhängig? Auswahl: Nein, abhängig | Ja, unabhängig | Ja, weil 30 + 6 = 36 | Nur bei den Jungen\n  Ergebnis: Nein, abhängig\n  Weg: Unabhängig wäre es, wenn der Anteil der Fußballer bei den Jungen gleich dem Gesamtanteil wäre: P_Junge(Fußball) = P(Fußball). Gesamt: 36 : 90 = 40 %. Jungen: 30 : 60 = 50 %. 50 % ≠ 40 % → abhängig. Achtung: 30 + 6 = 36 ist nur die Summe der Fußballer – kein Argument für Unabhängigkeit.",
  "aufgaben": {
   "Ein Säulendiagramm zeigt den Eisverkauf: 52 und 55 Kugeln. Die y-Achse beginnt bei 50. Warum wirkt der Unterschied riesig?": {
    "teil": "6.1a",
    "typ": "wahl",
    "ergebnis": "Weil die Achse nicht bei 0 beginnt",
    "optionen": [
     "Weil die Achse nicht bei 0 beginnt",
     "Weil 55 viel mehr ist als 52",
     "Weil die Säulen bunt sind",
     "Weil die Zahlen falsch sind"
    ]
   },
   "In der Klasse 9c tragen 7 von 28 Schülern eine Brille. Wie viel Prozent sind das?": {
    "teil": "6.1b",
    "typ": "zahl",
    "ergebnis": "25 %",
    "antwort": 25
   },
   "In der 9a haben 14 von 25 Kindern ein Haustier, in der 9b 11 von 30 Kindern. Wie viele Kinder haben insgesamt kein Haustier?": {
    "teil": "6.2a",
    "typ": "zahl",
    "ergebnis": "30",
    "antwort": 30
   },
   "Im Baumdiagramm fahren 60 % (0,6) der Schüler Rad. Von diesen tragen 80 % (0,8) einen Helm. Wie groß ist P(Rad und Helm)? (Dezimalzahl)": {
    "teil": "6.2b",
    "typ": "zahl",
    "ergebnis": "0,48",
    "antwort": 0.48
   },
   "In einer Klasse mit 50 Schülern sind 20 Mädchen, davon machen 8 Sport. Insgesamt machen 25 Schüler Sport. Wie groß ist der Anteil der Sportler unter den Mädchen?": {
    "teil": "6.3a",
    "typ": "wahl",
    "ergebnis": "40 %",
    "optionen": [
     "40 %",
     "32 %",
     "16 %",
     "50 %"
    ]
   },
   "Von 200 Schülern sind 80 im Sportverein (40 %). Von den 50 Schülern mit Brille sind 20 im Sportverein. Sind „Brille“ und „Sportverein“ unabhängig?": {
    "teil": "6.3b",
    "typ": "wahl",
    "ergebnis": "Ja, unabhängig",
    "optionen": [
     "Ja, unabhängig",
     "Nein, abhängig",
     "Nur bei Mädchen",
     "Das kann man nicht berechnen"
    ]
   },
   "Eine Zeitung zeigt den Umsatz einer Firma als Säulen. Die y-Achse beginnt bei 96: Letztes Jahr 98 Mio. €, dieses Jahr 102 Mio. €. Die rechte Säule sieht dreimal so hoch aus. Um wie viel Prozent ist der Umsatz wirklich gestiegen? (1 Nachkommastelle)": {
    "teil": "6.1a",
    "typ": "zahl",
    "ergebnis": "4,1 %",
    "antwort": 4.1
   },
   "Fünf Freunde bekommen 8 €, 10 €, 12 €, 14 € und 56 € Taschengeld. Wie groß ist der Median? (Der Mittelwert von 20 € wird durch den Ausreißer 56 € verzerrt.)": {
    "teil": "6.1b",
    "typ": "zahl",
    "ergebnis": "12 €",
    "antwort": 12
   },
   "Bei einer Schulumfrage (80 Befragte) sind 30 Jungen und 50 Mädchen dabei. 18 Jungen machen Sport, insgesamt machen 41 Befragte Sport. Wie viele Mädchen machen keinen Sport?": {
    "teil": "6.2a",
    "typ": "zahl",
    "ergebnis": "27",
    "antwort": 27
   },
   "Schnelltest: 2 000 Menschen, 5 % sind infiziert. Der Test erkennt 80 % der Infizierten, bei den Gesunden zeigt er in 3 % der Fälle fälschlich „positiv“. Wie viele Tests sind insgesamt positiv?": {
    "teil": "6.2b",
    "typ": "zahl",
    "ergebnis": "137",
    "antwort": 137
   },
   "Von 150 Jugendlichen sind 90 Mädchen und 60 Jungen. Ein Streaming-Abo haben 54 Mädchen und 27 Jungen. Wie viel Prozent der Abo-Nutzer sind Mädchen? (1 Nachkommastelle)": {
    "teil": "6.3a",
    "typ": "zahl",
    "ergebnis": "66,7 %",
    "antwort": 66.7
   },
   "Ein Würfel zeigte 4-mal hintereinander eine 6. Ein Spieler sagt: „Jetzt ist keine 6 mehr dran!“ Wie groß ist die Wahrscheinlichkeit für eine 6 beim nächsten Wurf? (Dezimalzahl, 2 Nachkommastellen)": {
    "teil": "6.3b",
    "typ": "zahl",
    "ergebnis": "0,17",
    "antwort": 0.17
   },
   "In einem Piktogramm verdoppelt sich der Wert. Das Symbol wird dafür doppelt so breit und doppelt so hoch gezeichnet. Wie viel größer wirkt die Symbolfläche?": {
    "teil": "6.1a",
    "typ": "wahl",
    "ergebnis": "4-mal so groß",
    "optionen": [
     "2-mal so groß",
     "4-mal so groß",
     "3-mal so groß",
     "8-mal so groß"
    ]
   },
   "Fünf Gehälter: 2 000 €, 2 200 €, 2 400 €, 2 400 € und 12 000 €. Die Chefin sagt „Durchschnitt: 4 200 €“. Welcher Wert beschreibt ein typisches Gehalt besser?": {
    "teil": "6.1b",
    "typ": "wahl",
    "ergebnis": "Median 2 400 €",
    "optionen": [
     "Median 2 400 €",
     "Mittelwert 4 200 €",
     "Höchstwert 12 000 €",
     "Summe 21 000 €"
    ]
   },
   "Eine Vierfeldertafel hat die Zeilensummen 18 und 12. Eine Spaltensumme ist 20. Wie groß ist die andere Spaltensumme?": {
    "teil": "6.2a",
    "typ": "zahl",
    "ergebnis": "10",
    "antwort": 10
   },
   "Wie berechnet man die Wahrscheinlichkeit entlang eines Pfades im Baumdiagramm?": {
    "teil": "6.2b",
    "typ": "wahl",
    "ergebnis": "Man multipliziert die Wahrscheinlichkeiten an den Ästen",
    "optionen": [
     "Man multipliziert die Wahrscheinlichkeiten an den Ästen",
     "Man addiert die Wahrscheinlichkeiten an den Ästen",
     "Man subtrahiert sie von 1",
     "Man teilt die erste durch die zweite"
    ]
   },
   "Von 40 Mädchen spielen 12 ein Instrument, von 35 Jungen 7. Wie viel Prozent der Instrumentspieler sind Mädchen? (1 Nachkommastelle)": {
    "teil": "6.3a",
    "typ": "zahl",
    "ergebnis": "63,2 %",
    "antwort": 63.2
   },
   "Es gilt P(Brille) = 30 % und für Mädchen P_Mädchen(Brille) = 30 %. Was folgt daraus?": {
    "teil": "6.3b",
    "typ": "wahl",
    "ergebnis": "Unabhängig: Die Bedingung ändert nichts",
    "optionen": [
     "Unabhängig: Die Bedingung ändert nichts",
     "Abhängig, weil beide Werte 30 % sind",
     "Abhängig, weil es Mädchen sind",
     "Das lässt sich nicht sagen"
    ]
   },
   "Ein Kino zeigt seine Besucherzahlen als Säulen. Die y-Achse beginnt bei 400: 2022 waren es 410 Besucher pro Tag, 2023 dann 460. Die Säule 2023 sieht 6-mal so hoch aus. Um wie viel Prozent sind die Besucherzahlen wirklich gestiegen? (1 Nachkommastelle)": {
    "teil": "6.1a",
    "typ": "zahl",
    "ergebnis": "12,2 %",
    "antwort": 12.2
   },
   "Schule A: 60 von 400 Schülern kommen mit dem Rad. Schule B: 54 von 300 Schülern. Um wie viele Prozentpunkte liegt Schule B bei den Radfahrern vorn?": {
    "teil": "6.1b",
    "typ": "zahl",
    "ergebnis": "3 Prozentpunkte",
    "antwort": 3
   },
   "200 Jugendliche wurden befragt. 90 spielen ein Instrument, 40 davon singen auch im Chor. Insgesamt singen 70 im Chor. Wie viele machen weder Musik noch Chor?": {
    "teil": "6.2a",
    "typ": "zahl",
    "ergebnis": "80",
    "antwort": 80
   },
   "30 % der Schüler fahren mit dem Bus. Von diesen kommen 10 % zu spät, von den anderen Schülern nur 4 %. Wie viel Prozent aller Schüler kommen zu spät? (1 Nachkommastelle)": {
    "teil": "6.2b",
    "typ": "zahl",
    "ergebnis": "5,8 %",
    "antwort": 5.8
   },
   "1 000 Menschen machen einen Test. 72 Kranke werden positiv getestet (8 negativ), von den Gesunden 46 fälschlich positiv (874 negativ). Wie viel Prozent der positiv Getesteten sind wirklich krank? (1 Nachkommastelle)": {
    "teil": "6.3a",
    "typ": "zahl",
    "ergebnis": "61 %",
    "antwort": 61.0
   },
   "Von 90 Jugendlichen sind 60 Jungen und 30 Mädchen. 36 spielen Fußball: 30 Jungen und 6 Mädchen. Sind „Geschlecht“ und „Fußball spielen“ unabhängig?": {
    "teil": "6.3b",
    "typ": "wahl",
    "ergebnis": "Nein, abhängig",
    "optionen": [
     "Nein, abhängig",
     "Ja, unabhängig",
     "Ja, weil 30 + 6 = 36",
     "Nur bei den Jungen"
    ]
   },
   "Ein Diagramm beginnt bei 80 auf der y-Achse. Die linke Säule steht für 85, die rechte für 90 und sieht doppelt so hoch aus. Um wie viel Prozent ist der Wert wirklich gestiegen? (1 Nachkommastelle)": {
    "teil": "6.1a",
    "typ": "zahl",
    "klausur": true
   },
   "Fünf Werte: 3, 4, 5, 6 und 32. Um wie viel ist der Mittelwert größer als der Median?": {
    "teil": "6.1b",
    "typ": "zahl",
    "klausur": true
   },
   "Es wurden 150 Personen befragt, davon 60 Jungen. 45 Jungen spielen Videospiele, insgesamt spielen 100 Personen. Wie viele Mädchen spielen keine Videospiele?": {
    "teil": "6.2a",
    "typ": "zahl",
    "klausur": true
   },
   "5 000 Menschen: 2 % sind infiziert. Der Test erkennt 95 % der Infizierten, bei Gesunden zeigt er in 4 % der Fälle fälschlich „positiv“. Wie viel Prozent aller Tests sind positiv? (1 Nachkommastelle)": {
    "teil": "6.2b",
    "typ": "zahl",
    "klausur": true
   },
   "Mit den Zahlen der vorigen Aufgabe (95 infizierte und 196 gesunde Positive): Wie viel Prozent der positiv Getesteten sind wirklich infiziert? (1 Nachkommastelle)": {
    "teil": "6.3a",
    "typ": "zahl",
    "klausur": true
   },
   "Von 200 Schülern sind 120 Mädchen, davon 30 Linkshänderinnen. Insgesamt sind 40 Schüler Linkshänder. Wie viel Prozent der Linkshänder sind Mädchen?": {
    "teil": "6.3a",
    "typ": "wahl",
    "klausur": true
   },
   "Die Ereignisse A und B sind unabhängig mit P(A) = 0,5 und P(B) = 0,4. Wie groß ist P(A und B)? (Dezimalzahl)": {
    "teil": "6.3b",
    "typ": "zahl",
    "klausur": true
   },
   "Woran erkennt man am schnellsten ein manipuliertes Säulendiagramm?": {
    "teil": "6.1a",
    "typ": "wahl",
    "klausur": true
   }
  }
 },
 "d10-1-eroertern": {
  "titel": "Erörtern",
  "fach": "deutsch",
  "klasse": 10,
  "teile": {
   "1.1a": "Ein Argument aufbauen",
   "1.1b": "Argumente ordnen",
   "1.2a": "Die lineare Erörterung",
   "1.2b": "Pro und Contra",
   "1.3a": "Zum Text Stellung nehmen"
  },
  "text": "# Erörtern (Deutsch, Klasse 10)\n\n## Merkkästen der Arbeitsblätter\n### 1.1a Ein Argument aufbauen\nEin Argument besteht aus drei Bausteinen: These – Begründung – Beispiel\n1 These (Behauptung): Schüler sollten ihr Handy in der Pause nutzen dürfen.\n2 Begründung (warum?): Denn so können sie sich entspannen und mit Freunden schreiben.\n3 Beispiel (konkret): Zum Beispiel schickt Lena in der Pause ein Foto ihrer Katze an ihre Oma.\n\n### 1.1b Argumente ordnen\nOrdne Argumente nach dem Steigerungsprinzip: schwach → stark\n– das stärkste kommt zuletzt.\n1 Prüfe: Betrifft es viele? Wirkt es lange? Ist es gut belegbar? Dann ist es stark.\n2 Ordne: schwächstes Argument zuerst, stärkstes zuletzt.\n3 Verknüpfe mit Überleitungen: Zunächst – Außerdem – Am wichtigsten\n\n### 1.2a Die lineare Erörterung\nDie lineare Erörterung reiht nur Argumente für eine Antwort aneinander: Einleitung – Hauptteil – Schluss\n1 Einleitung: Hinführung (Alltag, Beispiel) + Frage nennen\n2 Hauptteil: 2–3 Argumente (These – Begründung – Beispiel), steigernd\n3 Schluss: Fazit mit eigener Meinung, keine neuen Argumente\n\n### 1.2b Pro und Contra\nDie dialektische Erörterung wägt Pro und Contra ab. Zwei Ordnungen:\n1 Sanduhr: erst Gegenseite (stark → schwach), dann eigene Seite (schwach → stark)\n2 Pingpong: Pro 1 – Contra 1 – Pro 2 – Contra 2 … abwechselnd\n3 Immer: Ende mit dem stärksten Argument der eigenen Meinung + Fazit\n\n### 1.3a Zum Text Stellung nehmen\nBei der textgebundenen Erörterung prüfst du die Position eines Textes und nimmst selbst Stellung.\n1 Lesen: Thema und These des Autors markieren, seine Argumente notieren\n2 Prüfen: zustimmen, widersprechen oder teils-teils – mit eigenen Argumenten\n3 Belegen: auf den Text verweisen (Z. 3), nicht abschreiben\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 1.1a Ein Argument aufbauen] Aus welchen drei Bausteinen besteht ein vollständiges Argument? Auswahl: These – Begründung – Beispiel | Einleitung – Hauptteil – Schluss | Frage – Antwort – Zitat | Pro – Contra – Fazit\n  Ergebnis: These – Begründung – Beispiel\n  Weg: Ein vollständiges Argument hat drei Bausteine: eine These (Behauptung), eine Begründung (Warum?) und ein Beispiel, das beides anschaulich macht. Die Reihenfolge ist logisch: erst behaupten, dann begründen, dann belegen. Achtung: Einleitung – Hauptteil – Schluss ist der Aufbau des ganzen Aufsatzes, nicht eines einzelnen Arguments.\n- [Einstiegsquiz, 1.1b Argumente ordnen] Nach dem Steigerungsprinzip ordnest du Argumente so: Auswahl: alle gleich lang | schwach → stark, das stärkste zuletzt | stark → schwach, das stärkste zuerst | in zufälliger Reihenfolge\n  Ergebnis: schwach → stark, das stärkste zuletzt\n  Weg: Beim Steigerungsprinzip ordnest du die Argumente vom schwächsten zum stärksten, denn der Schluss bleibt am längsten im Gedächtnis. Das stärkste Argument steht also als Letztes im Hauptteil und hinterlässt den größten Eindruck. Achtung: „stark → schwach“ wäre ein Abfall der Wirkung – der Text würde schwach enden.\n- [Einstiegsquiz, 1.2a Die lineare Erörterung] Welchen Aufbau hat eine lineare Erörterung? Auswahl: These – Antithese – Synthese ohne Einleitung | Nur eine Liste von Argumenten | Einleitung – Hauptteil – Schluss | Pro – Contra – Pro – Contra\n  Ergebnis: Einleitung – Hauptteil – Schluss\n  Weg: Eine lineare Erörterung vertritt von Anfang bis Ende eine Position und ist daher dreiteilig: Einleitung, Hauptteil (Argumente), Schluss (Fazit). Die Argumente stehen als gerade „Linie“ hintereinander, ohne Gegenseite. Achtung: Pro – Contra – Pro – Contra ist die Form der dialektischen Erörterung.\n- [Einstiegsquiz, 1.2b Pro und Contra] Was unterscheidet die dialektische von der linearen Erörterung? Auswahl: Sie hat keinen Schluss | Sie enthält keine Beispiele | Sie nennt nur Gegenargumente | Sie wägt Pro und Contra ab\n  Ergebnis: Sie wägt Pro und Contra ab\n  Weg: Dialektisch bedeutet „im Wechselspiel“: Man stellt Argumente für und gegen eine Position gegenüber und wägt sie ab. Das unterscheidet sie von der linearen Erörterung, die nur eine Seite vertritt. Achtung: Auch die dialektische Erörterung hat Einleitung und Schluss und braucht Beispiele; „nur Gegenargumente“ wäre einseitig.\n- [Einstiegsquiz, 1.3a Zum Text Stellung nehmen] Was ist bei einer textgebundenen Erörterung zuerst zu tun? Auswahl: Den Text lesen und die Position des Autors erfassen | Sofort die eigene Meinung schreiben | Den Text abschreiben | Nur die Überschrift lesen\n  Ergebnis: Den Text lesen und die Position des Autors erfassen\n  Weg: Eine textgebundene Erörterung antwortet auf einen Text. Darum musst du zuerst verstehen, was der Autor behauptet und wie er es begründet. Erst dann kannst du sachlich Stellung nehmen. Achtung: Sofort die eigene Meinung zu schreiben ist die häufigste Falle – du würdest am Text vorbeischreiben.\n- [Übungsaufgaben 1, 1.1a Ein Argument aufbauen] Welcher Satz ist eine passende Begründung zur These „Schüler sollten in der Pause Musik hören dürfen“? Auswahl: Musik gibt es überall. | Denn Musik hilft, nach dem Unterricht abzuschalten. | Zum Beispiel hört Jonas gern Rock. | Ich finde das gut.\n  Ergebnis: Denn Musik hilft, nach dem Unterricht abzuschalten.\n  Weg: Eine Begründung beantwortet die Frage „Warum?“ und wird oft mit „denn“ oder „weil“ angeschlossen. Hier liefert „Denn Musik hilft, nach dem Unterricht abzuschalten“ einen Grund, warum die These gilt. Achtung: „Zum Beispiel hört Jonas gern Rock“ ist nur ein Einzelfall (Beispiel) und erklärt nicht, warum die These stimmt.\n- [Übungsaufgaben 1, 1.1b Argumente ordnen] Ordne nach Steigerung (schwach → stark): A „Ein Garten sieht schön aus.“ B „Man lernt, wie Pflanzen wachsen.“ C „Gemeinsame Arbeit stärkt langfristig Verantwortung.“ Auswahl: B – A – C | A – C – B | A – B – C | C – B – A\n  Ergebnis: A – B – C\n  Weg: Beim Steigerungsprinzip zählt, wie weit ein Argument reicht: je mehr Menschen und je länger betroffen, desto stärker. A betrifft nur den Geschmack, B den Unterricht, C wirkt langfristig auf alle – also A – B – C. Achtung: C – B – A wäre die umgekehrte Reihenfolge und würde mit dem schwächsten Argument enden.\n- [Übungsaufgaben 1, 1.2a Die lineare Erörterung] Welcher Satz gehört in den Schluss einer linearen Erörterung? Auswahl: Erstens spart man dadurch Zeit. | Fast jeder besitzt heute ein Smartphone. | Außerdem gibt es noch ein weiteres Argument. | Zusammenfassend überwiegen für mich die Vorteile.\n  Ergebnis: Zusammenfassend überwiegen für mich die Vorteile.\n  Weg: Der Schluss rundet die Erörterung ab: Er fasst zusammen und nennt das eigene Fazit. Signalwörter wie „zusammenfassend“ und „überwiegen für mich“ zeigen das Fazit. Achtung: „Erstens“ und „Außerdem“ leiten neue Argumente ein und gehören in den Hauptteil; die Smartphone-Aussage ist eine Hinführung (Einleitung).\n- [Übungsaufgaben 1, 1.2b Pro und Contra] Du bist FÜR Hausaufgaben. Was ist die Sanduhr-Reihenfolge? (C = Contra, P = Pro, 2 = stark, 1 = schwach) Auswahl: C2 – C1 – P1 – P2 | P1 – P2 – C1 – C2 | C1 – C2 – P2 – P1 | P2 – C2 – P1 – C1\n  Ergebnis: C2 – C1 – P1 – P2\n  Weg: Bei der Sanduhr stellst du zuerst die Gegenseite dar (stark → schwach), dann die eigene Seite (schwach → stark). Du bist für Hausaufgaben, also: Contra C2 – C1, dann Pro P1 – P2. So endet der Text mit deinem stärksten Argument. Achtung: P1 – P2 – C1 – C2 würde mit der Gegenseite enden.\n- [Übungsaufgaben 1, 1.3a Zum Text Stellung nehmen] Ein Text beginnt: „Handys gehören aus dem Unterricht verbannt (Z. 1).“ Was ist das? Auswahl: Das Fazit der Leserin | Die These des Autors | Ein Gegenargument | Ein Beispiel\n  Ergebnis: Die These des Autors\n  Weg: Die These ist die zentrale Behauptung oder Forderung des Autors; sie steht oft am Anfang oder Ende des Textes. Hier ist „Handys gehören aus dem Unterricht verbannt“ eine klare Forderung ohne Begründung – also die These. Achtung: Ein Gegenargument würde der Forderung widersprechen, ein Beispiel würde einen Einzelfall schildern.\n- [Abschlussquiz, 1.1a Ein Argument aufbauen] Welcher Satz ist ein Beispiel (und keine Begründung)? Auswahl: Apps sind wichtig. | Deshalb sollte man lernen. | Zum Beispiel lernt Mia mit der App täglich zehn Vokabeln. | Denn Lernen macht klüger.\n  Ergebnis: Zum Beispiel lernt Mia mit der App täglich zehn Vokabeln.\n  Weg: Ein Beispiel macht eine Aussage durch einen konkreten Einzelfall anschaulich, oft mit „zum Beispiel“. Hier ist Mia mit ihrer App ein bestimmter Fall mit konkreter Zahl (zehn Vokabeln täglich). Achtung: „Denn Lernen macht klüger“ ist allgemein und gibt einen Grund – das ist eine Begründung.\n- [Abschlussquiz, 1.1b Argumente ordnen] Welche Überleitung passt zum stärksten Argument? Auswahl: Zunächst … | Nebenbei … | Es ist auch hübsch, dass … | Am wichtigsten ist aber …\n  Ergebnis: Am wichtigsten ist aber …\n  Weg: Überleitungen zeigen dem Leser, wo er im Text steht. Beim Steigerungsprinzip kündigt „Am wichtigsten ist aber …“ das gewichtigste Argument an. Die Wörter „wichtigsten“ und „aber“ heben es von den vorherigen ab. Achtung: „Zunächst“ gehört an den Anfang, „Nebenbei“ wertet ein Argument ab.\n- [Abschlussquiz, 1.2a Die lineare Erörterung] Was gehört in eine gute Einleitung? Auswahl: Hinführung zum Thema und die Frage | Das Fazit | Alle Argumente in Kurzform | Ein neues Argument\n  Ergebnis: Hinführung zum Thema und die Frage\n  Weg: Die Einleitung führt zum Thema hin (Alltag, Beispiel, aktuelle Lage) und stellt die Erörterungsfrage. So weiß der Leser, worum es geht und wohin der Text will. Achtung: Fazit und Argumente gehören nicht hierher – sonst ist im Hauptteil und Schluss nichts mehr zu sagen.\n- [Abschlussquiz, 1.2b Pro und Contra] Wie funktioniert das Pingpong-Prinzip? Auswahl: Argumente werden zufällig gemischt | Pro und Contra wechseln sich ab | Erst alle Pro, dann alle Contra | Nur Contra-Argumente\n  Ergebnis: Pro und Contra wechseln sich ab\n  Weg: Beim Pingpong wechseln sich Pro und Contra Argument für Argument ab, wie ein Ball hin und her. Jedes Gegenargument greift das vorherige direkt auf, so lässt sich gut abwägen. Achtung: Erst alle Pro, dann alle Contra ist der Blockaufbau.\n- [Abschlussquiz, 1.3a Zum Text Stellung nehmen] Welche Stellungnahme zum Text ist am besten? Auswahl: Das Thema ist langweilig. | Ich schreibe den Text ab. | Ich stimme teilweise zu, denn Zwang kann abschrecken (vgl. Z. 4–5). | Der Autor hat keine Ahnung.\n  Ergebnis: Ich stimme teilweise zu, denn Zwang kann abschrecken (vgl. Z. 4–5).\n  Weg: Eine gute Stellungnahme hat drei Merkmale: eigene Position, Begründung und Textbezug. Hier steht „teilweise zu, denn …“ (Begründung) und „vgl. Z. 4–5“ (Beleg am Text). Achtung: „Der Autor hat keine Ahnung“ ist nur Beschimpfung ohne Begründung.\n- [Übungsaufgaben 2, 1.1a Ein Argument aufbauen] Was ist an diesem Argument falsch? „Hunde sind toll, weil Hunde einfach toll sind.“ Auswahl: Es hat zu viele Beispiele | Es ist zu lang | Es hat keine These | Es wiederholt die These nur und begründet nichts\n  Ergebnis: Es wiederholt die These nur und begründet nichts\n  Weg: Ein Zirkelschluss begründet eine Behauptung mit sich selbst. Eine Begründung muss aber neue Information liefern. Hier steht „toll“ in der These und in der Begründung – es wird nur wiederholt, nicht begründet. Achtung: Ob zu viele Beispiele oder zu lang – das wäre eine Frage des Stils, nicht der Logik.\n- [Übungsaufgaben 2, 1.1b Argumente ordnen] Ein Schüler beginnt mit dem stärksten Argument und hängt danach ein schwaches an. Was ist das Problem? Auswahl: Der Text verliert zum Ende an Wirkung | Es gibt keine Überleitungen | Die Argumente sind zu lang | Es gibt zu viele Beispiele\n  Ergebnis: Der Text verliert zum Ende an Wirkung\n  Weg: Das Steigerungsprinzip verlangt, dass die Argumente an Gewicht zunehmen und das stärkste zuletzt steht. Wer mit dem stärksten beginnt und mit einem schwachen endet, lässt den Text abflauen. Achtung: Fehlende Überleitungen wären ein anderes Problem, das hier nicht beschrieben wird.\n- [Übungsaufgaben 2, 1.2a Die lineare Erörterung] Was ist ein Fehler im Schluss? Auswahl: Er greift die Frage aus der Einleitung auf | Ein neues Argument tritt erst hier auf | Er fasst zusammen | Er nennt die eigene Meinung\n  Ergebnis: Ein neues Argument tritt erst hier auf\n  Weg: Der Schluss rundet ab: Zusammenfassung, Fazit, evtl. Ausblick. Neue Argumente bleiben im Hauptteil. Ein neues Argument im Schluss wirkt, als wäre der Hauptteil nicht fertig gedacht, und es bleibt unausgeführt. Achtung: Zusammenfassen und Meinung nennen sind erwünscht, kein Fehler.\n- [Übungsaufgaben 2, 1.2b Pro und Contra] Jan plant: Pro 1, Pro 2, Contra 1, Contra 2. Wie heißt dieser Aufbau? Auswahl: Sanduhr | Steigerung | Blockaufbau (kein Pingpong) | Pingpong\n  Ergebnis: Blockaufbau (kein Pingpong)\n  Weg: Pingpong wechselt Pro und Contra ab. Zwei Argumente derselben Seite hintereinander bilden einen Block. Jans Plan „Pro 1, Pro 2, Contra 1, Contra 2“ hat genau zwei Blöcke – also Blockaufbau. Achtung: Die Sanduhr ordnet zusätzlich nach Stärke (erst Gegenseite, dann eigene Seite).\n- [Übungsaufgaben 2, 1.3a Zum Text Stellung nehmen] Was bedeutet „vgl. Z. 4–5“ in einer Stellungnahme? Auswahl: Eine neue Überschrift | Ein Rechtschreibfehler | Die Seitenzahl des Buchs | Der Hinweis verweist auf die Stelle im Text\n  Ergebnis: Der Hinweis verweist auf die Stelle im Text\n  Weg: „vgl.“ ist die Abkürzung für „vergleiche“, „Z.“ steht für Zeile. Zusammen verweisen sie auf eine Textstelle. So belegst du, worauf du dich beziehst, ohne den Text abzuschreiben. Achtung: Eine Seitenzahl würde mit „S.“ angegeben; „Z.“ meint immer die Zeile.",
  "aufgaben": {
   "Aus welchen drei Bausteinen besteht ein vollständiges Argument?": {
    "teil": "1.1a",
    "typ": "wahl",
    "ergebnis": "These – Begründung – Beispiel",
    "optionen": [
     "These – Begründung – Beispiel",
     "Einleitung – Hauptteil – Schluss",
     "Frage – Antwort – Zitat",
     "Pro – Contra – Fazit"
    ]
   },
   "Nach dem Steigerungsprinzip ordnest du Argumente so:": {
    "teil": "1.1b",
    "typ": "wahl",
    "ergebnis": "schwach → stark, das stärkste zuletzt",
    "optionen": [
     "alle gleich lang",
     "schwach → stark, das stärkste zuletzt",
     "stark → schwach, das stärkste zuerst",
     "in zufälliger Reihenfolge"
    ]
   },
   "Welchen Aufbau hat eine lineare Erörterung?": {
    "teil": "1.2a",
    "typ": "wahl",
    "ergebnis": "Einleitung – Hauptteil – Schluss",
    "optionen": [
     "These – Antithese – Synthese ohne Einleitung",
     "Nur eine Liste von Argumenten",
     "Einleitung – Hauptteil – Schluss",
     "Pro – Contra – Pro – Contra"
    ]
   },
   "Was unterscheidet die dialektische von der linearen Erörterung?": {
    "teil": "1.2b",
    "typ": "wahl",
    "ergebnis": "Sie wägt Pro und Contra ab",
    "optionen": [
     "Sie hat keinen Schluss",
     "Sie enthält keine Beispiele",
     "Sie nennt nur Gegenargumente",
     "Sie wägt Pro und Contra ab"
    ]
   },
   "Was ist bei einer textgebundenen Erörterung zuerst zu tun?": {
    "teil": "1.3a",
    "typ": "wahl",
    "ergebnis": "Den Text lesen und die Position des Autors erfassen",
    "optionen": [
     "Den Text lesen und die Position des Autors erfassen",
     "Sofort die eigene Meinung schreiben",
     "Den Text abschreiben",
     "Nur die Überschrift lesen"
    ]
   },
   "Welcher Satz ist eine passende Begründung zur These „Schüler sollten in der Pause Musik hören dürfen“?": {
    "teil": "1.1a",
    "typ": "wahl",
    "ergebnis": "Denn Musik hilft, nach dem Unterricht abzuschalten.",
    "optionen": [
     "Musik gibt es überall.",
     "Denn Musik hilft, nach dem Unterricht abzuschalten.",
     "Zum Beispiel hört Jonas gern Rock.",
     "Ich finde das gut."
    ]
   },
   "Ordne nach Steigerung (schwach → stark): A „Ein Garten sieht schön aus.“ B „Man lernt, wie Pflanzen wachsen.“ C „Gemeinsame Arbeit stärkt langfristig Verantwortung.“": {
    "teil": "1.1b",
    "typ": "wahl",
    "ergebnis": "A – B – C",
    "optionen": [
     "B – A – C",
     "A – C – B",
     "A – B – C",
     "C – B – A"
    ]
   },
   "Welcher Satz gehört in den Schluss einer linearen Erörterung?": {
    "teil": "1.2a",
    "typ": "wahl",
    "ergebnis": "Zusammenfassend überwiegen für mich die Vorteile.",
    "optionen": [
     "Erstens spart man dadurch Zeit.",
     "Fast jeder besitzt heute ein Smartphone.",
     "Außerdem gibt es noch ein weiteres Argument.",
     "Zusammenfassend überwiegen für mich die Vorteile."
    ]
   },
   "Du bist FÜR Hausaufgaben. Was ist die Sanduhr-Reihenfolge? (C = Contra, P = Pro, 2 = stark, 1 = schwach)": {
    "teil": "1.2b",
    "typ": "wahl",
    "ergebnis": "C2 – C1 – P1 – P2",
    "optionen": [
     "C2 – C1 – P1 – P2",
     "P1 – P2 – C1 – C2",
     "C1 – C2 – P2 – P1",
     "P2 – C2 – P1 – C1"
    ]
   },
   "Ein Text beginnt: „Handys gehören aus dem Unterricht verbannt (Z. 1).“ Was ist das?": {
    "teil": "1.3a",
    "typ": "wahl",
    "ergebnis": "Die These des Autors",
    "optionen": [
     "Das Fazit der Leserin",
     "Die These des Autors",
     "Ein Gegenargument",
     "Ein Beispiel"
    ]
   },
   "Welcher Satz ist ein Beispiel (und keine Begründung)?": {
    "teil": "1.1a",
    "typ": "wahl",
    "ergebnis": "Zum Beispiel lernt Mia mit der App täglich zehn Vokabeln.",
    "optionen": [
     "Apps sind wichtig.",
     "Deshalb sollte man lernen.",
     "Zum Beispiel lernt Mia mit der App täglich zehn Vokabeln.",
     "Denn Lernen macht klüger."
    ]
   },
   "Welche Überleitung passt zum stärksten Argument?": {
    "teil": "1.1b",
    "typ": "wahl",
    "ergebnis": "Am wichtigsten ist aber …",
    "optionen": [
     "Zunächst …",
     "Nebenbei …",
     "Es ist auch hübsch, dass …",
     "Am wichtigsten ist aber …"
    ]
   },
   "Was gehört in eine gute Einleitung?": {
    "teil": "1.2a",
    "typ": "wahl",
    "ergebnis": "Hinführung zum Thema und die Frage",
    "optionen": [
     "Hinführung zum Thema und die Frage",
     "Das Fazit",
     "Alle Argumente in Kurzform",
     "Ein neues Argument"
    ]
   },
   "Wie funktioniert das Pingpong-Prinzip?": {
    "teil": "1.2b",
    "typ": "wahl",
    "ergebnis": "Pro und Contra wechseln sich ab",
    "optionen": [
     "Argumente werden zufällig gemischt",
     "Pro und Contra wechseln sich ab",
     "Erst alle Pro, dann alle Contra",
     "Nur Contra-Argumente"
    ]
   },
   "Welche Stellungnahme zum Text ist am besten?": {
    "teil": "1.3a",
    "typ": "wahl",
    "ergebnis": "Ich stimme teilweise zu, denn Zwang kann abschrecken (vgl. Z. 4–5).",
    "optionen": [
     "Das Thema ist langweilig.",
     "Ich schreibe den Text ab.",
     "Ich stimme teilweise zu, denn Zwang kann abschrecken (vgl. Z. 4–5).",
     "Der Autor hat keine Ahnung."
    ]
   },
   "Was ist an diesem Argument falsch? „Hunde sind toll, weil Hunde einfach toll sind.“": {
    "teil": "1.1a",
    "typ": "wahl",
    "ergebnis": "Es wiederholt die These nur und begründet nichts",
    "optionen": [
     "Es hat zu viele Beispiele",
     "Es ist zu lang",
     "Es hat keine These",
     "Es wiederholt die These nur und begründet nichts"
    ]
   },
   "Ein Schüler beginnt mit dem stärksten Argument und hängt danach ein schwaches an. Was ist das Problem?": {
    "teil": "1.1b",
    "typ": "wahl",
    "ergebnis": "Der Text verliert zum Ende an Wirkung",
    "optionen": [
     "Der Text verliert zum Ende an Wirkung",
     "Es gibt keine Überleitungen",
     "Die Argumente sind zu lang",
     "Es gibt zu viele Beispiele"
    ]
   },
   "Was ist ein Fehler im Schluss?": {
    "teil": "1.2a",
    "typ": "wahl",
    "ergebnis": "Ein neues Argument tritt erst hier auf",
    "optionen": [
     "Er greift die Frage aus der Einleitung auf",
     "Ein neues Argument tritt erst hier auf",
     "Er fasst zusammen",
     "Er nennt die eigene Meinung"
    ]
   },
   "Jan plant: Pro 1, Pro 2, Contra 1, Contra 2. Wie heißt dieser Aufbau?": {
    "teil": "1.2b",
    "typ": "wahl",
    "ergebnis": "Blockaufbau (kein Pingpong)",
    "optionen": [
     "Sanduhr",
     "Steigerung",
     "Blockaufbau (kein Pingpong)",
     "Pingpong"
    ]
   },
   "Was bedeutet „vgl. Z. 4–5“ in einer Stellungnahme?": {
    "teil": "1.3a",
    "typ": "wahl",
    "ergebnis": "Der Hinweis verweist auf die Stelle im Text",
    "optionen": [
     "Eine neue Überschrift",
     "Ein Rechtschreibfehler",
     "Die Seitenzahl des Buchs",
     "Der Hinweis verweist auf die Stelle im Text"
    ]
   },
   "Welche Reihenfolge hat ein vollständiges Argument?": {
    "teil": "1.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Welches Argument ist das stärkste für „Soll es einen Schulgarten geben?“": {
    "teil": "1.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Wie viele Argumente gehören üblicherweise in den Hauptteil einer linearen Erörterung?": {
    "teil": "1.2a",
    "typ": "wahl",
    "klausur": true
   },
   "Du bist GEGEN Schuluniformen. Was ist bei der Sanduhr die richtige Reihenfolge der Seiten?": {
    "teil": "1.2b",
    "typ": "wahl",
    "klausur": true
   },
   "Welche Überleitung passt zu einem Gegenargument?": {
    "teil": "1.2b",
    "typ": "wahl",
    "klausur": true
   },
   "Ein Text fordert „Alle Schüler sollen Mathe-AGs besuchen“ (Z. 1) und begründet das mit besseren Noten (Z. 2). Was ist das Argument?": {
    "teil": "1.3a",
    "typ": "wahl",
    "klausur": true
   },
   "Was gehört NICHT in eine gute Stellungnahme zu einem Text?": {
    "teil": "1.3a",
    "typ": "wahl",
    "klausur": true
   }
  }
 },
 "d10-2-sachtexte": {
  "titel": "Sachtexte analysieren",
  "fach": "deutsch",
  "klasse": 10,
  "teile": {
   "2.1a": "Textsorten und Absicht",
   "2.1b": "Aufbau und Kernaussagen",
   "2.2a": "Argumentationsstruktur",
   "2.2b": "Sprachliche Mittel",
   "2.3a": "Einleitungssatz und Aufbau",
   "2.3b": "Wiedergeben und belegen"
  },
  "text": "# Sachtexte analysieren (Deutsch, Klasse 10)\n\n## Merkkästen der Arbeitsblätter\n### 2.1a Textsorten und Absicht\nBericht informiert sachlich (Wer? Was? Wann? Wo?). Kommentar sagt die Meinung und will überzeugen.\nRede spricht Zuhörer direkt an („wir“, „ihr“) und will mitreißen. Glosse ist kurz, ironisch und spottet über einen Missstand.\n1 Frage dich: Informiert, überzeugt, wirbt oder spottet der Text?\n2 Suche Signalwörter, z. B. „ich finde“, „wir alle“, „sachlich“, Ironie.\n3 Benenne die Textsorte.\nBeispiel: „Ich finde, das Handyverbot ist unfair.“ → Meinung, will überzeugen → Kommentar\n\n### 2.1b Aufbau und Kernaussagen\nEin Sinnabschnitt endet, wo sich das Thema ändert (neuer Absatz, neuer Gedanke). Die Kernaussage sagt in einem Satz: Worum geht es, und was wird dazu gesagt?\n1 Text in Sinnabschnitte teilen\n2 Jedem Abschnitt eine Überschrift geben\n3 Kernaussage in einem Satz\nBeispiel: „Der Text handelt von Schulbeginn und sagt, dass er später sein sollte.“\n\n### 2.2a Argumentationsstruktur\nThese: die Behauptung („Das soll so sein!“). Argument: die Begründung („weil …“). Beleg: Beispiel, Zahl oder Erfahrung, die das Argument stützt („zum Beispiel …“).\n1 These finden: Was soll ich glauben?\n2 Argument: Warum?\n3 Beleg: Woran sieht man das?\nBeispiel: These: Handys sollen erlaubt sein. Argument: weil man so die Eltern erreicht. Beleg: zum Beispiel bei Busausfall.\n\n### 2.2b Sprachliche Mittel\nRhetorische Frage: Frage ohne Antwort → Leser soll zustimmen. Wiederholung: betont das Wichtige. Übertreibung: rüttelt auf. Wertendes Adjektiv: lenkt die Meinung („unsinnig“).\n1 Mittel erkennen und benennen\n2 Stelle zitieren\n3 Wirkung erklären: „Dadurch wirkt …“\nBeispiel: „Wer will das schon?“ → rhetorische Frage → Der Leser soll innerlich „Niemand!“ sagen.\n\n### 2.3a Einleitungssatz und Aufbau\nDer Einleitungssatz nennt: Textsorte, Titel, Autor, Quelle/Datum, Thema. Geschrieben wird im Präsens, sachlich, ohne „ich finde“.\n1 Einleitung: Einleitungssatz mit Thema und Kernaussage\n2 Hauptteil: Aufbau, Argumentation, sprachliche Mittel mit Belegen\n3 Schluss: Gesamteindruck und Wirkung\nBeispiel: „In dem Kommentar ‚Schule erst um neun?‘ von Tom Weber, erschienen am 3.5.2025 in der ‚Stadtpost‘, geht es um den Schulbeginn.“\n\n### 2.3b Wiedergeben und belegen\nGib Aussagen indirekt wieder (Konjunktiv I oder „dass“-Satz) und belege sie mit einem Zitat in Anführungszeichen plus Zeile.\n1 Redeeinleitung: Der Autor fordert, …\n2 Konjunktiv I: … die Schule beginne zu früh\n3 Beleg: („wörtlich“, Z. 1)\nBeispiel: Die Autorin kritisiert, die Pause sei zu kurz („Die Pause ist viel zu kurz“, Z. 2).\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 2.1a Textsorten und Absicht] Welche Textsorte informiert sachlich über ein Ereignis (Wer? Was? Wann? Wo?)? Auswahl: Bericht | Kommentar | Glosse | Rede\n  Ergebnis: Bericht\n  Weg: Ein Bericht informiert sachlich über ein Ereignis und beantwortet die W-Fragen, ohne Wertung oder Meinung. Genau das verlangt die Aufgabe: „informiert sachlich“ und „Wer? Was? Wann? Wo?“. Achtung: Der Kommentar urteilt, die Glosse spottet, die Rede spricht Zuhörer an – alle drei sind nicht neutral.\n- [Einstiegsquiz, 2.1b Aufbau und Kernaussagen] Was ist ein Sinnabschnitt? Auswahl: Der letzte Absatz | Ein Teil des Textes, in dem es um denselben Gedanken geht | Jeder einzelne Satz | Die Überschrift\n  Ergebnis: Ein Teil des Textes, in dem es um denselben Gedanken geht\n  Weg: Ein Sinnabschnitt ist ein Textteil, der einen Gedanken behandelt; er endet, wo sich Thema oder Gedanke ändert. Er kann aus mehreren Sätzen bestehen, deshalb passt der Begriff nicht auf jeden Satz. Achtung: Überschrift oder letzter Absatz sind feste Textteile, aber kein Sinnabschnitt im Sinne der Gedankenführung.\n- [Einstiegsquiz, 2.2a Argumentationsstruktur] Was ist die These eines Textes? Auswahl: Eine Zahl als Beleg | Der Titel | Die Hauptbehauptung, die der Autor vertritt | Ein Beispiel aus dem Alltag\n  Ergebnis: Die Hauptbehauptung, die der Autor vertritt\n  Weg: Die These ist die Hauptbehauptung des Autors, das, was er beweisen will. Argumente begründen sie, Belege (Zahlen, Beispiele) stützen die Argumente – daher sind Beispiel, Zahl und Titel nicht die These. Achtung: Eine Zahl ist nur ein Beleg, der Titel nennt höchstens das Thema.\n- [Einstiegsquiz, 2.2b Sprachliche Mittel] Was bewirkt eine rhetorische Frage meistens? Auswahl: Der Leser soll eine Antwort schreiben | Der Text wird sachlicher | Der Text wird kürzer | Der Leser soll zustimmen oder nachdenken\n  Ergebnis: Der Leser soll zustimmen oder nachdenken\n  Weg: Eine rhetorische Frage erwartet keine Antwort, weil sie der Autor selbst schon als klar voraussetzt. Sie lenkt den Leser in die Richtung des Autors und regt zum Nachdenken oder Zustimmen an. Achtung: Sie macht den Text nicht sachlicher, sie wirkt eher appellativ und emotional.\n- [Einstiegsquiz, 2.3a Einleitungssatz und Aufbau] Welche Angabe gehört NICHT in den Einleitungssatz einer Analyse? Auswahl: Die eigene Meinung zum Text | Der Titel | Der Autor | Die Textsorte\n  Ergebnis: Die eigene Meinung zum Text\n  Weg: Der Einleitungssatz informiert sachlich: Textsorte, Titel, Autor, Quelle/Datum und Thema. Die eigene Meinung ist nicht dabei, denn die Analyse untersucht nur, wie der Text wirkt. Achtung: Titel, Autor und Textsorte sind alles Pflichtangaben im Einleitungssatz.\n- [Einstiegsquiz, 2.3b Wiedergeben und belegen] Wie gibst du die Aussage des Autors in einer Analyse wieder? Auswahl: Gar nicht, nur zitieren | Indirekt, im Präsens und mit Redeeinleitung | Direkt, im Perfekt, ohne Einleitung | Als Ich-Erzählung\n  Ergebnis: Indirekt, im Präsens und mit Redeeinleitung\n  Weg: In der Analyse gibst du Aussagen des Autors indirekt wieder, im Präsens und mit Redeeinleitung („Der Autor fordert, …“). Dazu kommt ein Beleg mit Zeilenangabe, damit alles nachprüfbar ist. Achtung: Perfekt und Ich-Form wären falsch, und reines Zitieren ersetzt keine eigene Wiedergabe.\n- [Übungsaufgaben 1, 2.1a Textsorten und Absicht] „Ich finde: Hausaufgaben am Wochenende sind unfair und sollten abgeschafft werden.“ Welche Textsorte passt? Auswahl: Rede | Glosse | Kommentar | Bericht\n  Ergebnis: Kommentar\n  Weg: „Ich finde“, „unfair“ und „sollten abgeschafft werden“ sind Meinung und Forderung – ein Kommentar will überzeugen. Der Text wertet eindeutig, daher kein sachlicher Bericht. Achtung: Eine Rede spricht ein Publikum direkt an und eine Glosse ist ironisch – beides fehlt hier.\n- [Übungsaufgaben 1, 2.1b Aufbau und Kernaussagen] Ein Text hat vier Absätze: Problem, zwei Ursachen, Lösungsvorschlag. Was ist die beste Kernaussage? Auswahl: Der Text hat vier Absätze. | Der Text handelt von Problemen. | Der Text ist lang. | Der Text beschreibt ein Problem, nennt Ursachen und schlägt eine Lösung vor.\n  Ergebnis: Der Text beschreibt ein Problem, nennt Ursachen und schlägt eine Lösung vor.\n  Weg: Eine Kernaussage fasst Thema und Aussage des Textes in einem Satz zusammen. Hier ist der Gedankengang Problem → Ursachen → Lösung, und der erste Satz nennt genau das. Achtung: „vier Absätze“ beschreibt nur die Form, „handelt von Problemen“ ist zu ungenau, „lang“ sagt nichts über den Inhalt.\n- [Übungsaufgaben 1, 2.2a Argumentationsstruktur] „Jugendliche brauchen mehr Schlaf, weil ihre innere Uhr später tickt.“ Was ist das? Auswahl: Ein Argument | Eine These | Ein Beispiel | Eine rhetorische Frage\n  Ergebnis: Ein Argument\n  Weg: Ein Argument begründet eine Behauptung, oft mit Wörtern wie „weil“ oder „denn“. Hier steht die Ursache („ihre innere Uhr tickt später“) im „weil“-Satz. Achtung: Die These wäre die allgemeine Behauptung (z. B. „Die Schule soll später beginnen“); ein Beispiel würde einen Einzelfall nennen.\n- [Übungsaufgaben 1, 2.2b Sprachliche Mittel] „Wir brauchen Mut, wir brauchen Zeit, wir brauchen euch!“ Welches sprachliche Mittel ist das? Auswahl: Fachbegriff | Wiederholung (Anapher) | Rhetorische Frage | Vergleich\n  Ergebnis: Wiederholung (Anapher)\n  Weg: Eine Anapher ist die Wiederholung desselben Wortes am Satz- oder Satzgliedanfang. Sie betont und klingt eindringlich. Hier beginnt jedes Satzglied mit „Wir brauchen“. Achtung: Es ist keine rhetorische Frage (keine Fragezeichen) und kein Vergleich (kein „wie“).\n- [Übungsaufgaben 1, 2.3a Einleitungssatz und Aufbau] Welcher Einleitungssatz ist am besten? Auswahl: Der Text ist von Nele und handelt vom Essen. | In der Schulpost steht etwas. | In dem Kommentar „Mensa muss billiger werden“ von Nele Arndt, erschienen am 8.11.2025 in der „Schulpost“, geht es um die Preise in der Mensa. | Ich finde die Mensa zu teuer, das schreibt auch Nele.\n  Ergebnis: In dem Kommentar „Mensa muss billiger werden“ von Nele Arndt, erschienen am 8.11.2025 in der „Schulpost“, geht es um die Preise in der Mensa.\n  Weg: Ein guter Einleitungssatz enthält Textsorte, Titel, Autorin, Quelle, Datum und das genaue Thema – sachlich im Präsens. Der erste Satz nennt alles; die anderen lassen Teile weg oder enthalten Wertungen („Ich finde …“). Achtung: „Ich finde …“ gehört nie in eine Analyse.\n- [Übungsaufgaben 1, 2.3b Wiedergeben und belegen] Welche Zeilenangabe ist richtig, wenn ein Zitat von Zeile 3 bis in Zeile 4 reicht? Auswahl: Z. 3-4 Zeilen | Zeile (3) | S. 3f | Z. 3f.\n  Ergebnis: Z. 3f.\n  Weg: „f.“ heißt „und die folgende Zeile“, also reicht Z. 3f. von Zeile 3 bis 4. Die Angabe steht in Klammern direkt hinter dem Zitat. Achtung: „S.“ wäre die Seite, nicht die Zeile – und „Zeilen“ ausgeschrieben ist unüblich.\n- [Abschlussquiz, 2.1a Textsorten und Absicht] Ein kurzer Text kritisiert ironisch und überspitzt einen Missstand an der Schule. Welche Textsorte ist das? Auswahl: Glosse | Bericht | Kommentar | Rede\n  Ergebnis: Glosse\n  Weg: Eine Glosse ist ein kurzer, ironischer Text, der einen Missstand spöttisch oder überspitzt kritisiert. Die Aufgabe nennt „kurz“, „ironisch“ und „überspitzt“ – genau diese Merkmale. Achtung: Ein Kommentar kritisiert auch, aber ernst und argumentierend, nicht ironisch.\n- [Abschlussquiz, 2.1b Aufbau und Kernaussagen] Woran erkennst du oft einen neuen Sinnabschnitt? Auswahl: Ein Wort wird wiederholt | Das Thema oder der Gedanke wechselt | Ein Satz ist sehr lang | Es steht ein Komma\n  Ergebnis: Das Thema oder der Gedanke wechselt\n  Weg: Ein neuer Sinnabschnitt beginnt, wenn sich der Gedanke ändert, oft mit neuem Absatz, Zeit-/Ortswechsel oder Signalwörtern („außerdem“, „dagegen“). Hinweise sind inhaltlich, nicht formal. Achtung: Ein Komma oder ein langer Satz sagen nichts über den Gedankenwechsel.\n- [Abschlussquiz, 2.2a Argumentationsstruktur] Der Autor schreibt: „Bei unserer Umfrage stimmten 80 % der Klasse zu.“ Was ist das? Auswahl: Eine Meinung ohne Begründung | Ein Stilmittel | Ein Beleg | Die These\n  Ergebnis: Ein Beleg\n  Weg: Ein Beleg stützt ein Argument durch überprüfbare Fakten, etwa Zahlen, Umfragen oder Beispiele. „80 % der Klasse“ ist eine konkrete, nachprüfbare Zahl. Achtung: Die These wäre die allgemeine Hauptbehauptung, kein einzelner Zahlenwert.\n- [Abschlussquiz, 2.2b Sprachliche Mittel] „Das ist die absolute Katastrophe für alle Schüler der Welt!“ Welches Mittel liegt vor? Auswahl: Aufzählung | Rhetorische Frage | Fachwort | Übertreibung\n  Ergebnis: Übertreibung\n  Weg: Eine Übertreibung (Hyperbel) stellt etwas absichtlich größer dar, als es ist, um Aufmerksamkeit zu erzeugen. „absolute Katastrophe“ und „alle Schüler der Welt“ sind klar übertrieben. Achtung: Es ist keine Aufzählung (nur ein Gedanke) und keine rhetorische Frage.\n- [Abschlussquiz, 2.3a Einleitungssatz und Aufbau] In welcher Reihenfolge ist eine Analyse aufgebaut? Auswahl: Einleitung, Hauptteil, Schluss | Hauptteil, Einleitung, Schluss | Schluss, Hauptteil, Einleitung | Hauptteil, Schluss\n  Ergebnis: Einleitung, Hauptteil, Schluss\n  Weg: Eine Analyse folgt der Dreiteilung Einleitung – Hauptteil – Schluss. Erst der Einleitungssatz, dann Aufbau, Argumentation und sprachliche Mittel, zuletzt der Gesamteindruck. Achtung: Die anderen Reihenfolgen drehen die Ordnung um und lassen den Leser ohne Orientierung.\n- [Abschlussquiz, 2.3b Wiedergeben und belegen] Welche Wiedergabe ist indirekt? Auswahl: Die Schule soll später beginnen! | Der Autor fordert, die Schule solle später beginnen. | Der Autor sagt: „Die Schule soll später beginnen.“ | Ich fordere: Die Schule soll später beginnen.\n  Ergebnis: Der Autor fordert, die Schule solle später beginnen.\n  Weg: Indirekte Rede gibt Gesagtes ohne Anführungszeichen und meist im Konjunktiv I weiter („solle“). Der Satz „Der Autor fordert, die Schule solle später beginnen“ hat Redeeinleitung und Konjunktiv. Achtung: Mit Anführungszeichen wäre es direkte Rede, und die Ich-Form wäre die Aussage des Autors selbst.\n- [Übungsaufgaben 2, 2.1a Textsorten und Absicht] Eine Schulleiterin spricht bei der Abschlussfeier: „Liebe Schülerinnen und Schüler, gemeinsam haben wir viel erreicht!“ Welche Textsorte ist das? Auswahl: Glosse | Kommentar | Rede | Bericht\n  Ergebnis: Rede\n  Weg: Eine Rede wendet sich direkt an Zuhörer, mit Anrede, „wir“ und oft einem Appell. „Liebe Schülerinnen und Schüler“ und „gemeinsam haben wir“ sind klare Hinweise. Achtung: Ein Bericht informiert neutral, ohne Anrede.\n- [Übungsaufgaben 2, 2.1b Aufbau und Kernaussagen] Welcher Satz fasst einen Text über Handyverbot an der Schule am besten zusammen? Auswahl: Der Text handelt vom Handy. | Der Autor mag keine Verbote. | Der Text hat drei Absätze. | Der Text handelt vom Handyverbot und sagt, dass eine Handyzone besser wäre.\n  Ergebnis: Der Text handelt vom Handyverbot und sagt, dass eine Handyzone besser wäre.\n  Weg: Eine gute Zusammenfassung nennt Thema und Kernaussage in einem Satz. Hier: Thema Handyverbot, Aussage „Handyzone wäre besser“. Achtung: „handelt vom Handy“ ist zu ungenau, „Autor mag keine Verbote“ ist eine Wertung, „drei Absätze“ beschreibt nur die Form.\n- [Übungsaufgaben 2, 2.2a Argumentationsstruktur] „Der Schulhof sollte grüner werden. Zum Beispiel haben Pflanzen in der 9b für weniger Streit gesorgt.“ Welcher Teil ist der Beleg? Auswahl: Der zweite Satz | Der erste Satz | Beide Sätze | Keiner\n  Ergebnis: Der zweite Satz\n  Weg: „Zum Beispiel“ leitet ein Beispiel ein, das die Behauptung belegt. Der erste Satz („Der Schulhof sollte grüner werden“) ist die Forderung, also die These. Achtung: Beide Sätze als Beleg zu markieren wäre falsch, weil eine Behauptung selbst keinen Beleg liefert.\n- [Übungsaufgaben 2, 2.2b Sprachliche Mittel] Welche Wirkung hat das wertende Adjektiv in „diese unsinnige Regel“? Auswahl: Es macht den Satz kürzer | Es lenkt den Leser zu einer negativen Meinung | Es informiert neutral | Es erklärt die Regel\n  Ergebnis: Es lenkt den Leser zu einer negativen Meinung\n  Weg: Ein wertendes Adjektiv drückt ein Urteil aus und beeinflusst die Meinung des Lesers. „unsinnig“ sagt nicht, was die Regel ist, sondern wie der Autor sie bewertet. Achtung: Neutral wäre „diese Regel“; „unsinnig“ erklärt die Regel nicht, es verurteilt sie.\n- [Übungsaufgaben 2, 2.3a Einleitungssatz und Aufbau] Was gehört in den Schluss einer Sachtext-Analyse? Auswahl: Eine Zusammenfassung jedes Satzes | Neue Argumente des Schreibers | Gesamteindruck und Wirkung des Textes | Der Titel des Textes\n  Ergebnis: Gesamteindruck und Wirkung des Textes\n  Weg: Der Schluss einer Analyse zieht ein Fazit: Wie überzeugend und wirkungsvoll ist der Text insgesamt? Dazu gehören Gesamteindruck und Wirkung, kein neuer Stoff. Achtung: Der Titel steht in der Einleitung, neue Argumente des Schreibers sind eine Falle, und jeder Satz einzeln zusammenzufassen ist keine Analyse.\n- [Übungsaufgaben 2, 2.3b Wiedergeben und belegen] Welcher Satz belegt die Aussage korrekt? Auswahl: Die Autorin kritisiert: Die Pause ist viel zu kurz, Z. 2. | Die Autorin sagt, dass die Pause zu kurz ist (Z. 2 vielleicht). | Die Pause ist viel zu kurz (Autorin). | Die Autorin kritisiert, die Pause sei zu kurz („Die Pause ist viel zu kurz“, Z. 2).\n  Ergebnis: Die Autorin kritisiert, die Pause sei zu kurz („Die Pause ist viel zu kurz“, Z. 2).\n  Weg: Ein Beleg verbindet indirekte Wiedergabe, ein wörtliches Zitat in Anführungszeichen und die Zeilenangabe in Klammern. Der erste Satz hat Redeeinleitung („kritisiert“), Konjunktiv („sei“), Zitat und „Z. 2“. Achtung: Die zweite Variante mischt Doppelpunkt und Zeilenangabe ohne Klammern; vage Angaben wie „vielleicht“ belegen nichts.",
  "aufgaben": {
   "Welche Textsorte informiert sachlich über ein Ereignis (Wer? Was? Wann? Wo?)?": {
    "teil": "2.1a",
    "typ": "wahl",
    "ergebnis": "Bericht",
    "optionen": [
     "Bericht",
     "Kommentar",
     "Glosse",
     "Rede"
    ]
   },
   "Was ist ein Sinnabschnitt?": {
    "teil": "2.1b",
    "typ": "wahl",
    "ergebnis": "Ein Teil des Textes, in dem es um denselben Gedanken geht",
    "optionen": [
     "Der letzte Absatz",
     "Ein Teil des Textes, in dem es um denselben Gedanken geht",
     "Jeder einzelne Satz",
     "Die Überschrift"
    ]
   },
   "Was ist die These eines Textes?": {
    "teil": "2.2a",
    "typ": "wahl",
    "ergebnis": "Die Hauptbehauptung, die der Autor vertritt",
    "optionen": [
     "Eine Zahl als Beleg",
     "Der Titel",
     "Die Hauptbehauptung, die der Autor vertritt",
     "Ein Beispiel aus dem Alltag"
    ]
   },
   "Was bewirkt eine rhetorische Frage meistens?": {
    "teil": "2.2b",
    "typ": "wahl",
    "ergebnis": "Der Leser soll zustimmen oder nachdenken",
    "optionen": [
     "Der Leser soll eine Antwort schreiben",
     "Der Text wird sachlicher",
     "Der Text wird kürzer",
     "Der Leser soll zustimmen oder nachdenken"
    ]
   },
   "Welche Angabe gehört NICHT in den Einleitungssatz einer Analyse?": {
    "teil": "2.3a",
    "typ": "wahl",
    "ergebnis": "Die eigene Meinung zum Text",
    "optionen": [
     "Die eigene Meinung zum Text",
     "Der Titel",
     "Der Autor",
     "Die Textsorte"
    ]
   },
   "Wie gibst du die Aussage des Autors in einer Analyse wieder?": {
    "teil": "2.3b",
    "typ": "wahl",
    "ergebnis": "Indirekt, im Präsens und mit Redeeinleitung",
    "optionen": [
     "Gar nicht, nur zitieren",
     "Indirekt, im Präsens und mit Redeeinleitung",
     "Direkt, im Perfekt, ohne Einleitung",
     "Als Ich-Erzählung"
    ]
   },
   "„Ich finde: Hausaufgaben am Wochenende sind unfair und sollten abgeschafft werden.“ Welche Textsorte passt?": {
    "teil": "2.1a",
    "typ": "wahl",
    "ergebnis": "Kommentar",
    "optionen": [
     "Rede",
     "Glosse",
     "Kommentar",
     "Bericht"
    ]
   },
   "Ein Text hat vier Absätze: Problem, zwei Ursachen, Lösungsvorschlag. Was ist die beste Kernaussage?": {
    "teil": "2.1b",
    "typ": "wahl",
    "ergebnis": "Der Text beschreibt ein Problem, nennt Ursachen und schlägt eine Lösung vor.",
    "optionen": [
     "Der Text hat vier Absätze.",
     "Der Text handelt von Problemen.",
     "Der Text ist lang.",
     "Der Text beschreibt ein Problem, nennt Ursachen und schlägt eine Lösung vor."
    ]
   },
   "„Jugendliche brauchen mehr Schlaf, weil ihre innere Uhr später tickt.“ Was ist das?": {
    "teil": "2.2a",
    "typ": "wahl",
    "ergebnis": "Ein Argument",
    "optionen": [
     "Ein Argument",
     "Eine These",
     "Ein Beispiel",
     "Eine rhetorische Frage"
    ]
   },
   "„Wir brauchen Mut, wir brauchen Zeit, wir brauchen euch!“ Welches sprachliche Mittel ist das?": {
    "teil": "2.2b",
    "typ": "wahl",
    "ergebnis": "Wiederholung (Anapher)",
    "optionen": [
     "Fachbegriff",
     "Wiederholung (Anapher)",
     "Rhetorische Frage",
     "Vergleich"
    ]
   },
   "Welcher Einleitungssatz ist am besten?": {
    "teil": "2.3a",
    "typ": "wahl",
    "ergebnis": "In dem Kommentar „Mensa muss billiger werden“ von Nele Arndt, erschienen am 8.11.2025 in der „Schulpost“, geht es um die Preise in der Mensa.",
    "optionen": [
     "Der Text ist von Nele und handelt vom Essen.",
     "In der Schulpost steht etwas.",
     "In dem Kommentar „Mensa muss billiger werden“ von Nele Arndt, erschienen am 8.11.2025 in der „Schulpost“, geht es um die Preise in der Mensa.",
     "Ich finde die Mensa zu teuer, das schreibt auch Nele."
    ]
   },
   "Welche Zeilenangabe ist richtig, wenn ein Zitat von Zeile 3 bis in Zeile 4 reicht?": {
    "teil": "2.3b",
    "typ": "wahl",
    "ergebnis": "Z. 3f.",
    "optionen": [
     "Z. 3-4 Zeilen",
     "Zeile (3)",
     "S. 3f",
     "Z. 3f."
    ]
   },
   "Ein kurzer Text kritisiert ironisch und überspitzt einen Missstand an der Schule. Welche Textsorte ist das?": {
    "teil": "2.1a",
    "typ": "wahl",
    "ergebnis": "Glosse",
    "optionen": [
     "Glosse",
     "Bericht",
     "Kommentar",
     "Rede"
    ]
   },
   "Woran erkennst du oft einen neuen Sinnabschnitt?": {
    "teil": "2.1b",
    "typ": "wahl",
    "ergebnis": "Das Thema oder der Gedanke wechselt",
    "optionen": [
     "Ein Wort wird wiederholt",
     "Das Thema oder der Gedanke wechselt",
     "Ein Satz ist sehr lang",
     "Es steht ein Komma"
    ]
   },
   "Der Autor schreibt: „Bei unserer Umfrage stimmten 80 % der Klasse zu.“ Was ist das?": {
    "teil": "2.2a",
    "typ": "wahl",
    "ergebnis": "Ein Beleg",
    "optionen": [
     "Eine Meinung ohne Begründung",
     "Ein Stilmittel",
     "Ein Beleg",
     "Die These"
    ]
   },
   "„Das ist die absolute Katastrophe für alle Schüler der Welt!“ Welches Mittel liegt vor?": {
    "teil": "2.2b",
    "typ": "wahl",
    "ergebnis": "Übertreibung",
    "optionen": [
     "Aufzählung",
     "Rhetorische Frage",
     "Fachwort",
     "Übertreibung"
    ]
   },
   "In welcher Reihenfolge ist eine Analyse aufgebaut?": {
    "teil": "2.3a",
    "typ": "wahl",
    "ergebnis": "Einleitung, Hauptteil, Schluss",
    "optionen": [
     "Einleitung, Hauptteil, Schluss",
     "Hauptteil, Einleitung, Schluss",
     "Schluss, Hauptteil, Einleitung",
     "Hauptteil, Schluss"
    ]
   },
   "Welche Wiedergabe ist indirekt?": {
    "teil": "2.3b",
    "typ": "wahl",
    "ergebnis": "Der Autor fordert, die Schule solle später beginnen.",
    "optionen": [
     "Die Schule soll später beginnen!",
     "Der Autor fordert, die Schule solle später beginnen.",
     "Der Autor sagt: „Die Schule soll später beginnen.“",
     "Ich fordere: Die Schule soll später beginnen."
    ]
   },
   "Eine Schulleiterin spricht bei der Abschlussfeier: „Liebe Schülerinnen und Schüler, gemeinsam haben wir viel erreicht!“ Welche Textsorte ist das?": {
    "teil": "2.1a",
    "typ": "wahl",
    "ergebnis": "Rede",
    "optionen": [
     "Glosse",
     "Kommentar",
     "Rede",
     "Bericht"
    ]
   },
   "Welcher Satz fasst einen Text über Handyverbot an der Schule am besten zusammen?": {
    "teil": "2.1b",
    "typ": "wahl",
    "ergebnis": "Der Text handelt vom Handyverbot und sagt, dass eine Handyzone besser wäre.",
    "optionen": [
     "Der Text handelt vom Handy.",
     "Der Autor mag keine Verbote.",
     "Der Text hat drei Absätze.",
     "Der Text handelt vom Handyverbot und sagt, dass eine Handyzone besser wäre."
    ]
   },
   "„Der Schulhof sollte grüner werden. Zum Beispiel haben Pflanzen in der 9b für weniger Streit gesorgt.“ Welcher Teil ist der Beleg?": {
    "teil": "2.2a",
    "typ": "wahl",
    "ergebnis": "Der zweite Satz",
    "optionen": [
     "Der zweite Satz",
     "Der erste Satz",
     "Beide Sätze",
     "Keiner"
    ]
   },
   "Welche Wirkung hat das wertende Adjektiv in „diese unsinnige Regel“?": {
    "teil": "2.2b",
    "typ": "wahl",
    "ergebnis": "Es lenkt den Leser zu einer negativen Meinung",
    "optionen": [
     "Es macht den Satz kürzer",
     "Es lenkt den Leser zu einer negativen Meinung",
     "Es informiert neutral",
     "Es erklärt die Regel"
    ]
   },
   "Was gehört in den Schluss einer Sachtext-Analyse?": {
    "teil": "2.3a",
    "typ": "wahl",
    "ergebnis": "Gesamteindruck und Wirkung des Textes",
    "optionen": [
     "Eine Zusammenfassung jedes Satzes",
     "Neue Argumente des Schreibers",
     "Gesamteindruck und Wirkung des Textes",
     "Der Titel des Textes"
    ]
   },
   "Welcher Satz belegt die Aussage korrekt?": {
    "teil": "2.3b",
    "typ": "wahl",
    "ergebnis": "Die Autorin kritisiert, die Pause sei zu kurz („Die Pause ist viel zu kurz“, Z. 2).",
    "optionen": [
     "Die Autorin kritisiert: Die Pause ist viel zu kurz, Z. 2.",
     "Die Autorin sagt, dass die Pause zu kurz ist (Z. 2 vielleicht).",
     "Die Pause ist viel zu kurz (Autorin).",
     "Die Autorin kritisiert, die Pause sei zu kurz („Die Pause ist viel zu kurz“, Z. 2)."
    ]
   },
   "Welche Aussage über Bericht und Kommentar stimmt?": {
    "teil": "2.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Welche Überschrift passt am besten zu einem Abschnitt, in dem der Autor das Handyverbot kritisiert?": {
    "teil": "2.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Welche Reihenfolge beschreibt eine vollständige Argumentation?": {
    "teil": "2.2a",
    "typ": "wahl",
    "klausur": true
   },
   "Ein Schüler markiert „In der ersten Stunde gähnen viele“ als These. Was ist richtig?": {
    "teil": "2.2a",
    "typ": "wahl",
    "klausur": true
   },
   "Welche Analyse eines sprachlichen Mittels ist vollständig?": {
    "teil": "2.2b",
    "typ": "wahl",
    "klausur": true
   },
   "Welcher Fehler steckt in diesem Einleitungssatz: „Ich finde den Kommentar von Tom Weber super.“?": {
    "teil": "2.3a",
    "typ": "wahl",
    "klausur": true
   },
   "Wie lautet die richtige indirekte Wiedergabe von „Wir sind müde“ (Konjunktiv I)?": {
    "teil": "2.3b",
    "typ": "wahl",
    "klausur": true
   },
   "Warum setzt man bei einem wörtlichen Zitat Anführungszeichen und eine Zeilenangabe?": {
    "teil": "2.3b",
    "typ": "wahl",
    "klausur": true
   }
  }
 },
 "d10-3-lyrik": {
  "titel": "Lyrik",
  "fach": "deutsch",
  "klasse": 10,
  "teile": {
   "3.1a": "Das Reimschema",
   "3.1b": "Das Metrum",
   "3.2a": "Bilder in Gedichten",
   "3.2b": "Klang und Satzbau",
   "3.3a": "Wer spricht im Gedicht?",
   "3.3b": "Eine Analyse schreiben"
  },
  "text": "# Lyrik (Deutsch, Klasse 10)\n\n## Merkkästen der Arbeitsblätter\n### 3.1a Das Reimschema\nEin Gedicht besteht aus Versen (= Zeilen). Mehrere Verse bilden eine Strophe (= Abschnitt).\nDas Muster der Reime heißt Reimschema: Paarreim aabb · Kreuzreim abab · umarmender Reim abba\n1 Letzte Wörter: Haus, Wald, Maus, kalt\n2 Gleicher Klang = gleicher Buchstabe: a b a b\n3 Name: Kreuzreim\n\n### 3.1b Das Metrum\nDas Metrum (Versmaß) ist das Muster aus betonten (X) und unbetonten (x) Silben.\nJambus x X (ge-DICHT) · Trochäus X x (HIM-mel) · Daktylus X x x (KÖ-ni-gin)\n1 Vers laut sprechen und klopfen\n2 Betonte Silben markieren\n3 Muster ablesen\n\n### 3.2a Bilder in Gedichten\nBilder machen Gedichte anschaulich. Vergleich mit „wie“ oder „als“: stark wie ein Löwe · Metapher ohne „wie“: Er ist ein Löwe. · Personifikation: Dinge handeln wie Menschen: Der Wind flüstert.\n1 Wörtlich gemeint? Nein → es ist ein Bild\n2 Steht „wie“ oder „als“ da? Ja → Vergleich, sonst Metapher\n3 Tut ein Ding etwas Menschliches? → Personifikation\n\n### 3.2b Klang und Satzbau\nAlliteration: Wörter beginnen mit dem gleichen Laut: Milch macht müde Männer munter. · Anapher: Mehrere Verse beginnen mit denselben Wörtern. · Enjambement (Zeilensprung): Der Satz läuft über das Zeilenende hinaus weiter.\n1 Anfangslaute vergleichen: gleich?\n2 Zeilenanfänge vergleichen: gleich?\n3 Zeilenende: Satz noch offen?\n\n### 3.3a Wer spricht im Gedicht?\nDas lyrische Ich ist die Sprecherin oder der Sprecher im Gedicht – nicht die Dichterin oder der Dichter. Die Deutungshypothese ist deine Vermutung, worum es im Gedicht eigentlich geht.\n1 Wer spricht? Wie fühlt es sich?\n2 Auffällige Wörter und Bilder sammeln\n3 Ein Satz: „Das Gedicht zeigt, dass …“\n\n### 3.3b Eine Analyse schreiben\nEine Gedichtanalyse hat drei Teile: Einleitung (Titel, Autor, Thema, Hypothese) · Hauptteil (Inhalt, Form, Sprache) · Schluss (Fazit). Im Hauptteil verknüpfst du Form und Inhalt:\n1 Mittel nennen: Die Anapher „Wer jetzt …“\n2 Beleg mit Zeile: (Z. 1–2)\n3 Wirkung: betont die Einsamkeit.\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 3.1a Das Reimschema] Die Verse eines Gedichts reimen sich im Muster a b a b. Wie heißt dieses Reimschema? Auswahl: Paarreim | Kreuzreim | Umarmender Reim | Schweifreim\n  Ergebnis: Kreuzreim\n  Weg: Das Reimschema beschreibt, welche Versenden sich reimen. Bei a b a b reimen Vers 1 und 3 sowie Vers 2 und 4 über Kreuz – das ist der Kreuzreim. Die Buchstaben zeigen es: gleiche Buchstaben = gleicher Reim, und sie wechseln sich ab. Achtung: Paarreim wäre a a b b (Reime direkt nebeneinander), umarmender Reim a b b a.\n- [Einstiegsquiz, 3.1b Das Metrum] Ein Vers hat das Betonungsmuster x X x X x X (x = unbetont, X = betont). Welches Metrum ist das? Auswahl: Trochäus | Daktylus | Jambus | Anapäst\n  Ergebnis: Jambus\n  Weg: Das Metrum ist das Muster aus betonten (X) und unbetonten (x) Silben. Der Jambus ist x X: erst unbetont, dann betont. Das Muster x X x X x X wiederholt genau das. Achtung: Der Trochäus wäre X x (mit der betonten Silbe zuerst), also umgekehrt.\n- [Einstiegsquiz, 3.2a Bilder in Gedichten] Welches sprachliche Bild steckt in dem Satz „Die Sonne lacht“? Auswahl: Vergleich | Personifikation | Alliteration | Reim\n  Ergebnis: Personifikation\n  Weg: Eine Personifikation gibt Dingen, Tieren oder Naturerscheinungen menschliche Eigenschaften oder Handlungen. Die Sonne „lacht“ – lachen können aber nur Menschen. Achtung: Ein Vergleich hätte ein „wie“ (die Sonne strahlt wie ein Lachen).\n- [Einstiegsquiz, 3.2b Klang und Satzbau] Was ist ein Enjambement (Zeilensprung)? Auswahl: Zwei Verse reimen sich | Mehrere Verse beginnen mit denselben Wörtern | Ein Satz läuft über das Zeilenende hinaus weiter | Zwei Wörter beginnen mit dem gleichen Laut\n  Ergebnis: Ein Satz läuft über das Zeilenende hinaus weiter\n  Weg: Ein Enjambement (Zeilensprung) liegt vor, wenn ein Satz über das Zeilenende hinausläuft und erst im nächsten Vers endet. Am Versende fehlt also Satzzeichen und Sinnabschluss. Achtung: Reim, Anapher und Alliteration sind andere Mittel (Klang bzw. Wiederholung), sie betreffen nicht das Satzende.\n- [Einstiegsquiz, 3.3a Wer spricht im Gedicht?] Wer spricht in einem Gedicht? Auswahl: Immer die Dichterin oder der Dichter | Das lyrische Ich | Der Leser | Das Reimschema\n  Ergebnis: Das lyrische Ich\n  Weg: Das lyrische Ich ist die Sprecherin oder der Sprecher im Gedicht – eine Rolle, die der Dichter erfindet. Sie muss nicht mit seiner eigenen Meinung übereinstimmen. Achtung: Wer „immer der Dichter“ sagt, setzt beide gleich – das ist der häufigste Fehler.\n- [Einstiegsquiz, 3.3b Eine Analyse schreiben] Aus welchen drei Teilen besteht eine Gedichtanalyse? Auswahl: Einleitung – Hauptteil – Schluss | Strophe – Vers – Reim | These – Argument – Beispiel | Frage – Antwort – Zitat\n  Ergebnis: Einleitung – Hauptteil – Schluss\n  Weg: Auch die Gedichtanalyse hat den üblichen Aufsatzaufbau: Einleitung (Titel, Autor, Thema), Hauptteil (Form, Sprache, Inhalt) und Schluss (Fazit). So bleibt sie übersichtlich. Achtung: „These – Argument – Beispiel“ ist der Aufbau einer Erörterung, nicht einer Analyse.\n- [Übungsaufgaben 1, 3.1a Das Reimschema] Die erste Strophe von Claudius' „Abendlied“ endet auf: aufgegangen – prangen – klar – schweiget – steiget – wunderbar. Welches Reimschema hat sie? Auswahl: a a b b c c | a b a b a b | a a b c c b | a b b a a b\n  Ergebnis: a a b c c b\n  Weg: Man bestimmt das Schema, indem man jedem neuen Reim einen neuen Buchstaben gibt: aufgegangen/prangen = a, klar = b, schweiget/steiget = c. Das letzte Reimwort „wunderbar“ reimt auf „klar“, also wieder b. Ergebnis: a a b c c b (Schweifreim). Achtung: a a b b c c wäre Paarreim – hier reimt aber klar mit wunderbar über zwei Verse hinweg.\n- [Übungsaufgaben 1, 3.1b Das Metrum] „Sah ein Knab' ein Röslein stehn“ (Goethe). Welches Metrum hat der Vers? Auswahl: Jambus | Trochäus | Daktylus | Es gibt kein Metrum\n  Ergebnis: Trochäus\n  Weg: Zur Bestimmung markiert man die betonten Silben: SAH ein KNAB ein RÖS-lein STEHN. Das Muster beginnt mit einer betonten Silbe (X x X x X x X) – das ist ein Trochäus. Achtung: Beim Jambus fängt die Zeile mit einer unbetonten Silbe an; Daktylus hätte zwei unbetonte Silben nach der Betonung.\n- [Übungsaufgaben 1, 3.2a Bilder in Gedichten] „Und meine Seele spannte weit ihre Flügel aus“ (Eichendorff). Welches Bild ist das? Auswahl: Metapher | Vergleich | Alliteration | Enjambement\n  Ergebnis: Metapher\n  Weg: Eine Metapher ist ein Bild ohne „wie“: Zwei Dinge werden gleichgesetzt. Hier hat die Seele „Flügel“ und breitet sie aus wie ein Vogel, ohne dass „wie“ steht. Achtung: Ein Vergleich würde mit „wie“ arbeiten („meine Seele war wie ein Vogel“).\n- [Übungsaufgaben 1, 3.2b Klang und Satzbau] In Rilkes „Herbsttag“ beginnen zwei Verse mit „Wer jetzt …“. Wie heißt dieses Mittel? Auswahl: Alliteration | Enjambement | Anapher | Metapher\n  Ergebnis: Anapher\n  Weg: Eine Anapher ist die Wiederholung desselben Wortes oder derselben Wörter am Anfang aufeinanderfolgender Verse oder Sätze. Hier beginnen zwei Verse mit „Wer jetzt …“. Achtung: Alliteration wiederholt nur den Anfangsbuchstaben innerhalb von Wörtern, nicht ganze Wörter.\n- [Übungsaufgaben 1, 3.3a Wer spricht im Gedicht?] Ein Schüler schreibt: „Goethe sitzt müde im Wald und wartet auf den Tod.“ Was ist der Fehler? Auswahl: Er schreibt zu viel | Er verwechselt Dichter und lyrisches Ich | Er benutzt keine Zitate | Es gibt keinen Fehler\n  Ergebnis: Er verwechselt Dichter und lyrisches Ich\n  Weg: Das lyrische Ich ist die Sprecherrolle im Gedicht. Man weiß nicht, ob der Dichter selbst so fühlt. Deshalb schreibt man „das lyrische Ich wartet“ statt „Goethe sitzt“. Achtung: Das Fehlen von Zitaten oder zu viel Text wären andere Fehler; hier geht es um die Gleichsetzung.\n- [Übungsaufgaben 1, 3.3b Eine Analyse schreiben] Was gehört in die Einleitung einer Gedichtanalyse? Auswahl: Titel, Autor, Thema und Deutungshypothese | Eine Zeile-für-Zeile-Nacherzählung | Die eigene Meinung zum Dichter | Alle Stilmittel mit Zitaten\n  Ergebnis: Titel, Autor, Thema und Deutungshypothese\n  Weg: Die Einleitung gibt den Überblick: Titel, Autor, Thema und eine erste Vermutung (Deutungshypothese). Alle Einzelheiten, z. B. Stilmittel mit Zitaten, folgen erst im Hauptteil. Achtung: Nacherzählung und eigene Meinung zum Dichter gehören nicht in die Analyse.\n- [Abschlussquiz, 3.1a Das Reimschema] Welche Reimwörter ergeben einen Paarreim (a a b b)? Auswahl: Haus – Wald – Maus – kalt | Sonne – Wonne – Mond – wohnt | Tag – Nacht – Schlag – Macht | Licht – Wind – Kind – Gesicht\n  Ergebnis: Sonne – Wonne – Mond – wohnt\n  Weg: Beim Paarreim reimen sich zwei Verse direkt nacheinander (a a b b). Sonne/Wonne reimen sich, dann Mond/wohnt – jeweils nebeneinander. Achtung: Haus – Wald – Maus – kalt ist abab (Kreuzreim), Licht – Wind – Kind – Gesicht ist abba (umarmend).\n- [Abschlussquiz, 3.1b Das Metrum] „Es schlug mein Herz, geschwind zu Pferde“ (Goethe). Welches Metrum hat der Vers? Auswahl: Jambus | Trochäus | Daktylus | Anapäst\n  Ergebnis: Jambus\n  Weg: Man markiert die betonten Silben: es SCHLUG mein HERZ ge-SCHWIND zu PFER-de. Es beginnt mit einer unbetonten Silbe und wechselt dann ab (x X x X …) – das ist ein Jambus. Achtung: Wegen des betonten „SCHLUG“ wirkt der Anfang trochäisch; „es“ ist aber ein unbetonter Auftakt, der das Muster zum Jambus macht.\n- [Abschlussquiz, 3.2a Bilder in Gedichten] „Sie tanzt wie eine Feder im Wind.“ Welches Bild ist das? Auswahl: Metapher | Personifikation | Vergleich | Anapher\n  Ergebnis: Vergleich\n  Weg: Ein Vergleich verbindet zwei Dinge mit „wie“ oder „als ob“. „Sie tanzt wie eine Feder“: Das „wie“ ist das Signalwort. Achtung: Ohne „wie“ wäre es eine Metapher („Sie ist eine Feder im Wind“); Personifikation hätte ein Ding mit menschlichem Handeln.\n- [Abschlussquiz, 3.2b Klang und Satzbau] Welcher Satz enthält eine Alliteration? Auswahl: Der Hund schläft im Garten. | Kleine Kinder kichern kaum. | Sie geht nach Hause. | Der See liegt still.\n  Ergebnis: Kleine Kinder kichern kaum.\n  Weg: Eine Alliteration ist die Wiederholung desselben Anfangslautes bei Wörtern, die nah beieinander stehen. Kleine, Kinder, kichern, kaum beginnen alle mit K. Achtung: Im Satz „Sie geht nach Hause“ sind die Anfangslaute verschieden.\n- [Abschlussquiz, 3.3a Wer spricht im Gedicht?] Welcher Satz ist eine Deutungshypothese zu „Wandrers Nachtlied“ („Über allen Gipfeln ist Ruh“)? Auswahl: Das Gedicht hat acht Verse. | Das Gedicht handelt vom Wald und von Vögeln. | Das Gedicht zeigt, dass das lyrische Ich die Stille der Natur auf sich überträgt und selbst Ruhe erwartet. | Goethe schrieb das Gedicht in Ilmenau.\n  Ergebnis: Das Gedicht zeigt, dass das lyrische Ich die Stille der Natur auf sich überträgt und selbst Ruhe erwartet.\n  Weg: Eine Deutungshypothese ist eine begründete Vermutung über die Aussage des Gedichts („zeigt, dass …“). Der dritte Satz deutet die Stille als Übertragung auf das lyrische Ich. Achtung: Die anderen nennen nur Form (acht Verse), Inhalt (Wald, Vögel) oder Entstehung – nichts davon deutet.\n- [Abschlussquiz, 3.3b Eine Analyse schreiben] Welcher Satz verknüpft Form und Wirkung richtig? Auswahl: Es gibt eine Anapher. | Die Anapher „Wer jetzt …“ (Z. 1–2) betont die Einsamkeit des lyrischen Ichs. | Der Dichter mag Anaphern. | Die Zeilen 1 und 2 sind sehr lang.\n  Ergebnis: Die Anapher „Wer jetzt …“ (Z. 1–2) betont die Einsamkeit des lyrischen Ichs.\n  Weg: Eine gute Analyse nennt das Mittel, belegt es mit Zeilenangabe und erklärt die Wirkung. Der zweite Satz hat alle drei: Anapher, „Wer jetzt …“ (Z. 1–2) und die betonte Einsamkeit. Achtung: „Es gibt eine Anapher“ nennt nur das Mittel – ohne Beleg und Wirkung.\n- [Übungsaufgaben 2, 3.1a Das Reimschema] Ein Gedicht hat die Reimwörter Licht – Wind – Kind – Gesicht. Welches Schema hat es? Auswahl: a b a b | a a b b | a b b a | a b c d\n  Ergebnis: a b b a\n  Weg: Reimschema bestimmen: jedem neuen Reim einen Buchstaben geben. Licht/Gesicht = a, Wind/Kind = b. Die a-Reime stehen außen und umarmen die b-Reime innen: a b b a (umarmender Reim). Achtung: a b a b wäre Kreuzreim (die Reime wechseln), a a b b Paarreim.\n- [Übungsaufgaben 2, 3.1b Das Metrum] Ein Vers hat das Betonungsmuster X x x X x x X x x. Welches Metrum ist das? Auswahl: Jambus | Trochäus | Daktylus | Es ist kein Metrum\n  Ergebnis: Daktylus\n  Weg: Der Daktylus ist das Muster X x x: eine betonte Silbe, dann zwei unbetonte. Das wiederholt sich im Beispiel dreimal (X x x X x x X x x). Achtung: Der Trochäus hätte nur eine unbetonte Silbe nach der Betonung (X x).\n- [Übungsaufgaben 2, 3.2a Bilder in Gedichten] „Die Laternen blinzeln müde in die Nacht.“ Welches Mittel ist das? Auswahl: Vergleich | Metapher | Anapher | Personifikation\n  Ergebnis: Personifikation\n  Weg: Eine Personifikation überträgt menschliche Eigenschaften auf Dinge. Laternen „blinzeln“ und sind „müde“ – beides tun nur Lebewesen. Achtung: Eine Metapher setzt zwei Dinge gleich, hier handeln die Laternen aber wie Menschen.\n- [Übungsaufgaben 2, 3.2b Klang und Satzbau] In Storms „Über die Heide hallet mein Schritt“ steckt eine Alliteration. Welche Wörter? Auswahl: Über – Heide | Heide – hallet | mein – Schritt | Über – Schritt\n  Ergebnis: Heide – hallet\n  Weg: Bei einer Alliteration beginnen aufeinanderfolgende Wörter mit demselben Laut. Heide und hallet beginnen beide mit H. Achtung: „Über“ beginnt mit einem Vokal (Ü), „mein“ und „Schritt“ haben verschiedene Anfangslaute.\n- [Übungsaufgaben 2, 3.3a Wer spricht im Gedicht?] Du sollst das lyrische Ich beschreiben. Welche Frage hilft dir NICHT weiter? Auswahl: Wie fühlt sich das lyrische Ich? | Wen spricht es an? | Wann wurde der Dichter geboren? | Welche Wörter zeigen die Stimmung?\n  Ergebnis: Wann wurde der Dichter geboren?\n  Weg: Das lyrische Ich beschreibt man über Gefühle, Anrede und Wortwahl – also über Aussagen im Gedicht. Biografische Daten des Dichters gehören nicht dazu. Achtung: Das lyrische Ich ist eine Sprecherrolle, nicht die reale Person.\n- [Übungsaufgaben 2, 3.3b Eine Analyse schreiben] Wie belegst du eine Aussage über die Verse 3 und 4 richtig? Auswahl: Mit dem Zitat und der Angabe (Z. 3–4) | Gar nicht, das Gedicht ist bekannt | Mit „irgendwo im Gedicht“ | Mit Seitenzahlen des Buches\n  Ergebnis: Mit dem Zitat und der Angabe (Z. 3–4)\n  Weg: Ein Beleg besteht aus wörtlichem Zitat in Anführungszeichen und Zeilenangabe in Klammern, z. B. (Z. 3–4). So kann der Leser jede Aussage am Gedicht überprüfen. Achtung: „Irgendwo“ oder Buchseiten sind zu ungenau, weil dasselbe Gedicht in verschiedenen Büchern anders gesetzt sein kann.",
  "aufgaben": {
   "Die Verse eines Gedichts reimen sich im Muster a b a b. Wie heißt dieses Reimschema?": {
    "teil": "3.1a",
    "typ": "wahl",
    "ergebnis": "Kreuzreim",
    "optionen": [
     "Paarreim",
     "Kreuzreim",
     "Umarmender Reim",
     "Schweifreim"
    ]
   },
   "Ein Vers hat das Betonungsmuster x X x X x X (x = unbetont, X = betont). Welches Metrum ist das?": {
    "teil": "3.1b",
    "typ": "wahl",
    "ergebnis": "Jambus",
    "optionen": [
     "Trochäus",
     "Daktylus",
     "Jambus",
     "Anapäst"
    ]
   },
   "Welches sprachliche Bild steckt in dem Satz „Die Sonne lacht“?": {
    "teil": "3.2a",
    "typ": "wahl",
    "ergebnis": "Personifikation",
    "optionen": [
     "Vergleich",
     "Personifikation",
     "Alliteration",
     "Reim"
    ]
   },
   "Was ist ein Enjambement (Zeilensprung)?": {
    "teil": "3.2b",
    "typ": "wahl",
    "ergebnis": "Ein Satz läuft über das Zeilenende hinaus weiter",
    "optionen": [
     "Zwei Verse reimen sich",
     "Mehrere Verse beginnen mit denselben Wörtern",
     "Ein Satz läuft über das Zeilenende hinaus weiter",
     "Zwei Wörter beginnen mit dem gleichen Laut"
    ]
   },
   "Wer spricht in einem Gedicht?": {
    "teil": "3.3a",
    "typ": "wahl",
    "ergebnis": "Das lyrische Ich",
    "optionen": [
     "Immer die Dichterin oder der Dichter",
     "Das lyrische Ich",
     "Der Leser",
     "Das Reimschema"
    ]
   },
   "Aus welchen drei Teilen besteht eine Gedichtanalyse?": {
    "teil": "3.3b",
    "typ": "wahl",
    "ergebnis": "Einleitung – Hauptteil – Schluss",
    "optionen": [
     "Einleitung – Hauptteil – Schluss",
     "Strophe – Vers – Reim",
     "These – Argument – Beispiel",
     "Frage – Antwort – Zitat"
    ]
   },
   "Die erste Strophe von Claudius' „Abendlied“ endet auf: aufgegangen – prangen – klar – schweiget – steiget – wunderbar. Welches Reimschema hat sie?": {
    "teil": "3.1a",
    "typ": "wahl",
    "ergebnis": "a a b c c b",
    "optionen": [
     "a a b b c c",
     "a b a b a b",
     "a a b c c b",
     "a b b a a b"
    ]
   },
   "„Sah ein Knab' ein Röslein stehn“ (Goethe). Welches Metrum hat der Vers?": {
    "teil": "3.1b",
    "typ": "wahl",
    "ergebnis": "Trochäus",
    "optionen": [
     "Jambus",
     "Trochäus",
     "Daktylus",
     "Es gibt kein Metrum"
    ]
   },
   "„Und meine Seele spannte weit ihre Flügel aus“ (Eichendorff). Welches Bild ist das?": {
    "teil": "3.2a",
    "typ": "wahl",
    "ergebnis": "Metapher",
    "optionen": [
     "Metapher",
     "Vergleich",
     "Alliteration",
     "Enjambement"
    ]
   },
   "In Rilkes „Herbsttag“ beginnen zwei Verse mit „Wer jetzt …“. Wie heißt dieses Mittel?": {
    "teil": "3.2b",
    "typ": "wahl",
    "ergebnis": "Anapher",
    "optionen": [
     "Alliteration",
     "Enjambement",
     "Anapher",
     "Metapher"
    ]
   },
   "Ein Schüler schreibt: „Goethe sitzt müde im Wald und wartet auf den Tod.“ Was ist der Fehler?": {
    "teil": "3.3a",
    "typ": "wahl",
    "ergebnis": "Er verwechselt Dichter und lyrisches Ich",
    "optionen": [
     "Er schreibt zu viel",
     "Er verwechselt Dichter und lyrisches Ich",
     "Er benutzt keine Zitate",
     "Es gibt keinen Fehler"
    ]
   },
   "Was gehört in die Einleitung einer Gedichtanalyse?": {
    "teil": "3.3b",
    "typ": "wahl",
    "ergebnis": "Titel, Autor, Thema und Deutungshypothese",
    "optionen": [
     "Titel, Autor, Thema und Deutungshypothese",
     "Eine Zeile-für-Zeile-Nacherzählung",
     "Die eigene Meinung zum Dichter",
     "Alle Stilmittel mit Zitaten"
    ]
   },
   "Welche Reimwörter ergeben einen Paarreim (a a b b)?": {
    "teil": "3.1a",
    "typ": "wahl",
    "ergebnis": "Sonne – Wonne – Mond – wohnt",
    "optionen": [
     "Haus – Wald – Maus – kalt",
     "Sonne – Wonne – Mond – wohnt",
     "Tag – Nacht – Schlag – Macht",
     "Licht – Wind – Kind – Gesicht"
    ]
   },
   "„Es schlug mein Herz, geschwind zu Pferde“ (Goethe). Welches Metrum hat der Vers?": {
    "teil": "3.1b",
    "typ": "wahl",
    "ergebnis": "Jambus",
    "optionen": [
     "Jambus",
     "Trochäus",
     "Daktylus",
     "Anapäst"
    ]
   },
   "„Sie tanzt wie eine Feder im Wind.“ Welches Bild ist das?": {
    "teil": "3.2a",
    "typ": "wahl",
    "ergebnis": "Vergleich",
    "optionen": [
     "Metapher",
     "Personifikation",
     "Vergleich",
     "Anapher"
    ]
   },
   "Welcher Satz enthält eine Alliteration?": {
    "teil": "3.2b",
    "typ": "wahl",
    "ergebnis": "Kleine Kinder kichern kaum.",
    "optionen": [
     "Der Hund schläft im Garten.",
     "Kleine Kinder kichern kaum.",
     "Sie geht nach Hause.",
     "Der See liegt still."
    ]
   },
   "Welcher Satz ist eine Deutungshypothese zu „Wandrers Nachtlied“ („Über allen Gipfeln ist Ruh“)?": {
    "teil": "3.3a",
    "typ": "wahl",
    "ergebnis": "Das Gedicht zeigt, dass das lyrische Ich die Stille der Natur auf sich überträgt und selbst Ruhe erwartet.",
    "optionen": [
     "Das Gedicht hat acht Verse.",
     "Das Gedicht handelt vom Wald und von Vögeln.",
     "Das Gedicht zeigt, dass das lyrische Ich die Stille der Natur auf sich überträgt und selbst Ruhe erwartet.",
     "Goethe schrieb das Gedicht in Ilmenau."
    ]
   },
   "Welcher Satz verknüpft Form und Wirkung richtig?": {
    "teil": "3.3b",
    "typ": "wahl",
    "ergebnis": "Die Anapher „Wer jetzt …“ (Z. 1–2) betont die Einsamkeit des lyrischen Ichs.",
    "optionen": [
     "Es gibt eine Anapher.",
     "Die Anapher „Wer jetzt …“ (Z. 1–2) betont die Einsamkeit des lyrischen Ichs.",
     "Der Dichter mag Anaphern.",
     "Die Zeilen 1 und 2 sind sehr lang."
    ]
   },
   "Ein Gedicht hat die Reimwörter Licht – Wind – Kind – Gesicht. Welches Schema hat es?": {
    "teil": "3.1a",
    "typ": "wahl",
    "ergebnis": "a b b a",
    "optionen": [
     "a b a b",
     "a a b b",
     "a b b a",
     "a b c d"
    ]
   },
   "Ein Vers hat das Betonungsmuster X x x X x x X x x. Welches Metrum ist das?": {
    "teil": "3.1b",
    "typ": "wahl",
    "ergebnis": "Daktylus",
    "optionen": [
     "Jambus",
     "Trochäus",
     "Daktylus",
     "Es ist kein Metrum"
    ]
   },
   "„Die Laternen blinzeln müde in die Nacht.“ Welches Mittel ist das?": {
    "teil": "3.2a",
    "typ": "wahl",
    "ergebnis": "Personifikation",
    "optionen": [
     "Vergleich",
     "Metapher",
     "Anapher",
     "Personifikation"
    ]
   },
   "In Storms „Über die Heide hallet mein Schritt“ steckt eine Alliteration. Welche Wörter?": {
    "teil": "3.2b",
    "typ": "wahl",
    "ergebnis": "Heide – hallet",
    "optionen": [
     "Über – Heide",
     "Heide – hallet",
     "mein – Schritt",
     "Über – Schritt"
    ]
   },
   "Du sollst das lyrische Ich beschreiben. Welche Frage hilft dir NICHT weiter?": {
    "teil": "3.3a",
    "typ": "wahl",
    "ergebnis": "Wann wurde der Dichter geboren?",
    "optionen": [
     "Wie fühlt sich das lyrische Ich?",
     "Wen spricht es an?",
     "Wann wurde der Dichter geboren?",
     "Welche Wörter zeigen die Stimmung?"
    ]
   },
   "Wie belegst du eine Aussage über die Verse 3 und 4 richtig?": {
    "teil": "3.3b",
    "typ": "wahl",
    "ergebnis": "Mit dem Zitat und der Angabe (Z. 3–4)",
    "optionen": [
     "Mit dem Zitat und der Angabe (Z. 3–4)",
     "Gar nicht, das Gedicht ist bekannt",
     "Mit „irgendwo im Gedicht“",
     "Mit Seitenzahlen des Buches"
    ]
   },
   "Schweifreim: Welches Schema hat er?": {
    "teil": "3.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Welches Wort hat das Muster X x (betont, unbetont)?": {
    "teil": "3.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Was unterscheidet eine Metapher von einem Vergleich?": {
    "teil": "3.2a",
    "typ": "wahl",
    "klausur": true
   },
   "Welche Wirkung hat ein Enjambement oft?": {
    "teil": "3.2b",
    "typ": "wahl",
    "klausur": true
   },
   "Welcher Anfang passt zu einer Deutungshypothese?": {
    "teil": "3.3a",
    "typ": "wahl",
    "klausur": true
   },
   "Was gehört in den Schluss einer Gedichtanalyse?": {
    "teil": "3.3b",
    "typ": "wahl",
    "klausur": true
   },
   "Ein Metrum zu bestimmen heißt:": {
    "teil": "3.1b",
    "typ": "wahl",
    "klausur": true
   },
   "„Heute tanzen wir, heute träumen wir, heute trauen wir uns.“ Welche Mittel stecken drin?": {
    "teil": "3.2b",
    "typ": "wahl",
    "klausur": true
   }
  }
 },
 "d10-4-erzaehltexte-drama": {
  "titel": "Erzähltexte und Drama",
  "fach": "deutsch",
  "klasse": 10,
  "teile": {
   "4.1a": "Erzählperspektive und Erzählverhalten",
   "4.1b": "Erzählzeit und erzählte Zeit",
   "4.1c": "Figuren charakterisieren",
   "4.2a": "Aufbau eines Dramas",
   "4.2b": "Szenenanalyse"
  },
  "text": "# Erzähltexte und Drama (Deutsch, Klasse 10)\n\n## Merkkästen der Arbeitsblätter\n### 4.1a Erzählperspektive und Erzählverhalten\nDer Erzähler ist nicht der Autor, sondern die Stimme, die die Geschichte erzählt.\nPerspektive: Ich-Erzähler („ich“) oder Er/Sie-Erzähler („Mia“, „sie“).\nErzählverhalten: auktorial · personal · neutral\n1 Wer erzählt: „ich“ oder „er/sie“?\n2 Wie viel weiß er? Alles und mehr als die Figur = auktorial; nur, was eine Figur denkt = personal; nur Außenansicht wie eine Kamera = neutral\n3 Beleg im Text unterstreichen\n\n### 4.1b Erzählzeit und erzählte Zeit\nErzählzeit = so lange brauchst du zum Lesen.\nErzählte Zeit = so lange dauert die Handlung.\n1 Zeitraffung: Erzählzeit < erzählte Zeit („Drei Jahre vergingen.“)\n2 Zeitdeckung: beide gleich lang (Dialog, Gespräch)\n3 Zeitdehnung: Erzählzeit > erzählte Zeit (ein Augenblick, ganz ausführlich)\n\n### 4.1c Figuren charakterisieren\nDirekt: Es wird gesagt, wie jemand ist („Er war geizig.“).\nIndirekt: Man erkennt es an Handeln, Sprechen, Gefühlen.\n1 Eigenschaft nennen: Max ist hilfsbereit.\n2 Stelle belegen: Er trägt der Nachbarin die Tasche (Z. 2).\n3 Erklären: Daran sieht man, dass er auf andere achtet.\n\n### 4.2a Aufbau eines Dramas\nEin Drama besteht aus Akten (große Abschnitte) und Szenen (Auftritte). Die Handlung steigt an, erreicht einen Höhepunkt und fällt ab (Freytag-Pyramide).\n1 Exposition: Figuren, Ort, Ausgangslage\n2 Steigende Handlung: der Konflikt wächst\n3 Höhepunkt: Wendepunkt der Handlung\n4 Fallende Handlung: Folgen, letzte Hoffnung\n5 Katastrophe: Ausgang (im Trauerspiel meist der Tod)\n\n### 4.2b Szenenanalyse\nBei einer Szene fragst du: Wer redet wie? Wer führt das Gespräch? In welcher Beziehung stehen die Figuren?\n1 Gesprächsverlauf: Wer fragt, wer antwortet, wer redet am meisten?\n2 Regieanweisungen (in Klammern) zeigen Mimik, Gestik, Gefühle.\n3 Beziehung: Wer bestimmt? Wie verändert sich das?\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 4.1a Erzählperspektive und Erzählverhalten] Woran erkennst du einen Ich-Erzähler? Auswahl: Er spricht von sich selbst als „ich“ | Er kennt alle Gedanken | Er ist immer der Autor | Er beschreibt nur Außenansichten\n  Ergebnis: Er spricht von sich selbst als „ich“\n  Weg: Ein Ich-Erzähler ist eine Figur der Geschichte, die selbst von ihren Erlebnissen berichtet und sich „ich“ nennt. Signalwörter sind „ich“, „mir“, „mein“ – er ist ein Erzähler, nicht der Autor. Achtung: Alle Gedanken zu kennen wäre das Merkmal eines auktorialen Erzählers; ein Ich-Erzähler kennt nur sein eigenes Innenleben.\n- [Einstiegsquiz, 4.1b Erzählzeit und erzählte Zeit] Was bedeutet „Erzählzeit“? Auswahl: Die Länge des Titels | Die Zeit, die man zum Lesen oder Erzählen braucht | Die Zeit, die in der Handlung vergeht | Das Jahr, in dem der Text entstand\n  Ergebnis: Die Zeit, die man zum Lesen oder Erzählen braucht\n  Weg: Die Erzählzeit ist die Zeit, die man zum Erzählen oder Lesen braucht. Die erzählte Zeit ist die Dauer der Handlung. Beide können stark abweichen: Ein Jahr kann in einem Satz stehen. Achtung: Die Dauer der Handlung heißt erzählte Zeit, nicht Erzählzeit.\n- [Einstiegsquiz, 4.1c Figuren charakterisieren] „Sie war eine sehr ehrgeizige Frau.“ Welche Charakterisierung ist das? Auswahl: Indirekt | Weder noch | Direkt\n  Ergebnis: Direkt\n  Weg: Direkte Charakterisierung nennt die Eigenschaft ausdrücklich („ehrgeizig“). Indirekte schließt man aus Handeln, Sprechen und Verhalten. Im Satz steht das Adjektiv „ehrgeizig“ ohne Handlung als Beleg. Achtung: Indirekt wäre z. B. „Sie übte jeden Abend bis Mitternacht“.\n- [Einstiegsquiz, 4.2a Aufbau eines Dramas] Was geschieht in der Exposition eines Dramas? Auswahl: Der Konflikt wird gelöst | Die Hauptfigur stirbt | Der Höhepunkt wird erreicht | Figuren, Ort und Ausgangslage werden vorgestellt\n  Ergebnis: Figuren, Ort und Ausgangslage werden vorgestellt\n  Weg: Die Exposition ist der erste Teil des Dramas: Sie stellt Figuren, Ort, Zeit und Ausgangslage vor. Der Leser erfährt, was er wissen muss, um die Handlung zu verstehen. Achtung: Konfliktlösung und Tod der Hauptfigur kommen erst am Ende (Katastrophe), der Höhepunkt in der Mitte.\n- [Einstiegsquiz, 4.2b Szenenanalyse] Wofür stehen Regieanweisungen in Klammern, z. B. „(leise)“? Auswahl: Für Mimik, Gestik und Sprechweise der Figuren | Für den Titel der Szene | Für die Namen der Schauspieler | Für die Zeilenzahl\n  Ergebnis: Für Mimik, Gestik und Sprechweise der Figuren\n  Weg: Regieanweisungen sind Hinweise des Autors für Schauspieler und Regie; sie stehen in Klammern oder kursiv und erklären Mimik, Gestik, Tonfall und Handlung. „(leise)“ sagt also, wie gesprochen wird. Achtung: Sie nennen weder Schauspieler noch Zeilen und sind nicht der Titel der Szene.\n- [Übungsaufgaben 1, 4.1a Erzählperspektive und Erzählverhalten] „Mia drückte die Klingel. Sie ahnte nicht, dass ihr Vater längst alles wusste.“ Welches Erzählverhalten liegt vor? Auswahl: Ich-Erzähler | Auktorial | Personal | Neutral\n  Ergebnis: Auktorial\n  Weg: Beim auktorialen Erzählverhalten weiß der Erzähler mehr als die Figuren und überblickt die Handlung. Hier verrät er, dass der Vater „längst alles wusste“, was Mia nicht ahnt. Achtung: Personal wäre, wenn man nur Mias Sicht erlebt; der Satz ist aber auch kein „Ich“-Text.\n- [Übungsaufgaben 1, 4.1b Erzählzeit und erzählte Zeit] „Zehn Jahre vergingen.“ Welche Zeitgestaltung ist das? Auswahl: Zeitraffung | Zeitdehnung | Zeitdeckung\n  Ergebnis: Zeitraffung\n  Weg: Bei Zeitraffung ist die Erzählzeit viel kürzer als die erzählte Zeit. Zehn Jahre werden in einem Satz erzählt, das Lesen dauert nur Sekunden. Achtung: Zeitdehnung wäre das Gegenteil (kurzer Moment, lange erzählt), Zeitdeckung ist etwa gleich lang.\n- [Übungsaufgaben 1, 4.1c Figuren charakterisieren] Paul wird rot und flüstert „Tut mir leid.“ Was sagt das über ihn? Auswahl: Er ist frech | Er ist gleichgültig | Er ist wütend | Er ist schüchtern und schuldbewusst\n  Ergebnis: Er ist schüchtern und schuldbewusst\n  Weg: Indirekte Charakterisierung: Man schließt aus Verhalten, Reden und Körpersprache auf Eigenschaften. Rot werden, Flüstern und „Tut mir leid“ zeigen Scham und Schuldgefühl. Achtung: „frech“ oder „gleichgültig“ passt nicht zu leiser Entschuldigung, „wütend“ nicht zum Flüstern.\n- [Übungsaufgaben 1, 4.2a Aufbau eines Dramas] Welche Phase zeigt den Wendepunkt der Handlung? Auswahl: Höhepunkt | Exposition | Steigende Handlung | Fallende Handlung\n  Ergebnis: Höhepunkt\n  Weg: Der Höhepunkt ist der Wendepunkt: Der Konflikt erreicht seine größte Spannung, danach kippt die Handlung. Deshalb nennt man ihn Wendepunkt. Achtung: Exposition steht am Anfang, die steigende Handlung führt erst zum Wendepunkt hin.\n- [Übungsaufgaben 1, 4.2b Szenenanalyse] Der Vater stellt in einer Szene fast nur Fragen und Befehle, die Tochter antwortet knapp. Was zeigt das? Auswahl: Sie verstehen sich bestens | Der Vater führt das Gespräch und hat die Macht | Beide sind gleichberechtigt | Die Tochter dominiert\n  Ergebnis: Der Vater führt das Gespräch und hat die Macht\n  Weg: Die Sprechanteile und Satzarten verraten das Machtverhältnis: Wer fragt und befiehlt, lenkt das Gespräch. Hier stellt der Vater fast nur Fragen und Befehle, die Tochter antwortet knapp – er führt. Achtung: Wären beide gleichberechtigt, würden sie ähnlich viel und ähnlich lange sprechen.\n- [Abschlussquiz, 4.1a Erzählperspektive und Erzählverhalten] Ein Erzähler berichtet nur, was man sehen und hören kann, wie eine Kamera. Welches Erzählverhalten ist das? Auswahl: Personal | Ich-Erzähler | Neutral | Auktorial\n  Ergebnis: Neutral\n  Weg: Beim neutralen Erzählverhalten wird nur Äußeres gezeigt (was man sehen und hören kann), wie bei einer Kamera. Gedanken und Gefühle fehlen. Achtung: Auktorial wüsste mehr als die Figuren, personal zeigte die Gedanken einer Figur.\n- [Abschlussquiz, 4.1b Erzählzeit und erzählte Zeit] Ein Augenblick wird auf einer ganzen Seite erzählt. Wie heißt das? Auswahl: Zeitraffung | Zeitdeckung | Rückblende | Zeitdehnung\n  Ergebnis: Zeitdehnung\n  Weg: Bei Zeitdehnung dauert das Erzählen länger als das Geschehen. Ein Augenblick wird auf einer ganzen Seite ausgemalt. Achtung: Zeitraffung wäre das Gegenteil; eine Rückblende ist ein Sprung in die Vergangenheit, keine Dauer.\n- [Abschlussquiz, 4.1c Figuren charakterisieren] Welche Aussage ist eine korrekte Charakterisierung mit Beleg? Auswahl: Herr Brandt ist genau, denn er zählt das Wechselgeld zweimal (Z. 1) | Herr Brandt ist nett | Herr Brandt zählt Geld | Herr Brandt ist ein Mann (Z. 1)\n  Ergebnis: Herr Brandt ist genau, denn er zählt das Wechselgeld zweimal (Z. 1)\n  Weg: Eine gute Charakterisierung besteht aus Eigenschaft, Beleg mit Zeilenangabe und Erklärung. „genau, denn er zählt das Wechselgeld zweimal (Z. 1)“ hat alle drei. Achtung: „ist nett“ ohne Beleg ist nur Behauptung, „zählt Geld“ beschreibt nur.\n- [Abschlussquiz, 4.2a Aufbau eines Dramas] Wann beginnt in der Regel eine neue Szene? Auswahl: Wenn der Vorhang das erste Mal fällt | Wenn eine Figur auftritt oder abgeht | Wenn jemand lacht | Nach jedem Satz\n  Ergebnis: Wenn eine Figur auftritt oder abgeht\n  Weg: In der Dramentheorie beginnt eine neue Szene, wenn eine Figur auftritt oder abgeht, weil sich die Besetzung ändert. Ein Akt ist der größere Abschnitt aus mehreren Szenen. Achtung: Lachen oder jeder Satz sind keine Szenengrenzen.\n- [Abschlussquiz, 4.2b Szenenanalyse] Warum untersucht man in der Szenenanalyse die Beziehung der Figuren? Auswahl: Weil man die Rollen zählen muss | Weil sie immer gleich bleibt | Weil Sprechweise und Verhalten Macht und Nähe zeigen | Weil der Titel das verlangt\n  Ergebnis: Weil Sprechweise und Verhalten Macht und Nähe zeigen\n  Weg: Wer wie viel redet, wie er angesprochen wird (Anrede) und welchen Ton er hat, zeigt Macht und Nähe zwischen Figuren. Deshalb untersucht man in der Szenenanalyse die Beziehung. Achtung: Die Beziehung ist meist nicht immer gleich, sie kann sich in der Szene verändern.\n- [Übungsaufgaben 2, 4.1a Erzählperspektive und Erzählverhalten] Ein Text erzählt in der Er-Form, aber nur, was Lena denkt und fühlt. Welches Erzählverhalten ist das? Auswahl: Auktorial | Neutral | Ich-Erzähler | Personal\n  Ergebnis: Personal\n  Weg: Beim personalen Erzählverhalten sieht man alles aus der Sicht einer Figur (hier Lena), mit ihren Gedanken und Gefühlen. Der Text steht in der Er-Form, aber nur Lenas Innenleben ist bekannt. Achtung: Auktorial würde mehr wissen als Lena, Ich-Erzähler hieße „ich“.\n- [Übungsaufgaben 2, 4.1b Erzählzeit und erzählte Zeit] Ein Dialog wird genau so lang erzählt, wie er dauern würde. Welche Zeitgestaltung? Auswahl: Zeitdehnung | Zeitdeckung | Zeitraffung\n  Ergebnis: Zeitdeckung\n  Weg: Bei Zeitdeckung sind Erzählzeit und erzählte Zeit etwa gleich lang, typisch bei Dialogen. Der Dialog wird so lang erzählt, wie er dauert. Achtung: Zeitraffung kürzt, Zeitdehnung zieht in die Länge.\n- [Übungsaufgaben 2, 4.1c Figuren charakterisieren] Mara schreibt nach nur einer Stelle: „Herr Brandt ist gemein.“ Was fehlt? Auswahl: Nichts, das reicht aus | Weitere Belege, denn ein Charakter zeigt sich in mehreren Stellen | Eine Jahreszahl | Ein Reim\n  Ergebnis: Weitere Belege, denn ein Charakter zeigt sich in mehreren Stellen\n  Weg: Ein Charakterurteil muss aus mehreren Textstellen begründet werden, weil Figuren sich verändern oder widersprüchlich handeln. Nach nur einer Stelle ist „gemein“ eine zu schnelle Behauptung. Achtung: Jahreszahl und Reim sind für die Charakterisierung unwichtig.\n- [Übungsaufgaben 2, 4.2a Aufbau eines Dramas] Ferdinand vergiftet in „Kabale und Liebe“ die Limonade, beide sterben. Welche Phase ist das? Auswahl: Höhepunkt | Steigende Handlung | Katastrophe | Exposition\n  Ergebnis: Katastrophe\n  Weg: Die Katastrophe ist der tragische Ausgang eines Dramas: der Untergang oder Tod der Hauptfiguren. In „Kabale und Liebe“ sterben Ferdinand und Luise durch das Gift in der Limonade. Achtung: Der Höhepunkt ist die Wende davor, nicht das Ende.\n- [Übungsaufgaben 2, 4.2b Szenenanalyse] Eine Figur schweigt und geht wortlos ab. Wie deutet man das? Auswahl: Sie ist mit allem einverstanden | Sie hat die Szene gewonnen | Es ist ein Fehler im Text | Sie zieht sich zurück, der Konflikt bleibt ungelöst\n  Ergebnis: Sie zieht sich zurück, der Konflikt bleibt ungelöst\n  Weg: Schweigen und Abgehen sind Handlungen, die gedeutet werden: Rückzug, Resignation oder Protest. Das Gespräch endet, ohne dass der Konflikt gelöst wird. Achtung: Zustimmung wäre durch Worte oder Nicken erkennbar, und ein Fehler im Text ist es nicht.",
  "aufgaben": {
   "Woran erkennst du einen Ich-Erzähler?": {
    "teil": "4.1a",
    "typ": "wahl",
    "ergebnis": "Er spricht von sich selbst als „ich“",
    "optionen": [
     "Er spricht von sich selbst als „ich“",
     "Er kennt alle Gedanken",
     "Er ist immer der Autor",
     "Er beschreibt nur Außenansichten"
    ]
   },
   "Was bedeutet „Erzählzeit“?": {
    "teil": "4.1b",
    "typ": "wahl",
    "ergebnis": "Die Zeit, die man zum Lesen oder Erzählen braucht",
    "optionen": [
     "Die Länge des Titels",
     "Die Zeit, die man zum Lesen oder Erzählen braucht",
     "Die Zeit, die in der Handlung vergeht",
     "Das Jahr, in dem der Text entstand"
    ]
   },
   "„Sie war eine sehr ehrgeizige Frau.“ Welche Charakterisierung ist das?": {
    "teil": "4.1c",
    "typ": "wahl",
    "ergebnis": "Direkt",
    "optionen": [
     "Indirekt",
     "Weder noch",
     "Direkt"
    ]
   },
   "Was geschieht in der Exposition eines Dramas?": {
    "teil": "4.2a",
    "typ": "wahl",
    "ergebnis": "Figuren, Ort und Ausgangslage werden vorgestellt",
    "optionen": [
     "Der Konflikt wird gelöst",
     "Die Hauptfigur stirbt",
     "Der Höhepunkt wird erreicht",
     "Figuren, Ort und Ausgangslage werden vorgestellt"
    ]
   },
   "Wofür stehen Regieanweisungen in Klammern, z. B. „(leise)“?": {
    "teil": "4.2b",
    "typ": "wahl",
    "ergebnis": "Für Mimik, Gestik und Sprechweise der Figuren",
    "optionen": [
     "Für Mimik, Gestik und Sprechweise der Figuren",
     "Für den Titel der Szene",
     "Für die Namen der Schauspieler",
     "Für die Zeilenzahl"
    ]
   },
   "„Mia drückte die Klingel. Sie ahnte nicht, dass ihr Vater längst alles wusste.“ Welches Erzählverhalten liegt vor?": {
    "teil": "4.1a",
    "typ": "wahl",
    "ergebnis": "Auktorial",
    "optionen": [
     "Ich-Erzähler",
     "Auktorial",
     "Personal",
     "Neutral"
    ]
   },
   "„Zehn Jahre vergingen.“ Welche Zeitgestaltung ist das?": {
    "teil": "4.1b",
    "typ": "wahl",
    "ergebnis": "Zeitraffung",
    "optionen": [
     "Zeitraffung",
     "Zeitdehnung",
     "Zeitdeckung"
    ]
   },
   "Paul wird rot und flüstert „Tut mir leid.“ Was sagt das über ihn?": {
    "teil": "4.1c",
    "typ": "wahl",
    "ergebnis": "Er ist schüchtern und schuldbewusst",
    "optionen": [
     "Er ist frech",
     "Er ist gleichgültig",
     "Er ist wütend",
     "Er ist schüchtern und schuldbewusst"
    ]
   },
   "Welche Phase zeigt den Wendepunkt der Handlung?": {
    "teil": "4.2a",
    "typ": "wahl",
    "ergebnis": "Höhepunkt",
    "optionen": [
     "Höhepunkt",
     "Exposition",
     "Steigende Handlung",
     "Fallende Handlung"
    ]
   },
   "Der Vater stellt in einer Szene fast nur Fragen und Befehle, die Tochter antwortet knapp. Was zeigt das?": {
    "teil": "4.2b",
    "typ": "wahl",
    "ergebnis": "Der Vater führt das Gespräch und hat die Macht",
    "optionen": [
     "Sie verstehen sich bestens",
     "Der Vater führt das Gespräch und hat die Macht",
     "Beide sind gleichberechtigt",
     "Die Tochter dominiert"
    ]
   },
   "Ein Erzähler berichtet nur, was man sehen und hören kann, wie eine Kamera. Welches Erzählverhalten ist das?": {
    "teil": "4.1a",
    "typ": "wahl",
    "ergebnis": "Neutral",
    "optionen": [
     "Personal",
     "Ich-Erzähler",
     "Neutral",
     "Auktorial"
    ]
   },
   "Ein Augenblick wird auf einer ganzen Seite erzählt. Wie heißt das?": {
    "teil": "4.1b",
    "typ": "wahl",
    "ergebnis": "Zeitdehnung",
    "optionen": [
     "Zeitraffung",
     "Zeitdeckung",
     "Rückblende",
     "Zeitdehnung"
    ]
   },
   "Welche Aussage ist eine korrekte Charakterisierung mit Beleg?": {
    "teil": "4.1c",
    "typ": "wahl",
    "ergebnis": "Herr Brandt ist genau, denn er zählt das Wechselgeld zweimal (Z. 1)",
    "optionen": [
     "Herr Brandt ist genau, denn er zählt das Wechselgeld zweimal (Z. 1)",
     "Herr Brandt ist nett",
     "Herr Brandt zählt Geld",
     "Herr Brandt ist ein Mann (Z. 1)"
    ]
   },
   "Wann beginnt in der Regel eine neue Szene?": {
    "teil": "4.2a",
    "typ": "wahl",
    "ergebnis": "Wenn eine Figur auftritt oder abgeht",
    "optionen": [
     "Wenn der Vorhang das erste Mal fällt",
     "Wenn eine Figur auftritt oder abgeht",
     "Wenn jemand lacht",
     "Nach jedem Satz"
    ]
   },
   "Warum untersucht man in der Szenenanalyse die Beziehung der Figuren?": {
    "teil": "4.2b",
    "typ": "wahl",
    "ergebnis": "Weil Sprechweise und Verhalten Macht und Nähe zeigen",
    "optionen": [
     "Weil man die Rollen zählen muss",
     "Weil sie immer gleich bleibt",
     "Weil Sprechweise und Verhalten Macht und Nähe zeigen",
     "Weil der Titel das verlangt"
    ]
   },
   "Ein Text erzählt in der Er-Form, aber nur, was Lena denkt und fühlt. Welches Erzählverhalten ist das?": {
    "teil": "4.1a",
    "typ": "wahl",
    "ergebnis": "Personal",
    "optionen": [
     "Auktorial",
     "Neutral",
     "Ich-Erzähler",
     "Personal"
    ]
   },
   "Ein Dialog wird genau so lang erzählt, wie er dauern würde. Welche Zeitgestaltung?": {
    "teil": "4.1b",
    "typ": "wahl",
    "ergebnis": "Zeitdeckung",
    "optionen": [
     "Zeitdehnung",
     "Zeitdeckung",
     "Zeitraffung"
    ]
   },
   "Mara schreibt nach nur einer Stelle: „Herr Brandt ist gemein.“ Was fehlt?": {
    "teil": "4.1c",
    "typ": "wahl",
    "ergebnis": "Weitere Belege, denn ein Charakter zeigt sich in mehreren Stellen",
    "optionen": [
     "Nichts, das reicht aus",
     "Weitere Belege, denn ein Charakter zeigt sich in mehreren Stellen",
     "Eine Jahreszahl",
     "Ein Reim"
    ]
   },
   "Ferdinand vergiftet in „Kabale und Liebe“ die Limonade, beide sterben. Welche Phase ist das?": {
    "teil": "4.2a",
    "typ": "wahl",
    "ergebnis": "Katastrophe",
    "optionen": [
     "Höhepunkt",
     "Steigende Handlung",
     "Katastrophe",
     "Exposition"
    ]
   },
   "Eine Figur schweigt und geht wortlos ab. Wie deutet man das?": {
    "teil": "4.2b",
    "typ": "wahl",
    "ergebnis": "Sie zieht sich zurück, der Konflikt bleibt ungelöst",
    "optionen": [
     "Sie ist mit allem einverstanden",
     "Sie hat die Szene gewonnen",
     "Es ist ein Fehler im Text",
     "Sie zieht sich zurück, der Konflikt bleibt ungelöst"
    ]
   },
   "Welcher Satz beschreibt einen auktorialen Erzähler richtig?": {
    "teil": "4.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Der Text „Ich öffnete die Tür, und mir wurde heiß.“ ist erzählt von …": {
    "teil": "4.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Eine Romanseite erzählt ein ganzes Leben. Welche Zeitgestaltung ist das?": {
    "teil": "4.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Wozu nutzen Autoren oft Zeitdehnung?": {
    "teil": "4.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Welche Aussage ist eine indirekte Charakterisierung?": {
    "teil": "4.1c",
    "typ": "wahl",
    "klausur": true
   },
   "Welche Reihenfolge entspricht dem klassischen Dramenaufbau?": {
    "teil": "4.2a",
    "typ": "wahl",
    "klausur": true
   },
   "Was ist ein Akt?": {
    "teil": "4.2a",
    "typ": "wahl",
    "klausur": true
   },
   "Welcher Schritt gehört NICHT zur Szenenanalyse?": {
    "teil": "4.2b",
    "typ": "wahl",
    "klausur": true
   }
  }
 },
 "d10-5-sprache-stil": {
  "titel": "Sprache und Stil",
  "fach": "deutsch",
  "klasse": 10,
  "teile": {
   "5.1a": "Indirekte Rede mit Konjunktiv I",
   "5.1b": "Konjunktiv II als Ersatzform",
   "5.2a": "Kommasetzung",
   "5.2b": "das oder dass",
   "5.3a": "Richtig zitieren"
  },
  "text": "# Sprache und Stil (Deutsch, Klasse 10)\n\n## Merkkästen der Arbeitsblätter\n### 5.1a Indirekte Rede mit Konjunktiv I\nDie indirekte Rede gibt wieder, was jemand gesagt hat. Das Verb steht im Konjunktiv I:\nStamm + -e\n(er lerne, sie komme)  ·  Sonderfall: er sei, er habe\n1 Direkt: Lena sagt: „Ich lerne heute.“\n2 Person ändern: ich → sie\n3 Konjunktiv I: Lena sagt, sie lerne heute.\n\n### 5.1b Konjunktiv II als Ersatzform\nSieht der Konjunktiv I aus wie der Indikativ (z. B. „sie haben“), nimmt man den Konjunktiv II als Ersatz:\nhaben → hätten · kommen → kämen\n1 Konjunktiv I bilden: sie haben\n2 Gleich wie Indikativ? Dann Ersatzform: sie hätten\n3 Sonst: würden + Infinitiv\n\n### 5.2a Kommasetzung\nEin Komma trennt Hauptsatz und Nebensatz. Nebensätze erkennst du am Einleitewort (weil, dass, obwohl, damit, der/die/das) und am Verb am Ende.\nVor um … zu, ohne … zu, statt … zu steht immer ein Komma.\n1 Nebensatz finden: …, weil es regnet\n2 Komma davor (und danach, wenn der Satz weitergeht)\n3 Ich bleibe da, weil es regnet. · Er geht, um zu helfen.\n\n### 5.2b das oder dass\ndas = Artikel oder Pronomen. dass = Konjunktion, sie leitet einen Nebensatz ein.\nErsatzprobe: dieses / welches\n1 Setze dieses oder welches ein\n2 Passt es? → das (ein s)\n3 Passt es nicht? → dass (zwei s)\nDas Buch, das (welches) ich lese, ist gut. · Ich weiß, dass du kommst.\n\n### 5.3a Richtig zitieren\nEin wörtliches Zitat steht in „Anführungszeichen“, genau abgeschrieben. Danach folgt die Zeilenangabe in Klammern, vor dem Punkt.\nSinngemäß (ohne Anführungszeichen) schreibst du vgl. davor: (vgl. Z. 5).\n1 Textstelle finden, Zeile merken\n2 Wörtlich abschreiben: „…“\n3 Klammer: (Z. 2) und dann der Punkt\nDer Morgen ist trüb: „Der Morgen am Hafen war grau und still“ (Z. 1).\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 5.1a Indirekte Rede mit Konjunktiv I] Lena sagt: „Ich lerne heute.“ Wie lautet die indirekte Rede? Auswahl: Lena sagt, sie lerne heute. | Lena sagt, ich lerne heute. | Lena sagt, sie lernt heute. | Lena sagt, sie lernte heute.\n  Ergebnis: Lena sagt, sie lerne heute.\n  Weg: In der indirekten Rede wechselt die Person (ich → sie), und das Verb steht im Konjunktiv I: Stamm + -e (er/sie lerne). Hier verlangt „Lena sagt, …“ also „sie lerne“. Achtung: „sie lernt“ ist zwar im Alltag üblich, aber Indikativ; „ich lerne“ hätte die Person nicht gewechselt.\n- [Einstiegsquiz, 5.1b Konjunktiv II als Ersatzform] Die Kinder sagen: „Wir haben Hunger.“ Welche indirekte Rede ist richtig? Auswahl: Sie sagen, sie haben Hunger. | Sie sagen, sie hätten Hunger. | Sie sagen, sie habe Hunger. | Sie sagen, wir hätten Hunger.\n  Ergebnis: Sie sagen, sie hätten Hunger.\n  Weg: Der Konjunktiv I von „haben“ lautet in der 3. Person Plural „sie haben“ – genau wie der Indikativ. Dann nimmt man die Ersatzform Konjunktiv II: sie hätten. So erkennt der Leser, dass es indirekte Rede ist. Achtung: „sie habe“ ist Singular, passt nicht zu „Kinder“.\n- [Einstiegsquiz, 5.2a Kommasetzung] Welcher Satz ist richtig geschrieben? Auswahl: Ich bleibe zu Hause weil ich krank bin. | Ich bleibe zu Hause, weil ich krank bin. | Ich bleibe zu Hause weil, ich krank bin. | Ich bleibe, zu Hause weil ich krank bin.\n  Ergebnis: Ich bleibe zu Hause, weil ich krank bin.\n  Weg: Ein Nebensatz wird durch Komma vom Hauptsatz getrennt. „weil ich krank bin“ ist ein Nebensatz (Verb am Ende). Das Komma steht direkt vor der Konjunktion „weil“. Achtung: Ein Komma hinter „weil“ oder mitten im Hauptsatz trennt zusammengehörige Teile.\n- [Einstiegsquiz, 5.2b das oder dass] Welches Wort passt? „Ich hoffe, ___ du kommst.“ Auswahl: das | dass\n  Ergebnis: dass\n  Weg: Ersatzprobe: Passt „dieses“ oder „welches“, ist es „das“. Passt es nicht, ist es die Konjunktion „dass“. In „Ich hoffe, ___ du kommst“ klingt „dieses du kommst“ falsch – also „dass“. Achtung: „das“ als Artikel braucht ein Nomen, hier folgt aber „du“.\n- [Einstiegsquiz, 5.3a Richtig zitieren] Wie gibst du eine wörtliche Textstelle aus Zeile 7 richtig an? Auswahl: „Die Nacht war kalt“ (Z. 7). | Die Nacht war kalt (Z. 7) | „Die Nacht war kalt.“ Z. 7 | (Z. 7) Die Nacht war kalt.\n  Ergebnis: „Die Nacht war kalt“ (Z. 7).\n  Weg: Ein wörtliches Zitat steht in Anführungszeichen, danach folgt die Zeilenangabe in Klammern (Z. 7) und erst dann der Punkt. So ist klar, was zitiert wird und wo es steht. Achtung: Ohne Anführungszeichen sähe die Stelle wie eigener Text aus, mit Punkt im Zitat stünde die Klammer falsch.\n- [Übungsaufgaben 1, 5.1a Indirekte Rede mit Konjunktiv I] Mia sagt: „Ich bin müde.“ Welche Form ist richtig? Auswahl: Mia sagt, sie ist müde. | Mia sagt, sie sei müde. | Mia sagt, sie wäre müden. | Mia sagt, ich sei müde.\n  Ergebnis: Mia sagt, sie sei müde.\n  Weg: Der Konjunktiv I von „sein“ in der 3. Person Singular heißt „sei“ (er/sie sei). Bei indirekter Rede wechselt auch die Person: „ich bin“ → „sie sei“. Achtung: „sie ist“ ist Indikativ; „wäre müden“ wäre falsch gebildet, und „ich sei“ lässt die Person gleich.\n- [Übungsaufgaben 1, 5.1b Konjunktiv II als Ersatzform] Die Gäste sagen: „Wir kommen später.“ Wie lautet die Ersatzform? Auswahl: Sie sagen, sie kommen später. | Sie sagen, sie kämt später. | Sie sagen, sie kämen später. | Sie sagen, sie käme später.\n  Ergebnis: Sie sagen, sie kämen später.\n  Weg: „Wir kommen“ wird zu „sie kommen“ – Konjunktiv I und Indikativ sind gleich. Deshalb nimmt man Konjunktiv II: sie kämen (alternativ: sie würden kommen). „kämen“ entsteht aus dem Präteritum „kam“ mit Umlaut plus -en. Achtung: „kämt“ gibt es hier nicht, „käme“ ist Singular.\n- [Übungsaufgaben 1, 5.2a Kommasetzung] Wo steht in diesem Satz ein Komma? „Obwohl wir müde waren gingen wir spazieren.“ Auswahl: nach „Obwohl“ | nach „waren“ | nach „wir“ | nach „gingen“\n  Ergebnis: nach „waren“\n  Weg: Ein Nebensatz wird vom Hauptsatz durch Komma getrennt. „Obwohl wir müde waren“ ist der Nebensatz, der mit dem Verb „waren“ endet. Direkt dahinter beginnt der Hauptsatz („gingen wir …“). Achtung: Nach „Obwohl“ oder „wir“ steht kein Komma, sie gehören zum Nebensatz.\n- [Übungsaufgaben 1, 5.2b das oder dass] Welcher Satz mit Relativsatz ist richtig? Auswahl: Das Haus, dass wir kaufen, ist groß. | Das Haus, das wir kaufen, ist groß. | Dass Haus, das wir kaufen, ist groß. | Das Haus das wir kaufen, ist groß.\n  Ergebnis: Das Haus, das wir kaufen, ist groß.\n  Weg: Beim Relativsatz kann man „das“ durch „welches“ ersetzen (das Haus, welches wir kaufen). Dann schreibt man „das“ mit einem s. Der Relativsatz wird durch Komma abgetrennt. Achtung: „dass“ ist die Konjunktion und passt nicht, wenn man „welches“ einsetzen kann.\n- [Übungsaufgaben 1, 5.3a Richtig zitieren] In Zeile 5 steht: „Er wartete schon seit Stunden auf das Schiff.“ Welches Zitat ist korrekt? Auswahl: Jonas wartet: „Er wartet schon seit Stunden auf das Schiff“ (Z. 5). | Jonas wartet: „Er wartete schon seit Stunden auf das Schiff“ (Z. 5). | Jonas wartet: Er wartete schon seit Stunden auf das Schiff (Z. 5). | Jonas wartet: „Er wartete schon seit Stunden auf das Schiff“ (Z. 6).\n  Ergebnis: Jonas wartet: „Er wartete schon seit Stunden auf das Schiff“ (Z. 5).\n  Weg: Ein wörtliches Zitat wird Zeichen für Zeichen übernommen, deshalb „wartete“ (nicht „wartet“). Es steht in Anführungszeichen, danach folgt die richtige Zeilenangabe (Z. 5). Achtung: Schon eine geänderte Zeitform oder falsche Zeile macht das Zitat unbrauchbar.\n- [Abschlussquiz, 5.1a Indirekte Rede mit Konjunktiv I] Welche Form ist Konjunktiv I? Auswahl: er lernt | er lernte | er lerne | er würde lernen\n  Ergebnis: er lerne\n  Weg: Der Konjunktiv I wird aus dem Verbstamm + -e gebildet: lern- + -e = er lerne. „er lernt“ ist Indikativ, „er lernte“ Präteritum (Indikativ), „würde lernen“ eine Ersatzform. Achtung: Nur „lerne“ ist Konjunktiv I.\n- [Abschlussquiz, 5.1b Konjunktiv II als Ersatzform] Wann nimmt man in der indirekten Rede den Konjunktiv II? Auswahl: Wenn der Konjunktiv I wie der Indikativ aussieht | Immer, wenn der Satz lang ist | Wenn es um die Vergangenheit geht | Wenn „dass“ im Satz steht\n  Ergebnis: Wenn der Konjunktiv I wie der Indikativ aussieht\n  Weg: Konjunktiv II ist die Ersatzform, wenn der Konjunktiv I wie der Indikativ aussieht und man die indirekte Rede nicht erkennt. Beispiel: „sie haben“ ist beides – darum „sie hätten“. Achtung: Länge des Satzes, Vergangenheit oder „dass“ sind kein Grund für den Konjunktiv II.\n- [Abschlussquiz, 5.2a Kommasetzung] Vor welchem Wort steht immer ein Komma? Auswahl: und | weil | oder | sowie\n  Ergebnis: weil\n  Weg: „weil“ leitet einen Nebensatz ein, und vor Nebensätzen steht immer ein Komma. Vor „und“, „oder“ und „sowie“ steht meist keines, wenn sie nur Wörter oder Hauptsätze verbinden. Achtung: Auch vor „oder“ steht meist kein Komma; ein Komma vor „und“ gibt es nur bei bestimmten Einschüben.\n- [Abschlussquiz, 5.2b das oder dass] Wie funktioniert die Ersatzprobe bei das/dass? Auswahl: Man setzt dieses oder welches ein: passt es, schreibt man „das“ | Man zählt die Wörter im Satz | Man prüft, ob der Satz mit einem Verb endet | Man setzt „der“ oder „die“ ein\n  Ergebnis: Man setzt dieses oder welches ein: passt es, schreibt man „das“\n  Weg: Ersatzprobe: Lässt sich „dieses“ oder „welches“ einsetzen, ist es „das“ (Artikel oder Pronomen). Sonst ist es „dass“. Gelingt das Einsetzen nicht, ist es die Konjunktion „dass“ (mit Komma davor). Achtung: Wörter zählen oder auf das Verb am Ende schauen ersetzt die Probe nicht.\n- [Abschlussquiz, 5.3a Richtig zitieren] Was bedeutet „vgl. Z. 4“ hinter einer Textstelle? Auswahl: Die Aussage steht sinngemäß in Zeile 4 (kein wörtliches Zitat) | Das Zitat ist falsch | Die Zeile 4 ist ausgelassen | Der Text hat vier Zeilen\n  Ergebnis: Die Aussage steht sinngemäß in Zeile 4 (kein wörtliches Zitat)\n  Weg: „vgl.“ steht für „vergleiche“ und zeigt, dass die Aussage nur sinngemäß aus Zeile 4 stammt – also kein wörtliches Zitat. Ohne Anführungszeichen wird nicht Wort für Wort übernommen. Achtung: Es bedeutet nicht „falsch“ oder „ausgelassen“.\n- [Übungsaufgaben 2, 5.1a Indirekte Rede mit Konjunktiv I] Der Trainer erklärt: „Das Spiel beginnt um 15 Uhr.“ Wie lautet die indirekte Rede? Auswahl: Der Trainer erklärt, das Spiel beginnt um 15 Uhr. | Der Trainer erklärt, das Spiel beginne um 15 Uhr. | Der Trainer erklärt, das Spiel begann um 15 Uhr. | Der Trainer erklärt, dass Spiel beginne um 15 Uhr.\n  Ergebnis: Der Trainer erklärt, das Spiel beginne um 15 Uhr.\n  Weg: Der Konjunktiv I von „beginnen“ ist „er/es beginne“ (Stamm + -e) und unterscheidet sich vom Indikativ „beginnt“. Also reicht der Konjunktiv I. Das Subjekt „das Spiel“ bleibt die 3. Person Singular, darum ist die Form eindeutig. Achtung: „beginnt“ ist Indikativ, „begann“ Präteritum, „dass Spiel“ ist falsch geschrieben.\n- [Übungsaufgaben 2, 5.1b Konjunktiv II als Ersatzform] Die Zwillinge sagen: „Wir müssen lernen.“ Welche Ersatzform passt? Auswahl: Sie sagen, sie müssen lernen. | Sie sagen, sie müssten lernen. | Sie sagen, sie müsse lernen. | Sie sagen, wir müssten lernen.\n  Ergebnis: Sie sagen, sie müssten lernen.\n  Weg: „Wir müssen“ wird zu „sie müssen“; das ist Indikativ und zugleich der Konjunktiv I, man erkennt keine indirekte Rede. Darum Ersatzform Konjunktiv II: sie müssten. Die Person wechselt von „wir“ zu „sie“. Achtung: „müsse“ ist Singular, und „wir müssten“ lässt die Person gleich.\n- [Übungsaufgaben 2, 5.2a Kommasetzung] Welcher Satz mit Infinitivgruppe ist richtig? Auswahl: Sie fährt mit dem Rad statt mit dem Bus zu fahren. | Sie fährt mit dem Rad, statt mit dem Bus zu fahren. | Sie fährt, mit dem Rad statt mit dem Bus zu fahren. | Sie fährt mit dem Rad statt, mit dem Bus zu fahren.\n  Ergebnis: Sie fährt mit dem Rad, statt mit dem Bus zu fahren.\n  Weg: Infinitivgruppen mit „statt … zu“, „um … zu“, „ohne … zu“ werden immer durch Komma abgetrennt. Das Komma steht direkt vor „statt“, weil dort die Infinitivgruppe beginnt. Achtung: Ein Komma nach „statt“ oder „fährt“ zerreißt zusammengehörige Teile.\n- [Übungsaufgaben 2, 5.2b das oder dass] Welcher Ausdruck ist richtig geschrieben? Auswahl: Schade, das du nicht dabei warst. | Schade, dass du nicht dabei warst. | Schade dass, du nicht dabei warst. | Schade das, du nicht dabei warst.\n  Ergebnis: Schade, dass du nicht dabei warst.\n  Weg: Ersatzprobe: „Schade, dieses du nicht dabei warst“ klingt falsch, also ist es die Konjunktion „dass“. Vor „dass“ steht immer ein Komma. Sie leitet einen Nebensatz ein. Achtung: „das“ wäre ein Artikel oder Pronomen und braucht ein Nomen oder Bezugswort.\n- [Übungsaufgaben 2, 5.3a Richtig zitieren] Wie kürzt du das Zitat „Er wartete schon seit Stunden auf das Schiff“ (Z. 5) richtig? Auswahl: „Er wartete […] auf das Schiff“ (Z. 5) | „Er wartete … Schiff.“ Z. 5 | Er wartete (…) auf das Schiff (Z. 5) | „Er wartete“ „auf das Schiff“ (Z. 5)\n  Ergebnis: „Er wartete […] auf das Schiff“ (Z. 5)\n  Weg: Auslassungen in einem Zitat markiert man mit […] in eckigen Klammern, damit klar ist, dass etwas fehlt. Das gekürzte Zitat bleibt in Anführungszeichen und bekommt die Zeilenangabe. Achtung: Runde Klammern oder drei Punkte ohne Klammern sind nicht die übliche Markierung.",
  "aufgaben": {
   "Lena sagt: „Ich lerne heute.“ Wie lautet die indirekte Rede?": {
    "teil": "5.1a",
    "typ": "wahl",
    "ergebnis": "Lena sagt, sie lerne heute.",
    "optionen": [
     "Lena sagt, sie lerne heute.",
     "Lena sagt, ich lerne heute.",
     "Lena sagt, sie lernt heute.",
     "Lena sagt, sie lernte heute."
    ]
   },
   "Die Kinder sagen: „Wir haben Hunger.“ Welche indirekte Rede ist richtig?": {
    "teil": "5.1b",
    "typ": "wahl",
    "ergebnis": "Sie sagen, sie hätten Hunger.",
    "optionen": [
     "Sie sagen, sie haben Hunger.",
     "Sie sagen, sie hätten Hunger.",
     "Sie sagen, sie habe Hunger.",
     "Sie sagen, wir hätten Hunger."
    ]
   },
   "Welcher Satz ist richtig geschrieben?": {
    "teil": "5.2a",
    "typ": "wahl",
    "ergebnis": "Ich bleibe zu Hause, weil ich krank bin.",
    "optionen": [
     "Ich bleibe zu Hause weil ich krank bin.",
     "Ich bleibe zu Hause, weil ich krank bin.",
     "Ich bleibe zu Hause weil, ich krank bin.",
     "Ich bleibe, zu Hause weil ich krank bin."
    ]
   },
   "Welches Wort passt? „Ich hoffe, ___ du kommst.“": {
    "teil": "5.2b",
    "typ": "wahl",
    "ergebnis": "dass",
    "optionen": [
     "das",
     "dass"
    ]
   },
   "Wie gibst du eine wörtliche Textstelle aus Zeile 7 richtig an?": {
    "teil": "5.3a",
    "typ": "wahl",
    "ergebnis": "„Die Nacht war kalt“ (Z. 7).",
    "optionen": [
     "„Die Nacht war kalt“ (Z. 7).",
     "Die Nacht war kalt (Z. 7)",
     "„Die Nacht war kalt.“ Z. 7",
     "(Z. 7) Die Nacht war kalt."
    ]
   },
   "Mia sagt: „Ich bin müde.“ Welche Form ist richtig?": {
    "teil": "5.1a",
    "typ": "wahl",
    "ergebnis": "Mia sagt, sie sei müde.",
    "optionen": [
     "Mia sagt, sie ist müde.",
     "Mia sagt, sie sei müde.",
     "Mia sagt, sie wäre müden.",
     "Mia sagt, ich sei müde."
    ]
   },
   "Die Gäste sagen: „Wir kommen später.“ Wie lautet die Ersatzform?": {
    "teil": "5.1b",
    "typ": "wahl",
    "ergebnis": "Sie sagen, sie kämen später.",
    "optionen": [
     "Sie sagen, sie kommen später.",
     "Sie sagen, sie kämt später.",
     "Sie sagen, sie kämen später.",
     "Sie sagen, sie käme später."
    ]
   },
   "Wo steht in diesem Satz ein Komma? „Obwohl wir müde waren gingen wir spazieren.“": {
    "teil": "5.2a",
    "typ": "wahl",
    "ergebnis": "nach „waren“",
    "optionen": [
     "nach „Obwohl“",
     "nach „waren“",
     "nach „wir“",
     "nach „gingen“"
    ]
   },
   "Welcher Satz mit Relativsatz ist richtig?": {
    "teil": "5.2b",
    "typ": "wahl",
    "ergebnis": "Das Haus, das wir kaufen, ist groß.",
    "optionen": [
     "Das Haus, dass wir kaufen, ist groß.",
     "Das Haus, das wir kaufen, ist groß.",
     "Dass Haus, das wir kaufen, ist groß.",
     "Das Haus das wir kaufen, ist groß."
    ]
   },
   "In Zeile 5 steht: „Er wartete schon seit Stunden auf das Schiff.“ Welches Zitat ist korrekt?": {
    "teil": "5.3a",
    "typ": "wahl",
    "ergebnis": "Jonas wartet: „Er wartete schon seit Stunden auf das Schiff“ (Z. 5).",
    "optionen": [
     "Jonas wartet: „Er wartet schon seit Stunden auf das Schiff“ (Z. 5).",
     "Jonas wartet: „Er wartete schon seit Stunden auf das Schiff“ (Z. 5).",
     "Jonas wartet: Er wartete schon seit Stunden auf das Schiff (Z. 5).",
     "Jonas wartet: „Er wartete schon seit Stunden auf das Schiff“ (Z. 6)."
    ]
   },
   "Welche Form ist Konjunktiv I?": {
    "teil": "5.1a",
    "typ": "wahl",
    "ergebnis": "er lerne",
    "optionen": [
     "er lernt",
     "er lernte",
     "er lerne",
     "er würde lernen"
    ]
   },
   "Wann nimmt man in der indirekten Rede den Konjunktiv II?": {
    "teil": "5.1b",
    "typ": "wahl",
    "ergebnis": "Wenn der Konjunktiv I wie der Indikativ aussieht",
    "optionen": [
     "Wenn der Konjunktiv I wie der Indikativ aussieht",
     "Immer, wenn der Satz lang ist",
     "Wenn es um die Vergangenheit geht",
     "Wenn „dass“ im Satz steht"
    ]
   },
   "Vor welchem Wort steht immer ein Komma?": {
    "teil": "5.2a",
    "typ": "wahl",
    "ergebnis": "weil",
    "optionen": [
     "und",
     "weil",
     "oder",
     "sowie"
    ]
   },
   "Wie funktioniert die Ersatzprobe bei das/dass?": {
    "teil": "5.2b",
    "typ": "wahl",
    "ergebnis": "Man setzt dieses oder welches ein: passt es, schreibt man „das“",
    "optionen": [
     "Man setzt dieses oder welches ein: passt es, schreibt man „das“",
     "Man zählt die Wörter im Satz",
     "Man prüft, ob der Satz mit einem Verb endet",
     "Man setzt „der“ oder „die“ ein"
    ]
   },
   "Was bedeutet „vgl. Z. 4“ hinter einer Textstelle?": {
    "teil": "5.3a",
    "typ": "wahl",
    "ergebnis": "Die Aussage steht sinngemäß in Zeile 4 (kein wörtliches Zitat)",
    "optionen": [
     "Die Aussage steht sinngemäß in Zeile 4 (kein wörtliches Zitat)",
     "Das Zitat ist falsch",
     "Die Zeile 4 ist ausgelassen",
     "Der Text hat vier Zeilen"
    ]
   },
   "Der Trainer erklärt: „Das Spiel beginnt um 15 Uhr.“ Wie lautet die indirekte Rede?": {
    "teil": "5.1a",
    "typ": "wahl",
    "ergebnis": "Der Trainer erklärt, das Spiel beginne um 15 Uhr.",
    "optionen": [
     "Der Trainer erklärt, das Spiel beginnt um 15 Uhr.",
     "Der Trainer erklärt, das Spiel beginne um 15 Uhr.",
     "Der Trainer erklärt, das Spiel begann um 15 Uhr.",
     "Der Trainer erklärt, dass Spiel beginne um 15 Uhr."
    ]
   },
   "Die Zwillinge sagen: „Wir müssen lernen.“ Welche Ersatzform passt?": {
    "teil": "5.1b",
    "typ": "wahl",
    "ergebnis": "Sie sagen, sie müssten lernen.",
    "optionen": [
     "Sie sagen, sie müssen lernen.",
     "Sie sagen, sie müssten lernen.",
     "Sie sagen, sie müsse lernen.",
     "Sie sagen, wir müssten lernen."
    ]
   },
   "Welcher Satz mit Infinitivgruppe ist richtig?": {
    "teil": "5.2a",
    "typ": "wahl",
    "ergebnis": "Sie fährt mit dem Rad, statt mit dem Bus zu fahren.",
    "optionen": [
     "Sie fährt mit dem Rad statt mit dem Bus zu fahren.",
     "Sie fährt mit dem Rad, statt mit dem Bus zu fahren.",
     "Sie fährt, mit dem Rad statt mit dem Bus zu fahren.",
     "Sie fährt mit dem Rad statt, mit dem Bus zu fahren."
    ]
   },
   "Welcher Ausdruck ist richtig geschrieben?": {
    "teil": "5.2b",
    "typ": "wahl",
    "ergebnis": "Schade, dass du nicht dabei warst.",
    "optionen": [
     "Schade, das du nicht dabei warst.",
     "Schade, dass du nicht dabei warst.",
     "Schade dass, du nicht dabei warst.",
     "Schade das, du nicht dabei warst."
    ]
   },
   "Wie kürzt du das Zitat „Er wartete schon seit Stunden auf das Schiff“ (Z. 5) richtig?": {
    "teil": "5.3a",
    "typ": "wahl",
    "ergebnis": "„Er wartete […] auf das Schiff“ (Z. 5)",
    "optionen": [
     "„Er wartete […] auf das Schiff“ (Z. 5)",
     "„Er wartete … Schiff.“ Z. 5",
     "Er wartete (…) auf das Schiff (Z. 5)",
     "„Er wartete“ „auf das Schiff“ (Z. 5)"
    ]
   },
   "Jonas sagt: „Ich habe keine Zeit.“ Wie lautet die indirekte Rede?": {
    "teil": "5.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Die Freunde sagen: „Wir sind pünktlich.“ Welche Form ist in der indirekten Rede eindeutig?": {
    "teil": "5.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Ina sagt: „Wir haben schon gegessen.“ Welcher Satz ist richtig?": {
    "teil": "5.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Wo sind die Kommas im Relativsatz richtig gesetzt?": {
    "teil": "5.2a",
    "typ": "wahl",
    "klausur": true
   },
   "Welcher Satz mit zwei „dass“-Sätzen ist richtig?": {
    "teil": "5.2a",
    "typ": "wahl",
    "klausur": true
   },
   "Welcher Satz mit „dass“ und „das“ ist komplett richtig?": {
    "teil": "5.2b",
    "typ": "wahl",
    "klausur": true
   },
   "Welche Ergänzung ist richtig? „Das Foto, ___ ich dir schicken wollte, ist schön.“": {
    "teil": "5.2b",
    "typ": "wahl",
    "klausur": true
   },
   "Welche Aussage über Zitate ist richtig?": {
    "teil": "5.3a",
    "typ": "wahl",
    "klausur": true
   }
  }
 },
 "e5-1-schule": {
  "titel": "Ich und meine Schule",
  "fach": "englisch",
  "klasse": 5,
  "teile": {
   "1.1a": "I am, you are, he/she/it is",
   "1.1b": "a oder an?",
   "1.2a": "there is / there are",
   "1.2b": "can / can’t",
   "1.3a": "Befehle im Klassenzimmer"
  },
  "text": "# Ich und meine Schule (Englisch, Klasse 5)\n\n## Merkkästen der Arbeitsblätter\n### 1.1a I am, you are, he/she/it is\nbe heißt sein. Die Form ändert sich:\nI am · you are · he/she/it is · we/you/they are\n1 Wer ist es? Mia = she\n2 Passende Form: She is ten.\n3 Kurz: She’s ten. I’m ten.\n\n### 1.1b a oder an?\nVor Mitlaut-Laut steht a\na pen, a ruler, a desk\nVor Selbstlaut-Laut (a, e, i, o, u) steht an\nan apple, an eraser, an orange\n1 Sieh auf das Wort direkt dahinter.\n2 Fängt es mit a, e, i, o, u an? → an\n3 Sonst → a. an old pen, a red pen\n\n### 1.2a there is / there are\nEin Ding: There is\na board.   Mehrere: There are\ntwo windows.\n1 Zähle: 1 → There is a clock.\n2 Mehr als 1 → There are four books.\n3 Nein / Frage: There isn’t a pool. Is there a pool?\n\n### 1.2b can / can’t\ncan\n= können  I can swim.   can’t\n= nicht können  I can’t fly.\n1 can bleibt immer gleich: he can\n2 Danach kommt das Verb pur: She can sing.\n3 Frage: Can you swim? – Yes, I can. / No, I can’t.\n🐟\n🐦\n\n### 1.3a Befehle im Klassenzimmer\nBefehl: nur das Verb! Open your book!\nVerbot: Don’t talk!\n1 Verb pur, ohne you: Sit down!\n2 Verbot: Don’t + Verb: Don’t run!\n3 Nett mit please: Listen, please.\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 1.1a I am, you are, he/she/it is] Welcher Satz ist richtig? Auswahl: I am ten. | I is ten. | I are ten.\n  Ergebnis: I am ten.\n  Weg: Zu „I“ passt immer „am“ (Kurz: I’m). Hier ist es „I“ → I am ten. „I is“ und „I are“ gehen nicht – nur „am“ passt zu „I“.\n- [Einstiegsquiz, 1.1b a oder an?] Welches Wort passt? ___ apple Auswahl: the an | an | a\n  Ergebnis: an\n  Weg: Vor a, e, i, o, u sagt man „an“. Apple fängt mit „a“ an → an apple. „a apple“ geht nicht – vor einem Selbstlaut (a, e, i, o, u) steht „an“.\n- [Einstiegsquiz, 1.2a there is / there are] Welcher Satz ist richtig? (Im Bild ist eine Uhr.) Auswahl: There are a clock. | There am a clock. | There is a clock.\n  Ergebnis: There is a clock.\n  Weg: Ein Ding: There is. Mehrere Dinge: There are. Hier ist es eine Uhr → There is a clock. „There are a clock“ geht nicht – „are“ ist für mehrere Dinge.\n- [Einstiegsquiz, 1.2b can / can’t] Welcher Satz ist richtig? (swim) Auswahl: I can swim. | I cans swim. | I can to swim.\n  Ergebnis: I can swim.\n  Weg: Nach „can“ kommt das Verb ohne Zusatz. Hier: I can swim – kein -s, kein „to“. „I can to swim“ und „I can swims“ gehen nicht – da ist etwas zu viel.\n- [Einstiegsquiz, 1.3a Befehle im Klassenzimmer] Your teacher says: „Öffne dein Buch!“ What does she say in English? Auswahl: Opens your book! | Open your book! | You open book!\n  Ergebnis: Open your book!\n  Weg: Ein Befehl ist nur das Verb am Anfang. Hier: Open your book! „Opens your book“ geht nicht – beim Befehl gibt es kein -s.\n- [Übungsaufgaben 1, 1.1a I am, you are, he/she/it is] Mia is my friend. ___ ten years old. Auswahl: She am | She are | She is\n  Ergebnis: She is\n  Weg: Mädchen = she. Zu „she“ passt „is“. Hier: Mia = she → She is ten years old. (Kurz: She’s.) „She am“ und „She are“ gehen nicht.\n- [Übungsaufgaben 1, 1.1b a oder an?] Was ist richtig? (ruler) Auswahl: a ruler | an ruler | a eraser\n  Ergebnis: a ruler\n  Weg: Vor a, e, i, o, u steht „an“, sonst „a“. Ruler fängt mit „r“ an → a ruler. „an ruler“ geht nicht – „r“ ist kein Selbstlaut.\n- [Übungsaufgaben 1, 1.2a there is / there are] ___ three windows in our classroom. Auswahl: There am | There are | There is\n  Ergebnis: There are\n  Weg: Ein Ding: There is. Mehrere Dinge: There are. Hier sind es drei Fenster → There are three windows. „There is“ geht nicht – drei sind mehr als eins.\n- [Übungsaufgaben 1, 1.2b can / can’t] A fish ___ fly. Auswahl: can | cans | can’t\n  Ergebnis: can’t\n  Weg: „can“ heißt kann, „can’t“ heißt kann nicht. Ein Fisch kann nicht fliegen → A fish can’t fly. „can“ stimmt nicht – das würde heißen: Er kann fliegen.\n- [Übungsaufgaben 1, 1.3a Befehle im Klassenzimmer] It is quiet time. Your teacher says: ___ Auswahl: Don’t talk! | Not talk! | Don’t to talk!\n  Ergebnis: Don’t talk!\n  Weg: Verbot: „Don’t“ plus Verb. Hier: Don’t talk! = Sprich nicht! „Not talk“ und „Don’t to talk“ gehen nicht – nach „Don’t“ kommt gleich das Verb.\n- [Abschlussquiz, 1.1a I am, you are, he/she/it is] Tom and Ben are at school. What is the short form of „we are“? Auswahl: w’are | we’re | we’s\n  Ergebnis: we’re\n  Weg: Bei der Kurzform fällt das „a“ weg, dafür kommt ein Apostroph (’). we are → we’re. „we’s“ und „we’am“ gehen nicht – aus „are“ wird ’re.\n- [Abschlussquiz, 1.1b a oder an?] Before which letter do you say „an“? Auswahl: b | d | e\n  Ergebnis: e\n  Weg: Vor den Selbstlauten a, e, i, o, u sagt man „an“. Hier ist „e“ ein Selbstlaut → an egg. b, d und t sind keine Selbstlaute – da sagt man „a“: a bag.\n- [Abschlussquiz, 1.2a there is / there are] Welche Frage ist richtig? Auswahl: Is there a board in your room? | Are there a board in your room? | There is a board in your room?\n  Ergebnis: Is there a board in your room?\n  Weg: Ein Ding: Is there …? Mehrere Dinge: Are there …? Hier ist es ein board → Is there a board in your room? „Are there a board“ geht nicht – „are“ ist für mehrere Dinge.\n- [Abschlussquiz, 1.2b can / can’t] „Can you swim?“ Which answer is correct for „nein“? Auswahl: No, I amn’t. | No, I can’t. | No, I don’t.\n  Ergebnis: No, I can’t.\n  Weg: Auf eine Frage mit „can“ antwortest du auch mit „can“. Nein heißt: No, I can’t. „No, I don’t“ geht nicht – „don’t“ gehört nicht zu „can“.\n- [Abschlussquiz, 1.3a Befehle im Klassenzimmer] Welcher Satz ist höflich? Auswahl: Sit down now! | You sit down! | Sit down, please.\n  Ergebnis: Sit down, please.\n  Weg: Mit „please“ (bitte) klingt ein Befehl freundlich. Hier: Sit down, please. = Setz dich bitte. „Sit down now!“ und „You sit down!“ klingen unfreundlich.\n- [Übungsaufgaben 2, 1.1a I am, you are, he/she/it is] You are in class 5. Welcher Satz ist richtig? Auswahl: You’re in class 5. | You’m in class 5. | You’s in class 5.\n  Ergebnis: You’re in class 5.\n  Weg: Zu „you“ passt „are“. Kurz: you’re. Hier: You are in class 5 → You’re in class 5. „You’m“, „You’s“ und „You is“ gehen nicht.\n- [Übungsaufgaben 2, 1.1b a oder an?] Welcher Satz ist richtig? (orange and pen) Auswahl: I have an orange and an pen. | I have an orange and a pen. | I have a orange and a pen.\n  Ergebnis: I have an orange and a pen.\n  Weg: Vor a, e, i, o, u steht „an“, sonst „a“. Orange fängt mit „o“ an → an orange. Pen fängt mit „p“ an → a pen. Darum sind „a orange“ und „an pen“ falsch.\n- [Übungsaufgaben 2, 1.2a there is / there are] Welcher Satz ist richtig? (two clocks) Auswahl: There is two clocks on the wall. | There are a clock on the wall. | There are two clocks on the wall.\n  Ergebnis: There are two clocks on the wall.\n  Weg: Ein Ding: There is. Mehrere Dinge: There are. Hier sind es zwei Uhren → There are two clocks. „There is two clocks“ geht nicht – bei zwei Uhren muss „are“ stehen.\n- [Übungsaufgaben 2, 1.2b can / can’t] Welcher Satz ist richtig? (Anna and singing) Auswahl: She can sing. | She cans sing. | She can sings.\n  Ergebnis: She can sing.\n  Weg: „can“ bleibt immer gleich, auch bei she. Danach kommt das Verb ohne Zusatz. Hier: Anna = she → She can sing. „She cans“ und „She can sings“ gehen nicht – da ist ein -s zu viel.\n- [Übungsaufgaben 2, 1.3a Befehle im Klassenzimmer] Your friend runs in the classroom. What do you say? Auswahl: Don’t running! | Don’t run! | Not run!\n  Ergebnis: Don’t run!\n  Weg: Verbot: „Don’t“ plus Verb. Hier: Don’t run! = Renn nicht! „Not run“ und „Don’t running“ gehen nicht – nach „Don’t“ kommt nur das Verb.",
  "aufgaben": {
   "Welcher Satz ist richtig?": {
    "teil": "1.1a",
    "typ": "wahl",
    "ergebnis": "I am ten.",
    "optionen": [
     "I am ten.",
     "I is ten.",
     "I are ten."
    ]
   },
   "Welches Wort passt? ___ apple": {
    "teil": "1.1b",
    "typ": "wahl",
    "ergebnis": "an",
    "optionen": [
     "the an",
     "an",
     "a"
    ]
   },
   "Welcher Satz ist richtig? (Im Bild ist eine Uhr.)": {
    "teil": "1.2a",
    "typ": "wahl",
    "ergebnis": "There is a clock.",
    "optionen": [
     "There are a clock.",
     "There am a clock.",
     "There is a clock."
    ]
   },
   "Welcher Satz ist richtig? (swim)": {
    "teil": "1.2b",
    "typ": "wahl",
    "ergebnis": "I can swim.",
    "optionen": [
     "I can swim.",
     "I cans swim.",
     "I can to swim."
    ]
   },
   "Your teacher says: „Öffne dein Buch!“ What does she say in English?": {
    "teil": "1.3a",
    "typ": "wahl",
    "ergebnis": "Open your book!",
    "optionen": [
     "Opens your book!",
     "Open your book!",
     "You open book!"
    ]
   },
   "Mia is my friend. ___ ten years old.": {
    "teil": "1.1a",
    "typ": "wahl",
    "ergebnis": "She is",
    "optionen": [
     "She am",
     "She are",
     "She is"
    ]
   },
   "Was ist richtig? (ruler)": {
    "teil": "1.1b",
    "typ": "wahl",
    "ergebnis": "a ruler",
    "optionen": [
     "a ruler",
     "an ruler",
     "a eraser"
    ]
   },
   "___ three windows in our classroom.": {
    "teil": "1.2a",
    "typ": "wahl",
    "ergebnis": "There are",
    "optionen": [
     "There am",
     "There are",
     "There is"
    ]
   },
   "A fish ___ fly.": {
    "teil": "1.2b",
    "typ": "wahl",
    "ergebnis": "can’t",
    "optionen": [
     "can",
     "cans",
     "can’t"
    ]
   },
   "It is quiet time. Your teacher says: ___": {
    "teil": "1.3a",
    "typ": "wahl",
    "ergebnis": "Don’t talk!",
    "optionen": [
     "Don’t talk!",
     "Not talk!",
     "Don’t to talk!"
    ]
   },
   "Tom and Ben are at school. What is the short form of „we are“?": {
    "teil": "1.1a",
    "typ": "wahl",
    "ergebnis": "we’re",
    "optionen": [
     "w’are",
     "we’re",
     "we’s"
    ]
   },
   "Before which letter do you say „an“?": {
    "teil": "1.1b",
    "typ": "wahl",
    "ergebnis": "e",
    "optionen": [
     "b",
     "d",
     "e"
    ]
   },
   "Welche Frage ist richtig?": {
    "teil": "1.2a",
    "typ": "wahl",
    "ergebnis": "Is there a board in your room?",
    "optionen": [
     "Is there a board in your room?",
     "Are there a board in your room?",
     "There is a board in your room?"
    ]
   },
   "„Can you swim?“ Which answer is correct for „nein“?": {
    "teil": "1.2b",
    "typ": "wahl",
    "ergebnis": "No, I can’t.",
    "optionen": [
     "No, I amn’t.",
     "No, I can’t.",
     "No, I don’t."
    ]
   },
   "Welcher Satz ist höflich?": {
    "teil": "1.3a",
    "typ": "wahl",
    "ergebnis": "Sit down, please.",
    "optionen": [
     "Sit down now!",
     "You sit down!",
     "Sit down, please."
    ]
   },
   "You are in class 5. Welcher Satz ist richtig?": {
    "teil": "1.1a",
    "typ": "wahl",
    "ergebnis": "You’re in class 5.",
    "optionen": [
     "You’re in class 5.",
     "You’m in class 5.",
     "You’s in class 5."
    ]
   },
   "Welcher Satz ist richtig? (orange and pen)": {
    "teil": "1.1b",
    "typ": "wahl",
    "ergebnis": "I have an orange and a pen.",
    "optionen": [
     "I have an orange and an pen.",
     "I have an orange and a pen.",
     "I have a orange and a pen."
    ]
   },
   "Welcher Satz ist richtig? (two clocks)": {
    "teil": "1.2a",
    "typ": "wahl",
    "ergebnis": "There are two clocks on the wall.",
    "optionen": [
     "There is two clocks on the wall.",
     "There are a clock on the wall.",
     "There are two clocks on the wall."
    ]
   },
   "Welcher Satz ist richtig? (Anna and singing)": {
    "teil": "1.2b",
    "typ": "wahl",
    "ergebnis": "She can sing.",
    "optionen": [
     "She can sing.",
     "She cans sing.",
     "She can sings."
    ]
   },
   "Your friend runs in the classroom. What do you say?": {
    "teil": "1.3a",
    "typ": "wahl",
    "ergebnis": "Don’t run!",
    "optionen": [
     "Don’t running!",
     "Don’t run!",
     "Not run!"
    ]
   },
   "Welcher Satz ist richtig? (Sam)": {
    "teil": "1.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Lena and I ___ friends.": {
    "teil": "1.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Was ist richtig? (egg)": {
    "teil": "1.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Schau aufs Bild: eine Tafel, vier Stühle. Welcher Satz ist richtig?": {
    "teil": "1.2a",
    "typ": "wahl",
    "klausur": true
   },
   "A dog ___ read a book.": {
    "teil": "1.2b",
    "typ": "wahl",
    "klausur": true
   },
   "„Can he play the guitar?“ Which short answer is correct for „ja“?": {
    "teil": "1.2b",
    "typ": "wahl",
    "klausur": true
   },
   "Welcher Satz ist richtig? (the door)": {
    "teil": "1.3a",
    "typ": "wahl",
    "klausur": true
   },
   "Was bedeutet „Don’t shout!“?": {
    "teil": "1.3a",
    "typ": "wahl",
    "klausur": true
   }
  }
 },
 "e5-2-simple-present": {
  "titel": "Simple present",
  "fach": "englisch",
  "klasse": 5,
  "teile": {
   "2.1a": "Das -s bei he, she, it",
   "2.1b": "don’t und doesn’t",
   "2.2a": "Fragen mit do und does",
   "2.2b": "always, often, never"
  },
  "text": "# Simple present (Englisch, Klasse 5)\n\n## Merkkästen der Arbeitsblätter\n### 2.1a Das -s bei he, she, it\nhe, she, it – das s muss mit!\nI play · you play · we play · they play  |  he plays · she plays · it plays\n1 Wer? he / she / it → Verb + s: Tom plays.\n2 watch, go → -es: She watches. He goes.\n3 study → -ies: It studies. (play bleibt: plays)\n\n### 2.1b don’t und doesn’t\ndoesn’t + Verb ohne s!\nI / you / we / they → don’t  ·  he / she / it → doesn’t\n1 Wer? She → doesn’t\n2 Verb ohne -s: play\n3 She doesn’t play.\n(nicht: doesn’t plays)\n\n### 2.2a Fragen mit do und does\nDo you …?   Does she …?\nDo + I / you / we / they  ·  Does + he / she / it  – dann das Verb ohne s.\n1 Does Lisa like cats?\n2 Ja: Yes, she does.\n3 Nein: No, she doesn’t.\n\n### 2.2b always, often, never\nI often\nplay football.\nDas Wort steht vor dem Verb. Nur bei am / is / are steht es danach: She is always happy.\n1 Wie oft? always, often, sometimes, never\n2 Vor das Verb: He never eats fish.\n3 he/she/it: das -s bleibt!\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 2.1a Das -s bei he, she, it] Welcher Satz ist richtig? (Tom, football) Auswahl: Tom plays football. | Tom play football. | Tom plays football s.\n  Ergebnis: Tom plays football.\n  Weg: Bei he, she, it hängt ein -s am Verb. Hier ist es „Tom“ = he → Tom plays football. „Tom play“ geht nicht – da fehlt das -s.\n- [Einstiegsquiz, 2.1b don’t und doesn’t] Welcher Satz ist richtig? (fish) Auswahl: I not like fish. | I don’t like fish. | I doesn’t like fish.\n  Ergebnis: I don’t like fish.\n  Weg: Bei I, you, we, they sagt man „don’t“ (= nicht). Danach bleibt das Verb gleich. Hier: I don’t like fish. „I doesn’t“ geht nicht – „doesn’t“ ist nur für he, she, it.\n- [Einstiegsquiz, 2.2a Fragen mit do und does] Welche Frage ist richtig? (pet) Auswahl: Does you have a pet? | You have a pet do? | Do you have a pet?\n  Ergebnis: Do you have a pet?\n  Weg: Bei I, you, we, they fragt man mit „Do“. Danach bleibt das Verb gleich. Hier: Do you have a pet? „Does you“ geht nicht – „Does“ ist nur für he, she, it.\n- [Einstiegsquiz, 2.2b always, often, never] Welcher Satz ist richtig? (football) Auswahl: I often play football. | I play often football. | Often I plays football.\n  Ergebnis: I often play football.\n  Weg: Das Wort für „wie oft“ steht vor dem Verb. Hier: I often play football. „I play often football“ geht nicht – „often“ gehört direkt vor „play“.\n- [Übungsaufgaben 1, 2.1a Das -s bei he, she, it] My cat ___ on the sofa. Auswahl: sleeping | sleeps | sleep\n  Ergebnis: sleeps\n  Weg: Bei he, she, it hängt ein -s am Verb. Hier ist „my cat“ = it → My cat sleeps. „sleep“ geht nicht – da fehlt das -s.\n- [Übungsaufgaben 1, 2.1b don’t und doesn’t] We ___ have a dog. Auswahl: doesn’t | isn’t | don’t\n  Ergebnis: don’t\n  Weg: Bei I, you, we, they sagt man „don’t“. Hier ist es „we“ → We don’t have a dog. „doesn’t“ geht nicht – das ist nur für he, she, it.\n- [Übungsaufgaben 1, 2.2a Fragen mit do und does] ___ your mum work in Plymouth? Auswahl: Does | Do | Is\n  Ergebnis: Does\n  Weg: Bei he, she, it fragt man mit „Does“. Hier ist „your mum“ = she → Does your mum work in Plymouth? „Do“ geht nicht – das ist für I, you, we, they.\n- [Übungsaufgaben 1, 2.2b always, often, never] Mia eats an apple every day. She ___ eats an apple. Auswahl: sometimes | always | never\n  Ergebnis: always\n  Weg: always = immer, never = nie, sometimes = manchmal. Mia isst jeden Tag einen Apfel → She always eats an apple. „never“ (nie) passt nicht – sie isst ihn ja jeden Tag.\n- [Abschlussquiz, 2.1a Das -s bei he, she, it] Welches Verb passt? She ___ TV every evening. Auswahl: watchs | watch | watches\n  Ergebnis: watches\n  Weg: Nach -ch, -sh, -s, -x kommt bei he, she, it ein -es. Hier: She watches TV. „watchs“ geht nicht – das kann man nicht gut sprechen, es muss -es sein.\n- [Abschlussquiz, 2.1b don’t und doesn’t] Welcher Satz ist richtig? (spiders) Auswahl: She doesn’t like spiders. | She doesn’t likes spiders. | She don’t like spiders.\n  Ergebnis: She doesn’t like spiders.\n  Weg: Bei he, she, it sagt man „doesn’t“ (= nicht). Danach fällt das -s weg. Hier: She doesn’t like spiders. „She don’t“ geht nicht, und „doesn’t likes“ hat ein -s zu viel.\n- [Abschlussquiz, 2.2a Fragen mit do und does] Was antwortest du? „Does Lisa like cats?“ (Yes!) Auswahl: Yes, she likes. | Yes, she does. | Yes, she do.\n  Ergebnis: Yes, she does.\n  Weg: Die Kurzantwort wiederholt das Hilfswort der Frage. Hier fragt „Does“ → Yes, she does. „Yes, she do“ geht nicht – bei she heißt es „does“.\n- [Abschlussquiz, 2.2b always, often, never] Welcher Satz ist richtig? (happy) Auswahl: She always is happy. | Always she is happy. | She is always happy.\n  Ergebnis: She is always happy.\n  Weg: Bei is, am, are steht das Wort für „wie oft“ danach. Hier: She is always happy. „She always is“ geht nicht – bei „is“ kommt „always“ erst dahinter.\n- [Übungsaufgaben 2, 2.1a Das -s bei he, she, it] Welcher Satz ist richtig? (study) Auswahl: He studies at home. | He studys at home. | He study at home.\n  Ergebnis: He studies at home.\n  Weg: Endet ein Verb auf Mitlaut + y, wird bei he, she, it aus dem y ein -ies. Hier: study → He studies at home. „studys“ geht nicht, und „study“ ohne -ies passt nicht zu he.\n- [Übungsaufgaben 2, 2.1b don’t und doesn’t] Zog is an alien. He ___ eat pizza. Auswahl: doesn’t eats | doesn’t | don’t\n  Ergebnis: doesn’t\n  Weg: Bei he, she, it sagt man „doesn’t“. Danach fällt das -s weg. Hier: Zog = he → He doesn’t eat pizza. „don’t“ ist für I, you, we, they, und „eats“ hat ein -s zu viel.\n- [Übungsaufgaben 2, 2.2a Fragen mit do und does] Welche Frage ist richtig? (guitar) Auswahl: Does Tom plays the guitar? | Do Tom play the guitar? | Does Tom play the guitar?\n  Ergebnis: Does Tom play the guitar?\n  Weg: Bei he, she, it fragt man mit „Does“. Danach fällt das -s weg. Hier: Tom = he → Does Tom play the guitar? „Does Tom plays“ hat ein -s zu viel, und „Do“ passt nicht zu Tom.\n- [Übungsaufgaben 2, 2.2b always, often, never] Welcher Satz ist richtig? (My dad never eats breakfast.) Auswahl: My dad never eats breakfast. | My dad eats never breakfast. | My dad never eat breakfast.\n  Ergebnis: My dad never eats breakfast.\n  Weg: „never“ (= nie) steht vor dem Verb. Bei he bleibt das -s am Verb. Hier: My dad never eats breakfast. „eats never“ geht nicht – „never“ muss vor das Verb. „never eat“ hat kein -s.",
  "aufgaben": {
   "Welcher Satz ist richtig? (Tom, football)": {
    "teil": "2.1a",
    "typ": "wahl",
    "ergebnis": "Tom plays football.",
    "optionen": [
     "Tom plays football.",
     "Tom play football.",
     "Tom plays football s."
    ]
   },
   "Welcher Satz ist richtig? (fish)": {
    "teil": "2.1b",
    "typ": "wahl",
    "ergebnis": "I don’t like fish.",
    "optionen": [
     "I not like fish.",
     "I don’t like fish.",
     "I doesn’t like fish."
    ]
   },
   "Welche Frage ist richtig? (pet)": {
    "teil": "2.2a",
    "typ": "wahl",
    "ergebnis": "Do you have a pet?",
    "optionen": [
     "Does you have a pet?",
     "You have a pet do?",
     "Do you have a pet?"
    ]
   },
   "Welcher Satz ist richtig? (football)": {
    "teil": "2.2b",
    "typ": "wahl",
    "ergebnis": "I often play football.",
    "optionen": [
     "I often play football.",
     "I play often football.",
     "Often I plays football."
    ]
   },
   "My cat ___ on the sofa.": {
    "teil": "2.1a",
    "typ": "wahl",
    "ergebnis": "sleeps",
    "optionen": [
     "sleeping",
     "sleeps",
     "sleep"
    ]
   },
   "We ___ have a dog.": {
    "teil": "2.1b",
    "typ": "wahl",
    "ergebnis": "don’t",
    "optionen": [
     "doesn’t",
     "isn’t",
     "don’t"
    ]
   },
   "___ your mum work in Plymouth?": {
    "teil": "2.2a",
    "typ": "wahl",
    "ergebnis": "Does",
    "optionen": [
     "Does",
     "Do",
     "Is"
    ]
   },
   "Mia eats an apple every day. She ___ eats an apple.": {
    "teil": "2.2b",
    "typ": "wahl",
    "ergebnis": "always",
    "optionen": [
     "sometimes",
     "always",
     "never"
    ]
   },
   "Welches Verb passt? She ___ TV every evening.": {
    "teil": "2.1a",
    "typ": "wahl",
    "ergebnis": "watches",
    "optionen": [
     "watchs",
     "watch",
     "watches"
    ]
   },
   "Welcher Satz ist richtig? (spiders)": {
    "teil": "2.1b",
    "typ": "wahl",
    "ergebnis": "She doesn’t like spiders.",
    "optionen": [
     "She doesn’t like spiders.",
     "She doesn’t likes spiders.",
     "She don’t like spiders."
    ]
   },
   "Was antwortest du? „Does Lisa like cats?“ (Yes!)": {
    "teil": "2.2a",
    "typ": "wahl",
    "ergebnis": "Yes, she does.",
    "optionen": [
     "Yes, she likes.",
     "Yes, she does.",
     "Yes, she do."
    ]
   },
   "Welcher Satz ist richtig? (happy)": {
    "teil": "2.2b",
    "typ": "wahl",
    "ergebnis": "She is always happy.",
    "optionen": [
     "She always is happy.",
     "Always she is happy.",
     "She is always happy."
    ]
   },
   "Welcher Satz ist richtig? (study)": {
    "teil": "2.1a",
    "typ": "wahl",
    "ergebnis": "He studies at home.",
    "optionen": [
     "He studies at home.",
     "He studys at home.",
     "He study at home."
    ]
   },
   "Zog is an alien. He ___ eat pizza.": {
    "teil": "2.1b",
    "typ": "wahl",
    "ergebnis": "doesn’t",
    "optionen": [
     "doesn’t eats",
     "doesn’t",
     "don’t"
    ]
   },
   "Welche Frage ist richtig? (guitar)": {
    "teil": "2.2a",
    "typ": "wahl",
    "ergebnis": "Does Tom play the guitar?",
    "optionen": [
     "Does Tom plays the guitar?",
     "Do Tom play the guitar?",
     "Does Tom play the guitar?"
    ]
   },
   "Welcher Satz ist richtig? (My dad never eats breakfast.)": {
    "teil": "2.2b",
    "typ": "wahl",
    "ergebnis": "My dad never eats breakfast.",
    "optionen": [
     "My dad never eats breakfast.",
     "My dad eats never breakfast.",
     "My dad never eat breakfast."
    ]
   },
   "Sam and Ben ___ football every Saturday.": {
    "teil": "2.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Mia ___ a dog and a rabbit.": {
    "teil": "2.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Anna ___ play tennis.": {
    "teil": "2.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Welcher Satz ist richtig? (London)": {
    "teil": "2.1b",
    "typ": "wahl",
    "klausur": true
   },
   "___ they live in Plymouth?": {
    "teil": "2.2a",
    "typ": "wahl",
    "klausur": true
   },
   "„Do you like maths?“ – „No, ___.“": {
    "teil": "2.2a",
    "typ": "wahl",
    "klausur": true
   },
   "Lena plays tennis on Monday, Tuesday, Wednesday, Thursday and Friday. She ___ plays tennis.": {
    "teil": "2.2b",
    "typ": "wahl",
    "klausur": true
   },
   "Welcher Satz ist richtig? (fish, never)": {
    "teil": "2.2b",
    "typ": "wahl",
    "klausur": true
   }
  }
 },
 "e5-3-besitz": {
  "titel": "Besitz",
  "fach": "englisch",
  "klasse": 5,
  "teile": {
   "3.1a": "my, your, his, her, its, our, their",
   "3.1b": "Sam’s dog – der s-Genitiv"
  },
  "text": "# Besitz (Englisch, Klasse 5)\n\n## Merkkästen der Arbeitsblätter\n### 3.1a my, your, his, her, its, our, their\nMit my, your, his … sagst du, wem etwas gehört. Vor das Wort kommt kein „the“.\nI → myhe → hisit → itsyou → your\nwe → ourshe → herthey → their\n1 Wer hat es? Tom (he)\n2 Wort wählen: his\n3 His dog is big.\nVorsicht: its = sein/ihr (Tier, Ding) · it’s = it is.\n\n### 3.1b Sam’s dog – der s-Genitiv\nDer Besitzer bekommt ein ’s. Danach steht, was ihm gehört: Sam’s dog = der Hund von Sam\n1 Besitzer: Sam\n2 Anhängen: Sam’s\n3 Dann das Ding: Sam’s dog\nMehrere Besitzer mit -s: nur ein ’ → the girls’ room (das Zimmer der Mädchen)\nFrage dazu: Whose dog is this? = Wessen Hund ist das?\n🐶\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 3.1a my, your, his, her, its, our, their] I have a cat. ___ cat is white. Auswahl: My | Me | I\n  Ergebnis: My\n  Weg: my = mein/meine. Zu „I“ gehört my. Hier: I have a cat → my cat. „Me“ und „I“ zeigen nicht, wem etwas gehört.\n- [Einstiegsquiz, 3.1b Sam’s dog – der s-Genitiv] Was ist richtig? (der Hund von Sam) Auswahl: dog Sam’s | Sam’s dog | Sams dog\n  Ergebnis: Sam’s dog\n  Weg: Der Besitzer kommt zuerst und bekommt ’s. Hier: Sam → Sam’s dog = Sams Hund. „Sams dog“ geht nicht – da fehlt der Apostroph (’).\n- [Übungsaufgaben 1, 3.1a my, your, his, her, its, our, their] Mia is my friend. ___ bag is red. Auswahl: His | My | Her\n  Ergebnis: Her\n  Weg: he → his, she → her, I → my. Mia ist ein Mädchen = she → Her bag is red. „His“ ist für Jungen, „My“ für mich selbst.\n- [Übungsaufgaben 1, 3.1b Sam’s dog – der s-Genitiv] Complete the sentence: This is ___ pencil case. Auswahl: Ben’s | Bens | Ben\n  Ergebnis: Ben’s\n  Weg: Der Besitzer bekommt ’s: Ben → Ben’s. Hier: Ben’s pencil case = Bens Etui. „Bens“ geht nicht – der Apostroph fehlt. „Ben“ allein zeigt keinen Besitz.\n- [Abschlussquiz, 3.1a my, your, his, her, its, our, their] Welches Wort passt zu „we“? Auswahl: your | our | their\n  Ergebnis: our\n  Weg: we → our (= unser). Hier: Our school = unsere Schule. „their“ ist für they (sie), „your“ für you (du).\n- [Abschlussquiz, 3.1b Sam’s dog – der s-Genitiv] Wem gehört die Tasche? (die Tasche von Lily) Auswahl: It’s Lilys bag. | It’s bag Lily. | It’s Lily’s bag.\n  Ergebnis: It’s Lily’s bag.\n  Weg: Auf „Whose …?“ (= wessen?) antwortest du mit Besitzer + ’s + Sache. Hier: It’s Lily’s bag. „Lilys“ hat keinen Apostroph, und „bag Lily“ hat die falsche Reihenfolge.\n- [Übungsaufgaben 2, 3.1a my, your, his, her, its, our, their] The dog likes ___ ball. Auswahl: its | it’s | his\n  Ergebnis: its\n  Weg: its = sein/ihr bei Tieren und Dingen. it’s heißt „it is“. Hier gehört der Ball dem Hund → its ball. „it’s ball“ geht nicht – das hieße „it is ball“. „his“ ist für Jungen.\n- [Übungsaufgaben 2, 3.1b Sam’s dog – der s-Genitiv] The two girls have a room. It is the ___ room. Auswahl: girls | girls’ | girl’s\n  Ergebnis: girls’\n  Weg: Bei mehreren Mädchen endet girls schon auf -s. Dann kommt nur ein ’ dahinter. Hier: the girls’ room. „girl’s“ wäre nur ein Mädchen, und „girls“ allein zeigt keinen Besitz.",
  "aufgaben": {
   "I have a cat. ___ cat is white.": {
    "teil": "3.1a",
    "typ": "wahl",
    "ergebnis": "My",
    "optionen": [
     "My",
     "Me",
     "I"
    ]
   },
   "Was ist richtig? (der Hund von Sam)": {
    "teil": "3.1b",
    "typ": "wahl",
    "ergebnis": "Sam’s dog",
    "optionen": [
     "dog Sam’s",
     "Sam’s dog",
     "Sams dog"
    ]
   },
   "Mia is my friend. ___ bag is red.": {
    "teil": "3.1a",
    "typ": "wahl",
    "ergebnis": "Her",
    "optionen": [
     "His",
     "My",
     "Her"
    ]
   },
   "Complete the sentence: This is ___ pencil case.": {
    "teil": "3.1b",
    "typ": "wahl",
    "ergebnis": "Ben’s",
    "optionen": [
     "Ben’s",
     "Bens",
     "Ben"
    ]
   },
   "Welches Wort passt zu „we“?": {
    "teil": "3.1a",
    "typ": "wahl",
    "ergebnis": "our",
    "optionen": [
     "your",
     "our",
     "their"
    ]
   },
   "Wem gehört die Tasche? (die Tasche von Lily)": {
    "teil": "3.1b",
    "typ": "wahl",
    "ergebnis": "It’s Lily’s bag.",
    "optionen": [
     "It’s Lilys bag.",
     "It’s bag Lily.",
     "It’s Lily’s bag."
    ]
   },
   "The dog likes ___ ball.": {
    "teil": "3.1a",
    "typ": "wahl",
    "ergebnis": "its",
    "optionen": [
     "its",
     "it’s",
     "his"
    ]
   },
   "The two girls have a room. It is the ___ room.": {
    "teil": "3.1b",
    "typ": "wahl",
    "ergebnis": "girls’",
    "optionen": [
     "girls",
     "girls’",
     "girl’s"
    ]
   },
   "Tom and I have a dog. ___ dog is brown.": {
    "teil": "3.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Kim and Joe are twins. ___ mum is nice.": {
    "teil": "3.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Is this ___ pen? (Du fragst einen Freund.)": {
    "teil": "3.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Welcher Satz ist richtig?": {
    "teil": "3.1b",
    "typ": "wahl",
    "klausur": true
   },
   "„the boys’ football“ – wie viele Jungen sind das?": {
    "teil": "3.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Eva is the sister of Max. Welcher Satz ist richtig?": {
    "teil": "3.1b",
    "typ": "wahl",
    "klausur": true
   }
  }
 },
 "e5-4-simple-past": {
  "titel": "Simple past",
  "fach": "englisch",
  "klasse": 5,
  "teile": {
   "4.1a": "was und were",
   "4.1b": "Verben mit -ed",
   "4.1c": "Unregelmäßige Verben",
   "4.2a": "did und didn’t"
  },
  "text": "# Simple past (Englisch, Klasse 5)\n\n## Merkkästen der Arbeitsblätter\n### 4.1a was und were\nGestern, letzte Woche, am Wochenende: Dann sagst du was oder were (statt am / is / are).\nI / he / she / it → was  ·  you / we / they → were\nYesterday I was at the beach.  We were in Plymouth.\n1 Wer ist es? (I, we, …)\n2 was oder were?\n3 Nein: wasn’t / weren’t\n\n### 4.1b Verben mit -ed\nRegelmäßige Verben bekommen in der Vergangenheit ein -ed. Für alle Personen gleich!\nplay → played  ·  walk → walked\nYesterday I played football.  She walked the dog.\ne am Ende: nur -d → like → liked\ny → ied: try → tried\nDoppelt: stop → stopped\n\n### 4.1c Unregelmäßige Verben\nManche Verben haben kein -ed. Ihre Form musst du lernen, wie Vokabeln:\ngo → went  ·  see → saw  ·  have → had  ·  eat → ate\nYesterday I went to the sea and saw a ship.\n1 Kein -ed!\n2 Neue Form lernen\n3 Gleich für alle: I went, we went\n\n### 4.2a did und didn’t\nFragen und „nicht“ in der Vergangenheit: did und didn’t. Danach kommt immer die Grundform (kein -ed!).\nDid you play?  ·  I didn’t play.\nDid you see the ship? – Yes, I did. / No, I didn’t.\n1 Frage: Did + Person + Verb\n2 Nein: didn’t + Verb\n3 Verb bleibt: play, nicht played\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 4.1a was und were] Yesterday I ___ at the beach. Auswahl: was | were | am\n  Ergebnis: was\n  Weg: was und were sind die Vergangenheit von am, is, are. Zu „I“ passt was. Hier: Yesterday I was at the beach. „were“ ist für you, we, they, und „am“ ist Gegenwart.\n- [Einstiegsquiz, 4.1b Verben mit -ed] Welches Wort passt? Yesterday I ___ football. Auswahl: plaied | played | playd\n  Ergebnis: played\n  Weg: Regelmäßige Verben bekommen in der Vergangenheit -ed. Hier: play → played. „playd“ und „plaied“ gehen nicht – einfach -ed anhängen.\n- [Einstiegsquiz, 4.1c Unregelmäßige Verben] Wie heißt „go“ in der Vergangenheit? Auswahl: goed | gone to | went\n  Ergebnis: went\n  Weg: Unregelmäßige Verben ändern ihre Form, sie bekommen kein -ed. Hier: go → went. „goed“ gibt es nicht.\n- [Einstiegsquiz, 4.2a did und didn’t] Welcher Satz ist richtig? (football) Auswahl: Did you play football? | Did you played football? | Do you played football?\n  Ergebnis: Did you play football?\n  Weg: Frage in der Vergangenheit: Did + Person + Verb ohne Zusatz. Hier: Did you play football? „Did you played“ hat ein -ed zu viel – „Did“ zeigt schon die Vergangenheit.\n- [Übungsaufgaben 1, 4.1a was und were] We ___ in Plymouth last weekend. Auswahl: are | were | was\n  Ergebnis: were\n  Weg: I, he, she, it → was. You, we, they → were. Hier ist es „we“ → We were in Plymouth. „was“ passt nicht zu „we“, und „are“ ist Gegenwart.\n- [Übungsaufgaben 1, 4.1b Verben mit -ed] Last Saturday Mia ___ her granny. Auswahl: visits | visit | visited\n  Ergebnis: visited\n  Weg: „Last Saturday“ = letzten Samstag, also Vergangenheit. Regelmäßig: -ed. Hier: visit → visited. „visits“ und „visit“ sind Gegenwart.\n- [Übungsaufgaben 1, 4.1c Unregelmäßige Verben] Yesterday we ___ pizza for lunch. Auswahl: had | haved | have\n  Ergebnis: had\n  Weg: Unregelmäßige Verben bekommen kein -ed. Hier: have → had → We had pizza. „haved“ gibt es nicht, und „have“ ist Gegenwart.\n- [Übungsaufgaben 1, 4.2a did und didn’t] She ___ go to school on Sunday. Auswahl: didn’t went | didn’t | doesn’t\n  Ergebnis: didn’t\n  Weg: Verneinung in der Vergangenheit: didn’t + Verb ohne Zusatz. Hier: She didn’t go to school. „didn’t went“ hat zu viel, und „doesn’t“ ist Gegenwart.\n- [Abschlussquiz, 4.1a was und were] Welcher Satz ist richtig? (the sea) Auswahl: The sea were cold. | The sea are cold. | The sea was cold.\n  Ergebnis: The sea was cold.\n  Weg: „The sea“ kannst du durch „it“ ersetzen. Zu it passt was. Hier: The sea was cold. „were“ und „are“ passen nicht zu „it“.\n- [Abschlussquiz, 4.1b Verben mit -ed] Wie heißt „stop“ in der Vergangenheit? Auswahl: stopped | stoped | stopt\n  Ergebnis: stopped\n  Weg: Nach kurzem Selbstlaut (hier o) wird der letzte Buchstabe doppelt: stop → stopp-. Dazu kommt -ed → stopped. „stoped“ hat nur ein p, „stopt“ hat kein -ed.\n- [Abschlussquiz, 4.1c Unregelmäßige Verben] Wie heißt „see“ in der Vergangenheit? Auswahl: seen | saw | seed\n  Ergebnis: saw\n  Weg: Unregelmäßige Verben bekommen kein -ed. Hier: see → saw. „seed“ gibt es nicht, und „seen“ ist eine andere Form.\n- [Abschlussquiz, 4.2a did und didn’t] Welche Antwort ist richtig? „Did you watch TV?“ Auswahl: No, I don’t. | No, I didn’t watched. | No, I didn’t.\n  Ergebnis: No, I didn’t.\n  Weg: Die Kurzantwort wiederholt „did“. Bei Nein: No, I didn’t. „don’t“ ist Gegenwart, und „didn’t watched“ hat ein -ed zu viel.\n- [Übungsaufgaben 2, 4.1a was und were] My friends ___ at the sea yesterday. Auswahl: were | was | is\n  Ergebnis: were\n  Weg: „My friends“ = they. Zu they passt were. Hier: My friends were at the sea. „was“ ist für eine Person allein, „is“ ist Gegenwart.\n- [Übungsaufgaben 2, 4.1b Verben mit -ed] Welcher Satz ist richtig? (a new game) Auswahl: I tryied a new game. | I tried a new game. | I tryed a new game.\n  Ergebnis: I tried a new game.\n  Weg: Endet ein Verb auf Mitlaut + y, wird aus y ein -ied. Hier: try → tried. „tryed“ und „tryied“ gehen nicht.\n- [Übungsaufgaben 2, 4.1c Unregelmäßige Verben] Last week we ___ a big ship. Auswahl: see | seed | saw\n  Ergebnis: saw\n  Weg: „Last week“ = letzte Woche, also Vergangenheit. Hier: see → saw → we saw a big ship. „see“ ist Gegenwart, und „seed“ gibt es nicht.\n- [Übungsaufgaben 2, 4.2a did und didn’t] Welche Frage ist richtig? Auswahl: Did they go to the sea? | Did they went to the sea? | Do they went to the sea?\n  Ergebnis: Did they go to the sea?\n  Weg: Nach „Did“ bleibt das Verb ohne Zusatz. Hier: Did they go to the sea? „went“ wäre doppelt Vergangenheit, und „Do“ ist Gegenwart.",
  "aufgaben": {
   "Yesterday I ___ at the beach.": {
    "teil": "4.1a",
    "typ": "wahl",
    "ergebnis": "was",
    "optionen": [
     "was",
     "were",
     "am"
    ]
   },
   "Welches Wort passt? Yesterday I ___ football.": {
    "teil": "4.1b",
    "typ": "wahl",
    "ergebnis": "played",
    "optionen": [
     "plaied",
     "played",
     "playd"
    ]
   },
   "Wie heißt „go“ in der Vergangenheit?": {
    "teil": "4.1c",
    "typ": "wahl",
    "ergebnis": "went",
    "optionen": [
     "goed",
     "gone to",
     "went"
    ]
   },
   "Welcher Satz ist richtig? (football)": {
    "teil": "4.2a",
    "typ": "wahl",
    "ergebnis": "Did you play football?",
    "optionen": [
     "Did you play football?",
     "Did you played football?",
     "Do you played football?"
    ]
   },
   "We ___ in Plymouth last weekend.": {
    "teil": "4.1a",
    "typ": "wahl",
    "ergebnis": "were",
    "optionen": [
     "are",
     "were",
     "was"
    ]
   },
   "Last Saturday Mia ___ her granny.": {
    "teil": "4.1b",
    "typ": "wahl",
    "ergebnis": "visited",
    "optionen": [
     "visits",
     "visit",
     "visited"
    ]
   },
   "Yesterday we ___ pizza for lunch.": {
    "teil": "4.1c",
    "typ": "wahl",
    "ergebnis": "had",
    "optionen": [
     "had",
     "haved",
     "have"
    ]
   },
   "She ___ go to school on Sunday.": {
    "teil": "4.2a",
    "typ": "wahl",
    "ergebnis": "didn’t",
    "optionen": [
     "didn’t went",
     "didn’t",
     "doesn’t"
    ]
   },
   "Welcher Satz ist richtig? (the sea)": {
    "teil": "4.1a",
    "typ": "wahl",
    "ergebnis": "The sea was cold.",
    "optionen": [
     "The sea were cold.",
     "The sea are cold.",
     "The sea was cold."
    ]
   },
   "Wie heißt „stop“ in der Vergangenheit?": {
    "teil": "4.1b",
    "typ": "wahl",
    "ergebnis": "stopped",
    "optionen": [
     "stopped",
     "stoped",
     "stopt"
    ]
   },
   "Wie heißt „see“ in der Vergangenheit?": {
    "teil": "4.1c",
    "typ": "wahl",
    "ergebnis": "saw",
    "optionen": [
     "seen",
     "saw",
     "seed"
    ]
   },
   "Welche Antwort ist richtig? „Did you watch TV?“": {
    "teil": "4.2a",
    "typ": "wahl",
    "ergebnis": "No, I didn’t.",
    "optionen": [
     "No, I don’t.",
     "No, I didn’t watched.",
     "No, I didn’t."
    ]
   },
   "My friends ___ at the sea yesterday.": {
    "teil": "4.1a",
    "typ": "wahl",
    "ergebnis": "were",
    "optionen": [
     "were",
     "was",
     "is"
    ]
   },
   "Welcher Satz ist richtig? (a new game)": {
    "teil": "4.1b",
    "typ": "wahl",
    "ergebnis": "I tried a new game.",
    "optionen": [
     "I tryied a new game.",
     "I tried a new game.",
     "I tryed a new game."
    ]
   },
   "Last week we ___ a big ship.": {
    "teil": "4.1c",
    "typ": "wahl",
    "ergebnis": "saw",
    "optionen": [
     "see",
     "seed",
     "saw"
    ]
   },
   "Welche Frage ist richtig?": {
    "teil": "4.2a",
    "typ": "wahl",
    "ergebnis": "Did they go to the sea?",
    "optionen": [
     "Did they go to the sea?",
     "Did they went to the sea?",
     "Do they went to the sea?"
    ]
   },
   "Yesterday the weather ___ sunny.": {
    "teil": "4.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Mum and Dad ___ at home last night.": {
    "teil": "4.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Last weekend Ben ___ the dog.": {
    "teil": "4.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Welcher Satz ist richtig? (the film)": {
    "teil": "4.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Welcher Satz ist richtig? (Plymouth)": {
    "teil": "4.1c",
    "typ": "wahl",
    "klausur": true
   },
   "Yesterday I ___ a sandwich.": {
    "teil": "4.1c",
    "typ": "wahl",
    "klausur": true
   },
   "Did you see the dolphins? – No, I ___.": {
    "teil": "4.2a",
    "typ": "wahl",
    "klausur": true
   },
   "Welcher Satz ist richtig? (no football)": {
    "teil": "4.2a",
    "typ": "wahl",
    "klausur": true
   }
  }
 },
 "e5-5-present-progressive": {
  "titel": "Present progressive",
  "fach": "englisch",
  "klasse": 5,
  "teile": {
   "5.1a": "I am playing – was passiert gerade?",
   "5.1b": "Are you swimming? – Fragen und Verneinung"
  },
  "text": "# Present progressive (Englisch, Klasse 5)\n\n## Merkkästen der Arbeitsblätter\n### 5.1a I am playing – was passiert gerade?\nWas passiert gerade jetzt? Dann nimmst du: am / is / are + -ing\nI am swimming.   Tom is eating an ice cream.\n1 I → am, he/she/it → is, you/we/they → are\n2 Verb + -ing: play → playing\n3 Achtung: swim → swimming, make → making\n🏖️\n\n### 5.1b Are you swimming? – Fragen und Verneinung\nFrage: Are you swimming?\n– Yes, I am. / No, I’m not.\nNein: He isn’t swimming.\n(is not = isn’t, are not = aren’t)\n1 Frage: am / is / are nach vorn\n2 Nein: not hinter am / is / are\n3 Kurzantwort: Yes, he is. / No, he isn’t.\n🌊\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 5.1a I am playing – was passiert gerade?] Tom is at the beach right now. Welcher Satz ist richtig? Auswahl: Tom is swimming. | Tom swimming. | Tom is swim. | Tom are swimming.\n  Ergebnis: Tom is swimming.\n  Weg: Was gerade passiert: am/is/are + Verb mit -ing. Hier ist „Tom“ = he → Tom is swimming. „Tom swimming“ geht nicht – da fehlt „is“. „Tom are“ passt nicht zu he.\n- [Einstiegsquiz, 5.1b Are you swimming? – Fragen und Verneinung] Welche Frage ist richtig? Auswahl: Are you swim? | Are you swimming? | You are swimming? | Do you swimming?\n  Ergebnis: Are you swimming?\n  Weg: In der Frage kommt am/is/are nach vorn, dann das Verb mit -ing. Hier: Are you swimming? „Do you swimming“ geht nicht – bei -ing nimmt man nicht „do“.\n- [Übungsaufgaben 1, 5.1a I am playing – was passiert gerade?] Look! Mia ___ an ice cream. Auswahl: are eating | eat | is eating | eating\n  Ergebnis: is eating\n  Weg: Look! heißt: Es passiert gerade jetzt. Dann: am/is/are + Verb mit -ing. Hier ist „Mia“ = she → Mia is eating an ice cream. „eating“ ohne „is“ und „eat“ allein passen nicht.\n- [Übungsaufgaben 1, 5.1b Are you swimming? – Fragen und Verneinung] Is Ben reading a book? – No, he ___. Auswahl: doesn’t | aren’t | not is | isn’t\n  Ergebnis: isn’t\n  Weg: Die Kurzantwort wiederholt das Wort aus der Frage: „Is“ → isn’t. Hier: No, he isn’t. „doesn’t“ gehört nicht zu -ing, und „aren’t“ nicht zu he.\n- [Abschlussquiz, 5.1a I am playing – was passiert gerade?] We ___ a sandcastle at the moment. Auswahl: are making | is making | are make | am making\n  Ergebnis: are making\n  Weg: Bei we nimmst du are. Dazu kommt das Verb mit -ing. make verliert das e: making. „is“ passt nicht zu we, und „make“ ohne -ing geht nicht.\n- [Abschlussquiz, 5.1b Are you swimming? – Fragen und Verneinung] Welcher Satz ist richtig? (the dogs) Auswahl: The dogs isn’t running. | The dogs aren’t running. | The dogs not are running. | The dogs don’t running.\n  Ergebnis: The dogs aren’t running.\n  Weg: Verneinung: not steht hinter are, kurz aren’t. Danach: Verb mit -ing. Hier: The dogs aren’t running. „don’t running“ geht nicht, und „isn’t“ passt nur zu einem Hund.\n- [Übungsaufgaben 2, 5.1a I am playing – was passiert gerade?] The boys ___ in the sea. Auswahl: is swimming | swimming | are swimming | are swiming\n  Ergebnis: are swimming\n  Weg: Bei kurzem Selbstlaut wird der Mitlaut doppelt: swim → swimming. The boys = they → are swimming. „swiming“ hat nur ein m, und „is“ passt nicht zu mehreren Jungen.\n- [Übungsaufgaben 2, 5.1b Are you swimming? – Fragen und Verneinung] ___ the girls playing volleyball? Auswahl: Is | Do | Am | Are\n  Ergebnis: Are\n  Weg: The girls sind mehrere = they. Zu they passt are. Hier: Are the girls playing volleyball? „Is“ ist für eine Person, und „Do“ passt nicht zu -ing.",
  "aufgaben": {
   "Tom is at the beach right now. Welcher Satz ist richtig?": {
    "teil": "5.1a",
    "typ": "wahl",
    "ergebnis": "Tom is swimming.",
    "optionen": [
     "Tom is swimming.",
     "Tom swimming.",
     "Tom is swim.",
     "Tom are swimming."
    ]
   },
   "Welche Frage ist richtig?": {
    "teil": "5.1b",
    "typ": "wahl",
    "ergebnis": "Are you swimming?",
    "optionen": [
     "Are you swim?",
     "Are you swimming?",
     "You are swimming?",
     "Do you swimming?"
    ]
   },
   "Look! Mia ___ an ice cream.": {
    "teil": "5.1a",
    "typ": "wahl",
    "ergebnis": "is eating",
    "optionen": [
     "are eating",
     "eat",
     "is eating",
     "eating"
    ]
   },
   "Is Ben reading a book? – No, he ___.": {
    "teil": "5.1b",
    "typ": "wahl",
    "ergebnis": "isn’t",
    "optionen": [
     "doesn’t",
     "aren’t",
     "not is",
     "isn’t"
    ]
   },
   "We ___ a sandcastle at the moment.": {
    "teil": "5.1a",
    "typ": "wahl",
    "ergebnis": "are making",
    "optionen": [
     "are making",
     "is making",
     "are make",
     "am making"
    ]
   },
   "Welcher Satz ist richtig? (the dogs)": {
    "teil": "5.1b",
    "typ": "wahl",
    "ergebnis": "The dogs aren’t running.",
    "optionen": [
     "The dogs isn’t running.",
     "The dogs aren’t running.",
     "The dogs not are running.",
     "The dogs don’t running."
    ]
   },
   "The boys ___ in the sea.": {
    "teil": "5.1a",
    "typ": "wahl",
    "ergebnis": "are swimming",
    "optionen": [
     "is swimming",
     "swimming",
     "are swimming",
     "are swiming"
    ]
   },
   "___ the girls playing volleyball?": {
    "teil": "5.1b",
    "typ": "wahl",
    "ergebnis": "Are",
    "optionen": [
     "Is",
     "Do",
     "Am",
     "Are"
    ]
   },
   "I ___ to music now.": {
    "teil": "5.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Look at Dad! He ___ on the towel.": {
    "teil": "5.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Welcher Satz ist richtig? (Anna on the beach)": {
    "teil": "5.1a",
    "typ": "wahl",
    "klausur": true
   },
   "___ you playing football now? – Yes, I am.": {
    "teil": "5.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Welcher Satz ist richtig? (Mia is not swimming)": {
    "teil": "5.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Are the boys eating pizza? (Sie trinken Limo.) Welche Antwort ist richtig?": {
    "teil": "5.1b",
    "typ": "wahl",
    "klausur": true
   }
  }
 },
 "e9-1-zeiten": {
  "titel": "Zeiten",
  "fach": "englisch",
  "klasse": 9,
  "teile": {
   "1.1a": "Simple past oder present perfect?",
   "1.1b": "Simple past oder past perfect?",
   "1.2a": "Present simple oder present progressive?",
   "1.3a": "will, going to, present progressive"
  },
  "text": "# Zeiten (Englisch, Klasse 9)\n\n## Merkkästen der Arbeitsblätter\n### 1.1a Simple past oder present perfect?\nSimple past: Die Handlung ist abgeschlossen, die Zeit ist genannt.  We visited Sydney last year.\nPresent perfect have / has + 3. Form\n: Die Handlung hat einen Bezug zur Gegenwart, die Zeit ist nicht genannt.  We have just arrived in Sydney.\n1 Suche das Signalwort.\n2 yesterday, last week, in 2019, ago → simple past\n3 already, yet, ever, never, just, since, for → present perfect\n\n### 1.1b Simple past oder past perfect?\nDas past perfect had + 3. Form\nsteht für die Handlung, die früher passiert ist als eine andere Handlung in der Vergangenheit. Die spätere Handlung steht im simple past.\nWhen we arrived, the train had left.  ·  After she had packed, she called a taxi.\n1 Zwei Handlungen in der Vergangenheit?\n2 Was war zuerst? → had + 3. Form\n3 Signalwörter: before, after, when, by the time\n\n### 1.2a Present simple oder present progressive?\nPresent simple: Gewohnheiten und Fakten.  Tom plays football every Saturday.\nPresent progressive am / is / are + -ing\n: passiert gerade jetzt.  Tom is playing football right now.\nState verbs (like, know, want, need, understand, believe) stehen nie mit -ing: I know the answer.\n1 Immer oder gerade jetzt?\n2 always, usually, every day, often → simple\n3 now, at the moment, Look! → progressive\n\n### 1.3a will, going to, present progressive\nwill: spontane Entscheidung oder Vermutung (I think …, probably).  I’m thirsty. I’ll get some water.\ngoing to: Plan oder Vorhersage mit sichtbarem Anzeichen.  Look at the clouds. It’s going to rain.\npresent progressive: feste Verabredung mit Zeit oder Ort.  I’m meeting Jo at 4 pm.\n1 Gerade erst entschieden? → will\n2 Schon geplant oder Anzeichen sichtbar? → going to\n3 Fest verabredet? → am / is / are + -ing\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 1.1a Simple past oder present perfect?] Which sentence is correct? (Sydney, last year) Auswahl: We visited Sydney last year. | We have visited Sydney last year. | We visit Sydney last year. | We have visit Sydney last year.\n  Ergebnis: We visited Sydney last year.\n  Weg: Simple past = abgeschlossene Handlung in der Vergangenheit, oft mit fester Zeitangabe. „last year“ ist so eine Zeitangabe → Verb + -ed: visited. Achtung: „have visited“ (present perfect) passt nicht, denn present perfect darf nie mit einer genauen Zeitangabe wie „last year“ stehen.\n- [Einstiegsquiz, 1.1b Simple past oder past perfect?] Which sentence is correct? (the film, the cinema) Auswahl: When we arrived, the film has already started. | When we arrived, the film had already started. | When we arrived, the film already started. | When we had arrived, the film already started.\n  Ergebnis: When we arrived, the film had already started.\n  Weg: Past perfect (had + 3. Form) nutzt man für die Handlung, die VOR einer anderen Vergangenheitshandlung passiert ist. Der Film begann zuerst → had started; das spätere Ankommen steht im simple past: arrived. Achtung: „already started“ im simple past würde die Reihenfolge nicht zeigen.\n- [Einstiegsquiz, 1.2a Present simple oder present progressive?] Which sentence is correct? (the kangaroo) Auswahl: Look! The kangaroo jump over the fence. | Look! The kangaroo is jump over the fence. | Look! The kangaroo is jumping over the fence. | Look! The kangaroo jumps over the fence.\n  Ergebnis: Look! The kangaroo is jumping over the fence.\n  Weg: Present progressive (am/is/are + -ing) beschreibt, was gerade jetzt passiert. „Look!“ zeigt: Es geschieht in diesem Moment → is jumping. Achtung: „jumps“ (present simple) wäre für Gewohnheiten, z. B. „The kangaroo jumps every day.“\n- [Einstiegsquiz, 1.3a will, going to, present progressive] Look at the dark clouds! Which sentence fits? Auswahl: It will to rain. | It is rain. | It rains going to. | It is going to rain.\n  Ergebnis: It is going to rain.\n  Weg: going to + Verb nutzt man, wenn man aufgrund eines Anzeichens etwas Bestimmtes vorhersagt. Die dunklen Wolken sieht man jetzt → It is going to rain. Achtung: Nach „will“ steht kein „to“ („will to rain“ ist falsch), und „is rain“ hat kein Verb.\n- [Übungsaufgaben 1, 1.1a Simple past oder present perfect?] Have you ever ___ a kangaroo? Auswahl: seen | saw | see | sees\n  Ergebnis: seen\n  Weg: Present perfect (have/has + 3. Form) nutzt man, wenn eine Zeit nicht genannt wird und die Erfahrung bis heute zählt. „ever“ fragt nach Erfahrungen im bisherigen Leben → Have you ever seen …? (see – saw – seen) Achtung: „saw“ ist simple past und braucht eine feste Zeit wie „last year“.\n- [Übungsaufgaben 1, 1.1b Simple past oder past perfect?] After Max ___ his homework, he called his friend. Auswahl: was finish | had finished | has finished | finishes\n  Ergebnis: had finished\n  Weg: Past perfect (had + 3. Form) zeigt, was vor einer anderen Vergangenheitshandlung geschah. Erst Hausaufgaben, dann Anruf (called) → had finished. Achtung: „has finished“ ist present perfect und passt nicht, denn der Satz spielt ganz in der Vergangenheit.\n- [Übungsaufgaben 1, 1.2a Present simple oder present progressive?] We usually ___ to school by bus. Auswahl: goes | went | go | are going\n  Ergebnis: go\n  Weg: Present simple benutzt man für Gewohnheiten und regelmäßige Abläufe. „usually“ zeigt eine Gewohnheit → we go (bei we/you/they ohne -s). Achtung: „are going“ (present progressive) meint nur das, was gerade passiert; „goes“ gehört zu he/she/it.\n- [Übungsaufgaben 1, 1.3a will, going to, present progressive] A: I have no pen. B: Don’t worry. I ___ you mine. Auswahl: am going to lend | am lending | lent | will lend\n  Ergebnis: will lend\n  Weg: will benutzt man für spontane Entscheidungen im Moment des Sprechens (ohne vorherigen Plan). B hört erst jetzt, dass A keinen Stift hat, und entscheidet sich sofort → I will lend you mine. Achtung: „am going to lend“ setzt einen schon gemachten Plan voraus.\n- [Abschlussquiz, 1.1a Simple past oder present perfect?] Which signal word goes with the present perfect? Auswahl: already | yesterday | two years ago | last Monday\n  Ergebnis: already\n  Weg: Signalwörter des present perfect: already, yet, ever, never, just, since, for. Sie verbinden Vergangenheit und Gegenwart. „already“ gehört dazu → present perfect. Achtung: yesterday, two years ago und last Monday nennen eine abgeschlossene Zeit; dazu passt das simple past.\n- [Abschlussquiz, 1.1b Simple past oder past perfect?] How do you form the past perfect? Auswahl: would + infinitive | had + past participle | have + past participle | was + -ing\n  Ergebnis: had + past participle\n  Weg: Past perfect bildet man mit had + 3. Form (past participle) des Verbs, für alle Personen gleich. Beispiele: had left, had eaten, had played. Achtung: „have + 3. Form“ ist present perfect; „was + -ing“ wäre past progressive.\n- [Abschlussquiz, 1.2a Present simple oder present progressive?] Which verb is NOT normally used with -ing? Auswahl: eat | watch | understand | play\n  Ergebnis: understand\n  Weg: State verbs (Zustandsverben wie understand, like, know, love) beschreiben keinen Vorgang, sondern einen Zustand. Sie stehen meist nicht in der -ing-Form: I understand (nicht „I am understanding“). play, eat und watch sind Tätigkeiten und können -ing haben: I am playing.\n- [Abschlussquiz, 1.3a will, going to, present progressive] Which tense do you use for a fixed arrangement (time and place)? Auswahl: will | simple past | present perfect | present progressive\n  Ergebnis: present progressive\n  Weg: Feste Verabredungen (Zeit und Ort sind abgemacht) schreibt man im present progressive: I’m meeting Jo at 4 pm. Das gilt für die nahe Zukunft, wenn der Plan schon organisiert ist. Achtung: „will“ wäre eher eine spontane Entscheidung oder Vorhersage.\n- [Übungsaufgaben 2, 1.1a Simple past oder present perfect?] I ___ my science project this week, so I can relax now. Auswahl: have finished | finished | had finished | was finishing\n  Ergebnis: have finished\n  Weg: Present perfect nutzt man, wenn der Zeitraum noch läuft oder das Ergebnis jetzt wichtig ist. „this week“ ist noch nicht vorbei und „now“ zeigt das Ergebnis → have finished. Achtung: „finished“ (simple past) bräuchte eine abgeschlossene Zeit wie „last week“.\n- [Übungsaufgaben 2, 1.1b Simple past oder past perfect?] By the time the bus came, Ana ___ for an hour. Auswahl: is waiting | had waited | waited | has waited\n  Ergebnis: had waited\n  Weg: Past perfect = Handlung, die vor einem Zeitpunkt in der Vergangenheit schon lief oder fertig war. „By the time the bus came“ ist dieser spätere Zeitpunkt; das Warten begann davor → had waited. Achtung: „waited“ (simple past) würde die Vorzeitigkeit nicht ausdrücken.\n- [Übungsaufgaben 2, 1.2a Present simple oder present progressive?] Which sentence is correct? (the music teacher) Auswahl: I liking the new music teacher. | I am like the new music teacher. | I like the new music teacher. | I am liking the new music teacher.\n  Ergebnis: I like the new music teacher.\n  Weg: like ist ein state verb (Zustand, Gefühl) und steht deshalb nicht in der -ing-Form. Richtig ist present simple: I like the new music teacher. Achtung: „am liking“ ist die typische Falle; dasselbe gilt für love, hate, know und understand.\n- [Übungsaufgaben 2, 1.3a will, going to, present progressive] Ana has already bought her ticket. She ___ her cousin in Auckland next week. Auswahl: will visit | visit | visited | is going to visit\n  Ergebnis: is going to visit\n  Weg: Für einen schon gemachten Plan nimmt man going to (oder present progressive). „has already bought her ticket“ zeigt: Die Entscheidung ist gefallen → is going to visit. Achtung: „will visit“ passt eher zu spontanen Entscheidungen oder Vermutungen.",
  "aufgaben": {
   "Which sentence is correct? (Sydney, last year)": {
    "teil": "1.1a",
    "typ": "wahl",
    "ergebnis": "We visited Sydney last year.",
    "optionen": [
     "We visited Sydney last year.",
     "We have visited Sydney last year.",
     "We visit Sydney last year.",
     "We have visit Sydney last year."
    ]
   },
   "Which sentence is correct? (the film, the cinema)": {
    "teil": "1.1b",
    "typ": "wahl",
    "ergebnis": "When we arrived, the film had already started.",
    "optionen": [
     "When we arrived, the film has already started.",
     "When we arrived, the film had already started.",
     "When we arrived, the film already started.",
     "When we had arrived, the film already started."
    ]
   },
   "Which sentence is correct? (the kangaroo)": {
    "teil": "1.2a",
    "typ": "wahl",
    "ergebnis": "Look! The kangaroo is jumping over the fence.",
    "optionen": [
     "Look! The kangaroo jump over the fence.",
     "Look! The kangaroo is jump over the fence.",
     "Look! The kangaroo is jumping over the fence.",
     "Look! The kangaroo jumps over the fence."
    ]
   },
   "Look at the dark clouds! Which sentence fits?": {
    "teil": "1.3a",
    "typ": "wahl",
    "ergebnis": "It is going to rain.",
    "optionen": [
     "It will to rain.",
     "It is rain.",
     "It rains going to.",
     "It is going to rain."
    ]
   },
   "Have you ever ___ a kangaroo?": {
    "teil": "1.1a",
    "typ": "wahl",
    "ergebnis": "seen",
    "optionen": [
     "seen",
     "saw",
     "see",
     "sees"
    ]
   },
   "After Max ___ his homework, he called his friend.": {
    "teil": "1.1b",
    "typ": "wahl",
    "ergebnis": "had finished",
    "optionen": [
     "was finish",
     "had finished",
     "has finished",
     "finishes"
    ]
   },
   "We usually ___ to school by bus.": {
    "teil": "1.2a",
    "typ": "wahl",
    "ergebnis": "go",
    "optionen": [
     "goes",
     "went",
     "go",
     "are going"
    ]
   },
   "A: I have no pen. B: Don’t worry. I ___ you mine.": {
    "teil": "1.3a",
    "typ": "wahl",
    "ergebnis": "will lend",
    "optionen": [
     "am going to lend",
     "am lending",
     "lent",
     "will lend"
    ]
   },
   "Which signal word goes with the present perfect?": {
    "teil": "1.1a",
    "typ": "wahl",
    "ergebnis": "already",
    "optionen": [
     "already",
     "yesterday",
     "two years ago",
     "last Monday"
    ]
   },
   "How do you form the past perfect?": {
    "teil": "1.1b",
    "typ": "wahl",
    "ergebnis": "had + past participle",
    "optionen": [
     "would + infinitive",
     "had + past participle",
     "have + past participle",
     "was + -ing"
    ]
   },
   "Which verb is NOT normally used with -ing?": {
    "teil": "1.2a",
    "typ": "wahl",
    "ergebnis": "understand",
    "optionen": [
     "eat",
     "watch",
     "understand",
     "play"
    ]
   },
   "Which tense do you use for a fixed arrangement (time and place)?": {
    "teil": "1.3a",
    "typ": "wahl",
    "ergebnis": "present progressive",
    "optionen": [
     "will",
     "simple past",
     "present perfect",
     "present progressive"
    ]
   },
   "I ___ my science project this week, so I can relax now.": {
    "teil": "1.1a",
    "typ": "wahl",
    "ergebnis": "have finished",
    "optionen": [
     "have finished",
     "finished",
     "had finished",
     "was finishing"
    ]
   },
   "By the time the bus came, Ana ___ for an hour.": {
    "teil": "1.1b",
    "typ": "wahl",
    "ergebnis": "had waited",
    "optionen": [
     "is waiting",
     "had waited",
     "waited",
     "has waited"
    ]
   },
   "Which sentence is correct? (the music teacher)": {
    "teil": "1.2a",
    "typ": "wahl",
    "ergebnis": "I like the new music teacher.",
    "optionen": [
     "I liking the new music teacher.",
     "I am like the new music teacher.",
     "I like the new music teacher.",
     "I am liking the new music teacher."
    ]
   },
   "Ana has already bought her ticket. She ___ her cousin in Auckland next week.": {
    "teil": "1.3a",
    "typ": "wahl",
    "ergebnis": "is going to visit",
    "optionen": [
     "will visit",
     "visit",
     "visited",
     "is going to visit"
    ]
   },
   "Which sentence is correct? (Ben in Sydney)": {
    "teil": "1.1a",
    "typ": "wahl",
    "klausur": true
   },
   "I saw the new film ___.": {
    "teil": "1.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Which sentence is correct? (Mia and the pizza)": {
    "teil": "1.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Before Emma went surfing, she ___ on sun cream.": {
    "teil": "1.1b",
    "typ": "wahl",
    "klausur": true
   },
   "At the moment Lena ___ with her friends.": {
    "teil": "1.2a",
    "typ": "wahl",
    "klausur": true
   },
   "Tom ___ football every Saturday.": {
    "teil": "1.2a",
    "typ": "wahl",
    "klausur": true
   },
   "We ___ Jo at the station at 5 pm. We have arranged it.": {
    "teil": "1.3a",
    "typ": "wahl",
    "klausur": true
   },
   "Look at that boy on the skateboard! He ___ fall off.": {
    "teil": "1.3a",
    "typ": "wahl",
    "klausur": true
   }
  }
 },
 "e9-2-relativsaetze": {
  "titel": "Relativsätze und Partizipien",
  "fach": "englisch",
  "klasse": 9,
  "teile": {
   "2.1a": "who, which, that, whose",
   "2.1b": "Kontaktsätze",
   "2.2a": "Partizipialsätze"
  },
  "text": "# Relativsätze und Partizipien (Englisch, Klasse 9)\n\n## Merkkästen der Arbeitsblätter\n### 2.1a who, which, that, whose\nEin Relativsatz sagt mehr über ein Wort davor. Das Relativpronomen hängt vom Bezugswort ab:\nwho · which · that · whose\nwho = Personen  ·  which = Dinge, Tiere  ·  that = beides  ·  whose = Besitz („dessen, deren“)\n1 Bezugswort: the girl (Person)\n2 Pronomen: who\n3 Rest: the girl who lives next door\nThe koala which sleeps in the tree is old.  ·  Tom is the boy whose bike is blue.\n\n### 2.1b Kontaktsätze\nDas Relativpronomen darf wegfallen, wenn danach ein neues Subjekt kommt (Nomen oder Pronomen). Folgt direkt ein Verb, muss es bleiben. whose fällt nie weg.\n1 Schau auf das Wort nach who/which/that\n2 Verb? → Pronomen bleibt\n3 Nomen/Pronomen? → weglassen möglich\nThe film (which) we saw was great. → we ist neues Subjekt, also: The film we saw was great.\nThe girl who lives next door is nice. → lives ist ein Verb, who bleibt.\n\n### 2.2a Partizipialsätze\nEinen Relativsatz kannst du mit einem Partizip verkürzen:\nAktiv → -ing\n·  Passiv → past participle\n(3. Form)\n1 who/which/that streichen\n2 is/are/was/were streichen\n3 Aktiv: Verb + -ing\nPassiv: 3. Form bleibt\nThe boy who is waiting at the bus stop is Tom. → The boy waiting at the bus stop is Tom.\nThe photos which were taken in Arizona are great. → The photos taken in Arizona are great.\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 2.1a who, which, that, whose] Welches Wort passt? „Ben is the boy ___ lives next door.“ Auswahl: who | which | whose | what\n  Ergebnis: who\n  Weg: Who steht für Personen, which für Dinge und Tiere, whose für Besitz („dessen/deren“); that geht für Personen und Dinge. „the boy“ ist eine Person und danach kommt ein Verb → who lives. Achtung: „which“ ist für Dinge; „whose“ braucht danach ein Nomen (whose bike).\n- [Einstiegsquiz, 2.1b Kontaktsätze] In welchem Satz darf das Relativpronomen weggelassen werden? Auswahl: The boy (whose) bike is red is my cousin. | The film (which) we saw was great. | The girl (who) lives next door is nice. | The town (which) has a castle is old.\n  Ergebnis: The film (which) we saw was great.\n  Weg: Kontaktsatz: Das Relativpronomen darf entfallen, wenn es Objekt im Relativsatz ist, also wenn danach ein neues Subjekt folgt. Hier folgt nach „which“ das Wort „we“ → The film we saw was great. Achtung: Folgt ein Verb (has, lives), ist das Pronomen Subjekt und muss bleiben; whose darf nie wegfallen.\n- [Einstiegsquiz, 2.2a Partizipialsätze] Wie lässt sich „The boy who is waiting at the bus stop“ verkürzen? Auswahl: The boy to wait at the bus stop | The boy is waiting at the bus stop | The boy waiting at the bus stop | The boy waited at the bus stop\n  Ergebnis: The boy waiting at the bus stop\n  Weg: Verkürzung eines aktiven Relativsatzes: Pronomen und Hilfsverb (who is) streichen, Verb mit -ing → waiting. Aus „who is waiting at the bus stop“ wird: The boy waiting at the bus stop. Achtung: „waited“ wäre eine Vergangenheitsform, und „to wait“ bedeutet „um zu warten“.\n- [Übungsaufgaben 1, 2.1a who, which, that, whose] Welcher Satz über ein Ding ist richtig? Auswahl: Uluru is a rock which is very old. | Uluru is a rock whose is very old. | Uluru is a rock what is very old. | Uluru is a rock who is very old.\n  Ergebnis: Uluru is a rock which is very old.\n  Weg: Uluru ist ein Ding (ein Felsen), deshalb which (oder that). Who benutzt man nur für Personen. Das Pronomen ersetzt „a rock“ und steht als Subjekt vor dem Verb is: a rock which is very old. Achtung: „whose“ drückt Besitz aus und „what“ ist kein Relativpronomen.\n- [Übungsaufgaben 1, 2.1b Kontaktsätze] Welcher Satz ist ohne Relativpronomen richtig? Auswahl: The hat Mia wears is red. | The hat wears Mia is red. | The hat Mia wearing is red. | The hat is Mia wears red.\n  Ergebnis: The hat Mia wears is red.\n  Weg: Folgt auf das Bezugswort ein neues Subjekt (Mia), kann das Relativpronomen wegfallen (Kontaktsatz). Aus „The hat that Mia wears is red“ wird: The hat Mia wears is red. Achtung: Die Reihenfolge Subjekt – Verb bleibt: Mia wears, nicht „wears Mia“ oder „Mia wearing“.\n- [Übungsaufgaben 1, 2.2a Partizipialsätze] Welche Verkürzung passt zu „The photos which were taken in Arizona“? Auswahl: The photos which taken in Arizona | The photos taking in Arizona | The photos taken in Arizona | The photos took in Arizona\n  Ergebnis: The photos taken in Arizona\n  Weg: Passiver Relativsatz („wurden aufgenommen“): Pronomen und Hilfsverb (which were) streichen, die 3. Form bleibt → taken. Aus „which were taken in Arizona“ wird: The photos taken in Arizona. Achtung: „taking“ ist aktiv („aufnehmend“), und „took“ ist simple past, kein Partizip.\n- [Abschlussquiz, 2.1a who, which, that, whose] Wann benutzt man whose? Auswahl: Wenn der Satz eine Frage ist | Wenn das Relativpronomen wegfällt | Wenn es um Besitz geht („dessen, deren“) | Wenn das Bezugswort ein Tier ist\n  Ergebnis: Wenn es um Besitz geht („dessen, deren“)\n  Weg: whose zeigt Besitz („dessen, deren“) und steht vor einem Nomen: the boy whose bike is blue. Beispiel: „deren Fahrrad“ = whose bike. Achtung: who und which drücken keinen Besitz aus; sie ersetzen nur Personen bzw. Dinge.\n- [Abschlussquiz, 2.1b Kontaktsätze] Woran erkennst du, dass ein Relativpronomen NICHT wegfallen darf? Auswahl: Direkt danach folgt ein Nomen oder Pronomen | Der Satz ist sehr kurz | Der Satz steht in der Vergangenheit | Direkt danach folgt ein Verb\n  Ergebnis: Direkt danach folgt ein Verb\n  Weg: Ein Relativpronomen als Subjekt (direkt vor dem Verb) darf nie wegfallen, sonst fehlt dem Satz das Subjekt. Folgt ein Verb, bleibt es: The girl who lives next door. Folgt ein Nomen oder Pronomen (The film we saw), darf es weg. Die Satzlänge und die Zeit spielen keine Rolle.\n- [Abschlussquiz, 2.2a Partizipialsätze] Wann benutzt man bei der Verkürzung die -ing-Form? Auswahl: Wenn der Relativsatz aktiv ist | Wenn der Relativsatz passiv ist | Wenn der Satz in der Zukunft steht | Wenn whose im Satz steht\n  Ergebnis: Wenn der Relativsatz aktiv ist\n  Weg: Aktiver Relativsatz („die Person tut etwas“) → -ing-Form: the girl reading a book. Passiver Relativsatz („etwas wird getan“) → 3. Form: the book written by Tom. Die Zeit (Zukunft) oder ein whose im Satz entscheiden dagegen nicht über -ing.\n- [Übungsaufgaben 2, 2.1a who, which, that, whose] Welcher Satz mit Besitz ist richtig? Auswahl: Lena is the girl whose her dad is a ranger. | Lena is the girl whose dad is a ranger. | Lena is the girl who dad is a ranger. | Lena is the girl which dad is a ranger.\n  Ergebnis: Lena is the girl whose dad is a ranger.\n  Weg: „deren Vater“ drückt Besitz aus, deshalb whose. Es steht vor dem Nomen dad: the girl whose dad is a ranger. Achtung: „who dad“ und „which dad“ sind falsch, weil sie keinen Besitz zeigen; bei „whose her dad“ steht der Besitz doppelt, denn whose ersetzt schon „her“.\n- [Übungsaufgaben 2, 2.1b Kontaktsätze] Welcher Satz ist falsch? Auswahl: The book you gave me is great. | The pizza Dad made was good. | The song I like is old. | The man lives next door is a surfer.\n  Ergebnis: The man lives next door is a surfer.\n  Weg: Prüfe: Folgt auf das Bezugswort direkt ein Verb? Dann ist das Pronomen Subjekt und muss bleiben. „The man lives next door“ hat kein Pronomen vor lives → falsch; richtig: The man who lives next door. Achtung: In „The song I like“ folgt das neue Subjekt „I“, deshalb ist dort der Kontaktsatz richtig.\n- [Übungsaufgaben 2, 2.2a Partizipialsätze] Welcher Satz mit Passiv-Partizip ist richtig? Auswahl: The bike repaired by my uncle is blue. | The bike repair by my uncle is blue. | The bike repairs by my uncle is blue. | The bike repairing by my uncle is blue.\n  Ergebnis: The bike repaired by my uncle is blue.\n  Weg: Passiver Relativsatz („das Rad wird repariert, von my uncle“) → Partizip als 3. Form: repaired. Verkürzt: The bike (which is) repaired by my uncle. Achtung: „repairing“ ist aktiv und würde heißen, das Rad repariert etwas; „by my uncle“ zeigt dagegen das Passiv.",
  "aufgaben": {
   "Welches Wort passt? „Ben is the boy ___ lives next door.“": {
    "teil": "2.1a",
    "typ": "wahl",
    "ergebnis": "who",
    "optionen": [
     "who",
     "which",
     "whose",
     "what"
    ]
   },
   "In welchem Satz darf das Relativpronomen weggelassen werden?": {
    "teil": "2.1b",
    "typ": "wahl",
    "ergebnis": "The film (which) we saw was great.",
    "optionen": [
     "The boy (whose) bike is red is my cousin.",
     "The film (which) we saw was great.",
     "The girl (who) lives next door is nice.",
     "The town (which) has a castle is old."
    ]
   },
   "Wie lässt sich „The boy who is waiting at the bus stop“ verkürzen?": {
    "teil": "2.2a",
    "typ": "wahl",
    "ergebnis": "The boy waiting at the bus stop",
    "optionen": [
     "The boy to wait at the bus stop",
     "The boy is waiting at the bus stop",
     "The boy waiting at the bus stop",
     "The boy waited at the bus stop"
    ]
   },
   "Welcher Satz über ein Ding ist richtig?": {
    "teil": "2.1a",
    "typ": "wahl",
    "ergebnis": "Uluru is a rock which is very old.",
    "optionen": [
     "Uluru is a rock which is very old.",
     "Uluru is a rock whose is very old.",
     "Uluru is a rock what is very old.",
     "Uluru is a rock who is very old."
    ]
   },
   "Welcher Satz ist ohne Relativpronomen richtig?": {
    "teil": "2.1b",
    "typ": "wahl",
    "ergebnis": "The hat Mia wears is red.",
    "optionen": [
     "The hat Mia wears is red.",
     "The hat wears Mia is red.",
     "The hat Mia wearing is red.",
     "The hat is Mia wears red."
    ]
   },
   "Welche Verkürzung passt zu „The photos which were taken in Arizona“?": {
    "teil": "2.2a",
    "typ": "wahl",
    "ergebnis": "The photos taken in Arizona",
    "optionen": [
     "The photos which taken in Arizona",
     "The photos taking in Arizona",
     "The photos taken in Arizona",
     "The photos took in Arizona"
    ]
   },
   "Wann benutzt man whose?": {
    "teil": "2.1a",
    "typ": "wahl",
    "ergebnis": "Wenn es um Besitz geht („dessen, deren“)",
    "optionen": [
     "Wenn der Satz eine Frage ist",
     "Wenn das Relativpronomen wegfällt",
     "Wenn es um Besitz geht („dessen, deren“)",
     "Wenn das Bezugswort ein Tier ist"
    ]
   },
   "Woran erkennst du, dass ein Relativpronomen NICHT wegfallen darf?": {
    "teil": "2.1b",
    "typ": "wahl",
    "ergebnis": "Direkt danach folgt ein Verb",
    "optionen": [
     "Direkt danach folgt ein Nomen oder Pronomen",
     "Der Satz ist sehr kurz",
     "Der Satz steht in der Vergangenheit",
     "Direkt danach folgt ein Verb"
    ]
   },
   "Wann benutzt man bei der Verkürzung die -ing-Form?": {
    "teil": "2.2a",
    "typ": "wahl",
    "ergebnis": "Wenn der Relativsatz aktiv ist",
    "optionen": [
     "Wenn der Relativsatz aktiv ist",
     "Wenn der Relativsatz passiv ist",
     "Wenn der Satz in der Zukunft steht",
     "Wenn whose im Satz steht"
    ]
   },
   "Welcher Satz mit Besitz ist richtig?": {
    "teil": "2.1a",
    "typ": "wahl",
    "ergebnis": "Lena is the girl whose dad is a ranger.",
    "optionen": [
     "Lena is the girl whose her dad is a ranger.",
     "Lena is the girl whose dad is a ranger.",
     "Lena is the girl who dad is a ranger.",
     "Lena is the girl which dad is a ranger."
    ]
   },
   "Welcher Satz ist falsch?": {
    "teil": "2.1b",
    "typ": "wahl",
    "ergebnis": "The man lives next door is a surfer.",
    "optionen": [
     "The book you gave me is great.",
     "The pizza Dad made was good.",
     "The song I like is old.",
     "The man lives next door is a surfer."
    ]
   },
   "Welcher Satz mit Passiv-Partizip ist richtig?": {
    "teil": "2.2a",
    "typ": "wahl",
    "ergebnis": "The bike repaired by my uncle is blue.",
    "optionen": [
     "The bike repaired by my uncle is blue.",
     "The bike repair by my uncle is blue.",
     "The bike repairs by my uncle is blue.",
     "The bike repairing by my uncle is blue."
    ]
   },
   "Welches Relativpronomen fehlt? „I have a cousin ___ lives in Auckland.“": {
    "teil": "2.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Welcher Satz mit Person und Verb ist richtig?": {
    "teil": "2.1a",
    "typ": "wahl",
    "klausur": true
   },
   "In welchem Satz darf that weggelassen werden?": {
    "teil": "2.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Wie lautet der Satz mit Kim ohne Relativpronomen?": {
    "teil": "2.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Wie kürzt man „The guide who is leading our group“?": {
    "teil": "2.2a",
    "typ": "wahl",
    "klausur": true
   },
   "Welcher Satz mit aktivem Partizip ist richtig?": {
    "teil": "2.2a",
    "typ": "wahl",
    "klausur": true
   },
   "Welcher Satz mit Besitz-Partizip ist richtig?": {
    "teil": "2.2a",
    "typ": "wahl",
    "klausur": true
   }
  }
 },
 "e9-3-modalverben": {
  "titel": "Modalverben",
  "fach": "englisch",
  "klasse": 9,
  "teile": {
   "3.1a": "Vermutungen",
   "3.1b": "Bitten und Erlaubnis",
   "3.2a": "„sollen“ auf Englisch"
  },
  "text": "# Modalverben (Englisch, Klasse 9)\n\n## Merkkästen der Arbeitsblätter\n### 3.1a Vermutungen\nMit Modalverben sagst du, wie sicher du dir bist: must · can’t · might\nmust = bestimmt · can’t = unmöglich, ganz sicher nicht · might / could = vielleicht\n1 Wie sicher? Bestimmt → must\n2 Jetzt: + be → He must be tired.\n3 Früher: + have + 3. Form → He must have been tired.\nAchtung: „mustn’t“ heißt „darf nicht“. Für „kann nicht sein“ nimmst du can’t.\n\n### 3.1b Bitten und Erlaubnis\nJe höflicher du fragen willst, desto weiter rechts: can → could → may\nRegeln und Erlaubnis in anderen Zeiten: be allowed to („dürfen“).\n1 Freunde: Can I sit here?\n2 höflich: Could you help me? · May I come in?\n3 Regel: We were allowed to stay up.\nNach can, could und may steht kein „to“. Nach „allowed“ schon.\n\n### 3.2a „sollen“ auf Englisch\nEs gibt kein englisches Wort, das immer „sollen“ heißt. Frage dich: Was meine ich mit „sollen“?\n1 Rat: Du solltest … → You should drink more water.\n2 Angebot: Soll ich …? → Shall I carry your bag?\n3 Plan oder Regel: Der Bus soll … → The bus is supposed to arrive at 8.\n4 Wunsch einer Person: Mum will, dass ich … → Mum wants me to tidy up.\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 3.1a Vermutungen] Tom zittert und trägt eine dicke Jacke. Welche Vermutung passt? Auswahl: He must be cold. | He can’t be cold. | He mustn’t be cold. | He must cold.\n  Ergebnis: He must be cold.\n  Weg: Mit must sagt man, dass man sich bei einer Vermutung (fast) sicher ist: „bestimmt, muss ja“. Danach folgt be + Adjektiv. Tom zittert und trägt eine dicke Jacke – das sind klare Hinweise → He must be cold. Achtung: „can’t be“ wäre das Gegenteil („kann unmöglich sein“); „must cold“ fehlt das be.\n- [Einstiegsquiz, 3.1b Bitten und Erlaubnis] Du fragst deinen besten Freund, ob du seinen Stift leihen kannst. Was passt am besten? Auswahl: Must I borrow your pen? | Can I borrow your pen? | May I to borrow your pen? | Am I allowed borrow your pen?\n  Ergebnis: Can I borrow your pen?\n  Weg: can ist das lockere Modalverb für Bitten und Erlaubnis, passend unter Freunden: Can I borrow your pen? Nach einem Modalverb steht der Infinitiv ohne „to“ (borrow, nicht „to borrow“). Achtung: „May I to borrow“ ist falsch gebaut; „Must I borrow“ hieße „Muss ich mir leihen?“.\n- [Einstiegsquiz, 3.2a „sollen“ auf Englisch] Du gibst einen Rat: „Du solltest mehr Wasser trinken.“ Welcher Satz passt? Auswahl: You are shoulding drink more water. | You want drink more water. | You should drink more water. | You shall drink more water.\n  Ergebnis: You should drink more water.\n  Weg: should drückt einen Rat aus („du solltest“) und wird mit dem Infinitiv ohne to verbunden. Hier gibst du einen Tipp → You should drink more water. Achtung: „shall“ benutzt man für Angebote („Shall I …?“), nicht für Ratschläge; „shoulding“ gibt es nicht.\n- [Übungsaufgaben 1, 3.1a Vermutungen] Ella ist gerade in Auckland gelandet. Welcher Satz ist richtig? Auswahl: She mustn’t be at school today. | She can’t is at school today. | She can’t been at school today. | She can’t be at school today.\n  Ergebnis: She can’t be at school today.\n  Weg: Mit can’t sagt man: „Das kann unmöglich stimmen“. Die Vermutung ist verneint, danach folgt be. Ella ist gerade in Auckland gelandet, also ist sie unmöglich in der Schule → She can’t be at school today. Achtung: „mustn’t“ bedeutet „darf nicht“ (Verbot), es drückt keine Vermutung aus.\n- [Übungsaufgaben 1, 3.1b Bitten und Erlaubnis] Gestern durfte ich länger aufbleiben. Welcher Satz ist richtig? Auswahl: Yesterday I was allowed to stay up later. | Yesterday I can stay up later. | Yesterday I was allowed stay up later. | Yesterday I am allowed to stay up later.\n  Ergebnis: Yesterday I was allowed to stay up later.\n  Weg: can hat keine Vergangenheitsform für Erlaubnis. Stattdessen nimmt man was/were allowed to + Infinitiv. „Gestern“ steht in der Vergangenheit → I was allowed to stay up later. Achtung: „I can stay up“ steht in der Gegenwart; bei „was allowed“ darf das „to“ nicht fehlen.\n- [Übungsaufgaben 1, 3.2a „sollen“ auf Englisch] „Soll ich die Tür öffnen?“ Welcher Satz ist richtig? Auswahl: Want I open the door? | Shall I open the door? | Do I should open the door? | Am I supposed open the door?\n  Ergebnis: Shall I open the door?\n  Weg: Mit Shall I …? bietet man etwas an oder fragt, was man tun soll („Soll ich …?“). Danach steht der Infinitiv ohne to. „Soll ich die Tür öffnen?“ ist so ein Angebot → Shall I open the door? Achtung: „Do I should“ geht nicht, denn should nutzt man nie mit do.\n- [Abschlussquiz, 3.1a Vermutungen] Welches Modalverb nimmst du für „Das kann nicht sein“? Auswahl: needn’t | shouldn’t | can’t | mustn’t\n  Ergebnis: can’t\n  Weg: can’t be heißt „kann nicht sein“ und drückt aus, dass man sich sicher ist, dass etwas nicht stimmt. Beispiel: Das kann nicht sein! → That can’t be true. Achtung: mustn’t bedeutet „darf nicht“ (Verbot), needn’t „muss nicht“, shouldn’t „sollte nicht“.\n- [Abschlussquiz, 3.1b Bitten und Erlaubnis] Welche Frage ist am höflichsten? Auswahl: Can I come in? | Let me come in! | I come in? | May I come in, please?\n  Ergebnis: May I come in, please?\n  Weg: Bei Bitten gibt es Abstufungen: Can I …? (locker, Freunde) – Could I …? (höflicher) – May I …? (am höflichsten, z. B. bei Erwachsenen). Mit „please“ und may klingt „May I come in, please?“ am höflichsten. Achtung: „Let me come in!“ ist ein Befehl und „I come in?“ ist keine richtige Frage.\n- [Abschlussquiz, 3.2a „sollen“ auf Englisch] Welche englische Form passt zu „Der Bus soll um 8 Uhr ankommen“ (laut Fahrplan)? Auswahl: is supposed to | wants me to | shall | should to\n  Ergebnis: is supposed to\n  Weg: be supposed to + Infinitiv heißt „sollen“ für Pläne, Regeln und Erwartungen, die andere festgelegt haben (hier: Fahrplan). Der Bus soll um 8 Uhr ankommen → The bus is supposed to arrive at 8. Achtung: „wants me to“ bedeutet „will, dass ich“, und „should to“ gibt es nicht.\n- [Übungsaufgaben 2, 3.1a Vermutungen] Jack ist voller Schlamm. Er war bestimmt im Moor. Welcher Satz ist richtig? Auswahl: He can’t have been on the moors. | He must have been on the moors. | He must be on the moors. | He must been on the moors.\n  Ergebnis: He must have been on the moors.\n  Weg: Eine Vermutung über die Vergangenheit bildet man mit must + have + 3. Form → must have been. Der Schlamm ist ein Beweis, dass Jack schon dort war, also ist es eine sichere Vermutung → He must have been on the moors. Achtung: „must be“ meint die Gegenwart; „can’t have been“ meint „kann unmöglich dort gewesen sein“.\n- [Übungsaufgaben 2, 3.1b Bitten und Erlaubnis] Welcher Satz ist richtig? Auswahl: Could you helping me, please? | Could you helps me, please? | Could you help me, please? | Could you to help me, please?\n  Ergebnis: Could you help me, please?\n  Weg: Nach Modalverben wie could, can, may, must steht immer der Infinitiv ohne „to“: Could you help me, please? Help ist hier die Grundform (ohne -s, ohne -ing, ohne to). Achtung: „Could you to help“, „helping“ und „helps“ sind typische Fehler; Modalverben bekommen nie ein -s.\n- [Übungsaufgaben 2, 3.2a „sollen“ auf Englisch] „Mama will, dass ich lerne.“ Welcher Satz ist richtig? Auswahl: Mum wants that I study. | Mum wants I study. | Mum wants me study. | Mum wants me to study.\n  Ergebnis: Mum wants me to study.\n  Weg: Bei want gilt: want + Person + to + Infinitiv. So sagt man „will, dass jemand etwas tut“ ohne dass-Satz. „Mama will, dass ich lerne“ → Mum wants me to study. Achtung: „wants that I study“ ist die wörtliche Übersetzung aus dem Deutschen und im Englischen nicht üblich; „me study“ fehlt das to.",
  "aufgaben": {
   "Tom zittert und trägt eine dicke Jacke. Welche Vermutung passt?": {
    "teil": "3.1a",
    "typ": "wahl",
    "ergebnis": "He must be cold.",
    "optionen": [
     "He must be cold.",
     "He can’t be cold.",
     "He mustn’t be cold.",
     "He must cold."
    ]
   },
   "Du fragst deinen besten Freund, ob du seinen Stift leihen kannst. Was passt am besten?": {
    "teil": "3.1b",
    "typ": "wahl",
    "ergebnis": "Can I borrow your pen?",
    "optionen": [
     "Must I borrow your pen?",
     "Can I borrow your pen?",
     "May I to borrow your pen?",
     "Am I allowed borrow your pen?"
    ]
   },
   "Du gibst einen Rat: „Du solltest mehr Wasser trinken.“ Welcher Satz passt?": {
    "teil": "3.2a",
    "typ": "wahl",
    "ergebnis": "You should drink more water.",
    "optionen": [
     "You are shoulding drink more water.",
     "You want drink more water.",
     "You should drink more water.",
     "You shall drink more water."
    ]
   },
   "Ella ist gerade in Auckland gelandet. Welcher Satz ist richtig?": {
    "teil": "3.1a",
    "typ": "wahl",
    "ergebnis": "She can’t be at school today.",
    "optionen": [
     "She mustn’t be at school today.",
     "She can’t is at school today.",
     "She can’t been at school today.",
     "She can’t be at school today."
    ]
   },
   "Gestern durfte ich länger aufbleiben. Welcher Satz ist richtig?": {
    "teil": "3.1b",
    "typ": "wahl",
    "ergebnis": "Yesterday I was allowed to stay up later.",
    "optionen": [
     "Yesterday I was allowed to stay up later.",
     "Yesterday I can stay up later.",
     "Yesterday I was allowed stay up later.",
     "Yesterday I am allowed to stay up later."
    ]
   },
   "„Soll ich die Tür öffnen?“ Welcher Satz ist richtig?": {
    "teil": "3.2a",
    "typ": "wahl",
    "ergebnis": "Shall I open the door?",
    "optionen": [
     "Want I open the door?",
     "Shall I open the door?",
     "Do I should open the door?",
     "Am I supposed open the door?"
    ]
   },
   "Welches Modalverb nimmst du für „Das kann nicht sein“?": {
    "teil": "3.1a",
    "typ": "wahl",
    "ergebnis": "can’t",
    "optionen": [
     "needn’t",
     "shouldn’t",
     "can’t",
     "mustn’t"
    ]
   },
   "Welche Frage ist am höflichsten?": {
    "teil": "3.1b",
    "typ": "wahl",
    "ergebnis": "May I come in, please?",
    "optionen": [
     "Can I come in?",
     "Let me come in!",
     "I come in?",
     "May I come in, please?"
    ]
   },
   "Welche englische Form passt zu „Der Bus soll um 8 Uhr ankommen“ (laut Fahrplan)?": {
    "teil": "3.2a",
    "typ": "wahl",
    "ergebnis": "is supposed to",
    "optionen": [
     "is supposed to",
     "wants me to",
     "shall",
     "should to"
    ]
   },
   "Jack ist voller Schlamm. Er war bestimmt im Moor. Welcher Satz ist richtig?": {
    "teil": "3.1a",
    "typ": "wahl",
    "ergebnis": "He must have been on the moors.",
    "optionen": [
     "He can’t have been on the moors.",
     "He must have been on the moors.",
     "He must be on the moors.",
     "He must been on the moors."
    ]
   },
   "Welcher Satz ist richtig?": {
    "teil": "3.1b",
    "typ": "wahl",
    "ergebnis": "Could you help me, please?",
    "optionen": [
     "Could you helping me, please?",
     "Could you helps me, please?",
     "Could you help me, please?",
     "Could you to help me, please?"
    ]
   },
   "„Mama will, dass ich lerne.“ Welcher Satz ist richtig?": {
    "teil": "3.2a",
    "typ": "wahl",
    "ergebnis": "Mum wants me to study.",
    "optionen": [
     "Mum wants that I study.",
     "Mum wants I study.",
     "Mum wants me study.",
     "Mum wants me to study."
    ]
   },
   "Das Café ist dunkel und die Tür ist abgeschlossen. Welcher Satz ist richtig?": {
    "teil": "3.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Der Pool in Arizona ist bei 40 Grad voller Leute. Welcher Satz sagt „Die Leute sind bestimmt dort“?": {
    "teil": "3.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Du fragst deine Lehrerin höflich, ob du früher gehen darfst. Was passt am besten?": {
    "teil": "3.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Morgen dürfen wir am Strand grillen. Welcher Satz ist richtig?": {
    "teil": "3.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Ein Austauschschüler soll um sechs zu Hause sein (Regel der Gastfamilie). Welcher Satz passt?": {
    "teil": "3.2a",
    "typ": "wahl",
    "klausur": true
   },
   "„Meine Lehrerin will, dass wir eine Karte mitbringen.“ Was ist richtig?": {
    "teil": "3.2a",
    "typ": "wahl",
    "klausur": true
   },
   "Die Rangerin sagt: „Füttert die Eichhörnchen nicht.“ Du erzählst es weiter. Welcher Satz ist richtig?": {
    "teil": "3.2a",
    "typ": "wahl",
    "klausur": true
   }
  }
 },
 "e9-4-passiv-gerund": {
  "titel": "Passiv und Gerund",
  "fach": "englisch",
  "klasse": 9,
  "teile": {
   "4.1a": "Das Passiv bilden",
   "4.1b": "Passiv in verschiedenen Zeiten",
   "4.2a": "Gerund oder Infinitiv?"
  },
  "text": "# Passiv und Gerund (Englisch, Klasse 9)\n\n## Merkkästen der Arbeitsblätter\n### 4.1a Das Passiv bilden\nIm Passiv steht im Mittelpunkt, was passiert – nicht, wer es tut.\nbe (is / are) + past participle\nAktiv: Navajo guides lead the tours.  →  Passiv: The tours are led by Navajo guides.\n1 Das Objekt wird Subjekt: The tours\n2 is / are + 3. Form des Verbs: are led\n3 Wer es tut, steht mit by (darf auch fehlen): by Navajo guides\nUnregelmäßig: make – made, build – built, write – written, teach – taught, sell – sold\n\n### 4.1b Passiv in verschiedenen Zeiten\nDas Passiv bleibt immer be + past participle. Nur be ändert sich mit der Zeit.\npresentis / are madeThe shirts are made here.\nsimple pastwas / were madeThe shirts were made here.\npresent perfecthas / have been madeThe shirts have been made here.\nwill / Modalverbwill / can be madeThe shirts will be made here.\n1 Zeit im Aktivsatz erkennen: built = simple past\n2 be in dieser Zeit: was\n3 + 3. Form: was built\n\n### 4.2a Gerund oder Infinitiv?\nNach vielen Verben ist die Form festgelegt: entweder Gerund (-ing) oder to + Infinitiv.\n+ -ingenjoy, finish, mind, avoid, suggest, keep  ·  We enjoy walking in Santa Fe.\n+ todecide, want, hope, plan, learn, manage  ·  We decided to visit Monument Valley.\nbeidesremember, stop, try – mit anderer Bedeutung:\nstop doing = aufhören · stop to do = anhalten, um etwas zu tun\nremember doing = sich erinnern · remember to do = daran denken\ntry doing = ausprobieren · try to do = versuchen\n1 Verb ansehen: enjoy\n2 In die Liste schauen: -ing\n3 Verb + Form: enjoy walking\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 4.1a Das Passiv bilden] Welcher Satz steht im Passiv? Auswahl: Pottery is made by Pueblo artists. | Pueblo artists make pottery. | Pueblo artists are making pottery. | Pueblo artists made pottery.\n  Ergebnis: Pottery is made by Pueblo artists.\n  Weg: Passiv = be + 3. Form (past participle): Die Handlung wird betont, nicht wer sie ausführt. „Pottery is made by Pueblo artists“ → is made (is + made); das Subjekt (Pottery) wird bearbeitet. Achtung: „Pueblo artists make pottery“ ist Aktiv, denn die Artists handeln selbst.\n- [Einstiegsquiz, 4.1b Passiv in verschiedenen Zeiten] Welche Passivform gehört zum present perfect? „The tickets ___ already.“ Auswahl: have been sold | are sold | will be sold | were sold\n  Ergebnis: have been sold\n  Weg: Present perfect Passiv = have/has been + 3. Form. „already“ ist ein Signalwort des present perfect. Die Tickets sind schon verkauft (Mehrzahl) → have been sold. Achtung: „were sold“ ist simple past Passiv und braucht eine abgeschlossene Zeit wie „yesterday“.\n- [Einstiegsquiz, 4.2a Gerund oder Infinitiv?] Welcher Satz mit enjoy ist richtig? Auswahl: We enjoy walk in Santa Fe. | We enjoy walked in Santa Fe. | We enjoy to walk in Santa Fe. | We enjoy walking in Santa Fe.\n  Ergebnis: We enjoy walking in Santa Fe.\n  Weg: Nach enjoy steht das Gerund (Verb + -ing), nicht der Infinitiv mit to. Merk dir: enjoy, finish, mind, suggest + -ing. „We enjoy walking in Santa Fe“ → walking. Achtung: „to walk“ ist die typische Falle; nach enjoy darf kein to stehen.\n- [Übungsaufgaben 1, 4.1a Das Passiv bilden] Wie lautet der Satz „Navajo guides lead the tours.“ im Passiv? Auswahl: The tours are lead by Navajo guides. | The tours lead by Navajo guides. | The tours are led by Navajo guides. | The tours is led by Navajo guides.\n  Ergebnis: The tours are led by Navajo guides.\n  Weg: Passiv bilden: Das Objekt des Aktivsatzes wird Subjekt (The tours, Mehrzahl → are) + 3. Form von lead: led. Der Handelnde steht nach by. Aus „Navajo guides lead the tours“ wird: The tours are led by Navajo guides. Achtung: „are lead“ ist falsch, denn die 3. Form ist led; „is“ passt nicht zu Mehrzahl.\n- [Übungsaufgaben 1, 4.1b Passiv in verschiedenen Zeiten] Wie lautet „They built the school in 1990.“ im Passiv? Auswahl: The school is built in 1990. | The school has been built in 1990. | The school was built in 1990. | The school were built in 1990.\n  Ergebnis: The school was built in 1990.\n  Weg: Die Zeit im Passiv richtet sich nach dem Aktivsatz: built ist simple past, also steht be im simple past → was built. „in 1990“ ist eine abgeschlossene Zeitangabe. Achtung: „has been built“ ist present perfect und passt nicht zu „in 1990“; „were“ passt nicht zur Einzahl „school“.\n- [Übungsaufgaben 1, 4.2a Gerund oder Infinitiv?] Welcher Satz mit decide ist richtig? Auswahl: Lena decided to take a photo. | Lena decided take a photo. | Lena decided took a photo. | Lena decided taking a photo.\n  Ergebnis: Lena decided to take a photo.\n  Weg: Nach decide steht to + Infinitiv (Verben wie decide, hope, want, plan, agree). „Lena decided to take a photo“ → to take. Achtung: Das Gerund (taking) steht nach enjoy, finish, suggest; die Grundform „take“ ohne to oder „took“ fallen als Fehler auf.\n- [Abschlussquiz, 4.1a Das Passiv bilden] Wofür steht im Passiv das Wort „by“? Auswahl: Für die Zeit | Für das Objekt | Für den Handelnden („von …“) | Für den Ort\n  Ergebnis: Für den Handelnden („von …“)\n  Weg: Beim Passiv nennt „by“ den Handelnden („von …“). Man kann ihn weglassen, wenn er unwichtig ist. Beispiel: The canyon is visited by many tourists. Achtung: Ort und Zeit werden im Passiv mit in/at/on angeschlossen, nicht mit by.\n- [Abschlussquiz, 4.1b Passiv in verschiedenen Zeiten] Welcher Satz mit will-Passiv über die neuen Regeln ist richtig? Auswahl: The rules will been announced on Monday. | The rules will be announce on Monday. | The rules will announced on Monday. | The rules will be announced on Monday.\n  Ergebnis: The rules will be announced on Monday.\n  Weg: Passiv mit will: will + be + 3. Form → will be announced. Nach will steht immer die Grundform be; danach folgt das Partizip. Achtung: „will been“ und „will announced“ sind falsch, und „will be announce“ hat die falsche Form (Grundform statt 3. Form).\n- [Abschlussquiz, 4.2a Gerund oder Infinitiv?] Was bedeutet „I stopped to eat“? Auswahl: Ich habe aufgehört zu essen. | Ich habe angehalten, um zu essen. | Ich habe nie gegessen. | Ich habe das Essen probiert.\n  Ergebnis: Ich habe angehalten, um zu essen.\n  Weg: Bei stop kommt es auf die Form an: stop to do = anhalten, um etwas zu tun; stop doing = mit etwas aufhören. „I stopped to eat“ bedeutet: Ich habe angehalten, um zu essen. Achtung: Aufhören zu essen hieße „I stopped eating“.\n- [Übungsaufgaben 2, 4.1a Das Passiv bilden] Welche Passivform ist richtig? „Many souvenirs ___ in Santa Fe.“ Auswahl: are sold | are sell | is sell | is sold\n  Ergebnis: are sold\n  Weg: Passiv bilden: Subjekt in Mehrzahl (souvenirs) → are + 3. Form von sell: sold. Beispiel: Many souvenirs are sold in Santa Fe. Achtung: „is sold“ passt nur zur Einzahl; „are sell“ benutzt die Grundform statt der 3. Form.\n- [Übungsaufgaben 2, 4.1b Passiv in verschiedenen Zeiten] Wie lautet „Thieves stole three jeeps.“ im Passiv? Auswahl: Three jeeps are stolen. | Three jeeps were stole. | Three jeeps have been stolen. | Three jeeps were stolen.\n  Ergebnis: Three jeeps were stolen.\n  Weg: Die Zeit im Passiv richtet sich nach dem Aktivsatz: stole ist simple past → were + 3. Form von steal: stolen. Die Mehrzahl (jeeps) ergibt were. Achtung: „have been stolen“ ist present perfect und passt nicht zu stole; „were stole“ benutzt die falsche 3. Form.\n- [Übungsaufgaben 2, 4.2a Gerund oder Infinitiv?] Welcher Satz mit suggest ist richtig? Auswahl: She suggested went to the cinema. | She suggested to go to the cinema. | She suggested going to the cinema. | She suggested go to the cinema.\n  Ergebnis: She suggested going to the cinema.\n  Weg: Nach suggest steht das Gerund (-ing): She suggested going to the cinema. Merke: suggest, enjoy, finish, mind + -ing. Achtung: „suggested to go“ klingt wegen des Deutschen („vorgeschlagen, zu gehen“) richtig, ist aber falsch.",
  "aufgaben": {
   "Welcher Satz steht im Passiv?": {
    "teil": "4.1a",
    "typ": "wahl",
    "ergebnis": "Pottery is made by Pueblo artists.",
    "optionen": [
     "Pottery is made by Pueblo artists.",
     "Pueblo artists make pottery.",
     "Pueblo artists are making pottery.",
     "Pueblo artists made pottery."
    ]
   },
   "Welche Passivform gehört zum present perfect? „The tickets ___ already.“": {
    "teil": "4.1b",
    "typ": "wahl",
    "ergebnis": "have been sold",
    "optionen": [
     "have been sold",
     "are sold",
     "will be sold",
     "were sold"
    ]
   },
   "Welcher Satz mit enjoy ist richtig?": {
    "teil": "4.2a",
    "typ": "wahl",
    "ergebnis": "We enjoy walking in Santa Fe.",
    "optionen": [
     "We enjoy walk in Santa Fe.",
     "We enjoy walked in Santa Fe.",
     "We enjoy to walk in Santa Fe.",
     "We enjoy walking in Santa Fe."
    ]
   },
   "Wie lautet der Satz „Navajo guides lead the tours.“ im Passiv?": {
    "teil": "4.1a",
    "typ": "wahl",
    "ergebnis": "The tours are led by Navajo guides.",
    "optionen": [
     "The tours are lead by Navajo guides.",
     "The tours lead by Navajo guides.",
     "The tours are led by Navajo guides.",
     "The tours is led by Navajo guides."
    ]
   },
   "Wie lautet „They built the school in 1990.“ im Passiv?": {
    "teil": "4.1b",
    "typ": "wahl",
    "ergebnis": "The school was built in 1990.",
    "optionen": [
     "The school is built in 1990.",
     "The school has been built in 1990.",
     "The school was built in 1990.",
     "The school were built in 1990."
    ]
   },
   "Welcher Satz mit decide ist richtig?": {
    "teil": "4.2a",
    "typ": "wahl",
    "ergebnis": "Lena decided to take a photo.",
    "optionen": [
     "Lena decided to take a photo.",
     "Lena decided take a photo.",
     "Lena decided took a photo.",
     "Lena decided taking a photo."
    ]
   },
   "Wofür steht im Passiv das Wort „by“?": {
    "teil": "4.1a",
    "typ": "wahl",
    "ergebnis": "Für den Handelnden („von …“)",
    "optionen": [
     "Für die Zeit",
     "Für das Objekt",
     "Für den Handelnden („von …“)",
     "Für den Ort"
    ]
   },
   "Welcher Satz mit will-Passiv über die neuen Regeln ist richtig?": {
    "teil": "4.1b",
    "typ": "wahl",
    "ergebnis": "The rules will be announced on Monday.",
    "optionen": [
     "The rules will been announced on Monday.",
     "The rules will be announce on Monday.",
     "The rules will announced on Monday.",
     "The rules will be announced on Monday."
    ]
   },
   "Was bedeutet „I stopped to eat“?": {
    "teil": "4.2a",
    "typ": "wahl",
    "ergebnis": "Ich habe angehalten, um zu essen.",
    "optionen": [
     "Ich habe aufgehört zu essen.",
     "Ich habe angehalten, um zu essen.",
     "Ich habe nie gegessen.",
     "Ich habe das Essen probiert."
    ]
   },
   "Welche Passivform ist richtig? „Many souvenirs ___ in Santa Fe.“": {
    "teil": "4.1a",
    "typ": "wahl",
    "ergebnis": "are sold",
    "optionen": [
     "are sold",
     "are sell",
     "is sell",
     "is sold"
    ]
   },
   "Wie lautet „Thieves stole three jeeps.“ im Passiv?": {
    "teil": "4.1b",
    "typ": "wahl",
    "ergebnis": "Three jeeps were stolen.",
    "optionen": [
     "Three jeeps are stolen.",
     "Three jeeps were stole.",
     "Three jeeps have been stolen.",
     "Three jeeps were stolen."
    ]
   },
   "Welcher Satz mit suggest ist richtig?": {
    "teil": "4.2a",
    "typ": "wahl",
    "ergebnis": "She suggested going to the cinema.",
    "optionen": [
     "She suggested went to the cinema.",
     "She suggested to go to the cinema.",
     "She suggested going to the cinema.",
     "She suggested go to the cinema."
    ]
   },
   "Welcher Satz ist die richtige Passivform von „The cook makes pizza.“?": {
    "teil": "4.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Welche 3. Form (past participle) passt? „The new books are ___ by the school.“ (buy)": {
    "teil": "4.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Welcher Satz steht im will-Passiv?": {
    "teil": "4.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Wie lautet „They have painted the classroom.“ im Passiv?": {
    "teil": "4.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Welcher Satz mit Modalverb im Passiv ist richtig?": {
    "teil": "4.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Was bedeutet „I remember locking the door“?": {
    "teil": "4.2a",
    "typ": "wahl",
    "klausur": true
   },
   "Welcher Satz ist richtig? „If the coffee machine doesn't work, ___ off and on.“": {
    "teil": "4.2a",
    "typ": "wahl",
    "klausur": true
   },
   "Welcher Satz mit hope ist richtig?": {
    "teil": "4.2a",
    "typ": "wahl",
    "klausur": true
   }
  }
 },
 "e9-5-schreiben": {
  "titel": "Schreiben",
  "fach": "englisch",
  "klasse": 9,
  "teile": {
   "5.1a": "Argumentative essay",
   "5.1b": "Agreeing and disagreeing",
   "5.2a": "Diagramme und Statistiken beschreiben",
   "5.3a": "CV and application letter"
  },
  "text": "# Schreiben (Englisch, Klasse 9)\n\n## Merkkästen der Arbeitsblätter\n### 5.1a Argumentative essay\nEin argumentative essay gibt deine Meinung mit Begründungen. Aufbau in drei Teilen:\n1 Introduction: Thema nennen, Frage stellen. Many teenagers use social media every day.\n2 Main part: je Absatz ein Argument + Beispiel. First of all, … For example, … Moreover, … However, …\n3 Conclusion: Fazit + eigene Meinung. In conclusion, I think …\n\n### 5.1b Agreeing and disagreeing\nDu kannst zustimmen oder höflich widersprechen. Drei Schritte:\n1 Reagieren: I agree with you. / That's true. / I see your point, but …\n2 Meinung sagen: In my opinion, … / I'm afraid I don't agree.\n3 Begründen: … because it shows me new music.\nBeispiel: „Online ads are annoying.“ – „I see your point, but I think some ads are useful because they show me new music.“\n\n### 5.2a Diagramme und Statistiken beschreiben\nEine Diagrammbeschreibung hat drei Schritte:\n1 Einleitung: The bar chart shows how many students use …\n2 Wichtigste Zahlen: Most students (60 percent) … / Only 10 percent …\n3 Entwicklung: rise / increase ↑, fall / decrease ↓, stay the same →, from … to …\n\n### 5.3a CV and application letter\nEin application letter ist formell: keine Kurzformen (I am, nicht I'm), kein Slang.\n1 Anrede: Dear Ms Taylor, (Name bekannt) · Dear Sir or Madam, (unbekannt)\n2 Text: I am writing to apply for … / I am good at … / I look forward to hearing from you.\n3 Gruß: Yours sincerely, (nach Name) · Yours faithfully, (nach Sir or Madam)\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 5.1a Argumentative essay] Wie ist ein argumentative essay aufgebaut? Auswahl: Introduction – main part – conclusion | Conclusion – main part – introduction | Main part – introduction – conclusion | Nur eine Liste mit Argumenten\n  Ergebnis: Introduction – main part – conclusion\n  Weg: Ein argumentative essay hat drei Teile: Introduction (Thema und Fragestellung), main part (Argumente, jeweils mit Begründung und Beispiel) und conclusion (Fazit mit eigener Meinung). Die Reihenfolge ist also Introduction – main part – conclusion. Achtung: Eine bloße Liste von Argumenten hat keine Einleitung und keinen Schluss.\n- [Einstiegsquiz, 5.1b Agreeing and disagreeing] Welcher Satz drückt höfliche Zustimmung aus? Auswahl: I don't care. | I agree with you. | You are wrong. | That is stupid.\n  Ergebnis: I agree with you.\n  Weg: Zustimmung drückt man höflich mit Sätzen wie I agree with you, I think so too oder You are right aus. „I agree with you“ stimmt direkt und freundlich zu. Achtung: „You are wrong“ und „That is stupid“ sind Widerspruch und unhöflich; „I don’t care“ zeigt Desinteresse.\n- [Einstiegsquiz, 5.2a Diagramme und Statistiken beschreiben] Wie beginnst du eine Diagrammbeschreibung? Auswahl: Dear Sir or Madam, | In conclusion, the chart is good. | The bar chart shows how many students use social media. | I think social media is great.\n  Ergebnis: The bar chart shows how many students use social media.\n  Weg: Eine Diagrammbeschreibung beginnt mit einer Einleitung: Diagrammart + Thema (The bar chart shows …). Meinung gehört nicht hinein. „The bar chart shows how many students use social media“ nennt beides. Achtung: „I think …“ ist eine Meinung, „Dear Sir or Madam“ ein Briefanfang und „In conclusion“ ein Fazit.\n- [Einstiegsquiz, 5.3a CV and application letter] Welche Anrede passt zu einem Bewerbungsbrief an eine unbekannte Person? Auswahl: Hi there! | Dear Mr Sir, | Hello guys, | Dear Sir or Madam,\n  Ergebnis: Dear Sir or Madam,\n  Weg: Im formellen Brief hängt die Anrede davon ab, ob man den Namen kennt: Unbekannte Person → Dear Sir or Madam, (Schluss: Yours faithfully,). Der Bewerbungsbrief geht an eine unbekannte Person. Achtung: „Hi there!“ und „Hello guys,“ sind zu locker; „Dear Mr Sir“ gibt es nicht.\n- [Übungsaufgaben 1, 5.1a Argumentative essay] Welches Wort leitet ein Beispiel ein? Auswahl: For example | However | In conclusion | Moreover\n  Ergebnis: For example\n  Weg: Linking words (Verbindungswörter) strukturieren einen Text. For example heißt „zum Beispiel“ und leitet ein Beispiel ein. Das gesuchte Wort ist also For example. Achtung: However zeigt einen Gegensatz, Moreover ein zusätzliches Argument, In conclusion das Fazit.\n- [Übungsaufgaben 1, 5.1b Agreeing and disagreeing] Welche Antwort widerspricht höflich? Jan sagt: „Online ads are annoying.“ Auswahl: Be quiet. | I see your point, but some ads are useful. | No, you are wrong. | That is a stupid idea.\n  Ergebnis: I see your point, but some ads are useful.\n  Weg: Höflich widersprechen: erst Verständnis zeigen (I see your point), dann mit but den eigenen Standpunkt nennen. Jan sagt, Online-Werbung nerve → I see your point, but some ads are useful. Achtung: „No, you are wrong“, „stupid“ und „Be quiet“ sind direkt und unhöflich.\n- [Übungsaufgaben 1, 5.2a Diagramme und Statistiken beschreiben] Welches Wort passt? „The number of users ___ from 20 to 35 percent.“ (Es sind mehr geworden.) Auswahl: stayed | dropped | rose | fell\n  Ergebnis: rose\n  Weg: Veränderungen in Diagrammen: Anstieg = rise/rose, increase; Rückgang = fall/fell, drop/dropped; gleich bleiben = stay/stayed the same. Von 20 auf 35 Prozent ist ein Anstieg → rose (rise – rose – risen). Achtung: „fell“ und „dropped“ bedeuten sinken, „stayed“ gleich bleiben.\n- [Übungsaufgaben 1, 5.3a CV and application letter] Wie schließt du einen Brief an „Dear Ms Taylor,“ richtig? Auswahl: Yours faithfully, | Cheers, | See you, | Yours sincerely,\n  Ergebnis: Yours sincerely,\n  Weg: Briefschluss im formellen Brief: Name bekannt (Dear Ms Taylor) → Yours sincerely,. Name unbekannt (Dear Sir or Madam) → Yours faithfully,. Hier steht ein Name in der Anrede → Yours sincerely,. Achtung: „Cheers“ und „See you“ sind zu locker für einen formellen Brief.\n- [Abschlussquiz, 5.1a Argumentative essay] Welcher Satz gehört in die Conclusion? Auswahl: In conclusion, I think teenagers should be careful online. | First of all, strangers can see your photos. | Many teenagers use social media every day. | For example, apps collect your data.\n  Ergebnis: In conclusion, I think teenagers should be careful online.\n  Weg: Die Conclusion fasst zusammen und gibt die eigene Meinung, oft mit In conclusion oder To sum up. „In conclusion, I think teenagers should be careful online“ ist so ein Fazit. Achtung: „First of all“ und „For example“ gehören in den Hauptteil, der Hinweis auf viele Nutzer in die Introduction.\n- [Abschlussquiz, 5.1b Agreeing and disagreeing] Was bedeutet „I'm afraid I don't agree“? Auswahl: Ich weiß es nicht. | Ich sehe das leider anders. | Ich habe Angst. | Ich stimme völlig zu.\n  Ergebnis: Ich sehe das leider anders.\n  Weg: I’m afraid ist im Englischen eine Höflichkeitsfloskel vor etwas Unangenehmem. Es heißt hier nicht „Ich habe Angst“. I’m afraid I don’t agree = „Ich sehe das leider anders.“ So widerspricht man sanft. Achtung: „Ich stimme völlig zu“ wäre I couldn’t agree more.\n- [Abschlussquiz, 5.2a Diagramme und Statistiken beschreiben] Welcher Satz beschreibt die Zahlen richtig? 40 percent babysit, 20 percent deliver newspapers. Auswahl: Three times as many students babysit as deliver newspapers. | The same number of students babysit and deliver newspapers. | Twice as many students babysit as deliver newspapers. | Half as many students babysit as deliver newspapers.\n  Ergebnis: Twice as many students babysit as deliver newspapers.\n  Weg: Mengenvergleich: twice as many … as = doppelt so viele wie. 40 percent ist das Doppelte von 20 percent (40 : 20 = 2). Half as many wäre die Hälfte, three times as many das Dreifache. Achtung: Rechne immer nach: Die Zahlen sind nicht gleich, sonst wäre „the same number“ richtig.\n- [Abschlussquiz, 5.3a CV and application letter] Welcher Satz passt in einen formellen Bewerbungsbrief? Auswahl: I'm after a job at your shop. | Hey, I want to work for you. | I'm dead keen on your job. | I am writing to apply for the job as a student helper.\n  Ergebnis: I am writing to apply for the job as a student helper.\n  Weg: Ein formeller Bewerbungsbrief nutzt höfliche, vollständige Sätze ohne Slang und Kurzformen. Üblich ist die Einleitung I am writing to apply for … Der Satz nennt sofort den Zweck des Briefs: die Bewerbung. Achtung: „I’m after a job“, „Hey“ und „dead keen“ sind umgangssprachlich.\n- [Übungsaufgaben 2, 5.1a Argumentative essay] Was fehlt in diesem Absatz? „Social media is bad. Everybody knows it.“ Auswahl: Ein Grund und ein Beispiel | Eine Anrede | Ein Diagramm | Ein Gruß am Ende\n  Ergebnis: Ein Grund und ein Beispiel\n  Weg: Ein Argument besteht aus Behauptung + Begründung (reason) + Beispiel (example). Sonst ist es nur eine Behauptung. „Social media is bad. Everybody knows it.“ nennt nur die Behauptung – es fehlen eine Begründung und ein Beispiel. Achtung: Anrede, Diagramm und Gruß gehören nicht in einen Argumentabsatz.\n- [Übungsaufgaben 2, 5.1b Agreeing and disagreeing] Welcher Satz ist eine höfliche Teilzustimmung? Auswahl: I never listen to you. | I partly agree, but I think there are other reasons. | I totally disagree and you know nothing. | You are completely right, always.\n  Ergebnis: I partly agree, but I think there are other reasons.\n  Weg: Teilzustimmung: I partly agree, but … – man erkennt einen Teil an und nennt dann die eigene Sicht. So bleibt man höflich und zeigt, dass man zugehört hat. Achtung: „I totally disagree and you know nothing“ ist unhöflich, „always right“ ist übertrieben und „I never listen“ passt gar nicht.\n- [Übungsaufgaben 2, 5.2a Diagramme und Statistiken beschreiben] Welches Wort passt? „The line stays at 30 percent. The number ___ the same.“ Auswahl: falls | drops | stays | rises\n  Ergebnis: stays\n  Weg: Bleibt eine Linie gleich, sagt man: The number stays the same (stay – stayed). Das Verb steht im present simple: Einzahl The number → stays. Achtung: rises = steigt, falls und drops = sinken; sie passen nicht zu einer gleich bleibenden Linie.\n- [Übungsaufgaben 2, 5.3a CV and application letter] Was ist falsch in diesem Satz eines Bewerbungsbriefs? „I'm very good with customers.“ Auswahl: Das Wort „customers“ gibt es nicht | Der Satz muss mit „Hi“ beginnen | Man darf nichts über sich schreiben | Die Kurzform „I'm“ ist zu informell; besser „I am“\n  Ergebnis: Die Kurzform „I'm“ ist zu informell; besser „I am“\n  Weg: Formelle Briefe vermeiden Kurzformen. Man schreibt I am statt I’m, do not statt don’t. Im Satz „I’m very good with customers“ ist die Kurzform I’m zu informell → I am very good with customers. Achtung: Man darf und soll in einem Bewerbungsbrief etwas über sich schreiben, und „customers“ ist ein richtiges Wort.",
  "aufgaben": {
   "Wie ist ein argumentative essay aufgebaut?": {
    "teil": "5.1a",
    "typ": "wahl",
    "ergebnis": "Introduction – main part – conclusion",
    "optionen": [
     "Introduction – main part – conclusion",
     "Conclusion – main part – introduction",
     "Main part – introduction – conclusion",
     "Nur eine Liste mit Argumenten"
    ]
   },
   "Welcher Satz drückt höfliche Zustimmung aus?": {
    "teil": "5.1b",
    "typ": "wahl",
    "ergebnis": "I agree with you.",
    "optionen": [
     "I don't care.",
     "I agree with you.",
     "You are wrong.",
     "That is stupid."
    ]
   },
   "Wie beginnst du eine Diagrammbeschreibung?": {
    "teil": "5.2a",
    "typ": "wahl",
    "ergebnis": "The bar chart shows how many students use social media.",
    "optionen": [
     "Dear Sir or Madam,",
     "In conclusion, the chart is good.",
     "The bar chart shows how many students use social media.",
     "I think social media is great."
    ]
   },
   "Welche Anrede passt zu einem Bewerbungsbrief an eine unbekannte Person?": {
    "teil": "5.3a",
    "typ": "wahl",
    "ergebnis": "Dear Sir or Madam,",
    "optionen": [
     "Hi there!",
     "Dear Mr Sir,",
     "Hello guys,",
     "Dear Sir or Madam,"
    ]
   },
   "Welches Wort leitet ein Beispiel ein?": {
    "teil": "5.1a",
    "typ": "wahl",
    "ergebnis": "For example",
    "optionen": [
     "For example",
     "However",
     "In conclusion",
     "Moreover"
    ]
   },
   "Welche Antwort widerspricht höflich? Jan sagt: „Online ads are annoying.“": {
    "teil": "5.1b",
    "typ": "wahl",
    "ergebnis": "I see your point, but some ads are useful.",
    "optionen": [
     "Be quiet.",
     "I see your point, but some ads are useful.",
     "No, you are wrong.",
     "That is a stupid idea."
    ]
   },
   "Welches Wort passt? „The number of users ___ from 20 to 35 percent.“ (Es sind mehr geworden.)": {
    "teil": "5.2a",
    "typ": "wahl",
    "ergebnis": "rose",
    "optionen": [
     "stayed",
     "dropped",
     "rose",
     "fell"
    ]
   },
   "Wie schließt du einen Brief an „Dear Ms Taylor,“ richtig?": {
    "teil": "5.3a",
    "typ": "wahl",
    "ergebnis": "Yours sincerely,",
    "optionen": [
     "Yours faithfully,",
     "Cheers,",
     "See you,",
     "Yours sincerely,"
    ]
   },
   "Welcher Satz gehört in die Conclusion?": {
    "teil": "5.1a",
    "typ": "wahl",
    "ergebnis": "In conclusion, I think teenagers should be careful online.",
    "optionen": [
     "In conclusion, I think teenagers should be careful online.",
     "First of all, strangers can see your photos.",
     "Many teenagers use social media every day.",
     "For example, apps collect your data."
    ]
   },
   "Was bedeutet „I'm afraid I don't agree“?": {
    "teil": "5.1b",
    "typ": "wahl",
    "ergebnis": "Ich sehe das leider anders.",
    "optionen": [
     "Ich weiß es nicht.",
     "Ich sehe das leider anders.",
     "Ich habe Angst.",
     "Ich stimme völlig zu."
    ]
   },
   "Welcher Satz beschreibt die Zahlen richtig? 40 percent babysit, 20 percent deliver newspapers.": {
    "teil": "5.2a",
    "typ": "wahl",
    "ergebnis": "Twice as many students babysit as deliver newspapers.",
    "optionen": [
     "Three times as many students babysit as deliver newspapers.",
     "The same number of students babysit and deliver newspapers.",
     "Twice as many students babysit as deliver newspapers.",
     "Half as many students babysit as deliver newspapers."
    ]
   },
   "Welcher Satz passt in einen formellen Bewerbungsbrief?": {
    "teil": "5.3a",
    "typ": "wahl",
    "ergebnis": "I am writing to apply for the job as a student helper.",
    "optionen": [
     "I'm after a job at your shop.",
     "Hey, I want to work for you.",
     "I'm dead keen on your job.",
     "I am writing to apply for the job as a student helper."
    ]
   },
   "Was fehlt in diesem Absatz? „Social media is bad. Everybody knows it.“": {
    "teil": "5.1a",
    "typ": "wahl",
    "ergebnis": "Ein Grund und ein Beispiel",
    "optionen": [
     "Ein Grund und ein Beispiel",
     "Eine Anrede",
     "Ein Diagramm",
     "Ein Gruß am Ende"
    ]
   },
   "Welcher Satz ist eine höfliche Teilzustimmung?": {
    "teil": "5.1b",
    "typ": "wahl",
    "ergebnis": "I partly agree, but I think there are other reasons.",
    "optionen": [
     "I never listen to you.",
     "I partly agree, but I think there are other reasons.",
     "I totally disagree and you know nothing.",
     "You are completely right, always."
    ]
   },
   "Welches Wort passt? „The line stays at 30 percent. The number ___ the same.“": {
    "teil": "5.2a",
    "typ": "wahl",
    "ergebnis": "stays",
    "optionen": [
     "falls",
     "drops",
     "stays",
     "rises"
    ]
   },
   "Was ist falsch in diesem Satz eines Bewerbungsbriefs? „I'm very good with customers.“": {
    "teil": "5.3a",
    "typ": "wahl",
    "ergebnis": "Die Kurzform „I'm“ ist zu informell; besser „I am“",
    "optionen": [
     "Das Wort „customers“ gibt es nicht",
     "Der Satz muss mit „Hi“ beginnen",
     "Man darf nichts über sich schreiben",
     "Die Kurzform „I'm“ ist zu informell; besser „I am“"
    ]
   },
   "Wo steht „First of all, …“ meistens?": {
    "teil": "5.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Welches linking word zeigt einen Gegensatz? „Phones are useful. ___, they can distract students.“": {
    "teil": "5.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Welche Antwort passt zu: „I couldn't agree more.“?": {
    "teil": "5.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Wie widersprichst du höflich in einer Diskussion über Werbung im Internet?": {
    "teil": "5.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Welcher Satz ist eine gute Einleitung? Das Diagramm zeigt, wie viele Jugendliche in Australien ein Smartphone besitzen.": {
    "teil": "5.2a",
    "typ": "wahl",
    "klausur": true
   },
   "Beispiel-Zahlen: 2010: 20 percent, 2020: 60 percent. Welcher Satz stimmt?": {
    "teil": "5.2a",
    "typ": "wahl",
    "klausur": true
   },
   "Wie schließt du einen Brief an „Dear Sir or Madam,“ richtig?": {
    "teil": "5.3a",
    "typ": "wahl",
    "klausur": true
   },
   "Welcher Satz sollte in einem Bewerbungsbrief für einen Studentenjob in Phoenix stehen?": {
    "teil": "5.3a",
    "typ": "wahl",
    "klausur": true
   }
  }
 },
 "m10-1-aehnlichkeit": {
  "titel": "Ähnlichkeit und Strahlensätze",
  "fach": "mathe",
  "klasse": 10,
  "teile": {
   "1.1a": "Größer und kleiner",
   "1.1b": "Streckung zeichnen",
   "1.2a": "Ähnlich oder nicht?",
   "1.2b": "Längen berechnen",
   "1.2c": "Flächen und Volumen",
   "1.3a": "Erster Strahlensatz",
   "1.3b": "Zweiter Strahlensatz",
   "1.3c": "Höhen messen"
  },
  "text": "# Ähnlichkeit und Strahlensätze (Mathe, Klasse 10)\n\n## Merkkästen der Arbeitsblätter\n### 1.1a Größer und kleiner\nDer Streckfaktor k sagt, wie stark eine Figur gestreckt wird:\nBild = k · Original\nk > 1 vergrößert, 0 < k < 1 verkleinert.\n1 k ablesen: k = 2,5\n2 Länge mal k: 4 · 2,5\n3 Ergebnis: 10 cm\n\n### 1.1b Streckung zeichnen\nDas Streckzentrum Z bleibt fest. Jeder Bildpunkt liegt auf dem Strahl von Z durch den Punkt.\n1 Strahl von Z durch A\n2 ZA messen: 2 cm\n3 ZA' = k · ZA = 3 · 2 = 6 cm\n\n### 1.2a Ähnlich oder nicht?\nFiguren sind ähnlich, wenn alle Winkel gleich sind und alle Seiten im gleichen Verhältnis stehen.\nBeispiel: 3 × 2 und 6 × 4 → 6 : 3 = 2 und 4 : 2 = 2, also ähnlich.\n1 Winkel prüfen\n2 Seiten teilen: Bild : Original\n3 Alle Ergebnisse gleich? → ähnlich\n\n### 1.2b Längen berechnen\nErst den Streckfaktor k = Bild : Original bestimmen, dann jede gesuchte Seite mal k rechnen.\nBeispiel: Dreieck mit 4, 5 cm; die 4 cm entsprechen 6 cm. Gesucht: x.\n1 Passende Seiten: 4 ↔ 6\n2 k = 6 : 4 = 1,5\n3 x = 5 · 1,5 = 7,5 cm\n\n### 1.2c Flächen und Volumen\nWird mit dem Faktor k gestreckt, gilt: Länge · k, Fläche · k², Volumen · k³.\nBeispiel: k = 3 und Fläche 2 cm² → neue Fläche 2 · 3² = 18 cm².\n1 k bestimmen: k = 3\n2 k² rechnen: 3² = 9\n3 Fläche · 9: 2 · 9 = 18 cm²\n\n### 1.3a Erster Strahlensatz\nZwei Strahlen starten in Z und werden von zwei Parallelen (AC ∥ BD) geschnitten. Dann gilt:\nZA : ZB = ZC : ZD\nBeispiel: ZA = 3, ZB = 6, ZC = 4, ZD = x\n1 Parallelen finden\n2 3 : 6 = 4 : x\n3 x = 4 · 6 : 3 = 8\n\n### 1.3b Zweiter Strahlensatz\nDie Parallelen AC und BD verhalten sich wie die Abschnitte auf dem Strahl ab Z:\nZA : ZB = AC : BD\nBeispiel: ZA = 2, ZB = 5, AC = 3, BD = x\n1 Parallelen AC und BD erkennen\n2 2 : 5 = 3 : x\n3 x = 3 · 5 : 2 = 7,5\n\n### 1.3c Höhen messen\nDie Sonnenstrahlen sind (fast) parallel. Stab und Baum bilden mit ihren Schatten ähnliche Dreiecke:\nHöhe : Schatten = Höhe : Schatten\n1 Stab 1 m, Schatten 1,5 m\n2 Baumschatten 12 m: h : 12 = 1 : 1,5\n3 h = 12 · 1 : 1,5 = 8 m\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 1.1a Größer und kleiner] Eine Strecke ist 5 cm lang und wird mit k = 3 gestreckt. Wie lang ist die Bildstrecke? Auswahl: 15 cm | 8 cm | 1,67 cm | 125 cm\n  Ergebnis: 15 cm\n  Weg: Der Streckfaktor k sagt, wie oft die Originallänge in der Bildlänge steckt: Bild = k · Original. Hier: 3 · 5 cm = 15 cm. Achtung: 8 cm (= 5 + 3) wäre falsch – k wird multipliziert, nicht addiert.\n- [Einstiegsquiz, 1.1b Streckung zeichnen] Z ist das Streckzentrum, ZA = 2 cm und k = 3. Wie weit liegt A' von Z entfernt? Auswahl: 6 cm | 5 cm | ⅔ cm | 1 cm\n  Ergebnis: 6 cm\n  Weg: Bei der zentrischen Streckung werden alle Abstände vom Zentrum Z mit k multipliziert: ZA' = k · ZA. Hier: ZA' = 3 · 2 cm = 6 cm. Achtung: 5 cm (= 2 + 3) wäre falsch – k wird multipliziert, nicht addiert.\n- [Einstiegsquiz, 1.2a Ähnlich oder nicht?] Sind ein Rechteck 4 cm × 6 cm und ein Rechteck 10 cm × 15 cm ähnlich? Auswahl: Ja | Nein\n  Ergebnis: Ja\n  Weg: Ähnliche Figuren werden überall mit demselben Faktor k gestreckt, die Seitenverhältnisse sind also gleich. Breite: 10 : 4 = 2,5, Länge: 15 : 6 = 2,5 → beide Male k = 2,5, also ähnlich. Probe: 4 · 2,5 = 10 ✓ und 6 · 2,5 = 15 ✓.\n- [Einstiegsquiz, 1.2b Längen berechnen] Zwei ähnliche Dreiecke: Einer Seite von 4 cm im kleinen Dreieck entsprechen 10 cm im großen. Eine andere Seite im kleinen Dreieck ist 6 cm lang. Wie lang ist die passende Seite im großen?\n  Ergebnis: 15 cm\n  Weg: Bei ähnlichen Dreiecken werden alle Seiten mit demselben Faktor k gestreckt. k aus dem bekannten Paar: k = 10 : 4 = 2,5. Gesuchte Seite: 6 cm · 2,5 = 15 cm. Achtung: Addieren (6 + 6 = 12 cm) wäre falsch – ähnlich heißt multiplizieren.\n- [Einstiegsquiz, 1.2c Flächen und Volumen] Eine Figur wird mit k = 2 gestreckt. Wievielmal so groß wird der Flächeninhalt? Auswahl: 2-mal | 4-mal | 8-mal | 6-mal\n  Ergebnis: 4-mal\n  Weg: Bei der Streckung wird jede Länge k-mal so groß. Eine Fläche hat zwei Längen (Länge · Breite), also wächst sie um k · k = k². Hier: k = 2 → 2² = 4-mal so groß. Probe: Quadrat 1 × 1 wird 2 × 2, die Fläche geht von 1 auf 4 ✓. Achtung: 2-mal gilt nur für die Länge.\n- [Einstiegsquiz, 1.3a Erster Strahlensatz] Erster Strahlensatz (AC ∥ BD): ZA = 2 cm, ZB = 6 cm, ZC = 3 cm. Wie lang ist ZD?\n  Ergebnis: 9 cm\n  Weg: 1. Strahlensatz: Parallele Geraden schneiden auf beiden Strahlen gleiche Verhältnisse ab: ZA : ZB = ZC : ZD. Einsetzen: 2 : 6 = 3 : x → x = 3 · 6 : 2 = 9 cm. Probe: 2 : 6 = 1 : 3 und 3 : 9 = 1 : 3 ✓.\n- [Einstiegsquiz, 1.3b Zweiter Strahlensatz] Zweiter Strahlensatz (AC ∥ BD): ZA = 3 cm, ZB = 9 cm, AC = 2 cm. Wie lang ist BD?\n  Ergebnis: 6 cm\n  Weg: 2. Strahlensatz: Die parallelen Strecken verhalten sich wie die Abstände von Z: ZA : ZB = AC : BD. Einsetzen: 3 : 9 = 2 : x → x = 2 · 9 : 3 = 6 cm. Probe: 3 : 9 = 1 : 3 und 2 : 6 = 1 : 3 ✓.\n- [Einstiegsquiz, 1.3c Höhen messen] Ein 1 m langer Stab wirft 2 m Schatten. Gleichzeitig wirft ein Baum 14 m Schatten. Wie hoch ist der Baum?\n  Ergebnis: 7 m\n  Weg: Sonnenstrahlen sind fast parallel, deshalb sind Stab mit Schatten und Baum mit Schatten ähnliche Dreiecke: Höhe : Schatten ist gleich. h : 14 = 1 : 2 → h = 14 · 1 : 2 = 7 m. Probe: Der Schatten ist 7-mal so lang (14 : 2), also ist der Baum 7-mal so hoch wie der Stab: 7 m ✓.\n- [Übungsaufgaben 1, 1.1a Größer und kleiner] Ein Foto ist 12 cm breit und wird mit k = 2,5 als Poster gedruckt. Wie breit wird das Poster?\n  Ergebnis: 30 cm\n  Weg: Ein Streckfaktor k = 2,5 (größer als 1) vergrößert: neue Länge = k · alte Länge. Breite: 12 cm · 2,5 = 30 cm (12 · 2 = 24 und 12 : 2 = 6, zusammen 30). Probe: 30 : 12 = 2,5 ✓.\n- [Übungsaufgaben 1, 1.1b Streckung zeichnen] Ein Punkt P liegt 5 cm vom Streckzentrum Z entfernt. Gestreckt wird mit k = 0,4. Wie weit ist P' von Z entfernt?\n  Ergebnis: 2 cm\n  Weg: Ist k kleiner als 1, wird verkleinert: der Abstand vom Zentrum Z schrumpft auf das 0,4-Fache. ZP' = 0,4 · 5 cm = 2 cm. P' liegt auf derselben Geraden wie P, aber näher an Z. Probe: 2 : 5 = 0,4 ✓.\n- [Übungsaufgaben 1, 1.2a Ähnlich oder nicht?] Welches Rechteck ist ähnlich zu einem Rechteck mit 6 cm × 4 cm? Auswahl: 9 cm × 6 cm | 9 cm × 7 cm | 8 cm × 6 cm | 10 cm × 6 cm\n  Ergebnis: 9 cm × 6 cm\n  Weg: Ähnlich heißt: beide Seiten werden mit demselben Faktor k gestreckt. 9 × 6: 9 : 6 = 1,5 und 6 : 4 = 1,5 → gleich, also ähnlich. Achtung: Bei 9 × 7 ist 9 : 6 = 1,5, aber 7 : 4 = 1,75 – verschieden, also nicht ähnlich. Bei den anderen passt es auch nicht.\n- [Übungsaufgaben 1, 1.2b Längen berechnen] Ein Modellauto ist 12 cm lang und 4 cm hoch. Das echte Auto ist 4,8 m lang. Wie hoch ist es (in m)?\n  Ergebnis: 1,6 m\n  Weg: Ähnlich: Länge und Höhe werden mit demselben k gestreckt. Erst k aus dem bekannten Paar, dann die Höhe. k = 4,8 m : 12 cm = 480 cm : 12 cm = 40 (gleiche Einheit!). Höhe: 4 cm · 40 = 160 cm = 1,6 m. Achtung: 160 sind cm, nicht m – erst umrechnen.\n- [Übungsaufgaben 1, 1.2c Flächen und Volumen] Eine kleine Pizza (Ø 20 cm) hat 314 cm². Wie groß ist die Fläche einer ähnlichen Pizza mit Ø 30 cm? (mit 314 cm² rechnen)\n  Ergebnis: 706,5 cm²\n  Weg: Eine Fläche wächst mit k² (Länge und Breite werden beide k-mal so groß). k = 30 : 20 = 1,5 → k² = 2,25 → 314 · 2,25 = 706,5 cm². Achtung: 314 · 1,5 = 471 wäre falsch – das wäre nur k, nicht k².\n- [Übungsaufgaben 1, 1.3a Erster Strahlensatz] Zwei Wege starten in Z. Auf dem ersten liegen A bei 40 m und B bei 100 m, auf dem zweiten C bei 60 m. AC ∥ BD. Wie weit ist D von Z entfernt?\n  Ergebnis: 150 m\n  Weg: 1. Strahlensatz: Die Abschnitte vom Zentrum Z aus stehen im gleichen Verhältnis: ZA : ZB = ZC : ZD. 40 : 100 = 60 : x → x = 100 · 60 : 40 = 150 m. Probe: 40 : 100 = 0,4 und 60 : 150 = 0,4 ✓.\n- [Übungsaufgaben 1, 1.3b Zweiter Strahlensatz] Eine 5 cm breite Karte steht 25 cm vor einer Lampe (Z). Die Wand ist 100 cm von der Lampe entfernt. Wie breit ist der Schatten?\n  Ergebnis: 20 cm\n  Weg: Die Lampe ist Z, Karte und Schatten sind parallel – es gilt der Strahlensatz: Abstand von Z : Abstand von Z = Karte : Schatten. 25 : 100 = 5 : x → x = 100 · 5 : 25 = 20 cm. Probe: Die Wand ist 4-mal so weit weg (100 : 25), also ist der Schatten 4-mal so breit: 5 · 4 = 20 ✓.\n- [Übungsaufgaben 1, 1.3c Höhen messen] Ein Mann (1,8 m) wirft 2,4 m Schatten, ein Turm gleichzeitig 40 m. Wie hoch ist der Turm?\n  Ergebnis: 30 m\n  Weg: Gleichzeitig sind die Sonnenstrahlen parallel, also sind die Dreiecke ähnlich: Höhe : Schatten ist bei Mann und Turm gleich. h : 40 = 1,8 : 2,4 → h = 40 · 1,8 : 2,4 = 72 : 2,4 = 30 m. Probe: 1,8 : 2,4 = 0,75 und 30 : 40 = 0,75 ✓.\n- [Abschlussquiz, 1.1a Größer und kleiner] Das Original ist 24 cm lang, das Bild 6 cm. Welcher Streckfaktor k wurde benutzt?\n  Ergebnis: 0,25\n  Weg: Der Streckfaktor ist Bild durch Original: k = 6 : 24 = 0,25. Das passt, denn das Bild ist kleiner als das Original, also muss k kleiner als 1 sein. Probe: 24 · 0,25 = 6 ✓. Achtung: 24 : 6 = 4 wäre der Faktor in Gegenrichtung (Bild → Original).\n- [Abschlussquiz, 1.1b Streckung zeichnen] Streckzentrum Z = (0|0), A = (3|1), k = 2. Wo liegt A'? Auswahl: (6|2) | (5|3) | (1,5|0,5) | (6|1)\n  Ergebnis: (6|2)\n  Weg: Liegt Z im Ursprung, werden beide Koordinaten mit k multipliziert: A' = (k · x | k · y). (3|1) → (2 · 3 | 2 · 1) = (6|2). Achtung: (6|1) wäre falsch – auch die y-Koordinate wird mit 2 multipliziert. (5|3) käme von Addieren statt Multiplizieren.\n- [Abschlussquiz, 1.2a Ähnlich oder nicht?] Was gilt für ähnliche Figuren? Auswahl: Alle Winkel gleich und alle Seitenverhältnisse gleich | Alle Seiten gleich lang | Gleicher Flächeninhalt | Nur die Winkel sind gleich\n  Ergebnis: Alle Winkel gleich und alle Seitenverhältnisse gleich\n  Weg: Ähnlich heißt: gleiche Form, aber die Größe darf verschieden sein. Dafür müssen alle Winkel gleich sein und alle Seitenverhältnisse (derselbe Faktor k). Achtung: „Gleicher Flächeninhalt“ oder „alle Seiten gleich lang“ betrifft die Größe. „Nur Winkel gleich“ reicht nicht: Quadrat und Rechteck haben beide 90°, sind aber nicht ähnlich.\n- [Abschlussquiz, 1.2b Längen berechnen] Ein Dreieck hat die Seiten 3 cm, 4 cm und 5 cm. Ein ähnliches Dreieck hat als kürzeste Seite 9 cm. Wie lang ist seine längste Seite?\n  Ergebnis: 15 cm\n  Weg: Bei ähnlichen Dreiecken werden alle Seiten mit demselben Faktor k gestreckt. k aus der kürzesten Seite: k = 9 : 3 = 3. Die längste Seite ist 5 cm: 5 · 3 = 15 cm. Probe: Das große Dreieck hat 9, 12, 15 cm = 3 · (3, 4, 5) ✓.\n- [Abschlussquiz, 1.2c Flächen und Volumen] Ein Körper hat 4 cm³ Volumen. Er wird mit k = 3 gestreckt. Wie groß ist das neue Volumen?\n  Ergebnis: 108 cm³\n  Weg: Ein Volumen hat drei Längen (Länge, Breite, Höhe), jede wird k-mal so groß → das Volumen wächst um k³. 4 cm³ · 3³ = 4 · 27 = 108 cm³. Achtung: 4 · 3 = 12 oder 4 · 3² = 36 wären falsch – beim Volumen braucht man die dritte Potenz.\n- [Abschlussquiz, 1.3a Erster Strahlensatz] Erster Strahlensatz mit AC ∥ BD: Welche Gleichung stimmt? Auswahl: ZA : ZB = ZC : ZD | ZA : ZB = ZD : ZC | ZA : ZB = AC : ZD | ZA + ZB = ZC + ZD\n  Ergebnis: ZA : ZB = ZC : ZD\n  Weg: Beim 1. Strahlensatz stehen die Abschnitte auf einem Strahl im gleichen Verhältnis wie auf dem anderen, jeweils „kleiner zu größer“: ZA : ZB = ZC : ZD. Achtung: ZA : ZB = ZD : ZC wäre falsch (links klein : groß, rechts groß : klein). Summen wie ZA + ZB = ZC + ZD gelten nicht – es geht um Verhältnisse.\n- [Abschlussquiz, 1.3b Zweiter Strahlensatz] AC ∥ BD, ZA = 4 cm, ZB = 10 cm, BD = 15 cm. Wie lang ist AC?\n  Ergebnis: 6 cm\n  Weg: 2. Strahlensatz: Die parallelen Strecken verhalten sich wie die Abstände von Z: ZA : ZB = AC : BD. 4 : 10 = x : 15 → x = 4 · 15 : 10 = 60 : 10 = 6 cm. Probe: A liegt näher an Z als B, also ist AC kürzer als BD: 6 < 15 ✓ und 4 : 10 = 6 : 15 = 0,4 ✓.\n- [Abschlussquiz, 1.3c Höhen messen] Warum kann man mit Schatten Höhen messen? Auswahl: Die Sonnenstrahlen sind fast parallel, es entstehen ähnliche Dreiecke | Schatten sind immer gleich lang | Alle Bäume sind gleich hoch | Die Sonne steht senkrecht\n  Ergebnis: Die Sonnenstrahlen sind fast parallel, es entstehen ähnliche Dreiecke\n  Weg: Die Sonne ist so weit weg, dass ihre Strahlen fast parallel ankommen. Dann haben Stab und Baum denselben Einfallswinkel → ähnliche Dreiecke → gleiches Verhältnis Höhe : Schatten. Achtung: Schatten sind nicht immer gleich lang – sie hängen von Höhe und Sonnenstand ab, nur das Verhältnis bleibt gleich.\n- [Übungsaufgaben 2, 1.1a Größer und kleiner] Ein Kopierer verkleinert eine 29,7 cm lange Seite auf 70 % (k = 0,7). Wie lang wird sie? (2 Nachkommastellen)\n  Ergebnis: 20,79 cm\n  Weg: 70 % bedeutet k = 0,7. Neue Länge = k · alte Länge. 29,7 cm · 0,7 = 20,79 cm (29,7 · 7 = 207,9, dann : 10). Probe: Verkleinert wurde, also muss das Ergebnis kleiner als 29,7 sein: 20,79 < 29,7 ✓.\n- [Übungsaufgaben 2, 1.1b Streckung zeichnen] Z = (1|1), A = (3|2). Gestreckt wird mit k = 3. Welche y-Koordinate hat A'?\n  Ergebnis: 4\n  Weg: Z liegt nicht im Ursprung, deshalb wird der Weg von Z nach A mit k multipliziert, nicht die Koordinate selbst. ZA = (3−1 | 2−1) = (2 | 1) → mal 3: (6 | 3). A' = (1+6 | 1+3) = (7 | 4), also y = 4. Achtung: 3 · 2 = 6 wäre nur richtig, wenn Z im Ursprung läge.\n- [Übungsaufgaben 2, 1.2a Ähnlich oder nicht?] Welche Figuren sind immer zueinander ähnlich? Auswahl: Alle Quadrate | Alle Rechtecke | Alle Rauten | Alle Dreiecke\n  Ergebnis: Alle Quadrate\n  Weg: Ähnlich sind Figuren mit gleichen Winkeln und gleichen Seitenverhältnissen. Quadrate haben immer vier 90°-Winkel und vier gleich lange Seiten – je zwei Quadrate sind also ähnlich. Achtung: Rechtecke haben auch 90°, aber das Seitenverhältnis kann verschieden sein (z. B. 2 × 1 und 3 × 1).\n- [Übungsaufgaben 2, 1.2b Längen berechnen] Ein Rechteck 5 cm × 8 cm hat den Umfang 26 cm. Ein ähnliches Rechteck hat als kurze Seite 15 cm. Wie groß ist sein Umfang?\n  Ergebnis: 78 cm\n  Weg: Bei Ähnlichkeit wächst der Umfang (eine Länge) mit k, nicht mit k². k = 15 : 5 = 3 → Umfang 26 cm · 3 = 78 cm. Probe: Das Rechteck ist 15 × 24, also 2 · (15 + 24) = 78 ✓. Achtung: k² = 9 gilt nur für Flächen.\n- [Übungsaufgaben 2, 1.2c Flächen und Volumen] Ein Wassertank fasst 125 Liter. Ein ähnlicher Tank hat doppelt so lange Kanten. Wie viele Liter fasst er?\n  Ergebnis: 1000 Liter\n  Weg: Doppelt so lange Kanten heißt k = 2. Das Volumen wächst mit k³ (Länge, Breite und Höhe werden alle 2-mal so groß). 125 L · 2³ = 125 · 8 = 1 000 Liter. Achtung: 125 · 2 = 250 wäre falsch – es wächst nicht nur eine Kante.\n- [Übungsaufgaben 2, 1.3a Erster Strahlensatz] Von Z führen zwei Straßen weg. ZA = 150 m, AB = 250 m, ZC = 210 m, AC ∥ BD. Wie lang ist das Stück CD?\n  Ergebnis: 350 m\n  Weg: 1. Strahlensatz: ZA : ZB = ZC : ZD. Gesucht ist nur das Stück CD = ZD − ZC. ZB = ZA + AB = 150 + 250 = 400 m. Dann 150 : 400 = 210 : x → ZD = 400 · 210 : 150 = 560 m. CD = 560 − 210 = 350 m. Achtung: 560 m ist erst ZD, nicht CD.\n- [Übungsaufgaben 2, 1.3b Zweiter Strahlensatz] AC ∥ BD, ZA = 6 cm, AB = 4 cm, BD = 15 cm. Wie lang ist AC?\n  Ergebnis: 9 cm\n  Weg: 2. Strahlensatz: ZA : ZB = AC : BD. ZB ist nicht gegeben, aber ZB = ZA + AB = 6 + 4 = 10 cm. 6 : 10 = x : 15 → x = 6 · 15 : 10 = 9 cm. Probe: AC < BD, denn A liegt näher an Z als B: 9 < 15 ✓. Achtung: Mit AB = 4 statt ZB = 10 zu rechnen wäre falsch.\n- [Übungsaufgaben 2, 1.3c Höhen messen] Daumensprung: Arm 60 cm. Ein 9 m hohes Haus füllt genau 4,5 cm deines Daumens. Wie weit ist es entfernt (in m)?\n  Ergebnis: 120 m\n  Weg: Strahlensatz: Haus (900 cm) und Daumenbreite (4,5 cm) verhalten sich wie Entfernung e und Armlänge (60 cm). 900 : 4,5 = e : 60 → e = 900 · 60 : 4,5 = 12 000 cm = 120 m. Probe: Das Haus ist 200-mal so hoch wie das Daumenbild (900 : 4,5), also 200-mal so weit weg wie der Daumen: 60 · 200 = 12 000 cm ✓.",
  "aufgaben": {
   "Eine Strecke ist 5 cm lang und wird mit k = 3 gestreckt. Wie lang ist die Bildstrecke?": {
    "teil": "1.1a",
    "typ": "wahl",
    "ergebnis": "15 cm",
    "optionen": [
     "15 cm",
     "8 cm",
     "1,67 cm",
     "125 cm"
    ]
   },
   "Z ist das Streckzentrum, ZA = 2 cm und k = 3. Wie weit liegt A' von Z entfernt?": {
    "teil": "1.1b",
    "typ": "wahl",
    "ergebnis": "6 cm",
    "optionen": [
     "6 cm",
     "5 cm",
     "⅔ cm",
     "1 cm"
    ]
   },
   "Sind ein Rechteck 4 cm × 6 cm und ein Rechteck 10 cm × 15 cm ähnlich?": {
    "teil": "1.2a",
    "typ": "wahl",
    "ergebnis": "Ja",
    "optionen": [
     "Ja",
     "Nein"
    ]
   },
   "Zwei ähnliche Dreiecke: Einer Seite von 4 cm im kleinen Dreieck entsprechen 10 cm im großen. Eine andere Seite im kleinen Dreieck ist 6 cm lang. Wie lang ist die passende Seite im großen?": {
    "teil": "1.2b",
    "typ": "zahl",
    "ergebnis": "15 cm",
    "antwort": 15
   },
   "Eine Figur wird mit k = 2 gestreckt. Wievielmal so groß wird der Flächeninhalt?": {
    "teil": "1.2c",
    "typ": "wahl",
    "ergebnis": "4-mal",
    "optionen": [
     "2-mal",
     "4-mal",
     "8-mal",
     "6-mal"
    ]
   },
   "Erster Strahlensatz (AC ∥ BD): ZA = 2 cm, ZB = 6 cm, ZC = 3 cm. Wie lang ist ZD?": {
    "teil": "1.3a",
    "typ": "zahl",
    "ergebnis": "9 cm",
    "antwort": 9
   },
   "Zweiter Strahlensatz (AC ∥ BD): ZA = 3 cm, ZB = 9 cm, AC = 2 cm. Wie lang ist BD?": {
    "teil": "1.3b",
    "typ": "zahl",
    "ergebnis": "6 cm",
    "antwort": 6
   },
   "Ein 1 m langer Stab wirft 2 m Schatten. Gleichzeitig wirft ein Baum 14 m Schatten. Wie hoch ist der Baum?": {
    "teil": "1.3c",
    "typ": "zahl",
    "ergebnis": "7 m",
    "antwort": 7
   },
   "Ein Foto ist 12 cm breit und wird mit k = 2,5 als Poster gedruckt. Wie breit wird das Poster?": {
    "teil": "1.1a",
    "typ": "zahl",
    "ergebnis": "30 cm",
    "antwort": 30
   },
   "Ein Punkt P liegt 5 cm vom Streckzentrum Z entfernt. Gestreckt wird mit k = 0,4. Wie weit ist P' von Z entfernt?": {
    "teil": "1.1b",
    "typ": "zahl",
    "ergebnis": "2 cm",
    "antwort": 2
   },
   "Welches Rechteck ist ähnlich zu einem Rechteck mit 6 cm × 4 cm?": {
    "teil": "1.2a",
    "typ": "wahl",
    "ergebnis": "9 cm × 6 cm",
    "optionen": [
     "9 cm × 6 cm",
     "9 cm × 7 cm",
     "8 cm × 6 cm",
     "10 cm × 6 cm"
    ]
   },
   "Ein Modellauto ist 12 cm lang und 4 cm hoch. Das echte Auto ist 4,8 m lang. Wie hoch ist es (in m)?": {
    "teil": "1.2b",
    "typ": "zahl",
    "ergebnis": "1,6 m",
    "antwort": 1.6
   },
   "Eine kleine Pizza (Ø 20 cm) hat 314 cm². Wie groß ist die Fläche einer ähnlichen Pizza mit Ø 30 cm? (mit 314 cm² rechnen)": {
    "teil": "1.2c",
    "typ": "zahl",
    "ergebnis": "706,5 cm²",
    "antwort": 706.5
   },
   "Zwei Wege starten in Z. Auf dem ersten liegen A bei 40 m und B bei 100 m, auf dem zweiten C bei 60 m. AC ∥ BD. Wie weit ist D von Z entfernt?": {
    "teil": "1.3a",
    "typ": "zahl",
    "ergebnis": "150 m",
    "antwort": 150
   },
   "Eine 5 cm breite Karte steht 25 cm vor einer Lampe (Z). Die Wand ist 100 cm von der Lampe entfernt. Wie breit ist der Schatten?": {
    "teil": "1.3b",
    "typ": "zahl",
    "ergebnis": "20 cm",
    "antwort": 20
   },
   "Ein Mann (1,8 m) wirft 2,4 m Schatten, ein Turm gleichzeitig 40 m. Wie hoch ist der Turm?": {
    "teil": "1.3c",
    "typ": "zahl",
    "ergebnis": "30 m",
    "antwort": 30
   },
   "Das Original ist 24 cm lang, das Bild 6 cm. Welcher Streckfaktor k wurde benutzt?": {
    "teil": "1.1a",
    "typ": "zahl",
    "ergebnis": "0,25",
    "antwort": 0.25
   },
   "Streckzentrum Z = (0|0), A = (3|1), k = 2. Wo liegt A'?": {
    "teil": "1.1b",
    "typ": "wahl",
    "ergebnis": "(6|2)",
    "optionen": [
     "(6|2)",
     "(5|3)",
     "(1,5|0,5)",
     "(6|1)"
    ]
   },
   "Was gilt für ähnliche Figuren?": {
    "teil": "1.2a",
    "typ": "wahl",
    "ergebnis": "Alle Winkel gleich und alle Seitenverhältnisse gleich",
    "optionen": [
     "Alle Winkel gleich und alle Seitenverhältnisse gleich",
     "Alle Seiten gleich lang",
     "Gleicher Flächeninhalt",
     "Nur die Winkel sind gleich"
    ]
   },
   "Ein Dreieck hat die Seiten 3 cm, 4 cm und 5 cm. Ein ähnliches Dreieck hat als kürzeste Seite 9 cm. Wie lang ist seine längste Seite?": {
    "teil": "1.2b",
    "typ": "zahl",
    "ergebnis": "15 cm",
    "antwort": 15
   },
   "Ein Körper hat 4 cm³ Volumen. Er wird mit k = 3 gestreckt. Wie groß ist das neue Volumen?": {
    "teil": "1.2c",
    "typ": "zahl",
    "ergebnis": "108 cm³",
    "antwort": 108
   },
   "Erster Strahlensatz mit AC ∥ BD: Welche Gleichung stimmt?": {
    "teil": "1.3a",
    "typ": "wahl",
    "ergebnis": "ZA : ZB = ZC : ZD",
    "optionen": [
     "ZA : ZB = ZC : ZD",
     "ZA : ZB = ZD : ZC",
     "ZA : ZB = AC : ZD",
     "ZA + ZB = ZC + ZD"
    ]
   },
   "AC ∥ BD, ZA = 4 cm, ZB = 10 cm, BD = 15 cm. Wie lang ist AC?": {
    "teil": "1.3b",
    "typ": "zahl",
    "ergebnis": "6 cm",
    "antwort": 6
   },
   "Warum kann man mit Schatten Höhen messen?": {
    "teil": "1.3c",
    "typ": "wahl",
    "ergebnis": "Die Sonnenstrahlen sind fast parallel, es entstehen ähnliche Dreiecke",
    "optionen": [
     "Die Sonnenstrahlen sind fast parallel, es entstehen ähnliche Dreiecke",
     "Schatten sind immer gleich lang",
     "Alle Bäume sind gleich hoch",
     "Die Sonne steht senkrecht"
    ]
   },
   "Ein Kopierer verkleinert eine 29,7 cm lange Seite auf 70 % (k = 0,7). Wie lang wird sie? (2 Nachkommastellen)": {
    "teil": "1.1a",
    "typ": "zahl",
    "ergebnis": "20,79 cm",
    "antwort": 20.79
   },
   "Z = (1|1), A = (3|2). Gestreckt wird mit k = 3. Welche y-Koordinate hat A'?": {
    "teil": "1.1b",
    "typ": "zahl",
    "ergebnis": "4",
    "antwort": 4
   },
   "Welche Figuren sind immer zueinander ähnlich?": {
    "teil": "1.2a",
    "typ": "wahl",
    "ergebnis": "Alle Quadrate",
    "optionen": [
     "Alle Quadrate",
     "Alle Rechtecke",
     "Alle Rauten",
     "Alle Dreiecke"
    ]
   },
   "Ein Rechteck 5 cm × 8 cm hat den Umfang 26 cm. Ein ähnliches Rechteck hat als kurze Seite 15 cm. Wie groß ist sein Umfang?": {
    "teil": "1.2b",
    "typ": "zahl",
    "ergebnis": "78 cm",
    "antwort": 78
   },
   "Ein Wassertank fasst 125 Liter. Ein ähnlicher Tank hat doppelt so lange Kanten. Wie viele Liter fasst er?": {
    "teil": "1.2c",
    "typ": "zahl",
    "ergebnis": "1000 Liter",
    "antwort": 1000
   },
   "Von Z führen zwei Straßen weg. ZA = 150 m, AB = 250 m, ZC = 210 m, AC ∥ BD. Wie lang ist das Stück CD?": {
    "teil": "1.3a",
    "typ": "zahl",
    "ergebnis": "350 m",
    "antwort": 350
   },
   "AC ∥ BD, ZA = 6 cm, AB = 4 cm, BD = 15 cm. Wie lang ist AC?": {
    "teil": "1.3b",
    "typ": "zahl",
    "ergebnis": "9 cm",
    "antwort": 9
   },
   "Daumensprung: Arm 60 cm. Ein 9 m hohes Haus füllt genau 4,5 cm deines Daumens. Wie weit ist es entfernt (in m)?": {
    "teil": "1.3c",
    "typ": "zahl",
    "ergebnis": "120 m",
    "antwort": 120
   },
   "Ein Dreieck mit den Seiten 3 cm, 5 cm und 6 cm wird mit k = 1,5 gestreckt. Wie groß ist der Umfang des Bilddreiecks?": {
    "teil": "1.1a",
    "typ": "zahl",
    "klausur": true
   },
   "Z = (1|2), B = (2|4), k = 3. Wo liegt B'?": {
    "teil": "1.1b",
    "typ": "wahl",
    "klausur": true
   },
   "Zwei Dreiecke stimmen in zwei Winkeln (50° und 60°) überein. Sind sie ähnlich?": {
    "teil": "1.2a",
    "typ": "wahl",
    "klausur": true
   },
   "Ein Foto 9 cm × 13 cm wird ähnlich vergrößert, die lange Seite ist dann 52 cm. Wie lang ist die kurze Seite?": {
    "teil": "1.2b",
    "typ": "zahl",
    "klausur": true
   },
   "Ein Modell hat 50 cm³ Volumen. Das Original ist 4-mal so lang, so breit und so hoch. Wie groß ist das Volumen des Originals?": {
    "teil": "1.2c",
    "typ": "zahl",
    "klausur": true
   },
   "AC ∥ BD, ZA = 3,6 cm, ZB = 9 cm, ZC = 4 cm. Wie lang ist ZD?": {
    "teil": "1.3a",
    "typ": "zahl",
    "klausur": true
   },
   "AC ∥ BD, ZA = 8 cm, ZB = 12 cm, AC = 10 cm. Wie lang ist BD?": {
    "teil": "1.3b",
    "typ": "zahl",
    "klausur": true
   },
   "Ein Mädchen (1,5 m) wirft 1 m Schatten. Ein Fahnenmast wirft gleichzeitig 8 m Schatten. Wie hoch ist der Mast?": {
    "teil": "1.3c",
    "typ": "zahl",
    "klausur": true
   }
  }
 },
 "m10-2-trigonometrie": {
  "titel": "Trigonometrie",
  "fach": "mathe",
  "klasse": 10,
  "teile": {
   "2.1a": "Die drei Seiten",
   "2.2a": "Sinus",
   "2.2b": "Kosinus",
   "2.2c": "Tangens",
   "2.3a": "Seiten berechnen",
   "2.3b": "Winkel berechnen",
   "2.3c": "Anwendungen",
   "2.4a": "Sinussatz",
   "2.4b": "Kosinussatz"
  },
  "text": "# Trigonometrie (Mathe, Klasse 10)\n\n## Merkkästen der Arbeitsblätter\n### 2.1a Die drei Seiten\nWie die Seiten heißen, hängt vom Winkel α ab, den du gerade ansiehst.\nHypotenuse (H): gegenüber vom rechten Winkel. Gegenkathete (G): gegenüber von α. Ankathete (A): liegt an α an.\n1 Rechter Winkel → gegenüber liegt H\n2 Gegenüber von α liegt G\n3 Die übrige Seite ist A\n\n### 2.2a Sinus\nsin α = Gegenkathete : Hypotenuse\nDer Sinus ist ein Verhältnis: Wie lang ist G im Vergleich zu H? Er ist nie größer als 1.\n1 G und H benennen: G = 3, H = 5\n2 Teilen: sin α = 3 : 5\n3 Ergebnis: = 0,6\n\n### 2.2b Kosinus\ncos α = Ankathete : Hypotenuse\nDer Kosinus vergleicht die Ankathete (die Seite an α) mit der Hypotenuse. Auch er ist nie größer als 1.\n1 A und H benennen: A = 4, H = 5\n2 Teilen: cos α = 4 : 5\n3 Ergebnis: = 0,8\n\n### 2.2c Tangens\ntan α = Gegenkathete : Ankathete\nDer Tangens braucht nur die beiden Katheten, die Hypotenuse wird nicht gebraucht. Er kann auch größer als 1 sein.\n1 G und A benennen: G = 3, A = 4\n2 Teilen: tan α = 3 : 4\n3 Ergebnis: = 0,75\n\n### 2.3a Seiten berechnen\nsin α = G : H   cos α = A : H   tan α = G : A\nGesucht ist eine Seite: Wähle die Formel, in der drei Größen vorkommen (zwei bekannt, eine gesucht), und stelle um.\n1 α = 35°, H = 10 cm, G gesucht → sin\n2 Ansatz: sin 35° = G : 10\n3 Umstellen: G = 10 · sin 35° ≈ 5,74 cm\n\n### 2.3b Winkel berechnen\nα = sin⁻¹(G : H)\ngenauso cos⁻¹ und tan⁻¹\nGesucht ist ein Winkel: erst den Bruch ausrechnen, dann die Umkehrtaste drücken (2nd oder Shift + sin / cos / tan).\n1 G = 3, H = 5 → sin\n2 Bruch: 3 : 5 = 0,6\n3 Umkehren: α = sin⁻¹(0,6) ≈ 36,9°\n\n### 2.3c Anwendungen\nSteigung in % = tan α · 100\nSteigung = Höhe : waagerechte Strecke. 12 % heißt: Auf 100 m waagerecht geht es 12 m hoch.\n1 tan α = 6 : 50 = 0,12\n2 Steigung: 0,12 · 100 = 12 %\n3 Winkel: tan⁻¹(0,12) ≈ 6,8°\n\n### 2.4a Sinussatz\na : sin α = b : sin β = c : sin γ\nFür jedes Dreieck, auch ohne rechten Winkel. Jede Seite steht ihrem Winkel gegenüber (a ↔ α, b ↔ β, c ↔ γ).\n1 α = 40°, β = 75°, a = 6 cm; b gesucht\n2 Ansatz: b : sin 75° = 6 : sin 40°\n3 Umstellen: b = 6 · sin 75° : sin 40° ≈ 9,02 cm\n\n### 2.4b Kosinussatz\nc² = a² + b² − 2 · a · b · cos γ\nγ ist der Winkel zwischen a und b. Gebraucht, wenn zwei Seiten und der eingeschlossene Winkel bekannt sind.\n1 a = 5, b = 7, γ = 50°\n2 c² = 5² + 7² − 2 · 5 · 7 · cos 50° ≈ 29,0\n3 Wurzel: c = √29,0 ≈ 5,39 cm\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 2.1a Die drei Seiten] Im rechtwinkligen Dreieck liegt eine Seite gegenüber vom rechten Winkel. Wie heißt sie? Auswahl: Hypotenuse | Gegenkathete | Ankathete | Höhe\n  Ergebnis: Hypotenuse\n  Weg: Die Hypotenuse liegt immer dem rechten Winkel gegenüber und ist die längste Seite. Die beiden anderen Seiten (Katheten) bilden den rechten Winkel. Achtung: Gegen- und Ankathete sind Katheten – welche welche ist, hängt vom gewählten Winkel α ab. Die Hypotenuse ist dagegen immer dieselbe.\n- [Einstiegsquiz, 2.2a Sinus] Ein rechtwinkliges Dreieck hat die Gegenkathete G = 3 cm und die Hypotenuse H = 5 cm. Wie groß ist sin α?\n  Ergebnis: 0,6\n  Weg: Sinus = Gegenkathete durch Hypotenuse. Die Gegenkathete liegt gegenüber von α, die Hypotenuse gegenüber vom rechten Winkel. Hier: sin α = G : H = 3 : 5 = 0,6. Probe: Der Wert ist kleiner als 1, weil die Hypotenuse die längste Seite ist ✓.\n- [Einstiegsquiz, 2.2b Kosinus] Ein rechtwinkliges Dreieck hat die Ankathete A = 4 cm und die Hypotenuse H = 5 cm. Wie groß ist cos α?\n  Ergebnis: 0,8\n  Weg: Kosinus = Ankathete durch Hypotenuse. Die Ankathete liegt an α an (neben α, aber nicht die Hypotenuse). Hier: cos α = A : H = 4 : 5 = 0,8. Achtung: Mit der Gegenkathete (3 cm) gerechnet wäre es der Sinus, 3 : 5 = 0,6.\n- [Einstiegsquiz, 2.2c Tangens] Ein rechtwinkliges Dreieck hat die Gegenkathete G = 3 cm und die Ankathete A = 4 cm. Wie groß ist tan α?\n  Ergebnis: 0,75\n  Weg: Tangens = Gegenkathete durch Ankathete – die Hypotenuse kommt nicht vor. Hier: tan α = G : A = 3 : 4 = 0,75. Achtung: 4 : 3 ≈ 1,33 wäre falsch herum (Ankathete durch Gegenkathete).\n- [Einstiegsquiz, 2.3a Seiten berechnen] In einem rechtwinkligen Dreieck ist α = 30° und H = 10 cm. Wie lang ist die Gegenkathete G?\n  Ergebnis: 5 cm\n  Weg: Gegeben ist die Hypotenuse, gesucht die Gegenkathete → Sinus: sin α = G : H, umgestellt G = H · sin α. G = 10 · sin 30° = 10 · 0,5 = 5 cm. Probe: G muss kürzer sein als H: 5 < 10 ✓. Achtung: 10 · cos 30° ≈ 8,66 cm wäre die Ankathete.\n- [Einstiegsquiz, 2.3b Winkel berechnen] Es gilt sin α = 0,5. Wie groß ist α in Grad?\n  Ergebnis: 30 °\n  Weg: sin⁻¹ ist die Umkehrfunktion: Sie liefert zu einem Sinuswert den Winkel (am Taschenrechner „SHIFT sin“). α = sin⁻¹(0,5) = 30°. Probe: sin 30° = 0,5 ✓. Achtung: Taschenrechner auf DEG (Grad) stellen, nicht auf RAD.\n- [Einstiegsquiz, 2.3c Anwendungen] Eine Straße steigt auf 100 m waagerecht um 8 m. Wie viel Prozent Steigung sind das?\n  Ergebnis: 8 %\n  Weg: Steigung in Prozent = Höhengewinn auf 100 m waagerecht, also tan α · 100 %. Hier: tan α = 8 : 100 = 0,08 → 0,08 · 100 = 8 %. Achtung: 8 % bedeutet nicht 8°. Der Winkel wäre tan⁻¹(0,08) ≈ 4,6°.\n- [Einstiegsquiz, 2.4a Sinussatz] Welche Gleichung ist der Sinussatz? Auswahl: a : sin α = b : sin β | a² + b² = c² | c² = a² + b² − 2ab · cos γ | sin α = G : H\n  Ergebnis: a : sin α = b : sin β\n  Weg: Der Sinussatz verbindet jede Seite mit dem Winkel, der ihr gegenüberliegt: a : sin α = b : sin β = c : sin γ. Achtung: a² + b² = c² ist der Satz des Pythagoras (nur rechtwinklig), c² = a² + b² − 2ab · cos γ ist der Kosinussatz, und sin α = G : H gilt nur im rechtwinkligen Dreieck.\n- [Einstiegsquiz, 2.4b Kosinussatz] Wann brauchst du den Kosinussatz? Auswahl: Zwei Seiten und der eingeschlossene Winkel sind bekannt | Zwei Winkel und eine Seite sind bekannt | Das Dreieck ist rechtwinklig | Alle drei Winkel sind bekannt\n  Ergebnis: Zwei Seiten und der eingeschlossene Winkel sind bekannt\n  Weg: Der Kosinussatz erweitert Pythagoras auf beliebige Dreiecke: c² = a² + b² − 2ab · cos γ. γ ist der Winkel zwischen a und b, c liegt ihm gegenüber. Also: zwei Seiten und der eingeschlossene Winkel → dritte Seite. Achtung: Bei zwei Winkeln und einer Seite nimmt man den Sinussatz.\n- [Übungsaufgaben 1, 2.1a Die drei Seiten] Ein Dreieck ABC hat den rechten Winkel bei C. Die Seite b liegt an der Ecke A an (zwischen A und C). Wie heißt b aus Sicht von α bei A? Auswahl: Ankathete | Gegenkathete | Hypotenuse | Höhe\n  Ergebnis: Ankathete\n  Weg: Die Ankathete liegt am Winkel an, die Gegenkathete gegenüber, die Hypotenuse gegenüber vom rechten Winkel (bei C). b liegt zwischen A und C, also an α an, und ist nicht die Hypotenuse (das ist c) → Ankathete. Achtung: Die Gegenkathete von α wäre a (gegenüber von A).\n- [Übungsaufgaben 1, 2.2a Sinus] Eine Rampe ist 4 m lang und steigt dabei 1 m hoch. Wie groß ist sin α? (α = Winkel am Boden)\n  Ergebnis: 0,25\n  Weg: Sinus = Gegenkathete : Hypotenuse. Die Höhe liegt gegenüber vom Winkel am Boden, die Rampe gegenüber vom rechten Winkel. G = 1 m (Höhe), H = 4 m (Rampe) → sin α = 1 : 4 = 0,25. Achtung: Die Rampe ist die Hypotenuse (längste Seite), nicht die Ankathete.\n- [Übungsaufgaben 1, 2.2b Kosinus] Ein Seil ist 10 m lang und überspannt waagerecht 8 m. Wie groß ist cos α? (α = Winkel am Boden)\n  Ergebnis: 0,8\n  Weg: Kosinus = Ankathete : Hypotenuse. Das Seil ist die Hypotenuse (10 m), der waagerechte Abstand liegt am Winkel am Boden an → Ankathete (8 m). cos α = 8 : 10 = 0,8. Achtung: 10 : 8 = 1,25 wäre falsch herum – ein Kosinus ist nie größer als 1.\n- [Übungsaufgaben 1, 2.2c Tangens] Ein Mast ist 5 m hoch und wirft einen 4 m langen Schatten. Wie groß ist tan α? (α = Sonnenwinkel)\n  Ergebnis: 1,25\n  Weg: Tangens = Gegenkathete : Ankathete. Der Mast steht dem Sonnenwinkel gegenüber → G = 5 m; der Schatten liegt am Boden am Winkel an → A = 4 m. tan α = 5 : 4 = 1,25. Probe: G ist länger als A, also α > 45° und tan α > 1 ✓.\n- [Übungsaufgaben 1, 2.3a Seiten berechnen] Eine 5 m lange Leiter steht unter 60° zum Boden. Wie hoch reicht sie? (2 Nachkommastellen)\n  Ergebnis: 4,33 m\n  Weg: Die Leiter ist die Hypotenuse (5 m), die Höhe h liegt dem 60°-Winkel gegenüber → Gegenkathete, also Sinus: sin 60° = h : 5. h = 5 · sin 60° ≈ 5 · 0,866 = 4,33 m. Achtung: 5 · cos 60° = 2,5 m wäre der Abstand des Leiterfußes zur Wand (Ankathete).\n- [Übungsaufgaben 1, 2.3b Winkel berechnen] Eine Rampe ist 5 m lang und 1 m hoch. Wie groß ist der Winkel α am Boden? (1 Nachkommastelle)\n  Ergebnis: 11,5 °\n  Weg: Rampe = Hypotenuse (5 m), Höhe = Gegenkathete (1 m) → Sinus. Den Winkel liefert die Umkehrfunktion sin⁻¹. sin α = 1 : 5 = 0,2 → α = sin⁻¹(0,2) ≈ 11,5°. Probe: sin 11,5° ≈ 0,199 ✓. Achtung: Taschenrechner auf DEG stellen.\n- [Übungsaufgaben 1, 2.3c Anwendungen] Ein Schild zeigt 12 % Steigung. Wie groß ist der Steigungswinkel? (1 Nachkommastelle)\n  Ergebnis: 6,8 °\n  Weg: 12 % Steigung heißt: 12 m Höhe auf 100 m waagerecht, also tan α = 12 : 100 = 0,12. α = tan⁻¹(0,12) ≈ 6,8°. Probe: tan 6,8° ≈ 0,119 ✓. Achtung: 12 % sind nicht 12° – der Winkel ist viel kleiner.\n- [Übungsaufgaben 1, 2.4a Sinussatz] Dreieck mit α = 30°, β = 45° und a = 8 cm. Wie lang ist b? (2 Nachkommastellen)\n  Ergebnis: 11,31 cm\n  Weg: Sinussatz: a : sin α = b : sin β, also b = a · sin β : sin α. Jede Seite gehört zum Winkel gegenüber: a zu α = 30°, b zu β = 45°. b = 8 · sin 45° : sin 30° = 8 · 0,7071 : 0,5 ≈ 11,31 cm. Probe: Dem größeren Winkel (45°) liegt die längere Seite gegenüber: 11,31 > 8 ✓.\n- [Übungsaufgaben 1, 2.4b Kosinussatz] Dreieck mit a = 6 cm, b = 8 cm und γ = 60° zwischen a und b. Wie lang ist c? (2 Nachkommastellen)\n  Ergebnis: 7,21 cm\n  Weg: Kosinussatz: c² = a² + b² − 2ab · cos γ, mit γ zwischen a und b; c liegt γ gegenüber. c² = 36 + 64 − 2 · 6 · 8 · cos 60° = 100 − 96 · 0,5 = 52 → c = √52 ≈ 7,21 cm. Achtung: Am Ende die Wurzel ziehen – 52 ist erst c².\n- [Abschlussquiz, 2.1a Die drei Seiten] Welche Seite liegt gegenüber vom Winkel α? Auswahl: Gegenkathete | Ankathete | Hypotenuse | Winkelhalbierende\n  Ergebnis: Gegenkathete\n  Weg: Die Gegenkathete liegt dem Winkel α gegenüber, die Ankathete liegt an α an, die Hypotenuse liegt dem rechten Winkel gegenüber. Also: Gegenüber von α = Gegenkathete. Achtung: Die Hypotenuse liegt gegenüber vom rechten Winkel, nicht von α. Eine „Winkelhalbierende“ ist keine Dreiecksseite.\n- [Abschlussquiz, 2.2a Sinus] Welche Formel gehört zum Sinus? Auswahl: sin α = Gegenkathete : Hypotenuse | sin α = Ankathete : Hypotenuse | sin α = Gegenkathete : Ankathete | sin α = Hypotenuse : Gegenkathete\n  Ergebnis: sin α = Gegenkathete : Hypotenuse\n  Weg: Merke: Sinus = Gegenkathete : Hypotenuse. sin α vergleicht die Seite gegenüber von α mit der längsten Seite. Achtung: Ankathete : Hypotenuse ist der Kosinus, Gegenkathete : Ankathete der Tangens. Hypotenuse im Zähler wäre größer als 1 – das gibt es beim Sinus nicht.\n- [Abschlussquiz, 2.2b Kosinus] Welcher Wert kann im rechtwinkligen Dreieck kein Kosinus sein? Auswahl: 1,3 | 0,5 | 0,9 | 0,02\n  Ergebnis: 1,3\n  Weg: cos α = A : H, und die Hypotenuse ist die längste Seite. Der Bruch ist im rechtwinkligen Dreieck also immer kleiner als 1. Deshalb kann 1,3 kein Kosinus sein: Die Ankathete wäre länger als die Hypotenuse – unmöglich. Die Werte 0,5; 0,9 und 0,02 sind kleiner als 1, also möglich.\n- [Abschlussquiz, 2.2c Tangens] Bei welchem Winkel ist tan α = 1? Auswahl: 45° | 30° | 60° | 90°\n  Ergebnis: 45°\n  Weg: tan α = G : A. Der Tangens ist 1, wenn G = A, also beide Katheten gleich lang sind. Das Dreieck ist dann gleichschenklig-rechtwinklig, und die zwei spitzen Winkel sind gleich: (180° − 90°) : 2 = 45°. Probe: tan 30° ≈ 0,58 und tan 60° ≈ 1,73 sind nicht 1 ✓.\n- [Abschlussquiz, 2.3a Seiten berechnen] Gegeben sind α und die Ankathete A, gesucht ist die Gegenkathete G. Welche Formel passt? Auswahl: G = A · tan α | G = A : tan α | G = A · sin α | G = A · cos α\n  Ergebnis: G = A · tan α\n  Weg: tan α = G : A. Um G zu bekommen, multiplizierst du beide Seiten mit A: G = A · tan α. Den Tangens nimmt man, weil beide Katheten vorkommen; die Hypotenuse ist nicht gegeben. Achtung: G = A : tan α wäre falsch umgestellt; sin und cos bräuchten die Hypotenuse.\n- [Abschlussquiz, 2.3b Winkel berechnen] Es gilt tan α = 1. Wie groß ist α in Grad?\n  Ergebnis: 45 °\n  Weg: tan α = 1 heißt G = A. Den Winkel liefert die Umkehrfunktion tan⁻¹ am Taschenrechner. α = tan⁻¹(1) = 45°. Probe: Zwei gleich lange Katheten → gleichschenklig-rechtwinklig → beide spitzen Winkel sind 45° ✓.\n- [Abschlussquiz, 2.3c Anwendungen] Ein Schild zeigt „10 % Steigung“. Was bedeutet das? Auswahl: Auf 100 m waagerecht geht es 10 m hoch | Der Winkel beträgt 10° | Auf 10 m Weg geht es 100 m hoch | Der Winkel beträgt 45°\n  Ergebnis: Auf 100 m waagerecht geht es 10 m hoch\n  Weg: Steigung in Prozent = Höhengewinn auf 100 m waagerecht, also tan α = 0,10. Das sind 10 m Höhe auf 100 m waagerecht; der Winkel ist α = tan⁻¹(0,1) ≈ 5,7°. Achtung: 10 % sind nicht 10°, und 45° wären 100 % Steigung (tan 45° = 1).\n- [Abschlussquiz, 2.4a Sinussatz] Ein Dreieck hat α = 40° und β = 70°. Welche Seite ist länger, a oder b? Auswahl: b | a | Beide sind gleich lang\n  Ergebnis: b\n  Weg: In jedem Dreieck liegt dem größeren Winkel die längere Seite gegenüber. β = 70° ist größer als α = 40°, also ist die Seite gegenüber von β, nämlich b, länger als a. Probe mit dem Sinussatz: a : b = sin 40° : sin 70° ≈ 0,64 : 0,94 → a ist kürzer ✓.\n- [Abschlussquiz, 2.4b Kosinussatz] Setze im Kosinussatz γ = 90° ein (cos 90° = 0), mit a = 3 cm und b = 4 cm. Wie lang ist c?\n  Ergebnis: 5 cm\n  Weg: Bei γ = 90° fällt der letzte Term weg, weil cos 90° = 0 ist: c² = a² + b² − 2ab · 0 = a² + b². Der Kosinussatz enthält Pythagoras als Sonderfall. Hier: c² = 9 + 16 = 25 → c = 5 cm. Achtung: Wurzel ziehen nicht vergessen – 25 ist erst c².\n- [Übungsaufgaben 2, 2.1a Die drei Seiten] Eine Rampe lehnt an einer Mauer, α ist der Winkel am Boden. Welche Seite ist die Ankathete von α? Auswahl: Der waagerechte Abstand vom Rampenfuß zur Mauer | Die Rampe selbst | Die Höhe an der Mauer | Der Boden unter der Mauer\n  Ergebnis: Der waagerechte Abstand vom Rampenfuß zur Mauer\n  Weg: Die Ankathete liegt am Winkel α an. α sitzt am Boden zwischen Rampe und Boden, dort liegt der waagerechte Abstand vom Rampenfuß zur Mauer. Die Rampe liegt dem rechten Winkel gegenüber (Hypotenuse), die Höhe an der Mauer gegenüber von α (Gegenkathete). Achtung: „Die Rampe selbst“ ist die Hypotenuse.\n- [Übungsaufgaben 2, 2.2a Sinus] Bestimme mit dem Taschenrechner (DEG): sin 35°. (3 Nachkommastellen)\n  Ergebnis: 0,574\n  Weg: Sinus, Kosinus und Tangens eines Winkels liefert der Taschenrechner direkt – im Modus DEG (Grad). sin 35° ≈ 0,5736 ≈ 0,574. Probe: 35° liegt zwischen 30° (sin = 0,5) und 45° (sin ≈ 0,71) ✓. Achtung: Im Modus RAD käme etwas ganz anderes heraus.\n- [Übungsaufgaben 2, 2.2b Kosinus] Bestimme mit dem Taschenrechner (DEG): cos 62°. (3 Nachkommastellen)\n  Ergebnis: 0,469\n  Weg: Sinus, Kosinus und Tangens eines Winkels liefert der Taschenrechner direkt – im Modus DEG (Grad). cos 62° ≈ 0,4695 ≈ 0,469. Probe: cos 60° = 0,5 und der Kosinus wird mit wachsendem Winkel kleiner, 0,469 passt ✓. Achtung: Rechner nicht auf RAD.\n- [Übungsaufgaben 2, 2.2c Tangens] Bestimme mit dem Taschenrechner (DEG): tan 70°. (3 Nachkommastellen)\n  Ergebnis: 2,747\n  Weg: Sinus, Kosinus und Tangens eines Winkels liefert der Taschenrechner direkt – im Modus DEG (Grad). tan 70° ≈ 2,7475 ≈ 2,747. Probe: tan 45° = 1, danach wird der Tangens größer als 1, bei 70° also deutlich größer ✓. Achtung: Rechner nicht auf RAD.\n- [Übungsaufgaben 2, 2.3a Seiten berechnen] Ein Drachen hängt an einer 40 m langen Schnur, die mit dem Boden 50° bildet. Wie hoch fliegt er? (2 Nachkommastellen)\n  Ergebnis: 30,64 m\n  Weg: Die Schnur ist die Hypotenuse (40 m), die Höhe h liegt dem 50°-Winkel gegenüber → Gegenkathete, also Sinus: sin 50° = h : 40. h = 40 · sin 50° ≈ 40 · 0,766 = 30,64 m. Achtung: 40 · cos 50° ≈ 25,71 m wäre der waagerechte Abstand (Ankathete).\n- [Übungsaufgaben 2, 2.3b Winkel berechnen] Eine Treppenstufe ist 17 cm hoch und 29 cm tief. Wie groß ist der Steigungswinkel? (1 Nachkommastelle)\n  Ergebnis: 30,4 °\n  Weg: Stufenhöhe = Gegenkathete (17 cm), Stufentiefe = Ankathete (29 cm). Beide Katheten sind bekannt → Tangens. tan α = 17 : 29 ≈ 0,586 → α = tan⁻¹(0,586) ≈ 30,4°. Achtung: 29 : 17 wäre falsch herum und ergäbe 59,6°.\n- [Übungsaufgaben 2, 2.3c Anwendungen] Ein Baum wirft einen 12 m langen Schatten, die Sonne steht 35° hoch. Wie hoch ist der Baum? (2 Nachkommastellen)\n  Ergebnis: 8,4 m\n  Weg: Der Baum liegt dem Sonnenwinkel gegenüber → Gegenkathete h; der Schatten (12 m) liegt am Winkel an → Ankathete. Beide Katheten → Tangens: tan 35° = h : 12. h = 12 · tan 35° ≈ 12 · 0,7002 = 8,40 m. Achtung: 12 : tan 35° ≈ 17,14 wäre falsch umgestellt.\n- [Übungsaufgaben 2, 2.4a Sinussatz] A und B am Seeufer sind 120 m auseinander. Der Baum C ist von A aus unter α = 55° und von B aus unter β = 65° zu sehen. Wie weit ist C von A entfernt? (2 Nachkommastellen)\n  Ergebnis: 125,58 m\n  Weg: Sinussatz: Jede Seite gehört zum gegenüberliegenden Winkel. Gesucht ist AC = b (gegenüber von B, β = 65°), bekannt ist AB = 120 m (gegenüber von C). Erst γ bestimmen. γ = 180° − 55° − 65° = 60°; b = 120 · sin 65° : sin 60° ≈ 120 · 0,9063 : 0,8660 ≈ 125,58 m. Achtung: AC liegt gegenüber von β, nicht von α.\n- [Übungsaufgaben 2, 2.4b Kosinussatz] Zwei Boote fahren vom selben Hafen los, das eine 6 km, das andere 8 km, mit 70° zwischen den Richtungen. Wie weit sind sie dann auseinander? (2 Nachkommastellen)\n  Ergebnis: 8,2 km\n  Weg: Zwei Seiten (6 km, 8 km) und der Winkel dazwischen (70°) → Kosinussatz: c² = a² + b² − 2ab · cos γ. c² = 36 + 64 − 96 · cos 70° ≈ 100 − 96 · 0,342 ≈ 67,17 → c ≈ 8,20 km. Achtung: Erst 96 · cos 70° rechnen, dann abziehen – nicht (100 − 96) · cos 70°.",
  "aufgaben": {
   "Im rechtwinkligen Dreieck liegt eine Seite gegenüber vom rechten Winkel. Wie heißt sie?": {
    "teil": "2.1a",
    "typ": "wahl",
    "ergebnis": "Hypotenuse",
    "optionen": [
     "Hypotenuse",
     "Gegenkathete",
     "Ankathete",
     "Höhe"
    ]
   },
   "Ein rechtwinkliges Dreieck hat die Gegenkathete G = 3 cm und die Hypotenuse H = 5 cm. Wie groß ist sin α?": {
    "teil": "2.2a",
    "typ": "zahl",
    "ergebnis": "0,6",
    "antwort": 0.6
   },
   "Ein rechtwinkliges Dreieck hat die Ankathete A = 4 cm und die Hypotenuse H = 5 cm. Wie groß ist cos α?": {
    "teil": "2.2b",
    "typ": "zahl",
    "ergebnis": "0,8",
    "antwort": 0.8
   },
   "Ein rechtwinkliges Dreieck hat die Gegenkathete G = 3 cm und die Ankathete A = 4 cm. Wie groß ist tan α?": {
    "teil": "2.2c",
    "typ": "zahl",
    "ergebnis": "0,75",
    "antwort": 0.75
   },
   "In einem rechtwinkligen Dreieck ist α = 30° und H = 10 cm. Wie lang ist die Gegenkathete G?": {
    "teil": "2.3a",
    "typ": "zahl",
    "ergebnis": "5 cm",
    "antwort": 5
   },
   "Es gilt sin α = 0,5. Wie groß ist α in Grad?": {
    "teil": "2.3b",
    "typ": "zahl",
    "ergebnis": "30 °",
    "antwort": 30
   },
   "Eine Straße steigt auf 100 m waagerecht um 8 m. Wie viel Prozent Steigung sind das?": {
    "teil": "2.3c",
    "typ": "zahl",
    "ergebnis": "8 %",
    "antwort": 8
   },
   "Welche Gleichung ist der Sinussatz?": {
    "teil": "2.4a",
    "typ": "wahl",
    "ergebnis": "a : sin α = b : sin β",
    "optionen": [
     "a : sin α = b : sin β",
     "a² + b² = c²",
     "c² = a² + b² − 2ab · cos γ",
     "sin α = G : H"
    ]
   },
   "Wann brauchst du den Kosinussatz?": {
    "teil": "2.4b",
    "typ": "wahl",
    "ergebnis": "Zwei Seiten und der eingeschlossene Winkel sind bekannt",
    "optionen": [
     "Zwei Seiten und der eingeschlossene Winkel sind bekannt",
     "Zwei Winkel und eine Seite sind bekannt",
     "Das Dreieck ist rechtwinklig",
     "Alle drei Winkel sind bekannt"
    ]
   },
   "Ein Dreieck ABC hat den rechten Winkel bei C. Die Seite b liegt an der Ecke A an (zwischen A und C). Wie heißt b aus Sicht von α bei A?": {
    "teil": "2.1a",
    "typ": "wahl",
    "ergebnis": "Ankathete",
    "optionen": [
     "Ankathete",
     "Gegenkathete",
     "Hypotenuse",
     "Höhe"
    ]
   },
   "Eine Rampe ist 4 m lang und steigt dabei 1 m hoch. Wie groß ist sin α? (α = Winkel am Boden)": {
    "teil": "2.2a",
    "typ": "zahl",
    "ergebnis": "0,25",
    "antwort": 0.25
   },
   "Ein Seil ist 10 m lang und überspannt waagerecht 8 m. Wie groß ist cos α? (α = Winkel am Boden)": {
    "teil": "2.2b",
    "typ": "zahl",
    "ergebnis": "0,8",
    "antwort": 0.8
   },
   "Ein Mast ist 5 m hoch und wirft einen 4 m langen Schatten. Wie groß ist tan α? (α = Sonnenwinkel)": {
    "teil": "2.2c",
    "typ": "zahl",
    "ergebnis": "1,25",
    "antwort": 1.25
   },
   "Eine 5 m lange Leiter steht unter 60° zum Boden. Wie hoch reicht sie? (2 Nachkommastellen)": {
    "teil": "2.3a",
    "typ": "zahl",
    "ergebnis": "4,33 m",
    "antwort": 4.33
   },
   "Eine Rampe ist 5 m lang und 1 m hoch. Wie groß ist der Winkel α am Boden? (1 Nachkommastelle)": {
    "teil": "2.3b",
    "typ": "zahl",
    "ergebnis": "11,5 °",
    "antwort": 11.5
   },
   "Ein Schild zeigt 12 % Steigung. Wie groß ist der Steigungswinkel? (1 Nachkommastelle)": {
    "teil": "2.3c",
    "typ": "zahl",
    "ergebnis": "6,8 °",
    "antwort": 6.8
   },
   "Dreieck mit α = 30°, β = 45° und a = 8 cm. Wie lang ist b? (2 Nachkommastellen)": {
    "teil": "2.4a",
    "typ": "zahl",
    "ergebnis": "11,31 cm",
    "antwort": 11.31
   },
   "Dreieck mit a = 6 cm, b = 8 cm und γ = 60° zwischen a und b. Wie lang ist c? (2 Nachkommastellen)": {
    "teil": "2.4b",
    "typ": "zahl",
    "ergebnis": "7,21 cm",
    "antwort": 7.21
   },
   "Welche Seite liegt gegenüber vom Winkel α?": {
    "teil": "2.1a",
    "typ": "wahl",
    "ergebnis": "Gegenkathete",
    "optionen": [
     "Gegenkathete",
     "Ankathete",
     "Hypotenuse",
     "Winkelhalbierende"
    ]
   },
   "Welche Formel gehört zum Sinus?": {
    "teil": "2.2a",
    "typ": "wahl",
    "ergebnis": "sin α = Gegenkathete : Hypotenuse",
    "optionen": [
     "sin α = Gegenkathete : Hypotenuse",
     "sin α = Ankathete : Hypotenuse",
     "sin α = Gegenkathete : Ankathete",
     "sin α = Hypotenuse : Gegenkathete"
    ]
   },
   "Welcher Wert kann im rechtwinkligen Dreieck kein Kosinus sein?": {
    "teil": "2.2b",
    "typ": "wahl",
    "ergebnis": "1,3",
    "optionen": [
     "1,3",
     "0,5",
     "0,9",
     "0,02"
    ]
   },
   "Bei welchem Winkel ist tan α = 1?": {
    "teil": "2.2c",
    "typ": "wahl",
    "ergebnis": "45°",
    "optionen": [
     "45°",
     "30°",
     "60°",
     "90°"
    ]
   },
   "Gegeben sind α und die Ankathete A, gesucht ist die Gegenkathete G. Welche Formel passt?": {
    "teil": "2.3a",
    "typ": "wahl",
    "ergebnis": "G = A · tan α",
    "optionen": [
     "G = A · tan α",
     "G = A : tan α",
     "G = A · sin α",
     "G = A · cos α"
    ]
   },
   "Es gilt tan α = 1. Wie groß ist α in Grad?": {
    "teil": "2.3b",
    "typ": "zahl",
    "ergebnis": "45 °",
    "antwort": 45
   },
   "Ein Schild zeigt „10 % Steigung“. Was bedeutet das?": {
    "teil": "2.3c",
    "typ": "wahl",
    "ergebnis": "Auf 100 m waagerecht geht es 10 m hoch",
    "optionen": [
     "Auf 100 m waagerecht geht es 10 m hoch",
     "Der Winkel beträgt 10°",
     "Auf 10 m Weg geht es 100 m hoch",
     "Der Winkel beträgt 45°"
    ]
   },
   "Ein Dreieck hat α = 40° und β = 70°. Welche Seite ist länger, a oder b?": {
    "teil": "2.4a",
    "typ": "wahl",
    "ergebnis": "b",
    "optionen": [
     "b",
     "a",
     "Beide sind gleich lang"
    ]
   },
   "Setze im Kosinussatz γ = 90° ein (cos 90° = 0), mit a = 3 cm und b = 4 cm. Wie lang ist c?": {
    "teil": "2.4b",
    "typ": "zahl",
    "ergebnis": "5 cm",
    "antwort": 5
   },
   "Eine Rampe lehnt an einer Mauer, α ist der Winkel am Boden. Welche Seite ist die Ankathete von α?": {
    "teil": "2.1a",
    "typ": "wahl",
    "ergebnis": "Der waagerechte Abstand vom Rampenfuß zur Mauer",
    "optionen": [
     "Der waagerechte Abstand vom Rampenfuß zur Mauer",
     "Die Rampe selbst",
     "Die Höhe an der Mauer",
     "Der Boden unter der Mauer"
    ]
   },
   "Bestimme mit dem Taschenrechner (DEG): sin 35°. (3 Nachkommastellen)": {
    "teil": "2.2a",
    "typ": "zahl",
    "ergebnis": "0,574",
    "antwort": 0.574
   },
   "Bestimme mit dem Taschenrechner (DEG): cos 62°. (3 Nachkommastellen)": {
    "teil": "2.2b",
    "typ": "zahl",
    "ergebnis": "0,469",
    "antwort": 0.469
   },
   "Bestimme mit dem Taschenrechner (DEG): tan 70°. (3 Nachkommastellen)": {
    "teil": "2.2c",
    "typ": "zahl",
    "ergebnis": "2,747",
    "antwort": 2.747
   },
   "Ein Drachen hängt an einer 40 m langen Schnur, die mit dem Boden 50° bildet. Wie hoch fliegt er? (2 Nachkommastellen)": {
    "teil": "2.3a",
    "typ": "zahl",
    "ergebnis": "30,64 m",
    "antwort": 30.64
   },
   "Eine Treppenstufe ist 17 cm hoch und 29 cm tief. Wie groß ist der Steigungswinkel? (1 Nachkommastelle)": {
    "teil": "2.3b",
    "typ": "zahl",
    "ergebnis": "30,4 °",
    "antwort": 30.4
   },
   "Ein Baum wirft einen 12 m langen Schatten, die Sonne steht 35° hoch. Wie hoch ist der Baum? (2 Nachkommastellen)": {
    "teil": "2.3c",
    "typ": "zahl",
    "ergebnis": "8,4 m",
    "antwort": 8.4
   },
   "A und B am Seeufer sind 120 m auseinander. Der Baum C ist von A aus unter α = 55° und von B aus unter β = 65° zu sehen. Wie weit ist C von A entfernt? (2 Nachkommastellen)": {
    "teil": "2.4a",
    "typ": "zahl",
    "ergebnis": "125,58 m",
    "antwort": 125.58
   },
   "Zwei Boote fahren vom selben Hafen los, das eine 6 km, das andere 8 km, mit 70° zwischen den Richtungen. Wie weit sind sie dann auseinander? (2 Nachkommastellen)": {
    "teil": "2.4b",
    "typ": "zahl",
    "ergebnis": "8,2 km",
    "antwort": 8.2
   },
   "In einem rechtwinkligen Dreieck mit den Katheten a, b und der Hypotenuse c: Wie heißt die Gegenkathete von β (β liegt gegenüber von b)?": {
    "teil": "2.1a",
    "typ": "wahl",
    "klausur": true
   },
   "Welche Aussage über den Tangens stimmt?": {
    "teil": "2.2c",
    "typ": "wahl",
    "klausur": true
   },
   "Im rechtwinkligen Dreieck gilt sin α = 0,6. Wie groß ist cos α? (Tipp: Seiten 3, 4, 5 oder Pythagoras)": {
    "teil": "2.2b",
    "typ": "zahl",
    "klausur": true
   },
   "In einem rechtwinkligen Dreieck ist α = 25° und die Hypotenuse 12 cm lang. Wie lang ist die Ankathete? (2 Nachkommastellen)": {
    "teil": "2.3a",
    "typ": "zahl",
    "klausur": true
   },
   "In einem rechtwinkligen Dreieck ist α = 55° und die Gegenkathete 10 cm lang. Wie lang ist die Ankathete? (2 Nachkommastellen)": {
    "teil": "2.3a",
    "typ": "zahl",
    "klausur": true
   },
   "Die Katheten eines rechtwinkligen Dreiecks sind 6 cm und 9 cm lang. Wie groß ist der Winkel α gegenüber der 6-cm-Kathete? (1 Nachkommastelle)": {
    "teil": "2.3b",
    "typ": "zahl",
    "klausur": true
   },
   "Eine 6 m lange Leiter wird unter 75° an eine Wand gestellt. Wie weit steht ihr Fuß von der Wand entfernt? (2 Nachkommastellen)": {
    "teil": "2.3c",
    "typ": "zahl",
    "klausur": true
   },
   "Dreieck mit α = 50°, β = 60° und a = 12 cm. Wie lang ist b? (2 Nachkommastellen)": {
    "teil": "2.4a",
    "typ": "zahl",
    "klausur": true
   },
   "Dreieck mit a = 6 cm, b = 9 cm und γ = 35° zwischen a und b. Wie lang ist c? (2 Nachkommastellen)": {
    "teil": "2.4b",
    "typ": "zahl",
    "klausur": true
   }
  }
 },
 "m10-3-exponentielles-wachstum": {
  "titel": "Exponentielles Wachstum",
  "fach": "mathe",
  "klasse": 10,
  "teile": {
   "3.1a": "Linear oder exponentiell?",
   "3.2a": "Wachstumsfaktor",
   "3.2b": "Zinseszins",
   "3.2c": "Exponentielle Abnahme",
   "3.3a": "Graphen von Exponentialfunktionen",
   "3.3b": "Funktionsgleichung aufstellen",
   "3.4a": "Verdoppeln und Halbieren",
   "3.5a": "Was ist ein Logarithmus?",
   "3.5b": "Exponentialgleichungen lösen"
  },
  "text": "# Exponentielles Wachstum (Mathe, Klasse 10)\n\n## Merkkästen der Arbeitsblätter\n### 3.1a Linear oder exponentiell?\nLinear: immer plus derselben Zahl.   Exponentiell: immer mal derselben Zahl.\nBeispiel: 2, 4, 8, 16  →  immer · 2\n→  exponentiell.\n1 Von Wert zu Wert schauen\n2 Immer + gleich? → linear\n3 Immer · gleich? → exponentiell\n\n### 3.2a Wachstumsfaktor\nWächst ein Wert um p %, rechnest du q = 1 + p/100\n(Wachstumsfaktor).\nBeispiel: Wachstum um 5 %\n1 5 % = 0,05\n2 Plus 1: q = 1,05\n3 Wert · 1,05\n\n### 3.2b Zinseszins\nZinsen werden mit verzinst: K = K₀ · qⁿ\nK₀ Startgeld, q Faktor, n Jahre\nBeispiel: 200 € zu 3 % für 2 Jahre\n1 q = 1,03\n2 Hoch 2: 1,03² = 1,0609\n3 200 · 1,0609 = 212,18 €\n\n### 3.2c Exponentielle Abnahme\nNimmt ein Wert um p % ab: q = 1 − p/100\nDann gilt wie beim Wachstum: K = K₀ · qⁿ\nBeispiel: Auto 20 000 €, verliert 15 % pro Jahr\n1 q = 1 − 0,15 = 0,85\n2 Jahr 1: 20 000 · 0,85 = 17 000\n3 Jahr 2: 17 000 · 0,85 = 14 450\n\n### 3.3a Graphen von Exponentialfunktionen\nf(x) = a · bˣ\na = Startwert (Punkt (0 | a)),  b = Faktor.\nb > 1: Wachstum   0 < b < 1: Zerfall. Beispiel: f(x) = 2 · 3ˣ\n1 a = 2: Start bei (0 | 2)\n2 b = 3 > 1: Wachstum\n3 x = 1 → 6, x = 2 → 18\n\n### 3.3b Funktionsgleichung aufstellen\nGesucht: f(x) = a · bˣ\na = Wert bei x = 0,  b = Folgewert : Startwert\nBeispiel: x = 0 → 4, x = 1 → 12\n1 a = 4\n2 b = 12 : 4 = 3\n3 f(x) = 4 · 3ˣ\n\n### 3.4a Verdoppeln und Halbieren\nVerdopplungszeit: Nach dieser Zeit ist der Wert doppelt so groß.  Halbwertszeit: Nach dieser Zeit ist nur noch die Hälfte da.\nBeispiel: 100 Bakterien, Verdopplungszeit 20 min. Wie viele nach 60 min?\n1 60 : 20 = 3 Verdopplungen\n2 100 → 200 → 400 → 800\n3 800 Bakterien\n\n### 3.5a Was ist ein Logarithmus?\nlogb(x) = n\nbedeutet:  b hoch n = x. Der Logarithmus ist die Hochzahl.\nBeispiel: log₂(8) = ?   Frage: 2 hoch was ergibt 8?\n1 Frage: 2? = 8\n2 Probieren: 2, 4, 8\n3 2³ = 8 → log₂(8) = 3\n\n### 3.5b Exponentialgleichungen lösen\nbˣ = c  →  x = lg(c) : lg(b)\n(Taschenrechner, Taste „log“)\nBeispiel: 2ˣ = 20\n1 lg(20) ≈ 1,301 und lg(2) ≈ 0,301\n2 x = 1,301 : 0,301 ≈ 4,32\n3 Probe: 24,32 ≈ 20\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 3.1a Linear oder exponentiell?] Welche Folge ist exponentiell? Auswahl: 2, 5, 8, 11 | 3, 6, 12, 24 | 10, 20, 30, 40 | 1, 2, 3, 4\n  Ergebnis: 3, 6, 12, 24\n  Weg: Linear: immer derselbe Betrag wird addiert. Exponentiell: immer mit demselben Faktor multipliziert. 3, 6, 12, 24: 6 : 3 = 2, 12 : 6 = 2, 24 : 12 = 2 → immer · 2, also exponentiell. Achtung: 2, 5, 8, 11 hat immer + 3 – das ist linear.\n- [Einstiegsquiz, 3.2a Wachstumsfaktor] Ein Wert wächst um 6 %. Mit welchem Faktor rechnest du? Auswahl: 0,06 | 1,06 | 6 | 0,94\n  Ergebnis: 1,06\n  Weg: Bei einer Zunahme um p bleiben die 100 % und es kommen p dazu: Wachstumsfaktor q = 1 + p. q = 1 + 0,06 = 1,06. Achtung: 0,06 wäre nur der Zuwachs selbst, 0,94 gehört zu einer Abnahme um 6 %.\n- [Einstiegsquiz, 3.2b Zinseszins] 1 000 € werden 3 Jahre lang mit 3 % verzinst. Wie viel Geld ist es dann? (2 Nachkommastellen)\n  Ergebnis: 1092,73 €\n  Weg: Jedes Jahr wird der Kontostand mit q = 1,03 multipliziert (die Zinsen werden mitverzinst): Endwert = Start · q^Jahre. 1 000 · 1,03³ = 1 000 · 1,092727 ≈ 1 092,73 €. Achtung: 3 · 3 % = 9 % → 1 090 € wäre falsch, denn die Zinsen bringen im 2. und 3. Jahr selbst Zinsen.\n- [Einstiegsquiz, 3.2c Exponentielle Abnahme] Ein Wert sinkt um 15 %. Mit welchem Faktor rechnest du? Auswahl: 1,15 | 0,15 | 0,85 | 0,95\n  Ergebnis: 0,85\n  Weg: Bei einer Abnahme um p bleiben 100 % − p übrig: Faktor q = 1 − p. q = 1 − 0,15 = 0,85. Achtung: 1,15 wäre eine Zunahme um 15 %, 0,15 wären nur die 15 % selbst.\n- [Einstiegsquiz, 3.3a Graphen von Exponentialfunktionen] f(x) = 5 · 0,5ˣ: Was stimmt? Auswahl: Zerfall, Startwert 5 | Wachstum, Startwert 5 | Zerfall, Startwert 0,5 | Wachstum, Startwert 0,5\n  Ergebnis: Zerfall, Startwert 5\n  Weg: Bei f(x) = a · bˣ ist a der Startwert (bei x = 0) und b der Faktor pro Schritt: b > 1 heißt Wachstum, b < 1 Zerfall. Hier: a = 5 (Start), b = 0,5 < 1 → Zerfall. Probe: f(0) = 5, f(1) = 2,5, f(2) = 1,25 – die Werte werden kleiner ✓.\n- [Einstiegsquiz, 3.3b Funktionsgleichung aufstellen] Start 2, Faktor 3: f(x) = 2 · 3ˣ. Wie groß ist f(2)?\n  Ergebnis: 18\n  Weg: f(x) = a · bˣ mit Startwert a = 2 und Faktor b = 3. Erst die Potenz, dann mal a. f(2) = 2 · 3² = 2 · 9 = 18. Achtung: (2 · 3)² = 36 wäre falsch – die Hochzahl gehört nur zur 3.\n- [Einstiegsquiz, 3.4a Verdoppeln und Halbieren] 5 Bakterien, Verdopplungszeit 1 Stunde. Wie viele sind es nach 4 Stunden?\n  Ergebnis: 80\n  Weg: Verdopplungszeit 1 Stunde heißt: pro Stunde mal 2. Nach 4 Stunden sind das 4 Verdopplungen: Start · 2⁴. 5 · 2⁴ = 5 · 16 = 80. Probe: 5 → 10 → 20 → 40 → 80 ✓. Achtung: 5 · 2 · 4 = 40 wäre falsch (linear gerechnet).\n- [Einstiegsquiz, 3.5a Was ist ein Logarithmus?] Wie groß ist log₂(64)?\n  Ergebnis: 6\n  Weg: Der Logarithmus fragt nach der Hochzahl: log₂(64) heißt „2 hoch wie viel ergibt 64?“. 2¹ = 2, 2² = 4, 2³ = 8, 2⁴ = 16, 2⁵ = 32, 2⁶ = 64 → log₂(64) = 6. Achtung: 64 : 2 = 32 ist nicht gefragt.\n- [Einstiegsquiz, 3.5b Exponentialgleichungen lösen] Löse 2ˣ = 16.\n  Ergebnis: 4\n  Weg: Gesucht ist die Hochzahl x, mit der 2 den Wert 16 ergibt. 2¹ = 2, 2² = 4, 2³ = 8, 2⁴ = 16 → x = 4. Probe: 2 · 2 · 2 · 2 = 16 ✓. Achtung: 16 : 2 = 8 wäre falsch.\n- [Übungsaufgaben 1, 3.1a Linear oder exponentiell?] Ein Kontostand wächst jedes Jahr um 20 €. Ein anderer jedes Jahr auf das 1,5-Fache. Was ist richtig? Auswahl: Der erste ist linear, der zweite exponentiell | Beide sind linear | Beide sind exponentiell | Der erste ist exponentiell, der zweite linear\n  Ergebnis: Der erste ist linear, der zweite exponentiell\n  Weg: Linear: in gleichen Schritten kommt immer derselbe Betrag dazu. Exponentiell: es wird immer mit demselben Faktor multipliziert. + 20 € ist immer derselbe Betrag (linear), · 1,5 ist immer derselbe Faktor (exponentiell). Probe: 100 → 120 → 140 (immer + 20), aber 100 → 150 → 225 (der Zuwachs wird größer).\n- [Übungsaufgaben 1, 3.2a Wachstumsfaktor] Ein Preis von 250 € steigt um 6 %. Wie hoch ist der neue Preis?\n  Ergebnis: 265 €\n  Weg: Preis steigt um 6 % → Faktor q = 1 + 0,06 = 1,06. Neuer Preis: 250 € · 1,06 = 265 €. Probe: 6 % von 250 sind 15 €, und 250 + 15 = 265 ✓.\n- [Übungsaufgaben 1, 3.2b Zinseszins] 2 000 € werden 2 Jahre lang mit 4 % verzinst. Wie viel Geld ist es dann? (2 Nachkommastellen)\n  Ergebnis: 2163,2 €\n  Weg: Jedes Jahr mal q = 1 + 0,04 = 1,04; nach 2 Jahren mal 1,04². 2 000 · 1,04² = 2 000 · 1,0816 = 2 163,20 €. Achtung: 2 000 + 2 · 80 = 2 160 € wäre falsch, denn im 2. Jahr gibt es auch Zinsen auf die Zinsen (3,20 €).\n- [Übungsaufgaben 1, 3.2c Exponentielle Abnahme] Ein Auto kostet 30 000 € und verliert jedes Jahr 20 % an Wert. Wie viel ist es nach 2 Jahren noch wert?\n  Ergebnis: 19200 €\n  Weg: Jedes Jahr 20 % Verlust → Faktor q = 1 − 0,2 = 0,8; nach 2 Jahren mal 0,8². 30 000 · 0,8² = 30 000 · 0,64 = 19 200 €. Achtung: 40 % Verlust (30 000 · 0,6 = 18 000 €) wäre falsch, denn im 2. Jahr sind es 20 % vom schon kleineren Wert.\n- [Übungsaufgaben 1, 3.3a Graphen von Exponentialfunktionen] Für f(x) = 0,5 · 2ˣ: Wie groß ist f(3)?\n  Ergebnis: 4\n  Weg: f(x) = a · bˣ mit Startwert a = 0,5 und Faktor b = 2. Erst die Potenz, dann mal a. f(3) = 0,5 · 2³ = 0,5 · 8 = 4. Achtung: (0,5 · 2)³ = 1 wäre falsch – die 3 gehört nur zur 2.\n- [Übungsaufgaben 1, 3.3b Funktionsgleichung aufstellen] x = 0 → 6 und x = 1 → 15. Wie groß ist der Faktor b?\n  Ergebnis: 2,5\n  Weg: Der Faktor b sagt, womit man bei jedem Schritt multipliziert: b = f(1) : f(0). b = 15 : 6 = 2,5 (der Startwert ist a = 6). Probe: 6 · 2,5 = 15 ✓. Achtung: 15 − 6 = 9 wäre ein linearer Zuwachs, nicht der Faktor.\n- [Übungsaufgaben 1, 3.4a Verdoppeln und Halbieren] Ein Stoff hat 100 g und die Halbwertszeit 3 Tage. Wie viel ist nach 9 Tagen übrig?\n  Ergebnis: 12,5 g\n  Weg: Halbwertszeit: Nach jeder Halbwertszeit ist nur noch die Hälfte übrig. 9 Tage : 3 Tage = 3 Halbierungen: 100 → 50 → 25 → 12,5 g (= 100 · 0,5³). Achtung: Es wird nicht immer gleich viel abgezogen (linear), sondern jedes Mal halbiert.\n- [Übungsaufgaben 1, 3.5a Was ist ein Logarithmus?] Was bedeutet log₃(81) = 4? Auswahl: 3⁴ = 81 | 4³ = 81 | 3 · 4 = 81 | 81 : 3 = 4\n  Ergebnis: 3⁴ = 81\n  Weg: Der Logarithmus ist die Hochzahl: log₃(81) = 4 heißt „3 hoch 4 ergibt 81“. Probe: 3² = 9, 3³ = 27, 3⁴ = 81 ✓. Achtung: 4³ = 64 und 3 · 4 = 12 sind nicht 81 – die Basis 3 steht unten und wird hochgenommen.\n- [Übungsaufgaben 1, 3.5b Exponentialgleichungen lösen] Löse 3ˣ = 500. (2 Nachkommastellen)\n  Ergebnis: 5,66\n  Weg: x steht in der Hochzahl, deshalb braucht man den Logarithmus: 3ˣ = 500 → x = lg(500) : lg(3). x ≈ 2,699 : 0,477 ≈ 5,66. Probe: 3⁵ = 243 und 3⁶ = 729; 500 liegt dazwischen, 5,66 passt ✓.\n- [Abschlussquiz, 3.1a Linear oder exponentiell?] Die Werte 100, 90, 80, 70 sind … Auswahl: linear | exponentiell | weder noch\n  Ergebnis: linear\n  Weg: Es wird immer derselbe Betrag abgezogen (− 10), nicht mit demselben Faktor multipliziert. Die Quotienten wären 90 : 100 = 0,9 und 80 : 90 ≈ 0,89 – verschieden. Also linear. Exponentiell wäre z. B. 100, 90, 81, 72,9 (immer · 0,9).\n- [Abschlussquiz, 3.2a Wachstumsfaktor] Wachstum um 25 %: Wie groß ist der Wachstumsfaktor?\n  Ergebnis: 1,25\n  Weg: Zunahme um p: Wachstumsfaktor q = 1 + p. q = 1 + 0,25 = 1,25. Probe: 100 · 1,25 = 125, also + 25 % ✓. Achtung: 0,25 wäre nur der Zuwachs.\n- [Abschlussquiz, 3.2b Zinseszins] 1 200 € werden 2 Jahre mit 5 % verzinst. Wie viel Geld ist es dann? (2 Nachkommastellen)\n  Ergebnis: 1323 €\n  Weg: Faktor q = 1,05, zweimal angewendet: Start · q². 1 200 · 1,05² = 1 200 · 1,1025 = 1 323 €. Probe: Jahr 1: 1 260 €, Jahr 2: 1 260 · 1,05 = 1 323 € ✓. Achtung: 1 200 · 1,10 = 1 320 € wäre falsch (Zinseszins fehlt).\n- [Abschlussquiz, 3.2c Exponentielle Abnahme] 5 000 € verlieren jedes Jahr 10 % an Wert. Wie viel sind sie nach 2 Jahren noch wert?\n  Ergebnis: 4050 €\n  Weg: Abnahme um 10 % → q = 1 − 0,1 = 0,9, zweimal angewendet. 5 000 · 0,9² = 5 000 · 0,81 = 4 050 €. Achtung: 5 000 · 0,8 = 4 000 € (zweimal 10 % abgezogen) wäre falsch – im 2. Jahr sind es nur 10 % von 4 500 €.\n- [Abschlussquiz, 3.3a Graphen von Exponentialfunktionen] Durch welchen Punkt geht der Graph von f(x) = 3 · 4ˣ immer? Auswahl: (0 | 3) | (0 | 4) | (3 | 0) | (1 | 3)\n  Ergebnis: (0 | 3)\n  Weg: Für f(x) = a · bˣ gilt bei x = 0: b⁰ = 1, also f(0) = a. Der Graph schneidet die y-Achse bei (0 | a). Hier: f(0) = 3 · 4⁰ = 3 · 1 = 3 → (0 | 3). Achtung: 4 ist der Faktor b, nicht der Startwert.\n- [Abschlussquiz, 3.3b Funktionsgleichung aufstellen] Start 80, Abnahme um 25 % pro Schritt. Wie lautet f(x)? Auswahl: 80 · 0,75ˣ | 80 · 1,25ˣ | 80 · 0,25ˣ | 0,75 · 80ˣ\n  Ergebnis: 80 · 0,75ˣ\n  Weg: Allgemein gilt f(x) = Start · qˣ. Start = 80; Abnahme um 25 % → q = 1 − 0,25 = 0,75. Also f(x) = 80 · 0,75ˣ. Achtung: 1,25 wäre eine Zunahme, 0,25 eine Abnahme um 75 %, und bei 0,75 · 80ˣ steht der Startwert an der falschen Stelle.\n- [Abschlussquiz, 3.4a Verdoppeln und Halbieren] Ein Stoff hat die Halbwertszeit 5 Tage. Aus 640 mg werden nach 15 Tagen wie viel mg?\n  Ergebnis: 80 mg\n  Weg: Nach jeder Halbwertszeit (5 Tage) ist nur noch die Hälfte übrig. 15 : 5 = 3 Halbierungen: 640 → 320 → 160 → 80 mg (= 640 · 0,5³). Achtung: Es sind nicht 15 Halbierungen, sondern Zeit : Halbwertszeit = 3.\n- [Abschlussquiz, 3.5a Was ist ein Logarithmus?] Wie groß ist log₁₀(1000)?\n  Ergebnis: 3\n  Weg: Der Logarithmus ist die Hochzahl: log₁₀(1000) fragt „10 hoch wie viel ergibt 1000?“. 10 · 10 · 10 = 1000, also 10³ → 3. Probe: 1000 hat drei Nullen ✓. Achtung: 1000 : 10 = 100 ist nicht gefragt.\n- [Abschlussquiz, 3.5b Exponentialgleichungen lösen] Löse 1,1ˣ = 3. (2 Nachkommastellen)\n  Ergebnis: 11,53\n  Weg: x steht in der Hochzahl → Logarithmus: 1,1ˣ = 3 → x = lg(3) : lg(1,1). x ≈ 0,4771 : 0,04139 ≈ 11,53. Probe: 1,1¹¹ ≈ 2,85 und 1,1¹² ≈ 3,14; 3 liegt dazwischen, 11,53 passt ✓.\n- [Übungsaufgaben 2, 3.1a Linear oder exponentiell?] Seerose: Am 1. Tag 1 Blatt, jeden Tag doppelt so viele. Wie viele Blätter hat sie am Tag 7?\n  Ergebnis: 64\n  Weg: Tag 1 ist der Start (1 Blatt), danach kommt täglich eine Verdopplung dazu. Bis Tag 7 sind das 7 − 1 = 6 Verdopplungen. 1 · 2⁶ = 64 Blätter. Probe: 1, 2, 4, 8, 16, 32, 64 – die siebte Zahl ✓. Achtung: 2⁷ = 128 wäre falsch.\n- [Übungsaufgaben 2, 3.2a Wachstumsfaktor] Eine Zahl wird mit 1,08 multipliziert. Das bedeutet … Auswahl: + 8 % | + 108 % | + 0,08 % | − 8 %\n  Ergebnis: + 8 %\n  Weg: Der Faktor ist q = 1 + p: 1,08 = 1 + 0,08 → p = 8 % Zunahme. Probe: 100 · 1,08 = 108, also + 8 ✓. Achtung: − 8 % hätte den Faktor 0,92, + 108 % den Faktor 2,08.\n- [Übungsaufgaben 2, 3.2b Zinseszins] 1 500 € zu 3 % für 5 Jahre. Wie viel Geld ist es? (2 Nachkommastellen)\n  Ergebnis: 1738,91 €\n  Weg: Jedes Jahr mal q = 1,03; nach 5 Jahren mal 1,03⁵. 1 500 · 1,03⁵ ≈ 1 500 · 1,15927 ≈ 1 738,91 €. Achtung: 1 500 + 5 · 45 = 1 725 € wäre falsch – es fehlen die Zinsen auf die Zinsen.\n- [Übungsaufgaben 2, 3.2c Exponentielle Abnahme] Ein Handy für 250 € verliert jedes Jahr 40 % an Wert. Wie viel ist es nach 3 Jahren noch wert? (2 Nachkommastellen)\n  Ergebnis: 54 €\n  Weg: Jedes Jahr 40 % Verlust → q = 1 − 0,4 = 0,6; nach 3 Jahren mal 0,6³. 250 · 0,6³ = 250 · 0,216 = 54 €. Achtung: 3 · 40 % = 120 % Verlust wäre mehr als alles – jedes Jahr sind es 40 % vom Rest.\n- [Übungsaufgaben 2, 3.3a Graphen von Exponentialfunktionen] f(x) = 2 · 1,5ˣ. Wie groß ist f(4)? (2 Nachkommastellen)\n  Ergebnis: 10,13\n  Weg: f(x) = a · bˣ mit a = 2 und b = 1,5. Erst 1,5⁴, dann mal 2. 1,5⁴ = 1,5 · 1,5 · 1,5 · 1,5 = 5,0625 → f(4) = 2 · 5,0625 = 10,125 ≈ 10,13. Achtung: (2 · 1,5)⁴ = 81 wäre falsch – die 4 gehört nur zu 1,5.\n- [Übungsaufgaben 2, 3.3b Funktionsgleichung aufstellen] Ein Wert steigt von 150 auf 300 und exponentiell weiter. Wie groß ist f(3), wenn f(0) = 150 und f(1) = 300?\n  Ergebnis: 1200\n  Weg: Der Faktor kommt aus den ersten zwei Werten: b = f(1) : f(0) = 300 : 150 = 2. Der Startwert ist a = f(0) = 150. f(3) = 150 · 2³ = 150 · 8 = 1 200. Probe: 150 → 300 → 600 → 1 200 ✓ (dreimal verdoppelt).\n- [Übungsaufgaben 2, 3.4a Verdoppeln und Halbieren] Eine Algenart verdoppelt sich alle 2 Tage. Aus 3 g werden nach 8 Tagen wie viel g?\n  Ergebnis: 48 g\n  Weg: Alle 2 Tage mal 2. In 8 Tagen passen 8 : 2 = 4 Verdopplungen. 3 g · 2⁴ = 3 · 16 = 48 g. Probe: 3 → 6 → 12 → 24 → 48 ✓. Achtung: 2⁸ wäre falsch – es verdoppelt sich nur alle 2 Tage.\n- [Übungsaufgaben 2, 3.5a Was ist ein Logarithmus?] Wie viele Verdopplungen braucht man von 1 bis 1 024? (Also log₂(1 024))\n  Ergebnis: 10\n  Weg: Der Logarithmus fragt nach der Hochzahl: 2 hoch wie viel ergibt 1 024? Verdoppeln ab 1: 2, 4, 8, 16, 32, 64, 128, 256, 512, 1 024 – das sind 10 Verdopplungen → log₂(1 024) = 10. Probe: 2¹⁰ = 2⁵ · 2⁵ = 32 · 32 = 1 024 ✓.\n- [Übungsaufgaben 2, 3.5b Exponentialgleichungen lösen] Wie lange dauert es, bis sich Geld bei 5 % Zinsen verdoppelt? (Jahre, 2 Nachkommastellen)\n  Ergebnis: 14,21 Jahre\n  Weg: Verdoppeln heißt: Start · 1,05ˣ = 2 · Start. Der Startwert kürzt sich: 1,05ˣ = 2. Da x in der Hochzahl steht → x = lg(2) : lg(1,05). x ≈ 0,3010 : 0,02119 ≈ 14,21 Jahre. Achtung: 100 : 5 = 20 Jahre wäre falsch – mit Zinseszins geht es schneller.",
  "aufgaben": {
   "Welche Folge ist exponentiell?": {
    "teil": "3.1a",
    "typ": "wahl",
    "ergebnis": "3, 6, 12, 24",
    "optionen": [
     "2, 5, 8, 11",
     "3, 6, 12, 24",
     "10, 20, 30, 40",
     "1, 2, 3, 4"
    ]
   },
   "Ein Wert wächst um 6 %. Mit welchem Faktor rechnest du?": {
    "teil": "3.2a",
    "typ": "wahl",
    "ergebnis": "1,06",
    "optionen": [
     "0,06",
     "1,06",
     "6",
     "0,94"
    ]
   },
   "1 000 € werden 3 Jahre lang mit 3 % verzinst. Wie viel Geld ist es dann? (2 Nachkommastellen)": {
    "teil": "3.2b",
    "typ": "zahl",
    "ergebnis": "1092,73 €",
    "antwort": 1092.73
   },
   "Ein Wert sinkt um 15 %. Mit welchem Faktor rechnest du?": {
    "teil": "3.2c",
    "typ": "wahl",
    "ergebnis": "0,85",
    "optionen": [
     "1,15",
     "0,15",
     "0,85",
     "0,95"
    ]
   },
   "f(x) = 5 · 0,5ˣ: Was stimmt?": {
    "teil": "3.3a",
    "typ": "wahl",
    "ergebnis": "Zerfall, Startwert 5",
    "optionen": [
     "Zerfall, Startwert 5",
     "Wachstum, Startwert 5",
     "Zerfall, Startwert 0,5",
     "Wachstum, Startwert 0,5"
    ]
   },
   "Start 2, Faktor 3: f(x) = 2 · 3ˣ. Wie groß ist f(2)?": {
    "teil": "3.3b",
    "typ": "zahl",
    "ergebnis": "18",
    "antwort": 18
   },
   "5 Bakterien, Verdopplungszeit 1 Stunde. Wie viele sind es nach 4 Stunden?": {
    "teil": "3.4a",
    "typ": "zahl",
    "ergebnis": "80",
    "antwort": 80
   },
   "Wie groß ist log₂(64)?": {
    "teil": "3.5a",
    "typ": "zahl",
    "ergebnis": "6",
    "antwort": 6
   },
   "Löse 2ˣ = 16.": {
    "teil": "3.5b",
    "typ": "zahl",
    "ergebnis": "4",
    "antwort": 4
   },
   "Ein Kontostand wächst jedes Jahr um 20 €. Ein anderer jedes Jahr auf das 1,5-Fache. Was ist richtig?": {
    "teil": "3.1a",
    "typ": "wahl",
    "ergebnis": "Der erste ist linear, der zweite exponentiell",
    "optionen": [
     "Der erste ist linear, der zweite exponentiell",
     "Beide sind linear",
     "Beide sind exponentiell",
     "Der erste ist exponentiell, der zweite linear"
    ]
   },
   "Ein Preis von 250 € steigt um 6 %. Wie hoch ist der neue Preis?": {
    "teil": "3.2a",
    "typ": "zahl",
    "ergebnis": "265 €",
    "antwort": 265
   },
   "2 000 € werden 2 Jahre lang mit 4 % verzinst. Wie viel Geld ist es dann? (2 Nachkommastellen)": {
    "teil": "3.2b",
    "typ": "zahl",
    "ergebnis": "2163,2 €",
    "antwort": 2163.2
   },
   "Ein Auto kostet 30 000 € und verliert jedes Jahr 20 % an Wert. Wie viel ist es nach 2 Jahren noch wert?": {
    "teil": "3.2c",
    "typ": "zahl",
    "ergebnis": "19200 €",
    "antwort": 19200
   },
   "Für f(x) = 0,5 · 2ˣ: Wie groß ist f(3)?": {
    "teil": "3.3a",
    "typ": "zahl",
    "ergebnis": "4",
    "antwort": 4
   },
   "x = 0 → 6 und x = 1 → 15. Wie groß ist der Faktor b?": {
    "teil": "3.3b",
    "typ": "zahl",
    "ergebnis": "2,5",
    "antwort": 2.5
   },
   "Ein Stoff hat 100 g und die Halbwertszeit 3 Tage. Wie viel ist nach 9 Tagen übrig?": {
    "teil": "3.4a",
    "typ": "zahl",
    "ergebnis": "12,5 g",
    "antwort": 12.5
   },
   "Was bedeutet log₃(81) = 4?": {
    "teil": "3.5a",
    "typ": "wahl",
    "ergebnis": "3⁴ = 81",
    "optionen": [
     "3⁴ = 81",
     "4³ = 81",
     "3 · 4 = 81",
     "81 : 3 = 4"
    ]
   },
   "Löse 3ˣ = 500. (2 Nachkommastellen)": {
    "teil": "3.5b",
    "typ": "zahl",
    "ergebnis": "5,66",
    "antwort": 5.66
   },
   "Die Werte 100, 90, 80, 70 sind …": {
    "teil": "3.1a",
    "typ": "wahl",
    "ergebnis": "linear",
    "optionen": [
     "linear",
     "exponentiell",
     "weder noch"
    ]
   },
   "Wachstum um 25 %: Wie groß ist der Wachstumsfaktor?": {
    "teil": "3.2a",
    "typ": "zahl",
    "ergebnis": "1,25",
    "antwort": 1.25
   },
   "1 200 € werden 2 Jahre mit 5 % verzinst. Wie viel Geld ist es dann? (2 Nachkommastellen)": {
    "teil": "3.2b",
    "typ": "zahl",
    "ergebnis": "1323 €",
    "antwort": 1323
   },
   "5 000 € verlieren jedes Jahr 10 % an Wert. Wie viel sind sie nach 2 Jahren noch wert?": {
    "teil": "3.2c",
    "typ": "zahl",
    "ergebnis": "4050 €",
    "antwort": 4050
   },
   "Durch welchen Punkt geht der Graph von f(x) = 3 · 4ˣ immer?": {
    "teil": "3.3a",
    "typ": "wahl",
    "ergebnis": "(0 | 3)",
    "optionen": [
     "(0 | 3)",
     "(0 | 4)",
     "(3 | 0)",
     "(1 | 3)"
    ]
   },
   "Start 80, Abnahme um 25 % pro Schritt. Wie lautet f(x)?": {
    "teil": "3.3b",
    "typ": "wahl",
    "ergebnis": "80 · 0,75ˣ",
    "optionen": [
     "80 · 0,75ˣ",
     "80 · 1,25ˣ",
     "80 · 0,25ˣ",
     "0,75 · 80ˣ"
    ]
   },
   "Ein Stoff hat die Halbwertszeit 5 Tage. Aus 640 mg werden nach 15 Tagen wie viel mg?": {
    "teil": "3.4a",
    "typ": "zahl",
    "ergebnis": "80 mg",
    "antwort": 80
   },
   "Wie groß ist log₁₀(1000)?": {
    "teil": "3.5a",
    "typ": "zahl",
    "ergebnis": "3",
    "antwort": 3
   },
   "Löse 1,1ˣ = 3. (2 Nachkommastellen)": {
    "teil": "3.5b",
    "typ": "zahl",
    "ergebnis": "11,53",
    "antwort": 11.53
   },
   "Seerose: Am 1. Tag 1 Blatt, jeden Tag doppelt so viele. Wie viele Blätter hat sie am Tag 7?": {
    "teil": "3.1a",
    "typ": "zahl",
    "ergebnis": "64",
    "antwort": 64
   },
   "Eine Zahl wird mit 1,08 multipliziert. Das bedeutet …": {
    "teil": "3.2a",
    "typ": "wahl",
    "ergebnis": "+ 8 %",
    "optionen": [
     "+ 8 %",
     "+ 108 %",
     "+ 0,08 %",
     "− 8 %"
    ]
   },
   "1 500 € zu 3 % für 5 Jahre. Wie viel Geld ist es? (2 Nachkommastellen)": {
    "teil": "3.2b",
    "typ": "zahl",
    "ergebnis": "1738,91 €",
    "antwort": 1738.91
   },
   "Ein Handy für 250 € verliert jedes Jahr 40 % an Wert. Wie viel ist es nach 3 Jahren noch wert? (2 Nachkommastellen)": {
    "teil": "3.2c",
    "typ": "zahl",
    "ergebnis": "54 €",
    "antwort": 54
   },
   "f(x) = 2 · 1,5ˣ. Wie groß ist f(4)? (2 Nachkommastellen)": {
    "teil": "3.3a",
    "typ": "zahl",
    "ergebnis": "10,13",
    "antwort": 10.13
   },
   "Ein Wert steigt von 150 auf 300 und exponentiell weiter. Wie groß ist f(3), wenn f(0) = 150 und f(1) = 300?": {
    "teil": "3.3b",
    "typ": "zahl",
    "ergebnis": "1200",
    "antwort": 1200
   },
   "Eine Algenart verdoppelt sich alle 2 Tage. Aus 3 g werden nach 8 Tagen wie viel g?": {
    "teil": "3.4a",
    "typ": "zahl",
    "ergebnis": "48 g",
    "antwort": 48
   },
   "Wie viele Verdopplungen braucht man von 1 bis 1 024? (Also log₂(1 024))": {
    "teil": "3.5a",
    "typ": "zahl",
    "ergebnis": "10",
    "antwort": 10
   },
   "Wie lange dauert es, bis sich Geld bei 5 % Zinsen verdoppelt? (Jahre, 2 Nachkommastellen)": {
    "teil": "3.5b",
    "typ": "zahl",
    "ergebnis": "14,21 Jahre",
    "antwort": 14.21
   },
   "Die Folge 1, 3, 9, 27 ist …": {
    "teil": "3.1a",
    "typ": "wahl",
    "klausur": true
   },
   "8 000 € werden 3 Jahre mit 2,5 % verzinst. Wie viel Zinsen sind das insgesamt? (2 Nachkommastellen)": {
    "teil": "3.2b",
    "typ": "zahl",
    "klausur": true
   },
   "Eine Maschine (8 000 €) verliert jedes Jahr 15 % an Wert. Wert nach 3 Jahren? (2 Nachkommastellen)": {
    "teil": "3.2c",
    "typ": "zahl",
    "klausur": true
   },
   "Ein Graph geht durch (0 | 4) und (1 | 12). Wie groß ist f(3)?": {
    "teil": "3.3b",
    "typ": "zahl",
    "klausur": true
   },
   "Ein Stoff mit der Halbwertszeit 4 Tage: Aus 96 g werden nach 12 Tagen wie viel g?": {
    "teil": "3.4a",
    "typ": "zahl",
    "klausur": true
   },
   "Berechne log₃(81) + log₂(8).": {
    "teil": "3.5a",
    "typ": "zahl",
    "klausur": true
   },
   "Löse 2ˣ = 30. (2 Nachkommastellen)": {
    "teil": "3.5b",
    "typ": "zahl",
    "klausur": true
   },
   "Ein Preis von 400 € steigt um 7,5 %. Wie hoch ist der neue Preis?": {
    "teil": "3.2a",
    "typ": "zahl",
    "klausur": true
   }
  }
 },
 "m10-4-sinusfunktion": {
  "titel": "Sinusfunktion",
  "fach": "mathe",
  "klasse": 10,
  "teile": {
   "4.1a": "Sinus und Kosinus am Einheitskreis",
   "4.1b": "Winkel über 90°",
   "4.2a": "Bogenmaß",
   "4.2b": "Graph der Sinusfunktion",
   "4.3a": "Amplitude",
   "4.3b": "Periode",
   "4.3c": "Sinus im Alltag"
  },
  "text": "# Sinusfunktion (Mathe, Klasse 10)\n\n## Merkkästen der Arbeitsblätter\n### 4.1a Sinus und Kosinus am Einheitskreis\nDer Einheitskreis hat den Radius 1. Zum Winkel α gehört ein Punkt P auf dem Kreis: P(cos α | sin α)\ncos α = Breite (x-Wert),  sin α = Höhe (y-Wert)\n1 α von der x-Achse aus gegen den Uhrzeigersinn\n2 Punkt P auf dem Kreis\n3 Höhe: sin 30° = 0,5\nBreite: cos 30° ≈ 0,87\n\n### 4.1b Winkel über 90°\nSpiegelt man P an der y-Achse, bleibt die Höhe gleich, die Breite wechselt das Vorzeichen:\nsin(180° − α) = sin α\ncos(180° − α) = −cos α\n1 Ergänzen: 180° − 150° = 30°\n2 Gleiche Höhe: sin 150° = sin 30°\n3 Ablesen: sin 150° = 0,5\n\n### 4.2a Bogenmaß\nDas Bogenmaß misst einen Winkel als Länge des Kreisbogens am Einheitskreis.\n180° = π    360° = 2π\nUmrechnen:  x = α · π / 180°\n1 Anteil von 180°: 90° : 180° = ½\n2 Mal π: ½ · π\n3 90° = π/2 ≈ 1,57\n\n### 4.2b Graph der Sinusfunktion\nDer Graph von f(x) = sin x\nist eine Welle (x im Bogenmaß).\nNullstellen: 0, π, 2π · Hochpunkt: (π/2 | 1) · Tiefpunkt: (3π/2 | −1)\nNach 2π wiederholt sich alles: Periode 2π.\n1 Fünf Punkte: x = 0, π/2, π, 3π/2, 2π\n2 y-Werte: 0, 1, 0, −1, 0\n3 Rund verbinden\n\n### 4.3a Amplitude\nBei f(x) = a · sin x\nstreckt a die Welle nach oben und unten.\n|a| heißt Amplitude: der größte Abstand von der x-Achse. Die Nullstellen bleiben gleich.\n1 Zahl vor sin lesen: a = 3\n2 Hochpunkt (π/2 | 3), Tiefpunkt (3π/2 | −3)\n3 Werte liegen zwischen −3 und 3\n\n### 4.3b Periode\nBei f(x) = sin(b · x)\nstaucht b die Welle von links nach rechts.\nEine Welle ist so lang wie die Periode:  p = 2π : b\n1 b lesen: sin(2x) → b = 2\n2 p = 2π : 2 = π\n3 In 0 bis 2π passen 2 Wellen\n\n### 4.3c Sinus im Alltag\nRiesenrad, Gezeiten, Tageslänge: Alles wiederholt sich. Modell:\nh(t) = d + a · sin(b · t)\nd = Mitte,  a = Amplitude,  p = 2π : b = Periode. Beispiel: h(t) = 10 + 8 · sin(t)\n1 Mitte d = 10 m (Achse)\n2 Amplitude a = 8 m (Radius)\n3 Höchstens 10 + 8 = 18 m, mindestens 10 − 8 = 2 m\n\n## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)\n- [Einstiegsquiz, 4.1a Sinus und Kosinus am Einheitskreis] Ein Punkt P liegt auf dem Einheitskreis zum Winkel α. Was ist die Höhe (der y-Wert) von P? Auswahl: sin α | cos α | tan α | 1\n  Ergebnis: sin α\n  Weg: Am Einheitskreis (Radius 1) hat der Punkt P zum Winkel α die Koordinaten P(cos α | sin α): Breite (x-Wert) = cos α, Höhe (y-Wert) = sin α. Gefragt ist die Höhe → sin α. Achtung: cos α ist die Breite, nicht die Höhe.\n- [Einstiegsquiz, 4.1b Winkel über 90°] Wie groß ist sin 150°? (Tipp: sin(180° − α) = sin α)\n  Ergebnis: 0,5\n  Weg: 150° liegt im 2. Quadranten. P entsteht durch Spiegeln des 30°-Punktes an der y-Achse: Die Höhe bleibt gleich, also sin(180° − α) = sin α. sin 150° = sin(180° − 150°) = sin 30° = 0,5. Achtung: Nur der Kosinus wird negativ (cos 150° ≈ −0,87).\n- [Einstiegsquiz, 4.2a Bogenmaß] Wie groß ist 90° im Bogenmaß? Gib eine Dezimalzahl an (2 Nachkommastellen).\n  Ergebnis: 1,57\n  Weg: Das Bogenmaß ist die Länge des Kreisbogens am Einheitskreis. 180° entspricht π, also 90° genau der halben Länge: π/2. π/2 ≈ 3,14 : 2 = 1,57. Achtung: 90 oder 3,14 wären falsch – π gehört zu 180°, nicht zu 90°.\n- [Einstiegsquiz, 4.2b Graph der Sinusfunktion] Wo liegt der Hochpunkt der Sinuskurve f(x) = sin x zwischen 0 und 2π? Auswahl: (π/2 | 1) | (π | 1) | (0 | 1) | (2π | 1)\n  Ergebnis: (π/2 | 1)\n  Weg: Die Sinuskurve startet bei (0 | 0), steigt bis zum Maximum 1 bei x = π/2 (= 90°) und fällt dann wieder. Probe: sin(π/2) = 1 ✓ → Hochpunkt (π/2 | 1). Achtung: (π | 1) wäre falsch, denn bei π und 2π liegen Nullstellen (sin = 0); bei x = 0 ist sin 0 = 0, nicht 1.\n- [Einstiegsquiz, 4.3a Amplitude] Welchen größten Funktionswert hat f(x) = 3 · sin x?\n  Ergebnis: 3\n  Weg: Der Faktor a in a · sin x streckt die Kurve in y-Richtung; |a| ist die Amplitude. sin x liegt immer zwischen −1 und 1. Größter Wert: 3 · 1 = 3 (kleinster: 3 · (−1) = −3). Achtung: Die 3 ändert nur die Höhe, nicht die x-Werte.\n- [Einstiegsquiz, 4.3b Periode] Welche Periode hat f(x) = sin(2x)? Gib eine Dezimalzahl an (2 Nachkommastellen).\n  Ergebnis: 3,14\n  Weg: Bei sin(b · x) ist die Periode p = 2π : b. Mit b = 2 läuft die Kurve doppelt so schnell, die Welle wird halb so lang. p = 2π : 2 = π ≈ 3,14. Achtung: 2π · 2 = 4π wäre falsch – b steht im Nenner.\n- [Einstiegsquiz, 4.3c Sinus im Alltag] Ein Riesenrad: h(t) = 10 + 8 · sin(t) (h in m). Wie hoch kommt die Gondel höchstens?\n  Ergebnis: 18 m\n  Weg: Bei h(t) = Mitte + Amplitude · sin(t) ist der höchste Wert Mitte + Amplitude, weil sin t höchstens 1 wird. 10 + 8 · 1 = 18 m (der tiefste Punkt wäre 10 − 8 = 2 m). Achtung: 8 m ist nur die Amplitude, nicht die Höhe über dem Boden.\n- [Übungsaufgaben 1, 4.1a Sinus und Kosinus am Einheitskreis] Ein Punkt P(0,28 | y) liegt oben auf dem Einheitskreis (y > 0). Wie groß ist y?\n  Ergebnis: 0,96\n  Weg: Für jeden Punkt auf dem Einheitskreis (Radius 1) gilt nach Pythagoras x² + y² = 1. 0,28² + y² = 1 → y² = 1 − 0,0784 = 0,9216 → y = √0,9216 = 0,96 (positiv, da P oben liegt). Probe: 0,0784 + 0,9216 = 1 ✓.\n- [Übungsaufgaben 1, 4.1b Winkel über 90°] Wie groß ist cos 120°?\n  Ergebnis: -0,5\n  Weg: 120° liegt im 2. Quadranten, links der y-Achse: Der x-Wert (cos) ist negativ. Beim Spiegeln des 60°-Punktes wechselt x das Vorzeichen: cos(180° − α) = −cos α. cos 120° = −cos 60° = −0,5. Achtung: Das Vorzeichen nicht vergessen – cos 60° = +0,5.\n- [Übungsaufgaben 1, 4.2a Bogenmaß] Rechne 135° ins Bogenmaß um (Dezimalzahl, 2 Nachkommastellen).\n  Ergebnis: 2,36\n  Weg: Bogenmaß = Winkel : 180° · π. 135° ist ¾ von 180°, also ¾ von π. ¾ · π = 3π/4 ≈ 0,75 · 3,1416 = 2,36. Probe: 135° liegt zwischen 90° (1,57) und 180° (3,14), 2,36 passt ✓.\n- [Übungsaufgaben 1, 4.2b Graph der Sinusfunktion] Bestimme ohne Taschenrechner: sin(9π/2)\n  Ergebnis: 1\n  Weg: Der Sinus wiederholt sich alle 2π (eine volle Umdrehung). Ziehe ganze Umdrehungen ab: 9π/2 = 4π + π/2 (zwei volle Perioden). sin(9π/2) = sin(π/2) = 1. Probe: 4π + π/2 = 8π/2 + π/2 = 9π/2 ✓.\n- [Übungsaufgaben 1, 4.3a Amplitude] Wie groß ist die Amplitude von f(x) = −2,5 · sin x?\n  Ergebnis: 2,5\n  Weg: Die Amplitude ist die größte Auslenkung von der Mittellinie – immer positiv, also der Betrag von a: |−2,5| = 2,5. Das Minus spiegelt die Kurve nur an der x-Achse (erst runter, dann hoch), die Höhe bleibt gleich. Achtung: −2,5 selbst ist daher keine Amplitude.\n- [Übungsaufgaben 1, 4.3b Periode] Die Funktion f(x) = sin(b · x) hat die Periode π/3. Wie groß ist b?\n  Ergebnis: 6\n  Weg: Bei sin(b · x) ist die Periode p = 2π : b, umgestellt b = 2π : p. b = 2π : (π/3) = 2π · 3/π = 6. Probe: 2π : 6 = π/3 ✓. Achtung: b = p · 2π wäre falsch umgestellt.\n- [Übungsaufgaben 1, 4.3c Sinus im Alltag] Tageslänge in Stunden: L(x) = 12 + 4 · sin(π/6 · x), x = Monate seit 21. März. Wie lang ist der Tag bei x = 1?\n  Ergebnis: 14 h\n  Weg: Das Argument π/6 · x ist ein Winkel im Bogenmaß; setze x = 1 ein. L(1) = 12 + 4 · sin(π/6) = 12 + 4 · 0,5 = 14 Stunden (π/6 entspricht 30°, sin 30° = 0,5). Achtung: Rechnet man mit dem Taschenrechner, muss er auf RAD (Bogenmaß) stehen.\n- [Abschlussquiz, 4.1a Sinus und Kosinus am Einheitskreis] Wie groß ist cos 180°? Auswahl: 0 | 1 | −1 | ½\n  Ergebnis: −1\n  Weg: Der x-Wert des Punktes P auf dem Einheitskreis ist cos α. Bei 180° liegt P ganz links bei (−1 | 0). Also cos 180° = −1. Achtung: sin 180° = 0 ist die Höhe; cos 0° wäre 1.\n- [Abschlussquiz, 4.1b Winkel über 90°] Welche Aussage stimmt? Auswahl: sin(180° − α) = sin α | sin(180° − α) = −sin α | cos(180° − α) = cos α | sin(180° − α) = cos α\n  Ergebnis: sin(180° − α) = sin α\n  Weg: Der Winkel 180° − α entsteht durch Spiegeln an der y-Achse: Der x-Wert wechselt das Vorzeichen, die Höhe bleibt gleich. Also sin(180° − α) = sin α und cos(180° − α) = −cos α. Probe: sin 150° = 0,5 = sin 30° ✓. Achtung: Beim Kosinus ändert sich das Vorzeichen.\n- [Abschlussquiz, 4.2a Bogenmaß] Welchem Winkel entspricht π/6? Auswahl: 30° | 60° | 45° | 15°\n  Ergebnis: 30°\n  Weg: π entspricht 180°, also entspricht π/6 genau ein Sechstel davon: 180° : 6 = 30°. Probe: π/3 wären 60°, π/4 wären 45° – π/6 ist kleiner, 30° passt ✓. Achtung: Die Zahl unter dem Bruchstrich teilt die 180°.\n- [Abschlussquiz, 4.2b Graph der Sinusfunktion] Wie viele Nullstellen hat sin x im Intervall von 0 bis 2π (Randpunkte zählen mit)?\n  Ergebnis: 3\n  Weg: Nullstellen sind die x-Werte, bei denen die Höhe 0 ist: sin x = 0 bei x = 0, π und 2π (Start, halbe und ganze Welle). Im Intervall von 0 bis 2π mit beiden Randpunkten sind das 3 Stellen. Achtung: Hoch- und Tiefpunkt (π/2 und 3π/2) sind keine Nullstellen.\n- [Abschlussquiz, 4.3a Amplitude] Welchen kleinsten Funktionswert hat f(x) = 4 · sin x? Auswahl: −4 | −1 | 0 | 4\n  Ergebnis: −4\n  Weg: sin x liegt immer zwischen −1 und 1. Der Faktor 4 streckt nach oben und unten: f liegt zwischen −4 und 4. Kleinster Wert: 4 · (−1) = −4. Achtung: −1 ist der kleinste Wert von sin x ohne Faktor; 4 ist der größte Wert von f.\n- [Abschlussquiz, 4.3b Periode] Welche Funktion hat die Periode 4π? Auswahl: sin(0,5x) | sin(2x) | sin(4x) | sin(x/4)\n  Ergebnis: sin(0,5x)\n  Weg: Die Periode von sin(b · x) ist p = 2π : b. Für p = 4π braucht man b = 2π : 4π = 0,5, also sin(0,5x). Probe: p = 2π : 0,5 = 4π ✓. Achtung: sin(x/4) hat b = 0,25 und die Periode 8π, sin(2x) hat die Periode π.\n- [Abschlussquiz, 4.3c Sinus im Alltag] Gezeiten: w(t) = 3 + 2 · sin(0,5 · t) (w in m). Wie niedrig sinkt das Wasser höchstens (Niedrigwasser)?\n  Ergebnis: 1 m\n  Weg: Niedrigwasser = Mitte − Amplitude, weil sin t mindestens −1 wird: w = 3 + 2 · (−1) = 1 m (Hochwasser: 3 + 2 = 5 m). Achtung: 2 m ist nur die Amplitude, nicht der Wasserstand. Der Faktor 0,5 im Argument ändert nur die Dauer, nicht die Höhe.\n- [Übungsaufgaben 2, 4.1a Sinus und Kosinus am Einheitskreis] Wie groß ist sin 60°? (2 Nachkommastellen)\n  Ergebnis: 0,87\n  Weg: Merkwert: sin 60° = ½ · √3. Mit √3 ≈ 1,732 ist ½ · 1,732 = 0,866 ≈ 0,87. Probe: sin 60° liegt zwischen sin 45° ≈ 0,71 und sin 90° = 1 ✓. Achtung: sin 30° = 0,5 nicht verwechseln.\n- [Übungsaufgaben 2, 4.1b Winkel über 90°] Zwei Winkel zwischen 0° und 180° haben den Sinus 0,8. Der kleinere ist 53,13°. Wie groß ist der andere? (2 Nachkommastellen)\n  Ergebnis: 126,87 °\n  Weg: Zwei Winkel zwischen 0° und 180° mit gleichem Sinus liegen symmetrisch zu 90° (Spiegelung an der y-Achse): sin(180° − α) = sin α. 180° − 53,13° = 126,87°. Probe: sin 126,87° = sin 53,13° = 0,8 ✓.\n- [Übungsaufgaben 2, 4.2a Bogenmaß] Wie viel Grad entspricht das Bogenmaß 2π/3?\n  Ergebnis: 120 °\n  Weg: Grad = Bogenmaß : π · 180°. Mit π = 180° ist 2π/3 zwei Drittel von 180°. 2/3 · 180° = 120°. Probe: 120° : 180° · π = 2π/3 ✓. Achtung: π/3 wären nur 60°.\n- [Übungsaufgaben 2, 4.2b Graph der Sinusfunktion] Bestimme ohne Taschenrechner: sin(7π/2)\n  Ergebnis: -1\n  Weg: Ziehe volle Umdrehungen (2π) ab: 7π/2 = 2π + 3π/2 → sin(7π/2) = sin(3π/2). Bei 3π/2 (= 270°) liegt P ganz unten bei (0 | −1): sin = −1. Achtung: sin(π/2) wäre +1 – nicht mit 3π/2 verwechseln.\n- [Übungsaufgaben 2, 4.3a Amplitude] Berechne f(π/6) für f(x) = 5 · sin x.\n  Ergebnis: 2,5\n  Weg: π/6 entspricht 30° und sin(π/6) = sin 30° = 0,5. Dann mit dem Faktor 5 multiplizieren. f(π/6) = 5 · 0,5 = 2,5. Achtung: 5 · π/6 ≈ 2,62 wäre falsch – π/6 ist das Argument vom Sinus, kein Faktor.\n- [Übungsaufgaben 2, 4.3b Periode] Die Periode von f(x) = sin(0,25 · x) ist ein Vielfaches von π. Wie viele π sind es?\n  Ergebnis: 8 · π\n  Weg: Die Periode ist p = 2π : b, hier mit b = 0,25. p = 2π : 0,25 = 2π · 4 = 8π, also 8 mal π. Probe: 8π · 0,25 = 2π ✓. Achtung: 2π · 0,25 wäre falsch – man teilt durch b, nicht mal b.\n- [Übungsaufgaben 2, 4.3c Sinus im Alltag] Riesenrad: h(t) = 22 + 20 · sin(π/5 · t) (h in m, t in Minuten). Wie hoch ist die Gondel nach 7,5 Minuten?\n  Ergebnis: 2 m\n  Weg: Argument ausrechnen: π/5 · 7,5 = 1,5π = 3π/2. Dort ist sin = −1 (Tiefpunkt). h = 22 + 20 · (−1) = 2 m. Probe: Die Periode ist 2π : π/5 = 10 Minuten; 7,5 min sind ¾ davon, die Gondel ist ganz unten ✓.",
  "aufgaben": {
   "Ein Punkt P liegt auf dem Einheitskreis zum Winkel α. Was ist die Höhe (der y-Wert) von P?": {
    "teil": "4.1a",
    "typ": "wahl",
    "ergebnis": "sin α",
    "optionen": [
     "sin α",
     "cos α",
     "tan α",
     "1"
    ]
   },
   "Wie groß ist sin 150°? (Tipp: sin(180° − α) = sin α)": {
    "teil": "4.1b",
    "typ": "zahl",
    "ergebnis": "0,5",
    "antwort": 0.5
   },
   "Wie groß ist 90° im Bogenmaß? Gib eine Dezimalzahl an (2 Nachkommastellen).": {
    "teil": "4.2a",
    "typ": "zahl",
    "ergebnis": "1,57",
    "antwort": 1.57
   },
   "Wo liegt der Hochpunkt der Sinuskurve f(x) = sin x zwischen 0 und 2π?": {
    "teil": "4.2b",
    "typ": "wahl",
    "ergebnis": "(π/2 | 1)",
    "optionen": [
     "(π/2 | 1)",
     "(π | 1)",
     "(0 | 1)",
     "(2π | 1)"
    ]
   },
   "Welchen größten Funktionswert hat f(x) = 3 · sin x?": {
    "teil": "4.3a",
    "typ": "zahl",
    "ergebnis": "3",
    "antwort": 3
   },
   "Welche Periode hat f(x) = sin(2x)? Gib eine Dezimalzahl an (2 Nachkommastellen).": {
    "teil": "4.3b",
    "typ": "zahl",
    "ergebnis": "3,14",
    "antwort": 3.14
   },
   "Ein Riesenrad: h(t) = 10 + 8 · sin(t) (h in m). Wie hoch kommt die Gondel höchstens?": {
    "teil": "4.3c",
    "typ": "zahl",
    "ergebnis": "18 m",
    "antwort": 18
   },
   "Ein Punkt P(0,28 | y) liegt oben auf dem Einheitskreis (y > 0). Wie groß ist y?": {
    "teil": "4.1a",
    "typ": "zahl",
    "ergebnis": "0,96",
    "antwort": 0.96
   },
   "Wie groß ist cos 120°?": {
    "teil": "4.1b",
    "typ": "zahl",
    "ergebnis": "-0,5",
    "antwort": -0.5
   },
   "Rechne 135° ins Bogenmaß um (Dezimalzahl, 2 Nachkommastellen).": {
    "teil": "4.2a",
    "typ": "zahl",
    "ergebnis": "2,36",
    "antwort": 2.36
   },
   "Bestimme ohne Taschenrechner: sin(9π/2)": {
    "teil": "4.2b",
    "typ": "zahl",
    "ergebnis": "1",
    "antwort": 1
   },
   "Wie groß ist die Amplitude von f(x) = −2,5 · sin x?": {
    "teil": "4.3a",
    "typ": "zahl",
    "ergebnis": "2,5",
    "antwort": 2.5
   },
   "Die Funktion f(x) = sin(b · x) hat die Periode π/3. Wie groß ist b?": {
    "teil": "4.3b",
    "typ": "zahl",
    "ergebnis": "6",
    "antwort": 6
   },
   "Tageslänge in Stunden: L(x) = 12 + 4 · sin(π/6 · x), x = Monate seit 21. März. Wie lang ist der Tag bei x = 1?": {
    "teil": "4.3c",
    "typ": "zahl",
    "ergebnis": "14 h",
    "antwort": 14
   },
   "Wie groß ist cos 180°?": {
    "teil": "4.1a",
    "typ": "wahl",
    "ergebnis": "−1",
    "optionen": [
     "0",
     "1",
     "−1",
     "½"
    ]
   },
   "Welche Aussage stimmt?": {
    "teil": "4.1b",
    "typ": "wahl",
    "ergebnis": "sin(180° − α) = sin α",
    "optionen": [
     "sin(180° − α) = sin α",
     "sin(180° − α) = −sin α",
     "cos(180° − α) = cos α",
     "sin(180° − α) = cos α"
    ]
   },
   "Welchem Winkel entspricht π/6?": {
    "teil": "4.2a",
    "typ": "wahl",
    "ergebnis": "30°",
    "optionen": [
     "30°",
     "60°",
     "45°",
     "15°"
    ]
   },
   "Wie viele Nullstellen hat sin x im Intervall von 0 bis 2π (Randpunkte zählen mit)?": {
    "teil": "4.2b",
    "typ": "zahl",
    "ergebnis": "3",
    "antwort": 3
   },
   "Welchen kleinsten Funktionswert hat f(x) = 4 · sin x?": {
    "teil": "4.3a",
    "typ": "wahl",
    "ergebnis": "−4",
    "optionen": [
     "−4",
     "−1",
     "0",
     "4"
    ]
   },
   "Welche Funktion hat die Periode 4π?": {
    "teil": "4.3b",
    "typ": "wahl",
    "ergebnis": "sin(0,5x)",
    "optionen": [
     "sin(0,5x)",
     "sin(2x)",
     "sin(4x)",
     "sin(x/4)"
    ]
   },
   "Gezeiten: w(t) = 3 + 2 · sin(0,5 · t) (w in m). Wie niedrig sinkt das Wasser höchstens (Niedrigwasser)?": {
    "teil": "4.3c",
    "typ": "zahl",
    "ergebnis": "1 m",
    "antwort": 1
   },
   "Wie groß ist sin 60°? (2 Nachkommastellen)": {
    "teil": "4.1a",
    "typ": "zahl",
    "ergebnis": "0,87",
    "antwort": 0.87
   },
   "Zwei Winkel zwischen 0° und 180° haben den Sinus 0,8. Der kleinere ist 53,13°. Wie groß ist der andere? (2 Nachkommastellen)": {
    "teil": "4.1b",
    "typ": "zahl",
    "ergebnis": "126,87 °",
    "antwort": 126.87
   },
   "Wie viel Grad entspricht das Bogenmaß 2π/3?": {
    "teil": "4.2a",
    "typ": "zahl",
    "ergebnis": "120 °",
    "antwort": 120
   },
   "Bestimme ohne Taschenrechner: sin(7π/2)": {
    "teil": "4.2b",
    "typ": "zahl",
    "ergebnis": "-1",
    "antwort": -1
   },
   "Berechne f(π/6) für f(x) = 5 · sin x.": {
    "teil": "4.3a",
    "typ": "zahl",
    "ergebnis": "2,5",
    "antwort": 2.5
   },
   "Die Periode von f(x) = sin(0,25 · x) ist ein Vielfaches von π. Wie viele π sind es?": {
    "teil": "4.3b",
    "typ": "zahl",
    "ergebnis": "8 · π",
    "antwort": 8
   },
   "Riesenrad: h(t) = 22 + 20 · sin(π/5 · t) (h in m, t in Minuten). Wie hoch ist die Gondel nach 7,5 Minuten?": {
    "teil": "4.3c",
    "typ": "zahl",
    "ergebnis": "2 m",
    "antwort": 2
   },
   "Auf dem Einheitskreis gilt sin α = 0,6 für einen Winkel im ersten Quadranten. Wie groß ist cos α?": {
    "teil": "4.1a",
    "typ": "zahl",
    "klausur": true
   },
   "Wie groß ist sin 135°? (2 Nachkommastellen)": {
    "teil": "4.1b",
    "typ": "zahl",
    "klausur": true
   },
   "Rechne 5π/6 in Grad um.": {
    "teil": "4.2a",
    "typ": "zahl",
    "klausur": true
   },
   "Welchen Wert hat sin(3π/2)?": {
    "teil": "4.2b",
    "typ": "wahl",
    "klausur": true
   },
   "Gegeben ist g(x) = −3 · sin x. Welchen Funktionswert hat g bei x = π/2?": {
    "teil": "4.3a",
    "typ": "zahl",
    "klausur": true
   },
   "Welche Aussage über f(x) = 2 · sin x stimmt?": {
    "teil": "4.3a",
    "typ": "wahl",
    "klausur": true
   },
   "Wie viele Wellen von f(x) = sin(3x) passen in das Intervall von 0 bis 2π?": {
    "teil": "4.3b",
    "typ": "zahl",
    "klausur": true
   },
   "Tageslänge in Stunden: L(x) = 12 + 4 · sin(π/6 · x). Wie lang ist der Tag bei x = 9 (21. Dezember)?": {
    "teil": "4.3c",
    "typ": "zahl",
    "klausur": true
   }
  }
 }
};
