import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Skip to Content accessibility integration", () => {
  it("renders the skip to content link with correct attributes", () => {
    render(<App />);
    const link = screen.getByRole("link", { name: /Перейти к основному содержимому/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#main-content");
    expect(link).toHaveClass("sr-only");
  });

  it("renders the main content container with appropriate accessibility properties", () => {
    render(<App />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
    expect(main).toHaveAttribute("id", "main-content");
    expect(main).toHaveAttribute("tabIndex", "-1");
    expect(main).toHaveClass("outline-none");
  });
});
