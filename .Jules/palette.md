## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-05-18 - Standardizing accessibility and themed error pages
**Learning:** In Single Page Applications (SPAs), a 'Skip to Content' link is essential for keyboard users to bypass navigation. It must target a container with `tabIndex={-1}` and `outline-none` to ensure focus moves correctly without showing a focus ring on the entire section. Furthermore, error pages (like 404) should not be overlooked; applying the core design system (e.g., `glass-panel`, `text-gradient`) to them ensures a cohesive brand experience even when users get lost.
**Action:** Always implement `#main-content` targets on all top-level pages and ensure error pages match the application's premium aesthetic.
