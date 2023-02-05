import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// Models
import type { RootState } from "store";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Filter } from "models/Filter";

interface FilterState {
  list: Filter[];
}

const initialState: FilterState = {
  list: [],
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addFilter(state, action: PayloadAction<{ name: string }>) {
      const isExists = state.list.find(
        (filter) => filter.name === action.payload.name
      );
      if (!isExists) {
        state.list.push({
          id: nanoid(),
          name: action.payload.name,
        });
      }
    },
    removeFilter(state, action: PayloadAction<{ id: string }>) {
      const index = state.list.findIndex(
        (filter) => filter.id === action.payload.id
      );
      state.list.splice(index, 1);
    },
    clearFilters(state) {
      state.list = [];
    },
  },
});

// Actions
export const { addFilter, removeFilter, clearFilters } = filterSlice.actions;

// Selectors
export const selectAllFilters = (state: RootState) => state.filters.list;
