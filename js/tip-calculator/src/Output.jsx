export const Output = ({ billAmt, myTipPercent, friendTipPercent }) => {
  const avgTipPercent = (myTipPercent + friendTipPercent) / 2;
  const tipAmt = (avgTipPercent / 100) * billAmt;
  return (
    <h2>
      You pay ${billAmt + tipAmt} (${billAmt} + ${tipAmt} tip)
    </h2>
  );
};
