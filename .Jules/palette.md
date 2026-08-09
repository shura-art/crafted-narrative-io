## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-05-18 - Premium Dark Theme Focus Ring Harmonization
**Learning:** Default browser focus rings clash with bespoke premium dark glassmorphism designs, causing keyboard users to feel like second-class citizens. By standardizing high-contrast, beautiful focus rings using design system tokens (`focus-visible:ring-2 focus-visible:ring-accent-glow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none`), we make keyboard navigation stunningly elegant and seamless.
**Action:** Always avoid default browser outlines; instead, standardize focus-visible rings using the brand glow token with high offset contrast on any keyboard-interactive elements.
