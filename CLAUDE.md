# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Vite)
npm run build    # Production build
```

No test runner is configured. No lint command is configured.

## Architecture

This is a **Figma Make**-generated React + Vite standalone site for the **digiASIA Insights** platform (ADB — Asian Development Bank). It is a static marketing/landing site, not a full application.

### Rendering model

- `src/main.tsx` mounts the React app into `#root`
- `src/app/App.tsx` wraps everything in `<SiteTemplate>` and renders `<Home>` as the only page
- `src/app/SiteTemplate.tsx` contains the persistent header (desktop + mobile nav) and footer
- Pages live in `src/app/pages/` — currently only `Home.tsx`

### Styling system

Styles are **plain CSS only** (no Tailwind utility classes in use, despite Tailwind being installed as a Figma Make requirement). All CSS is imported centrally through `src/styles/all.css`:

```
fonts.css         → @font-face declarations (loaded from Pantheon CDN)
flexboxgrid.css   → custom 12-column grid (.container, .row, .col-xs-*, .col-sm-*, .col-lg-*)
globals.css       → CSS custom properties (brand colors, font vars), base element styles
components/header.css
components/footer.css
pages/home.css
```

CSS custom properties (defined in `globals.css` on `body`):
- `--color-primary`: `rgb(0,37,105)` — ADB Blue
- `--color-secondary`: `#FBB00E`
- `--font-sans`: Ideal Sans, `--font-mercury`: Mercury Text G1

### Path alias

`@` resolves to `src/app/` (configured in `vite.config.ts`).

### UI component library

`src/app/components/ui/` contains a full shadcn/ui component set (Radix UI primitives + Tailwind CVA). These are installed but **not currently used** in the pages — they are available for future use.

### Figma asset resolution

`vite.config.ts` includes a custom `figmaAssetResolver` plugin that maps `figma:asset/<filename>` imports to `src/assets/<filename>`. Use this import scheme for any Figma-exported assets.

### Design context

`.impeccable.md` at the project root contains ADB brand guidelines (colors, typography, tone). The `pbakaus/impeccable` design skill is installed under `.agents/skills/impeccable/` for AI-assisted UI work.
