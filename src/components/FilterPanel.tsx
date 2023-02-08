import React from "react";

// Store
import {
  selectAllFilters,
  removeFilter,
  clearFilters,
} from "store/filterSlice";

// Hooks
import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";

// UI
import Stack from "UI/Stack";
import Chip from "UI/Chip";

const FilterPanel: React.FC = () => {
  const filters = useAppSelector(selectAllFilters);
  const dispatch = useAppDispatch();

  // Handlers
  const removeFilterHandler = (id: string) => {
    dispatch(removeFilter({ id }));
  };

  const clearFiltersHandler = () => {
    dispatch(clearFilters());
  };

  // Elements
  const filtersElements = filters.map((filter) => (
    <Chip
      key={filter.id}
      text={filter.name}
      variant="clearable"
      onClick={() => removeFilterHandler(filter.id)}
    />
  ));

  return filters.length !== 0 ? (
    <div id="filter-panel">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between gap-10 rounded-md bg-white px-6 py-6 shadow-lg shadow-cyan-600/25">
          <Stack className="flex flex-wrap gap-3">{filtersElements}</Stack>

          <button
            className="text-lg text-cyan-600 hover:underline"
            onClick={clearFiltersHandler}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default FilterPanel;
