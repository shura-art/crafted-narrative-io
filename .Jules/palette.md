## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-05-18 - Single Page App Accessibility and Skip-to-Content Redirection
**Learning:** In Single Page Applications (SPAs) like React, implementing a global 'Skip to Content' link is highly effective for accessibility, but requires matching page-level target containers (e.g., `<main>`) to have `id="main-content"`, `tabIndex={-1}`, and `outline-none`. This ensures programmatic focus moves correctly to the content container without displaying a visual ring around the entire main layout. Additionally, keyboard-interactive links should have high-contrast focus indicators aligned with the design theme (`focus-visible:ring-2 ...`) to ensure clear visual tracking during tabbing.
**Action:** Always pair a skip link with correctly configured `id`, `tabIndex={-1}`, and focus styling on the destination container, and supply consistent focus ring indicators across all navigation links.
