import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Cart from "./Cart";
import { Provider } from "react-redux";
import { store } from "../../storage/app/store";

describe("Cart", () => {
  render(
    <Provider store={store}>
      <Cart />
    </Provider>,
  );

  it("should be empty", () => {
    const cartStoraged = localStorage.getItem("cartStorage");
    const cartStoragedParsed = cartStoraged && JSON.parse(cartStoraged);

    if (cartStoragedParsed && cartStoragedParsed.length) {
      screen.findByText("Seu carrinho está vázio");
      return;
    }

    screen.findByText("Sub total:");
    screen.findByText("Total:");
  });
});
