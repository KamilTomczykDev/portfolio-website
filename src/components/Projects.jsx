import { projects } from "../data/projects";
import ProjectsItem from "./ProjectsItem";
import { useInView } from "react-intersection-observer";

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div name="projects" className="w-full bg-[#f39404] text-black">
      <div className="flex py-[80px] lg:py-[200px] w-full items-center justify-center">
        <div
          ref={ref}
          className={`flex h-full w-full flex-col justify-center gap-10 sm:items-center transition duration-1000 ${
            inView ? "" : "translate-y-6 opacity-0"
          }`}
        >
          <div>
            <p className="ml-4 inline border-b-4 border-white text-4xl font-bold text-stone-900 sm:ml-0">
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
