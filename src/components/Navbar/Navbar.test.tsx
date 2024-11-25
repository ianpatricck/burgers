import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navbar from ".";
import { BrowserRouter } from "react-router-dom";

describe("Navbar", () => {
  it("should render and verify all header links", () => {
    const { getAllByTestId } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    const links = getAllByTestId("link");

    links.forEach((link) => expect(link).toBeInTheDocument());
  });
});
