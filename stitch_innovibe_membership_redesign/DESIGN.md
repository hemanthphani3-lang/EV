---
name: Lumina EV
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
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002113'
  on-tertiary-container: '#009668'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
  text-primary: '#0F172A'
  text-secondary: '#475569'
  border-subtle: '#E2E8F0'
  surface-white: '#FFFFFF'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 32px
  margin-mobile: 20px
  section-padding-desktop: 120px
  section-padding-mobile: 64px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

The design system is engineered to evoke a sense of premium reliability and forward-thinking utility. It targets discerning electric vehicle owners who value efficiency, exclusivity, and seamless technological integration. The brand personality is authoritative yet approachable, mimicking the sophisticated transparency of modern financial institutions and high-end consumer electronics.

The chosen style is **Minimalist with Corporate Modern influences**. It prioritizes extreme clarity, generous whitespace, and a high-fidelity finish. By utilizing a "less but better" philosophy, the design system removes visual noise to focus the user's attention on value propositions and membership benefits. The aesthetic is characterized by sharp precision, subtle motion, and a spacious layout that feels "airy" and expensive.

## Colors

The palette is anchored by **Deep Navy (#0F172A)**, providing a weighted, trustworthy foundation for typography and primary branding. **Corporate Blue (#2563EB)** serves as the high-action accent color, used sparingly to guide users toward conversion points and interactive elements. 

Backgrounds rely on a crisp **White (#FFFFFF)** for primary content areas, with **Slate Tint (#F8FAFC)** used for section alternating to maintain a sense of structured hierarchy without the need for heavy dividers. **Success Green (#10B981)** is reserved strictly for positive status indicators and "verified" membership states. All colors must pass WCAG AA contrast ratios against the slate and white backgrounds to ensure professional accessibility.

## Typography

The design system utilizes **Inter** across all levels to achieve a systematic, utilitarian, and clean look. The typographic hierarchy relies on significant scale differences and tight letter-spacing for large displays to create a high-end editorial feel.

- **Headlines:** Use Semi-Bold to Bold weights with slight negative letter-spacing to feel "tight" and impactful.
- **Body:** Use a 1.6x line height for larger body text to ensure maximum readability and contribute to the "spacious" brand feel.
- **Labels:** Use Medium to Semi-Bold weights with increased letter-spacing for all-caps or small-scale metadata to ensure clarity.

## Layout & Spacing

This design system uses a **Fixed Grid** approach for desktop environments, centering content within a 1280px container to maintain visual control and high-end proportions. 

- **The Grid:** A 12-column system with generous 32px gutters.
- **Vertical Rhythm:** Section vertical padding is intentionally aggressive (120px on desktop) to enforce the "airy" luxury aesthetic. Elements within a card or component should follow an 8px base grid.
- **Responsive Behavior:** On mobile, the grid collapses to a single column with 20px side margins. Tablet devices use a 6-column grid. Components like the Feature Grid should reflow from 3 columns (desktop) to 2 columns (tablet) to 1 column (mobile).

## Elevation & Depth

To maintain a "Stripe-inspired" modern clean look, this design system avoids heavy shadows in favor of **Tonal Layers** and **Ambient Elevation**.

- **Surface Strategy:** Backgrounds are flat. Interactive cards use a white surface with a very subtle 1px border (#E2E8F0).
- **Shadow Profile:** When elevation is required (e.g., pricing cards or hover states), use a multi-layered "Soft Ambient" shadow:
  - `0px 4px 6px -1px rgba(15, 23, 42, 0.03), 0px 10px 15px -3px rgba(15, 23, 42, 0.05)`
- **Depth Hierarchy:** Primary navigation sits at the highest Z-index with a background blur (Glassmorphism effect) when scrolling over content, using a `backdrop-filter: blur(12px)` and 80% opacity white.

## Shapes

The shape language is defined by modern, generous curves that soften the corporate color palette. 

- **Cards:** Use a signature 24px radius (`rounded-xl`) to feel approachable and high-end.
- **Buttons:** Use a 14px radius to distinguish them from standard square buttons, providing a more custom, "designed" feel.
- **Inputs:** Match the button radius at 14px for consistency.
- **Icon Containers:** Should use a 12px squircle or "rounded-lg" shape.

## Components

- **Pricing Cards:** Feature a prominent "Most Popular" badge using the Accent Blue. Use `headline-xl` for the price point and a vertical list of features with Success Green checkmarks. Elevated via the Ambient Shadow on hover.
- **Comparison Table:** Uses a "no-border" approach. Alternate rows with the #F8FAFC background. Headers should be `label-md` in all-caps.
- **Buttons:** 
  - *Primary:* Solid #2563EB with white text. 
  - *Secondary:* Ghost style with 1px #E2E8F0 border and #0F172A text.
- **Feature Grid:** Large, 48px icons using a two-tone Blue/Slate treatment. Titles in `headline-lg`, descriptions in `body-md`.
- **Vertical Timeline:** A 2px #E2E8F0 central line. Active steps use a solid Blue dot; inactive steps use a hollow Slate circle.
- **Accordions:** Flat design with a simple plus/minus toggle. No borders between items—only a single 1px divider at the bottom of each item.
- **CTA Sections:** Deep Navy (#0F172A) background with White `display-lg` typography. Ensure the Primary Button is high-contrast (White or Blue) against the dark background.