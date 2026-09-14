---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

<h2>Explore</h2>
<ul>
  <li><a href="{{ '/' | relative_url }}">Home</a></li>
  {% for item in site.data.navigation.main %}<li><a href="{{ item.url | relative_url }}">{{ item.title }}</a></li>{% endfor %}
</ul>
{% assign collections = "publications,talks,teaching,posts" | split: "," %}
{% for name in collections %}
<h2>{% if name == 'posts' %}Writing{% else %}{{ name | capitalize }}{% endif %}</h2>
<ul>
{% assign entries = site[name] | sort: "date" | reverse %}
{% for item in entries %}<li><a href="{{ item.url | relative_url }}">{{ item.title }}</a></li>{% endfor %}
</ul>
{% endfor %}
