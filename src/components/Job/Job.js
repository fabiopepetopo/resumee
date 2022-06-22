import { Projects } from "../Projects";

export const Job = ({ title, company, description, date, projects }) => {
  return (
    <div className="text-base my-8 mx-2">
      <p className="text-xs">{date}</p>
      <h3 className="text-lg">{title}</h3>
      <p className="text-xs">at {company}</p>
      <p className="mt-2 text-base">{description}</p>
      <Projects projects={projects} />
    </div>
  );
};
