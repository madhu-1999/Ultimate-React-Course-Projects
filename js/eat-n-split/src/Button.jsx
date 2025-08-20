export const Button = ({ children, isHidden, onClick, type }) => {
  return (
    <button className="button" hidden={isHidden} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
