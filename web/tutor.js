// KI-Tutor im Lernpfad: Knopf „💬 Tipp vom Tutor“ öffnet ein Chat-Fenster zur aktuellen Aufgabe.
// Braucht aus der App: db (Supabase), me ({ id, admin, spass }), el(); optional lautKnopf() aus js/spass.js.
// Der Verlauf bleibt nur im Browser (pro Aufgabe neu), Fotos werden vor dem Senden verkleinert und ohne Metadaten neu gespeichert.

const TUTOR_REGION = 'eu-central-1'; // Frankfurt – Supabase würde die Funktion sonst in der nächstgelegenen Region starten
let tutorZugang = null;               // Promise<boolean>, einmal pro Login

// Darf dieser Schüler den Tutor nutzen? (Zeile in tutor_zugang mit Einwilligung, siehe sql/tutor.sql; Kira immer)
function tutorVerfuegbar() {
  if (me.admin) return Promise.resolve(true);
  tutorZugang ??= db.from('tutor_zugang').select('aktiv, einwilligung_am').eq('user_id', me.id).maybeSingle()
    .then(({ data }) => !!(data?.aktiv && data.einwilligung_am)).catch(() => false);
  return tutorZugang;
}

// Knopf für eine Lernpfad-Aufgabe; erscheint nur, wenn der Tutor freigeschaltet ist. Nicht in der Probeklausur.
// ziel: { thema, titel, stufe, aufgabe }  (aufgabe = Aufgabentext wie in der App, leer = allgemeine Frage zum Thema)
function tutorKnopf(ziel) {
  const b = el('button', '💬 Tipp vom Tutor', { className: 'leise tutor-knopf', type: 'button', hidden: true });
  if (ziel.stufe !== 'klausur') tutorVerfuegbar().then(ok => { b.hidden = !ok; });
  b.onclick = () => tutorOeffnen(ziel);
  return b;
}

