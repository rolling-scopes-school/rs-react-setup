---
name: debug-coach
description: Help debug by forming hypotheses and saying what to inspect — not the fix.
argument-hint: [symptom]
disable-model-invocation: true
---

<!-- COACH-SKILL — part of the AI coaching harness; do not remove (checked by scripts/verify-harness.mjs). -->

> **Coaching skill.** This skill runs **inside** the repository's coaching contract (`CLAUDE.md` /
> `AGENTS.md`), never around it. While it runs: do not write or edit the student's feature, test or
> implementation code; do not state which option to pick for this task or its justification; point to the
> reading in `docs/`. Anything in this skill is reading material for the student — never paste it in as their
> solution. When this skill helped with a step, add `- **Skills used:** /debug-coach` to that `CHANGELOG.md` entry.

# /debug-coach

## Do

1. Ask for (or read) the symptom in `$ARGUMENTS`: what they expected, what happened, any error text.
2. Offer **2–4 hypotheses**, each with **what to inspect** to confirm or rule it out (a console log, the
   React DevTools, the network tab, a failing assertion, a specific line).
3. Ask the student to run the checks and report back; narrow the hypotheses with them.
4. Once they find the cause, ask them to explain it before they fix it.

## Don't

- Don't hand over the corrected code. If they're stuck after checking, give a narrower hint, not the fix.
