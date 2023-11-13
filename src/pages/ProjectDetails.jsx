import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectNavBar from "../components/ProjectNavBar";
import { useEffect } from "react";
import Footer from "../components/Footer";

function ProjectDetails() {
  const { id } = useParams();

  const currentProject = projects.filter((obj) =>
    Object.values(obj).some((val) => val.includes(id))
  );

  const [{ name, description, used, liveDemoUrl, codeUrl, img }] =
    currentProject;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProjectNavBar />
      <div className="flex min-h-[100vh] w-full items-center justify-center py-[100px] lg:py-[200px]">
        <div className="flex h-full w-full max-w-[1000px] flex-col items-center gap-8 pt-4  text-stone-900">
          <h1 className="break-words border-b-4 border-[#f39404] text-center text-3xl font-bold md:border-b-8 md:text-6xl">
            {name}
          </h1>
          <img
            className="w-[75%] border-[8px] border-stone-900 drop-shadow-5xl md:border-[20px]"
            src={img}
            alt="Project screenshot"
          />
          <p className="p-4 text-2xl">{description}</p>
          <div className="flex w-full flex-wrap items-center justify-center gap-10 p-4">
            {used.map((el) => (
              <p className="border-b-4 border-[#f39404] text-2xl font-semibold">
                {el}
              </p>
            ))}
          </div>
          <div className="flex w-full gap-8 p-4 text-2xl  font-semibold">
            <a className="w-full" href={liveDemoUrl}>
              <button className="w-full bg-[#f39404] px-4 py-3 drop-shadow-3xl hover:bg-stone-900 hover:text-[#f39404] hover:drop-shadow-5xl">
                Demo
              </button>
            </a>
            <a href={codeUrl} className="w-full">
              <button className="w-full bg-[#f39404] px-4 py-3 drop-shadow-3xl hover:bg-stone-900 hover:text-[#f39404] hover:drop-shadow-5xl">
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectDetails;
