import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";

describe("NotFound Page", () => {
  it("renders main-content landmark container with tabIndex -1", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const main = screen.getByRole("main");
    expect(main).toHaveAttribute("id", "main-content");
    expect(main).toHaveAttribute("tabIndex", "-1");
  });

  it("renders client-side Link pointing to home with accessible label and focus classes", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const link = screen.getByRole("link", { name: /Return to Home page/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
    expect(link.className).toContain("focus-visible:ring-2");
  });
});
