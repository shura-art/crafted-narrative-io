import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Accessibility Integration Tests", () => {
  it("should render the global Skip to Content link targeting #main-content", () => {
    render(<App />);
    const skipLink = screen.getByRole("link", { name: /перейти к основному содержимому/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink.getAttribute("href")).toBe("#main-content");
  });

  it("should have a main-content target with appropriate properties on the Index page", () => {
    render(<App />);
    const mainContent = document.getElementById("main-content");
    expect(mainContent).toBeInTheDocument();
    expect(mainContent?.tagName.toLowerCase()).toBe("main");
    expect(mainContent).toHaveAttribute("tabindex", "-1");
  });
});
