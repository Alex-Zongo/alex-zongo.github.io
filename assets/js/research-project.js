(function () {
  'use strict';
  var root = document.querySelector('.research-project');
  if (!root) return;
  var button = root.querySelector('.research-project__copy');
  if (!button) return;
  var status = root.querySelector('.research-project__copy-status');
  var code = root.querySelector('.research-project__bibtex code');
  button.hidden = false;
  button.addEventListener('click', async function () {
    var text = code.textContent.trim();
    var copied = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        copied = true;
      }
    } catch (error) { /* Try selection-based copying if clipboard access is denied. */ }
    if (!copied) {
      var field = document.createElement('textarea');
      field.value = text;
      field.style.position = 'fixed';
      field.style.opacity = '0';
      field.setAttribute('readonly', '');
      document.body.appendChild(field);
      field.select();
      try { copied = document.execCommand('copy'); } catch (error) { copied = false; }
      field.remove();
      button.focus();
    }
    status.textContent = copied ? 'Citation copied.' : 'Copy failed. Select and copy the citation below.';
  });
})();
