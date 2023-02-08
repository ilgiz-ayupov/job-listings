import { createSlice } from "@reduxjs/toolkit";

// Models
import type { RootState } from "store";
import type { JobPosition } from "models/JobPosition";
import type { Filter } from "models/Filter";

// Data
import jobsData from "data/jobs-positions.json";

interface JobState {
  list: JobPosition[];
}

const initialState: JobState = {
  list: jobsData,
};

// Slice
export const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
});

// Actions

// Selectors
export const selectAllJobs = (state: RootState) => state.jobs.list;
export const selectJobsByFilter = (state: RootState, filters: Filter[]) => {
  return state.jobs.list.filter((job) => {
    const filtersName = filters.map((filter) => filter.name);
    const skills = [job.role, job.level, ...job.languages, ...job.tools];
    return (
      filtersName.length === 0 ||
      filtersName.every((filter) => skills.includes(filter))
    );
  });
};
