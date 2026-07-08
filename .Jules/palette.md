## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-07-08 - Implement 'Skip to content' for keyboard accessibility in SPAs
**Learning:** In Single Page Applications, providing a 'Skip to content' link is crucial for users who rely on keyboard navigation. It must be the first focusable element, use the 'sr-only focus:not-sr-only' pattern, and target a container with 'tabIndex={-1}' and 'outline-none' to ensure focus moves correctly without visual noise.
**Action:** Always include a skip-to-content link in the root application layout and ensure all page components have a matching target container with proper accessibility attributes.
