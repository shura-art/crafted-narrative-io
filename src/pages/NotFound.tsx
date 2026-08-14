import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex min-h-screen items-center justify-center px-4 py-8 outline-none"
    >
      <div className="mx-auto w-full max-w-md animate-fade-in">
        <article className="glass-panel rounded-3xl p-8 sm:p-12 text-center shadow-[var(--shadow-elegant)]">
          <header className="mb-6">
            <h1 className="text-gradient font-display text-6xl sm:text-7xl font-bold tracking-tight">
              404
            </h1>
          </header>
          <div className="space-y-4 mb-8">
            <h2 className="text-lg font-medium text-foreground/90">
              Oops! Page not found
            </h2>
            <p className="text-[14px] leading-relaxed text-muted-foreground">
              The page you are looking for does not exist or has been moved. Use the button below to return to the home page.
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-hairline bg-surface-elevated px-6 py-3 text-sm font-medium text-foreground/90 transition-all duration-300 hover:border-accent-glow/60 hover:bg-surface-elevated hover:text-foreground hover:shadow-[var(--shadow-glow)] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent-glow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none"
          >
            Return to Home
          </Link>
        </article>
      </div>
    </main>
  );
};

export default NotFound;
