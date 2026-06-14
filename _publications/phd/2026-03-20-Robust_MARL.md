---
title: "Robust Multi-Agent Reinforcement Learning for Small UAS Separation Assurance under GPS Degradation and Spoofing"
collection: publications
tags: ["Multi-Agent", "Reinforcement Learning", "Separation Assurance", "Robustness & Safety"]
authors: "**Alex Zongo**, Filippos Fotiadis, Ufuk Topcu, Peng Wei"
abstract: >
  We address robust separation assurance for small Unmanned Aircraft Systems (sUAS) under GPS degradation
  and spoofing via Multi-Agent Reinforcement Learning (MARL). In cooperative surveillance, each aircraft
  (or agent) broadcasts its GPS-derived position; when such position broadcasts are corrupted, the entire
  observed air traffic state becomes unreliable. We cast this state observation corruption as a zero-sum
  game between the agents and an adversary: with probability R, the adversary perturbs the observed state
  to maximally degrade each agent's safety performance. We derive a closed-form expression for this
  adversarial perturbation, bypassing adversarial training entirely and enabling linear-time evaluation in
  the state dimension. We show that this expression approximates the true worst-case adversarial
  perturbation with second-order accuracy. We further bound the safety performance gap between clean and
  corrupted observations, showing that it degrades at most linearly with the corruption probability under
  Kullback-Leibler regularization. Finally, we integrate the closed-form adversarial policy into a MARL
  policy gradient algorithm to obtain a robust counter-policy for the agents. In a high-density sUAS
  simulation, we observe near-zero collision rates under corruption levels up to 35%, outperforming a
  baseline policy trained without adversarial perturbations.
tldr:
  - "Casts **GPS corruption** as a **zero-sum game** between the agents and an adversary that perturbs the observed state with probability *R*."
  - "Derives a **closed-form** worst-case perturbation — **no adversarial training**, linear-time in the state dimension, accurate to second order."
  - "Proves the clean-vs-corrupted **safety gap** grows at most **linearly** with corruption probability under **KL regularization**."
  - "Integrates the closed-form adversary into a **MARL policy-gradient** algorithm, achieving **near-zero collisions** under up to **35%** corruption."
figure: "/images/frame_000133.jpg"
figure_caption: "High-density sUAS separation assurance under GPS degradation and spoofing."
bibtex: |
  @misc{zongo2026robust,
    title         = {Robust Multi-Agent Reinforcement Learning for Small UAS Separation
                     Assurance under GPS Degradation and Spoofing},
    author        = {Alex Zongo and Filippos Fotiadis and Ufuk Topcu and Peng Wei},
    year          = {2026},
    eprint        = {2603.28900},
    archivePrefix = {arXiv}
  }
permalink: /publication/2026-01-29-Robust_MARL
excerpt: 'This paper is addresses realtime separation assurance and tactical deconfliction mechanisms of small Unmanned Aerial Systems via Multi-Agent Reinforcement Learning under GPS degradation and Spoofing. <br/><img width="500" height="300" src="/images/frame_000133.jpg">'
# excerpt: "Short description of portfolio item number 1<br/><img src='/images/500x300.png'>"
date: 2026-03-20
venue: 'the Control and Decision Conference (CDC) 2026'
paperurl: #
preprinturl: 'https://arxiv.org/abs/2603.28900'
slidesurl: #
bibtexurl: #
posterurl: 'https://alex-zongo.github.io/files/acc_workshop_2026.pdf'
type: "under-review"
citation: 'Zongo, A., Fotiadis, F., Topcu, U., &amp; Wei, P. (2026). &quot;Robust Multi-Agent Reinforcement Learning for Small UAS Separation Assurance under GPS Degradation and Spoofing.&quot; <i>arXiv preprint</i> arXiv:2603.28900.'
---

This paper introduces a Robust Multi-Agent Reinforcement Learning framework for realtime separation assurance and tactical deconfliction mechanism for small Unmanned Aerial Systems under GPS degradation and Spoofing. 

>**_This manuscript is currently under review for presentation at CDC 2026. It was also presented at the American Control Conference (ACC 2026) Workshop._** 