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
      <div className="w-full max-w-md animate-fade-in">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center">
          <h1 className="mb-4 font-display text-6xl font-bold text-gradient">404</h1>
          <p className="mb-6 text-lg text-foreground/80">Oops! Page not found</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-elevated px-6 py-2.5 text-sm font-medium text-foreground/90 transition-all duration-300 hover:border-accent-glow/60 hover:text-accent-glow hover:shadow-[var(--shadow-glow)] focus-visible:ring-2 focus-visible:ring-accent-glow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none active:scale-[0.98]"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
