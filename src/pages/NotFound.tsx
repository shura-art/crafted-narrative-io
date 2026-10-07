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
      className="flex min-h-screen items-center justify-center bg-background px-4 outline-none"
    >
      <div className="glass-panel max-w-md rounded-2xl p-8 text-center animate-fade-in shadow-[var(--shadow-elegant)]">
        <h1 className="mb-2 font-display text-5xl font-bold tracking-tight text-foreground">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">Oops! Page not found</p>
        <Link
          to="/"
          aria-label="Return to homepage"
          className="inline-flex items-center gap-2 rounded-lg bg-surface-elevated px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent-glow/60 hover:bg-surface-elevated hover:text-accent-glow border border-hairline focus-visible:ring-2 focus-visible:ring-accent-glow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
