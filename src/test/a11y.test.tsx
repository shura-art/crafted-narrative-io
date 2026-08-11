import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../App";

test("Skip to content link is present and targets main-content container", () => {
  render(<App />);

  // Check if Skip to Content link is in the DOM
  const skipLink = screen.getByText("Перейти к основному содержимому");
  expect(skipLink).toBeInTheDocument();
  expect(skipLink).toHaveAttribute("href", "#main-content");

  // Check if main-content container exists
  const mainContent = screen.getByRole("main");
  expect(mainContent).toBeInTheDocument();
  expect(mainContent).toHaveAttribute("id", "main-content");
  expect(mainContent).toHaveAttribute("tabIndex", "-1");
});
