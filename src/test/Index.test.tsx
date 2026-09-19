import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Index from "../pages/Index";
import { TooltipProvider } from "@/components/ui/tooltip";

describe("Index Page", () => {
  it("renders main element with id='main-content' landmark", () => {
    const { container } = render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const mainElement = container.querySelector("main#main-content");
    expect(mainElement).not.toBeNull();
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
  });

  it("renders donate button with explicit type='button' and focus ring classes", () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const donateButton = screen.getByRole("button", { name: /Поддержать проект/i });
    expect(donateButton).toBeInTheDocument();
    expect(donateButton).toHaveAttribute("type", "button");
    expect(donateButton.className).toContain("focus-visible:ring-2");
  });
});
