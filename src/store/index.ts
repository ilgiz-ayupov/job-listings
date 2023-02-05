import { configureStore } from "@reduxjs/toolkit";

// Slices
import { jobSlice } from "./jobSlice";
import { filterSlice } from "./filterSlice";

export const store = configureStore({
  reducer: {
    [jobSlice.name]: jobSlice.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
