import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import NotFound from "../pages/NotFound";

describe("NotFound Component", () => {
  it("renders 404 message and accessible home navigation link", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Oops! Page not found")).toBeInTheDocument();

    const homeLink = screen.getByRole("link", { name: "Return to homepage" });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");

    const mainLandmark = screen.getByRole("main");
    expect(mainLandmark).toHaveAttribute("id", "main-content");
    expect(mainLandmark).toHaveAttribute("tabIndex", "-1");
  });
});
