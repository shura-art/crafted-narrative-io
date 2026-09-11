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
      className="outline-none flex min-h-screen items-center justify-center bg-background px-4 py-8 text-foreground"
    >
      <div className="glass-panel max-w-md w-full rounded-3xl p-8 text-center animate-fade-in">
        <h1 className="mb-2 font-display text-5xl font-bold tracking-tight text-foreground">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">Oops! Page not found</p>
        <Link
          to="/"
          aria-label="Return to home page"
          className="inline-flex items-center gap-2 rounded-lg border border-hairline bg-surface-elevated px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent-glow/60 hover:text-accent-glow focus-visible:ring-2 focus-visible:ring-accent-glow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
