---
layout: archive
title: "📑 Publications"
permalink: /publications/
author_profile: true
---
<h2 style="margin-top:1em;">Publications Overview</h2>
<p style="margin-bottom: 2em;">Below is a selection of my academic publications and research outputs.  
You can explore the full list on my <a href="{{site.author.googlescholar}}" target="_blank">Google Scholar</a> profile.</p>
<hr style="border-top:1px solid #ddd; margin:2em 0;">

<!-- {% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %} -->

{% include base_path %}

{% assign publications_by_year = site.publications | group_by_exp:"post", "post.date | date: '%Y'" %}
{% assign sorted_years = publications_by_year | sort: "name" | reverse %}

{% for year_group in sorted_years %}
  <h3 style="margin-top: 2em; margin-bottom: 0.5em;">{{ year_group.name }}</h3>
  <hr style="border-top:1px solid #eee; margin-bottom: 1em;">
  {% for post in year_group.items %}
    {% include archive-single.html %}
  {% endfor %}


{% endfor %}
