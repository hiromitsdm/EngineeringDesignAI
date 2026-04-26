# DesignFlowAI Design System

*Version: 0.3 (draft) — Last updated: April 2026*

> **Scope:** This system covers three surfaces — the marketing/investor website, the in-CAD product UI (CATIA/NX sidecar panel), and pitch deck/presentation materials. Same DNA across all three; surface density and canvas rhythm change to match context.

> **Foundation:** This system is adapted from a precision-editorial language inspired by Apple's web grammar. The neutral cadence, capsule action geometry, and restrained chrome are kept. The blue accent family is replaced with a teal accent family. Monospace typography is added for technical data — a category Apple does not need to handle.

---

## 1. Visual Theme & Atmosphere

DesignFlowAI's visual language is a precision-editorial system that alternates between cinematic calm and dense engineering utility. The interface is engineered to disappear so retrieved knowledge, CAD geometry, and engineering data carry the narrative weight.

The system runs in **three gears**, with shared tokens but different density and canvas rhythm:

- **Showcase mode** — marketing site, pitch deck. Cinematic. Wide spacing, large display type, image-led. Alternates dark immersive chapters with light feature bands.
- **Utility mode** — in-CAD product panel. Dense. Compressed spacing, smaller type, data-led. Lives inside CATIA/NX dark chrome and must feel native there without losing brand identity.
- **Editorial mode** — long-form documents, investor memo, technical content. Neutral light canvas, generous reading column, restrained accents.

Typography is the stabilizer across all three gears. SF Pro Display carries hero and product-name hierarchy. SF Pro Text handles body, navigation, and dense UI. SF Mono handles technical data — part numbers, tolerances, queries, file paths.

**Key Characteristics:**
- Binary canvas rhythm: deep black scenes (`#000000`) alternating with pale neutral fields (`#f5f5f7`)
- Single teal accent family for action and link semantics (`#0f766e`, `#134e4a`, `#14b8a6`)
- Three operating gears in one system: showcase, utility, editorial
- Heavy reliance on product imagery and CAD geometry; UI chrome stays visually thin
- Tight headline metrics paired with compact body. Monospace reserved for technical data only (part numbers, tolerances, file paths, source citations) — not for editorial labels.
- Pill and capsule geometry as signature action language (`8px` to `980px` and circular controls)
- Depth used sparingly; contrast and surface separation do most of the layering work
- Multi-context rhythm: dark immersive chapters → pale neutral feature bands → utility white retail surfaces → dark micro-surfaces for in-CAD controls

---

## 2. Color Palette & Roles

### Primary
- **Absolute Black** (`#000000`): Immersive hero canvases, high-drama pitch slides, deep UI anchors, in-CAD panel default background.
- **Pale Neutral** (`#f5f5f7`): Main light surface for feature bands, comparison sections, editorial transitions, light-canvas pitch slides.
- **Near-Black Ink** (`#1d1d1f`): Primary text on light canvases. Dark-fill control color.

### Accent (Teal Family) — mirrors Apple's three-blue role structure

- **DesignFlow Teal** (`#0f766e`): **Primary action fill.** Buttons, focus signal, brand accent, primary stat callouts on light canvases, eyebrow labels on light slides. Equivalent role to Apple Action Blue.
- **Body Link Teal** (`#134e4a`): Inline links in long-form copy on light canvases. Reads as deep teal at body sizes; at 11px or below in dense UI, prefer DesignFlow Teal (`#0f766e`) instead so the link still reads as teal rather than gray. Equivalent role to Apple Body Link Blue.
- **High-Luminance Teal** (`#14b8a6`): Calmer teal for accents on dark canvases — eyebrows, hero stats, geometry-context indicators. Less candy than a brighter pastel; reads as serious infrastructure rather than vivid SaaS. Equivalent role to Apple's `#2997ff`.

### Surface & Background
- **Pure White Canvas** (`#ffffff`): Editorial document backgrounds, dense product list sections, form surfaces.
- **Graphite Surface A** (`#272729`): In-CAD card and grouped-control context layer.
- **Graphite Surface B** (`#1e1e1f`): Slightly deeper utility layer for the in-CAD panel base, matching CATIA chrome.
- **Graphite Surface C** (`#28282b`): Elevated dark supporting surfaces — modal overlays, query input shells.
- **Graphite Surface D** (`#2a2a2c`): Darkest elevated step for separation in dark in-CAD contexts.

