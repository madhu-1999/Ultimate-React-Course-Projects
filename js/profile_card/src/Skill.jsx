const getRandomColor = () => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#d5c9c9ff", "#FF33A1"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const levelToEmoji = {
  Beginner: " 👶",
  Intermediate: " 🧙‍♀️",
  Advanced: " 🧙‍♂️",
};

export const Skill = ({ name, level }) => {
  return (
    <div className="skill" style={{ backgroundColor: getRandomColor() }}>
      <p>{name}</p>
      <p>{levelToEmoji[level]}</p>
    </div>
  );
};
