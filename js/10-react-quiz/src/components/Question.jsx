import Options from "./Options";

export default function Question({ question, onSelect, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} onSelect={onSelect} answer={answer} />
    </div>
  );
}
