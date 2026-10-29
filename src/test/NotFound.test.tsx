import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import NotFound from "@/pages/NotFound";

describe("NotFound page accessibility and navigation", () => {
  it("renders main content landmark with correct accessibility attributes", () => {
    const { container } = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const main = container.querySelector("main#main-content");
    expect(main).not.toBeNull();
    expect(main).toHaveAttribute("tabIndex", "-1");
  });

  it("renders home link with react-router destination and focus visible styling", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const homeLink = screen.getByRole("link", { name: "Return to Home" });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
    expect(homeLink.className).toContain("focus-visible:ring-2");
  });
});
