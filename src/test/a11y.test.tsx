import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("Accessibility Integration", () => {
  it("should render the 'Skip to Content' link with Russian label and correct href", () => {
    render(<App />);
    const skipLink = screen.getByRole("link", { name: /Перейти к основному содержимому/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("should have a main container with id 'main-content', tabIndex={-1}, and outline-none", () => {
    const { container } = render(<App />);
    const mainContent = container.querySelector("#main-content");
    expect(mainContent).toBeInTheDocument();
    expect(mainContent).toHaveAttribute("tabindex", "-1");
    expect(mainContent).toHaveClass("outline-none");
  });
});
