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
      className="flex min-h-screen w-full items-center justify-center p-4 outline-none"
    >
      <div className="glass-panel max-w-md w-full rounded-3xl p-8 text-center sm:p-10 animate-fade-in">
        <h1 className="font-display text-6xl font-bold tracking-tight text-gradient mb-2">
          404
        </h1>
        <p className="mb-6 text-lg text-muted-foreground">
          Oops! Page not found
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-elevated px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent-glow/60 hover:text-accent-glow hover:shadow-[var(--shadow-glow)] focus-visible:ring-2 focus-visible:ring-accent-glow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none active:scale-[0.98]"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
