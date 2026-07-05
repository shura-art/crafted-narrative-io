import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertCircle } from "lucide-react";

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
      <div className="glass-panel w-full max-w-md rounded-3xl p-8 text-center animate-fade-in sm:p-12">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-accent-glow/10 p-4">
            <AlertCircle className="h-12 w-12 text-accent-glow" />
          </div>
        </div>
        <h1 className="text-gradient mb-2 font-display text-6xl font-bold tracking-tighter sm:text-7xl">
          404
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-elevated px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent-glow/60 hover:shadow-[var(--shadow-glow)] active:scale-[0.98]"
        >
          <Home className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
