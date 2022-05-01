import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { noteReducer } from "./note";

const rootReducer = combineReducers({
  note: noteReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
