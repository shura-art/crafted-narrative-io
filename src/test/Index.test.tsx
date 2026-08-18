import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Index from "../pages/Index";
import { TooltipProvider } from "../components/ui/tooltip";

// Mock sonner toast
vi.mock("sonner", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

describe("Index page UX & Accessibility", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Mock navigator.clipboard
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
      writable: true,
      configurable: true,
    });
  });

  it("renders phone copy button with proper ARIA label and copies phone number on click", async () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const copyPhoneBtn = screen.getByRole("button", { name: "Копировать телефон" });
    expect(copyPhoneBtn).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(copyPhoneBtn);
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("+375 (29) 532-09-07");
  });

  it("renders all contact links with focus visible classes and aria-labels", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const callLink = screen.getByRole("link", { name: "Позвонить" });
    expect(callLink).toBeInTheDocument();
    expect(callLink.className).toContain("focus-visible:ring-2");

    const portfolioLink = screen.getByRole("link", { name: "Портфолио — откроется в новой вкладке" });
    expect(portfolioLink).toBeInTheDocument();
    expect(portfolioLink.className).toContain("focus-visible:ring-2");
  });
});
