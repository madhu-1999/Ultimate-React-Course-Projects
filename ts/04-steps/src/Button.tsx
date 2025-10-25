import type { ReactElement } from "react";

type Props = {
  bgColor: string;
  color: string;
  children: ReactElement;
  onClick: () => void;
};
export const Button = ({ bgColor, color, children, onClick }: Props) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
