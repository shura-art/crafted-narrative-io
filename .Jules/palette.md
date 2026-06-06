## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2024-05-24 - Unified Keyboard Accessibility
**Learning:** In highly stylized "glass-panel" interfaces, standard focus rings can feel jarring. Using themed glow effects (e.g., `accent-glow`) as focus rings maintains the aesthetic while meeting WCAG contrast requirements. Additionally, a "Skip to Content" link is essential for keyboard users to bypass repetitive navigation, but it must be explicitly targeted with `id="main-content"` and `tabIndex={-1}` to ensure focus lands correctly in SPAs.
**Action:** Always implement a localized "Skip to Content" link in `App.tsx` and ensure all interactive elements share a consistent, themed `focus-visible` style.
