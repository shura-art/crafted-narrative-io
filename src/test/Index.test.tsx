import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Index from "../pages/Index";
import { TooltipProvider } from "@/components/ui/tooltip";

const renderIndex = () => {
  return render(
    <TooltipProvider>
      <Index />
    </TooltipProvider>
  );
};

describe("Index Page Accessibility & UX", () => {
  it("renders main element with id 'main-content' and tabIndex={-1}", () => {
    const { container } = renderIndex();
    const mainElement = container.querySelector("main#main-content");
    expect(mainElement).not.toBeNull();
    expect(mainElement).toHaveAttribute("tabindex", "-1");
  });

  it("renders donate button with type='button', aria-expanded, and focus ring classes", () => {
    renderIndex();
    const donateBtn = screen.getByRole("button", { name: /поддержать проект/i });
    expect(donateBtn).toHaveAttribute("type", "button");
    expect(donateBtn).toHaveAttribute("aria-expanded", "false");
    expect(donateBtn.className).toContain("focus-visible:ring-2");
  });

  it("toggles donate section and checks copy button attributes", () => {
    renderIndex();
    const donateBtn = screen.getByRole("button", { name: /поддержать проект/i });
    fireEvent.click(donateBtn);

    expect(donateBtn).toHaveAttribute("aria-expanded", "true");
    const copyBtn = screen.getByRole("button", { name: /копировать номер для перевода/i });
    expect(copyBtn).toHaveAttribute("type", "button");
    expect(copyBtn.className).toContain("focus-visible:ring-2");
  });

  it("renders portfolio link with descriptive aria-label and focus ring", () => {
    renderIndex();
    const portfolioLink = screen.getByRole("link", { name: /портфолио — откроется в новой вкладке/i });
    expect(portfolioLink).toHaveAttribute("target", "_blank");
    expect(portfolioLink.className).toContain("focus-visible:ring-2");
  });
});
