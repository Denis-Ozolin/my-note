import { createSlice } from "@reduxjs/toolkit";

import noteOperations from "./note-operations";

const initialState = {
  selectedCategory: null,
  toggle: false,
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  extraReducers: {
    [noteOperations.logger.fulfilled](state, action) {
      state.toggle = !state.toggle;
    },
  },
});

export default noteSlice.reducer;
