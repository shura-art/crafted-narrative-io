import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MemoryRouter } from "react-router-dom";
import App from "@/App";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const renderWithProviders = (ui: React.ReactNode) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>{ui}</TooltipProvider>
    </QueryClientProvider>
  );
};

describe("Accessibility - Skip to Content link", () => {
  it("renders the Skip to Content link with correct text and attributes in App", () => {
    renderWithProviders(<App />);
    const skipLink = screen.getByRole("link", { name: /перейти к основному содержимому/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
    expect(skipLink).toHaveClass("sr-only");
  });

  it("Index page has main element with correct accessibility attributes", () => {
    renderWithProviders(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );
    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
    expect(mainElement).toHaveClass("outline-none");
  });

  it("NotFound page has main element with correct accessibility attributes and a react-router Link", () => {
    renderWithProviders(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
    expect(mainElement).toHaveClass("outline-none");

    const homeLink = screen.getByRole("link", { name: /return to home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
