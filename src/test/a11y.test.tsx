import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "@/App";

describe("Accessibility Integration Tests", () => {
  it("renders the skip-to-content link targeting #main-content", () => {
    render(<App />);
    const skipLink = screen.getByRole("link", {
      name: /Перейти к основному содержимому/i,
    });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("renders main-content landmark on the Index page", () => {
    render(<App />);
    const mainLandmark = screen.getByRole("main");
    expect(mainLandmark).toBeInTheDocument();
    expect(mainLandmark).toHaveAttribute("id", "main-content");
    expect(mainLandmark).toHaveAttribute("tabindex", "-1");
  });
});
