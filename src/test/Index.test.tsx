import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Index from "@/pages/Index";
import { TooltipProvider } from "@/components/ui/tooltip";

describe("Index accessibility and UX improvements", () => {
  it("renders skip-to-content link targeting main content", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const skipLink = screen.getByText("Перейти к основному содержимому");
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
    expect(skipLink).toHaveClass("sr-only");
    expect(skipLink).toHaveClass("focus:not-sr-only");
  });

  it("includes focus visible ring classes and explicit button type for donate toggle", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const donateButton = screen.getByRole("button", { name: /Поддержать проект/i });
    expect(donateButton).toBeInTheDocument();
    expect(donateButton).toHaveAttribute("type", "button");
    expect(donateButton).toHaveAttribute("aria-expanded", "false");
    expect(donateButton).toHaveClass("focus-visible:ring-2");
  });

  it("toggles donate panel and allows copying the number with visual feedback", async () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve()),
      },
    });

    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const donateButton = screen.getByRole("button", { name: /Поддержать проект/i });
    fireEvent.click(donateButton);
    expect(donateButton).toHaveAttribute("aria-expanded", "true");

    const copyButton = screen.getByRole("button", { name: /Копировать номер для перевода/i });
    expect(copyButton).toBeInTheDocument();
    expect(copyButton).toHaveAttribute("type", "button");
    expect(copyButton).toHaveClass("focus-visible:ring-2");

    fireEvent.click(copyButton);

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
        expect.stringContaining("+375 29 5320907")
      );
      expect(screen.getByRole("button", { name: "Скопировано" })).toBeInTheDocument();
    });
  });

  it("ensures contact and portfolio links have proper accessibility attributes and focus rings", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const portfolioLink = screen.getByLabelText("Портфолио — откроется в новой вкладке");
    expect(portfolioLink).toHaveAttribute("target", "_blank");
    expect(portfolioLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(portfolioLink).toHaveClass("focus-visible:ring-2");

    const telegramLink = screen.getByLabelText("Telegram — откроется в новой вкладке");
    expect(telegramLink).toHaveAttribute("target", "_blank");
    expect(telegramLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(telegramLink).toHaveClass("focus-visible:ring-2");

    const phoneLink = screen.getByLabelText("Позвонить");
    expect(phoneLink).toHaveAttribute("href", "tel:+375295320907");
    expect(phoneLink).toHaveClass("focus-visible:ring-2");
  });
});
