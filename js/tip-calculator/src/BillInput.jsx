export const BillInput = ({ billAmt, setBillAmt }) => {
  return (
    <div className="inline-container">
      <p>How much was the bill?</p>
      <input
        type="text"
        placeholder="0"
        value={billAmt}
        onChange={(e) => setBillAmt(Number(e.target.value))}
      ></input>
    </div>
  );
};
