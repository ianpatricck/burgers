import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Input from ".";

describe("Input", () => {
  it("should render the Input component", () => {
    const { getByTestId } = render(
      <Input type="text" name="email" placeholder="Email" />,
    );

    expect(getByTestId("input")).toBeInTheDocument();
  });

  it("should be able to set the password into the input", () => {
    let password: string = "";

    const { getByTestId } = render(
      <Input
        type="password"
        placeholder="password"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          password = event.target.value;
        }}
      />,
    );

    const input = getByTestId("input");

    fireEvent.change(input, { target: { value: "mysecret" } });

    expect(password).toBe("mysecret");
  });
});
