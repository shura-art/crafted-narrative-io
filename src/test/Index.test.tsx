import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Index from "@/pages/Index";
import { TooltipProvider } from "@/components/ui/tooltip";

describe("Index page UX and accessibility", () => {
  it("renders main content landmark with correct accessibility attributes", () => {
    const { container } = render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const main = container.querySelector("main#main-content");
    expect(main).not.toBeNull();
    expect(main).toHaveAttribute("tabIndex", "-1");
  });

  it("includes focus visible ring classes on interactive portfolio link and donate button", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const portfolioLink = screen.getByRole("link", { name: /Портфолио/i });
    expect(portfolioLink.className).toContain("focus-visible:ring-2");

    const donateButton = screen.getByRole("button", { name: /Поддержать проект/i });
    expect(donateButton).toHaveAttribute("type", "button");
    expect(donateButton.className).toContain("focus-visible:ring-2");
  });

  it("shows donate info with typed copy button and focus styling when toggled", () => {
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
});
