(function () {
  const nav = document.getElementById('site-nav');
  if (!nav) return;
  const menu = nav.querySelector('button');
  const links = document.getElementById('overflow-navigation');
  const theme = document.querySelector('#theme-toggle [role="button"]');
  function syncMenu() {
    menu.setAttribute('aria-expanded', String(!links.classList.contains('hidden')));
  }
  new MutationObserver(syncMenu).observe(links, {attributes: true, attributeFilter: ['class']});
  syncMenu();
  nav.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !links.classList.contains('hidden')) {
      menu.click();
      menu.focus();
    }
  });
  if (theme) {
    theme.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        theme.click();
      }
    });
  }
})();
