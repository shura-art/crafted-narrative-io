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
      className="flex min-h-screen w-full items-center justify-center px-4 py-8 outline-none sm:px-8 md:px-12"
    >
      <div className="w-full max-w-md animate-fade-in">
        <div className="glass-panel rounded-3xl p-8 text-center sm:p-12">
          <h1 className="text-gradient font-display text-6xl font-bold tracking-tight sm:text-7xl">
            404
          </h1>
          <p className="mt-4 text-lg font-medium text-foreground/90 sm:text-xl">
            Oops! Page not found
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-hairline bg-surface-elevated px-6 py-3 text-sm font-medium text-foreground/90 transition-all duration-300 hover:border-accent-glow/60 hover:bg-surface-elevated hover:text-foreground hover:shadow-[var(--shadow-glow)] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent-glow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
