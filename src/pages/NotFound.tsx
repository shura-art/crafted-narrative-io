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
      className="flex min-h-screen items-center justify-center bg-background px-4 outline-none"
    >
      <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center max-w-md w-full animate-fade-in">
        <h1 className="text-6xl font-bold font-display text-gradient mb-2">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Oops! Page not found</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full border border-hairline bg-surface-elevated px-6 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent-glow/60 hover:shadow-[var(--shadow-glow)] focus-visible:ring-2 focus-visible:ring-accent-glow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
