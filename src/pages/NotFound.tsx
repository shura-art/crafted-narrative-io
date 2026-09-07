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
      className="flex min-h-screen w-full items-center justify-center bg-background px-4 py-8 text-foreground outline-none sm:px-8"
    >
      <div className="glass-panel w-full max-w-md rounded-3xl p-8 text-center sm:p-12 animate-fade-in">
        <h1 className="font-display text-6xl font-bold tracking-tight text-foreground sm:text-7xl">
          404
        </h1>
        <p className="mt-4 text-xl font-semibold text-foreground sm:text-2xl">
          Oops! Page not found
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-elevated px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent-glow/60 hover:bg-surface-elevated hover:text-accent-glow hover:shadow-[var(--shadow-glow)] focus-visible:ring-2 focus-visible:ring-accent-glow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none active:scale-[0.98]"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
