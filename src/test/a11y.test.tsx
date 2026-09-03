import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "@/App";

describe("Accessibility Integration", () => {
  it("renders Skip to Content link targeting #main-content", () => {
    render(<App />);

    const skipLink = screen.getByText("Перейти к основному содержимому");
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("contains main content container with id='main-content' and tabIndex={-1}", () => {
    const { container } = render(<App />);

    const mainElement = container.querySelector("main#main-content");
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveAttribute("tabindex", "-1");
  });
});
