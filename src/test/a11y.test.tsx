import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import Index from "../pages/Index";
import NotFound from "../pages/NotFound";

describe("Accessibility Integration Tests", () => {
  it("renders Skip to Content link in the App with correct attributes", () => {
    render(<App />);
    const skipLink = screen.getByText("Перейти к основному содержимому");
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("Index page has main element with correct id and attributes", () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );
    const mainContent = screen.getByRole("main");
    expect(mainContent).toHaveAttribute("id", "main-content");
    expect(mainContent).toHaveAttribute("tabIndex", "-1");
    expect(mainContent).toHaveClass("outline-none");
  });

  it("NotFound page has main element with correct id and attributes", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const mainContent = screen.getByRole("main");
    expect(mainContent).toHaveAttribute("id", "main-content");
    expect(mainContent).toHaveAttribute("tabIndex", "-1");
    expect(mainContent).toHaveClass("outline-none");
  });
});
