import { configureStore } from "@reduxjs/toolkit";
import itemModalReducer from "../features/item-modal/itemModalSlice";
import cartSliceReducer from "../features/cart/cartSlice";
import basketSliceReducer from "../features/cart/basketSlice";

export const store = configureStore({
  reducer: {
    itemModal: itemModalReducer,
    cart: cartSliceReducer,
    basket: basketSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
