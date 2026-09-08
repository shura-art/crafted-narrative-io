import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";

describe("NotFound Page Component", () => {
  it("renders main landmark container with id='main-content' and tabIndex={-1}", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
  });

  it("renders heading and return home link with correct router destination", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "404", level: 1 })).toBeInTheDocument();
    expect(screen.getByText("Oops! Page not found")).toBeInTheDocument();

    const homeLink = screen.getByRole("link", { name: /return to home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
