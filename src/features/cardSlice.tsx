import { createSlice } from "@reduxjs/toolkit";
import { ItemType } from "../type/dataType";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    value: null as ItemType | null,
  },
  reducers: {
    setCardSelect: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCardSelect } = cardSlice.actions;
export default cardSlice.reducer;
