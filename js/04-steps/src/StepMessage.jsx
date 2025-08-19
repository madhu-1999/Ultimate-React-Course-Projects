export const StepMessage = ({ step, children }) => {
  return (
    <p className="message">
      Step: {step}: {children}
    </p>
  );
};
