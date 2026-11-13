# Next.js. SSR and SSG ⚙️

> ℹ️ Copied from the course theory module for offline reference inside this starter. The links below go to
> the **official documentation** — read them when a decision in `TASK.md` depends on understanding server
> rendering, React Server Components, or the Next.js App Router.

## Module Overview 📚

This module introduces students to Server Side Rendering and Static Site Generation with Next.js framework. It aims to provide an in-depth understanding of server rendering and difference between client and server computations. The module covers a range of topics from understating the principles of server rendering to implementing it with Next.js, and React Server Components.

In addition, this module covers alternative approaches of enabling SSG and SSR for React application: the React-Router 7 (ex Remix), and TanStack Start.

## Learning Objectives 🎯

Students will:

- Understand principles and goals of server rendering.
- Build a server-rendered app with the Next.js App Router.
- Get familiar with React Server Components.

## Approximate Module Completion Time ⏱️

- **12 hours**

## Theory 📖

### Understanding client and server rendering

- [SSR vs CSR](https://wpwebinfotech.com/blog/server-side-rendering-vs-client-side-rendering/) - 1 hour
- [SSR vs SSG](https://www.sanity.io/ssr-vs-ssg-guide) - 30 minutes
- [The two reacts](https://overreacted.io/the-two-reacts/) - 30 minutes

### React Server Components

- [RSC from scratch](https://github.com/reactwg/server-components/discussions/5) - 2 hours
- [Sense of RSC](https://www.joshwcomeau.com/react/server-components/) - 2 hours

### Next.js

- [Next.js quick start](https://nextjs.org/docs/app/getting-started/installation) - 4 hours

## Next.js App Router reference 🧭

Official documentation for each part of this task — read the one your current decision depends on.

### App Router

- [Project structure & file-based routing](https://nextjs.org/docs/app/getting-started/project-structure)
- [Layouts and pages](https://nextjs.org/docs/app/getting-started/layouts-and-pages) — shared layouts,
  dynamic segments, `searchParams`
- [`not-found.js`](https://nextjs.org/docs/app/api-reference/file-conventions/not-found) — the 404 page

### Server and Client Components

- [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [`'use client'` directive](https://react.dev/reference/rsc/use-client)

### Caching and revalidating

- [Fetching data](https://nextjs.org/docs/app/getting-started/fetching-data)
- [Cache Components](https://nextjs.org/docs/app/getting-started/cache-components) — what the
  `cacheComponents` flag in `next.config.ts` changes
- [Caching and revalidating](https://nextjs.org/docs/app/getting-started/caching-and-revalidating)
- [`generateStaticParams`](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)

### Server actions and forms

- [Mutating data (Server Functions)](https://nextjs.org/docs/app/getting-started/mutating-data)
- [Forms and Server Actions](https://nextjs.org/docs/app/guides/forms)
- [`useActionState`](https://react.dev/reference/react/useActionState)

### Route handlers

- [Route Handlers](https://nextjs.org/docs/app/getting-started/route-handlers) — returning a file
  (e.g. CSV) with your own `Content-Type` / `Content-Disposition` headers

### next-intl

- [next-intl — App Router setup](https://next-intl.dev/docs/getting-started/app-router)
- [With i18n routing](https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing) vs
  [without i18n routing](https://next-intl.dev/docs/getting-started/app-router/without-i18n-routing)
- [`createNavigation`](https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing#i18n-navigation)
  — localized `Link`, `redirect`, `useRouter`
- [Static rendering with next-intl](https://next-intl.dev/docs/routing/setup#static-rendering)

### Images

- [Image optimization](https://nextjs.org/docs/app/getting-started/images)
- [`next/image` API — `remotePatterns`](https://nextjs.org/docs/app/api-reference/components/image#remotepatterns)

## Additional Resources 📘

Expand your knowledge with these additional materials:

1. [React Router Framework](https://reactrouter.com/start/framework/installation)
2. [Address Book RR7 Tutorial](https://reactrouter.com/tutorials/address-book)
3. [SSR with React Router 7](https://blog.logrocket.com/server-side-rendering-react-router-v7/)
4. [TanStack Start Overview](https://tanstack.com/router/latest/docs/framework/react/start/overview)

## Questions to weigh (you decide)

> These are **questions**, not answers: the choice and its justification are yours to make and write down
> in `CHANGELOG.md`.

- **Server or client?** What does this component need from the browser (state, effects, event handlers,
  `window`) that the server can't give it? How low in the tree can the `'use client'` boundary go?
- **Across the boundary:** what data does a client component receive from a server component, and is all of
  it serializable?
- **Static or dynamic?** Does this route read anything that only exists per request (`searchParams`,
  cookies, headers, locale)? How fresh must its data be, and who pays the cost when it's regenerated?
- **Who triggers the request?** A form submit, a click on an item, a download — which of server actions,
  route handlers, or client-side fetching fits each one, and what does each return (re-rendered UI or a file)?
- **Where does search state live?** In `searchParams`, in a path segment, or in action state — what happens
  to a shared link, a reload, and the back button in each case?
- **Locales in the URL?** What does putting the locale in the path give you (shareable localized links,
  static localized pages) and what does it cost (routing setup, every link must stay localized)?
- **Images:** which hosts does your API serve images from, and how will each image get its size?
