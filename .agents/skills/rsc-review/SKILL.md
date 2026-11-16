---
name: rsc-review
description: Review server/client boundaries and rendering strategy — use client placement, server data fetching, caching, secrets — plus the Next.js task's server actions, CSV export, next-intl, next/image, SSG About and 404. Use in the Next.js SSR/SSG task.
disable-model-invocation: true
disallowed-tools: Edit Write NotebookEdit
---

<!-- COACH-SKILL — coaching mode; do not remove (checked by scripts/verify-harness.mjs) -->

> **Coaching mode — read first.** This is a teaching repo (see `AGENTS.md` / `CLAUDE.md`). This skill helps
> the student **learn**; it never implements the task for them. The decision gate still applies: never hand
> over the pick for a task decision or its justification, and never write or rewrite the student's feature
> code or tests. Report **finding → rule → where to read (`docs/` or the official docs) → a question back**,
> and let the student make the change.

# /rsc-review

Review only what exists; skip sections the student hasn't built yet. Where a check depends on a decision
(rendering strategy, i18n routing, where search state lives), compare the code against the choice logged in
`CHANGELOG.md` — never against a choice of your own.

## Checklist

### Server/client boundary

- **`'use client'`** only where interactivity or browser APIs need it, as low in the tree as possible.
- **Data fetching** on the server where possible; no client fetch of data the server already has.
- **Props across the boundary** are serializable.
- **Secrets** never reach client components; env vars scoped correctly (no secrets behind `NEXT_PUBLIC_`).

### Rendering & caching

- **Rendering strategy** (static, dynamic, revalidated) matches the decision logged in `CHANGELOG.md`.
- **Caching/revalidation** explicit; no accidental full-dynamic pages (what does `cacheComponents` change?).
- **About page** is a server component with no client-side data fetching, and really ends up static —
  check the `next build` route output.
- **Search results page:** the first response already contains the results list and the detail-panel
  container (server-rendered), not an empty shell filled in on the client.

### Server actions & route handlers

- **Search submissions** go through a server action / server function, not an ad-hoc client `fetch`.
- **Selecting an item** triggers server-side fetching of its detail (server component or server function).
- **Action state** (`useActionState`, pending state, returned errors) is typed and shown to the user.
- **Server actions validate their input** — they are public endpoints, whatever the UI allows.
- **CSV export** is built on the server (server action or route handler) and sent with a correct
  `Content-Type` and `Content-Disposition`; values are escaped (commas, quotes, newlines).

### Routing, 404 & metadata

- **Shared root layout** used by all pages; per-page metadata where it matters.
- **Unknown routes** show the 404 page (`not-found`), including under each locale if the app uses locale
  segments; `notFound()` used for missing items.
- **Loading / error** states handled with the framework's conventions.

### i18n (next-intl)

- **At least two languages**; UI texts come from messages, not hard-coded strings.
- **Language switcher** is a client component and keeps the current page when switching.
- **Every navigation link** uses the `createNavigation` helpers (`Link`, `redirect`, `useRouter`) — no
  plain `next/link` or hard-coded locale prefixes.
- **Static rendering** still works with the chosen i18n setup (locale available to server components;
  static params for localized static pages where the strategy calls for it).

### Images

- **Every image** uses `next/image`, with meaningful `alt` text and a size (`width`/`height` or `fill` +
  `sizes`).
- **External hosts** are listed in `images.remotePatterns`, scoped no wider than needed; no custom loader
  without a reason.

Reading: `docs/nextjs.md` → _Server and Client Components_, _Caching and revalidating_, _Server actions and
forms_, _Route handlers_, _App Router_, _next-intl_, _Images_ (each links the official docs).
