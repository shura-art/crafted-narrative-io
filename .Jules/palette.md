## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-05-18 - Implement "Skip to content" link for SPA accessibility
**Learning:** In Single Page Applications, a "Skip to content" link is essential for keyboard and screen-reader users to bypass repetitive navigation. To make it work correctly, the target container must have `id="main-content"`, `tabIndex={-1}`, and `outline-none`. This ensures that programmatic focus moves to the content area without creating a visual focus ring around the entire container, maintaining both accessibility and aesthetic integrity.
**Action:** Always implement a "Skip to content" link at the root of the application and ensure all major page layouts include a focusable `#main-content` target.
