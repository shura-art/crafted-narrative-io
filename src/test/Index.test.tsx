import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Index from "@/pages/Index";
import { TooltipProvider } from "@/components/ui/tooltip";

describe("Index page UX and accessibility", () => {
  it("renders the skip-to-content accessibility link targeting main-content", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const skipLink = screen.getByRole("link", { name: "Перейти к основному контенту" });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
    expect(skipLink).toHaveClass("sr-only");
    expect(skipLink).toHaveClass("focus:not-sr-only");

    const mainContent = document.getElementById("main-content");
    expect(mainContent).toBeInTheDocument();
    expect(mainContent).toHaveAttribute("tabindex", "-1");
  });

  it("toggles donation details and allows copying donation number with accessible feedback", async () => {
    // Mock navigator.clipboard.writeText
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    });

    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const donateButton = screen.getByRole("button", { name: /Поддержать проект/i });
    expect(donateButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(donateButton);
    expect(donateButton).toHaveAttribute("aria-expanded", "true");

    const copyButton = screen.getByRole("button", { name: "Копировать номер для перевода" });
    expect(copyButton).toBeInTheDocument();

    fireEvent.click(copyButton);
    expect(writeTextMock).toHaveBeenCalledTimes(1);
    expect(await screen.findByRole("button", { name: "Скопировано" })).toBeInTheDocument();
  });

  it("verifies interactive elements have focus-visible ring styles", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const portfolioLink = screen.getByRole("link", { name: /Портфолио/i });
    expect(portfolioLink.className).toContain("focus-visible:ring-2");
    expect(portfolioLink.className).toContain("focus-visible:ring-accent-glow/60");

    const phoneLink = screen.getByRole("link", { name: "Позвонить" });
    expect(phoneLink.className).toContain("focus-visible:ring-2");

    const donateButton = screen.getByRole("button", { name: /Поддержать проект/i });
    expect(donateButton.className).toContain("focus-visible:ring-2");
  });
});
