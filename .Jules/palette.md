## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-05-20 - Accessible Navigation and Localization
**Learning:** In SPAs with a dark glassmorphism theme, skip-to-content links require explicit solid backgrounds on focus to remain legible against complex backgrounds. To ensure focus transitions correctly for keyboard users, target containers must have `id="main-content"` and `tabIndex={-1}`. Consistency in localization (e.g., ensuring 404 pages match the primary site language) is a small touch that significantly impacts perceived quality.
**Action:** Implement "Skip to Content" links using the `focus:fixed` pattern and ensure all page-level components have focusable main IDs.
