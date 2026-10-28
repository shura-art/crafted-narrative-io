import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import NotFound from "../pages/NotFound";

const renderNotFound = () => {
  return render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
};

describe("NotFound Page Accessibility & Navigation", () => {
  it("renders main container with id 'main-content' and tabIndex={-1}", () => {
    const { container } = renderNotFound();
    const main = container.querySelector("main#main-content");
    expect(main).not.toBeNull();
    expect(main).toHaveAttribute("tabindex", "-1");
  });

  it("renders home navigation link pointing to '/' with focus ring classes", () => {
    renderNotFound();
    const homeLink = screen.getByRole("link", { name: /return to home/i });
    expect(homeLink).toHaveAttribute("href", "/");
    expect(homeLink.className).toContain("focus-visible:ring-2");
  });
});
