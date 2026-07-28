import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "../pages/Index";
import NotFound from "../pages/NotFound";
import App from "../App";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>{ui}</TooltipProvider>
    </QueryClientProvider>
  );
};

describe("Accessibility Integration Tests", () => {
  it("should render Skip to Content link in App", () => {
    renderWithProviders(<App />);
    const skipLink = screen.getByRole("link", {
      name: /Перейти к основному содержимому/i,
    });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
    expect(skipLink).toHaveClass("sr-only");
  });

  it("should have main-content with proper id, tabIndex and outline-none in Index page", () => {
    const { container } = renderWithProviders(
      <MemoryRouter initialEntries={["/"]}>
        <Index />
      </MemoryRouter>
    );

    const mainElement = container.querySelector("main");
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
    expect(mainElement).toHaveClass("outline-none");
  });

  it("should have main-content with proper id, tabIndex and outline-none in NotFound page", () => {
    const { container } = renderWithProviders(
      <MemoryRouter initialEntries={["/random-non-existent-page"]}>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );

    const mainElement = container.querySelector("main");
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
    expect(mainElement).toHaveClass("outline-none");
  });
});
