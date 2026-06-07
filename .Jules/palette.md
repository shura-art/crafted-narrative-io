## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-06-07 - Implement localized Skip to Content link
**Learning:** For single-page applications with fixed navigation or long headers, a "Skip to Content" link is a high-impact accessibility win for keyboard users. By applying `id="main-content"`, `tabIndex={-1}`, and `outline-none` to the target `<main>` container, focus is managed correctly without creating visual artifacts for mouse users.
**Action:** When adding skip links, ensure the target container is focusable and that the link text is localized to match the site's primary language.
