import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Index from "@/pages/Index";
import { TooltipProvider } from "@/components/ui/tooltip";

describe("Index Page UX & Accessibility", () => {
  it("renders donate button with type='button', focus styles, and toggles aria-expanded", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const donateBtn = screen.getByRole("button", { name: /Поддержать проект/i });
    expect(donateBtn).toBeInTheDocument();
    expect(donateBtn).toHaveAttribute("type", "button");
    expect(donateBtn).toHaveAttribute("aria-expanded", "false");
    expect(donateBtn.className).toContain("focus-visible:ring-2");

    fireEvent.click(donateBtn);
    expect(donateBtn).toHaveAttribute("aria-expanded", "true");
  });
});
