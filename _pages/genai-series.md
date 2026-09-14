---
layout: archive
title: "Generative AI: Diffusion & Flow Models from First Principles"
permalink: /genai-series/
author_profile: true
---

{% include base_path %}

{% assign gen = site.posts | where: "series", "genai" | sort: "module" %}
{% assign gen_pub = gen | where_exp: "p", "p.draft != true" %}
{% assign parts = "0,1,2,3,4" | split: "," %}

<a class="notes-back" href="{{ base_path }}/year-archive/">← All research notes</a>

<p class="mono-label pub-kicker">🌀 // generative ai series · {{ gen_pub | size }} published modules</p>

<p class="pub-intro">
  A build-from-scratch journey through modern generative modeling which includes diffusion, score matching, and flow
  matching, derived from first principles, implemented in code, and made <strong>interactive</strong> so
  intuition sticks. This is a deliberately <em>learner-first</em> reordering: we build the probability you
  need first, go DDPM-first before any SDEs, live in 1-D/2-D where you can <em>see</em> the math, and arrive
  at flow matching as the payoff. Related teaching: my <a href="{{ '/teaching/2026-diffusion-flow-matching' | relative_url }}">Fall 2026 guest lecture on diffusion models and flow matching</a> for MAE 6291 at GWU.
</p>

<div class="pub-list">
{% for pn in parts %}
  {% assign pnum = pn | plus: 0 %}
  {% assign group = gen | where_exp: "p", "p.part == pnum" %}
  {% if group.size > 0 %}
    {% assign head = group | first %}
    <p class="mono-label section-label">// part {{ pnum }} · {{ head.part_title }}</p>
    {% for post in group %}{% include note-card.html %}{% endfor %}
  {% endif %}
{% endfor %}
</div>
