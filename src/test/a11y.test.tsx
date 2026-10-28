import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("Global Accessibility", () => {
  it("renders skip to content link targeting #main-content", () => {
    render(<App />);
    const skipLink = screen.getByRole("link", { name: /перейти к основному содержимому/i });
    expect(skipLink).not.toBeNull();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });
});
