## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-18 - Feedback Loops and Cohesive Accessibility
**Learning:** Micro-UX improvements are most effective when they follow a cohesive theme, such as 'Feedback & Accessibility'. Implementing dynamic tooltips and ARIA labels for clipboard actions (e.g., 'Copy' to 'Copied') creates a complete feedback loop. Additionally, standardizing `focus-visible` states using existing design tokens (like `accent-glow`) ensures keyboard navigation is both accessible and visually integrated with the site's 'glass' aesthetic.
**Action:** When implementing interactive feedback, ensure both visual (tooltips/icons) and screen-reader (ARIA labels) states update dynamically. Use project-specific glow tokens for focus rings to maintain design consistency.
