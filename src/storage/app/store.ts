import { configureStore } from "@reduxjs/toolkit";
import itemModalReducer from "../features/item-modal/itemModalSlice";
import cartSliceReducer from "../features/cart/cart";

export const store = configureStore({
  reducer: {
    itemModal: itemModalReducer,
    cart: cartSliceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
