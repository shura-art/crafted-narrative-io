## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-20 - Standardize accessible focus states and localized tab announcements
**Learning:** The 'glass-panel' design language requires a specific high-visibility focus ring to remain accessible against dark, semi-transparent backgrounds. Using `focus-visible:ring-accent-glow/60` provides a consistent "glow" that matches the aesthetic while meeting a11y standards. For Russian-localized sites, suffixing external links with "— откроется в новой вкладке" ensures screen reader users are properly informed of navigation behavior.
**Action:** Use `focus-visible:ring-2 focus-visible:ring-accent-glow/60 focus-visible:ring-offset-2 outline-none` for interactive elements in this design system.