### Neutrals & Text
- **Secondary Neutral Gray** (`#6e6e73`): Body secondary copy, helper descriptions, citation sources, tertiary metadata.
- **Soft Border Gray** (`#d2d2d7`): Dividers, subtle outlines, muted utility containment.
- **Mid Border Gray** (`#86868b`): Stronger field outlines in dense UI and configurator contexts.
- **Utility Dark Gray** (`#424245`): Dark-neutral text/surface crossover in dense store-style contexts.

### Semantic & Accent
- **Selection/Focus Signal** (`#0f766e`): Shared focus and selected-state signal across all three surfaces.
- **Status Colors** (used sparingly, only where meaning is genuinely semantic):
  - **Success** (`#16a34a`): Successful retrievals, validated standards, approved geometry.
  - **Warning** (`#d97706`): Standards conflicts, lessons-learned alerts, design rule violations.
  - **Error** (`#dc2626`): Failed queries, broken integrations, hard rule violations.
  - Status colors should **never** appear in marketing or pitch deck contexts. They are utility-mode only.

### Gradient System
- Solid surfaces dominate. Visual richness comes from photography, CAD renderings, and finish detail rather than persistent UI gradients. Do not introduce decorative gradients.

---

## 3. Typography Rules

### Font Family
- **Display Family:** `SF Pro Display`, fallbacks `Inter, Helvetica Neue, Helvetica, Arial, sans-serif`
- **Text Family:** `SF Pro Text`, fallbacks `Inter, Helvetica Neue, Helvetica, Arial, sans-serif`
- **Mono Family:** `SF Mono`, fallbacks `JetBrains Mono, ui-monospace, Menlo, Monaco, monospace`

**Usage Split:**
- **Display** handles hero copy, product/feature headlines, large stat callouts, slide hero lines.
- **Text** handles navigation, body copy, controls, labels, dense in-CAD UI.
- **Mono** handles technical data: part numbers (`PN-7842-A3`), tolerances (`±0.05mm`), feature IDs, query strings, file paths, source citations on slides, page numbers, and any string an engineer would copy/paste verbatim. Mono is **not** used for editorial labels — eyebrows, section tags, and group labels use SF Pro Text in uppercase. The distinction matters: mono signals "this is precise machine-relevant data"; uppercase sans signals "this is a structural label."

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Family | Notes |
|------|------|--------|-------------|----------------|--------|-------|
| Hero Display XL | 80px | 600 | 1.00–1.05 | -1.2px | Display | Pitch deck hero, marketing chapter intros |
| Hero Display L | 56px | 600 | 1.07 | -0.28px | Display | Marketing site hero |
| Section Display | 48px | 500–600 | 1.08 | -0.144px | Display | Major chapter headings |
| Stat Hero | 96–120px | 600 | 0.95 | -3px | Display | Pitch deck single-stat slides |
| Product Heading | 40px | 600 | 1.10 | normal | Display | Product and section titles |
| Feature Display | 38px | 600 | 1.21 | 0.152px | Display | Device and merchandising callouts |
| Promo Display | 32px | 300–600 | 1.09–1.13 | 0.128–0.352px | Display | Module-level sub-heroes |
| Card Title | 28px | 600 | 1.14 | 0.196px | Display | Tile-level naming and key copy |
| Utility Heading | 24px | 600 | 1.17 | 0.216px / -0.2px | Display | In-CAD panel section headers |
| Slide Headline | 22–28px | 600 | 1.20 | -0.3px | Display | Pitch deck supporting headlines |
| Subhead | 19px | 600 | 1.21 | 0.228px | Text | Compact section intros |
| Body Primary | 17px | 400 | 1.47 | -0.374px | Text | Standard body and product descriptions |
| Body Emphasis | 17px | 600 | 1.24 | -0.374px | Text | Emphasized labels and key values |
| In-CAD Body | 14px | 400 | 1.45 | -0.1px | Text | Default in-CAD panel reading text |
| Control Label | 14px | 400–600 | 1.29–1.47 | -0.224px | Text | Buttons, helper labels, compact nav |
| Mono Data | 13–14px | 400 | 1.35 | 0 | Mono | Part numbers, tolerances, paths |
| Eyebrow Label | 12px | 600 | 1.00 | 1.2px (uppercase) | Text | Slide eyebrows, section tags, group labels — Apple-style sans, not mono |
| Micro UI | 12px | 400–600 | 1.00–1.33 | -0.12px | Text | Fine print, micro labels |
| Legal/Meta | 10px | 400 | 1.30–1.47 | -0.08px | Text | Dense metadata and legal support |

