function SkillsItem({ skill }) {
  return (
    <div className=" flex w-[130px] flex-col items-center justify-center gap-2">
      <img src={skill.src} className="w-[75%]" alt="Skill" />
      <p className=" text-xl font-semibold  text-white">{skill.name}</p>
    </div>
  );
}

export default SkillsItem;
