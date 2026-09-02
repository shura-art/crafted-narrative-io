import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("Accessibility features", () => {
  it("renders skip-to-content link pointing to #main-content", () => {
    render(<App />);

    const skipLink = screen.getByRole("link", { name: /перейти к основному содержимому/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });
});
