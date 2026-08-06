import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Accessibility Integration Tests", () => {
  it("should render the skip to content link with correct target characteristics", () => {
    render(<App />);

    // Assert Skip to Content link is present in Russian
    const skipLink = screen.getByRole("link", {
      name: /Перейти к основному содержимому/i,
    });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");

    // Assert target main container has correct layout & accessibility roles
    const mainContent = screen.getByRole("main");
    expect(mainContent).toBeInTheDocument();
    expect(mainContent).toHaveAttribute("id", "main-content");
    expect(mainContent).toHaveAttribute("tabIndex", "-1");
  });
});
