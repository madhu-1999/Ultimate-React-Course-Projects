export const AccordionItem = ({
  num,
  title,
  text,
  isOpen,
  toggleAccordion,
}) => {
  return (
    <div className={`item ${isOpen ? "open" : ""}`}>
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon" onClick={() => toggleAccordion(num)}>
        {isOpen ? "-" : "+"}
      </p>
      <div className="content-box" hidden={!isOpen}>
        {text}
      </div>
    </div>
  );
};
