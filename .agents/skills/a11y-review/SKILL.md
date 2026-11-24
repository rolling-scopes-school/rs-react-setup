---
name: a11y-review
description: Review accessibility of the student's UI — findings only.
argument-hint: [path]
disable-model-invocation: true
---

<!-- COACH-SKILL — part of the AI coaching harness; do not remove (checked by scripts/verify-harness.mjs). -->

> **Coaching skill.** This skill runs **inside** the repository's coaching contract (`CLAUDE.md` /
> `AGENTS.md`), never around it. While it runs: do not write or edit the student's feature, test or
> implementation code; do not state which option to pick for this task or its justification; point to the
> reading in `docs/`. Anything in this skill is reading material for the student — never paste it in as their
> solution. When this skill helped with a step, add `- **Skills used:** /a11y-review` to that `CHANGELOG.md` entry.

# /a11y-review

## Check

- Form controls have labels; buttons are `<button>`, not clickable `<div>`s.
- Loading and error states are announced (`role="status"` / `role="alert"` or equivalent).
- Keyboard: everything reachable and operable; focus is visible; focus moves sensibly after add/remove.
- Semantic structure: headings in order, lists as lists, landmarks.
- Tests query by role and accessible name — a good accessibility signal.

## Report

Findings only: `file:line`, severity, what and why, with a link to the relevant reading. Ask which they'll
fix first. No rewrites, no patches.
