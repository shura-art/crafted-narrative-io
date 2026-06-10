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
      className="flex min-h-screen items-center justify-center bg-transparent px-4 outline-none"
    >
      <div className="text-center animate-fade-up">
        <h1 className="mb-4 text-6xl font-bold tracking-tight text-foreground">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">Oops! Page not found</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-elevated px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent-glow/60 hover:shadow-[var(--shadow-glow)] active:scale-[0.98]"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
