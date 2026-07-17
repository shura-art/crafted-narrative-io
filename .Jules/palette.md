## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-05-18 - Implement global localized Skip to Content link for keyboard users
**Learning:** For single-page applications, implementing a global skip-to-content link styled specifically for high visibility when focused via keyboard navigation provides massive keyboard accessibility benefits. Adding `tabIndex={-1}` and `outline-none` to page-level containers (`<main id="main-content">`) on all active pages ensures correct focus behavior across different viewports and routes.
**Action:** Always use localized skip-to-content links pointing to a semantic `<main>` tag with appropriate `tabIndex` and focus configuration to support seamless screen reader and keyboard-only interaction.
