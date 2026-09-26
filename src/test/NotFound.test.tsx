import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import NotFound from "../pages/NotFound";

describe("NotFound component", () => {
  it("renders 404 heading and error message", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("404");
    expect(screen.getByText("Oops! Page not found")).toBeInTheDocument();
  });

  it("contains the #main-content main landmark with tabIndex -1", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
  });

  it("renders return home link with proper ARIA label and destination", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole("link", { name: "Return to Home page" });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
    expect(homeLink.className).toContain("focus-visible:ring-2");
  });
});
