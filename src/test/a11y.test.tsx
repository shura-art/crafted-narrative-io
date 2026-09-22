import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("Accessibility Integration", () => {
  it("renders global skip-to-content link pointing to #main-content", () => {
    render(<App />);

    const skipLink = screen.getByRole("link", { name: /перейти к основному содержимому/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("renders main content container with id='main-content' and tabIndex={-1}", () => {
    render(<App />);

    const mainContainer = screen.getByRole("main");
    expect(mainContainer).toHaveAttribute("id", "main-content");
    expect(mainContainer).toHaveAttribute("tabIndex", "-1");
  });
});
