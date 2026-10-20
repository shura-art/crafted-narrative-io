import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import NotFound from "../pages/NotFound";

describe("NotFound component", () => {
  it("renders main landmark with main-content id and tabIndex -1", () => {
    const { container } = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const mainElement = container.querySelector("main#main-content");
    expect(mainElement).not.toBeNull();
    expect(mainElement?.getAttribute("tabindex")).toBe("-1");
  });

  it("renders a link back to homepage with proper ARIA label", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole("link", { name: /return to homepage/i });
    expect(homeLink).not.toBeNull();
    expect(homeLink.getAttribute("href")).toBe("/");
  });
});
