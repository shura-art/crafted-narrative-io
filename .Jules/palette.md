## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-07-02 - Implement Skip to content link for accessibility
**Learning:** Implementing a "Skip to content" link is a high-impact, low-effort accessibility win that significantly improves the experience for keyboard and screen reader users. Styling it with 'sr-only focus:not-sr-only' ensures it remains invisible until needed. Using id="main-content" and tabIndex={-1} on the target element ensures focus moves correctly without adding the container to the tab order.
**Action:** Include a "Skip to content" link in all new projects as a standard accessibility feature.
