---
title: "Gaussians & the Reparameterization Trick"
date: 2026-06-13
permalink: /posts/2026/06/gaussians-reparameterization/
series: genai
part: 0
module: "0.2"
part_title: "Foundations you can see"
excerpt: "The Gaussian is the workhorse of generative modeling. Here's everything you need — mean, covariance, and the one trick (x = μ + σε) that makes diffusion trainable."
tags:
  - generative-ai
  - probability
  - gaussian
  - reparameterization
---

If you understand **one** distribution deeply, make it the Gaussian. Diffusion models add Gaussian noise, predict Gaussian noise, and sample from Gaussians at every step. This note builds the two ideas we'll lean on for the rest of the series: the **shape** of a Gaussian (mean and covariance) and the **reparameterization trick** that makes sampling differentiable.

## The multivariate Gaussian

A Gaussian in \\(\mathbb{R}^d\\) is fully described by a mean vector \\(\mu\\) and a covariance matrix \\(\Sigma\\):

$$
x \sim \mathcal{N}(\mu, \Sigma).
$$

\\(\mu\\) says *where* the cloud sits; \\(\Sigma\\) says *how it's stretched and tilted*. The diagonal of \\(\Sigma\\) sets the spread along each axis, and the off-diagonal sets the **correlation** — which rotates the cloud.

## The reparameterization trick

Here's the move that everything depends on. Instead of sampling \\(x\\) directly, we sample standard noise \\(\varepsilon \sim \mathcal{N}(0, I)\\) and *transform* it:

$$
x = \mu + L\,\varepsilon, \qquad \text{where } L L^\top = \Sigma.
$$

(\\(L\\) is the Cholesky factor of \\(\Sigma\\); in the isotropic case it's just \\(x = \mu + \sigma\,\varepsilon\\).) Because this map is **differentiable** in \\(\mu\\) and \\(\Sigma\\), gradients can flow *through the act of sampling*. That single fact is what makes VAEs, and the entire diffusion training objective, trainable by backprop.

Play with it below — the grey cloud is the fixed base noise \\(\varepsilon\\); the coloured cloud is \\(x = \mu + L\varepsilon\\). Notice how the **same** noise points get reshaped as you drag the sliders, and how \\(\rho\\) tilts the covariance ellipses:

{% include widgets/gaussian-reparam.html %}

Things worth internalizing:

- **It's the same randomness, reshaped.** Resample ε and the cloud reshuffles; drag the sliders and the *same* ε flows to new positions. The "randomness" lives entirely in ε.
- **Covariance is geometry.** The ellipses are level sets of the density; \\(\sigma\\) scales them, \\(\rho\\) rotates them. When we later write \\(x_t = \sqrt{\bar\alpha_t}\,x_0 + \sqrt{1-\bar\alpha_t}\,\varepsilon\\), you're looking at exactly this trick with a time-dependent mean and variance.
- **Why it matters for diffusion.** Predicting the noise ε *is* predicting the reparameterization that produced \\(x_t\\) — so denoising and the score are two views of the same Gaussian algebra.

Next up in the foundations: conditioning and marginalizing (how Gaussians combine), then measuring distance between distributions with KL — the last pieces before we noise our first dataset.
