import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: null,
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
});

export default noteSlice.reducer;

export const { addCategory } = noteSlice.actions;
