# RS React — Task 8 starter (Next.js SSR / SSG)

A pre-configured starter for **Task 8** of the RS School React course (AI era). You build a
**server-rendered app with Next.js (App Router)** from scratch — search results with a detail panel, an SSG
About page, a 404 page, i18n with next-intl, `next/image`, and a server-side CSV export — using **React
Server Components** and **server actions**, plus **end-to-end tests** (Playwright) —
**with an AI assistant coaching you**, not writing it for you.

- 📋 **What to build:** [`docs/TASK.md`](./docs/TASK.md) — full requirements, feature/points breakdown, penalties.
- 📚 **What to read:** [`docs/`](./docs/) — the task spec plus curated theory ([`docs/nextjs.md`](./docs/nextjs.md))
  and an index ([`docs/README.md`](./docs/README.md)) mapping each decision to its reading.
- 🤖 **How the AI must help you:** [`CLAUDE.md`](./CLAUDE.md) — the coaching contract (canonical).
- 📝 **Your decision log:** [`CHANGELOG.md`](./CHANGELOG.md) — **mandatory** (missing = -90 points).

## Quick start

This project uses **pnpm** (recommended). Install it once with `corepack enable` or from
<https://pnpm.io/installation>.

```sh
pnpm install     # install dependencies + set up Husky hooks
pnpm dev         # start the Next.js dev server
pnpm build       # production build (next build)
pnpm start       # serve the production build (next start)
pnpm typecheck   # generate route types + tsc --noEmit
pnpm e2e         # run Playwright end-to-end tests (builds + starts the production server)
pnpm lint        # ESLint (Next.js defaults)
pnpm format      # Oxfmt (check); pnpm format:fix to write
```

> First E2E run: `pnpm exec playwright install chromium` downloads the browser once.

## What's already set up

- **Next.js 16 (App Router) + React 19 + TypeScript** (`strict`, no `any`, no `ts-ignore`), scaffolded with
  `create-next-app` (`src/app/`, `@/*` import alias). `next.config.ts` keeps the scaffold defaults.
- **ESLint** (`eslint.config.mjs` — `eslint-config-next` core-web-vitals + TypeScript) as the linter. This
  task is the course's **Oxlint carve-out**: Next.js ships and documents its own ESLint config.
- **Oxfmt** (`.oxfmtrc.json`) as the formatter.
- **Playwright** for end-to-end tests (config in `playwright.config.ts`, specs in `e2e/`; a smoke spec is
  included). E2E runs against the **production server** (`pnpm build && pnpm start`).
- **No unit-test runner.** The task grades E2E only; add Vitest + RTL yourself if you want unit tests for
  client components or pure helpers (async server components are best covered by E2E).
- **Husky** hooks: pre-commit runs `verify:harness` + `lint` + `format`, pre-push runs
  `verify:harness` + `typecheck`. (E2E runs in CI, not in local hooks — browser downloads are heavy.)
- **Per-assistant enforcement hooks** (on top of the instruction files below):
  - **Claude Code** (`.claude/settings.json`): starts in **plan mode**, uses the course's **Coach** output
    style (`.claude/output-styles/coach.md`, part of the system prompt), and a `UserPromptSubmit` hook
    re-states the coaching contract each turn. Personal overrides go in `.claude/settings.local.json` (git-ignored).
  - **Codex** (`.codex/config.toml`): a `UserPromptSubmit` hook re-injects the same contract every turn
    (runs once you _trust_ the project in Codex).
  - **Cursor** (`.cursor/hooks.json`): the contract is always applied via `.cursor/rules/coaching.mdc`;
    a `beforeSubmitPrompt` hook additionally **blocks** if the instruction files have been stripped.
