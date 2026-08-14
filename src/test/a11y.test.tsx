import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

// Simple mock for window.matchMedia if needed
global.matchMedia = global.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};

describe("Accessibility Integration Tests", () => {
  it("should render global skip to content link and correct #main-content target", () => {
    render(<App />);

    // Assert "Skip to Content" link is present in the DOM
    const skipLink = screen.getByRole("link", { name: /Перейти к основному содержимому/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");

    // Assert main-content element is present with correct attributes
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
  });
});
