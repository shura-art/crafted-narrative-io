import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Index from "@/pages/Index";
import { TooltipProvider } from "@/components/ui/tooltip";

describe("Index Page", () => {
  it("renders main landmark with id='main-content'", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveAttribute("id", "main-content");
  });

  it("toggles donate section on button click", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const donateButton = screen.getByRole("button", { name: /поддержать проект/i });
    expect(donateButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(donateButton);
    expect(donateButton).toHaveAttribute("aria-expanded", "true");
  });
});
