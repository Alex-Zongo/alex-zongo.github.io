---
layout: archive
title: "✈️ Air Traffic Control, Autonomy, and the Physics of the Sky"
permalink: /atc-series/
author_profile: true
---

<div class="blog-hero">

<strong></strong>

<p>Air Traffic Control is one of the most complex control systems ever built; balancing safety, efficiency, uncertainty, and human decision-making at a global scale.  
These notes explore modern and emerging approaches to airspace management, from classical ATC principles to physics-inspired models, reinforcement learning, multi-modal AI and autonomous conflict resolution for the future of aviation.
</p>

</div>


<!-- A running series on air traffic control, autonomy, uncertainty, and scalable airspace operations. -->

{% assign atc_posts = site.posts | where:"series","atc" | sort: 'date' | reverse %}
{% if atc_posts and atc_posts.size > 0 %}
{% for post in atc_posts %}
  {% include archive-single.html %}
{% endfor %}
{% else %}
  <p><em>No posts yet in this series.</em></p>
{% endif %}