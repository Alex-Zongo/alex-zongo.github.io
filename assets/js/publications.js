(function () {
  var chips    = Array.prototype.slice.call(document.querySelectorAll('.pub-chip'));
  var cards    = Array.prototype.slice.call(document.querySelectorAll('.pub'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('[data-section]'));
  var countEl  = document.querySelector('.pub-filter__count');
  var emptyEl  = document.querySelector('.pub-empty');

  function apply(topic) {
    var shown = 0;
    cards.forEach(function (c) {
      var topics = (c.getAttribute('data-topics') || '').split(/\s+/);
      var match = topic === 'all' || topics.indexOf(topic) !== -1;
      c.hidden = !match;
      if (match) shown++;
    });
    sections.forEach(function (s) {
      var anyVisible = s.querySelector('.pub:not([hidden])');
      s.hidden = !anyVisible;
    });
    if (countEl) countEl.textContent = topic === 'all' ? '' : '[ ' + shown + ' ]';
    if (emptyEl) emptyEl.hidden = shown !== 0;
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      chips.forEach(function (c) { c.classList.remove('is-active'); c.setAttribute('aria-pressed', 'false'); });
      chip.classList.add('is-active'); chip.setAttribute('aria-pressed', 'true');
      apply(chip.getAttribute('data-topic'));
    });
  });

  // Expandable citation
  document.querySelectorAll('.js-cite-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var cite = btn.closest('.pub__links').nextElementSibling;
      if (!cite || !cite.classList.contains('pub__cite')) return;
      var open = cite.hasAttribute('hidden');
      if (open) { cite.removeAttribute('hidden'); btn.classList.add('is-active'); btn.setAttribute('aria-expanded', 'true'); }
      else { cite.setAttribute('hidden', ''); btn.classList.remove('is-active'); btn.setAttribute('aria-expanded', 'false'); }
    });
  });

  // Copy citation to clipboard
  async function copyText(text) {
    var ok = false;
    try {
      var ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', '');
      ta.style.position = 'fixed'; ta.style.top = '-1000px'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      ok = document.execCommand('copy');
      document.body.removeChild(ta);
    } catch (e) { ok = false; }
    if (!ok && navigator.clipboard && navigator.clipboard.writeText) {
      try { await navigator.clipboard.writeText(text); ok = true; } catch (e) { ok = false; }
    }
    return ok;
  }
  document.querySelectorAll('.js-cite-copy').forEach(function (btn) {
    btn.addEventListener('click', async function () {
      var box = btn.closest('.pub__cite');
      var copied = await copyText(box ? box.querySelector('.pub__cite-text').textContent.trim() : '');
      btn.focus({preventScroll: true});
      var html = btn.innerHTML;
      btn.textContent = copied ? 'Copied' : 'Could not copy';
      btn.classList.add('is-copied');
      setTimeout(function () { btn.innerHTML = html; btn.classList.remove('is-copied'); }, 1600);
    });
  });
})();
