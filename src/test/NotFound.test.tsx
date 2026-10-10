import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";

describe("NotFound Page", () => {
  it("renders main landmark with id='main-content' and tabIndex={-1}", () => {
    const { container } = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const mainElement = container.querySelector("main#main-content");
    expect(mainElement).not.toBeNull();
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
  });

  it("renders home link with react-router Link and appropriate ARIA label", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const link = screen.getByRole("link", { name: /return to homepage/i });
    expect(link).toHaveAttribute("href", "/");
  });
});
