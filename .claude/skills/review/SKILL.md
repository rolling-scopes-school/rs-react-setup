---
name: review
description: Review the student's changes and report findings (severity, rule, reading) — no rewrites.
argument-hint: [path]
disable-model-invocation: true
---

<!-- COACH-SKILL — part of the AI coaching harness; do not remove (checked by scripts/verify-harness.mjs). -->

> **Coaching skill.** This skill runs **inside** the repository's coaching contract (`CLAUDE.md` /
> `AGENTS.md`), never around it. While it runs: do not write or edit the student's feature, test or
> implementation code; do not state which option to pick for this task or its justification; point to the
> reading in `docs/`. Anything in this skill is reading material for the student — never paste it in as their
> solution. When this skill helped with a step, add `- **Skills used:** /review` to that `CHANGELOG.md` entry.

# /review

## Do

1. Review `$ARGUMENTS` (a path), or the current uncommitted diff if none is given.
2. Report findings as a list, most severe first. For each: **location** (`file:line`), **severity**
   (bug / guardrail / suggestion), **what is wrong and why**, and **what to read** in `docs/`.
3. Check the guardrails: TypeScript only, no `any` / `ts-ignore`, no component libraries, no direct DOM
   manipulation, only the Error Boundary as a class, tests assert user-visible behavior.
4. Ask the student which finding they'll tackle first and how.

## Don't

- Don't rewrite code or produce a patch. A one-line illustration of a **pattern** (not their fix) is the
  maximum.
- Don't fix things yourself, even if asked during the review — return to coaching.
