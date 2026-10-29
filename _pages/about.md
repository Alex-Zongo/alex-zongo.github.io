---
permalink: /
title: "Alex Zongo"
hide_title: true
excerpt: "Safe multi-agent learning and decision-making for autonomous aircraft."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% include home-hero.html %}

{% include home-selected.html %}

<p class="mono-label section-label">about me</p>

I am a PhD candidate in [**Mechanical and Aerospace Engineering**](https://mae.engineering.gwu.edu/) at [**The George Washington University**](https://www.gwu.edu/), advised by Prof. [**Peng Wei**](https://web.seas.gwu.edu/pwei/) in the **Intelligent Aerospace Systems Lab (IASL)**. In Summer 2026 I was a Visiting Researcher at **UC Berkeley** ([CITRIS and the Banatao Institute](https://citris-uc.org/)) with Prof. [**Alexandre Bayen**](https://bayen.berkeley.edu/alex-bayen), working on multi-modal aircraft trajectory prediction.

My research asks how learned decision-makers, such as reinforcement learning policies and language models, can be trusted in safety-critical multi-agent systems. I work on separation assurance for drones and advanced air mobility, with theory (adversarial robustness bounds), algorithms (multi-agent RL and runtime safety filters), and closed-loop evaluation in air traffic simulation.

Before GWU, I earned a master's in Control Science and Engineering at [**Tsinghua University**](https://www.tsinghua.edu.cn/en/), where I worked on reinforcement learning for fault-tolerant flight control, and a B.S. in Aircraft Design and Engineering at [**Beihang University (BUAA)**](https://ev.buaa.edu.cn/), after earlier studies at [**National Cheng Kung University**](https://web.ncku.edu.tw/index.php?Lang=en). Full details are in my [CV]({{ '/files/cv.pdf' | relative_url }}).

<p class="mono-label section-label">research themes</p>

<div class="themes">
{% for theme in site.data.profile.themes %}
  <div class="theme">
    <h3 class="theme__title"><a href="{{ '/research/' | relative_url }}#{{ theme.anchor }}">{{ theme.title }}</a></h3>
    <p class="theme__text">{{ theme.text }}</p>
    <p class="theme__links">{% for l in theme.links %}<a href="{{ l.url | relative_url }}">{{ l.label }}</a>{% endfor %}</p>
  </div>
{% endfor %}
</div>

<p class="mono-label section-label">news</p>
<div class="timeline" markdown="1">

<div class="tl" markdown="1">
<span class="tl__date">Oct 2026</span>
<div class="tl__body" markdown="span">Gave a talk on [*vision-language-action models*]({{ '/talks/2026-10-07-seinar-embodied-ai' | relative_url }}) on the Embodied AI panel at **SEINAR 2026** (World AI Week).</div>
</div>

<div class="tl" markdown="1">
<span class="tl__date">Sep 2026</span>
<div class="tl__body" markdown="span">Presented [*Runtime Safety Filtering for Learned Small UAS Separation Policies under GNSS Degradation*]({{ '/publication/2026-dasc-runtime-safety-filtering' | relative_url }}) at **DASC 2026** in Orlando, Florida. The paper received best-in-session, best-in-track, and **3rd Best of Conference** paper awards. [Slides]({{ '/files/DASC.pdf' | relative_url }}).</div>
</div>

<div class="tl" markdown="1">
<span class="tl__date">Sep 2026</span>
<div class="tl__body" markdown="span">Gave a [guest lecture on *diffusion models and flow matching*]({{ '/teaching/2026-diffusion-flow-matching' | relative_url }}) for GWU's graduate course on Large Language and Vision Models.</div>
</div>

<div class="tl" markdown="1">
<span class="tl__date">Sep 2026</span>
<div class="tl__body" markdown="span">Two papers accepted at **AIAA SciTech 2027**, on [LLMs for air traffic control]({{ '/publication/llm-air-traffic-control-prompting' | relative_url }}) (with UC Berkeley) and [regional air mobility energy assessment]({{ '/publication/regional-air-mobility-evtol-energy' | relative_url }}), and one at **IEEE OCEANS 2026** on [LLM-guided RL for maritime collision avoidance]({{ '/publication/llm-guided-rl-maritime-collision-avoidance' | relative_url }}).</div>
</div>

<div class="tl" markdown="1">
<span class="tl__date">Jul 2026</span>
<div class="tl__body" markdown="span">[*Robust Multi-Agent Reinforcement Learning for Small UAS Separation Assurance under GPS Degradation and Spoofing*]({{ '/publication/2026-cdc-robust-marl' | relative_url }}) accepted at **IEEE CDC 2026**.</div>
</div>

<div class="tl" markdown="1">
<span class="tl__date">Jun 2026</span>
<div class="tl__body" markdown="span">Presented a poster *"Fine-Tuning Large Language Models for Cooperative Tactical Deconfliction of Small Unmanned Aerial Systems"* at the *CVPR 2026 Workshop* on Multi-Agent Embodied Intelligent Systems Meet the Generative-AI Era (MEIS), Denver, Colorado.</div>
</div>


</div>

<details class="news-archive" markdown="1">
<summary>Earlier news</summary>
<div class="timeline" markdown="1">

<div class="tl" markdown="1">
<span class="tl__date">May 2026</span>
<div class="tl__body" markdown="span">Presented a poster on *"Robust MARL for Small UAS Separation Assurance under GPS Degradation and Spoofing"* at the *ACC 2026 Workshop* on Autonomy in Transportation, New Orleans, Louisiana.</div>
</div>

<div class="tl" markdown="1">
<span class="tl__date">May 2026</span>
<div class="tl__body" markdown="span">Started a summer appointment as Visiting Researcher at **UC Berkeley** (CITRIS and the Banatao Institute) with Prof. Alexandre Bayen, working on multi-modal aircraft trajectory prediction from ADS-B data and ATC voice communications.</div>
</div>

<div class="tl" markdown="1">
<span class="tl__date">Apr 2026</span>
<div class="tl__body" markdown="span">Presented [*eVTOL Aircraft Energy Consumption Estimation with Conflict Resolution in High-Density Airspaces*]({{ '/talks/2026-04-15-icns' | relative_url }}) at **ICNS 2026**, Herndon, Virginia. The paper received a **best-in-session** paper award.</div>
</div>

<div class="tl" markdown="1">
<span class="tl__date">Dec 2025</span>
<div class="tl__body" markdown="span">Started a blog post series on Air Traffic Control.</div>
</div>

<div class="tl" markdown="1">
<span class="tl__date">Jan 2025</span>
<div class="tl__body" markdown="span">Began serving as a Teaching Assistant for *MAE 3134 — Linear Systems Dynamics* at George Washington University.</div>
</div>

<div class="tl" markdown="1">
<span class="tl__date">Sep 2024</span>
<div class="tl__body" markdown="span">Hosted and organized the *Safe and Responsible AI workshop*, featuring the FAA, HASS COE, Johns Hopkins APL, and MIT Lincoln Labs, as well as TRAILS, NIST AI, and RAI UK.</div>
</div>

<div class="tl" markdown="1">
<span class="tl__date">Aug 2024</span>
<div class="tl__body" markdown="span">Started my PhD and research assistantship in Mechanical and Aerospace Engineering at George Washington University.</div>
</div>

<div class="tl" markdown="1">
<span class="tl__date">Aug 2024</span>
<div class="tl__body" markdown="span">Presented my research on *Fault-Tolerant Flight Control* at the *International Conference on Guidance, Navigation and Control (ICGNC 2024)*.</div>
</div>

<div class="tl" markdown="1">
<span class="tl__date">May 2024</span>
<div class="tl__body" markdown="span">Graduated with a Master's in Control Science and Engineering from [Tsinghua University](https://www.tsinghua.edu.cn/en/).</div>
</div>

</div>
</details>

<p class="mono-label section-label">service</p>

**Reviewer.** *Journals:* Journal of Guidance, Control, and Dynamics; IEEE Transactions on Aerospace and Electronic Systems; IEEE Transactions on Intelligent Transportation Systems; Transportation Research Part C; Journal of Aerospace Information Systems; Engineering Applications of Artificial Intelligence. *Conferences:* IEEE CDC, IEEE ITSC, AAAI, ICRA, ICGNC.

**Organizing.** Hosted the 2024 *Safe and Responsible AI* workshop at GWU, with speakers from the FAA, Johns Hopkins APL, MIT Lincoln Laboratory, and NIST.

{% include home-affiliations.html %}

<p class="home-contact">For research collaborations or internship opportunities, reach out by <a href="mailto:{{ site.author.email }}">email</a>.</p>
