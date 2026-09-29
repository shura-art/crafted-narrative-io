import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";
import Index from "../pages/Index";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("Accessibility integration tests", () => {
  it("renders the Skip to Content link targeting #main-content", () => {
    render(<App />);
    const skipLink = screen.getByText("Перейти к основному содержимому");
    expect(skipLink).toBeInTheDocument();
    expect(skipLink.getAttribute("href")).toBe("#main-content");
  });

  it("renders main landmark with id='main-content' and tabIndex={-1} on Index page", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Index />
        </TooltipProvider>
      </QueryClientProvider>
    );
    const mainLandmark = screen.getByRole("main");
    expect(mainLandmark).toHaveAttribute("id", "main-content");
    expect(mainLandmark).toHaveAttribute("tabIndex", "-1");
  });
});
