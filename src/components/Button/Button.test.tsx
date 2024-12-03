import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Button from ".";

describe("Button", () => {
  it("should render the Button component", () => {
    const { getByTestId, getByText } = render(
      <Button type="button">Hello</Button>,
    );

    expect(getByTestId("button")).toBeInTheDocument();
    expect(getByText("Hello")).toBeInTheDocument();
  });

  it("should pass props depth in button component", () => {
    const handleClick = vi.fn();

    const primaryButton = render(
      <Button type="button" onClick={handleClick}>
        Primary
      </Button>,
    );

    expect(primaryButton.getByText("Primary")).toBeInTheDocument();

    fireEvent.click(primaryButton.getByText("Primary"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should render a HTML element inside the Button component", () => {
    const { getByTestId, getByText } = render(
      <Button type="button">
        <span>Hello</span>
      </Button>,
    );

    expect(getByTestId("button")).toBeInTheDocument();
    expect(getByText("Hello")).toBeInTheDocument();
  });
});
