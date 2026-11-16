# docs/ — what to read, and when

Reference material for this task. When a decision comes up, read the relevant entry here (or the official
docs it links), then make your choice and record a one-line justification in `CHANGELOG.md`.

- **[`TASK.md`](./TASK.md)** — the assignment: what to build, the feature/points breakdown, and penalties.
  Read this first.
- **[`nextjs.md`](./nextjs.md)** — curated reading on SSR/SSG, React Server Components, the Next.js App
  Router, next-intl and `next/image`, linking to the official documentation.

## Decision → reading map

| When you're deciding…                                                     | Read                                                                                                       |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Server vs client components** (where the `'use client'` boundary goes)  | `nextjs.md` → _React Server Components_ and _Server and Client Components_                                 |
| **Rendering strategy per route** (static/SSG vs dynamic/SSR)              | `nextjs.md` → _Understanding client and server rendering_ and _Caching and revalidating_                   |
| **Data operations** (server actions vs route handlers vs client fetching) | `nextjs.md` → _Server actions and forms_ and _Route handlers_ · `TASK.md` → FAQ                            |
| **URL & state model** for search, pagination and the selected item        | `nextjs.md` → _App Router_ (layouts and pages, `searchParams`, dynamic segments)                           |
| **i18n routing** (locale in the path or not; localized links)             | `nextjs.md` → _next-intl_                                                                                  |
| **External images** (`remotePatterns`, sizing)                            | `nextjs.md` → _Images_                                                                                     |
| **E2E scope & structure** (journeys, how the network is handled)          | [Playwright](https://playwright.dev/docs/intro) · [Web server](https://playwright.dev/docs/test-webserver) |

> The feature requirements themselves live in `TASK.md`. This folder is for the **background reading** that
> helps you make the task's decisions yourself.
