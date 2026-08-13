## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-08-13 - SPA Keyboard Navigation and Skiplink Bypass Pattern
**Learning:** In Single Page Applications (SPAs), keyboard navigation requires structural bypass support such as a "Skip to Content" link. For this to work perfectly with screen readers and focus management, the target container (typically `<main>`) must have `id="main-content"`, `tabIndex={-1}`, and `outline-none`. Furthermore, standardizing keyboard focus outlines using `focus-visible:ring-2` ensures consistent, high-contrast, beautiful navigation indicators across all interactive elements (links, SPA `<Link>`s, custom buttons, etc.).
**Action:** Always include a Skip to Content bypass link in application-wide frames and properly prepare page-level containers with matching IDs and focusable attributes.
