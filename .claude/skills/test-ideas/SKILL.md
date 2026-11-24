---
name: test-ideas
description: Suggest behaviors worth testing as Given/When/Then — no test code.
argument-hint: [component or hook]
disable-model-invocation: true
---

<!-- COACH-SKILL — part of the AI coaching harness; do not remove (checked by scripts/verify-harness.mjs). -->

> **Coaching skill.** This skill runs **inside** the repository's coaching contract (`CLAUDE.md` /
> `AGENTS.md`), never around it. While it runs: do not write or edit the student's feature, test or
> implementation code; do not state which option to pick for this task or its justification; point to the
> reading in `docs/`. Anything in this skill is reading material for the student — never paste it in as their
> solution. When this skill helped with a step, add `- **Skills used:** /test-ideas` to that `CHANGELOG.md` entry.

# /test-ideas

## Do

1. Look at the component, hook or module in `$ARGUMENTS` (or ask what to cover).
2. List behaviors worth testing as **Given / When / Then**, grouped: happy path, loading, error, edge cases.
3. Flag which ones are **implementation details** and why they're weaker tests.
4. Mention the relevant tools by name (RTL queries by role, `userEvent`, mocking the network) and point to
   the Vitest / RTL links in `docs/README.md`.
5. Ask the student which three they'll write first.

## Don't

- Don't write test code, test file skeletons, or mock setups.
