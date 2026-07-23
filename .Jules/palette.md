## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Fix tooltip clipping in containers with overflow: hidden
**Learning:** Tooltips rendered within containers using `overflow: hidden` (like the glass-panel sections) will be clipped unless wrapped in a Portal. This is critical for ensure that micro-feedback remains visible.
**Action:** Always use `TooltipPrimitive.Portal` in the base Tooltip component to ensure it renders at the root level and avoids clipping.

## 2026-05-18 - Keyboard accessibility and "Skip to Content" links
**Learning:** For single-page applications (SPAs), a global skip-to-content link styled specifically for the theme (e.g., matching the accent glow focus ring) significantly improves accessibility for keyboard navigators. Ensuring the target container is a semantic `<main>` tag with `tabIndex={-1}`, `id="main-content"`, and `outline-none` allows seamless focus shift without displaying distracting layout focus rings. Localizing the skip link text to the page's language (Russian: "Перейти к основному содержимому") ensures a native and seamless screen reader experience.
**Action:** Always implement a keyboard-accessible, highly visible Skip to Content link on multi-section pages, ensuring target elements support focus shift gracefully.
