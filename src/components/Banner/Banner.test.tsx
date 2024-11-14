import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import Banner from "./Banner";

describe("Banner", () => {
  it("should render the Banner component", () => {
    render(<Banner />);
  });
});
