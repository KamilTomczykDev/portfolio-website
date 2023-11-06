import { Navigate, useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectNavBar from "../components/ProjectNavBar";
import { useEffect } from "react";

function ProjectDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const currentProject = projects.filter((obj) =>
    Object.values(obj).some((val) => val.includes(id)),
  );

  const [{ name, description, used, img }] = currentProject;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProjectNavBar />
      <div className="flex min-h-[100vh] w-full items-center justify-center bg-stone-200 py-[100px] lg:py-[200px]">
        <div className="flex h-full w-full max-w-[1000px] flex-col items-center gap-8 pt-4  text-stone-900">
          <h1 className="border-b-4 border-[#f39404] text-center text-6xl font-bold">
            {name}
          </h1>
          <img className="w-[75%]" src={img} alt="Project screenshot" />
          <p className="p-4 text-2xl">{description}</p>
          <div className="flex w-full flex-wrap items-center justify-center gap-10 p-4">
            {used.map((el) => (
              <p className="border-b-4 border-[#f39404] text-2xl font-semibold">
                {el}
              </p>
            ))}
          </div>
          <div className="flex w-full gap-8 p-4 text-2xl  font-semibold">
            <button className="w-full bg-[#f39404] px-4 py-3 drop-shadow-3xl hover:bg-stone-900 hover:text-[#f39404] hover:drop-shadow-5xl">
              Demo
            </button>
            <button className="w-full bg-[#f39404] px-4 py-3 drop-shadow-3xl hover:bg-stone-900 hover:text-[#f39404] hover:drop-shadow-5xl">
              Code
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetails;
