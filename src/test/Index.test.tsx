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

  it("renders profile header and service elements", () => {
    renderComponent();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Александр В. Люцко");
    expect(screen.getByText(/реставрация фотографий/i)).toBeInTheDocument();
  });

  it("toggles the donate section and checks aria-expanded attribute", () => {
    renderComponent();
    const donateButton = screen.getByRole("button", { name: /Поддержать проект/i });
    expect(donateButton).toHaveAttribute("aria-expanded", "false");
    expect(donateButton).toHaveAttribute("type", "button");

    fireEvent.click(donateButton);
    expect(donateButton).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Номер для перевода")).toBeInTheDocument();

    fireEvent.click(donateButton);
    expect(donateButton).toHaveAttribute("aria-expanded", "false");
  });

  it("copies donate details and provides visual feedback", async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    });

    renderComponent();
    const donateButton = screen.getByRole("button", { name: /Поддержать проект/i });
    fireEvent.click(donateButton);

    const copyButton = screen.getByRole("button", { name: /Копировать номер для перевода/i });
    expect(copyButton).toBeInTheDocument();

    fireEvent.click(copyButton);

    expect(writeTextMock).toHaveBeenCalledWith('+375 29 5320907  "СБЕРБАНК" (БЕЛАРУСЬ)');

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Скопировано" })).toBeInTheDocument();
    });
  });

  it("ensures interactive elements contain focus-visible ring styles", () => {
    renderComponent();
    const portfolioLink = screen.getByRole("link", { name: /Портфолио/i });
    expect(portfolioLink.className).toContain("focus-visible:ring-2");

    const donateButton = screen.getByRole("button", { name: /Поддержать проект/i });
    expect(donateButton.className).toContain("focus-visible:ring-2");

    const callLink = screen.getByRole("link", { name: "Позвонить" });
    expect(callLink.className).toContain("focus-visible:ring-2");
  });
});
