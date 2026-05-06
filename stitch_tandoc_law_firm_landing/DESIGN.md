---
name: Juris Prestige
colors:
  surface: '#fcf9f5'
  surface-dim: '#dcdad6'
  surface-bright: '#fcf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f0'
  surface-container: '#f0edea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e5e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#44464f'
  inverse-surface: '#31302e'
  inverse-on-surface: '#f3f0ed'
  outline: '#757780'
  outline-variant: '#c5c6d0'
  surface-tint: '#485e8d'
  primary: '#001c49'
  on-primary: '#ffffff'
  primary-container: '#1b325f'
  on-primary-container: '#869bcf'
  inverse-primary: '#b1c6fc'
  secondary: '#755a21'
  on-secondary: '#ffffff'
  secondary-container: '#fed892'
  on-secondary-container: '#785d24'
  tertiary: '#311800'
  on-tertiary: '#ffffff'
  tertiary-container: '#4f2a00'
  on-tertiary-container: '#c7905d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#b1c6fc'
  on-primary-fixed: '#001944'
  on-primary-fixed-variant: '#304674'
  secondary-fixed: '#ffdea4'
  secondary-fixed-dim: '#e6c27e'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5b430a'
  tertiary-fixed: '#ffdcc0'
  tertiary-fixed-dim: '#f7ba83'
  on-tertiary-fixed: '#2d1600'
  on-tertiary-fixed-variant: '#663d11'
  background: '#fcf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e5e2df'
typography:
  headline-display:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '500'
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
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  unit: 8px
  gutter: 24px
  margin-page: 64px
  section-gap: 120px
  content-max-width: 1100px
---

## Brand & Style

The design system is rooted in the concepts of **Intellectual Authority** and **Timeless Reliability**. It is designed for a high-end legal practice where the digital interface must feel as tactile and permanent as a signed affidavit on heavy bond paper. 

The aesthetic is a refined **Minimalism** that borrows from the editorial layout of premium legal journals. It avoids modern digital trends like rounded corners or floating shadows in favor of a "flat-yet-deep" structure defined by hairline borders, classic typography, and a purposeful use of negative space. The goal is to evoke a sense of calm confidence and absolute professionalism through precision and restraint.

## Colors

The palette is anchored by a warm, off-white background that mimics high-quality stationary, reducing eye strain and providing a sophisticated alternative to pure white. 

- **Navy Blue (#1b325f):** Used for primary typography, headers, and structural dividers. It represents stability and institutional power.
- **Gold (#b89758):** Used sparingly as an accent for call-to-actions, active states, and ornamentation. It should be treated as a highlight, never a dominant surface color.
- **Off-White (#f4f4f0):** The primary canvas. All layouts should prioritize this "paper" surface to maintain the minimalist document feel.
- **Neutral (#2a2a28):** A softer black used only for long-form body text to ensure maximum readability against the cream background.

## Typography

This design system utilizes a high-contrast typographic pairing. **Noto Serif** (as a premium alternative to Playfair) provides the intellectual weight required for titles and section headers, echoing the look of legal statutes. 

**Inter** provides the functional counterpoint. It is used for all "utility" content, including navigation, forms, and secondary descriptions. To maintain the formal tone, labels and small metadata should often be set in Inter Bold with increased letter spacing and uppercase styling.

## Layout & Spacing

The layout follows a **Fixed Grid** model inspired by international paper sizes. Content is centered within a generous max-width to ensure lines of text do not become too long to read comfortably.

The rhythm is intentionally slow. Large vertical gaps (Section Gaps) are used to separate different legal practice areas or service modules, forcing the user to focus on one piece of information at a time. Hairline dividers (1px) in Navy or muted Gold should be used to separate header/footer elements from the main body, mirroring the layout of a formal letterhead.

## Elevation & Depth

This design system rejects the use of 3D shadows and depth. Instead, hierarchy is established through **Tonal Layering** and **Line Work**.

- **Flat Planes:** All elements sit on the same Z-axis.
- **Low-Contrast Outlines:** Instead of shadows, use 1px solid Navy or Gold borders to define cards or input fields.
- **Inverted Surfaces:** For high-priority sections, use a full Navy background with Gold or Cream text to create a "void" that draws the eye, rather than using a drop shadow.

## Shapes

To maintain an authoritative and traditional architectural feel, the design system employs a **Sharp (0px)** roundedness strategy. Every button, input field, and container features crisp 90-degree angles. This geometry reinforces the ideas of precision, law, and structural integrity.

## Components

### Buttons
Primary buttons are solid Navy with Cream text. Secondary buttons are transparent with a 1px Gold border and Gold text. All buttons are rectangular with no corner radius.

### Input Fields
Inputs consist of a bottom-border only (1px Navy), resembling a line on a signature page. Labels sit above the line in the "label-caps" style.

### Cards
Cards are defined by a thin 1px border (#d1d1cc) rather than a background change. This keeps the "paper" feel consistent across the entire interface.

### Dividers & Rules
Use horizontal rules to separate content. A double-line divider (one Navy, one Gold) can be used for major section transitions to mimic the "Tandoc and Tandoc" visual style seen in legal branding.

### Lists
Bulleted lists should use small, square Gold markers or traditional Roman Numerals to enhance the formal document aesthetic.