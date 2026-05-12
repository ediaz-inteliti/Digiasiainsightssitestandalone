---
name: digiASIA Insights
description: ADB's integrated platform for tracking digital transformation across the Asia-Pacific region.
colors:
  institutional-navy: "#002569"
  institutional-navy-deep: "#004d99"
  commission-gold: "#FBB00E"
  surface-canvas: "#f8f9fa"
  surface-white: "#ffffff"
  border-light: "#dee2e6"
  border-medium: "#ced4da"
  neutral-mid: "#adb5bd"
  annotation-gray: "#6c757d"
  text-secondary: "#495057"
  text-primary: "#343a40"
  text-darkest: "#212529"
typography:
  display:
    fontFamily: "'Mercury Text G1', Georgia, serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "normal"
  headline:
    fontFamily: "'Ideal Sans', Arial, sans-serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  title:
    fontFamily: "'Ideal Sans', Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "'Mercury Text G1', Georgia, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.618
  label:
    fontFamily: "'Ideal Sans', Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.02em"
  logotype-primary:
    fontFamily: "'Ideal Sans', Arial, sans-serif"
    fontSize: "3.5rem"
    fontWeight: 500
    letterSpacing: "0.04em"
  logotype-secondary:
    fontFamily: "'Ideal Sans', Arial, sans-serif"
    fontSize: "1.65rem"
    fontWeight: 300
    letterSpacing: "0.08em"
rounded:
  none: "0"
  card: "0.5rem"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2.5rem"
  2xl: "3.5rem"
  section: "5rem"
components:
  nav-link:
    textColor: "{colors.text-secondary}"
    typography: "{typography.label}"
    padding: "0.5rem 0"
  nav-link-hover:
    textColor: "{colors.institutional-navy}"
  module-card:
    backgroundColor: "{colors.surface-white}"
    textColor: "#ffffff"
    rounded: "{rounded.card}"
    padding: "8rem 2rem 1.5rem 2rem"
  footer-heading:
    textColor: "{colors.commission-gold}"
    typography: "{typography.headline}"
  footer-link:
    textColor: "{colors.border-medium}"
    typography: "{typography.label}"
  footer-link-hover:
    textColor: "{colors.surface-white}"
---

# Design System: digiASIA Insights

## 1. Overview

**Creative North Star: "The Atlas Standard"**

This system speaks with the authority of a printed development atlas — the kind of reference work issued by the ADB's research division, bound and numbered, trusted to remain accurate long after the data it contains has been superseded. Every element earns its place the way text earns space on a topographic map: by being necessary. There is no ornament here. Whitespace is not emptiness; it is the margin of a well-laid page.

The palette is institutional: deep navy anchoring all primary surfaces, a precise amber used where attention must be commanded. Mercury Text G1 carries the editorial weight of long-form data writing; Ideal Sans handles navigation and labels with the neutrality of a typeface that has never once been decorative. The grid is rigid, modular, and non-negotiable.

What this system refuses: the visual vocabulary of Silicon Valley data products — neon-edged dashboards, glassmorphic panels, hero metrics dressed in gradient halos. The digiASIA interface makes no attempt to look exciting. It aims to look correct.

**Key Characteristics:**
- Institutional navy as the primary and dominant surface color
- Mercury Text for editorial weight; Ideal Sans for everything else
- Flat-by-default elevation; shadow used only to signal sticky positioning or card separation
- No gradient decorations; the only gradient is the rainbow separator, a direct ADB brand element
- Color-coded module accents used only in hover state, never at rest

## 2. Colors: The Publication Palette

A committed palette. Institutional Navy carries 40–60% of primary surfaces; Commission Gold appears only where emphasis is mandatory. Neutrals are a tight gray scale, biased toward the cool end to stay aligned with the navy anchor.

