## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-05-18 - Standardizing 'Skip to Content' SPA accessibility pattern
**Learning:** When implementing 'Skip to Content' links in single-page applications, all page-level routing targets must consistently implement matching containers with correct accessibility attributes (`id="main-content"`, `tabIndex={-1}`, and `outline-none`) to avoid breaking the keyboard focus flow across different pages. Additionally, the skip-link should utilize the application's unique accent colors for optimal styling and high-contrast focus indicators.
**Action:** Standardize 'Skip to Content' routing layout containers across all pages in the app and style with existing high-contrast focus and background tokens.
