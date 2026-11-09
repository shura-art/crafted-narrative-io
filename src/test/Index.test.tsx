import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Index from "@/pages/Index";
import { TooltipProvider } from "@/components/ui/tooltip";

describe("Index page UX and accessibility", () => {
  it("renders interactive elements with keyboard focus indicators", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const portfolioLink = screen.getByRole("link", {
      name: /Портфолио/i,
    });
    expect(portfolioLink).toHaveClass("focus-visible:ring-2");
    expect(portfolioLink).toHaveClass("focus-visible:ring-accent-glow/60");

    const donateButton = screen.getByRole("button", {
      name: /Поддержать проект/i,
    });
    expect(donateButton).toHaveAttribute("type", "button");
    expect(donateButton).toHaveClass("focus-visible:ring-2");
    expect(donateButton).toHaveClass("focus-visible:ring-accent-glow/60");

    const contactLinks = screen.getAllByRole("link");
    const callLink = contactLinks.find((l) =>
      l.getAttribute("aria-label")?.includes("Позвонить")
    );
    expect(callLink).toHaveClass("focus-visible:ring-2");
  });

  it("reveals donate details with accessible link, copy button, and focus styles", async () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });

    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const donateButton = screen.getByRole("button", {
      name: /Поддержать проект/i,
    });
    fireEvent.click(donateButton);

    const donateLink = screen.getByRole("link", {
      name: /Позвонить по номеру для перевода/i,
    });
    expect(donateLink).toBeInTheDocument();
    expect(donateLink).toHaveClass("focus-visible:ring-2");

    const copyButton = screen.getByRole("button", {
      name: /Копировать номер для перевода/i,
    });
    expect(copyButton).toHaveAttribute("type", "button");
    expect(copyButton).toHaveClass("focus-visible:ring-2");
    expect(copyButton).toHaveClass("focus-visible:ring-accent-glow/60");
  });
});
