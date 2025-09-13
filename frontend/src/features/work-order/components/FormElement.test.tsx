import React from "react";
import { render, screen } from "@testing-library/react";
import FormElement from "./FormElement";
import "@testing-library/jest-dom";

describe("FormElement", () => {
  it("renders a text input with label", () => {
    render(
      <FormElement
        type="text-input"
        label="First Name"
        id="firstName"
        placeholder="Enter first name"
        required={true}
      />
    );

    // label is present
    expect(screen.getByText(/First Name/)).toBeInTheDocument();

    // input is rendered
    const input = screen.getByPlaceholderText("Enter first name");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
    expect(input).toBeRequired();
  });

  it("renders a number input", () => {
    render(
      <FormElement
            label="Age"
            id="age"
            placeholder="Enter age"
            required={false} type={"number-input"}      
        />
    );

    const input = screen.getByPlaceholderText("Enter age");
    expect(input).toHaveAttribute("type", "number");
    expect(input).not.toBeRequired();
  });

  it("renders a select input with options", () => {
    render(
      <FormElement
        type="select-input"
        label="Country"
        id="country"
        options={["USA", "Canada"]}
        required={true}
      />
    );

    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(select).toBeRequired();

    // options
    expect(screen.getByText("USA")).toBeInTheDocument();
    expect(screen.getByText("Canada")).toBeInTheDocument();
  });
});
