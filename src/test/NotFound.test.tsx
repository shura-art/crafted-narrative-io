import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import NotFound from "../pages/NotFound";

describe("NotFound Page", () => {
  it("renders main element with id='main-content' landmark", () => {
    const { container } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const mainElement = container.querySelector("main#main-content");
    expect(mainElement).not.toBeNull();
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
  });

  it("renders Return to Home link with proper ARIA label and focus styles", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const link = screen.getByRole("link", { name: "Return to homepage" });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
    expect(link.className).toContain("focus-visible:ring-2");
  });
});
