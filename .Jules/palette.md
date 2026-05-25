## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Enhancing Clipboard Feedback and External Link Accessibility
**Learning:** For clipboard actions, providing both a visual icon swap and a tooltip ensures that users get immediate feedback regardless of their focus. Additionally, for external links in a Russian-language UI, explicitly stating that a link opens in a new tab via `aria-label` (e.g., "откроется в новой вкладке") significantly improves the experience for screen reader users who might otherwise be surprised by the navigation.
**Action:** Always pair clipboard icon changes with dynamic ARIA labels and tooltips. Use descriptive ARIA labels for all external links that use `target="_blank"`.
