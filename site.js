(() => {
  const menu = document.querySelector('button[aria-label="Menú"]');
  const nav = document.querySelector('header nav');
  if (menu && nav) menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('hidden', open);
    nav.classList.toggle('flex', !open);
    nav.classList.toggle('flex-col', !open);
    nav.classList.toggle('absolute', !open);
    nav.classList.toggle('top-20', !open);
    nav.classList.toggle('right-4', !open);
    nav.classList.toggle('z-30', !open);
    nav.classList.toggle('rounded-2xl', !open);
    nav.classList.toggle('border', !open);
    nav.classList.toggle('border-line', !open);
    nav.classList.toggle('bg-bg', !open);
    nav.classList.toggle('p-4', !open);
  });
  const form = document.querySelector('form');
  const send = form?.querySelector('a');
  if (form && send) send.addEventListener('click', (e) => {
    const fields = [...form.querySelectorAll('input, select, textarea')].map((el) => el.value.trim());
    const [name, zone, service, note] = fields;
    if (!name || !note) {
      e.preventDefault();
      let err = form.querySelector('[data-error]');
      if (!err) {
        err = document.createElement('p');
        err.dataset.error = '1';
        err.className = 'mt-3 text-sm text-copper';
        err.textContent = 'Escribe tu nombre y qué necesitas.';
        send.before(err);
      }
      return;
    }
    e.preventDefault();
    const text = `Hola, soy ${name}. Estoy en ${zone || 'Mérida'}. Necesito: ${service}. ${note}`;
    window.location.href = 'https://wa.me/529991632893?text=' + encodeURIComponent(text);
  });
})();
