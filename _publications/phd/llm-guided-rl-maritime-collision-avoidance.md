---
title: "Large Language Model Guided Reinforcement Learning for Maritime Ship Collision Avoidance"
collection: publications
layout: research-project
project: maritime
authors: "Yasmin Pang, Arsyi Aziz, **Alex Zongo**, Peng Wei, Kyle Crandall"
type: "accepted"
# Record added on this date; acceptance day is not specified in the source CV.
date: 2026-09-14
publication_year: 2026
date_label: "Accepted · OCEANS 2026 IEEE"
permalink: /publication/llm-guided-rl-maritime-collision-avoidance
venue: "OCEANS 2026 IEEE"
preprinturl: 'https://bpb-us-w2.wpmucdn.com/web.seas.gwu.edu/dist/9/15/files/2026/09/Yasmin_LLM_Guided_RL_COLAV_OCEANS_2026.pdf'
tags: ["Reinforcement Learning", "Large Language Models", "Maritime Autonomy"]
excerpt: "COLREGs-based language-model guidance paired with a learned vessel controller for interpretable maritime collision avoidance."
abstract_label: "Research summary"
abstract: >
  This work extends CORALL with a hierarchical collision-avoidance controller.
  An LLM interprets vessel encounters using COLREGs and supplies maneuver intent;
  a PPO policy proposes heading and speed actions. A supervisory arbiter combines
  the two, retaining fallback control when language-model guidance is unusable.
  Experiments examine navigation efficiency and the reliability of this layered
  approach in simulated multi-vessel encounters.
tldr:
  - "Separates high-level **COLREGs reasoning** from low-level **PPO control**."
  - "Reports route-completion time reductions of **up to 54%** and cumulative risk reductions of **up to 37%** versus the rule-based planner in the tested scenarios."
  - "All **300 full-pipeline evaluation episodes** completed without collision; this is a simulation result, not a general safety guarantee."
  - "Only **72.7% of 9,507 LLM calls** yielded usable parsed guidance, underscoring the role of fallback control."
figure: "/images/maritime-llm-rl-architecture.png"
figure_caption: "LLM intent generation, PPO control, and supervisory arbitration (Figure 1 of the linked preprint)."
bibtex: |
  @misc{pang2026maritime,
    title = {Large Language Model Guided Reinforcement Learning for Maritime Ship Collision Avoidance},
    author = {Pang, Yasmin and Aziz, Arsyi and Zongo, Alex and Wei, Peng and Crandall, Kyle},
    year = {2026},
    note = {Preprint; accepted for OCEANS 2026 IEEE},
    url = {https://bpb-us-w2.wpmucdn.com/web.seas.gwu.edu/dist/9/15/files/2026/09/Yasmin_LLM_Guided_RL_COLAV_OCEANS_2026.pdf}
  }
citation: 'Pang, Y., Aziz, A., Zongo, A., Wei, P., and Crandall, K. (2026). &quot;Large Language Model Guided Reinforcement Learning for Maritime Ship Collision Avoidance&quot; OCEANS 2026 IEEE, Monterey, CA, USA.'
---

Accepted for presentation at **OCEANS 2026 IEEE**.

The evaluation controls one ownship against scripted target vessels. Broader encounter testing and multi-agent control remain future work. See the [preprint]({{ page.preprinturl }}) for the methodology, evaluation cases, and results.
