# Query Solutions 🌟

> ℹ️ Copied from the course theory module for offline reference inside this starter. The links below go to
> the **official documentation** — read them when a decision in `TASK.md` depends on understanding data fetching and caching.

## Module Overview 📚

This module introduces students to modern data fetching and caching solutions in React applications. Based on their state management choice, students will learn either RTK Query (for Redux Toolkit users) or TanStack Query (for Zustand users). Both solutions provide powerful tools for managing server state, caching, and data synchronization.

## Learning Objectives 🎯

Students will:

- Understand the difference between client and server state
- Learn about data fetching, caching, and invalidation strategies
- Master either RTK Query or TanStack Query for API integrations
- Implement efficient data loading and error handling patterns
- Learn to manage loading and error states effectively

## Approximate Module Completion Time ⏱️

- **6 hours**

## Theory 📖

Students are encouraged to study the following resources based on their chosen query solution:

1. **RTK Query Path (for Redux Toolkit users):**

   - [RTK Query Overview](https://redux-toolkit.js.org/rtk-query/overview) - 1 hour
   - [RTK Query Quick Start](https://redux-toolkit.js.org/tutorials/rtk-query) - 1 hour
   - [RTK Query Usage Guide](https://redux-toolkit.js.org/rtk-query/usage/queries) - 2 hours
   - [RTK Query Mutations](https://redux-toolkit.js.org/rtk-query/usage/mutations) - 1 hour

2. **TanStack Query Path (for Zustand users):**
   - [TanStack Query Overview](https://tanstack.com/query/latest/docs/framework/react/overview) - 1 hour
   - [TanStack Query Quick Start](https://tanstack.com/query/latest/docs/framework/react/quick-start) - 1 hour
   - [TanStack Query Guide](https://tanstack.com/query/latest/docs/framework/react/guides/queries) - 2 hours
   - [TanStack Query Mutations](https://tanstack.com/query/latest/docs/framework/react/guides/mutations) - 1 hour

## Additional Resources 📘

### RTK Query Resources

- [RTK Query Cache Behavior](https://redux-toolkit.js.org/rtk-query/usage/cache-behavior)
- [RTK Query Polling](https://redux-toolkit.js.org/rtk-query/usage/polling)
- [RTK Query Error Handling](https://redux-toolkit.js.org/rtk-query/usage/error-handling)

### TanStack Query Resources

- [TanStack Query Caching](https://tanstack.com/query/latest/docs/framework/react/guides/caching)
- [TanStack Query Suspense](https://tanstack.com/query/latest/docs/framework/react/guides/suspense)
- [TanStack Query Testing](https://tanstack.com/query/latest/docs/framework/react/guides/testing)

### General Resources

- [Data Fetching in React](https://react.dev/learn/synchronizing-with-effects#fetching-data)

## Questions to weigh (you decide)

> This copy replaces the course module's pros/cons and "use X if…" lists with **questions**: the choice
> and its justification are yours to make and write down in `CHANGELOG.md`.

- **Coupling with your store:** the course pairs Redux Toolkit → RTK Query and Zustand → TanStack Query. Which
  store are you using, and what does that pairing imply for setup?
- **Cache identity:** how does each library decide two requests are "the same data" (query keys vs endpoints +
  arguments + tags)?
- **Freshness:** which option controls how long cached data is reused (`staleTime`/`gcTime` vs
  `keepUnusedDataFor`/`refetchOnMountOrArgChange`), and which one maps to your configurable cache TTL?
- **Invalidation:** what does "refresh" mean in each (`invalidateQueries`/`refetch` vs tag invalidation/`refetch`),
  and what exactly gets refetched?
- **Loading vs fetching:** how does each library tell a first load apart from a background refetch, and what
  should your UI show in each case?
- **Testing:** how do you give each test a fresh client/store and mock the network (MSW or Vitest mocks)?
