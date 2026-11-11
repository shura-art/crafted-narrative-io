import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Index from "@/pages/Index";
import { TooltipProvider } from "@/components/ui/tooltip";

describe("Index page UX and accessibility", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  const renderIndex = () => {
    return render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );
  };

  it("renders profile header and story sections", () => {
    renderIndex();
    expect(screen.getByRole("heading", { level: 1, name: /Александр В\. Люцко/i })).toBeInTheDocument();
    expect(screen.getByText(/Моя история/i)).toBeInTheDocument();
    expect(screen.getByText(/Чем я занимаюсь/i)).toBeInTheDocument();
  });

  it("renders portfolio link with accessible label and focus styling", () => {
    renderIndex();
    const portfolioLink = screen.getByRole("link", { name: "Портфолио — откроется в новой вкладке" });
    expect(portfolioLink).toHaveAttribute("target", "_blank");
    expect(portfolioLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(portfolioLink.className).toContain("focus-visible:ring-2");
  });

  it("renders contact links with accessible labels and focus styling", () => {
    renderIndex();
    const callLink = screen.getByRole("link", { name: "Позвонить" });
    expect(callLink).toHaveAttribute("href", "tel:+375295320907");
    expect(callLink.className).toContain("focus-visible:ring-2");

    const viberLink = screen.getByRole("link", { name: "Написать в Viber" });
    expect(viberLink.className).toContain("focus-visible:ring-2");

    const telegramLink = screen.getByRole("link", { name: "Telegram — откроется в новой вкладке" });
    expect(telegramLink).toHaveAttribute("target", "_blank");
    expect(telegramLink.className).toContain("focus-visible:ring-2");
  });

  it("toggles donate section with aria-expanded, aria-controls, and copies details", async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    });

    renderIndex();
    const donateButton = screen.getByRole("button", { name: /Поддержать проект/i });
    expect(donateButton).toHaveAttribute("aria-expanded", "false");
    expect(donateButton).toHaveAttribute("aria-controls", "donate-details");
    expect(donateButton).toHaveAttribute("type", "button");
    expect(donateButton.className).toContain("focus-visible:ring-2");

    // Open donate accordion
    fireEvent.click(donateButton);
    expect(donateButton).toHaveAttribute("aria-expanded", "true");

    const donatePanel = document.getElementById("donate-details");
    expect(donatePanel).toBeInTheDocument();

    const copyButton = screen.getByRole("button", { name: "Копировать номер для перевода" });
    expect(copyButton).toHaveAttribute("type", "button");
    expect(copyButton.className).toContain("focus-visible:ring-2");

    fireEvent.click(copyButton);
    expect(writeTextMock).toHaveBeenCalledWith(expect.stringContaining("+375 29 5320907"));

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Скопировано" })).toBeInTheDocument();
    });
  });
});
