## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-05-18 - Implement Skip to Content link for SPA accessibility
**Learning:** In Single Page Applications (SPAs), users navigating with keyboards or screen readers often have to tab through repetitive navigation elements on every page load. A "Skip to Content" link provides a significant accessibility boost. For the target to receive focus correctly without an unwanted visual outline, it should have `tabIndex={-1}` and `outline-none`.
**Action:** Implement "Skip to content" links in the main App component and ensure all page containers have matching IDs and focus management attributes.
