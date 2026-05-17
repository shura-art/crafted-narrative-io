## 2026-05-16 - Enhance accessibility and add copy-to-clipboard for donations
**Learning:** Adding a copy-to-clipboard feature for actionable data (like phone numbers/donation info) significantly improves the user experience by reducing friction. Pairing it with immediate visual feedback (icon swap) and a success toast ensures the user knows the action was successful. Marking decorative icons as hidden from screen readers prevents redundant announcements.
**Action:** Always include immediate feedback for clipboard actions and ensure icon-only buttons have descriptive ARIA labels.

## 2026-05-17 - Avoid nesting interactive elements and respect line limits
**Learning:** Nesting a <button> inside an <a> tag is invalid HTML and breaks accessibility. Using a shared container with sibling interactive elements preserves semantic correctness. Staying within line limits for micro-UX tasks ensures changes remain focused and maintainable.
**Action:** Implement multi-action items using sibling structures and prioritize conciseness in UX enhancements.
