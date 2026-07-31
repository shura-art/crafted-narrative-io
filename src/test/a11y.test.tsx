import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "@/App";

describe("Accessibility and Core Routing Setup", () => {
  it("should have a Skip to Content link targeting #main-content", () => {
    render(<App />);
    const skipLink = screen.getByRole("link", {
      name: /Перейти к основному содержимому/i,
    });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink.getAttribute("href")).toBe("#main-content");
  });

  it("should render main container with matching ID, tabIndex, and focus utility", () => {
    render(<App />);
    const mainContainers = document.querySelectorAll("main");
    expect(mainContainers.length).toBeGreaterThanOrEqual(1);

    const mainElement = mainContainers[0];
    expect(mainElement.id).toBe("main-content");
    expect(mainElement.getAttribute("tabIndex")).toBe("-1");
    expect(mainElement.className).toContain("outline-none");
  });
});
