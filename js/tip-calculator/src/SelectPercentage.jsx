export const SelectPercentage = ({ text, tipPercent, setTipPercent }) => {
  return (
    <div className="inline-container">
      <p>{text}</p>
      <select
        value={tipPercent}
        onChange={(e) => setTipPercent(Number(e.target.value))}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Amazing!(20%)</option>
      </select>
    </div>
  );
};
