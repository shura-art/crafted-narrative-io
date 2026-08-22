import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import Index from "../pages/Index";
import NotFound from "../pages/NotFound";

describe("Accessibility (a11y) Integration Tests", () => {
  it("renders the Skip to Content link in App targeting #main-content", () => {
    render(<App />);
    const skipLink = screen.getByText("Перейти к основному содержимому");
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("renders main landmark with id='main-content' and tabIndex={-1} on Index page", () => {
    const { container } = render(<Index />);
    const main = container.querySelector("main#main-content");
    expect(main).toBeInTheDocument();
    expect(main).toHaveAttribute("tabIndex", "-1");
  });

  it("renders main landmark and home link on NotFound page", () => {
    const { container } = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const main = container.querySelector("main#main-content");
    expect(main).toBeInTheDocument();
    expect(main).toHaveAttribute("tabIndex", "-1");

    const link = screen.getByRole("link", { name: "Return to Home" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
