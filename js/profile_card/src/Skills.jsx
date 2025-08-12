import { Skill } from "./Skill.jsx";
const skills = ["JavaScript", "Java", "Python", "React", "HTML + CSS", "Git"];
export const Skills = () => {
  return (
    <div className="skill-list">
      {skills.map((skill, index) => (
        <Skill name={skill} key={index} />
      ))}
    </div>
  );
};
