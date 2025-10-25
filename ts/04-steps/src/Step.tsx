import { useState } from "react";
import { Button } from "./Button";
import { StepMessage } from "./StepMessage";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export const Step = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  };

  const handleNext = () => {
    if (step < messages.length) {
      setStep((step) => step + 1);
    }
  };
  return (
    <div>
      <button className="close" onClick={() => setIsOpen((open) => !open)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {messages.map((message, index) => (
              <div key={index} className={step >= index + 1 ? "active" : ""}>
                {index + 1}
              </div>
            ))}
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" color="#fff" onClick={handlePrevious}>
              <span>👈 Previous</span>
            </Button>
            <Button bgColor="#7950f2" color="#fff" onClick={handleNext}>
              <span>Next 👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
