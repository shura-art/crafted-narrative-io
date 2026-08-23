import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Index from "@/pages/Index";
import { TooltipProvider } from "@/components/ui/tooltip";

describe("Index page accessibility and micro-UX", () => {
  const renderIndex = () =>
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

  it("renders main element with main-content id and tabIndex -1", () => {
    const { container } = renderIndex();
    const main = container.querySelector("main");
    expect(main).toBeInTheDocument();
    expect(main).toHaveAttribute("id", "main-content");
    expect(main).toHaveAttribute("tabIndex", "-1");
  });

  it("renders donate toggle button with proper ARIA and focus ring attributes", () => {
    renderIndex();
    const donateButton = screen.getByRole("button", { name: /Поддержать проект/i });
    expect(donateButton).toBeInTheDocument();
    expect(donateButton).toHaveAttribute("type", "button");
    expect(donateButton).toHaveAttribute("aria-expanded", "false");
    expect(donateButton).toHaveAttribute("aria-controls", "donate-details");
    expect(donateButton.className).toContain("focus-visible:ring-2");

    // Click toggle button
    fireEvent.click(donateButton);
    expect(donateButton).toHaveAttribute("aria-expanded", "true");

    const donateDetails = document.getElementById("donate-details");
    expect(donateDetails).toBeInTheDocument();

    // Verify copy button in donate panel
    const copyButton = screen.getByRole("button", { name: /Копировать номер для перевода/i });
    expect(copyButton).toBeInTheDocument();
    expect(copyButton).toHaveAttribute("type", "button");
    expect(copyButton.className).toContain("focus-visible:ring-2");
  });

  it("includes focus-visible styles on interactive contact links and portfolio link", () => {
    renderIndex();
    const portfolioLink = screen.getByRole("link", { name: /Портфолио/i });
    expect(portfolioLink.className).toContain("focus-visible:ring-2");

    const phoneLink = screen.getByRole("link", { name: /Позвонить/i });
    expect(phoneLink.className).toContain("focus-visible:ring-2");
  });
});
