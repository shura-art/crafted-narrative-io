import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("Accessibility and Navigation", () => {
  it("renders the Skip to Content link in App", () => {
    render(<App />);
    const skipLink = screen.getByRole("link", { name: "Перейти к основному содержимому" });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("has main content container with tabIndex=-1", () => {
    const { container } = render(<App />);
    const main = container.querySelector("#main-content");
    expect(main).toBeInTheDocument();
    expect(main).toHaveAttribute("tabIndex", "-1");
  });
});
