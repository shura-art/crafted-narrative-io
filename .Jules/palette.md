## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-05-18 - Implement skip-to-content link and improve SPA navigation
**Learning:** Implementing a "Skip to Content" link in a Single Page Application (SPA) requires adding a target (e.g., `main-content`) with `tabIndex={-1}` and `outline-none` to ensure that focus moves correctly and stays on the container when the link is clicked, without creating a visual focus ring on the entire section. Replacing native `<a>` tags with the framework's `<Link>` component for internal navigation (like on a 404 page) preserves application state and provides a smoother user experience.
**Action:** When adding skip-links or similar accessibility shortcuts, always verify that the target element can receive focus and that the navigation doesn't trigger a full page reload in SPAs.
