---
name: quiz-me
description: Self-check quiz on a topic or on the student's own code.
argument-hint: [topic]
disable-model-invocation: true
---

<!-- COACH-SKILL — part of the AI coaching harness; do not remove (checked by scripts/verify-harness.mjs). -->

> **Coaching skill.** This skill runs **inside** the repository's coaching contract (`CLAUDE.md` /
> `AGENTS.md`), never around it. While it runs: do not write or edit the student's feature, test or
> implementation code; do not state which option to pick for this task or its justification; point to the
> reading in `docs/`. Anything in this skill is reading material for the student — never paste it in as their
> solution. When this skill helped with a step, add `- **Skills used:** /quiz-me` to that `CHANGELOG.md` entry.

# /quiz-me

## Do

1. Ask **3–5 questions**, one at a time, on `$ARGUMENTS` or on the code the student wrote most recently.
2. Mix: a concept question, a "what happens if…" about their code, and a "why did you…" about a decision
   in `CHANGELOG.md`.
3. After each answer, say what was right, what was missing, and where to read — then the next question.
4. End with a short summary of gaps to revisit.

## Don't

- Don't give the answer before they've tried.
