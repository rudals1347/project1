# Quality Insight Web Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a working local Quality Insight single-page web experience from the Stitch screens and the integrated project brief.

**Architecture:** Preserve the Industrial Integrity visual system while composing the four Stitch concepts into one client-side application. Use embedded sample records for immediate local demonstration, support CSV upload through browser parsing, and keep analysis calculations deterministic in JavaScript so the UI works without an API key.

**Tech Stack:** HTML, CSS, vanilla JavaScript, inline SVG charts, IBM Plex Sans, JetBrains Mono, browser FileReader.

## Global Constraints

- Keep the Stitch Industrial Integrity visual language: POSCO Blue, high-contrast industrial surfaces, compact 4px radii, IBM Plex Sans, JetBrains Mono.
- Use Korean as the default UI language.
- Show analytical values as data-backed candidates, not confirmed causal claims.
- Keep the app runnable locally by opening `index.html` or serving the folder with a static server.
- Do not expose or require an OpenAI API key in the browser demo.

---

### Task 1: Compose the local Quality Insight app

**Files:**
- Create: `stitch_file_driven_web_design/stitch_file_driven_web_design/index.html`

**Interfaces:**
- Consumes: project brief and Stitch visual system.
- Produces: a single-page app with navigation, CSV upload, KPI dashboard, charts, 4M cause candidates, 5 Why panel, improvement matrix, report preview, and HTML export.

- [ ] Add the shared shell, navigation, language toggle, status legend, and responsive layout.
- [ ] Add the data selection flow with embedded sample records and CSV upload parsing.
- [ ] Add deterministic calculations for defect rate, defect type totals, Pareto, and numeric condition correlations.
- [ ] Add dashboard cards, charts, filters, LOT table, and risk signals.
- [ ] Add 4M candidate scoring, evidence rows, 5 Why interaction, and improvement matrix.
- [ ] Add report preview and HTML download action.

### Task 2: Verify the local experience

**Files:**
- Verify: `stitch_file_driven_web_design/stitch_file_driven_web_design/index.html`

**Interfaces:**
- Consumes: browser-rendered app.
- Produces: a verified local demo with no JavaScript errors and working primary interactions.

- [ ] Run the page from the project folder with a static server.
- [ ] Check default dashboard, filters, navigation, CSV file selection, 5 Why controls, and report download.
- [ ] Check narrow-width layout and repair clipping or unreadable content.
- [ ] Scan the final file for unresolved placeholder text and broken selectors.
