import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import NotFound from "../pages/NotFound";

describe("NotFound Page", () => {
  it("renders main landmark with id='main-content'", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const main = screen.getByRole("main");
    expect(main).toHaveAttribute("id", "main-content");
    expect(main).toHaveAttribute("tabIndex", "-1");
  });

  it("renders return home link with correct route and aria-label", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const link = screen.getByRole("link", { name: /return to home/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
