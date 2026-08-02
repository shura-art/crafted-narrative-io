## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-05-18 - Single-Page SPA Skip-to-Content Targeting and Glassmorphism Focus Consistency
**Learning:** Implementing a global "Skip to Content" bypass link in Single-Page Applications requires configuring every top-level page container with semantic `<main id="main-content" tabIndex={-1} className="outline-none">` to ensure programmatic focus transfer works smoothly without rendering browser outline-rings around the whole viewport. Standardizing glow-focus styles (`focus-visible:ring-2 focus-visible:ring-accent-glow/60`) aligns aesthetic glassmorphic designs with high-contrast keyboard accessibility.
**Action:** Always structure root page elements with matching accessibility selectors (`id="main-content" tabIndex={-1} className="outline-none"`) and couple them with standardized focus-visible rings on interactive triggers.
