import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("Accessibility integration tests", () => {
  it("renders the skip to content link with correct target href", () => {
    render(<App />);
    const skipLink = screen.getByRole("link", { name: "Перейти к основному содержимому" });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("contains main landmark with id main-content and tabIndex -1", () => {
    render(<App />);
    const mainLandmark = screen.getByRole("main");
    expect(mainLandmark).toHaveAttribute("id", "main-content");
    expect(mainLandmark).toHaveAttribute("tabindex", "-1");
  });
});
