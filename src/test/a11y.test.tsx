import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("Accessibility (a11y) - Global skip-to-content and main target", () => {
  it("should render the 'Skip to Content' link with correct translation and target", () => {
    render(<App />);

    // Check for skip link
    const skipLink = screen.getByRole("link", {
      name: /Перейти к основному содержимому/i,
    });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
    expect(skipLink).toHaveClass("sr-only");
    expect(skipLink).toHaveClass("focus:not-sr-only");
  });

  it("should have a main container with id='main-content' and tabIndex=-1", () => {
    render(<App />);

    // Check for main content target container
    const mainContent = screen.getByRole("main");
    expect(mainContent).toBeInTheDocument();
    expect(mainContent).toHaveAttribute("id", "main-content");
    expect(mainContent).toHaveAttribute("tabIndex", "-1");
    expect(mainContent).toHaveClass("outline-none");
  });
});
