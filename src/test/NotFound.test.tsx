import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import NotFound from "../pages/NotFound";

describe("NotFound Page", () => {
  it("renders with main landmark id and tabIndex for accessibility", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
  });

  it("renders a link navigating back to home using react-router Link", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const linkElement = screen.getByRole("link", { name: /return to home/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
