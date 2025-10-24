# Portfolio v3 — Project Plan

A modern, professional, and playful developer portfolio built with **React + Vite**—fast, accessible, and easy to maintain. This plan gives you:

- A clear **site map** and **component tree**
- **Visual direction** (color, type, motion)
- A **content model** (JSON-driven projects)
- A pragmatic **build pipeline** (Vite, Tailwind, shadcn/ui)
- **AGENTS.md** to drive your Codex CLI workflow (scaffold → implement → verify → deploy)
- Checklists for **accessibility, performance, and SEO**

---

## 1) Site Map

- **/** — Home (Hero, Projects spotlight, Skills, CTA)
- **/projects** — All Projects grid + filters (tags: React, Go, Node, Postgres, etc.)
- **/projects/:slug** — Case Study pages (problem → approach → stack → results → links)
- **/about** — Bio, values, timeline, certifications, hobbies (fun but tasteful)
- **/contact** — Direct email/CTA, calendar link (optional), social links
- **/now** _(optional)_ — What I’m doing now
- **/uses** _(optional)_ — Dev environment & tools page

> Keep routes file-based and code-split: lazy-load non-home routes.

---

## 2) Component Tree (high level)

```
App
 ├─ providers/
 │   ├─ ThemeProvider (light/dark, system)
 │   ├─ TooltipProvider
 │   └─ Router
 ├─ layout/
 │   ├─ Header (brand, nav, theme toggle)
 │   ├─ Footer (links, email, social)
 │   └─ PageShell (max-w, grid, skip-link)
 ├─ sections/
 │   ├─ Hero (value-prop + CTA + subtle motion)
 │   ├─ ProjectSpotlight (carousel or featured cards)
 │   ├─ Skills (icon badges)
 │   └─ Testimonials (optional)
 ├─ projects/
 │   ├─ ProjectCard (tilt on hover, tag chips)
 │   ├─ ProjectGrid (filters; search; SSR-friendly data fetch later)
 │   └─ ProjectCase (MDX or JSON → JSX)
 ├─ ui/ (shadcn/ui wrappers)
 │   ├─ Button, Badge, Card, Dialog, Tabs, Tooltip, Separator
 │   └─ Icon (lucide-react)
 └─ util/
     ├─ analytics.ts
     ├─ seo.ts (meta, OpenGraph, schema)
     └─ a11y.ts (helpers like generateSkipLinks)
```

---

## 3) Visual Direction

**Tone**: crisp, confident, friendly.

- **Color**: Muted dark on light with a deep accent.
  - Base: `#0B1020` (ink), `#F7F9FC` (paper)
  - Accent: `#4F46E5` (indigo) + `#22D3EE` (cyan) for micro-accents

- **Type**: Inter (UI) + JetBrains Mono (code snippets). Vary weights.
- **Motion**: Small, intentional. Card lift on hover, 150–200ms ease-out; fade-up on section reveal with Framer Motion (reduced-motion respected).
- **“Fun” without gimmicks**: Easter egg (Konami = sparkle trail), interactive project card tilt, animated tag chips.
- **Backgrounds**: Soft radial gradient or subtle noise, not heavy textures.

---

## 4) Content Model

All projects defined in `src/content/projects/*.json` and imported via Vite glob:

```json
{
  "slug": "live-alert",
  "title": "Live Alert",
  "summary": "Safety app that shares GPS location with trusted contacts.",
  "highlights": ["React", "Node", "Express", "PostgreSQL", "Vercel", "Render"],
  "links": {
    "demo": "https://live-alert-app.vercel.app",
    "client": "https://github.com/mreichba/Live-Alert-Client",
    "server": "https://github.com/mreichba/Live-Alert-Server"
  },
  "cover": "/images/projects/live-alert.png",
  "role": "Full-stack engineer",
  "problem": "Users need a lightweight way to alert trusted contacts during emergencies.",
  "approach": "React front end with authenticated flows; Node/Express APIs; PostgreSQL; server deployed on Render; client on Vercel; alert workflow with geolocation.",
  "results": ["MVP shipped in days", "Clean, testable endpoints", "Deployed on modern free tiers"],
  "stack": ["React", "TypeScript", "Node", "Express", "PostgreSQL"],
  "tags": ["react", "node", "postgres", "fullstack"]
}
```

Repeat for **Matrix Quiz**, **French Spaced Repetition**, **Someone Like You (SLY)**, and any new Go/TS work.

---

## 5) Build Pipeline (commands)

```bash
# 0) Create project
npm create vite@latest portfolio-v3 -- --template react-ts
cd portfolio-v3

# 1) Tooling
npm i -D tailwindcss postcss autoprefixer @types/node
npx tailwindcss init -p

# 2) shadcn/ui + icons + motion
npm i class-variance-authority clsx tailwind-merge lucide-react framer-motion
npm i -D @types/react @types/react-dom

# 3) Analytics (optional) and SEO helpers
npm i next-seo tiny-invariant

# 4) Linting/format
npm i -D eslint @types/eslint prettier eslint-config-prettier eslint-plugin-react eslint-plugin-tailwindcss

# 5) Dev
npm run dev
```

**Tailwind config**: enable `darkMode: 'class'`, add container + custom colors.
**shadcn/ui**: generate components and wrap in your own `ui/` directory.