- **Coaching skills** (`.claude/skills/`, mirrored to `.agents/skills/`) — see [below](#coaching-skills).
- **Playwright MCP, opt-in** (`.mcp.json`, `.cursor/mcp.json`, `.codex/config.toml`) — see
  [below](#browser-mcp-playwright-opt-in).

## Working with your AI assistant

Whichever assistant you use follows the **same** coaching rules. **[`AGENTS.md`](./AGENTS.md) is the
cross-tool standard baseline** — the open [agents.md](https://agents.md) convention read by Codex, OpenCode,
Kiro, Windsurf, Amazon Q, Aider, Gemini, Zed, VS Code, and more. The other files below carry the **same full
rules** (not pointers) as redundancy for assistants that prefer their own file:

| Assistant                   | Instruction file                  |
| --------------------------- | --------------------------------- |
| **Any tool / the standard** | `AGENTS.md`                       |
| Claude                      | `CLAUDE.md` (canonical source)    |
| GitHub Copilot              | `.github/copilot-instructions.md` |
| Gemini                      | `GEMINI.md`                       |
| Cursor                      | `.cursor/rules/coaching.mdc`      |

**Using another assistant?** Whatever tool you use, point it at **`AGENTS.md`** (or `CLAUDE.md`) — the same
coaching rules apply no matter which file loaded. Convenience hooks (plan-mode default, a per-turn reminder,
a tamper tripwire) ship for Claude/Codex/Cursor, but the rules **don't depend on them**.

The assistant will: **not** write the whole app; ask you to **plan first**; at each decision point lay out
the **options + the criteria to weigh them + what to read** in `docs/`, then let **you choose and justify**
(it will decline "just build it" **and** "which is better? / you decide" — it won't hand you the pick);
and record every decision in `CHANGELOG.md`. You own the code and must be able to explain every line.

> This repo ships a **coaching-harness integrity check** (`pnpm verify:harness`, run by the Husky hooks
> and CI): it confirms the instruction files and the in-code `AI-COACH-RULES` notes are present. Removing
> them is not the assignment — the check will fail your commit, and it's visible in review.

## Coaching skills

Slash-command helpers that **coach, never implement** — they report findings, point to the reading and ask
you questions; you make the changes. You run them on purpose (`/review`, `/quiz-me`, …); the AI can suggest
them but never triggers them by itself.

| Always available      | What it does                                                                   |
| --------------------- | ------------------------------------------------------------------------------ |
| `/explain [concept]`  | Explains a concept with a small example unrelated to your task + where to read |
| `/options [decision]` | Options + criteria + reading for a decision — you pick                         |
| `/review [path]`      | Findings on your changes (severity, rule, reading) — no rewrites               |
| `/test-ideas`         | Behaviors worth testing (Given/When/Then) — no test code                       |
| `/debug-coach`        | Hypotheses + what to inspect — not the fix                                     |
| `/quiz-me`, `/defend` | Self-check and a mock cross-check on your own code                             |
| `/log-decision`       | Drafts the `CHANGELOG.md` entry from **your** words                            |

**Topic skills** (`/hooks-review`, `/routing-review`, `/state-review`, `/query-review`, `/a11y-review`,
`/composition-review`, `/forms-review`, `/perf-review`, `/rsc-review`, `/e2e-review`) are switched on per task
in `.claude/settings.json` → `skillOverrides`. Turn on others for yourself in the git-ignored
`.claude/settings.local.json`:

```json
{ "skillOverrides": { "a11y-review": "on" } }
```

Skills used for a step are noted in `CHANGELOG.md`. Assistants other than Claude Code read the same skills
from `.agents/skills/`; the coaching rules are written into each skill, so they apply there too.

## Browser MCP (Playwright, opt-in)

Lets your assistant **open the running app** to inspect it — accessibility tree, console, network — so it can
help you debug and explore role-based locators. It is **off until you enable it**, pinned to one version,
headless, and configured with `--codegen none`.

- **Claude Code:** asks for approval the first time (`.mcp.json`).
- **Cursor:** enable `playwright` under _Settings → MCP_ (`.cursor/mcp.json`).
- **Codex:** shipped with `enabled = false`; run `codex -c mcp_servers.playwright.enabled=true` to opt in.
- **VS Code / Copilot:** discovers `.mcp.json` in trusted workspaces; disable it for yourself via
  _MCP: List Servers_.

> It will **not write your E2E tests** — those are graded work. Playwright's test agents
> (`npx playwright init-agents`: planner / generator / healer) are not allowed here, and the harness check
> fails if their files appear.
