import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Index from "../pages/Index";
import { TooltipProvider } from "@/components/ui/tooltip";

describe("Index Page Micro-UX & Accessibility", () => {
  const renderIndex = () =>
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

  it("renders main element with id='main-content' and tabIndex={-1}", () => {
    renderIndex();
    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabindex", "-1");
    expect(mainElement.className).toContain("outline-none");
  });

  it("has type='button' and focus ring styling on 'Поддержать проект' button", () => {
    renderIndex();
    const donateButton = screen.getByRole("button", { name: /Поддержать проект/i });
    expect(donateButton).toHaveAttribute("type", "button");
    expect(donateButton.className).toContain("focus-visible:ring-2");
    expect(donateButton.className).toContain("focus-visible:ring-accent-glow/60");
  });

  it("toggles donate section and provides accessible copy button with focus ring", () => {
    renderIndex();
    const donateButton = screen.getByRole("button", { name: /Поддержать проект/i });
    expect(donateButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(donateButton);
    expect(donateButton).toHaveAttribute("aria-expanded", "true");

    const copyButton = screen.getByRole("button", { name: /Копировать номер для перевода/i });
    expect(copyButton).toBeInTheDocument();
    expect(copyButton).toHaveAttribute("type", "button");
    expect(copyButton.className).toContain("focus-visible:ring-2");
    expect(copyButton.className).toContain("focus-visible:ring-accent-glow/60");
  });

  it("includes focus-visible styling on contact links", () => {
    renderIndex();
    const phoneLink = screen.getByRole("link", { name: "Позвонить" });
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink.className).toContain("focus-visible:ring-2");
    expect(phoneLink.className).toContain("focus-visible:ring-accent-glow/60");
  });
});
