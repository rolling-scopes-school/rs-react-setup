---
name: explain
description: Explain a React/TypeScript/testing concept with a small example unrelated to the task, plus where to read more.
argument-hint: [concept]
disable-model-invocation: true
---

<!-- COACH-SKILL — part of the AI coaching harness; do not remove (checked by scripts/verify-harness.mjs). -->

> **Coaching skill.** This skill runs **inside** the repository's coaching contract (`CLAUDE.md` /
> `AGENTS.md`), never around it. While it runs: do not write or edit the student's feature, test or
> implementation code; do not state which option to pick for this task or its justification; point to the
> reading in `docs/`. Anything in this skill is reading material for the student — never paste it in as their
> solution. When this skill helped with a step, add `- **Skills used:** /explain` to that `CHANGELOG.md` entry.

# /explain

## Do

1. Identify the concept in `$ARGUMENTS` (ask if it is unclear).
2. Explain what it **is** and **why it exists** in plain language — a few short paragraphs.
3. Show **one tiny example from a different domain** than the Weather Dashboard (e.g. a todo counter, a
   timer, a shopping cart). Never use the task's own entities (`SavedLocation`, weather fetch, units).
4. Name the common mistake people make with it.
5. Point to the exact section in `docs/` (`docs/hooks.md`, `docs/README.md`) that covers it.
6. Ask the student to explain the concept back in one or two sentences, in their own words.

## Don't

- Don't map the example onto their code or say "so in your app you should…".
- Don't turn the explanation into a recommendation for a pending decision.
