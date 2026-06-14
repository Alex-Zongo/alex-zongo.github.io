---
layout: archive
title: "Air Traffic Control, Autonomy & the Physics of the Sky"
permalink: /atc-series/
author_profile: true
---

{% include base_path %}

{% assign atc_posts = site.posts | where: "series", "atc" | sort: 'date' | reverse %}
{% assign atc_pub = atc_posts | where_exp: "p", "p.draft != true" %}
{% assign atc_soon = atc_posts | where_exp: "p", "p.draft == true" %}

<a class="notes-back" href="{{ base_path }}/year-archive/">← All research notes</a>

<p class="mono-label pub-kicker">✈️ // air traffic control series · {{ atc_pub | size }} note{% unless atc_pub.size == 1 %}s{% endunless %}</p>

<p class="pub-intro">
  Air Traffic Control is one of the most complex control systems ever built — balancing safety,
  efficiency, uncertainty, and human decision-making at a global scale. These notes explore modern
  and emerging approaches to airspace management, from classical ATC principles to physics-inspired
  models, reinforcement learning, multi-modal AI, and autonomous conflict resolution.
</p>

<div class="pub-list">
{% if atc_pub.size > 0 %}
  <p class="mono-label section-label">// notes</p>
  {% for post in atc_pub %}{% include note-card.html %}{% endfor %}
{% endif %}

{% if atc_soon.size > 0 %}
  <p class="mono-label section-label">// coming soon</p>
  {% for post in atc_soon %}{% include note-card.html %}{% endfor %}
{% endif %}

{% if atc_pub.size == 0 and atc_soon.size == 0 %}
  <p class="notes-empty">No posts yet in this series — check back soon.</p>
{% endif %}
</div>
