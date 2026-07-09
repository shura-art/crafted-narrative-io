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
      className="min-h-screen w-full flex items-center justify-center px-4 outline-none"
    >
      <div className="glass-panel max-w-md w-full rounded-3xl p-8 sm:p-12 text-center animate-fade-in">
        <h1 className="text-gradient font-display text-7xl sm:text-8xl font-bold mb-4">
          404
        </h1>
        <p className="text-xl text-foreground/80 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-hairline bg-surface-elevated text-sm font-medium text-foreground/90 transition-all duration-300 hover:border-accent-glow/60 hover:bg-surface-elevated hover:text-foreground hover:shadow-[var(--shadow-glow)] active:scale-[0.98]"
        >
          <Home aria-hidden="true" className="h-4 w-4 text-accent-glow" />
          Return Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
