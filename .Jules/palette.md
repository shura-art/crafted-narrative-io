## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-07-14 - Implement Skip-to-Content for SPA accessibility
**Learning:** In Single Page Applications, implementing a "Skip to Content" link requires not only the link itself but also ensuring that the target container (e.g., `<main>`) has `tabIndex={-1}` and `outline-none`. This ensures that when the link is clicked, the focus moves to the container (allowing subsequent tab presses to reach the first interactive element in the content) without creating a focus ring around the entire main section.
**Action:** Always pair "Skip to Content" links with a `tabIndex={-1}` target and ensure it's applied across all top-level page components.
