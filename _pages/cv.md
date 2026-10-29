---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
cv_updated: "October 2026"
excerpt: "Curriculum vitae of Alex Zongo, PhD candidate in aerospace engineering at The George Washington University."
redirect_from:
  - /resume
  - /cv-json/
  - /resume-json
---

{% assign pdf = '/files/cv.pdf' | relative_url %}

<p class="pub-intro">PhD candidate in Mechanical and Aerospace Engineering at The George Washington University, working on safe multi-agent learning and decision-making for aircraft and drones. Seeking Summer 2027 research internships.</p>

<div class="cv-actions">
  <a class="btn-pill btn-pill--solid" href="{{ pdf }}" download><i class="fa-solid fa-file-arrow-down" aria-hidden="true"></i> Download PDF</a>
  <a class="btn-pill" href="{{ pdf }}" target="_blank" rel="noopener"><i class="fa-solid fa-up-right-from-square" aria-hidden="true"></i> Open in new tab</a>
  <span class="cv-updated">Updated {{ page.cv_updated }}</span>
</div>

<nav class="cv-jump" aria-label="Details on this site">
  <a href="{{ '/research/' | relative_url }}">Research</a>
  <a href="{{ '/publications/' | relative_url }}">Publications</a>
  <a href="{{ '/talks/' | relative_url }}">Talks</a>
  <a href="{{ '/teaching/' | relative_url }}">Teaching</a>
</nav>

<div class="cv-viewer">
  <object data="{{ pdf }}#view=FitH&amp;toolbar=0" type="application/pdf" aria-label="CV preview">
    <p class="cv-viewer__fallback">Your browser cannot display the PDF here. <a href="{{ pdf }}">Download the CV (PDF)</a>.</p>
  </object>
</div>
