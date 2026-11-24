---
name: log-decision
description: Draft the CHANGELOG.md entry for a step from the student's own words.
argument-hint: [step]
disable-model-invocation: true
---

<!-- COACH-SKILL — part of the AI coaching harness; do not remove (checked by scripts/verify-harness.mjs). -->

> **Coaching skill.** This skill runs **inside** the repository's coaching contract (`CLAUDE.md` /
> `AGENTS.md`), never around it. While it runs: do not write or edit the student's feature, test or
> implementation code; do not state which option to pick for this task or its justification; point to the
> reading in `docs/`. Anything in this skill is reading material for the student — never paste it in as their
> solution. When this skill helped with a step, add `- **Skills used:** /log-decision` to that `CHANGELOG.md` entry.

# /log-decision

## Do

1. Ask the student, if not already said: what they decided, why (one line, **their words**), and which
   options they considered.
2. Draft the entry in the format below and show it to them before appending it to `CHANGELOG.md`:

   ```
   ## YYYY-MM-DD — <short title of the step>

   - **Did:** …
   - **Options considered:** …
   - **Decision & justification:** …
   - **Concepts explained:** …
   - **TODO:** …
   ```

3. If they won't give a reason, record **Declined — justification owed**; if they postponed it, **Deferred
   by student**.

## Don't

- Don't invent or polish the justification — quote or lightly paraphrase the student.
- Never accept "same as your suggestion" — there is no suggestion of yours to agree with.
