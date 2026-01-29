---
title: "Algorithms for Decision-Making: From Uncertainty to Action"
date: 2026-02-22
permalink: /posts/2026/02/uncertainty-to-action/
series: decision-making
categories:
    - Artificial Intelligence
    - Decision-Making
tags:
    - Algorithms
    - Uncertainty
    - Decision-Making
    - Autonomy
---

Welcome to the first post in our series on Algorithms for Decision-Making. In this installment, we explore how systems can transform uncertainty into actionable decisions, a critical capability for autonomous agents operating in complex environments.

## Table of Contents
{: .no_toc }
* TOC
{:toc}

---

Throughout history, humanity has grappled with uncertainty. From ancient seafarers navigating uncharted waters to modern-day AI systems making split-second decisions, the ability to make informed choices in the face of uncertainty has been a defining challenge. From aircraft collision avoidance, wildfire management, disaster response to personalized medicine, the stakes of effective decision-making have never been higher. Designing algorithms that can reason under uncertainty and make optimal decisions is not just an academic exercise; it is a societal imperative that while accounting for uncertainty, should balance multiple objectives, and operate within resource constraints.

---
## 1. Why decision-making is the Core Problem of Autonomy?
Every autonomous system, whether a robot, an aircraft, or a software agent, ultimately faces the same fundamental question:

>**Given what I know right now, what should I do next?**

This question is deceptively simple. In practice, it is complicated by uncertainty, delayed consequences, resource constraints, and the presence of other decision-making agents or entities. Decisions are rarely made one-shot; they unfold over time, interact with the environment, and shape future possibilities.

Air Traffic Control (ATC) offers a particularly rich example. Controllers must continuously make safety-critical decisions based on incomplete and noisy information, anticipate future conflicts, and coordinate many agents whose objectives may not be fully aligned. Similar challenges arise in robotics, aerospace systems, energy systems, finance, and large-scale infrastructure.

This series is about the algorithmic foundations that allow agents to reason and act in such environments. 

## 2. Methods Overview

There are several methods for designing decision-making agents. Depending on the application, some methods may be more suitable than others. The difference beteween these methods often lies in the responsibility of the designer and the tasks left to automation.

### 2.1. Explicit Programming and Rule-Based Systems

This is the most traditional approach, where decision-making logic is hard-coded by human experts. It requires a deep understanding of the domain and careful crafting of rules to anticipate all scenarios that the system or agent might encounter. The explicit programming approach works well when the environment is relatively stable and predictable, and when the decision-making criteria can be clearly defined. However, it becomes impractical in complex, dynamic environments where the number of possible states and actions grows exponentially.  

<!-- While this can work well for simple, well-defined problems, it struggles to scale to complex, uncertain environments. -->

### 2.2. Supervised Learning

Supervised learning, here refers to showing an agent what to do rather than write a program for the agent to follow. 

### 2.3. Optimization

### 2.4. Planning

### 2.5. Reinforcement Learning


## 3. A Brief Historical Perspective

The study of decision-making under uncertainty sits at the intersection of several fields:
- **Economics and Game Theory**: Early work by von Neumann, Morgenstern, and Nash laid the groundwork for understanding strategic interactions among rational agents. Concepts like expected utility and Nash equilibrium provided a formal basis for analyzing decisions in uncertain environments.
- **Psychology and Cognitive Science**: Researchers like Herbert Simon and Daniel Kahneman explored how humans make decisions, highlighting the roles of heuristics, biases, and bounded rationality. Their work underscored the complexity of real-world decision-making processes.
- **Mathematics and Statistics**: The development of probability theory and statistical inference provided essential tools for modeling uncertainty. Bayesian methods, in particular, have become central to modern decision-making frameworks.
- **Computer Science**: The rise of computing power enabled the practical implementation of complex decision-making algorithms. Early AI research focused on rule-based systems, while later developments embraced probabilistic reasoning and machine learning.
- **Operations Research (OR)**: Originating during World War II, OR developed mathematical techniques for optimizing resource allocation and logistics under uncertainty. Techniques like linear programming and stochastic optimization emerged from this field. It formalized optimization under constraints. 
- **Control Theory**: Focused on the feedback and stability in dynamic systems, control theory introduced methods for dealing with uncertainty in system dynamics and measurements. The Kalman filter, for instance, is a cornerstone of modern control systems.
- **Artificial Intelligence (AI)**: AI has contributed significantly to decision-making algorithms, particularly through the development of probabilistic reasoning, machine learning, and reinforcement learning. Techniques like Markov Decision Processes (MDPs) and Partially Observable MDPs (POMDPs) have become standard tools for modeling decision-making under uncertainty.
- **Reinforcement Learning (RL)**: RL has provided a framework for learning optimal policies through interaction with the environment, balancing exploration and exploitation. Recent advances in deep RL have enabled agents to tackle complex tasks in high-dimensional spaces.

Over time, these threads converged around a unifying idea:
>decision-making can be modeled as a sequential interaction between an agent and an uncertain environment.

Modern autonomy builds on this synthesis, combining probabilistic modeling, optimization, and learning to operate safely and efficiently in complex real-world systems.

## 4. The Core Abstraction: Agent, Environment, and Uncertainty

Despite the diversity of applications, most decision-making problems share a common structure. At the heart of this structure is the interaction between an **agent** and its **environment**. The agent perceives the environment through observations, takes actions that influence the environment, and receives feedback in the form of rewards or costs.

- **States**: The state represents the current situation of the environment. It may be fully observable or partially observable, leading to different modeling approaches.
- **Actions**: The set of possible actions the agent can take to influence the environment.
- **Observations**: The information the agent receives about the environment, which may be noisy or incomplete.
- **Transition Model**: Describes how the environment evolves in response to the agent's actions, often modeled probabilistically to capture uncertainty.
- **Objective Function**: Quantifies the agent's goals, typically in terms of rewards to maximize or costs to minimize.
- **Policy**: A strategy that defines how the agent selects actions based on its current state or history of observations.

Uncertainty arises in multiple ways:
- **State Uncertainty**: The agent may not have complete knowledge of the current state due to noisy sensors or hidden variables.
- **Action Uncertainty**: The outcomes of actions may be stochastic, leading to unpredictable consequences.
- **Environmental Uncertainty**: The environment itself may change in unforeseen ways, influenced by external factors or other agents.

This abstraction provides a powerful framework for modeling a wide range of decision-making problems, from simple single-agent scenarios to complex multi-agent systems; from aircraft separation to robotic manipulation and beyond, using a shared mathematical language and set of concepts.

## 5. Applications


### 5.1. Aircraft Collision Avoidance and Separation

### 5.2. Wildfire Management and Disaster Response

### 5.3. Personalized Medicine and Healthcare Decision-Making   
### 5.4. Robotics and Autonomous Vehicles

### 5.5. Energy Systems and Smart Grids

### 5.6. Finance and Investment Strategies


## 6. Major Class of Decision-Making Systems
This series will manly explore the following classes encountered  in practice:

### 6.1. Probabilistic reasoning and Bayesian methods

### 6.2. Sequential decision-making

### 6.3. State uncertainty

### 6.4. Model uncertainty
### 6.5. Multi-agent systems




## 7. Why this matters societally

## 8. Where Julia fits in