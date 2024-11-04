import { configureStore } from "@reduxjs/toolkit";
import itemModalReducer from "../features/item-modal/itemModalSlice";

export const store = configureStore({
  reducer: {
    itemModal: itemModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
