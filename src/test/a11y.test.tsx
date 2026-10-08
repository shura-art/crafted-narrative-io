import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("Accessibility integration tests", () => {
  it("renders the 'Skip to Content' link targeting #main-content", () => {
    render(<App />);
    const skipLink = screen.getByRole("link", { name: "Перейти к основному содержимому" });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("renders main landmark element with id #main-content and tabIndex -1", () => {
    const { container } = render(<App />);
    const mainElement = container.querySelector("main#main-content");
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
  });
});
