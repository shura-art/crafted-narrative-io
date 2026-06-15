## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-05-18 - Standardized Focus States and Skip Links
**Learning:** For single-page applications with complex visual styles (glassmorphism), a "Skip to content" link is vital. To make it effective, the target container must have `id="main-content"`, `tabIndex={-1}`, and `outline-none` to ensure the screen reader moves focus without adding a redundant visual ring to the entire page wrapper. Consistent `focus-visible` ring styles are the most effective way to balance accessibility with a "glow" design system.
**Action:** Implement `id="main-content"` on all top-level page components and use standardized `focus-visible` rings across all interactive elements.
