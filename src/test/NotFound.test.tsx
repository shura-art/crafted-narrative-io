import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import NotFound from "@/pages/NotFound";

describe("NotFound Page", () => {
  it("renders with main-content landmark for accessibility skip-link target", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
  });

  it("renders SPA Link pointing to home with aria-label and focus visible styles", () => {
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
