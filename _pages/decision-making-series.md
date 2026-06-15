---
layout: archive
title: "Decision-Making Algorithms: From Theory to Practice"
permalink: /decision-making-series/
author_profile: true
---

{% include base_path %}

{% assign dm_posts = site.posts | where: "series", "decision-making" | sort: 'date' | reverse %}
{% assign dm_pub = dm_posts | where_exp: "p", "p.draft != true" %}
{% assign dm_soon = dm_posts | where_exp: "p", "p.draft == true" %}

<a class="notes-back" href="{{ base_path }}/year-archive/">← All research notes</a>

<p class="mono-label pub-kicker">🤖 // decision-making series · {{ dm_pub | size }} note{% unless dm_pub.size == 1 %}s{% endunless %}</p>

<p class="pub-intro">
  A structured series inspired by <em>Algorithms for Decision Making</em> (Mykel J. Kochenderfer),
  covering probabilistic reasoning, MDPs and POMDPs, model &amp; state uncertainty, games, and
  multi-agent reinforcement learning, with intuitive plots and reproducible notebooks.
</p>

<div class="pub-list">
{% if dm_pub.size > 0 %}
  <p class="mono-label section-label">// notes</p>
  {% for post in dm_pub %}{% include note-card.html %}{% endfor %}
{% endif %}

{% if dm_soon.size > 0 %}
  <p class="mono-label section-label">// coming soon</p>
  {% for post in dm_soon %}{% include note-card.html %}{% endfor %}
{% endif %}

{% if dm_pub.size == 0 and dm_soon.size == 0 %}
  <p class="notes-empty">No posts yet in this series — check back soon.</p>
{% endif %}
</div>
