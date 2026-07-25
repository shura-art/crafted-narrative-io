import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "@/App";

describe("Skip to Content Link Accessibility", () => {
  it("renders the skip to content link with correct target ID and text", () => {
    render(<App />);

    const skipLink = screen.getByRole("link", {
      name: /перейти к основному содержимому/i,
    });

    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
    expect(skipLink).toHaveClass("sr-only");
    expect(skipLink).toHaveClass("focus:not-sr-only");
  });

  it("renders the main content container with the expected ID and tabIndex", () => {
    render(<App />);

    const mainContent = screen.getByRole("main");
    expect(mainContent).toBeInTheDocument();
    expect(mainContent).toHaveAttribute("id", "main-content");
    expect(mainContent).toHaveAttribute("tabindex", "-1");
  });
});
