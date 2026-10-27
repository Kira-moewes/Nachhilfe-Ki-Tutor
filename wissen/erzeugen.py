"""Erzeugt die Wissensbasis des KI-Tutors aus den Lernpfaden der App.

Aufruf (App-Repo daneben ausgecheckt): python3 wissen/erzeugen.py [../Nachhilfe-]
Liest lernpfad/*.js der App (dort aus lernpfad/inhalte/*.py erzeugt) und schreibt
supabase/functions/tutor/wissen.ts: je Thema ein Textblock (Merkkästen + Lösungswege) und die Aufgaben
mit Ergebnis (für den Ergebnis-Wächter). Probeklausur-Aufgaben kommen nicht hinein: dort ist der Tutor aus.
"""
import glob, html, json, os, re, sys

HIER = os.path.dirname(os.path.abspath(__file__))
APP = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else os.path.join(HIER, "..", "..", "Nachhilfe-"))
ZIEL = os.path.join(HIER, "..", "supabase", "functions", "tutor", "wissen.ts")
STUFEN = {"quiz1": "Einstiegsquiz", "aufgaben1": "Übungsaufgaben 1", "quiz2": "Abschlussquiz", "aufgaben2": "Übungsaufgaben 2"}
FACH = {"mathe": "Mathe", "deutsch": "Deutsch", "englisch": "Englisch"}


def text(merke_html):
    """Merkkasten (HTML) → einfacher Text; Skizzen (SVG) fallen weg."""
    t = re.sub(r"<svg.*?</svg>", "", merke_html, flags=re.S)
    t = re.sub(r"<h2>.*?</h2>", "", t, flags=re.S)
    t = re.sub(r"<(br|/p|/li|/div|/span|/tr|/h3)\b[^>]*>", "\n", t)
    t = re.sub(r"<li\b[^>]*>", "• ", t)
    t = html.unescape(re.sub(r"<[^>]+>", "", t))
    return "\n".join(z.strip() for z in t.splitlines() if z.strip())


def zahl_text(x):
    return (f"{x:g}" if isinstance(x, float) else str(x)).replace(".", ",")


def lesen(datei):
    js = open(datei, encoding="utf-8").read()
    return json.loads(js[js.index("= ") + 2: js.rindex(";")])


themen = {}
for datei in sorted(glob.glob(os.path.join(APP, "lernpfad", "*.js"))):
    if os.path.basename(datei) == "themen.js":
        continue
    d = lesen(datei)
    teile = {t["id"]: t["titel"] for t in d["teile"]}
    zeilen = [f"# {d['titel']} ({FACH.get(d['fach'], d['fach'])}, Klasse {d['klasse']})", "", "## Merkkästen der Arbeitsblätter"]
    for t in d["teile"]:
        zeilen += [f"### {t['id']} {t['titel']}", text(t["merke"]), ""]
    zeilen.append("## Aufgaben aus dem Lernpfad mit Kiras Lösungsweg (nur für dich – Ergebnisse nie verraten)")
    aufgaben = {}
    for stufe, name in STUFEN.items():
        for a in d[stufe]:
            if a["typ"] == "wahl":
                ergebnis = a["optionen"][a["richtig"]]
                kopf = f"{a['frage']} Auswahl: " + " | ".join(a["optionen"])
            else:
                ergebnis = zahl_text(a["antwort"]) + (" " + a["einheit"] if a.get("einheit") else "")
                kopf = a["frage"]
            zeilen += [f"- [{name}, {a['teil']} {teile[a['teil']]}] {kopf}", f"  Ergebnis: {ergebnis}", "  Weg: " + a["weg"].replace("\n", " ")]
            aufgaben[a["frage"]] = {"teil": a["teil"], "typ": a["typ"], "ergebnis": ergebnis,
                                    **({"antwort": a["antwort"]} if a["typ"] == "zahl" else {"optionen": a["optionen"]})}
    for a in d["klausur"]:
        aufgaben.setdefault(a["frage"], {"teil": a["teil"], "typ": a["typ"], "klausur": True})
    themen[d["thema"]] = {"titel": d["titel"], "fach": d["fach"], "klasse": d["klasse"],
                          "teile": teile, "text": "\n".join(zeilen), "aufgaben": aufgaben}

assert themen, f"Keine Lernpfade gefunden unter {APP}/lernpfad"
with open(ZIEL, "w", encoding="utf-8") as out:
    out.write("// Automatisch erzeugt von wissen/erzeugen.py aus den Lernpfaden der App – nicht von Hand bearbeiten.\n")
    out.write("import type { Thema } from \"./typen.ts\";\n\n")
    out.write("export const WISSEN: Record<string, Thema> = " + json.dumps(themen, ensure_ascii=False, indent=1) + ";\n")
print(f"{len(themen)} Themen → {os.path.relpath(ZIEL)}  ({os.path.getsize(ZIEL) // 1024} KB)")
for k, v in themen.items():
    print(f"  {k}: {len(v['text']) // 4} Token (ca.), {len(v['aufgaben'])} Aufgaben")