---

## 6) Page Copy (draft)

**Hero**

> _I design & ship reliable web apps._
> Full‑stack engineer focused on React, Go, and cloud‑native tooling.

CTA: **View Projects** (primary) · **Get in Touch** (ghost)

**Projects section**

- 3–6 featured cards; each: short value statement + tags + quick links (Demo / Code)

**About**

- One paragraph bio + values grid (Craft, Clarity, Curiosity) + a small personal slice (gardening, cars, music)

**Contact**

- Email, GitHub, LinkedIn. Optional Calendly embed.

---

## 7) Case Study Template (MDX-friendly)

```md
# {Title}

> One-liner: {What this does and why it matters}

## Problem

Context and constraints.

## Approach

Architecture, key decisions, trade-offs, testing.

## Results

Impact; include numbers if possible.

## Stack

Badges: React · Go · Postgres · Vercel · Render · Neon

## Links

Demo · Client Code · Server Code
```

---

## 8) Accessibility, Performance, SEO Checklists

**A11y**

- Focus styles visible; skip-to-content link
- Color contrast AA+; semantic landmarks
- `prefers-reduced-motion` respected
- All images with `alt` or `aria-hidden`

**Performance**

- Vite code-splitting, lazy routes; compress images (AVIF/WebP)
- Use `react-helmet-async` or manual meta for titles/OG tags
- Lighthouse targets: Perf 95+, A11y 100, Best Practices 100, SEO 100

**SEO**

- Unique meta on each route; JSON-LD for `Person` and `Project`
- Pretty slugs; OpenGraph preview images per page

---

## 9) Deployment

- **Preferred**: Vercel (preview deployments per PR, image optimization)
- **Alternative**: GitHub Pages (static export) — keep SPA 404 redirect handling

---

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

---

## Codex CLI Prompts (examples)

**Bootstrap repo**

```
You are the Architect Agent. Use the Project Plan and Site Map to scaffold a React + Vite + TS app named `portfolio-v3`.
- Add Tailwind and set darkMode:'class'.
- Add shadcn/ui wrappers in src/ui.
- Implement Header with theme toggle and active nav states.
- Add routes: /, /projects, /projects/:slug, /about, /contact (lazy-load non-home).
- Create a sample project JSON and render ProjectCard grid.
- Include basic SEO meta helpers and a skip-link.
- Ensure ESLint + Prettier configs are included.
Return a diff or file list with contents.
```

**Migrate content**

```
You are the Content Agent. Import projects from my old portfolio into JSON files.
Fields: slug, title, summary, highlights, links{demo,client,server}, cover, problem, approach, results, stack, tags.
Write concise summaries; validate all URLs. Provide the files.
```

**Polish animations**

```
You are the Motion & Polish Agent. Add Framer Motion reveal to Hero, subtle hover tilt to ProjectCard, and animated tag chips.
Respect prefers-reduced-motion; keep transitions ≤200ms. Provide code changes only.
```

**QA sweep**

```
You are the QA Agent. Run an a11y + performance sweep.
- Check keyboard nav, focus traps, color contrast.
- Optimize image formats and sizes.
- Add missing meta/OG for each route; include JSON-LD.
Return a concrete checklist of fixes + code diffs.
```

---

## 10) File Structure (target)

```
portfolio-v3/
  ├─ public/
  │   ├─ images/projects/
  │   └─ og/
  ├─ src/
  │   ├─ content/projects/*.json
  │   ├─ layout/{Header,Footer,PageShell}.tsx
  │   ├─ providers/{ThemeProvider}.tsx
  │   ├─ routes/{home,projects,project,[slug],about,contact}.tsx
  │   ├─ sections/{Hero,ProjectSpotlight,Skills,Testimonials}.tsx
  │   ├─ projects/{ProjectCard,ProjectGrid,ProjectCase}.tsx
  │   ├─ ui/{Button,Badge,Card,Tooltip,Tabs,Separator}.tsx
  │   ├─ util/{seo,analytics,a11y}.ts
  │   └─ styles/{globals.css}
  ├─ .eslintrc.cjs
  ├─ tailwind.config.ts
  ├─ tsconfig.json
  ├─ vite.config.ts
  └─ README.md
```

---

## 11) Copy Blocks (ready to paste)

**Value Prop**

> I build reliable, UX‑polished web apps with React, Go, and cloud‑native tooling.

**Secondary**

> Strong on architecture and implementation, pragmatic about shipping.

**CTA**

- **View Projects** · **Contact Me**

---

## 12) Next 90 Minutes — Execution Plan

1. Create Vite app + Tailwind + shadcn/ui skeleton.
2. Implement Header/Footer + routing + SEO helper.
3. Add `content/projects` JSON for four existing projects.
4. Build Home: Hero, ProjectSpotlight (3 cards), Skills.
5. Build Projects grid with filters.
6. Ship to Vercel (preview URL), wire custom domain if desired.

---

## 13) Stretch Goals

- MDX for case studies; code snippet syntax highlighting
- Light analytics (Plausible or Umami)
- RSS & /now page
- i18n scaffold (en → fr later?)
- Unit tests with Vitest + Testing Library

---

**End of Plan**
