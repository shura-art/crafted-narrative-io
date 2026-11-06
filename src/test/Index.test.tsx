import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Index from "@/pages/Index";
import { TooltipProvider } from "@/components/ui/tooltip";

describe("Index Page Micro-UX & Accessibility", () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });
  });

  it("renders profile headings and accessible interactive links with focus-visible styles", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const portfolioLink = screen.getByRole("link", {
      name: /Портфолио — откроется в новой вкладке/i,
    });
    expect(portfolioLink).toBeInTheDocument();
    expect(portfolioLink.className).toContain("focus-visible:ring-2");
    expect(portfolioLink.className).toContain("focus-visible:ring-accent-glow/60");

    const phoneLink = screen.getByRole("link", { name: /Позвонить/i });
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink.className).toContain("focus-visible:ring-2");

    const viberLink = screen.getByRole("link", { name: /Написать в Viber/i });
    expect(viberLink).toBeInTheDocument();
    expect(viberLink.className).toContain("focus-visible:ring-2");

    const telegramLink = screen.getByRole("link", {
      name: /Telegram — откроется в новой вкладке/i,
    });
    expect(telegramLink).toBeInTheDocument();
    expect(telegramLink.className).toContain("focus-visible:ring-2");
  });

  it("supports toggling donation info and copying donation details with proper focus and feedback", async () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const donateToggle = screen.getByRole("button", { name: /Поддержать проект/i });
    expect(donateToggle).toHaveAttribute("type", "button");
    expect(donateToggle).toHaveAttribute("aria-expanded", "false");
    expect(donateToggle.className).toContain("focus-visible:ring-2");

    fireEvent.click(donateToggle);
    expect(donateToggle).toHaveAttribute("aria-expanded", "true");

    const copyBtn = screen.getByRole("button", {
      name: /Копировать номер для перевода/i,
    });
    expect(copyBtn).toHaveAttribute("type", "button");
    expect(copyBtn.className).toContain("focus-visible:ring-2");

    await act(async () => {
      fireEvent.click(copyBtn);
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      expect.stringContaining("+375 29 5320907")
    );
  });
});
