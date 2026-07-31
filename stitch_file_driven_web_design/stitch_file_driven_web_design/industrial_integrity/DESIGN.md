---
name: Industrial Integrity
colors:
  surface: '#f8f9fe'
  surface-dim: '#d8dadf'
  surface-bright: '#f8f9fe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3f8'
  surface-container: '#eceef3'
  surface-container-high: '#e6e8ed'
  surface-container-highest: '#e1e2e7'
  on-surface: '#191c1f'
  on-surface-variant: '#41474f'
  inverse-surface: '#2e3134'
  inverse-on-surface: '#eff1f5'
  outline: '#717880'
  outline-variant: '#c0c7d0'
  surface-tint: '#106397'
  primary: '#00456d'
  on-primary: '#ffffff'
  primary-container: '#005d91'
  on-primary-container: '#a9d4ff'
  inverse-primary: '#95ccff'
  secondary: '#006688'
  on-secondary: '#ffffff'
  secondary-container: '#43c5fd'
  on-secondary-container: '#004f6b'
  tertiary: '#643500'
  on-tertiary: '#ffffff'
  tertiary-container: '#864900'
  on-tertiary-container: '#ffc392'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cee5ff'
  primary-fixed-dim: '#95ccff'
  on-primary-fixed: '#001d32'
  on-primary-fixed-variant: '#004a75'
  secondary-fixed: '#c2e8ff'
  secondary-fixed-dim: '#77d1ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004d68'
  tertiary-fixed: '#ffdcc1'
  tertiary-fixed-dim: '#ffb779'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#6c3a00'
  background: '#f8f9fe'
  on-background: '#191c1f'
  surface-variant: '#e1e2e7'
  status-normal: '#008751'
  status-caution: '#FFAB00'
  status-critical: '#DE350B'
  background-subtle: '#F4F5F7'
  border-neutral: '#C1C7D0'
  text-heading: '#172B4D'
typography:
  headline-lg:
    fontFamily: IBM Plex Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-caps:
    fontFamily: IBM Plex Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-page: 24px
  card-padding: 16px
  table-cell-padding: 12px
---

## Brand & Style
The design system is engineered for the high-stakes environment of battery material manufacturing. It prioritizes **data integrity, systemic precision, and professional reliability**. The brand personality is "The Authoritative Engineer"—expert, calm under pressure, and obsessed with accuracy.

The visual style is **Corporate / Modern** with a focus on **Functional Flatness**. To ensure maximum visibility in varied industrial lighting conditions (from control rooms to tablet-equipped shop floors), the system utilizes high-contrast boundaries, a clean white/light-gray foundation, and strategic use of depth. It avoids unnecessary decorative elements, ensuring that every pixel serves a functional purpose in the quality analysis workflow.

## Colors
The palette is rooted in **POSCO Blue**, symbolizing trust and industrial heritage. This is complemented by a rigorous **Traffic Light Protocol (TLP)** for status signaling.

- **Primary (POSCO Blue):** Used for persistent brand elements, primary actions, and global navigation.
- **Status Colors:** These take precedence in data visualization. `status-normal` (Green/Blue) indicates stability, `status-caution` (Amber) signals baseline excursions, and `status-critical` (Red) demands immediate intervention.
- **Neutral Palette:** High-readability grays are used to differentiate "Surface" (White) from "Canvas" (Subtle Gray), ensuring the UI feels layered without relying on heavy shadows.
- **Accessibility Note:** Color is never the sole indicator of status; it must always be accompanied by labels or semantic icons.

## Typography
This design system utilizes a dual-font strategy to balance readability and technical precision.

- **Primary Font (IBM Plex Sans):** A systematic, professional typeface used for all UI headers, body text, and navigation. It provides a human yet industrial feel.
- **Technical Font (JetBrains Mono):** Reserved for LOT numbers, timestamps, measurement values (e.g., 950°C), and data-heavy tables. Monospacing ensures that numerical values align vertically, allowing engineers to spot anomalies in digit length or value changes instantly.
- **Hierarchy:** Large headings are reserved for dashboard sections, while high-density labels use uppercase weights for clear categorization of 4M (Man, Machine, Material, Method) data points.

## Layout & Spacing
The layout follows a **Fixed-Width Dashboard** philosophy for desktop (targeting 1440px+ control room displays) and a fluid reflow for tablet devices.

- **Grid:** A 12-column system is used to organize KPI cards and analysis charts. 
- **Vertical Rhythm:** A 4px baseline grid ensures tight, professional alignment of data rows. 
- **Modular Containers:** Information is grouped into cards. For dense "Data Selection" screens, margins are reduced to 16px to maximize information density. For "Final Reports," whitespace is increased to 24px to improve legibility for executive review.
- **Step-Based Flow:** The 4-step analysis workflow is pinned to the top of the content area, serving as both a progress indicator and a global navigation toggle.

## Elevation & Depth
Depth is used functionally to signify interactivity and priority.

- **Level 0 (Canvas):** Background color `#F4F5F7`. Used for the main work area behind cards.
- **Level 1 (Surface):** White cards with a 1px solid border (`#C1C7D0`). No shadow is used here to maintain a clean, flat appearance.
- **Level 2 (Interactive):** Subtle ambient shadows (0px 2px 4px rgba(0,0,0,0.08)) are applied only to hover states or active KPI cards to indicate they are "clickable" or "selected."
- **Level 3 (Overlays):** Modals (e.g., Lot Detail) use a 15% opacity black backdrop blur to isolate the task from the background data grid.

## Shapes
The shape language is **Soft (0.25rem)**, leaning toward the "Sharp" end of the spectrum. 

- **Containers:** Standard cards and input fields use a 4px radius, providing a professional, engineered look that fits the industrial context.
- **Status Indicators:** Status circles and icons remain geometric to ensure they are instantly recognizable.
- **Buttons:** Primary action buttons follow the same 4px radius. "Pill" shapes are avoided to maintain the serious, data-driven aesthetic of the tool.

## Components

- **Data Tables:** High-density grids using `data-mono` typography. Header rows are slightly darker (`#EBECF0`) to anchor the data. Row highlighting is used on hover. Critical LOT numbers are flagged with a 4px left-border stripe in `status-critical`.
- **KPI Cards:** Large-format metric displays. These must include the metric name, the current value, and a small "sparkline" or "delta" (e.g., +2.4%) to show trend.
- **Interactive Charts:** Pareto, Scatterplot, and Bar charts must use the defined status colors. Trend lines should be high-contrast (Secondary Blue).
- **Step Navigation:** A horizontal stepper component. Completed steps show a checkmark in `status-normal`; the active step is highlighted in `primary_color`.
- **Input Fields:** Form-style inputs with clear 1px borders. Focused states use a 2px `primary_color` outline.
- **AI Transparency Badge:** AI-generated suggestions must be enclosed in a dashed-border container with a "⚠ Estimated" (추정) badge to clearly distinguish them from verified manufacturing data.
- **Buttons:** 
    - *Primary:* Solid POSCO Blue. 
    - *Secondary:* Outline POSCO Blue. 
    - *Danger:* Solid Red for "Reset" or "Delete" actions.