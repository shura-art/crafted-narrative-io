import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex min-h-screen items-center justify-center px-4 outline-none"
    >
      <div className="glass-panel w-full max-w-md rounded-3xl p-8 text-center animate-fade-in sm:p-12">
        <div className="animate-fade-up">
          <h1 className="text-gradient mb-4 font-display text-7xl font-bold lg:text-8xl">
            404
          </h1>
          <p className="mb-8 text-lg text-foreground/80 sm:text-xl">
            Oops! Page not found.
          </p>
          <Link
            to="/"
            className="group inline-flex items-center gap-2.5 rounded-full border border-hairline bg-surface-elevated px-6 py-3 text-sm font-medium text-foreground/90 transition-all duration-300 hover:border-accent-glow/60 hover:text-foreground hover:shadow-[0_0_20px_hsl(var(--accent-glow)/0.15)] active:scale-[0.98]"
          >
            <Home
              aria-hidden="true"
              className="h-4 w-4 text-accent-glow transition-transform duration-300 group-hover:scale-110"
            />
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
