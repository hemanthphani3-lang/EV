---
name: Voltage & Verse
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434655'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
  success: '#10B981'
  border: '#E2E8F0'
  text-primary: '#0F172A'
  text-secondary: '#475569'
  surface-elevated: '#FFFFFF'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  page-margin-desktop: 80px
  page-margin-tablet: 40px
  page-margin-mobile: 20px
  gutter: 32px
  section-gap: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

The design system is engineered for a premium EV knowledge hub, bridging the gap between high-performance automotive engineering and sophisticated editorial publishing. It draws inspiration from the precision of Tesla, the clarity of Apple, the typographic authority of Stripe Press, and the readability of Medium.

The aesthetic is **Modern Minimalist with an Editorial Edge**. It prioritizes extreme clarity, purposeful whitespace, and a high-contrast visual hierarchy that treats information as a luxury good. The goal is to evoke a sense of "quiet intelligence"—an environment that feels technologically advanced yet deeply human and accessible. 

Key principles:
- **Atmospheric Clarity:** Using white space not just as a gap, but as a structural element to focus the user’s attention.
- **Precision Engineering:** Every border, radius, and alignment must feel intentional and sharp.
- **Magazine Sophistication:** Large-scale typography and fluid, multi-column layouts that feel like a digital broadsheet.

## Colors

The color palette is rooted in a high-fidelity monochrome base, punctuated by a precise "Electric Blue" accent. 

- **Primary (#2563EB):** Used sparingly for high-impact actions and brand signifiers. It represents energy and connectivity.
- **Surface Palette:** The background is pure `#FFFFFF` for maximum readability. The secondary background (`#F8FAFC`) is used for sectioning and content grouping to provide subtle depth without visual clutter.
- **Typography:** Primary text uses a deep Navy-Slate (`#0F172A`) to avoid the harshness of pure black while maintaining maximum contrast. Secondary text (`#475569`) provides a clear hierarchy for metadata and captions.
- **Functional Colors:** Success Green is reserved for positive performance metrics (e.g., range efficiency, charging completion). Borders are kept extremely light (`#E2E8F0`) to remain nearly invisible until focused.

## Typography

The typographic system utilizes **Inter** exclusively, leaning into its variable weights to create a systematic, tech-focused editorial feel. 

- **Headlines:** Use tight letter-spacing and heavy weights (SemiBold/Bold) to mimic high-end magazine mastheads.
- **Body Text:** The `body-lg` role is the workhorse of this system, featuring a generous line-height (1.6x) to ensure long-form articles are effortless to read.
- **Labels:** Small caps or all-caps with increased letter-spacing should be used for category chips and metadata to differentiate them from prose.
- **Scaling:** On mobile, display sizes are aggressively scaled down to maintain composition without causing horizontal scrolling or excessive line breaks.

## Layout & Spacing

This design system uses a **Fluid-Fixed Hybrid Grid**. Content is centered within a maximum container width of 1280px for readability, but background elements and imagery may bleed to the edges of the viewport to create a cinematic feel.

- **The 12-Column Grid:** Desktop layouts use 12 columns with 32px gutters. Editorial content typically occupies the central 8 columns to optimize line length.
- **Vertical Rhythm:** A massive 120px gap is used between major sections to emphasize the "premium" use of space.
- **Responsive Behavior:** 
  - **Desktop:** 12 columns, 80px margins.
  - **Tablet:** 8 columns, 40px margins.
  - **Mobile:** 4 columns, 20px margins.
- **Stacking:** Internal component spacing follows an 8px base unit. Card padding is strictly 32px to 40px to maintain the spacious aesthetic.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layering** and **Sophisticated Shadows**, avoiding heavy borders or traditional skeuomorphism.

- **Surfaces:** The primary level is the flat background. Secondary surfaces (like the navigation bar or search fields) use a subtle `0.5px` border or a faint backdrop blur (glassmorphism) when over images.
- **The "Signature" Shadow:** Cards and elevated elements utilize a dual-layer shadow:
  - A tight, slightly dark shadow for definition.
  - A wide, very low-opacity (2-4%) ambient shadow that "glows" rather than "drops."
- **Depth Tiers:**
  - **Level 0 (Flat):** Main background.
  - **Level 1 (Raised):** Cards on hover or subtle section containers.
  - **Level 2 (Floating):** Navigation menus, modals, and dropdowns.

## Shapes

The shape language is defined by "The Large Radius," echoing the industrial design of modern EV interiors.

- **Standard Elements:** Buttons and small input fields use a `0.5rem` (8px) radius.
- **Premium Cards:** These are the centerpiece of the UI and must use `1.25rem` to `1.5rem` (20px-24px) corner radii.
- **Interactive Pills:** Chips and category tags are fully rounded (pill-shaped) to provide a soft contrast to the structured grid of the cards.
- **Media:** Photography and video embeds should always match the radius of their parent container.

## Components

- **Premium Cards:** Feature a subtle `#E2E8F0` border and the signature soft shadow. Images within cards should have no bottom radius if they meet the card edge, or a nested radius if padded. Use 40px internal padding.
- **Buttons:** 
  - *Primary:* Solid `#0F172A` (Text Primary) with white text. This creates a more sophisticated, "Stripe-like" look than using the accent blue for everything.
  - *Secondary:* Ghost style with a 1px `#E2E8F0` border.
- **Chips/Pills:** Used for categories (e.g., "Sustainability," "Performance"). Light gray background (`#F1F5F9`) with `label-lg` typography. No borders.
- **Input Fields:** Minimalist design. A bottom border that thickens and changes to the Primary Blue on focus, or a fully enclosed light-gray field with no border.
- **Progress Indicators:** For article reading or charging stats, use thin, 2px "Electric Blue" lines. 
- **Article Headers:** Massive `display-xl` type with 80px of padding-bottom before the lead paragraph.