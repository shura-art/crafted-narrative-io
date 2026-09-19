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
      className="flex min-h-screen items-center justify-center bg-muted outline-none px-4"
    >
      <div className="text-center">
        <h1 className="mb-4 font-display text-4xl font-bold tracking-tight text-foreground">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
        <Link
          to="/"
          aria-label="Return to homepage"
          className="inline-flex items-center gap-2 text-primary underline hover:text-primary/90 focus-visible:ring-2 focus-visible:ring-accent-glow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none rounded-sm text-sm font-medium transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
