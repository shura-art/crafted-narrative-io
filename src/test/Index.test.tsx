import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Index from "@/pages/Index";
import { TooltipProvider } from "@/components/ui/tooltip";

describe("Index page UX and accessibility", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  const renderComponent = () => {
    return render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );
  };

  it("renders main headings and interactive elements with accessible keyboard focus styles", () => {
    renderComponent();

    // Verify main name is present
    expect(screen.getByRole("heading", { level: 1, name: /Александр В\. Люцко/i })).toBeInTheDocument();

    // Verify portfolio link has focus ring classes and new tab aria label
    const portfolioLink = screen.getByRole("link", { name: /Портфолио — откроется в новой вкладке/i });
    expect(portfolioLink).toBeInTheDocument();
    expect(portfolioLink).toHaveClass("focus-visible:ring-2");
    expect(portfolioLink).toHaveClass("focus-visible:ring-accent-glow/60");

    // Verify support button has focus ring classes and type="button"
    const supportButton = screen.getByRole("button", { name: /Поддержать проект/i });
    expect(supportButton).toBeInTheDocument();
    expect(supportButton).toHaveAttribute("type", "button");
    expect(supportButton).toHaveClass("focus-visible:ring-2");
  });

  it("toggles donation details and handles copying with proper feedback", async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    });

    renderComponent();

    const supportButton = screen.getByRole("button", { name: /Поддержать проект/i });
    expect(supportButton).toHaveAttribute("aria-expanded", "false");

    // Click to expand
    fireEvent.click(supportButton);
    expect(supportButton).toHaveAttribute("aria-expanded", "true");

    // Verify donate section content appears
    expect(screen.getByText("Номер для перевода")).toBeInTheDocument();

    const copyButton = screen.getByRole("button", { name: /Копировать номер для перевода/i });
    expect(copyButton).toBeInTheDocument();
    expect(copyButton).toHaveClass("focus-visible:ring-2");

    // Click copy button
    fireEvent.click(copyButton);

    await waitFor(() => {
      expect(writeTextMock).toHaveBeenCalledWith(expect.stringContaining("+375 29 5320907"));
    });

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /Скопировано/i })).toBeInTheDocument();
    });
  });

  it("renders contact links with accessible labels and focus styles", () => {
    renderComponent();

    const callLink = screen.getByRole("link", { name: /Позвонить/i });
    expect(callLink).toHaveAttribute("href", "tel:+375295320907");
    expect(callLink).toHaveClass("focus-visible:ring-2");

    const viberLink = screen.getByRole("link", { name: /Написать в Viber/i });
    expect(viberLink).toBeInTheDocument();
    expect(viberLink).toHaveClass("focus-visible:ring-2");

    const tgLink = screen.getByRole("link", { name: /Telegram — откроется в новой вкладке/i });
    expect(tgLink).toHaveAttribute("target", "_blank");
    expect(tgLink).toHaveClass("focus-visible:ring-2");
  });
});
