---
layout: archive
title: "🤖 Decision Making Algorithms: From Theory to Practice"
permalink: /decision-making-series/
author_profile: true
---


<div class="blog-hero">

<strong></strong>

<p>
  A structured series inspired by <em>Algorithms for Decision Making</em> (Mykel J. Kochenderfer),
    covering probabilistic reasoning, MDPs/POMDPs, model & state uncertainty, games, and multi-agent RL.
</p>
</div>

<!-- 
Probabilistic reasoning, sequential decisions, state/model uncertainty, multi-agent systems, and MARL — with Julia notebooks and intuitive plots. -->

{% assign dm_posts = site.posts | where:"series","decision-making" | sort: 'date' | reverse %}
{% if dm_posts and dm_posts.size > 0 %}
{% for post in dm_posts %}
  {% include archive-single.html %}
{% endfor %}
{% else %}
  <p><em>No posts yet in this series.</em></p>
{% endif %}