import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";
import NotFound from "../pages/NotFound";
import { MemoryRouter } from "react-router-dom";

describe("Accessibility and UX checks", () => {
  it("renders skip-to-content link targeting #main-content in App", () => {
    render(<App />);
    const skipLink = screen.getByRole("link", { name: "Перейти к основному содержимому" });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("renders main landmark with id main-content and tabIndex -1 on home page", () => {
    render(<App />);
    const mainLandmark = screen.getByRole("main");
    expect(mainLandmark).toBeInTheDocument();
    expect(mainLandmark).toHaveAttribute("id", "main-content");
    expect(mainLandmark).toHaveAttribute("tabindex", "-1");
  });

  it("renders NotFound page with semantic main landmark and accessible Link home button", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const mainLandmark = screen.getByRole("main");
    expect(mainLandmark).toBeInTheDocument();
    expect(mainLandmark).toHaveAttribute("id", "main-content");
    expect(mainLandmark).toHaveAttribute("tabindex", "-1");

    const homeLink = screen.getByRole("link", { name: "Return to Home" });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
    expect(homeLink).toHaveClass("focus-visible:ring-2");
  });
});
