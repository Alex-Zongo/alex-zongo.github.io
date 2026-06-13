---
title: "eVTOL Aircraft Energy Overhead Estimation under Conflict Resolution in High-Density Airspaces"
collection: publications
tags: ["Advanced Air Mobility", "Separation Assurance"]
authors: "**Alex Zongo**, Peng Wei"
abstract: >
  Electric vertical takeoff and landing (eVTOL) aircraft operating in high-density urban airspace must
  maintain safe separation through tactical conflict resolution, yet the energy cost of such maneuvers has
  not been systematically quantified. This paper investigates how conflict-resolution maneuvers under the
  Modified Voltage Potential (MVP) algorithm affect eVTOL energy consumption. Using a physics-based power
  model integrated within a traffic simulation, we analyze approximately 71,767 en route sections within a
  sector, across traffic densities of 10-60 simultaneous aircraft. The main finding is that MVP-based
  deconfliction is energy-efficient: median energy overhead remains below 1.5% across all density levels,
  and the majority of en route flights within the sector incur negligible penalty. However, the
  distribution exhibits pronounced right-skewness, with tail cases reaching 44% overhead at the highest
  densities due to sustained multi-aircraft conflicts. The 95th percentile ranges from 3.84% to 5.3%,
  suggesting that a 4-5% reserve margin accommodates the vast majority of tactical deconfliction scenarios.
  To support operational planning, we develop a machine learning model that estimates energy overhead at
  mission initiation. Because conflict outcomes depend on future traffic interactions that cannot be known
  in advance, the model provides both point estimates and uncertainty bounds. These bounds are
  conservative; actual outcomes fall within the predicted range more often than the stated confidence
  level, making them suitable for safety-critical reserve planning. Together, these results validate MVP's
  suitability for energy-constrained eVTOL operations and provide quantitative guidance for reserve energy
  determination in Advanced Air Mobility.
tldr:
  - "Quantifies the **energy overhead** of **MVP**-based tactical conflict resolution across ~**71,767** en-route sections at densities of **10–60** aircraft."
  - "Median overhead stays **below 1.5%** across all densities, but the distribution is right-skewed with tail cases up to **44%** under sustained multi-aircraft conflicts."
  - "The **95th-percentile** overhead (3.84–5.3%) suggests a **4–5% reserve margin** covers the vast majority of scenarios."
  - "A **machine-learning model** predicts overhead at mission start with **conservative uncertainty bounds** for safety-critical reserve planning."
figure: "/images/icns_overview.png"
figure_caption: "Energy-overhead estimation framework for MVP-based conflict resolution in high-density airspace."
bibtex: |
  @misc{zongo2026evtol,
    title         = {eVTOL Aircraft Energy Overhead Estimation under Conflict Resolution
                     in High-Density Airspaces},
    author        = {Alex Zongo and Peng Wei},
    year          = {2026},
    eprint        = {2604.06093},
    archivePrefix = {arXiv}
  }
permalink: /publication/2026-01-15-eVTOL_energy_consumption
excerpt: 'This paper characterizes electric Vertical Take-off and Landing (eVTOL) aircraft energy consumption under an autonomous tactical conflict resolution framework (the Modified Voltage Potential or MVP) in an unstructured high-density airspace. <br/><img width="500" height="300" src="/images/icns_overview.png">'
date: 2026-01-15
venue: 'the Integrated Communications Navigation, and Surveillance (ICNS) Conference'
paperurl: #
preprinturl: 'https://arxiv.org/abs/2604.06093'
slidesurl: 'https://alex-zongo.github.io/files/icns2026_presentation.pdf'
bibtexurl: #
type: "conference"
citation: # 'Your Name, You. (2024). &quot;Paper Title Number 3.&quot; <i>GitHub Journal of Bugs</i>. 1(3).'
---

This paper characterizes electric Vertical Take-off and Landing (eVTOL) aircraft energy consumption under an autonomous tactical conflict resolution framework (the Modified Voltage Potential or MVP) in an unstructured high-density airspace. It shows that the conflict resolution maneuvers in general do not significantly increase the energy consumption of eVTOLs, and that the energy overhead is more pronounced in scenarios with higher traffic density and more complex conflict situations. The findings suggest that the MVP framework can be an effective tool for managing air traffic while minimizing energy consumption, which is crucial for the sustainability of urban air mobility.

>**_This manuscript was presented at ICNS 2026 (Best in-session paper award)._** 