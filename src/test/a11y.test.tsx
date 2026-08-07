import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Accessibility Integration Tests", () => {
  it("renders the Skip to Content link targeting #main-content", () => {
    render(<App />);
    const skipLink = screen.getByText("Перейти к основному содержимому");
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("renders the main content container with correct id, tabIndex and outline-none class", () => {
    const { container } = render(<App />);
    const mainContent = container.querySelector("#main-content");
    expect(mainContent).toBeInTheDocument();
    expect(mainContent).toHaveAttribute("tabindex", "-1");
    expect(mainContent).toHaveClass("outline-none");
  });
});
