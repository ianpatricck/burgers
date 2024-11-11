import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../../../types/cart/cart";

const initialItemsStoraged = localStorage.getItem("cartStorage");
const initialState: Cart[] = initialItemsStoraged
  ? JSON.parse(initialItemsStoraged)
  : [];

function addToCartStorage(cart: Cart) {
  localStorage.setItem("cartStorage", JSON.stringify(cart));
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Cart>) {
      const cartStorage = localStorage.getItem("cartStorage");

      let itemAlreadyExists = state.find(
        (item) => item.id == action.payload.id,
      );

      /* Already exists a item in cart? */

      if (cartStorage && itemAlreadyExists) {
        let newCart = JSON.parse(cartStorage);
        let itemIndex = state.indexOf(itemAlreadyExists);

        itemAlreadyExists.quantity = action.payload.quantity;
        itemAlreadyExists.price = action.payload.price;
        itemAlreadyExists.real_price = action.payload.real_price;
        itemAlreadyExists.aditional = action.payload.aditional;

        if (itemIndex !== -1) {
          newCart[itemIndex] = itemAlreadyExists;
        }

        addToCartStorage(newCart);
      } else {
        /*  No items in the cart */

        if (cartStorage) {
          let oldCart = JSON.parse(cartStorage);
          oldCart.push(action.payload);

          addToCartStorage(oldCart);

          state.push(action.payload);
        } else {
          localStorage.setItem("cartStorage", JSON.stringify([action.payload]));
          state.push(action.payload);
        }
      }
    },

    updateQuantity(state, action: PayloadAction<Cart>) {
      let item = state.find((item) => item.id == action.payload.id);

      if (item) {
        const cartStorage = localStorage.getItem("cartStorage");

        let newCart = cartStorage ? JSON.parse(cartStorage) : undefined;
        let itemIndex = state.indexOf(item);

        item.quantity = action.payload.quantity;
        item.price = item.real_price * action.payload.quantity;

        if (itemIndex !== -1) {
          if (item.quantity == 0) {
            newCart.splice(itemIndex, 1);
          } else {
            newCart[itemIndex] = item;
          }
        }

        addToCartStorage(newCart);
      }
    },
  },
});

export const { addToCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
