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
        <h1 className="font-display mb-4 text-6xl font-bold text-gradient">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">Oops! Page not found</p>
        <Link
          to="/"
          className="link-underline inline-block text-sm font-medium text-foreground/90 transition-colors hover:text-accent-glow"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
