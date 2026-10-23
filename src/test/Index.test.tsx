import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Index from "@/pages/Index";
import App from "@/App";
import { TooltipProvider } from "@/components/ui/tooltip";

describe("Index Page Accessibility & UX", () => {
  it("renders main content landmark with correct id and tabIndex", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );
    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
  });

  it("renders skip link targeting #main-content in App", () => {
    render(<App />);
    const skipLink = screen.getByText("Перейти к основному содержимому");
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("toggles donation details and updates copy button ARIA labels", async () => {
    // Mock navigator.clipboard
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
    expect(donateButton).toHaveAttribute("type", "button");

    fireEvent.click(donateButton);
    expect(donateButton).toHaveAttribute("aria-expanded", "true");

    const copyButton = screen.getByRole("button", { name: "Копировать номер для перевода" });
    expect(copyButton).toBeInTheDocument();

    fireEvent.click(copyButton);
    expect(writeTextMock).toHaveBeenCalled();

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Скопировано" })).toBeInTheDocument();
    });
  });

  it("includes focus visible ring styling on external links and buttons", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const portfolioLink = screen.getByRole("link", { name: /Портфолио/i });
    expect(portfolioLink.className).toContain("focus-visible:ring-2");
  });
});
