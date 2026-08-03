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
      <div className="glass-panel w-full max-w-md rounded-2xl p-8 text-center animate-fade-in">
        <h1 className="mb-4 text-5xl font-display font-bold text-gradient">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">Oops! Page not found</p>
        <Link
          to="/"
          className="inline-block text-foreground/90 hover:text-accent-glow link-underline font-medium focus-visible:ring-2 focus-visible:ring-accent-glow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none rounded-md px-3 py-1.5 transition-all"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
