---
name: Kinetic Clarity
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fc'
  on-secondary-container: '#57657a'
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
  secondary-fixed: '#d5e3fc'
  secondary-fixed-dim: '#b9c7df'
  on-secondary-fixed: '#0d1c2e'
  on-secondary-fixed-variant: '#3a485b'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
  background-main: '#FFFFFF'
  background-section: '#F8FAFC'
  success-emerald: '#10B981'
  border-subtle: '#E2E8F0'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
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
  unit: 4px
  container-max: 1280px
  gutter: 32px
  margin-mobile: 20px
  section-padding: 80px
---

## Brand & Style

The design system is engineered for a premium EV support hub, prioritizing clarity, technical precision, and effortless navigation. It targets a sophisticated audience that expects the seamlessness of high-end hardware interfaces. 

The aesthetic is **Modern Corporate Minimalism** with a focus on tactile depth. It draws inspiration from the utility of Linear and the editorial elegance of Apple. The interface should feel "airy" yet structured, utilizing intentional whitespace to reduce cognitive load during support interactions. Motion is restrained but purposeful—elements should feel like they have physical weight, reacting with "hover lift" effects that mimic the precision of electric vehicle instrumentation.

## Colors

This design system utilizes a high-contrast, "Light Only" palette to ensure maximum legibility and a clean, clinical feel. 

- **Primary Accent (#2563EB):** Used exclusively for primary actions, progress indicators, and active states. It represents the "energy" of the EV ecosystem.
- **Surface Strategy:** The system uses `#FFFFFF` for the main canvas and `#F8FAFC` for secondary sections or container backgrounds to create subtle structural hierarchy without relying on heavy borders.
- **Typography Tiers:** Primary text uses the deep `#0F172A` for authoritative headers, while secondary text uses `#475569` to provide context and metadata without competing for attention.

## Typography

The typography relies on **Inter** to deliver a systematic, utilitarian aesthetic that remains highly readable. 

- **Weight & Emphasis:** Headlines use Semi-Bold and Bold weights with tighter letter-spacing to create a "locked-in" technical look. 
- **Hierarchy:** Use `display-lg` for hero support categories and `headline-xl` for article titles. 
- **Labels:** Small labels and tags should be uppercase with slight letter-spacing to distinguish them from body copy, mimicking the labeling found on automotive parts and technical manuals.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a premium "magazine" feel, transitioning to a fluid model for mobile.

- **The 8px Grid:** All spacing between elements must be a multiple of 8px. This ensures a mathematical harmony across the UI.
- **Intentional Whitespace:** Section vertical padding is generous (80px+) to allow the user's eyes to rest. 
- **Breakpoints:**
  - **Desktop (1280px+):** 12-column grid with 32px gutters.
  - **Tablet (768px - 1024px):** 8-column grid with 24px gutters.
  - **Mobile (Below 768px):** 4-column fluid grid with 20px side margins.

## Elevation & Depth

Visual hierarchy is achieved through a mix of **Tonal Layers** and **Ambient Shadows**.

- **Level 0 (Base):** `#FFFFFF` - The main page background.
- **Level 1 (Section):** `#F8FAFC` - Large background blocks to separate content.
- **Level 2 (Cards/Inputs):** White surfaces with a 1px border of `#E2E8F0`. 
- **Interactive State (Hover Lift):** When a user hovers over a card or button, the border disappears or softens, and a "Soft Shadow" is applied: `0 20px 25px -5px rgba(15, 23, 42, 0.05), 0 8px 10px -6px rgba(15, 23, 42, 0.05)`. The element should translate -4px on the Y-axis.

## Shapes

The shape language is "Extra Large Soft." While the base unit is `rounded-md` (0.5rem), the system leans heavily on `2xl` corners for major components.

- **Primary Containers:** Cards and large sections use a radius of **1rem (16px)**.
- **Inputs & Buttons:** Use a consistent **0.75rem (12px)** to feel approachable yet modern.
- **Chips/Badges:** Use **Pill-shaped** (full radius) to contrast against the more architectural card shapes.

## Components

- **Buttons:** Primary buttons use a solid `#2563EB` background with white text. Secondary buttons use a `#FFFFFF` fill with a `#E2E8F0` border. All buttons must have a 200ms ease-in-out transition for hover lift effects.
- **Support Cards:** Large white tiles with `16px` rounded corners. They should feature a subtle icon in the top-left and use `headline-lg` for the title.
- **Input Fields:** Background should be `#FFFFFF`. On focus, the border transitions from `#E2E8F0` to `#2563EB` with a soft blue outer glow (2px).
- **Status Indicators:** Use the `success-emerald` for "System Online" or "Battery Healthy" statuses, always accompanied by a small pulsing dot animation for a "live" feel.
- **Search Bar:** A prominent, oversized input field (64px height) with a glass-like shadow, acting as the primary hub for support queries.