### Principles
- **Continuity across surfaces.** The same typographic DNA spans pitch decks, marketing pages, in-CAD UI, and editorial documents. No brand split between investor-facing and engineer-facing material.
- **Compression at scale.** Display tiers use tight leading and controlled negative tracking to feel machined and product-first.
- **Readable density at utility depth.** SF Pro Text balances compactness with enough vertical rhythm for the in-CAD panel (where users may read for sustained sessions).
- **Mono as a meaning-bearing typeface.** Switching to mono is a deliberate signal: "this is precise, machine-relevant data, not prose." Use mono for source citations, page numbers, hex codes, part numbers, tolerances, file paths, and technical metadata. Use **SF Pro Text in uppercase** (not mono) for editorial labels — eyebrows, section tags, group labels, table headers. Apple's micro labels follow the same convention: rounder sans-serif for structural labels, mechanical mono only for code-like data.
- **Measured weight ladder.** 600 is the dominant emphasis weight; 700 appears selectively; 300 is used sparingly for contrast in larger lines.

### Note on Font Substitutes
- `Inter` is the closest freely available substitute for SF Pro Text.
- `Inter Tight` approximates SF Pro Display metrics for headings.
- `JetBrains Mono` is the closest substitute for SF Mono.
- When substituting, increase line-height by +0.02 to +0.06 on body sizes and reduce negative tracking intensity to preserve readability.

---

## 4. Component Stylings

### Buttons
- **Primary Fill Action** (light canvas): `#0f766e` background, `#ffffff` text, 8px radius, padding 12px 24px (standard) or 8px 16px (compact).
- **Primary Fill Action** (dark canvas): `#14b8a6` background, `#042f2c` text (deep teal-900 for AA contrast), 8px radius.
- **Dark Fill Action**: `#1d1d1f` background, `#ffffff` text, 8px radius. Used when light surfaces need a restrained high-contrast primary that reads as "secondary brand."
- **Secondary / Ghost Action**: transparent fill, `#0f766e` text, `#0f766e` 1px border, 8px radius.
- **Pill / Capsule Action Family**: large capsule actions at 18px–56px radii and elongated pill links at 980px. Reserve for marketing hero CTAs and high-drama pitch slide actions.
- **Utility Filter Shells** (in-CAD): `#272729` background, `#86868b` 1px border, 6px radius, 12–13px Text, padding 6px 12px.
- **Pressed Behavior**: active controls reduce scale to 0.98 or shift fill brightness by 8% to indicate physical press confirmation. No bouncy easing — keep transitions ≤150ms.

### Cards & Containers
- **Editorial Cards** (marketing/investor): light cards on `#f5f5f7` or white with minimal framing and image-first composition. 12–18px radius. No shadow by default; 1px `#d2d2d7` border only when needed for separation.
- **Dark Utility Cards** (in-CAD): graphite steps (`#272729` → `#2a2a2c`) for overlays, retrieved-knowledge cards, query history. 8–12px radius.
- **Retrieved Knowledge Card** (DesignFlowAI-specific): see §4.7 below.
- **Geometry-Context Indicator** (DesignFlowAI-specific): see §4.7 below.
- **Configurator / Form Panels**: rounded containers (12–18px) with restrained border definition. Used for pilot signup, demo request, settings.
- **Carousel / Spotlight Modules**: larger rounded shells (28–36px) for featured content lanes on the marketing site.

