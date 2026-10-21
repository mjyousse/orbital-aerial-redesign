// Multi-step quote form. Sends through the same FormSubmit inbox and Geoapify
// autocomplete key the live orbitalaerial.com site already uses.
const GEOAPIFY_API_KEY = '26d1d638c1ac4efa939ce7a4803c409e';
const INBOX = 'contact@orbitalaerial.com';
const NAMES = ['Service', 'Location', 'Contact'];

export function initQuoteForm(form: HTMLFormElement) {
  const steps = Array.from(form.querySelectorAll<HTMLFieldSetElement>('fieldset[data-step]'));
  const next = form.querySelector<HTMLButtonElement>('[data-next]')!;
  const back = form.querySelector<HTMLButtonElement>('[data-back]')!;
  const submit = form.querySelector<HTMLButtonElement>('[data-submit]')!;
  const error = form.querySelector<HTMLElement>('[data-error]')!;
  const select = form.querySelector<HTMLSelectElement>('select[name=service]')!;
  const services = JSON.parse(select.dataset.services || '{}') as Record<string, string[]>;
  const loc = form.querySelector<HTMLInputElement>('input[name=location]')!;
  const list = document.getElementById(loc.getAttribute('aria-controls')!) as HTMLUListElement;
  const timeline = form.querySelector<HTMLInputElement>('input[name=timeline]')!;
  let step = 0;

  const params = new URLSearchParams(location.search);
  const wanted = params.get('division');
  if (wanted === 'industrial' || wanted === 'realestate') {
    (form.querySelector(`input[name=division_choice][value=${wanted}]`) as HTMLInputElement).checked = true;
  }
  const division = () => (form.querySelector('input[name=division_choice]:checked') as HTMLInputElement)?.value || 'industrial';

  function applyDivision() {
    const d = division();
    const isRE = d === 'realestate';
    document.body.dataset.division = d;
    const keep = select.value;
    select.innerHTML = '<option value="">Select a service…</option>' + (services[d] || []).map((s) => `<option>${s}</option>`).join('');
    if ((services[d] || []).includes(keep)) select.value = keep;
    const pkg = params.get('package');
    if (pkg) { const match = (services[d] || []).find((s) => s.toLowerCase().startsWith(pkg.toLowerCase())); if (match) select.value = match; }
    form.querySelector('[data-service-hint]')!.textContent = isRE ? 'Prices are for standard coverage within 15 miles of Austin. Custom and multi-location scopes are available.' : 'Not sure which fits? Pick “Not sure” and describe the site.';
    form.querySelector('[data-loc-label]')!.textContent = isRE ? 'Property address' : 'Site location';
    form.querySelector('[data-time-label]')!.textContent = isRE ? 'Preferred shoot date' : 'Target timeline';
    form.querySelector('[data-time-hint]')!.textContent = isRE ? 'We confirm availability before booking.' : 'An estimated window is fine.';
    timeline.type = isRE ? 'date' : 'text';
    (form.querySelector('[data-msg]') as HTMLTextAreaElement).placeholder = isRE
      ? 'Approximate square footage, access or occupancy notes, and the features you want highlighted.'
      : 'Site size, access constraints, control information and the deliverables your team needs.';
    form.querySelector('[data-co-label]')!.innerHTML = (isRE ? 'Brokerage / company' : 'Company') + ' <span class="text-fg-3 font-normal">(optional)</span>';
  }
  form.querySelectorAll('input[name=division_choice]').forEach((r) => r.addEventListener('change', applyDivision));
  applyDivision();

  function show(n: number) {
    step = n;
    steps.forEach((s, i) => (s.hidden = i !== n));
    back.hidden = n === 0;
    next.hidden = n === steps.length - 1;
    submit.hidden = n !== steps.length - 1;
    form.querySelector('[data-step-label]')!.textContent = `Step 0${n + 1} / 0${steps.length}`;
    form.querySelector('[data-step-name]')!.textContent = NAMES[n];
    form.querySelectorAll<HTMLElement>('[data-bar]').forEach((b, i) => { b.style.background = i <= n ? 'var(--accent)' : ''; });
    error.textContent = '';
  }
  function valid(n: number) {
    const fields = Array.from(steps[n].querySelectorAll<HTMLInputElement | HTMLSelectElement>('[required]'));
    for (const f of fields) {
      if (!f.checkValidity()) { error.textContent = `Please complete: ${f.labels?.[0]?.textContent?.trim() || f.name}.`; f.focus(); return false; }
    }
    return true;
  }
  next.addEventListener('click', () => { if (valid(step)) { show(step + 1); steps[step].querySelector<HTMLElement>('input,select,textarea')?.focus(); } });
  back.addEventListener('click', () => show(step - 1));

  // Address autocomplete
  let timer = 0; let ctrl: AbortController | null = null;
  loc.addEventListener('input', () => {
    clearTimeout(timer);
    const q = loc.value.trim();
    if (q.length < 3) { list.classList.add('hidden'); loc.setAttribute('aria-expanded', 'false'); return; }
    timer = window.setTimeout(async () => {
      ctrl?.abort(); ctrl = new AbortController();
      const p = new URLSearchParams({ text: q, format: 'json', lang: 'en', limit: '5', apiKey: GEOAPIFY_API_KEY });
      if (division() === 'realestate') { p.set('filter', 'rect:-99.8,29.0,-96.5,31.8'); p.set('bias', 'proximity:-97.7431,30.2672'); } else p.set('filter', 'countrycode:us');
      try {
        const r = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?${p}`, { signal: ctrl.signal });
        if (!r.ok) throw new Error();
        const data = await r.json();
        const results = (data.results || []) as { formatted: string; address_line1?: string; address_line2?: string }[];
        list.innerHTML = '';
        results.forEach((res, i) => {
          const li = document.createElement('li');
          li.role = 'option'; li.id = `${list.id}-${i}`; li.tabIndex = -1;
          li.className = 'px-4 py-2.5 cursor-pointer hover:bg-ink-700 focus:bg-ink-700 text-sm';
          li.innerHTML = `<span class="text-white"></span><br><span class="text-fg-3 text-xs"></span>`;
          (li.children[0] as HTMLElement).textContent = res.address_line1 || res.formatted;
          (li.children[2] as HTMLElement).textContent = res.address_line2 || '';
          const pick = () => { loc.value = res.formatted; list.classList.add('hidden'); loc.setAttribute('aria-expanded', 'false'); loc.focus(); };
          li.addEventListener('mousedown', (e) => { e.preventDefault(); pick(); });
          li.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); pick(); } if (e.key === 'ArrowDown') (li.nextElementSibling as HTMLElement)?.focus(); if (e.key === 'ArrowUp') ((li.previousElementSibling as HTMLElement) || loc).focus(); if (e.key === 'Escape') { list.classList.add('hidden'); loc.focus(); } });
          list.appendChild(li);
        });
        const open = results.length > 0;
        list.classList.toggle('hidden', !open); loc.setAttribute('aria-expanded', String(open));
      } catch { /* autocomplete is optional; typing the address still works */ }
    }, 300);
  });
  loc.addEventListener('keydown', (e) => { if (e.key === 'ArrowDown' && !list.classList.contains('hidden')) { e.preventDefault(); (list.firstElementChild as HTMLElement)?.focus(); } if (e.key === 'Escape') list.classList.add('hidden'); });
  loc.addEventListener('blur', () => setTimeout(() => { if (!list.contains(document.activeElement)) list.classList.add('hidden'); }, 150));

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!valid(step)) return;
    const fd = new FormData(form);
    if (fd.get('_honey')) { done(); return; }
    const d = division(); const isRE = d === 'realestate';
    const subject = `${isRE ? 'Real Estate' : 'Industrial'} - Customer Inquiry: ${fd.get('service')}`;
    (form.querySelector('input[name=_subject]') as HTMLInputElement).value = subject;
    (form.querySelector('input[name=division]') as HTMLInputElement).value = isRE ? 'Real Estate Media' : 'Industrial Reality Capture';
    (form.querySelector('input[name=_next]') as HTMLInputElement).value = `${location.origin}${location.pathname}?inquiry=sent`;
    const payload = {
      name: fd.get('name'), email: fd.get('email'), phone: fd.get('phone') || 'N/A', company: fd.get('company') || 'N/A',
      location: fd.get('location'), service: fd.get('service'), timeline: fd.get('timeline') || 'Flexible', message: fd.get('message') || 'N/A',
      division: isRE ? 'Real Estate Media' : 'Industrial Reality Capture', _subject: subject, _template: 'table', _captcha: 'false',
      _source: 'beta redesign',
    };
    submit.disabled = true; submit.textContent = 'Sending…';
    try {
      const r = await fetch(`https://formsubmit.co/ajax/${INBOX}`, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload) });
      const res = await r.json().catch(() => ({}));
      if (r.ok && (res.success === true || res.success === 'true')) done();
      else error.textContent = res.message ? String(res.message) : `We couldn’t send your request. Please email ${INBOX}.`;
    } catch {
      error.textContent = `We couldn’t send your request. Please email ${INBOX}.`;
    } finally { submit.disabled = false; submit.textContent = 'Send request'; }
  });
  function done() {
    steps.forEach((s) => (s.hidden = true));
    [next, back, submit].forEach((b) => (b.hidden = true));
    form.querySelector<HTMLElement>('[data-done]')!.hidden = false;
  }
  if (params.get('inquiry') === 'sent') done();
  show(0);
}
