import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Index from "@/pages/Index";
import { TooltipProvider } from "@/components/ui/tooltip";

describe("Index page UX and accessibility", () => {
  it("renders donate button with type='button' and focus ring classes", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const donateButton = screen.getByRole("button", { name: /Поддержать проект/i });
    expect(donateButton).toBeInTheDocument();
    expect(donateButton).toHaveAttribute("type", "button");
    expect(donateButton.className).toContain("focus-visible:ring-2");
    expect(donateButton.className).toContain("focus-visible:ring-accent-glow/60");
  });

  it("reveals donation details with copy button and accessible attributes upon toggle", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const donateButton = screen.getByRole("button", { name: /Поддержать проект/i });
    fireEvent.click(donateButton);

    const copyButton = screen.getByRole("button", { name: /Копировать номер для перевода/i });
    expect(copyButton).toBeInTheDocument();
    expect(copyButton).toHaveAttribute("type", "button");
    expect(copyButton.className).toContain("focus-visible:ring-2");
  });

  it("applies focus-visible rings to external portfolio and contact links", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const portfolioLink = screen.getByRole("link", { name: /Портфолио/i });
    expect(portfolioLink.className).toContain("focus-visible:ring-2");
    expect(portfolioLink.className).toContain("focus-visible:ring-accent-glow/60");

    const phoneLink = screen.getByRole("link", { name: /Позвонить/i });
    expect(phoneLink.className).toContain("focus-visible:ring-2");
  });
});
