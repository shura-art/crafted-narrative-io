import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "@/App";

describe("Accessibility Integration", () => {
  it("renders Skip to Content link targeting #main-content", () => {
    render(<App />);

    const skipLink = screen.getByRole("link", { name: /перейти к основному содержимому/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("renders main landmark with id='main-content' on primary page", () => {
    render(<App />);

    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabindex", "-1");
  });
});
