import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Accessibility Integration Tests", () => {
  it("should render the 'Skip to Content' link with correct text, href, and hidden properties", () => {
    render(<App />);

    const skipLink = screen.getByRole("link", {
      name: "Перейти к основному содержимому",
    }) as HTMLAnchorElement;

    expect(skipLink).toBeInTheDocument();
    expect(skipLink.getAttribute("href")).toBe("#main-content");
    expect(skipLink).toHaveClass("sr-only");
    expect(skipLink).toHaveClass("focus:not-sr-only");
  });

  it("should have a main container with id='main-content' and tabIndex={-1}", () => {
    render(<App />);

    const mainContainer = screen.getByRole("main");
    expect(mainContainer).toBeInTheDocument();
    expect(mainContainer.getAttribute("id")).toBe("main-content");
    expect(mainContainer.getAttribute("tabindex")).toBe("-1");
    expect(mainContainer).toHaveClass("outline-none");
  });
});
