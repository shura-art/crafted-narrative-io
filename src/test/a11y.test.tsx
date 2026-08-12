import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "@/App";

describe("Accessibility Integration Tests", () => {
  it("renders the Skip to Content link targeting #main-content", () => {
    render(<App />);

    const skipLink = screen.getByText("Перейти к основному содержимому");
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
    expect(skipLink).toHaveClass("sr-only", "focus:not-sr-only");
  });

  it("contains main element with correct accessibility attributes", () => {
    render(<App />);

    const mainContent = screen.getByRole("main");
    expect(mainContent).toBeInTheDocument();
    expect(mainContent).toHaveAttribute("id", "main-content");
    expect(mainContent).toHaveAttribute("tabindex", "-1");
    expect(mainContent).toHaveClass("outline-none");
  });
});
