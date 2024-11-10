import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../../../types/cart/cart";

const initialState: Cart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Cart>) {
      let itemAlreadyExists = state.find(
        (item) => item.id == action.payload.id,
      );

      if (itemAlreadyExists) {
        itemAlreadyExists.quantity = action.payload.quantity;
        itemAlreadyExists.price = action.payload.price;
        itemAlreadyExists.real_price = action.payload.real_price;
        itemAlreadyExists.aditional = action.payload.aditional;
      } else {
        state.push(action.payload);
      }
    },

    updateQuantity(state, action: PayloadAction<Cart>) {
      let item = state.find((item) => item.id == action.payload.id);

      if (item) {
        item.quantity = action.payload.quantity;
        item.price = item.real_price * action.payload.quantity;
      }
    },
  },
});

export const { addToCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
