import { Link, useLocation } from "react-router-dom";
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
      className="flex min-h-screen items-center justify-center bg-background px-4 py-8 outline-none"
    >
      <div className="glass-panel w-full max-w-md rounded-3xl p-8 text-center sm:p-12 animate-fade-in">
        <h1 className="mb-4 font-display text-5xl font-bold tracking-tight text-foreground">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
        <Link
          to="/"
          aria-label="Return to Home"
          className="inline-flex items-center justify-center rounded-lg bg-accent-glow px-6 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-accent-glow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
