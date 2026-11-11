# State Management 🌟

> ℹ️ Copied from the course theory module for offline reference inside this starter. The links below go to
> the **official documentation** — read them when a decision in `TASK.md` depends on understanding state management.

## Module Overview 📚

This module introduces students to modern state management solutions in React applications. Students will learn about two popular approaches: Redux Toolkit and Zustand. The module covers core principles of state management and gives students the questions to ask when deciding which solution fits their needs.

## Learning Objectives 🎯

Students will:

- Understand the principles of state management in React applications
- Learn about different state management approaches and their trade-offs
- Master either Redux Toolkit or Zustand for managing application state
- Implement proper state organization and data flow patterns
- Learn to use React Context API for theme management

## Approximate Module Completion Time ⏱️

- **6 hours**

## Theory 📖

Students are encouraged to study the following resources based on their chosen state management solution:

1. **Redux Toolkit Path:**

   - [Redux Essentials](https://redux.js.org/tutorials/essentials/part-1-overview-concepts) - 3 hours
   - [Why Redux Toolkit is How To Use Redux Today](https://redux-toolkit.js.org/introduction/why-rtk-is-redux-today) - 1 hour
   - [Redux Toolkit Getting Started](https://redux-toolkit.js.org/introduction/getting-started) - 1 hour
   - [Redux DevTools Extension](https://redux.js.org/tutorials/fundamentals/part-6-async-logic#redux-devtools-extension) - 30 minutes

2. **Zustand Path:**

   - [Zustand Introduction](https://zustand.docs.pmnd.rs/getting-started/introduction) - 1 hour
   - [Zustand Tutorial](https://zustand.docs.pmnd.rs/guides/updating-state) - 2 hours
   - [Zustand Best Practices](https://zustand.docs.pmnd.rs/guides/practice-with-no-store-actions) - 1 hour
   - [Zustand TypeScript Guide](https://zustand.docs.pmnd.rs/guides/typescript) - 1 hour

3. **Context API (Required for all):**
   - [React Context](https://react.dev/learn/passing-data-deeply-with-context) - 1 hour

## Additional Resources 📘

### Redux Toolkit Resources

- [Redux Principles](https://redux.js.org/introduction/three-principles)
- [Redux Fundamentals](https://redux.js.org/tutorials/fundamentals/part-1-overview)
- [React Redux Hooks](https://react-redux.js.org/api/hooks)

### Zustand Resources

- [Zustand Comparison](https://zustand.docs.pmnd.rs/getting-started/comparison)
- [Zustand Testing](https://zustand.docs.pmnd.rs/guides/testing)

### General State Management

- [State Management in React](https://www.patterns.dev/posts/state-management)
- [Choosing the Right State Management Solution](https://react.dev/learn/choosing-the-state-structure)

## Questions to weigh (you decide)

> This copy replaces the course module's pros/cons and "use X if…" lists with **questions**: the choice
> and its justification are yours to make and write down in `CHANGELOG.md`.

- **Structure vs boilerplate:** how much setup are you willing to write, and how much do you want the
  library's conventions (slices, actions, reducers) to shape your code?
- **Selective subscriptions:** how does each library let a component subscribe to only the part of the state it
  reads (selectors)? How will you check that adding an item doesn't re-render unrelated UI?
- **Immutability:** how does each one keep updates immutable (Immer inside Redux Toolkit reducers, `set` in
  Zustand)? What does an accidental direct mutation look like in each?
- **Tooling:** which DevTools and middleware (e.g. persistence) do you need, and what does each library offer?
- **Testing:** how will you test the store/slice in isolation, and how do you reset store state between tests?
- **Pairing:** the query library in the Data Queries task pairs with this choice (Redux Toolkit → RTK Query,
  Zustand → TanStack Query). Does that matter to you?
