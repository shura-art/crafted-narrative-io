import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import Index from "../pages/Index";

describe("Index Page & App A11y", () => {
  it("renders skip to content link in App", () => {
    render(<App />);

    const skipLink = screen.getByRole("link", { name: /перейти к основному содержимому/i });
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  it("renders main landmark with id='main-content' and tabIndex={-1} on Index", () => {
    const { container } = render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );

    const mainElement = container.querySelector("main#main-content");
    expect(mainElement).not.toBeNull();
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
  });

  it("renders donate button with type='button'", () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );

    const donateButton = screen.getByRole("button", { name: /поддержать проект/i });
    expect(donateButton).toHaveAttribute("type", "button");
  });
});
