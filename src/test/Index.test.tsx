import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Index from "@/pages/Index";
import { TooltipProvider } from "@/components/ui/tooltip";

// Mock navigator.clipboard
Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn().mockImplementation(() => Promise.resolve()),
  },
});

describe("Index page accessibility and functionality", () => {
  it("renders main landmark with id='main-content' and tabIndex={-1}", () => {
    const { container } = render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );
    const main = container.querySelector("main#main-content");
    expect(main).not.toBeNull();
    expect(main).toHaveAttribute("tabIndex", "-1");
  });

  it("toggles donation details and displays copy button with proper type attribute", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const toggleBtn = screen.getByRole("button", { name: /Поддержать проект/i });
    expect(toggleBtn).toHaveAttribute("type", "button");
    expect(toggleBtn).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(toggleBtn);
    expect(toggleBtn).toHaveAttribute("aria-expanded", "true");

    const copyBtn = screen.getByRole("button", { name: /Копировать номер для перевода/i });
    expect(copyBtn).toHaveAttribute("type", "button");
  });
});
