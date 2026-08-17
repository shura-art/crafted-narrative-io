import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import NotFound from "../pages/NotFound";

describe("NotFound Page", () => {
  test("renders 404 heading, landmark main container with id, and home link", () => {
    const { container } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const mainElement = container.querySelector("#main-content");
    expect(mainElement).not.toBeNull();
    expect(mainElement?.getAttribute("tabIndex")).toBe("-1");

    expect(screen.getByRole("heading", { level: 1, name: "404" })).toBeDefined();

    const homeLink = screen.getByRole("link", { name: /return to home/i });
    expect(homeLink).toBeDefined();
    expect(homeLink.getAttribute("href")).toBe("/");
  });
});
