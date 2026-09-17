import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import NotFound from "@/pages/NotFound";

describe("NotFound component", () => {
  it("renders main landmark with main-content id and tabIndex", () => {
    const { container } = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const mainElement = container.querySelector("main#main-content");
    expect(mainElement).not.toBeNull();
    expect(mainElement).toHaveAttribute("tabindex", "-1");
  });

  it("renders SPA home link with proper ARIA label and focus ring styles", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole("link", { name: "Return to Home" });
    expect(homeLink).toHaveAttribute("href", "/");
    expect(homeLink.className).toContain("focus-visible:ring-2");
  });
});
