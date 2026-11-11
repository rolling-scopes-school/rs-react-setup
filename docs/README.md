# docs/ — what to read, and when

Reference material for this task. When a decision comes up, read the relevant entry here (or the official
docs it links), then make your choice and record a one-line justification in `CHANGELOG.md`.

- **[`TASK.md`](./TASK.md)** — the assignment: what to build, the feature/points breakdown, and penalties.
  Read this first.
- **[`state-management.md`](./state-management.md)** — curated links to the official Redux Toolkit / Zustand documentation.
- **[`context-api.md`](./context-api.md)** — curated links to the official React Context documentation.
- **[`router.md`](./router.md)** — curated links to the official React Router documentation.

## Decision → reading map

| When you're deciding…                                             | Read                                                                                                                   |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **State library** (Redux Toolkit vs Zustand)                      | `state-management.md` → _Theory_ (both paths) and _Questions to weigh_                                                 |
| **Store shape / slices** and selectors                            | `state-management.md` → your library's guide                                                                           |
| **Context vs store** (theme vs cart)                              | `context-api.md` → _Understanding Context API_                                                                         |
| **Cart persistence** (middleware vs custom hook)                  | `state-management.md` → your library's docs                                                                            |
| **Router** (light; React Router / TanStack Router / none)         | `router.md`                                                                                                            |
| **Unit testing strategy** (store, components, context)            | [Vitest](https://vitest.dev/) · [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) |
| **E2E scope & structure** (journeys, isolation, network stubbing) | [Playwright](https://playwright.dev/docs/intro) · [Mock APIs](https://playwright.dev/docs/mock)                        |

> The feature requirements themselves live in `TASK.md`. This folder is for the **background reading** that
> helps you make the task's decisions yourself.
