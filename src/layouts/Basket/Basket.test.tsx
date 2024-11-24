import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Basket from ".";
import { Provider } from "react-redux";
import { store } from "../../storage/app/store";

describe("Basket", () => {
  render(
    <Provider store={store}>
      <Basket />
    </Provider>,
  );

  it("should render Basket component", () => {
    const basketTitle = screen.getByText("Basket");
    expect(basketTitle).toBeDefined();
  });
});
