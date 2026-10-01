import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import NotFound from "@/pages/NotFound";

describe("NotFound Page Component", () => {
  it("renders main landmark with id='main-content' and tabIndex={-1}", () => {
    const { container } = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const mainElement = container.querySelector("main#main-content");
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveAttribute("tabindex", "-1");
  });

  it("renders navigation link to home with correct ARIA label and focus styles", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const returnLink = screen.getByRole("link", { name: "Return to homepage" });
    expect(returnLink).toBeInTheDocument();
    expect(returnLink).toHaveAttribute("href", "/");
    expect(returnLink.className).toContain("focus-visible:ring-2");
  });
});
