## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Micro-UX polish: Tooltips, focus states, and accessible external links
**Learning:** Micro-UX wins like adding tooltips to icon-only buttons, descriptive aria-labels for "open in new tab" links, and consistent focus indicators (especially on custom-styled elements) significantly elevate the professional feel and accessibility of a personal portfolio. Providing a dynamic state in both tooltips and aria-labels (e.g., 'Copy' -> 'Copied') ensures a multi-modal feedback loop.
**Action:** Use a unified 'glow' focus ring pattern for all interactive elements and always clarify external link behavior for screen readers.
