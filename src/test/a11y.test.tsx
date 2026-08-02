import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import Index from "../pages/Index";
import NotFound from "../pages/NotFound";

describe("Accessibility Integration Tests", () => {
  it("renders the Skip to Content link at the application level", () => {
    render(<App />);
    const skipLink = screen.getByRole("link", { name: "Перейти к основному содержимому" });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("ensures main container in Index page has proper accessibility properties for skip-link targeting", () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );
    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
    expect(mainElement).toHaveClass("outline-none");
  });

  it("ensures main container in NotFound page has proper accessibility properties for skip-link targeting", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
    expect(mainElement).toHaveClass("outline-none");
  });
});
