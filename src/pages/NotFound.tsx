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
      className="flex min-h-screen items-center justify-center p-4 outline-none"
    >
      <div className="glass-panel w-full max-w-md rounded-3xl p-8 text-center animate-fade-in sm:p-12">
        <h1 className="text-gradient mb-4 font-display text-6xl font-bold tracking-tight sm:text-7xl">
          404
        </h1>
        <p className="mb-8 text-lg text-foreground/80 sm:text-xl">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full border border-hairline bg-surface-elevated px-8 py-3 text-sm font-medium text-foreground/90 transition-all duration-300 hover:border-accent-glow/60 hover:bg-surface-elevated hover:text-foreground hover:shadow-[var(--shadow-glow)] active:scale-[0.98]"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
