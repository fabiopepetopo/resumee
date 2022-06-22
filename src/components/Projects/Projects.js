import { Project } from "components";
export const Projects = ({ projects }) => {
  return (
    <div className="border-l-2 border-[#ff8675] ml-3 pl-2">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};
