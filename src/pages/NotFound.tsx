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
      className="flex min-h-screen items-center justify-center bg-background outline-none p-4"
    >
      <div className="glass-panel w-full max-w-md rounded-3xl p-10 md:p-14 text-center animate-fade-up">
        <h1 className="mb-4 font-display text-6xl font-bold text-foreground">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">Oops! Page not found</p>
        <Link
          to="/"
          className="group inline-flex items-center gap-2 link-underline text-lg font-medium text-foreground/90"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
