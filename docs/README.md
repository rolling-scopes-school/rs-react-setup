# docs/ — what to read, and when

Reference material for this task. When a decision comes up, read the relevant entry here (or the official
docs it links), then make your choice and record a one-line justification in `CHANGELOG.md`.

- **[`TASK.md`](./TASK.md)** — the assignment: what to build, the feature/points breakdown, and penalties.
  Read this first.
- **[`forms.md`](./forms.md)** — curated links to the official forms documentation.
- **[`state-management.md`](./state-management.md)** — curated links to the official Redux Toolkit / Zustand documentation.
- **[`portals.md`](./portals.md)** — curated links to the official portals & modals documentation.
- **[`advanced-hooks.md`](./advanced-hooks.md)** — curated links to the official modal, combobox, controlled vs uncontrolled documentation.

## Decision → reading map

| When you're deciding…                                        | Read                                                                                                                                                                                                     |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Validation library** (Zod vs Yup — one schema, both forms) | [Zod](https://zod.dev/) · [Yup](https://github.com/jquense/yup) · [React Hook Form](https://react-hook-form.com/)                                                                                        |
| **State library** for submissions + countries                | `state-management.md` → _Questions to weigh_                                                                                                                                                             |
| **Uncontrolled strategy** (`FormData` vs refs)               | `forms.md` → _Controlled and uncontrolled form elements_                                                                                                                                                 |
| **Modal & autocomplete** — reuse or rebuild                  | `advanced-hooks.md` → _Accessible widgets_ · `portals.md`                                                                                                                                                |
| **Image upload → base64**                                    | [FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL)                                                                                                                  |
| **Unit testing strategy** (forms, store, utilities)          | [Vitest](https://vitest.dev/) · [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) · [user-event upload](https://testing-library.com/docs/user-event/utility#upload) |
| **E2E scope & structure** (forms, errors, upload)            | [Playwright](https://playwright.dev/docs/intro) · [Upload files](https://playwright.dev/docs/input#upload-files)                                                                                         |

> The feature requirements themselves live in `TASK.md`. This folder is for the **background reading** that
> helps you make the task's decisions yourself.
