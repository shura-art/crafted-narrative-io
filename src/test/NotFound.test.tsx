import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import NotFound from "../pages/NotFound";

describe("NotFound component", () => {
  it("renders main landmark with id='main-content' and tabIndex={-1}", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabindex", "-1");
  });

  it("renders accessible return home link", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const link = screen.getByRole("link", { name: /return to home page/i });
    expect(link).toHaveAttribute("href", "/");
  });
});
