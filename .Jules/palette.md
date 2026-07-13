## 2026-07-13 - [Accessibility: Skip to Content Link]
**Learning:** Implementing a 'Skip to Content' link is a fundamental micro-UX win for keyboard accessibility. In single-page applications (SPAs), it's crucial to set `tabIndex={-1}` on the target container (`#main-content`) to ensure focus actually moves to the container and is announced by screen readers, even if the container itself isn't interactive. Using `sr-only focus:not-sr-only` provides a clean, standard way to keep it hidden until needed.

**Action:** Always ensure every top-level page component has a clearly defined `main` entry point with a unique ID and proper tab indexing to support global navigation shortcuts.
