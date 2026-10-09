import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Index from "../pages/Index";
import { TooltipProvider } from "@/components/ui/tooltip";

describe("Index page UX & Accessibility", () => {
  const renderIndex = () =>
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

  it("renders main-content landmark container with tabIndex -1", () => {
    const { container } = renderIndex();
    const main = container.querySelector("main#main-content");
    expect(main).toBeInTheDocument();
    expect(main).toHaveAttribute("tabindex", "-1");
  });

  it("includes a skip to content link targeting #main-content", () => {
    renderIndex();
    const skipLink = screen.getByText("Перейти к основному содержимому");
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("ensures interactive elements have explicit type and focus-visible ring classes", () => {
    renderIndex();
    const supportBtn = screen.getByRole("button", { name: /поддержать проект/i });
    expect(supportBtn).toHaveAttribute("type", "button");
    expect(supportBtn.className).toContain("focus-visible:ring-2");
    expect(supportBtn.className).toContain("focus-visible:ring-accent-glow/60");
  });
});
