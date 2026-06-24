---
name: Voltage Precision
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
  background: '#faf8ff'
  on-background: '#191b23'
  surface-variant: '#e1e2ed'
typography:
  hero-lg:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  hero-lg-mobile:
    fontFamily: Inter
    fontSize: 44px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  section-title:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  section-title-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-relaxed:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.7'
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  button-text:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  section-gap-desktop: 160px
  section-gap-mobile: 80px
  container-max-width: 1280px
  gutter: 32px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

This design system embodies the intersection of high-performance engineering and sustainable innovation. The brand personality is authoritative yet accessible, evoking a sense of forward momentum and technical mastery. 

The design style leans heavily into **High-End Corporate Modernism**, drawing inspiration from the clarity of Stripe and the precision of Tesla. It prioritizes clarity through extreme whitespace, high-contrast typography, and a "less but better" approach to UI elements. The emotional response should be one of absolute reliability, premium quality, and effortless technological advancement.

## Colors

The palette is engineered for maximum legibility and a clean, technical aesthetic. 

- **Primary (Electric Blue):** Used sparingly for primary actions, progress indicators, and key technical highlights.
- **Surface Strategy:** The system utilizes a dual-surface approach. The main canvas is pure white (#FFFFFF) for high-impact areas, while the secondary surface (#F8FAFC) is used to differentiate technical specs, footers, or grouped content modules.
- **Typography & Borders:** High-contrast slate tones ensure hierarchy is clear without the need for heavy decorative elements. Borders are kept subtle to maintain a "borderless" feel while providing just enough structure for interactive components.

## Typography

The typography system relies exclusively on **Inter**, utilizing its systematic, neutral, and highly legible characteristics. 

The hierarchy is dominated by aggressive, tight-tracked hero headings that command attention. Body copy uses a relaxed line height (1.7) to ensure readability against the generous whitespace. For technical data or small labels, a medium weight is preferred to maintain visibility against the light background.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid Grid**. Content is centered within a maximum container width of 1280px for desktop clarity, but background sections bleed to the edge of the viewport.

- **Vertical Rhythm:** Sections are separated by massive vertical gaps (160px) to signify premium positioning.
- **Grid:** A 12-column grid is used for desktop layouts, transitioning to a 4-column grid for mobile. 
- **Internal Spacing:** Use the 8px-based "stack" tokens for internal component spacing to maintain a mathematical, technical precision.

## Elevation & Depth

This design system avoids traditional skeuomorphism in favor of **Tonal Layering** and **Subtle Kinetic Depth**.

- **Resting State:** Components like cards and buttons should appear flat or with a 1px border (#E2E8F0) to look integrated into the page.
- **Interactive Depth:** Upon hover, elements should utilize a "Hover Lift" effect: a subtle translation upward (-4px) combined with a soft, diffused ambient shadow (0px 20px 40px rgba(15, 23, 42, 0.08)).
- **Glassmorphism (Specific Use):** Floating navigation bars or modal backdrops may use a light backdrop-blur (20px) with 80% opacity white to maintain context while ensuring legibility.

## Shapes

The shape language is sophisticated and modern, moving away from sharp industrial edges toward "friendly precision."

- **Base Radius:** 0.5rem (8px) for small interactive elements like buttons and inputs.
- **Component Radius:** 1rem (16px) for cards and modular containers.
- **Large Radius:** 1.5rem (24px) for featured hero images or promotional banners.
- **Icons:** Use clean, stroke-based line icons with a 2px weight and slightly rounded caps to match the typography.

## Components

- **Buttons:** Primary buttons are solid #2563EB with white text. Secondary buttons are #0F172A or outlined. Use a height of 48px or 56px for a more premium, "touch-ready" feel.
- **Cards:** White background, 1px border (#E2E8F0), and 16px corner radius. No shadow at rest; soft lift shadow on hover. Padding inside cards should be generous (32px+).
- **Input Fields:** Minimalist design with a 1px border. Focus state should use a 2px Electric Blue border with a soft blue outer glow.
- **Chips/Badges:** Small, uppercase labels with a light grey (#F1F5F9) background for status or category tags.
- **Lists:** Technical specs should be presented in clean, divided rows with #E2E8F0 hair-line separators and generous vertical padding (24px).
- **Progress Indicators:** Use the primary Electric Blue for charging or data-loading visualizations to maintain the EV-tech connection.