---
title: "Diffusion from First Principles: From Data to Noise and Back"
date: 2026-06-13
permalink: /posts/2026/06/diffusion-from-noise/
series: genai
excerpt: "The one idea behind every diffusion model — gradually destroy structure with noise, then learn to undo it — with an interactive forward-diffusion explorable to build intuition."
tags:
  - generative-ai
  - diffusion
  - score-matching
  - first-principles
---

Welcome to the first note in a build-from-scratch series on **generative AI** — diffusion models, score matching, and flow matching. The goal is to derive each idea from first principles, implement it in code, and make it **interactive** so the intuition sticks.

## The one idea

Every diffusion model rests on a single, almost suspiciously simple idea:

> Gradually destroy the structure in your data by adding noise until nothing is left but pure randomness — then learn to **reverse** that process, one small step at a time.

If you can learn to undo noise, you can start from pure noise and *generate* data. That's it. Everything else — DDPM, score-based SDEs, probability-flow ODEs, flow matching — is a different lens on this same forward/reverse pair.

## The forward process

We corrupt a data point \\(x_0\\) over a continuous time \\(t \in [0, 1]\\) with a **variance-preserving** schedule:

$$
x_t = \sqrt{\bar\alpha_t}\, x_0 + \sqrt{1 - \bar\alpha_t}\, \varepsilon, \qquad \varepsilon \sim \mathcal{N}(0, I),
$$

where \\(\bar\alpha_t\\) decays smoothly from \\(1\\) (all signal) to \\(\approx 0\\) (all noise). At \\(t=0\\) we have the data; as \\(t \to 1\\) every point relaxes into the same standard Gaussian ball, regardless of where it started.

Drag the slider below to *see* this happen — watch structured data (a spiral, two moons, or blobs) dissolve into Gaussian noise, and notice how the schedule \\(\bar\alpha_t\\) controls the pace:

{% include widgets/diffusion-toy.html %}

A few things worth noticing as you play:

- **It's reversible in principle.** Because we *added* a specific \\(\varepsilon\\), if we knew it we could subtract it back out. The whole learning problem is exactly this: **predict the noise** \\(\varepsilon\\) (equivalently, the score \\(\nabla_x \log p_t(x)\\)) from the corrupted \\(x_t\\).
- **All paths end in the same place.** Every distribution flows to \\(\mathcal{N}(0, I)\\). That shared endpoint is what lets us *start* generation from pure noise.
- **The schedule matters.** Most of the structure is destroyed in a surprisingly narrow band of \\(t\\) — which is why noise schedules and time-weighting are such a big deal in practice.

## Where this series is going

From this single forward/reverse picture we'll build up, with code and an interactive widget for each step:

1. **DDPM** — the discrete-time denoising objective and why predicting \\(\varepsilon\\) works.
2. **Score-based models & the probability-flow ODE** — the continuous-time (SDE) view and deterministic sampling.
3. **Flow matching & continuous normalizing flows** — straightening the paths and learning velocity fields directly.

*This first note is the conceptual on-ramp; the implementation-heavy sections are on their way (see below).*
