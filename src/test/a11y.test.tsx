import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";
import NotFound from "../pages/NotFound";
import { MemoryRouter } from "react-router-dom";

describe("Accessibility and UX Improvements", () => {
  it("renders Skip to Content link in App pointing to #main-content", () => {
    render(<App />);
    const skipLink = screen.getByRole("link", { name: "Перейти к основному содержимому" });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("renders Index page main landmark with id='main-content' and tabIndex={-1}", () => {
    render(<App />);
    const mainLandmark = screen.getByRole("main");
    expect(mainLandmark).toHaveAttribute("id", "main-content");
    expect(mainLandmark).toHaveAttribute("tabindex", "-1");
  });

  it("renders NotFound page with main landmark and SPA navigation link", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const mainLandmark = screen.getByRole("main");
    expect(mainLandmark).toHaveAttribute("id", "main-content");
    expect(mainLandmark).toHaveAttribute("tabindex", "-1");

    const homeLink = screen.getByRole("link", { name: "Return to Home" });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