### Inputs & Forms
- **Marketing Input Fields**: white background, `#1d1d1f` text, `#86868b` 1px border, 8px radius, 17px Text, padding 12px 16px. Focus state: 2px `#0f766e` ring at 0 offset.
- **In-CAD Query Input**: see §4.7 below — this is the central interaction surface and gets dedicated treatment.
- **Selection Controls**: circular toggle controls for binary choices; chip-style controls for multi-select filter contexts.
- **Density Strategy**: form fields stay visually quiet to keep retrieved knowledge and CAD geometry dominant.

### Navigation
- **Marketing Site Top Nav**: compact translucent bar (`rgba(255,255,255,0.8)` on light, `rgba(0,0,0,0.7)` on dark) with backdrop-blur. 14px Text links, 24px height. Logo left, primary nav center/left, demo CTA right.
- **In-CAD Panel Header**: 40px tall, `#1e1e1f` background, 1px `#2a2a2c` bottom border. Logo, panel-collapse toggle, settings icon.
- **Tab/Segment Controls** (in-CAD): pill-segmented toggles for switching between query, history, settings views.
- **Link Hierarchy**: teal links remain the primary interactive signal; neutral text supports dense navigation.

### Image & Geometry Treatment
- **Marketing photography**: hardware (CAD workstations, automotive parts, manufactured assemblies) foregrounded on controlled solid surfaces. High-fidelity finish and material rendering.
- **CAD screenshots**: shown with native CATIA/NX dark chrome intact. Do not crop out the chrome — it signals product authenticity. Use 8–12px radius corner mask when embedding in marketing or pitch contexts.
- **Geometry highlighting**: when calling out specific features in CAD imagery for marketing, use a 2px `#14b8a6` outline glow with no fill — never a colored fill that would obscure geometry.
- **Mixed framing**: full-bleed cinematic scenes for marketing hero; rounded retail cards for product-feature grids.

### 4.7 — DesignFlowAI-Specific Components

These three components do not exist in Apple's system and are core to the product's identity.

**Query Input Bar** (in-CAD)
- 48px tall on desktop in-CAD, 56px on standalone web demo
- Background: `#28282b` (one step lighter than panel base for subtle elevation)
- Border: 1px `#86868b`; focus ring: 2px `#14b8a6` at 0 offset
- 14–15px SF Pro Text body, `#f5f5f7` color
- Placeholder text: `#86868b`, e.g. "Ask about this feature, standard, or lesson learned…"
- Left affordance: 16px microphone icon (`#86868b`, `#14b8a6` when active) for voice input
- Right affordance: small `↵` glyph in mono, `#86868b`
- Border radius: 12px
- When the query is geometry-aware (cursor is on a feature), append the **Geometry-Context Indicator** as a small chip immediately above the input

**Retrieved Knowledge Card** (in-CAD)
- Background: `#272729`
- Border: 1px `#2a2a2c` (subtle separation only)
- Border radius: 12px, padding 16px 18px
- Header row: source-type icon (16px) + source label in 11px SF Pro Text 600 uppercase (`#14b8a6`, +1.2px tracking) + age/recency in mono 11px (`#86868b`), right-aligned
- Body: 14px SF Pro Text, `#f5f5f7`, line-height 1.45
- Footer row: source citation in mono 12px (`#86868b`) — must always be present and clickable; provenance is non-negotiable for engineering content
- Optional inline geometry preview: 80×80px thumbnail with 8px radius, 1px `#424245` border
- Action affordances: "Apply to part" (primary teal pill) and "Save to my knowledge" (ghost) — 13px Text

**Geometry-Context Indicator** (chip)
- Pill, 24–28px tall, padding 4px 10px
- Background: `#272729`; border: 1px `#14b8a6` at 0.4 opacity
- Body: mono 11px, `#14b8a6`
- Format: `▸ {feature_type} · {part_id}` — e.g. `▸ HOLE · BRKT-7842-L`
- This chip signals to the engineer that the system is grounded to the specific feature their cursor is on. It is the visible representation of the product's core moat.

