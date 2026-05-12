## 2025-05-15 - [Clipboard Feedback Pattern]
**Learning:** For clipboard actions, users benefit significantly from immediate visual feedback. A simple icon swap (Copy -> Check) combined with a toast notification provides clear confirmation of success.
**Action:** Always implement temporary icon state changes and success toasts for "copy to clipboard" interactions.

## 2025-05-15 - [Build Dependency Resolution]
**Learning:** Sometimes `@tanstack/react-query` can have resolution issues with `@tanstack/query-core` during the production build in certain environments, even if it's technically a sub-dependency.
**Action:** If `pnpm build` fails with Rollup resolution errors for `@tanstack/query-core`, manually adding it to `package.json` resolves the build blocker.
