import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SearchBar from ".";

describe("SearchBar", () => {
  it("should render and verify if search input is defined", () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText("Search menu items");

    expect(input).toBeDefined();
  });
});
