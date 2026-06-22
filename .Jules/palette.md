## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-05-18 - Implement 'Skip to content' for glassmorphism themes
**Learning:** In a single-page application with a fixed or sticky layout and complex background (like glassmorphism), a 'Skip to content' link is essential for accessibility. Styling it to match the glassmorphism theme (using `bg-background`, `border-hairline`, and `rounded-lg`) ensures it feels like a native part of the UI when it appears.
**Action:** Use the `sr-only focus:not-sr-only` pattern combined with `focus:fixed` and high `z-index` to implement accessible skip links that integrate with the site's aesthetic.
