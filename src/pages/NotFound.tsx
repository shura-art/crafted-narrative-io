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
      <div className="glass-panel w-full max-w-md rounded-3xl p-8 text-center border border-hairline shadow-[var(--shadow-elegant)] animate-fade-in">
        <h1 className="text-gradient mb-4 text-6xl font-bold tracking-tight">404</h1>
        <p className="mb-6 text-lg text-foreground/80">Oops! Page not found</p>
        <div className="h-[1px] w-full bg-hairline/60 mb-6" />
        <Link
          to="/"
          className="inline-flex items-center gap-2 link-underline text-foreground/90 font-medium px-4 py-2 rounded-lg transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent-glow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
