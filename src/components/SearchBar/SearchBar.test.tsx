import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SearchBar from ".";
import { store } from "../../storage/app/store";
import { Provider } from "react-redux";

describe("SearchBar", () => {
  it("should render the SearchBar component", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>,
    );
    expect(getByTestId("searchbar")).toBeInTheDocument();
  });
});
