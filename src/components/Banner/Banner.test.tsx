import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Banner from ".";

describe("Banner", () => {
  it("should render the Banner component", () => {
    const { getByTestId } = render(<Banner />);
    expect(getByTestId("banner")).toBeInTheDocument();
  });
});
