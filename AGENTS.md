# AI Agent Guidelines for chaitanyashinde.dev

Next.js 16 (App Router) portfolio website.

**Stack**: TypeScript, Tailwind CSS v4, shadcn/ui, npm, Vercel

## Project Structure

| Directory                              | Purpose                                                     |
| -------------------------------------- | ----------------------------------------------------------- |
| `src/app/`                             | App Router pages, layouts, API routes                       |
| `src/components/`                      | Shared UI components                                        |
| `src/registry/`                        | Reusable visual primitives still used by the portfolio      |
| `src/features/`                        | Portfolio feature module                                    |
| `src/config/`                          | Site configuration                                          |
| `src/hooks/`, `src/lib/`, `src/utils/` | Hooks, libraries, utilities                                 |

**Key files**: `components.json` (shadcn config), `src/features/portfolio/data/` (portfolio data), `.env.example` (env vars)

## Scope

This codebase has been reduced to a personal portfolio. If you add new features, prefer keeping them inside `src/features/portfolio/` or `src/components/` unless there is a strong reason to reintroduce heavier content or registry systems.

## Coding Guidelines

- TypeScript strict mode; explicit types when necessary
- kebab-case file naming
- Descriptive names; comments only for "why", not "what"
- No emojis in code, comments, or commit messages
- Tailwind CSS v4 syntax; support dark/light modes
- Follow SOLID principles

## Commands

```bash
npm run dev             # Dev server
npm run build           # Production build
npm run lint            # ESLint
npm run format:write    # Prettier
npm run check-types     # Type checking
```
