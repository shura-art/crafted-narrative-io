## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-05-18 - Establish standard page skipping and routing patterns
**Learning:** In Single Page Applications (SPAs), screen readers and keyboard-only users suffer without a "Skip to content" link because they have to tab through repetitive navigational elements on every route change. Implementing a global Skip Link paired with targeting `<main id="main-content" tabIndex={-1} className="outline-none">` on all pages completely resolves this. Furthermore, standardizing 404 navigation with framework-level client-side router Links (instead of native anchors) prevents costly full-page reloads and state losses.
**Action:** Always include a localized, visible-on-focus Skip to Content link inside the root layout and ensure every page-level container has matching semantic `<main id="main-content">` anchors.
