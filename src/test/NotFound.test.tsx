import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import NotFound from "../pages/NotFound";

describe("NotFound Page", () => {
  it("renders main landmark with main-content id for skip-link accessibility", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
  });

  it("renders return to home link with proper destination and aria-label", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const linkElement = screen.getByRole("link", { name: /return to home/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
    expect(linkElement).toHaveAttribute("aria-label", "Return to home page");
  });
});
