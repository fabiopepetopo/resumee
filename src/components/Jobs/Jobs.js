import { jobEntries } from "../../data";
import { Job } from "components";

export const Jobs = () => {
  return (
    <div>
      <h2 className="inline-block text-xl font-black border-b-2 mt-6 mb-1 pb-1 pr-16 pl-2 border-slate-900">
        Work experience
      </h2>
      {jobEntries.map((job) => (
        <Job {...job} />
      ))}
    </div>
  );
};
