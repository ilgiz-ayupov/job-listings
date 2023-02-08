import React from "react";

// Hooks
import { useAppSelector } from "hooks/useAppSelector";

// Store Selectors
import { selectJobsByFilter } from "store/jobSlice";
import { selectAllFilters } from "store/filterSlice";

// Components
import JobCard from "./JobCard";

const JobsList: React.FC = () => {
  const filters = useAppSelector(selectAllFilters);

  // Elements
  const jobs = useAppSelector((state) => selectJobsByFilter(state, filters));
  const jobsElements = jobs.map((job) => <JobCard key={job.id} job={job} />);

  return (
    <div id="job-list">
      <div className="container mx-auto px-5">
        <ul className="flex flex-col items-center py-12">{jobsElements}</ul>
      </div>
    </div>
  );
};

export default JobsList;
