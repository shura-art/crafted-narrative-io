import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Index from "../pages/Index";
import { TooltipProvider } from "@/components/ui/tooltip";

describe("Index page accessibility and UX", () => {
  beforeEach(() => {
    // Mock navigator.clipboard
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
      configurable: true,
      writable: true,
    });
  });

  it("renders main landmark with id='main-content' and tabIndex={-1}", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
  });

  it("includes focus-visible ring classes on interactive links and buttons", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const portfolioLink = screen.getByRole("link", { name: /Портфолио/i });
    expect(portfolioLink).toHaveClass("focus-visible:ring-2");

    const donateButton = screen.getByRole("button", { name: /Поддержать проект/i });
    expect(donateButton).toHaveClass("focus-visible:ring-2");
    expect(donateButton).toHaveAttribute("type", "button");
  });

  it("expands donate section and handles copy button click", async () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const donateButton = screen.getByRole("button", { name: /Поддержать проект/i });
    expect(donateButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(donateButton);
    expect(donateButton).toHaveAttribute("aria-expanded", "true");

    const copyButton = screen.getByRole("button", { name: /Копировать номер для перевода/i });
    expect(copyButton).toBeInTheDocument();
    expect(copyButton).toHaveClass("focus-visible:ring-2");

    await act(async () => {
      fireEvent.click(copyButton);
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      expect.stringContaining("СБЕРБАНК")
    );
  });
});
