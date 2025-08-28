import { useState } from "react";

export const TextExpander = ({
  children,
  collapsedNumWords = 11,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  expanded = false,
  className = "",
}) => {
  const [isExpanded, setIsExapnded] = useState(expanded);
  const collapseText = () => {
    let words = children.split(" ");
    return words.slice(0, collapsedNumWords).join(" ") + "...";
  };
  return (
    <div className={className}>
      {isExpanded ? children : collapseText()}
      <button
        className="outline-none border-none underline"
        style={{ color: buttonColor }}
        onClick={() => setIsExapnded((expanded) => !expanded)}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
};