function tutorOeffnen(ziel) {
  const verlauf = [];
  const d = el('dialog', null, { className: 'tutor' });
  const kopf = el('div', null, { className: 'tutor-kopf' });
  kopf.append(el('b', '💬 KI-Tutor'), el('span', ziel.titel ?? '', { className: 'klein' }),
    el('button', '✕', { className: 'leise', type: 'button', title: 'Schließen', onclick: () => d.close() }));
  const log = el('div', null, { className: 'tutor-log' });
  const info = el('div', 'Ich bin eine KI und gebe dir Hinweise – rechnen tust du selbst. 😉 Schick mir deine Frage oder ein Foto von deinem Rechenweg. Ich kann mich auch mal irren: Wenn dir etwas komisch vorkommt, frag Kira (🚩).', { className: 'tutor-blase tutor' });
  log.append(info);

  const form = el('form', null, { className: 'tutor-form' });
  const text = el('textarea', null, { rows: 2, maxLength: 1500, placeholder: 'Wo hängst du? Was hast du schon gerechnet?' });
  const fotoFeld = el('input', null, { type: 'file', accept: 'image/*', hidden: true });
  fotoFeld.setAttribute('capture', 'environment');
  const fotoKnopf = el('button', '📷', { type: 'button', className: 'leise', title: 'Foto vom Rechenweg' });
  const fotoInfo = el('div', '', { className: 'klein' });
  fotoKnopf.onclick = () => { if (confirm('Nur dein Heft fotografieren – keine Namen, keine Gesichter. Okay?')) fotoFeld.click(); };
  fotoFeld.onchange = () => { fotoInfo.textContent = fotoFeld.files[0] ? '📷 Foto angehängt' : ''; };
  const senden = el('button', 'Senden');
  const rest = el('div', '', { className: 'klein' });
  const merken = el('button', '🚩 Mit Kira klären', { type: 'button', className: 'leise', hidden: me.admin });
  const zeile = el('div', null, { className: 'tutor-zeile' });
  zeile.append(fotoKnopf, text, senden);
  form.append(fotoInfo, zeile, rest, merken, fotoFeld);

  form.onsubmit = async e => {
    e.preventDefault();
    const nachricht = text.value.trim(), datei = fotoFeld.files[0];
    if (!nachricht && !datei) return;
    senden.disabled = true;
    const blase = el('div', nachricht || '📷 Foto', { className: 'tutor-blase kind' });
    const warte = el('div', '…', { className: 'tutor-blase tutor warte' });
    log.append(blase, warte); log.scrollTop = log.scrollHeight;
    try {
      const body = { thema: ziel.thema, stufe: ziel.stufe, aufgabe: ziel.aufgabe, nachricht, verlauf: verlauf.slice(-6) };
      if (datei) Object.assign(body, { foto: await fotoVerkleinern(datei), fotoTyp: 'image/jpeg' });
      const { data, error } = await db.functions.invoke('tutor', { body, region: TUTOR_REGION });
      const r = error ? await error.context?.json?.().catch(() => null) : data;
      if (!r?.antwort) throw new Error(r?.fehler ?? 'Das hat nicht geklappt. Versuch es nochmal.');
      warte.textContent = r.antwort; warte.classList.remove('warte');
      if (me.spass && typeof lautKnopf === 'function') warte.prepend(lautKnopf(r.antwort), ' ');
      verlauf.push({ rolle: 'kind', text: nachricht || '(Foto vom Rechenweg)' }, { rolle: 'tutor', text: r.antwort });
      if (r.rest) rest.textContent = `Heute noch ${r.rest.nachrichten} Nachrichten, ${r.rest.fotos} Fotos`;
      if (r.usd != null) rest.textContent = `${r.modell} · ${(r.usd * 100).toFixed(2)} US-Cent`;
      text.value = ''; fotoFeld.value = ''; fotoInfo.textContent = '';
    } catch (err) {
      warte.textContent = err.message; warte.classList.replace('warte', 'fehler');
    }
    senden.disabled = false; log.scrollTop = log.scrollHeight;
  };

  // Frage + letzten Hinweis in die Merkliste „Für die nächste Stunde“ (Tabelle merkliste der App).
  merken.onclick = async () => {
    const kind = verlauf.filter(v => v.rolle === 'kind').at(-1)?.text ?? text.value.trim();
    const tutor = verlauf.filter(v => v.rolle === 'tutor').at(-1)?.text;
    const frage = [ziel.aufgabe && `Aufgabe: ${ziel.aufgabe}`, kind && `Meine Frage: ${kind}`, tutor && `Tipp vom Tutor: ${tutor}`]
      .filter(Boolean).join('\n').slice(0, 2000) || 'Frage zum Thema – bitte in der Stunde anschauen';
    merken.disabled = true;
    const { error } = await db.from('merkliste').insert({ thema: `KI-Tutor · ${ziel.titel ?? ziel.thema}`, frage });
    merken.textContent = error ? 'Hat nicht geklappt' : '🚩 Gemerkt – Kira schaut es mit dir an';
    if (error) merken.disabled = false;
  };

  d.append(kopf, log, form);
  d.addEventListener('close', () => d.remove());
  document.body.append(d);
  d.showModal();
  text.focus();
}

// Foto auf höchstens 1600 px verkleinern und als JPEG neu speichern – dabei fallen GPS- und Gerätedaten weg.
async function fotoVerkleinern(datei) {
  const bild = await createImageBitmap(datei, { imageOrientation: 'from-image' });
  const f = Math.min(1, 1600 / Math.max(bild.width, bild.height));
  const c = document.createElement('canvas');
  c.width = Math.round(bild.width * f); c.height = Math.round(bild.height * f);
  c.getContext('2d').drawImage(bild, 0, 0, c.width, c.height);
  const blob = await new Promise(ok => c.toBlob(ok, 'image/jpeg', 0.8));
  const bytes = new Uint8Array(await blob.arrayBuffer());
  let s = '';
  for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(s);
}
