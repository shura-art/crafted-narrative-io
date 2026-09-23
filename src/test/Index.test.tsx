import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Index from "../pages/Index";
import { TooltipProvider } from "../components/ui/tooltip";

describe("Index Page Micro-UX & Accessibility", () => {
  it("renders profile name and headings correctly", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    expect(screen.getByText("Александр В. Люцко")).toBeInTheDocument();
    expect(screen.getByText("Моя история")).toBeInTheDocument();
    expect(screen.getByText("Чем я занимаюсь")).toBeInTheDocument();
  });

  it("includes focus-visible classes on interactive links and buttons", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const portfolioLink = screen.getByRole("link", { name: /Портфолио/i });
    expect(portfolioLink).toHaveClass("focus-visible:ring-2");

    const donateButton = screen.getByRole("button", { name: /Поддержать проект/i });
    expect(donateButton).toHaveClass("focus-visible:ring-2");
  });

  it("toggles donation accordion and allows copying donation number", async () => {
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

    const copyButton = screen.getByRole("button", { name: /Копировать номер для перевода/i });
    expect(copyButton).toBeInTheDocument();
    expect(copyButton).toHaveClass("focus-visible:ring-2");

    await act(async () => {
      fireEvent.click(copyButton);
    });
    expect(writeTextMock).toHaveBeenCalledWith('+375 29 5320907  "СБЕРБАНК" (БЕЛАРУСЬ)');
  });
});
