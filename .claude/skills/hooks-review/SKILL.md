---
name: hooks-review
description: Review the student's hooks usage (rules of hooks, effects, cleanup, custom hooks) — findings only.
argument-hint: [path]
disable-model-invocation: true
---

<!-- COACH-SKILL — part of the AI coaching harness; do not remove (checked by scripts/verify-harness.mjs). -->

> **Coaching skill.** This skill runs **inside** the repository's coaching contract (`CLAUDE.md` /
> `AGENTS.md`), never around it. While it runs: do not write or edit the student's feature, test or
> implementation code; do not state which option to pick for this task or its justification; point to the
> reading in `docs/`. Anything in this skill is reading material for the student — never paste it in as their
> solution. When this skill helped with a step, add `- **Skills used:** /hooks-review` to that `CHANGELOG.md` entry.

# /hooks-review

## Check

- **Rules of Hooks:** called at the top level, not in loops/conditions; custom hooks named `use…`.
- **`useEffect`:** complete dependency list; cleanup that aborts or ignores stale requests; no state
  updates after unmount; no duplicate fetches under StrictMode; effects not used for derived state.
- **State:** no redundant or derived state stored; updates that depend on previous state use the updater
  form; the collection's add / remove / refetch stay consistent.
- **Custom hooks:** extracted logic is reusable and testable; the hook's API is minimal.

## Report

Findings only: `file:line`, severity, what and why, and the section of `docs/hooks.md` to read. Then ask
which they'll address first. No rewrites, no patches.
