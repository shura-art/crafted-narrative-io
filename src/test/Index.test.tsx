import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Index from "../pages/Index";
import { TooltipProvider } from "@/components/ui/tooltip";

describe("Index page UX and accessibility", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders buttons with type='button' and focus ring styles", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const donateButton = screen.getByRole("button", { name: /поддержать проект/i });
    expect(donateButton).toHaveAttribute("type", "button");
    expect(donateButton.className).toContain("focus-visible:ring-2");
    expect(donateButton.className).toContain("focus-visible:ring-accent-glow/60");
  });

  it("renders links with standardized focus-visible ring styles", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const portfolioLink = screen.getByRole("link", { name: /портфолио/i });
    expect(portfolioLink.className).toContain("focus-visible:ring-2");
    expect(portfolioLink.className).toContain("focus-visible:ring-accent-glow/60");

    const phoneLink = screen.getByRole("link", { name: "Позвонить" });
    expect(phoneLink.className).toContain("focus-visible:ring-2");
    expect(phoneLink.className).toContain("focus-visible:ring-accent-glow/60");
  });

  it("handles copy donation information with accessible button and state change", async () => {
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

    // Expand donate section
    const donateButton = screen.getByRole("button", { name: /поддержать проект/i });
    fireEvent.click(donateButton);

    const copyButton = screen.getByRole("button", { name: "Копировать номер для перевода" });
    expect(copyButton).toHaveAttribute("type", "button");
    expect(copyButton.className).toContain("focus-visible:ring-2");
    expect(copyButton.className).toContain("focus-visible:ring-accent-glow/60");

    fireEvent.click(copyButton);

    expect(writeTextMock).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Скопировано" })).toBeInTheDocument();
    });
  });
});
