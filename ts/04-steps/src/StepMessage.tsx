type Props = {
  step: number;
  children: string;
};
export const StepMessage = ({ step, children }: Props) => {
  return (
    <p className="message">
      Step {step}: {children}
    </p>
  );
};
