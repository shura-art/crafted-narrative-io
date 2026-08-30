import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Index from "../pages/Index";
import { TooltipProvider } from "@/components/ui/tooltip";

describe("Index page UX & Accessibility", () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });
  });

  it("renders contact rows with quick copy buttons and copies content on click", async () => {
    render(
      <TooltipProvider>
        <Index />
      </TooltipProvider>
    );

    const copyViberBtn = screen.getByRole("button", { name: "Скопировать Viber" });
    expect(copyViberBtn).toBeInTheDocument();

    fireEvent.click(copyViberBtn);

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith("+375 (29) 532-09-07");
    });
  });
});
