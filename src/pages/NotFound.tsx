import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex min-h-screen w-full items-center justify-center px-4 py-8 outline-none"
    >
      <div className="glass-panel w-full max-w-md rounded-3xl p-8 sm:p-10 text-center animate-fade-in">
        <h1 className="mb-2 font-display text-6xl font-bold tracking-tight text-gradient">
          404
        </h1>
        <p className="mb-6 text-lg text-muted-foreground">
          Oops! Page not found
        </p>
        <Link
          to="/"
          aria-label="Return to Home"
          className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-elevated px-6 py-2.5 text-sm font-medium text-foreground/90 transition-all duration-300 hover:border-accent-glow/60 hover:bg-surface-elevated hover:text-foreground hover:shadow-[var(--shadow-glow)] focus-visible:ring-2 focus-visible:ring-accent-glow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none active:scale-[0.98]"
        >
          <ArrowLeft
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
          />
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
