import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Index from "../pages/Index";
import { TooltipProvider } from "@/components/ui/tooltip";

describe("Index page UX and accessibility", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders interactive elements with focus-visible keyboard navigation classes", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const portfolioLink = screen.getByLabelText(/Портфолио/i);
    expect(portfolioLink.className).toContain("focus-visible:ring-2");
    expect(portfolioLink.className).toContain("focus-visible:ring-accent-glow/60");

    const donateButton = screen.getByRole("button", { name: /Поддержать проект/i });
    expect(donateButton.className).toContain("focus-visible:ring-2");
    expect(donateButton.className).toContain("focus-visible:ring-accent-glow/60");
    expect(donateButton).toHaveAttribute("type", "button");

    const phoneLink = screen.getByLabelText("Позвонить");
    expect(phoneLink.className).toContain("focus-visible:ring-2");
    expect(phoneLink.className).toContain("focus-visible:ring-accent-glow/60");
  });

  it("toggles donation details and handles copying to clipboard with focus styles", async () => {
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
    expect(copyButton.className).toContain("focus-visible:ring-2");
    expect(copyButton.className).toContain("focus-visible:ring-accent-glow/60");

    fireEvent.click(copyButton);

    await waitFor(() => {
      expect(writeTextMock).toHaveBeenCalledWith('+375 29 5320907  "СБЕРБАНК" (БЕЛАРУСЬ)');
      expect(screen.getByRole("button", { name: "Скопировано" })).toBeInTheDocument();
    });
  });
});
