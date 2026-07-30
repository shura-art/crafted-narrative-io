## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-05-18 - Standardizing focus rings for glassmorphism themes
**Learning:** In premium dark glassmorphism design systems, default browser focus outlines often suffer from very poor contrast or disrupt the elegant styling of rounded, semi-transparent components. Implementing consistent focus rings using theme-specific variables (`focus-visible:ring-2 focus-visible:ring-accent-glow/60`) provides both standard-compliant keyboard navigation and visually stunning, high-contrast glow indicators.
**Action:** Always override browser focus defaults with custom glow-styled rings matching the accent color for all buttons and anchor links in dark theme portfolios.
