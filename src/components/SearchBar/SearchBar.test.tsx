import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SearchBar from ".";

describe("SearchBar", () => {
  it("should render the SearchBar component", () => {
    const { getByTestId } = render(<SearchBar />);
    expect(getByTestId("searchbar")).toBeInTheDocument();
  });
});
