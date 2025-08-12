import { Skill } from "./Skill.jsx";
const skills = [
  {
    name: "JavaScript",
    level: "Beginner",
  },
  {
    name: "Java",
    level: "Advanced",
  },
  {
    name: "Python",
    level: "Intermediate",
  },
  {
    name: "HTML+CSS",
    level: "Advanced",
  },
  {
    name: "React",
    level: "Beginner",
  },
  {
    name: "Git",
    level: "Intermediate",
  },
];
export const Skills = () => {
  return (
    <div className="skill-list">
      {skills.map((skill, index) => (
        <Skill name={skill.name} level={skill.level} key={index} />
      ))}
    </div>
  );
};
