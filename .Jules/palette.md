## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-05-18 - High-contrast focus rings on premium dark glassmorphism layouts
**Learning:** Default browser focus states often look out of place or have low contrast on dark glassmorphism layouts. Standardizing a tailored focus visible ring (`focus-visible:ring-2 focus-visible:ring-accent-glow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background`) ensures consistent, high-contrast visual cues that blend perfectly with custom design tokens like glow borders and accent highlights.
**Action:** Standardize custom keyboard focus states for all interactive links, buttons, and custom wrappers to ensure dark-theme aesthetic cohesiveness and AA accessibility.
