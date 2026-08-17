import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "../App";

describe("Accessibility - App Skip Link & Landmarks", () => {
  test("renders skip to content link targeting #main-content", () => {
    render(<App />);

    const skipLink = screen.getByRole("link", { name: /перейти к основному содержимому/i });
    expect(skipLink).toBeDefined();
    expect(skipLink.getAttribute("href")).toBe("#main-content");
  });
});
