import { createSlice } from "@reduxjs/toolkit";

type ToggleBasket = {
  isOpen: boolean;
};

const initialState: ToggleBasket = {
  isOpen: false,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    toggle(state) {
      state.isOpen = !state.isOpen;
    },

    open(state) {
      state.isOpen = true;
    },

    close(state) {
      state.isOpen = false;
    },
  },
});

export const { toggle, open, close } = basketSlice.actions;
export default basketSlice.reducer;
