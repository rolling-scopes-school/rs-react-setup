# docs/ — what to read, and when

Reference material for this task. When a decision comes up, read the relevant entry here (or the official
docs it links), then make your choice and record a one-line justification in `CHANGELOG.md`.

- **[`TASK.md`](./TASK.md)** — the assignment: what to build, the feature/points breakdown, and penalties.
  Read this first.
- **[`queries.md`](./queries.md)** — curated links to the official RTK Query / TanStack Query documentation.
- **[`state-management.md`](./state-management.md)** — curated links to the official Redux Toolkit / Zustand documentation.
- **[`router.md`](./router.md)** — curated links to the official React Router documentation.

## Decision → reading map

| When you're deciding…                                                   | Read                                                                                                                                                   |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Query library** (RTK Query vs TanStack Query — must match your store) | `queries.md` → _Theory_ and _Questions to weigh_                                                                                                       |
| **State library** for client state (Redux Toolkit vs Zustand)           | `state-management.md` → _Questions to weigh_                                                                                                           |
| **Cache strategy / TTL** (configurable via env)                         | `queries.md` → _Additional Resources_ (caching) · [Vite env variables](https://vite.dev/guide/env-and-mode)                                            |
| **Invalidation approach** (refetch vs invalidate)                       | `queries.md` → your library's docs · `TASK.md` → FAQ                                                                                                   |
| **Router** (light; React Router / TanStack Router / none)               | `router.md`                                                                                                                                            |
| **Unit testing strategy** (loading, error, caching)                     | [Vitest](https://vitest.dev/) · [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) · [MSW](https://mswjs.io/docs/) |
| **E2E scope & structure** (journeys, network stubbing)                  | [Playwright](https://playwright.dev/docs/intro) · [Mock APIs](https://playwright.dev/docs/mock)                                                        |

> The feature requirements themselves live in `TASK.md`. This folder is for the **background reading** that
> helps you make the task's decisions yourself.