### Other Distinctive Components
- **Carousel Control Dots/Arrows**: circular control vocabulary in muted overlays for marketing gallery progression.
- **Stat Hero** (pitch deck): single oversized number (96–120px Display), brief supporting line (22–28px Display), small mono source citation. See §11 for the stat-hero slide pattern.

---

## 5. Layout Principles

### Spacing System
Base unit is `8px`. The system supports finer micro-steps for precision alignment in dense in-CAD contexts.

Frequently reused spacing values: `2`, `4`, `6`, `8`, `12`, `16`, `20`, `24`, `32`, `48`, `64`, `96` px.

Rhythm constants:
- **Showcase mode** (marketing, pitch): `48–96px` between sections, `24–32px` between major elements.
- **Utility mode** (in-CAD): `12–20px` between cards, `6–8px` internal padding compression.
- **Editorial mode**: `32–48px` between sections, generous reading rhythm.

### Grid & Container
- **Marketing pages**: max content width 1200–1240px, centered. Hero sections may go full-bleed.
- **In-CAD panel**: fixed-width sidecar, 360–480px range. Single column. No multi-column layouts inside the panel.
- **Pitch deck**: 1920×1080 canvas (16:9). Content kept within a 1600×900 safe area, with 160px outer margins on left/right and 90px on top/bottom.
- **Editorial documents**: 680–760px reading column, centered, with a 240–320px outer left margin available for marginalia and citations.

### Whitespace Philosophy
- **Showcase pacing**: major visual chapters use broad top/bottom breathing room (96–160px section padding).
- **Utility compression**: in-CAD panel deliberately compresses spacing to expose more actionable information per scroll. Use 12–16px between knowledge cards, not 24px.
- **Contrast-led separation**: section transitions rely more on canvas color change than on decorative dividers.

### Border Radius Scale
- **4–6px**: in-CAD micro controls, compact filter shells, tags.
- **8–12px**: standard buttons, inputs, knowledge cards.
- **16–18px**: marketing cards, configurator panels, modal containers.
- **28–36px**: spotlight modules, large feature containers.
- **56–100px**: capsule pills, large CTAs.
- **980px**: signature elongated pill links (rare, reserved for hero CTAs).
- **50%**: circular media controls, avatar elements.

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|------|-----------|-----|
| 0 | Flat neutral surfaces (`#ffffff`, `#f5f5f7`, `#000000`, `#1e1e1f`) | Main narrative and product stages |
| 1 | Subtle border containment (`#d2d2d7`, `#86868b`, `#2a2a2c`) | Filters, input fields, in-CAD cards |
| 2 | Soft shadow (`rgba(0,0,0,0.08)` to `rgba(0,0,0,0.22)`) | Highlighted marketing cards, modal overlays |
| 3 | Dark-surface stepping (`#1e1e1f` → `#272729` → `#2a2a2c`) | In-CAD overlays, query input on panel base, dark utility clusters |
| Focus | 2px `#0f766e` (light) or `#14b8a6` (dark) ring at 0 offset | Keyboard focus and selected states |

Depth is intentionally restrained. Tonal contrast, surface stepping, and compositional hierarchy do most of the work — heavy shadow stacks are explicitly avoided.

### Decorative Depth
- Decorative depth comes from photographic realism, CAD geometry rendering, and material finish — not synthetic UI effects.
- Translucent overlays and backdrop-blur on navigation provide mild atmospheric layering. Use `backdrop-filter: blur(20px)` only on top nav and modal backdrops.

---

## 7. Do's and Don'ts

### Do
- Use the neutral triad (`#000000`, `#f5f5f7`, `#ffffff`) plus the in-CAD graphite tier (`#1e1e1f`, `#272729`) as the structural foundation.
- Reserve teal accents for genuine action and navigation semantics.
- Keep typography tight and deliberate, especially at display scales.
- Use mono deliberately — only for technical data, never for ornament.
- Maintain the capsule/circle geometry language for controls and key actions.
- Let CAD geometry, product imagery, and retrieved knowledge cards carry visual drama; keep chrome understated.
- Use border-led containment in dense in-CAD contexts instead of heavy card ornamentation.
- Preserve clear separation between showcase, utility, and editorial gears while keeping core tokens shared.
- Always show source citation on retrieved knowledge — provenance is core to engineering trust.

