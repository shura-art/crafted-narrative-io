## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-16 - Tooltip Clipping in Collapsible Containers
**Learning:** In this project's UI structure, `TooltipContent` was missing the `TooltipPrimitive.Portal` wrapper. This caused tooltips to be clipped or invisible when placed inside parent containers with `overflow-hidden` (such as the donation section which uses `animate-slide-down`).
**Action:** Always wrap `TooltipContent` in `TooltipPrimitive.Portal` to ensure it renders in a top-level layer, avoiding clipping issues in complex layouts.
