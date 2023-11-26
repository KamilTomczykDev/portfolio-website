import HTML from "../assets/html.png";
import { technologies, newTechnologies } from "../data/technologies";
import SkillsItem from "./SkillsItem";
import { useInView } from "react-intersection-observer";

function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div name="skills" className="w-full bg-stone-900 text-[#f39404]">
      <div className="flex w-full items-center justify-center py-[80px] lg:py-[200px]">
        <div
          ref={ref}
          className={`flex h-full w-full flex-col justify-center gap-10 sm:items-center transition duration-500 ${
            inView ? "" : "translate-y-6 opacity-0"
          }`}
        >
          <div>
            <p className="ml-4 inline border-b-4 border-white text-4xl font-bold  sm:ml-0">
              Experience
            </p>
          </div>
          <div>
            <p
              className={`mb-4 mx-4 text-2xl transition text-white duration-500 sm:ml-0`}
            >
              Technologies I've worked with.
            </p>
          </div>
          <div
            ref={ref}
            className={`flex flex-wrap justify-center gap-10 transition duration-500 delay-500 ${
              inView ? "" : "translate-y-6 opacity-0"
            }`}
          >
            {technologies.map((skill) => (
              <SkillsItem skill={skill} key={skill.name} />
            ))}
          </div>
          <div className="mt-10 mx-4 text-2xl text-white sm:pl-0">
            <p>
              Next move is to learn{" "}
              <span className="font-bold text-[#f39404]">Docker</span> and{" "}
              <span className="font-bold text-[#f39404]">Linux</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
