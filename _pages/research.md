---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
excerpt: "Safe multi-agent learning and decision-making for autonomous aircraft and drones."
---

{% include base_path %}
{% assign r = site.data.research %}

<p class="pub-intro">{{ r.intro }}</p>

<nav class="thrust-tiles" aria-label="Research thrusts">
  {% for t in r.thrusts %}
  {% assign n = 0 %}{% assign venues = "" | split: "" %}
  {% for url in t.papers %}{% assign p = site.publications | where: 'url', url | first %}{% if p %}{% assign n = n | plus: 1 %}{% assign venues = venues | push: p.venue_short %}{% endif %}{% endfor %}
  <a class="thrust-tile thrust--{{ t.accent }}" href="#{{ t.id }}">
    {% if t.animation %}<span class="thrust-tile__media" aria-hidden="true">{% include figures/{{ t.animation }}.html %}</span>{% endif %}
    <span class="thrust-tile__body">
      <span class="thrust-tile__meta"><span class="thrust-tile__num">0{{ forloop.index }}</span><span class="thrust-tile__stage">{{ t.stage }}</span></span>
      <span class="thrust-tile__q">{{ t.question }}</span>
      <span class="thrust-tile__title">{{ t.title }}</span>
      <span class="thrust-tile__foot">{{ n }} paper{% if n != 1 %}s{% endif %} · {{ venues | join: ", " }} <i class="fa-solid fa-arrow-down" aria-hidden="true"></i></span>
    </span>
  </a>
  {% endfor %}
</nav>
<p class="thrust-loop">{{ r.loop_caption }}</p>

{% for t in r.thrusts %}
<section class="thrust thrust--{{ t.accent }}" id="{{ t.id }}" aria-labelledby="{{ t.id }}-title">
  <header class="thrust__head">
    <div class="thrust__eyebrow"><span class="thrust__num" aria-hidden="true">0{{ forloop.index }}</span><span class="thrust__stage">Thrust {{ forloop.index }} · {{ t.stage }}</span></div>
    <h2 id="{{ t.id }}-title" class="thrust__title">{{ t.title }}</h2>
    <p class="thrust__tagline">{{ t.tagline }}</p>
  </header>
  <div class="thrust__grid">
    <div class="thrust__text">
      <h3>Motivation</h3>
      <p>{{ t.motivation }}</p>
      <h3>Approach</h3>
      <p>{{ t.approach }}</p>
    </div>
    {% if t.demo %}
      {% include project-media.html media=t.demo %}
    {% elsif t.animation %}
    <figure class="thrust__figure thrust__figure--anim">
      {% include figures/{{ t.animation }}.html %}
      <figcaption>Schematic. {{ t.animation_caption }}</figcaption>
    </figure>
    {% elsif t.figure %}
    <figure class="thrust__figure">
      <a href="{{ t.figure.src | relative_url }}" target="_blank" rel="noopener"><img src="{{ t.figure.src | relative_url }}" alt="{{ t.figure.alt | escape }}" loading="lazy"></a>
      <figcaption>{{ t.figure.caption }}</figcaption>
    </figure>
    {% endif %}
  </div>
  <h3 class="thrust__papers-title">Representative papers</h3>
  <ul class="thrust__papers">
    {% for url in t.papers %}{% assign p = site.publications | where: 'url', url | first %}{% if p %}
    <li>
      <a href="{{ base_path }}{{ p.url }}">{{ p.title }}</a>
      <span class="thrust__venue">{{ p.venue_short }}{% if p.type == 'accepted' and p.status_label == nil %} · to appear{% endif %}{% if p.awards %} · <i class="fa-solid fa-award" aria-hidden="true"></i> {{ p.awards | first }}{% endif %}</span>
    </li>
    {% endif %}{% endfor %}
  </ul>
</section>
{% endfor %}

<aside class="thrust-outlook">
  <h2>{{ r.outlook.title }}</h2>
  <p>{{ r.outlook.text }}</p>
</aside>

<section class="thrust thrust--earlier">
  <h2 class="thrust__title">{{ r.earlier.title }}</h2>
  <p>{{ r.earlier.text }}</p>
  <ul class="thrust__papers">
    {% for url in r.earlier.papers %}{% assign p = site.publications | where: 'url', url | first %}{% if p %}
    <li><a href="{{ base_path }}{{ p.url }}">{{ p.title }}</a> <span class="thrust__venue">{{ p.venue_short }}</span></li>
    {% endif %}{% endfor %}
  </ul>
</section>

<p class="research-support">Supported by NASA through the University Leadership Initiative and by the Office of Naval Research. <a href="{{ '/publications/' | relative_url }}">All publications <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></p>
