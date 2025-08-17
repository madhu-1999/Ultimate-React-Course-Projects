export const Card = ({ card, isFlipped, onFlip }) => {
  return (
    <div className={isFlipped ? "selected" : ""} onClick={onFlip}>
      {isFlipped ? card.answer : card.question}
    </div>
  );
};
