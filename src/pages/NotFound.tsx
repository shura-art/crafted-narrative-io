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
      className="flex min-h-screen items-center justify-center bg-background px-4 py-8 outline-none animate-fade-in"
    >
      <div className="glass-panel max-w-md rounded-2xl p-8 text-center shadow-lg">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground font-display">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">Oops! Page not found</p>
        <Link
          to="/"
          aria-label="Return to Home page"
          className="inline-flex items-center justify-center rounded-lg bg-surface-elevated px-5 py-2.5 text-sm font-medium text-foreground link-underline hover:text-primary transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent-glow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
