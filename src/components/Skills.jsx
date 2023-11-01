import HTML from "../assets/html.png";
import { technologies, newTechnologies } from "../data/technologies";
import SkillsItem from "./SkillsItem";

function Skills() {
  console.log(technologies);
  return (
    <div name="skills" className=" w-full bg-black text-[#f39404]">
      <div className="flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex h-full w-full flex-col justify-center gap-10 pl-4  sm:items-center">
          <div>
            <p className="inline border-b-4 border-white text-4xl font-bold">
              Experience
            </p>
          </div>
          <div>
            <li className="mb-4 text-xl text-white">
              Technologies I've worked with.
            </li>
          </div>
          <div className="flex flex-wrap justify-center gap-10 lg:flex-nowrap">
            {technologies.map((skill) => (
              <SkillsItem skill={skill} key={skill.name} />
            ))}
          </div>
          <div className="mt-10">
            <li className="mb-4 text-xl text-white">Currently learning.</li>
          </div>
          <div className="flex flex-wrap justify-center gap-10 lg:flex-nowrap">
            {newTechnologies.map((skill) => (
              <SkillsItem skill={skill} key={skill.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
