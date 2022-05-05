import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEdit: false,
};

const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    toggleEdit(state) {
      state.isEdit = !state.isEdit;
    },
  },
});

export default editSlice.reducer;

export const { toggleEdit } = editSlice.actions;
