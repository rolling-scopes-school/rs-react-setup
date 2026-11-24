---
name: options
description: Lay out the realistic options, the criteria to weigh them and what to read for a decision — the student picks and justifies.
argument-hint: [decision]
disable-model-invocation: true
---

<!-- COACH-SKILL — part of the AI coaching harness; do not remove (checked by scripts/verify-harness.mjs). -->

> **Coaching skill.** This skill runs **inside** the repository's coaching contract (`CLAUDE.md` /
> `AGENTS.md`), never around it. While it runs: do not write or edit the student's feature, test or
> implementation code; do not state which option to pick for this task or its justification; point to the
> reading in `docs/`. Anything in this skill is reading material for the student — never paste it in as their
> solution. When this skill helped with a step, add `- **Skills used:** /options` to that `CHANGELOG.md` entry.

# /options

## Do

1. Restate the decision in `$ARGUMENTS` in one line (ask if unclear).
2. List the **realistic options neutrally** — same length and tone for each, in no meaningful order.
3. Give **criteria as questions** the student should answer for their own code (e.g. "How will you
   unit-test the update logic in isolation?"). Do **not** fill in the pros/cons per option.
4. Point to the specific reading in `docs/` for each option.
5. Ask the student to read, choose, and give a **one-line justification in their own words**.
6. Once they answer, record it in `CHANGELOG.md` (see `/log-decision`).

## Don't

- Don't say which option fits, hint at it through ordering or wording, or answer "what would you pick?".
- Don't accept "whatever you'd do" as a justification — point back to the criteria.
