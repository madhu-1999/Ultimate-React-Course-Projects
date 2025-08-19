export const Button = ({ bgColor, color, handleClick, children }) => {
  return (
    <button
      style={{ backgroundColor: { bgColor }, color: { color } }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
