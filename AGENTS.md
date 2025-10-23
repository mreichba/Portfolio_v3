# AGENTS.md (for Codex CLI)

Define a small team of focused agents. Each has a role, context, guardrails, and deliverables.

## 1. Architect Agent

**Goal**: Create/validate file structure, config, providers, and routing.
**Input**: This PLAN, Site Map, Component Tree.
**Deliverables**:

- `src/main.tsx`, `src/App.tsx`, `src/routes/*`
- `src/providers/ThemeProvider.tsx`
- `src/layout/{Header,Footer,PageShell}.tsx`
- Tailwind + shadcn/ui set up; dark mode toggle

**Guardrails**: A11y first; strict TS; no global mutable state; small composable components.

## 2. UI Kit Agent

**Goal**: Implement design system using Tailwind + shadcn/ui wrappers.
**Deliverables**: `ui/Button.tsx`, `ui/Card.tsx`, `ui/Badge.tsx`, `ui/Tooltip.tsx`, `ui/Tabs.tsx`, `ui/Separator.tsx`.
**Guardrails**: No hardcoded colors in components—use tokens.

## 3. Content Agent

**Goal**: Migrate projects from Portfolio2 into JSON/MDX.
**Deliverables**: `src/content/projects/*.json` + images in `/public/images/projects/`.
**Guardrails**: Verify all links (demo, client, server); write succinct summaries.

## 4. Pages Agent

**Goal**: Build routes/pages using UI kit + content.
**Deliverables**: `Home`, `Projects`, `ProjectCase`, `About`, `Contact`.
**Guardrails**: Lighthouse ≥95; mobile-first; keyboard nav tested.

## 5. Motion & Polish Agent

**Goal**: Add tasteful animations & micro-interactions (Framer Motion).
**Deliverables**: Hero reveal, card tilt, chip animations.
**Guardrails**: Respect prefers-reduced-motion; 16ms frame budget.

## 6. QA Agent

**Goal**: Verify a11y, performance, SEO; run audits and fix.
**Deliverables**: Lighthouse report, axe pass, HTML validation.
