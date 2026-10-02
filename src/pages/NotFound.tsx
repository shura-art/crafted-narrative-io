import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main id="main-content" tabIndex={-1} className="flex min-h-screen items-center justify-center p-4 outline-none">
      <div className="glass-panel max-w-md w-full rounded-2xl p-8 sm:p-10 text-center animate-fade-in">
        <h1 className="font-display text-5xl font-bold tracking-tight text-foreground mb-3">404</h1>
        <p className="text-lg text-muted-foreground mb-6">Oops! Page not found</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-elevated px-5 py-2.5 text-sm font-medium text-foreground/90 transition-all duration-300 hover:border-accent-glow/60 hover:text-foreground hover:shadow-[var(--shadow-glow)] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent-glow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none"
        >
          <Home aria-hidden="true" className="h-4 w-4 text-accent-glow" />
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
