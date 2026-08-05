## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-05-18 - "Skip to Content" keyboard accessibility in Single Page Applications
**Learning:** Adding a "Skip to Content" accessibility link is vital for keyboard navigation to bypass global layout elements. In Single Page Applications (SPAs), ensure the target container (e.g. `<main>`) has `id="main-content"`, `tabIndex={-1}`, and `outline-none` so that focus transitions correctly without displaying a disruptive browser outline ring on the container itself.
**Action:** Always provide skip-to-content routing on layouts and ensure target containers are keyboard-focusable but styled without a visual ring.
