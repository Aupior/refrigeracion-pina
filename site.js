(() => {
  const menu = document.querySelector('button[aria-label="Menú"]');
  const nav = document.querySelector('nav[aria-label="Menú"]');
  if (menu && nav) menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('hidden', open);
    nav.classList.toggle('flex', !open);
    nav.classList.toggle('flex-col', !open);
    nav.classList.toggle('absolute', !open);
    nav.classList.toggle('top-20', !open);
    nav.classList.toggle('right-4', !open);
    nav.classList.toggle('bg-bg', !open);
    nav.classList.toggle('p-4', !open);
  });
  const form = document.querySelector('form');
  const cta = form?.querySelector('a[href="#contacto"]');
  if (form && cta) cta.addEventListener('click', (e) => {
    e.preventDefault();
    const v = [...form.querySelectorAll('input, select, textarea')].map(x => x.value.trim());
    const text = `Hola, soy ${v[0] || 'cliente'}. Zona: ${v[1] || 'no indicada'}. Servicio: ${v[2] || 'por definir'}. Necesito: ${v[3] || 'información'}.`;
    window.open(`https://wa.me/529991632893?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });
})();
