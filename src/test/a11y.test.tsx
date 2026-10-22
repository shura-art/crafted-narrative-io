import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "@/App";

describe("Accessibility Integration Tests", () => {
  it("renders global skip to content link with correct target ID", () => {
    render(<App />);
    const skipLink = screen.getByRole("link", { name: "Перейти к основному содержимому" });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("renders main-content landmark on home route", () => {
    const { container } = render(<App />);
    const mainContent = container.querySelector("#main-content");
    expect(mainContent).toBeInTheDocument();
    expect(mainContent).toHaveAttribute("tabIndex", "-1");
  });
});