### Don't
- Don't introduce broad secondary accent palettes that compete with DesignFlow Teal. No purple, no pink, no orange.
- Don't overuse shadows, glow effects, or decorative gradients in core UI chrome.
- Don't mix unrelated font families or loosen tracking indiscriminately.
- Don't flatten all corners to a single radius; use the radius tier system in §5.
- Don't overload in-CAD modules with thick borders or loud visual effects — they fight CATIA's native chrome and feel hostile.
- Don't remove neutral contrast cadence between dark and light chapters in pitch decks or marketing pages.
- Don't treat marketing, in-CAD, and pitch surfaces as separate design systems.
- Don't expose competitively sensitive technical detail in public-facing UI copy. Patent-pending mechanics, exact retrieval architecture, and CAD integration internals stay out of marketing surfaces and demo videos.
- Don't use status semantic colors (success/warning/error) outside the in-CAD utility surface.

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | ≤640px | Single-column stacks, condensed actions, compact selectors. Pitch decks not designed for this width. |
| Tablet | 641–1023px | Mixed 1–2 column transitions, larger text blocks, in-CAD panel collapses to overlay mode. |
| Desktop | 1024–1440px | Full marketing layouts. In-CAD panel docks at 360–420px width. |
| Large Desktop | 1441px+ | Marketing hero expansion, broader chapter spacing. In-CAD panel may dock at up to 480px. |

### Touch Targets
- Primary and secondary actions presented in tap-friendly pill/button geometries (≥40px height on mobile).
- Circular media and selection controls maintain ≥36px hit regions on touch.
- Dense in-CAD UI assumes mouse/keyboard primary input; touch is not a target environment for the panel.

### Collapsing Strategy
- **Marketing**: hero typography scales down in discrete tiers (80px → 56px → 40px) while preserving hierarchy contrast.
- **Marketing**: feature grids collapse from multi-column to stacked cards.
- **In-CAD panel**: when host CAD window is narrow, panel collapses to a 64px-wide rail with icons only; tap to expand to overlay mode.
- **Pitch deck**: not responsive. Author at 1920×1080 (16:9). Print/export to PDF preserves canvas. If a deck is repurposed for web/mobile, treat each slide as an image asset, not as fluid content.

### Image & Geometry Behavior
- Marketing imagery preserves aspect and centrality through breakpoints.
- CAD screenshots stay legible by using progressive zoom to the relevant feature on smaller breakpoints rather than scaling the whole canvas.
- Hero visuals remain dominant on mobile, with text repositioned around media priority.

---

## 9. Pitch Deck Canvas Rhythm

> *Pitch decks are a distinct surface. They use the same tokens as the rest of the system but follow Apple's binary chapter rhythm: dark immersive scenes alternating with light readable scenes. Pure all-dark decks fatigue audiences; pure all-light decks lose the cinematic punch on moments that matter.*

### Canvas Assignment by Slide Type

| Slide Type | Canvas | Why |
|---|---|---|
| Title / hero | Dark | Cinematic open |
| Problem | Dark | Drama — single-stat hero pattern |
| Solution / product | Dark | Showcase the product against dark chrome |
| How it works | Light | Dense — diagrams need breathing room |
| Market | Light | Numbers, charts — light handles density better |
| Competition | Light | Comparison table — readability over drama |
| Traction | Dark | Drama — wins, logos, momentum |
| Team | Light | Headshots and bios read better on light |
| GTM / financials | Light | Data-heavy, needs readability |
| Vision | Dark | Cinematic mid-deck or close |
| Ask | Dark | Final emotional beat |

Rule of thumb: roughly **60% dark / 40% light**, alternating in chapters of 1–3 slides. Same color tokens throughout — only the canvas switches.

### Stat Hero Pattern (the Apple-style problem slide)
- Eyebrow label, top-left: SF Pro Text 600, 12px uppercase, +1.2px tracking, primary teal accent
- Hero stat: 96–120px Display, 600 weight, primary teal — the only colored element on the slide
- Supporting line: 22–28px Display, 600 weight, ink color, ≤70% width
- Source citation, bottom-left: SF Mono 11px, secondary gray
- Generous whitespace; no other elements

