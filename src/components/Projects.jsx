import { projects } from "../data/projects";
import ProjectsItem from "./ProjectsItem";

function Projects() {
  return (
    <div name="projects" className="w-full bg-[#f39404] text-black">
      <div className="flex min-h-[100vh] w-full items-center justify-center">
        <div className="my-[75px] flex h-full w-full flex-col justify-center gap-10 sm:items-center">
          <div>
            <p className="ml-4 inline border-b-4 border-white text-4xl font-bold  sm:ml-0">
              Projects
            </p>
          </div>
          <div>
            <p className="mb-4 ml-4 text-2xl text-white sm:ml-0">
              Check out some of my recent work.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-[100px]">
            {projects.map((project) => (
              <ProjectsItem project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
