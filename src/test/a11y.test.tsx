import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";
import NotFound from "../pages/NotFound";
import { MemoryRouter } from "react-router-dom";

describe("Accessibility checks", () => {
  it("renders skip to content link in App", () => {
    render(<App />);
    const skipLink = screen.getByText("Перейти к основному содержимому");
    expect(skipLink).toBeInTheDocument();
    expect(skipLink.getAttribute("href")).toBe("#main-content");
  });

  it("renders main landmark with id='main-content' on NotFound page", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const mainLandmark = screen.getByRole("main");
    expect(mainLandmark).toBeInTheDocument();
    expect(mainLandmark.getAttribute("id")).toBe("main-content");
    expect(mainLandmark.getAttribute("tabIndex")).toBe("-1");
  });
});
