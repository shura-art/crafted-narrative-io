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
      className="flex min-h-screen w-full items-center justify-center px-4 py-8 sm:px-8 outline-none"
    >
      <div className="glass-panel w-full max-w-md rounded-3xl p-8 sm:p-12 text-center animate-fade-in shadow-[var(--shadow-elegant)]">
        <h1 className="font-display text-6xl font-bold text-foreground mb-2 tracking-tight">
          404
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Oops! Page not found
        </p>
        <Link
          to="/"
          aria-label="Return to Home page"
          className="inline-flex items-center justify-center rounded-full border border-hairline bg-surface-elevated px-6 py-3 text-sm font-medium text-foreground/90 transition-all duration-300 hover:border-accent-glow/60 hover:bg-surface-elevated hover:text-foreground hover:shadow-[var(--shadow-glow)] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent-glow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
