import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "../App";

describe("Index Page & Application Accessibility", () => {
  it("renders the skip-to-content link and main landmark target", () => {
    render(<App />);
    const skipLink = screen.getByText("Перейти к основному содержимому");
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");

    const mainElement = screen.getByRole("main");
    expect(mainElement).toHaveAttribute("id", "main-content");
    expect(mainElement).toHaveAttribute("tabIndex", "-1");
  });

  it("handles donate toggle button aria attributes and expands details", () => {
    render(<App />);
    const donateButton = screen.getByRole("button", { name: /поддержать проект/i });
    expect(donateButton).toHaveAttribute("type", "button");
    expect(donateButton).toHaveAttribute("aria-expanded", "false");
    expect(donateButton).toHaveAttribute("aria-controls", "donate-details");

    fireEvent.click(donateButton);
    expect(donateButton).toHaveAttribute("aria-expanded", "true");

    const donateDetails = document.getElementById("donate-details");
    expect(donateDetails).not.toBeNull();
  });

  it("copies donate number to clipboard on copy button click", async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    });

    render(<App />);
    const donateButton = screen.getByRole("button", { name: /поддержать проект/i });
    fireEvent.click(donateButton);

    const copyButton = screen.getByRole("button", { name: /копировать номер для перевода/i });
    expect(copyButton).toHaveAttribute("type", "button");

    await act(async () => {
      fireEvent.click(copyButton);
    });

    expect(writeTextMock).toHaveBeenCalled();
  });
});
