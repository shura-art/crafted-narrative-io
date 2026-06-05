## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-05-18 - Implement "Skip to Content" for keyboard accessibility in SPAs
**Learning:** A "Skip to Content" link is a vital accessibility feature for keyboard users. In SPAs, simply jumping to an anchor is not enough; the target container (like `<main>`) must have `tabIndex={-1}` and `outline-none` to receive programmatic focus smoothly. Furthermore, localized user-facing text (e.g., in Russian) must be used to maintain consistency with the application's content and metadata.
**Action:** Always include a skip link with a matching target that handles programmatic focus, and ensure all ARIA labels and accessibility links match the site's primary language.
