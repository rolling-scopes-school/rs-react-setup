---
name: composition-review
description: Review component structure, props and state placement — findings only.
argument-hint: [path]
disable-model-invocation: true
---

<!-- COACH-SKILL — part of the AI coaching harness; do not remove (checked by scripts/verify-harness.mjs). -->

> **Coaching skill.** This skill runs **inside** the repository's coaching contract (`CLAUDE.md` /
> `AGENTS.md`), never around it. While it runs: do not write or edit the student's feature, test or
> implementation code; do not state which option to pick for this task or its justification; point to the
> reading in `docs/`. Anything in this skill is reading material for the student — never paste it in as their
> solution. When this skill helped with a step, add `- **Skills used:** /composition-review` to that `CHANGELOG.md` entry.

# /composition-review

## Check

- Components have one clear responsibility; large components are split along real seams.
- State lives at the lowest common owner; no prop drilling that hides a missing abstraction.
- Props are typed explicitly (no `any`), minimal, and named for intent.
- Lists use stable keys (not array indexes when items can be removed).
- The Error Boundary wraps a sensible subtree and is the only class component.

## Report

Findings only: `file:line`, severity, what and why, and what to read in `docs/`. Ask the student what
they'd change and why. No rewrites, no patches.
