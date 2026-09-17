import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "@/App";

describe("Accessibility - Skip to content", () => {
  it("renders skip link pointing to #main-content", () => {
    render(<App />);

    const skipLink = screen.getByText("Перейти к основному содержимому");
    expect(skipLink).not.toBeNull();
    expect(skipLink).toHaveAttribute("href", "#main-content");
    expect(skipLink.className).toContain("sr-only");
    expect(skipLink.className).toContain("focus:not-sr-only");
  });
});
