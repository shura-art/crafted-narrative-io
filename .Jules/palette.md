## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-05-18 - Standardize focus states and redesign secondary layouts
**Learning:** Focus rings and accessible routes should not be limited to primary pages. A complete SPA experience means pages like 404/NotFound require semantic containers supporting skip-links, framework-level SPA routing instead of standard anchors, and cohesive visual styles (using existing variables/gradients) to remain professional and navigable by keyboard users.
**Action:** Always implement semantic wrappers with tabIndex={-1} for skip links, standardise focus rings globally, and style secondary states with equal design fidelity.
