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
  const jobs = useAppSelector((state) => selectJobsByFilter(state, filters));

  return (
    <div id="job-list">
      <div className="container mx-auto px-5">
        <ul className="flex flex-col items-center py-12">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobsList;
