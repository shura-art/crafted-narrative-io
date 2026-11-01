import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Index from "@/pages/Index";
import { TooltipProvider } from "@/components/ui/tooltip";

describe("Index page keyboard accessibility and UX interactions", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders interactive elements with focus-visible keyboard ring classes", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>,
    );

    const portfolioLink = screen.getByRole("link", {
      name: /Портфолио/i,
    });
    expect(portfolioLink).toHaveClass("focus-visible:ring-2");
    expect(portfolioLink).toHaveClass("focus-visible:ring-accent-glow/60");

    const phoneLink = screen.getByRole("link", { name: "Позвонить" });
    expect(phoneLink).toHaveClass("focus-visible:ring-2");
    expect(phoneLink).toHaveClass("focus-visible:ring-accent-glow/60");

    const donateButton = screen.getByRole("button", {
      name: /Поддержать проект/i,
    });
    expect(donateButton).toHaveAttribute("type", "button");
    expect(donateButton).toHaveAttribute("aria-expanded", "false");
    expect(donateButton).toHaveClass("focus-visible:ring-2");
    expect(donateButton).toHaveClass("focus-visible:ring-accent-glow/60");
  });

  it("toggles donation info and provides an accessible copy button with focus ring and feedback", async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    });

    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>,
    );

    const donateButton = screen.getByRole("button", {
      name: /Поддержать проект/i,
    });

    // Expand donation section
    fireEvent.click(donateButton);
    expect(donateButton).toHaveAttribute("aria-expanded", "true");

    const copyButton = screen.getByRole("button", {
      name: "Копировать номер для перевода",
    });
    expect(copyButton).toBeInTheDocument();
    expect(copyButton).toHaveAttribute("type", "button");
    expect(copyButton).toHaveClass("focus-visible:ring-2");
    expect(copyButton).toHaveClass("focus-visible:ring-accent-glow/60");

    // Click copy button
    fireEvent.click(copyButton);

    expect(writeTextMock).toHaveBeenCalledWith(
      expect.stringContaining("+375 29 5320907"),
    );

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Скопировано" })).toBeInTheDocument();
    });
  });
});
