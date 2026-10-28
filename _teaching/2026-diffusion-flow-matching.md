---
title: "Diffusion Models and Flow Matching"
collection: teaching
type: "Guest lecture"
date: 2026-09-09
period: "Sep 2026"
course: "MAE 6291 / CSCI 6907 — Large Language and Vision Models"
slidesurl: "/files/lecture%20-%20Diffusion%20-%20flow.pdf"
venue: "George Washington University"
location: "Washington, DC, USA"
notesurl: "/genai-series/"
permalink: /teaching/2026-diffusion-flow-matching
excerpt: "Guest lecture on diffusion models and flow matching for the Large Language and Vision Models course at GWU."
---

I gave a guest lecture on **diffusion models and flow matching** for **MAE 6291 — Large Language and Vision Models** at George Washington University on **September 9, 2026** (Fall 2026).

Related writing: [Generative AI: Diffusion & Flow Models from First Principles]({{ '/genai-series/' | relative_url }}).

## From Noise to Data

The lecture introduces generation as sampling, then builds flow models through velocity fields and numerical integration. It covers conditional flow matching, the connection to diffusion and score functions, and classifier-free guidance.

By the end, students should be able to explain how a generator can be trained using regression and sampled using numerical integration, and how diffusion fits into that framework.

[View the lecture slides (PDF)]({{ page.slidesurl | relative_url }}).

<figure>
  <a href="{{ page.slidesurl | relative_url }}"><img src="{{ '/images/diffusion-flow-lecture-title.png' | relative_url }}" alt="Lecture 5: From Noise to Data, Diffusion Models through Flow Matching" loading="lazy"></a>
  <figcaption>Guest lecture for MAE 6291 / CSCI 6907, Fall 2026.</figcaption>
</figure>

The slides credit Peter Holderrieth and Ezra Erives' MIT 6.S184 course for the flow-first exposition and selected illustrations, with additional examples and annotations.
