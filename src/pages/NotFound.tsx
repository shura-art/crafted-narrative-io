import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

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
      <div className="glass-panel w-full max-w-md rounded-3xl p-10 text-center animate-fade-up">
        <h1 className="text-gradient mb-4 text-6xl font-bold font-display">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">Oops! Page not found</p>
        <Button asChild className="rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:shadow-[var(--shadow-glow)] active:scale-[0.98]">
          <Link to="/">
            Return to Home
          </Link>
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
