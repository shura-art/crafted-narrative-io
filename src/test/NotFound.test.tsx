import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import NotFound from "../pages/NotFound";

describe("NotFound Page Accessibility and Navigation", () => {
  it("renders main element with id='main-content' and tabIndex={-1}", () => {
    const { container } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const mainElement = container.querySelector("main#main-content");
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveAttribute("tabindex", "-1");
  });

  it("renders return to home link with proper aria-label and destination", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const link = screen.getByRole("link", { name: /return to home page/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
