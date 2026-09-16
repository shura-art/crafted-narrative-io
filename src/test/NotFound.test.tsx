import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import NotFound from "@/pages/NotFound";

describe("NotFound page accessibility and navigation", () => {
  it("renders main landmark with id='main-content' and tabIndex={-1}", () => {
    const { container } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const main = container.querySelector("main#main-content");
    expect(main).not.toBeNull();
    expect(main).toHaveAttribute("tabIndex", "-1");
  });

  it("renders Link to home page with ARIA label and focus styles", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const homeLink = screen.getByRole("link", { name: /Return to main page/i });
    expect(homeLink).toHaveAttribute("href", "/");
    expect(homeLink.className).toContain("focus-visible:ring-2");
  });
});
