import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Index from "@/pages/Index";
import { TooltipProvider } from "@/components/ui/tooltip";

describe("Index Page Accessibility and Focus Rings", () => {
  it("renders interactive elements with focus-visible ring styles", () => {
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

    const phoneLink = screen.getByRole("link", { name: "Позвонить" });
    expect(phoneLink).toHaveClass("focus-visible:ring-2");

    const viberLink = screen.getByRole("link", { name: "Написать в Viber" });
    expect(viberLink).toHaveClass("focus-visible:ring-2");

    const tgLink = screen.getByRole("link", {
      name: "Telegram — откроется в новой вкладке",
    });
    expect(tgLink).toHaveClass("focus-visible:ring-2");
  });

  it("reveals donation details with accessible copy button on click", async () => {
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
    expect(donateButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(donateButton);
    expect(donateButton).toHaveAttribute("aria-expanded", "true");

    const copyButton = screen.getByRole("button", {
      name: /Копировать номер для перевода/i,
    });
    expect(copyButton).toBeInTheDocument();
    expect(copyButton).toHaveAttribute("type", "button");
    expect(copyButton).toHaveClass("focus-visible:ring-2");

    fireEvent.click(copyButton);

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalled();
      expect(
        screen.getByRole("button", { name: /Скопировано/i })
      ).toBeInTheDocument();
    });
  });
});
