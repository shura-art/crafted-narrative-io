import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";
import Index from "../pages/Index";
import NotFound from "../pages/NotFound";
import { BrowserRouter } from "react-router-dom";

describe("Accessibility - Skip Link and Landmarks", () => {
  it("renders the skip to content link in App", () => {
    render(<App />);
    const skipLink = screen.getByText("Перейти к основному содержимому");
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("renders main landmark with correct id and tabIndex on Index page", () => {
    render(<Index />);
    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
  });

  it("renders main landmark with correct id and tabIndex on NotFound page", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
  });
});
