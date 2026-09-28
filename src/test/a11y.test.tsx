import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("Accessibility and UX Improvements", () => {
  it("renders global skip to content link pointing to #main-content", () => {
    render(<App />);
    const skipLink = screen.getByRole("link", { name: "Перейти к основному содержимому" });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("renders main element with landmark id='main-content' and tabIndex={-1}", () => {
    const { container } = render(<App />);
    const mainElement = container.querySelector("main#main-content");
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveAttribute("tabindex", "-1");
  });

  it("includes focus visible styles on interactive buttons", () => {
    render(<App />);
    const donateButton = screen.getByRole("button", { name: /Поддержать проект/i });
    expect(donateButton).toBeInTheDocument();
    expect(donateButton.className).toContain("focus-visible:ring-2");
    expect(donateButton.className).toContain("focus-visible:ring-accent-glow/60");
  });
});
