import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import NotFound from "@/pages/NotFound";

describe("NotFound Page", () => {
  it("renders main element with id='main-content' and tabIndex={-1}", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
  });

  it("renders return home link with react-router Link pointing to '/'", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const link = screen.getByRole("link", { name: /return to home/i });
    expect(link).toHaveAttribute("href", "/");
  });
});
