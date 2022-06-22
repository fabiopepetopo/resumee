import { useContext } from "react";
import { jobEntries } from "data";
import { Job } from "components";
import { ResumeeContext } from "contexts";

export const Jobs = () => {
  const { lang } = useContext(ResumeeContext);

  return (
    <div>
      <h2 className="inline-block text-xl font-black border-b-2 mt-6 mb-1 pb-1 pr-16 pl-2 border-slate-900">
        {jobEntries[lang].title}
      </h2>
      {jobEntries[lang].entries.map((job, index) => (
        <Job key={index} {...job} />
      ))}
    </div>
  );
};
