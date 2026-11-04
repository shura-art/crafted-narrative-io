import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "@/pages/Index";

describe("Index Page Accessibility and Focus Rings", () => {
  it("renders interactive elements with focus-visible styles", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    // Portfolio link
    const portfolioLink = screen.getByRole("link", { name: /портфолио/i });
    expect(portfolioLink.className).toContain("focus-visible:ring-2");
    expect(portfolioLink.className).toContain("focus-visible:ring-accent-glow/60");

    // Contact links
    const phoneLink = screen.getByRole("link", { name: /позвонить/i });
    expect(phoneLink.className).toContain("focus-visible:ring-2");
    expect(phoneLink.className).toContain("focus-visible:ring-accent-glow/60");

    // Donate toggle button
    const donateButton = screen.getByRole("button", { name: /поддержать проект/i });
    expect(donateButton.getAttribute("type")).toBe("button");
    expect(donateButton.className).toContain("focus-visible:ring-2");
    expect(donateButton.className).toContain("focus-visible:ring-accent-glow/60");
  });

  it("renders donate details with accessible copy button and focus styles on open", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const donateButton = screen.getByRole("button", { name: /поддержать проект/i });
    fireEvent.click(donateButton);

    const copyButton = screen.getByRole("button", { name: /копировать номер для перевода/i });
    expect(copyButton.getAttribute("type")).toBe("button");
    expect(copyButton.className).toContain("focus-visible:ring-2");
    expect(copyButton.className).toContain("focus-visible:ring-accent-glow/60");

    const donateLink = screen.getByText(/СБЕРБАНК/i);
    expect(donateLink.className).toContain("focus-visible:ring-2");
  });
});
