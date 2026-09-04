import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("Accessibility Integration Tests", () => {
  it("renders the 'Skip to content' link targeting #main-content", () => {
    render(<App />);
    const skipLink = screen.getByRole("link", {
      name: "Перейти к основному содержимому",
    });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("renders page main landmark with id='main-content' and tabIndex={-1}", () => {
    const { container } = render(<App />);
    const mainElement = container.querySelector("#main-content");
    expect(mainElement).not.toBeNull();
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
  });
});
