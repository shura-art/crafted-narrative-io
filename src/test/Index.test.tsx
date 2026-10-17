import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Index from "@/pages/Index";
import { TooltipProvider } from "@/components/ui/tooltip";

// Mock navigator.clipboard
Object.defineProperty(navigator, "clipboard", {
  value: {
    writeText: vi.fn().mockResolvedValue(undefined),
  },
  writable: true,
});

describe("Index page UX and accessibility", () => {
  const renderIndex = () =>
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

  it("renders main element with main-content id and tabIndex={-1}", () => {
    renderIndex();
    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabindex", "-1");
  });

  it("applies focus-visible ring styles to interactive links and buttons", () => {
    renderIndex();
    const portfolioLink = screen.getByLabelText("Портфолио — откроется в новой вкладке");
    expect(portfolioLink).toHaveClass("focus-visible:ring-2");

    const donateButton = screen.getByRole("button", { name: /Поддержать проект/i });
    expect(donateButton).toHaveClass("focus-visible:ring-2");
    expect(donateButton).toHaveAttribute("type", "button");
  });

  it("toggles donation details and allows copying donation info", async () => {
    renderIndex();
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
      '+375 29 5320907  "СБЕРБАНК" (БЕЛАРУСЬ)'
    );
  });
});
