import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";

describe("NotFound page", () => {
  it("renders main landmark with id='main-content' and tabIndex={-1}", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const mainLandmark = screen.getByRole("main");
    expect(mainLandmark).toHaveAttribute("id", "main-content");
    expect(mainLandmark).toHaveAttribute("tabIndex", "-1");
  });

  it("renders a link navigating to home", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const homeLink = screen.getByRole("link", { name: /return to home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute("href")).toBe("/");
  });
});
