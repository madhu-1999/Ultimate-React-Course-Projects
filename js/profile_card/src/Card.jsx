import { Avatar } from "./Avatar";
import { Intro } from "./Intro.jsx";
import { Skills } from "./Skills.jsx";

export const Card = () => {
  return (
    <div className="card">
      <Avatar />
      <Intro />
      <Skills />
    </div>
  );
};