### Primary
- **Institutional Navy** (#002569): The identity anchor. Logo, navigation bar, hero backgrounds, primary action surfaces. Never tinted, never used at partial opacity as decoration.
- **Institutional Navy Deep** (#004d99): Hover and active states on navy-anchored elements. Slightly lighter to feel responsive without losing authority.

### Secondary
- **Commission Gold** (#FBB00E): The earned accent. Footer headings, critical CTAs, and any point on a dark surface where hierarchy must break through. Never used decoratively on white surfaces.

### Neutral
- **Surface Canvas** (#f8f9fa): Module section backgrounds. The off-white that separates primary sections without competing with card whites.
- **Surface White** (#ffffff): Card and primary page surface. The baseline.
- **Border Light** (#dee2e6): Dividers, mobile nav borders, footer rule separators.
- **Border Medium** (#ced4da): Secondary borders, used rarely.
- **Neutral Mid** (#adb5bd): Placeholder text, tertiary metadata.
- **Annotation Gray** (#6c757d): Captions, secondary body text, footer body copy.
- **Text Secondary** (#495057): Navigation links at rest, body text in non-hero contexts.
- **Text Primary** (#343a40): Default body text. Rich charcoal, not black.
- **Text Darkest** (#212529): Reserved for emphasis contexts. Near-black with warm undertone.

### Named Rules
**The One Amber Rule.** Commission Gold (#FBB00E) appears only on dark surfaces (footer, dark overlays) or as a singular CTA emphasis. It is prohibited on white or light-surface backgrounds. Its rarity is its authority.

**The No-Tint Rule.** Brand colors are never used at partial opacity as background washes. Full value or nothing.

## 3. Typography: The Publication Stack

**Display / Editorial Font:** Mercury Text G1 (with Georgia, serif fallback)
**UI / Navigation Font:** Ideal Sans (with Arial, sans-serif fallback)

**Character:** Mercury carries the editorial weight of institutional print — designed for setting data-adjacent long-form prose, it reads credibly at body size without the warmth or friendliness of a consumer typeface. Ideal Sans is the neutral infrastructure. Together they create the pairing found in serious financial and development publications: a serif that means business, a sans that stays out of the way.

### Hierarchy
- **Display** (Mercury Text G1, 700, 3rem, lh 1.25): Hero titles only. Set in Mercury to signal this is a document, not a dashboard.
- **Headline** (Ideal Sans, 600, 2rem, lh 1.3): Section headings, major structural breaks.
- **Title** (Ideal Sans, 600, 1.5rem, lh 1.4): Subsection labels, card headings.
- **Body** (Mercury Text G1, 400, 1rem, lh 1.618): All running text. The golden-ratio line height is intentional and must not be overridden. Max line length 65–75ch.
- **Label** (Ideal Sans, 400, 0.875rem, ls 0.02em): Navigation links, footer text, captions, UI metadata.
- **Logotype Primary** (Ideal Sans, 500, 3.5rem, ls 0.04em): The "digiASIA" wordmark. Unique scale; do not reuse this size for any other purpose.
- **Logotype Secondary** (Ideal Sans, 300, 1.65rem, ls 0.08em): The "Insights" subtitle wordmark. Same restriction.

### Named Rules
**The Mercury Rule.** Mercury Text G1 is the primary reading font for any content longer than a label. It is not a fallback. Use it actively for hero text, article copy, sidebar text, and data descriptions. Using Ideal Sans for long-form prose undermines the institutional register.

**The Lining Numbers Rule.** All statistics, counts, percentages, and years must be set with lining figures. Mercury Text G1's lining figures are the default; do not use oldstyle figures in data contexts.

## 4. Elevation

This system is flat by default. Surfaces are distinguished by background color and whitespace, not shadow. Two shadow roles exist and are strictly functional.

### Shadow Vocabulary
- **Structural Anchor** (`box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)`): Applied to the sticky header only. Signals that this surface is fixed and above the scroll plane. Never applied to cards or content areas.
- **Card Lift** (`box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)`): Applied to module cards at rest. Communicates clickability and separation from the section background. Not a hover effect — it is always present.

### Named Rules
**The Flat-by-Default Rule.** No surface receives a shadow unless it is a sticky header or an explicitly interactive card. Adding shadow to informational panels, text containers, or footer sections is prohibited. Depth is created by color contrast and grid margin, not blur.

## 5. Components

### Navigation
The header is white, sticky, and minimal. The logotype occupies significant horizontal space; the nav links are label-weight Ideal Sans in Text Secondary (#495057), shifting to Institutional Navy on hover.

- **Desktop:** Flex row, logo left, nav links right, 1.25rem gap between links, 0.625rem vertical padding.
- **Mobile:** Nav links collapse behind a hamburger toggle. The mobile drawer uses Mercury Text G1 — the one place the editorial font appears in a navigation role, creating a deliberate tonal shift that signals the mobile view is an alternate reading experience, not a degraded one.
- **Active/hover:** `color: #002569`, transition 0.2s ease. No underline, no background highlight, no border.
- **Sticky shadow:** Structural Anchor shadow on scroll.

### Module Cards
The signature component of the landing page. Full-bleed photographic backgrounds with a linear-gradient dark overlay (`rgba(0,0,0,0)` to `#000000`, left-biased) that ensures white text legibility regardless of image content. On hover, the card's border transitions to a module-specific accent color (Maps: #3b82f6, Capacity: #a855f7, Index: #6366f1).

- **Corner Style:** Gently curved (0.5rem radius).
- **Background:** Full-bleed photo, covered, centered. Each card has a unique image source.
- **Overlay:** `linear-gradient(to left, rgba(0,0,0,0) 0%, #000000 100%)` at `z-index: 0`. Content at `z-index: 1`.
- **Text:** All white, regardless of image. Title in Title scale (Ideal Sans, 600, 1rem). Description in Label scale (0.875rem).
- **Internal Padding:** 8rem top (creates the image reveal area), 2rem horizontal, 1.5rem bottom.
- **Hover Border:** Module-specific color replaces the default white border. Transition 0.3s ease.
- **Shadow:** Card Lift shadow at rest.

### Footer
Dark charcoal surface (Text Primary, #343a40). Two-column content area above a bottom bar. Headings in Commission Gold. Body and link text in gray scale (Annotation Gray / Border Medium). Footer bottom bar separated by a 1px Border Light rule.

- **Heading style:** Commission Gold (#FBB00E), Ideal Sans, inherits headline weight. The only place Gold is used on a dark surface.
- **Link style:** Border Medium (#ced4da) at rest, white on hover, 0.2s transition.
- **Structure:** Top padding 5rem, bottom bar padding 1.5rem, bottom bar margin-top 5rem. Desktop: bottom row is flex row. Mobile: stacked column.

### Hero Section
Full-bleed image panel with a dark scrim (`rgba(0,0,0,0.45)`). Display-scale Mercury headline, white. Constrained to 42rem max-width for line length control. Below the hero, a 4px rainbow-stripe separator marks the ADB brand divider — a direct brand specification element, not decoration.

- **Scrim:** Absolute overlay at `z-index: 0`; content at `z-index: 1`. This is the only correct way to ensure legibility without compromising the image.
- **Rainbow separator:** 6-color block gradient (red → orange → yellow → green → blue → purple). This is a brand element and its colors are fixed. Do not replace with a single-color rule or brand navy.

## 6. Do's and Don'ts

### Do:
- **Do** use Mercury Text G1 as the primary reading font for any copy longer than a label. It is not a fallback.
- **Do** set all statistics, dates, and data values in lining figures.
- **Do** constrain body text to 65–75ch line length to preserve legibility in data descriptions.
- **Do** use Commission Gold (#FBB00E) exclusively on dark surfaces (#343a40 and darker, or photo overlays).
- **Do** use the Card Lift shadow for all interactive cards at rest. It communicates affordance without hover-only signaling.
- **Do** treat the rainbow separator as a brand element with fixed colors. Reproduce exactly or omit.
- **Do** apply WCAG AA contrast minimums to all text. The dark gray scale provides this without needing to resort to pure black.
- **Do** use generous whitespace between sections (5rem) to let the grid breathe.

### Don't:
- **Don't** use dark dashboards, neon accents, or any dark-mode aesthetic. This is a light-mode-only system.
- **Don't** use startup or consumer aesthetics: Airbnb-style warmth, Notion-style soft pastels, or rounded-corner excess.
- **Don't** use SaaS landing-page clichés: gradient hero stats, floating metric cards, hero-metric number templates.
- **Don't** use glassmorphism, backdrop-filter blurs, or translucent panels as decoration.
- **Don't** use Commission Gold (#FBB00E) on white or light surfaces — it fails contrast and reads as decoration rather than signal.
- **Don't** tint brand colors to partial opacity as background washes. Full value or nothing.
- **Don't** apply shadow to informational panels, text blocks, or footer sections. Shadow is reserved for the sticky header and interactive cards.
- **Don't** use border-left or border-right greater than 1px as a colored stripe accent on cards or callouts. The hover-border treatment on module cards uses full `border`, not a side stripe.
- **Don't** use gradient text (`background-clip: text`). Emphasis is achieved through weight and scale, not gradient decoration.
- **Don't** choreograph entrance animations or scroll-driven sequences. State transitions only, 200ms maximum.
- **Don't** use the logotype type sizes (3.5rem / 1.65rem) for any purpose other than the wordmark itself.