### Light Slide Pattern
- Canvas: `#f5f5f7`
- Text: `#1d1d1f` primary, `#6e6e73` secondary
- Accent: `#0f766e` (primary teal)
- Source citations: mono 11px, `#6e6e73`

### Dark Slide Pattern
- Canvas: `#000000`
- Text: `#f5f5f7` primary, `#86868b` secondary
- Accent: `#14b8a6` (high-luminance teal)
- Source citations: mono 11px, `#86868b`

### Embedding Product Screenshots
- CAD screenshots feel native against the dark canvas — prefer dark slides when product imagery is the hero.
- For light slides showing CAD imagery, frame screenshots inside an 8–12px radius rounded container with a 1px `#d2d2d7` border to create visual separation.

---

## 10. In-CAD Panel — Surface-Specific Notes

> *The in-CAD product UI lives inside CATIA V6 / 3DEXPERIENCE chrome (or NX chrome). It must feel native to that environment without losing DesignFlowAI identity. This section codifies what "native to CATIA chrome" means concretely.*

### Host Environment Constraints
- CATIA V6 default chrome is dark (`#1e1e1f`–`#2a2a2c` range), with thin gray borders and 12–14px sans-serif type. The DesignFlowAI panel must sit inside this chrome without a jarring brand-takeover feeling.
- Panel docks on the right side at 360–480px wide. Vertical scroll is the only scroll axis.
- Users keep this panel open for hours of design work. Visual fatigue must be minimized.

### Panel Anatomy (top to bottom)
1. **Header bar** (40px): logo left, panel collapse + settings icons right, 1px bottom border.
2. **Geometry-context indicator** (28px chip, when active): shows the feature the cursor is on.
3. **Query input bar** (48px): see §4.7.
4. **Result stream**: stack of retrieved knowledge cards, 12–16px gap.
5. **Footer / status bar** (28px): subtle, mono 11px, shows last sync time and connection status.

### Density Rules
- Use `#1e1e1f` as the panel base, `#272729` for cards (one step elevated).
- Body text size in-panel: 14px SF Pro Text. Never go above 17px in-panel; never below 12px.
- Padding inside cards: 16px 18px. Gap between cards: 12px.
- Source citations are mandatory on every retrieved knowledge card. Without provenance, the card is not shippable.

### Brand Restraint in CAD
- DesignFlow Teal appears only on: focus states, primary actions, the geometry-context chip, and active-state mono labels.
- Do not flood the panel with teal. The product earns trust by feeling like a calm, professional engineering tool — not a branded SaaS overlay.

---

## 11. Agent Prompt Guide

> *This section is written for agentic code generation tools (Claude, Cursor, v0, etc.). Use the example prompts as templates when generating UI for any of the three surfaces.*

### Quick Color Reference
- Primary action teal: **DesignFlow Teal** (`#0f766e`)
- Inline link teal (light canvas): **Body Link Teal** (`#134e4a`)
- High-luminance teal (dark canvas): **High-Luminance Teal** (`#14b8a6`)
- Dark chapter canvas: **Absolute Black** (`#000000`)
- In-CAD panel base: **Graphite Surface B** (`#1e1e1f`)
- In-CAD card surface: **Graphite Surface A** (`#272729`)
- Light chapter canvas: **Pale Neutral** (`#f5f5f7`)
- Primary text on light: **Near-Black Ink** (`#1d1d1f`)
- Primary text on dark: **Pale Neutral** (`#f5f5f7`)
- Secondary text: **Secondary Neutral Gray** (`#6e6e73`)
- Border soft (light contexts): **Soft Border Gray** (`#d2d2d7`)
- Border strong (dense contexts): **Mid Border Gray** (`#86868b`)

### Example Prompts by Surface

**Marketing site — hero section:**
> "Design a DesignFlowAI marketing hero on a black canvas (`#000000`) with an SF Pro Display semibold headline (56px), one supporting line in 19px SF Pro Text at `#86868b`, and two capsule CTAs — primary `#14b8a6` fill with `#042f2c` text, secondary ghost with 1px `#14b8a6` border. Eyebrow label above headline in 12px SF Pro Text 600 uppercase, `#14b8a6`, 1.2px letter-spacing."

