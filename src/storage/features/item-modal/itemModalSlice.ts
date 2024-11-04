import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SectionItem } from "../../../types/api-response/MenuDetails";

export interface ItemModalState {
  isVisible: boolean;
  food: SectionItem;
}

const initialState: ItemModalState = {
  isVisible: false,
  food: {
    id: 0,
    name: "",
    description: "",
    alcoholic: 0,
    price: 0,
    position: 0,
    visible: 0,
    availabilityType: "",
    sku: "",
    images: [],
    available: false,
    modifiers: [],
  },
};

export const itemModalSlice = createSlice({
  name: "item-modal",
  initialState,
  reducers: {
    show(state, action: PayloadAction<ItemModalState>) {
      state.isVisible = action.payload.isVisible;
      state.food = action.payload.food;
    },

    close(state) {
      state.isVisible = false;
      state.food = initialState.food;
    },
  },
});

export const { show, close } = itemModalSlice.actions;
export default itemModalSlice.reducer;
