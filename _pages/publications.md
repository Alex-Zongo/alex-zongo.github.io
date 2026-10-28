---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

{%- comment -%} ---------- Groups ---------- {%- endcomment -%}
{% assign pubs = site.publications | sort: 'date' | reverse %}
{% assign peer = '' | split: '' %}{% assign other = '' | split: '' %}{% assign notes = '' | split: '' %}
{% for p in pubs %}
  {% if p.type == 'conference' or p.type == 'journal' or p.type == 'workshop' or p.type == 'accepted' %}{% assign peer = peer | push: p %}
  {% elsif p.type == 'research-essay' %}{% assign notes = notes | push: p %}
  {% else %}{% assign other = other | push: p %}{% endif %}
{% endfor %}

{%- comment -%} ---------- Counts ---------- {%- endcomment -%}
{% assign n_first = 0 %}{% assign n_awards = 0 %}{% assign n_upcoming = 0 %}
{% for p in peer %}
  {% assign lead = p.authors | strip | slice: 0, 7 %}
  {% if lead == '**Alex ' or lead == '**Zongo' %}{% assign n_first = n_first | plus: 1 %}{% endif %}
  {% if p.awards %}{% assign n_awards = n_awards | plus: p.awards.size %}{% endif %}
  {% if p.type == 'accepted' and p.status_label == nil %}{% assign n_upcoming = n_upcoming | plus: 1 %}{% endif %}
{% endfor %}

{%- comment -%} ---------- Years (peer-reviewed) ---------- {%- endcomment -%}
{% assign yearstr = '' %}
{% for p in peer %}{% if p.publication_year %}{% assign y = p.publication_year | append: '' %}{% else %}{% assign y = p.date | date: '%Y' %}{% endif %}{% unless yearstr contains y %}{% assign yearstr = yearstr | append: y | append: ',' %}{% endunless %}{% endfor %}
{% assign years = yearstr | split: ',' | sort | reverse %}

{%- comment -%} ---------- Tag vocabulary ---------- {%- endcomment -%}
{% assign tagstr = '' %}
{% for p in site.publications %}{% for t in p.tags %}{% assign tagstr = tagstr | append: t | append: '||' %}{% endfor %}{% endfor %}
{% assign all_tags = tagstr | split: '||' | uniq | sort %}

<p class="pub-intro">
  Peer-reviewed papers on safe multi-agent learning and decision-making for autonomous aircraft, drones,
  and vessels. Papers marked <em>to appear</em> have been accepted after peer review. The full record is on
  <a href="{{ site.author.googlescholar }}" target="_blank" rel="noopener">Google&nbsp;Scholar</a>.
</p>

<div class="pub-stats">
  <div class="pub-stat"><span class="pub-stat__num">{{ peer.size }}</span><span class="pub-stat__label">Peer-reviewed</span></div>
  <div class="pub-stat"><span class="pub-stat__num">{{ n_first }}</span><span class="pub-stat__label">First-author</span></div>
  <div class="pub-stat"><span class="pub-stat__num">{{ n_awards }}</span><span class="pub-stat__label">Paper awards</span></div>
  <div class="pub-stat"><span class="pub-stat__num">{{ n_upcoming }}</span><span class="pub-stat__label">To appear</span></div>
</div>

<div class="pub-filter" role="group" aria-label="Filter publications by topic">
  <span class="pub-filter__label">Topic</span>
  <button class="pub-chip is-active" data-topic="all" type="button" aria-pressed="true">All</button>
  {% for t in all_tags %}{% assign slug = t | downcase | replace: ' & ', '-and-' | replace: ' ', '-' %}
  <button class="pub-chip" data-topic="{{ slug }}" type="button" aria-pressed="false">{{ t }}</button>{% endfor %}
  <span class="pub-filter__count" aria-live="polite"></span>
</div>

<div class="pub-list">

<h2 class="pub-group-title">Peer-reviewed papers</h2>
{% for y in years %}
<section class="pub-section" data-section>
  <h3 class="section-label pub-section__head">{{ y }}</h3>
  {% for post in peer %}{% if post.publication_year %}{% assign py = post.publication_year | append: '' %}{% else %}{% assign py = post.date | date: '%Y' %}{% endif %}{% if py == y %}{% include publication-card.html %}{% endif %}{% endfor %}
</section>
{% endfor %}

{% if other.size > 0 %}
<section class="pub-section" data-section>
  <h2 class="pub-group-title">Preprints and papers under review</h2>
  {% for post in other %}{% include publication-card.html %}{% endfor %}
</section>
{% endif %}

{% if notes.size > 0 %}
<section class="pub-section" data-section>
  <h2 class="pub-group-title">Research essays</h2>
  {% for post in notes %}{% include publication-card.html %}{% endfor %}
</section>
{% endif %}

<p class="pub-empty" hidden>No publications match this topic.</p>

</div>
