import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import NotFound from "@/pages/NotFound";

describe("NotFound Page", () => {
  it("renders main landmark with id='main-content' and tabIndex={-1}", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabindex", "-1");
  });

  it("renders Link to home with proper ARIA label and focus styles", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const linkElement = screen.getByRole("link", { name: /return to home/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
    expect(linkElement.className).toContain("focus-visible:ring-2");
  });
});
