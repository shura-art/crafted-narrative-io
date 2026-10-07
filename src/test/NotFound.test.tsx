import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import NotFound from "../pages/NotFound";

describe("NotFound Page Component", () => {
  it("renders main landmark with id='main-content' and tabIndex={-1}", () => {
    const { container } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const mainElement = container.querySelector("main#main-content");
    expect(mainElement).not.toBeNull();
    expect(mainElement?.getAttribute("tabIndex")).toBe("-1");
  });

  it("renders a link back to homepage with proper ARIA label and destination", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const homeLink = screen.getByRole("link", { name: "Return to homepage" });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute("href")).toBe("/");
  });
});
