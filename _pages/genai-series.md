---
layout: archive
title: "Generative AI: Diffusion & Flow Models from First Principles"
permalink: /genai-series/
author_profile: true
---

{% include base_path %}

{% assign gen_posts = site.posts | where: "series", "genai" | sort: 'date' | reverse %}
{% assign gen_pub = gen_posts | where_exp: "p", "p.draft != true" %}
{% assign gen_soon = gen_posts | where_exp: "p", "p.draft == true" %}

<a class="notes-back" href="{{ base_path }}/year-archive/">← All research notes</a>

<p class="mono-label pub-kicker">🌀 // generative ai series · {{ gen_pub | size }} note{% unless gen_pub.size == 1 %}s{% endunless %}</p>

<p class="pub-intro">
  A build-from-scratch journey through modern generative modeling — diffusion models, score matching,
  and flow matching — derived from first principles, implemented in code, and made <strong>interactive</strong>
  so you can build intuition by playing with the math. This series doubles as the backbone of a lecture
  I'm giving in Fall&nbsp;2026.
</p>

<div class="pub-list">
{% if gen_pub.size > 0 %}
  <p class="mono-label section-label">// notes</p>
  {% for post in gen_pub %}{% include note-card.html %}{% endfor %}
{% endif %}

{% if gen_soon.size > 0 %}
  <p class="mono-label section-label">// coming soon</p>
  {% for post in gen_soon %}{% include note-card.html %}{% endfor %}
{% endif %}

{% if gen_pub.size == 0 and gen_soon.size == 0 %}
  <p class="notes-empty">No posts yet in this series — check back soon.</p>
{% endif %}
</div>
