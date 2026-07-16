## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-05-18 - Reliable 'Skip to Content' in Single Page Applications
**Learning:** For 'Skip to Content' links to function correctly in SPAs, the target element (usually `<main>`) must have `id="main-content"` and `tabIndex={-1}`. The negative tabIndex allows the element to receive programmatic focus while remaining out of the natural tab order. Adding `outline-none` prevents an unsightly focus ring when the link is activated, while still ensuring screen readers announce the new location.
**Action:** When implementing skip-links, ensure all target page containers have the appropriate ID and accessibility attributes.
