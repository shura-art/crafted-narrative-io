import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("Accessibility integration tests", () => {
  it("renders the 'Skip to Content' link targeting #main-content", () => {
    render(<App />);
    const skipLink = screen.getByText("Перейти к основному содержимому");
    expect(skipLink).toBeInTheDocument();
    expect(skipLink.getAttribute("href")).toBe("#main-content");
  });

  it("renders main content landmark with proper id and tabIndex", () => {
    render(<App />);
    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
    expect(mainElement.getAttribute("id")).toBe("main-content");
    expect(mainElement.getAttribute("tabIndex")).toBe("-1");
  });
});
