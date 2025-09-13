import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SafetyInstructions from "./SafteyInstructions";

describe("SafetyInstructions", () => {
  const instructions = ["Wear gloves", "Use safety goggles"];

  it("renders label and instructions", () => {
    render(<SafetyInstructions label="Safety First" instructions={instructions} />);

    expect(screen.getByText("Safety First")).toBeInTheDocument();
    expect(screen.getByText("Wear gloves")).toBeInTheDocument();
    expect(screen.getByText("Use safety goggles")).toBeInTheDocument();
  });

  it("toggles acknowledgement checkbox", () => {
    render(<SafetyInstructions label="Safety First" instructions={instructions} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
