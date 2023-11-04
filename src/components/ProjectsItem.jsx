function ProjectsItem({ project }) {
  return (
    <div className="mx-[10px] flex w-[280px] flex-col items-center justify-center gap-8 lg:w-[400px]">
      <div>
        <p className="drop-shadow-3xl text-3xl font-semibold text-white">
          {project.name}
        </p>
      </div>
      {/* image container */}
      <div className="drop-shadow-3xl">
        <div className="border-[10px] border-white">
          <img
            className="grayscale hover:grayscale-0"
            src={project.img}
            alt="Screenshot of a project"
          />
        </div>
      </div>
      {/* details button */}
      <div className="w-full">
        <button className="drop-shadow-3xl w-full bg-white px-3 py-2 text-2xl font-semibold hover:bg-black hover:text-white hover:drop-shadow-2xl 2xl:font-bold">
          Details
        </button>
      </div>
      {/* buttons container */}
      <div className="flex w-full gap-8 ">
        <button className="drop-shadow-3xl w-full bg-white px-3 py-2 text-2xl font-semibold hover:bg-black hover:text-white hover:drop-shadow-2xl 2xl:font-bold">
          Demo
        </button>
        <button className="drop-shadow-3xl w-full bg-white px-3 py-2 text-2xl font-semibold hover:bg-black hover:text-white hover:drop-shadow-2xl 2xl:font-bold">
          Code
        </button>
      </div>
    </div>
  );
}

export default ProjectsItem;
