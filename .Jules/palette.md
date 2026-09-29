## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-05-18 - Global Skip-to-Content Link and Main Landmark Focus Setup
**Learning:** Adding a hidden "Skip to Content" link that reveals on focus requires page components to have a `<main id="main-content" tabIndex={-1} className="outline-none">` landmark. Setting `tabIndex={-1}` allows programmatically moving focus to the main landmark on skip-navigation without adding the element to default tab order.
**Action:** When adding global skip links, ensure all route main containers possess matching `id="main-content"` and `tabIndex={-1}` attributes.
