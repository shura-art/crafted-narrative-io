## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-05-18 - Global 'Skip to Content' SPA Accessibility implementation
**Learning:** For single page applications, a 'Skip to Content' link is critical for keyboard and screen-reader accessibility. Implementing it globally inside the Router container with high-visibility focus states, and targeting `<main id="main-content" tabIndex={-1} className="outline-none">` on every page, allows keyboard users to instantly bypass repetitive navigation elements. Localizing it to match the application's native language (e.g., Russian 'Перейти к основному содержимому') ensures seamless screen reader announcements.
**Action:** Always provide standard skip-to-content routing on page layouts and ensure target containers are keyboard-accessible without visual focus rings.
