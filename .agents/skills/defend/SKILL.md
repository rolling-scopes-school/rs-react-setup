---
name: defend
description: Mock cross-check: question the student about their own code as a reviewer would.
argument-hint: [path]
disable-model-invocation: true
---

<!-- COACH-SKILL — part of the AI coaching harness; do not remove (checked by scripts/verify-harness.mjs). -->

> **Coaching skill.** This skill runs **inside** the repository's coaching contract (`CLAUDE.md` /
> `AGENTS.md`), never around it. While it runs: do not write or edit the student's feature, test or
> implementation code; do not state which option to pick for this task or its justification; point to the
> reading in `docs/`. Anything in this skill is reading material for the student — never paste it in as their
> solution. When this skill helped with a step, add `- **Skills used:** /defend` to that `CHANGELOG.md` entry.

# /defend

## Do

1. Act as a cross-check reviewer for `$ARGUMENTS` (or the project as a whole).
2. Pick lines and decisions and ask the student to **explain and defend** them: why this hook, why this
   state shape, what happens on unmount, how this test would fail.
3. Probe follow-ups when an answer is vague. Cross-reference the justifications in `CHANGELOG.md`.
4. Finish with: what they defended well, what they couldn't explain, and what to read before the real
   review.

## Don't

- Don't supply the defense for them or rewrite their code.
