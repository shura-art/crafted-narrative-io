## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-05-18 - Implement highly visible Skip to Content link for premium dark themes
**Learning:** Implementing a "Skip to content" link in SPAs requires explicit focus management by setting `id="main-content"`, `tabIndex={-1}`, and `outline-none` on target route containers. Styling the skip link using standard utilities like `sr-only focus:not-sr-only` coupled with high-contrast accent colors (e.g., `bg-accent-glow`, `text-black`) ensures keyboard users have immediate visual and navigation accessibility without cluttering the UI.
**Action:** Always pair a global Skip to Content link with target container attributes (`id="main-content"`, `tabIndex={-1}`, `outline-none`) across all page routes, and style it with high-visibility theme-specific classes.
