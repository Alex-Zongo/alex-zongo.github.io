---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

{%- comment -%} ---------- Counts ---------- {%- endcomment -%}
{% assign n_total  = site.publications | size %}
{% assign n_conf   = site.publications | where: 'type', 'conference' | size %}
{% assign n_jour   = site.publications | where: 'type', 'journal' | size %}
{% assign n_peer   = n_conf | plus: n_jour %}
{% assign n_acc    = site.publications | where: 'type', 'accepted' | size %}
{% assign n_rev    = site.publications | where: 'type', 'under-review' | size %}
{% assign n_sub    = site.publications | where: 'type', 'submitted' | size %}
{% assign n_review = n_rev | plus: n_sub %}

{%- comment -%} ---------- Tag vocabulary (union) ---------- {%- endcomment -%}
{% assign tagstr = '' %}
{% for p in site.publications %}{% for t in p.tags %}{% assign tagstr = tagstr | append: t | append: '||' %}{% endfor %}{% endfor %}
{% assign all_tags = tagstr | split: '||' | uniq | sort %}

{%- comment -%} ---------- Sorted list ---------- {%- endcomment -%}
{% assign pubs = site.publications | sort: 'date' | reverse %}

<p class="mono-label pub-kicker">// research output · {{ n_total }} entries</p>

<p class="pub-intro">
  Peer-reviewed papers, preprints, and research essays on safe autonomy for aerospace systems.
  The full record lives on my
  <a href="{{ site.author.googlescholar }}" target="_blank" rel="noopener">Google&nbsp;Scholar</a> profile.
</p>

<div class="pub-stats">
  <div class="pub-stat"><span class="pub-stat__num">{{ n_total | prepend: '0' | slice: -2, 2 }}</span><span class="pub-stat__label">Total</span></div>
  <div class="pub-stat"><span class="pub-stat__num">{{ n_peer | prepend: '0' | slice: -2, 2 }}</span><span class="pub-stat__label">Peer-Reviewed</span></div>
  <div class="pub-stat"><span class="pub-stat__num">{{ n_acc | prepend: '0' | slice: -2, 2 }}</span><span class="pub-stat__label">Accepted</span></div>
  <div class="pub-stat"><span class="pub-stat__num">{{ n_review | prepend: '0' | slice: -2, 2 }}</span><span class="pub-stat__label">Under Review</span></div>
</div>

<div class="pub-filter" role="group" aria-label="Filter publications by topic">
  <span class="pub-filter__label">filter:</span>
  <button class="pub-chip is-active" data-topic="all" type="button">All</button>
  {% for t in all_tags %}{% assign slug = t | downcase | replace: ' & ', '-and-' | replace: ' ', '-' %}
  <button class="pub-chip" data-topic="{{ slug }}" type="button">{{ t }}</button>{% endfor %}
  <span class="pub-filter__count" aria-live="polite"></span>
</div>

<div class="pub-list">

{%- comment -%} ======= Peer-reviewed (journal + conference) ======= {%- endcomment -%}
{% if n_peer > 0 %}
<section class="pub-section" data-section>
  <p class="mono-label section-label pub-section__head">// peer-reviewed &amp; published</p>
  {% for post in pubs %}{% if post.type == 'conference' or post.type == 'journal' %}{% include publication-card.html %}{% endif %}{% endfor %}
</section>
{% endif %}

{%- comment -%} ======= Accepted ======= {%- endcomment -%}
{% if n_acc > 0 %}
<section class="pub-section" data-section>
  <p class="mono-label section-label pub-section__head">// accepted · to appear</p>
  {% for post in pubs %}{% if post.type == 'accepted' %}{% include publication-card.html %}{% endif %}{% endfor %}
</section>
{% endif %}

{%- comment -%} ======= Under review / submitted ======= {%- endcomment -%}
{% if n_review > 0 %}
<section class="pub-section" data-section>
  <p class="mono-label section-label pub-section__head">// under review</p>
  {% for post in pubs %}{% if post.type == 'under-review' or post.type == 'submitted' %}{% include publication-card.html %}{% endif %}{% endfor %}
</section>
{% endif %}

{%- comment -%} ======= Preprints ======= {%- endcomment -%}
{% assign n_pre = site.publications | where: 'type', 'preprint' | size %}
{% if n_pre > 0 %}
<section class="pub-section" data-section>
  <p class="mono-label section-label pub-section__head">// preprints</p>
  {% for post in pubs %}{% if post.type == 'preprint' %}{% include publication-card.html %}{% endif %}{% endfor %}
</section>
{% endif %}

{%- comment -%} ======= In preparation ======= {%- endcomment -%}
{% assign n_inprep = site.publications | where: 'type', 'in-preparation' | size %}
{% if n_inprep > 0 %}
<section class="pub-section" data-section>
  <p class="mono-label section-label pub-section__head">// in preparation</p>
  {% for post in pubs %}{% if post.type == 'in-preparation' %}{% include publication-card.html %}{% endif %}{% endfor %}
</section>
{% endif %}

{%- comment -%} ======= Research essays ======= {%- endcomment -%}
{% assign n_essay = site.publications | where: 'type', 'research-essay' | size %}
{% if n_essay > 0 %}
<section class="pub-section" data-section>
  <p class="mono-label section-label pub-section__head">// research essays</p>
  {% for post in pubs %}{% if post.type == 'research-essay' %}{% include publication-card.html %}{% endif %}{% endfor %}
</section>
{% endif %}

<p class="pub-empty" hidden>No publications match this topic.</p>

</div>

<script>
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
      chips.forEach(function (c) { c.classList.remove('is-active'); });
      chip.classList.add('is-active');
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
  function copyText(text) {
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
      navigator.clipboard.writeText(text);
    }
  }
  document.querySelectorAll('.js-cite-copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var box = btn.closest('.pub__cite');
      copyText(box ? box.querySelector('.pub__cite-text').textContent.trim() : '');
      var html = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check" aria-hidden="true"></i> Copied';
      btn.classList.add('is-copied');
      setTimeout(function () { btn.innerHTML = html; btn.classList.remove('is-copied'); }, 1600);
    });
  });
})();
</script>
