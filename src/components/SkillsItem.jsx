function SkillsItem({ skill }) {
  return (
    <div className=" md:w-22 mx-auto flex w-[45%] flex-col items-center justify-center gap-2">
      <img src={skill.src} className="w-[50%]" alt="Skill" />
      <p className=" text-xl font-semibold  text-white">{skill.name}</p>
    </div>
  );
}

export default SkillsItem;
