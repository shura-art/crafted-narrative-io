import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import NotFound from "@/pages/NotFound";

describe("NotFound Component", () => {
  it("renders main landmark with id='main-content' and tabIndex={-1}", () => {
    const { container } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const mainElement = container.querySelector("main#main-content");
    expect(mainElement).not.toBeNull();
    expect(mainElement?.getAttribute("tabindex")).toBe("-1");
  });

  it("renders Return to Home link targeting '/' with proper ARIA label", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const linkElement = screen.getByRole("link", { name: /Return to Home page/i });
    expect(linkElement).not.toBeNull();
    expect(linkElement.getAttribute("href")).toBe("/");
  });
});