**Marketing site — feature card grid:**
> "Build a feature card grid on a `#f5f5f7` canvas with 3 image-first cards. Each card: white background, 18px radius, no shadow, image at top with 12px radius, 24px Display Card Title in `#1d1d1f`, 17px Body in `#6e6e73`. Use restrained spacing — 32px gap between cards, 96px section padding."

**In-CAD product panel:**
> "Build a DesignFlowAI in-CAD panel mockup at 420px wide on a `#1e1e1f` canvas. Top: 40px header with logo and settings icon. Below: 28px Geometry-Context Indicator chip showing `▸ HOLE · BRKT-7842-L` in 11px mono `#14b8a6` on `#272729` background with `#14b8a6` border at 0.4 opacity. Below: 48px Query Input on `#28282b`, 12px radius, 1px `#86868b` border, placeholder 'Ask about this feature, standard, or lesson learned…'. Below: stack of 3 Retrieved Knowledge Cards with source citations in 12px mono."

**Pitch deck — stat hero (dark):**
> "Design a 1920×1080 pitch deck slide on `#000000`. Top-left: 12px SF Pro Text 600 uppercase eyebrow 'THE PROBLEM' in `#14b8a6`, letter-spacing 1.2px. Center-left: 120px SF Pro Display 600 weight number '50%' in `#14b8a6`, letter-spacing -3px. Below number: 28px SF Pro Display 600 weight headline 'of engineering time is lost to non-value-added work.' in `#f5f5f7`, max-width 70%. Bottom-left: 11px SF Mono 'Source: CoLab Software, 2024' in `#86868b`. 160px outer margins."

**Pitch deck — comparison table (light):**
> "Design a 1920×1080 pitch deck slide on `#f5f5f7` showing a competitive comparison. Title: 40px SF Pro Display 600 weight in `#1d1d1f`. Table: white background, 18px radius, 1px `#d2d2d7` border. Column headers in 14px SF Pro Text 600 weight uppercase, `#6e6e73`. Cell text 17px SF Pro Text in `#1d1d1f`. DesignFlowAI row highlighted with `#0f766e` left border (4px) and bold row text. Source citation bottom-left in 11px mono."

**Editorial document — investor memo:**
> "Build a long-form investor memo layout on `#ffffff`, 760px reading column centered. H1: 40px SF Pro Display 600. H2: 28px Display 600. Body: 17px SF Pro Text 400, line-height 1.47, `#1d1d1f`. Inline links in `#134e4a`. Pull quotes in 19px Text 400 italic, `#6e6e73`, with a 4px `#0f766e` left border. References in 14px mono."

### Iteration Guide
1. Lock the neutral foundation first (`#000000`, `#f5f5f7`, `#ffffff`, `#1e1e1f`) before tuning teal accents.
2. Keep teal accents scarce and purposeful. If everything is teal, hierarchy collapses.
3. Tune typography in this order: display scale, body readability, then mono technical data.
4. Match radius by component class (field, card, capsule, circle) rather than one-size-fits-all rounding.
5. Increase density gradually when moving from showcase → utility surfaces.
6. Validate that CAD geometry, product imagery, and retrieved knowledge remain the strongest visual layer after each revision.
7. For pitch decks, validate the canvas rhythm holds when the deck is reviewed at thumbnail scale — alternation should be visible at-a-glance.

---

## 12. Known Gaps & Open Questions

- Dark-mode treatment of editorial documents (memos, technical white papers) is not yet specified. Default is light canvas.
- Animation/motion language is not yet codified. Default: ≤150ms transitions, no bounce easing, respect `prefers-reduced-motion`.
- Iconography system is not yet codified. Recommend Lucide as the substitute for SF Symbols, with stroke weight set to match SF Pro Text weight 400 (1.5px stroke).
- Voice interaction UI (Layer 2 roadmap) is not yet specified.
- Localization — Japanese typography pairing for Toyota / Japanese Tier 1 supplier contexts — is not yet codified. Recommended pairing: Noto Sans JP (Text) and Noto Serif JP (editorial).
