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
      className="flex min-h-screen items-center justify-center px-4 outline-none"
    >
      <div className="text-center">
        <h1 className="mb-4 text-4xl sm:text-5xl font-bold text-foreground">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <Link
          to="/"
          aria-label="Return to Home"
          className="inline-flex items-center text-foreground underline hover:text-accent-glow rounded-md px-3 py-1.5 focus-visible:ring-2 focus-visible:ring-accent-glow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
