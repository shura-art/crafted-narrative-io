## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-05-18 - Implement 'Skip to Content' for SPA accessibility
**Learning:** In Single Page Applications (SPAs), a "Skip to Content" link must point to a target with `tabIndex={-1}` and `outline-none` to ensure focus moves correctly without creating a visual ring around the entire main container. This is essential for keyboard users to bypass repetitive header elements.
**Action:** Apply `id="main-content"`, `tabIndex={-1}`, and `outline-none` to the primary `<main>` or container element when adding skip links.
