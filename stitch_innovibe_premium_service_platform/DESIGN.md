---
name: Kinetic Precision
colors:
  surface: '#faf8ff'
  surface-dim: '#d9d9e5'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3fe'
  surface-container: '#ededf9'
  surface-container-high: '#e7e7f3'
  surface-container-highest: '#e1e2ed'
  on-surface: '#191b23'
  on-surface-variant: '#434655'
  inverse-surface: '#2e3039'
  inverse-on-surface: '#f0f0fb'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#5c5f61'
  on-secondary: '#ffffff'
  secondary-container: '#e0e3e5'
  on-secondary-container: '#626567'
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
  secondary-fixed: '#e0e3e5'
  secondary-fixed-dim: '#c4c7c9'
  on-secondary-fixed: '#191c1e'
  on-secondary-fixed-variant: '#444749'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#faf8ff'
  on-background: '#191b23'
  surface-variant: '#e1e2ed'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 60px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 48px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-padding: 80px
---

## Brand & Style

The design system is engineered for the high-end electric vehicle service sector, blending the technical precision of Tesla with the editorial clarity of Apple and the systematic reliability of Stripe. The brand personality is **sophisticated, efficient, and technologically advanced.** 

The visual direction follows a **Corporate / Modern** style with a focus on high-fidelity minimalism. It utilizes generous whitespace to reduce cognitive load and premium finishes—such as soft, multi-layered shadows and subtle hairlines—to signal quality. The goal is to evoke a sense of absolute trust and effortless utility, positioning the service as a premier partner in the EV ecosystem.

## Colors

The palette is anchored in high-contrast clarity. **Background White (#FFFFFF)** is used for primary surfaces to maximize the "breatheability" of the layout, while **Secondary Sections (#F8FAFC)** provide subtle structural anchoring for grouped content.

**Accent Blue (#2563EB)** is used exclusively for primary actions and critical interactive states, ensuring a high signal-to-noise ratio. **Success Green (#10B981)** is reserved for status indicators and completion states. Text follows a strict hierarchy: **Slate 900** for headlines to ensure "ink-heavy" authority, and **Slate 600** for supporting copy to maintain a lightweight, secondary feel.

## Typography

This design system utilizes **Inter** exclusively to lean into its systematic, highly-legible character. Typography is treated with a "tight" aesthetic—reduced letter-spacing on large headings mimics premium editorial design.

Hierarchy is established through weight and color rather than size alone. Display styles use **Bold (700)** for maximum impact, while UI labels use **Medium (500)** or **Semi-Bold (600)** at smaller scales to maintain legibility against white backgrounds. All body text maintains a generous 1.5x line height to ensure readability during longer service descriptions or technical specifications.

## Layout & Spacing

The layout philosophy is based on a **12-column fluid grid** with a maximum container width of 1280px. The "breathable" nature of the design is achieved through aggressive vertical spacing; sections are separated by no less than 80px (Section-Padding) on desktop to clearly demarcate the transition of ideas.

On mobile devices, margins shrink to 20px, and grid columns collapse into a single-stack vertical flow. Elements within cards and components follow an **8px base unit**, ensuring that all padding and margins are multiples of 8 to create a mathematically harmonious rhythm.

## Elevation & Depth

Hierarchy is communicated through **Soft, Multi-layered Shadows** and **Tonal Layers**. Instead of harsh borders, surfaces are defined by their elevation above the background.

- **Level 0 (Background):** #FFFFFF.
- **Level 1 (Subtle Inset):** #F8FAFC, used for section backgrounds to create a "shallow pool" effect.
- **Level 2 (Cards/Floating):** White background with a 1px border (#E2E8F0) and a sophisticated shadow: `0px 4px 6px -1px rgba(0, 0, 0, 0.05), 0px 2px 4px -2px rgba(0, 0, 0, 0.05)`.
- **Level 3 (Interactive/Hover):** Enhanced shadow with a broader spread to simulate physical lift.

Shadows should never be pure black; they are tinted with the Slate primary text color at very low opacities to keep the UI feeling "clean" and tech-forward.

## Shapes

The shape language is defined by large, welcoming radii that soften the technical nature of the content. 

- **Containers & Cards:** Use a 20px (rounded-xl/2xl) radius to create a distinct, modern silhouette.
- **Buttons & Inputs:** Use a 12px (rounded-lg) radius. This differentiates interactive elements from structural containers while maintaining a cohesive visual family.
- **Small Elements (Chips/Badges):** Use a 100px "Pill" shape to suggest fluidity and movement, appropriate for an EV-focused brand.

## Components

### Buttons
- **Primary:** Background #2563EB, Text #FFFFFF, 12px radius. Subtle lift shadow on hover.
- **Secondary:** Background #FFFFFF, Border 1px #E2E8F0, Text #0F172A. 
- **Sizing:** Large buttons (56px height) are preferred for primary calls-to-action to emphasize ease of use.

### Cards
- White background, 20px radius, 1px #E2E8F0 border.
- Cards should have a minimum internal padding of 32px to maintain the premium whitespace standard.

### Input Fields
- 12px radius, 1px #E2E8F0 border. On focus, the border transitions to #2563EB with a 4px soft outer glow.
- Labels sit above the field in **label-md** typography using Secondary Text color.

### Chips & Badges
- Used for "Success" or "Status" indicators. Backgrounds should be 10% opacity of the status color (e.g., Success Green at 10% for the chip background) with 100% opacity for the text.

### Progress Indicators
- For service tracking, use thin 4px lines with #2563EB for completion and #E2E8F0 for upcoming steps, emphasizing a "linear, tech-driven" journey.