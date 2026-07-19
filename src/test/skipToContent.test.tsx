import { render, screen } from "@testing-library/react";
import App from "../App";
import { describe, it, expect } from "vitest";

describe("Skip to Content Link", () => {
  it("renders the skip to content link with correct attributes", () => {
    render(<App />);
    const link = screen.getByRole("link", { name: /Перейти к основному содержимому/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#main-content");
    expect(link).toHaveClass("sr-only");
  });
});
