# docs/ — what to read, and when

Reference material for this task. When a decision comes up, read the relevant entry here (or the official
docs it links), then make your choice and record a one-line justification in `CHANGELOG.md`.

- **[`TASK.md`](./TASK.md)** — the assignment: what to build, the feature/points breakdown, and penalties.
  Read this first.
- **[`advanced-hooks.md`](./advanced-hooks.md)** — curated links to the official advanced hooks & composition patterns documentation.
- **[`portals.md`](./portals.md)** — curated links to the official portals & modals documentation.

## Decision → reading map

| When you're deciding…                                            | Read                                                                                                                                                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Component API** (compound vs props-driven)                     | `advanced-hooks.md` → _Composition patterns_                                                                                                                                             |
| **Controlled vs uncontrolled** (per component)                   | `advanced-hooks.md` → _Composition patterns_                                                                                                                                             |
| **Imperative handle** (`useImperativeHandle`) — justified or not | `advanced-hooks.md` → _Refs and the DOM_                                                                                                                                                 |
| **`useDeferredValue` vs `useTransition`**                        | `advanced-hooks.md` → _Concurrent features_                                                                                                                                              |
| **Modal / popover** (portal, positioning, focus)                 | `portals.md` · `advanced-hooks.md` → _Layout and identity_, _Accessible widgets_                                                                                                         |
| **Custom-hook boundaries**                                       | `advanced-hooks.md` · [Reusing logic with custom hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)                                                                         |
| **Unit testing strategy** (keyboard, focus, hooks)               | [Vitest](https://vitest.dev/) · [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) · [user-event](https://testing-library.com/docs/user-event/intro) |
| **E2E scope & structure** (real keyboard/focus journeys)         | [Playwright](https://playwright.dev/docs/intro) · [Keyboard](https://playwright.dev/docs/input#keys-and-shortcuts)                                                                       |

> The feature requirements themselves live in `TASK.md`. This folder is for the **background reading** that
> helps you make the task's decisions yourself.
