---
name: InnoVibe Mobility System
colors:
  surface: '#f8f9ff'
  surface-dim: '#ccdbf3'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d5e3fc'
  on-surface: '#0d1c2e'
  on-surface-variant: '#434655'
  inverse-surface: '#233144'
  inverse-on-surface: '#eaf1ff'
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
  tertiary: '#006242'
  on-tertiary: '#ffffff'
  tertiary-container: '#007d55'
  on-tertiary-container: '#bdffdb'
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
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9ff'
  on-background: '#0d1c2e'
  surface-variant: '#d5e3fc'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.03em
  headline-section:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-section-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-card:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  code-mono:
    fontFamily: jetbrainsMono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
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
  margin-mobile: 16px
  margin-desktop: 40px
  section-gap: 80px
  stack-gap: 12px
---

## Brand & Style

The brand personality is characterized by precision, reliability, and forward-thinking engineering. It targets high-level enterprise stakeholders and logistics operators who require clarity and high-performance tools. 

The design style is **Corporate Modern with Minimalist influences**, heavily drawing from the aesthetic of industry leaders like Stripe and Linear. It prioritizes a "software-as-infrastructure" feel—unobtrusive yet exceptionally polished. The UI evokes a sense of calm authority through generous whitespace, high-contrast typography, and a "mechanical" purity. Every element is intentional, avoiding unnecessary decoration to ensure the product feels like a professional instrument rather than a consumer toy.

## Colors

The color palette is rooted in a pristine white environment to maximize perceived "air" and cleanliness. 

- **Primary Accent (#2563EB):** Reserved for primary actions, active states, and critical brand touchpoints. It is a vivid, digital blue that signals intelligence and trust.
- **Success Accent (#10B981):** Used for positive growth metrics, completed statuses, and system health indicators.
- **Grayscale Hierarchy:** #0F172A is used for high-impact text to ensure maximum readability. #475569 is used for secondary information and metadata to create a clear visual hierarchy.
- **Surface Strategy:** Use #FFFFFF for the main content "canvas" and #F8FAFC for sidebars, headers, or to distinguish nested container regions.

## Typography

The system utilizes **Inter** exclusively to maintain a systematic, utilitarian aesthetic that remains highly legible at all scales.

- **Tracking:** Apply slight negative letter spacing to headings (Hero and Section) to create a "tight," high-end editorial look.
- **Hierarchy:** Use font weight as a primary tool for hierarchy. Hero headings use Bold (700), while UI labels and data points use Medium (500) to stand out against regular body text.
- **Mono Usage:** For technical data, coordinates, or ID strings, JetBrains Mono may be used at 14px to signal technical precision.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid Grid**. Content is centered within a 1280px max-width container for desktop viewing, while utilizing a 12-column grid system.

- **Generous Whitespace:** Section transitions should utilize 80px to 120px of vertical padding to ensure the UI feels "premium" and uncrowded.
- **The 4px Rule:** All spacing increments (padding, margins, gaps) must be multiples of 4px to maintain mathematical harmony.
- **Responsive Reflow:** On mobile, columns collapse to a single stack. Horizontal margins reduce to 16px, and the gap between cards reduces to 16px to maximize screen real estate.

## Elevation & Depth

This design system avoids heavy drop shadows in favor of **Tonal Layering and Ambient Depth**.

1.  **Level 0 (Base):** Background (#FFFFFF).
2.  **Level 1 (Subtle Inset):** Secondary background (#F8FAFC) used for sidebars or recessed areas.
3.  **Level 2 (Cards/Modals):** Elements use a 1px border (#E2E8F0) and a very soft, multi-layered "ambient" shadow. 
    *   *Shadow Recipe:* `0 1px 3px rgba(15, 23, 42, 0.03), 0 10px 20px rgba(15, 23, 42, 0.05)`.
4.  **Interactions:** On hover, cards should subtly lift by increasing shadow spread and shifting 2px vertically, emphasizing the tactile quality of the interface.

## Shapes

The shape language is refined and consistent, leaning toward large radii to soften the "enterprise" feel.

- **Primary Cards:** Must use a 20px border radius (`rounded-xl` / 1.25rem equivalent). This is a signature element of the design system.
- **UI Elements:** Buttons, input fields, and smaller components use 8px (`0.5rem`) to maintain a professional, structured appearance.
- **Small Components:** Tags and chips use a fully rounded "pill" shape to distinguish them from actionable buttons.

## Components

- **Buttons:** Primary buttons use a solid #2563EB background with white text. Secondary buttons use a #FFFFFF background with a 1px #E2E8F0 border. All buttons should have a subtle 2px vertical inner shadow on top to create a "pressed" feel.
- **Input Fields:** Use a 1px border (#E2E8F0) and a 14px label placed above the field. On focus, the border changes to #2563EB with a 3px soft blue outer glow (20% opacity).
- **Cards:** Cards are the primary container. They feature the 20px corner radius, a 1px border, and the ambient shadow defined in the Elevation section.
- **Lists:** Table rows and list items should have generous 16px vertical padding. Use "Ghost" hover states (changing background to #F8FAFC) to indicate row selection.
- **Status Indicators:** Small 8px dots for "Live" or "Active" states. Use Success Accent (#10B981) for active and Neutral (#475569) for inactive/offline.
- **Navigation:** A clean, horizontal top-bar with a blur effect (`backdrop-filter: blur(8px)`) when scrolling, keeping the content underneath visible but legible.