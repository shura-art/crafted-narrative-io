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
      className="flex min-h-screen items-center justify-center animate-fade-up outline-none"
    >
      <div className="text-center glass-panel rounded-3xl p-12">
        <h1 className="mb-4 text-4xl font-bold font-display">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
        <Link to="/" className="link-underline text-accent-glow font-medium">
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
