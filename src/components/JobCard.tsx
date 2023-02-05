import React from "react";
import cn from "classnames";
import { nanoid } from "nanoid";

// Models
import { JobPosition } from "models/JobPosition";

// Store
import { addFilter } from "store/filterSlice";

// Hooks
import { useAppDispatch } from "hooks/useAppDispatch";

// UI
import Stack from "UI/Stack";
import Chip from "UI/Chip";

interface JobCardProps {
  job: JobPosition;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const dispatch = useAppDispatch();
  const skills = [job.role, job.level, ...job.languages, ...job.tools];

  // Handlers
  const addFilterHandler = (name: string) => {
    dispatch(addFilter({ name }));
  };

  return (
    <li
      className={cn(
        "relative mb-12 w-full rounded-lg bg-white py-12 px-6 shadow-lg shadow-cyan-600/25 md:mb-5 md:py-5",
        {
          "border-l-[6px] border-cyan-600": job.featured,
        }
      )}
    >
      <div className="flex flex-col md:flex-row md:items-center">
        <img
          className="absolute top-0 h-16 w-16 -translate-y-1/2 md:static md:h-20 md:w-20 md:translate-y-0"
          src={job.logo}
          alt={job.company}
        />

        <div className="md:ml-5">
          <div className="mb-1 flex items-center">
            <a
              className="font-bold text-cyan-600 transition-colors hover:text-cyan-900"
              href="/"
            >
              {job.company}
            </a>
            <ul className="ml-3 flex flex-wrap items-center gap-2">
              {job.new && (
                <li className="rounded-lg bg-cyan-600 px-3 py-1 text-sm text-white">
                  NEW
                </li>
              )}

              {job.featured && (
                <li className="rounded-lg bg-cyan-900 px-3 py-1 text-sm text-white">
                  FEATURED
                </li>
              )}
            </ul>
          </div>
          <div className="mb-1">
            <a
              href="/"
              className="text-lg font-bold transition-colors hover:text-cyan-600"
            >
              {job.position}
            </a>
          </div>
          <ul className="flex gap-x-4 text-cyan-800">
            <li>{job.postedAt}</li>
            <li className="relative pl-4">
              <span className="absolute top-1/2 left-0 h-1 w-1 -translate-y-1/2 rounded-full bg-cyan-800"></span>
              <span>{job.contract}</span>
            </li>
            <li className="relative pl-4">
              <span className="absolute top-1/2 left-0 h-1 w-1 -translate-y-1/2 rounded-full bg-cyan-800"></span>
              <span>{job.location}</span>
            </li>
          </ul>

          <div className="my-5 border-b border-cyan-800 md:hidden"></div>
        </div>

        <Stack className="flex flex-wrap gap-3 md:ml-auto">
          {skills.map((skill) => (
            <Chip
              key={nanoid()}
              text={skill}
              variant="base"
              onClick={() => addFilterHandler(skill)}
            />
          ))}
        </Stack>
      </div>
    </li>
  );
};

export default JobCard;
