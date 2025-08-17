import { useState } from "react";
import "./index.css";

function App() {
  const [step, setstep] = useState(1);
  const [count, setcount] = useState(0);
  const [hasChanged, sethasChanged] = useState(false);
  const date = new Date();
  date.setDate(date.getDate() + count);

  const incrementCount = () => {
    setcount((count) => {
      const newCount = count + step;
      sethasChanged(!(newCount === 0 && step === 1));
      return newCount;
    });
  };

  const decrementCount = () => {
    setcount((count) => {
      const newCount = count - step;
      sethasChanged(!(newCount === 0 && step === 1));
      return newCount;
    });
  };

  const handleReset = () => {
    setcount(0);
    sethasChanged(false);
    setstep(1);
  };

  return (
    <div className="App">
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setstep(Number(e.target.value))}
        ></input>
        <span>{step}</span>
      </div>
      <div>
        <button onClick={decrementCount}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setcount(Number(e.target.value))}
        />
        <button onClick={incrementCount}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      <button
        className={!hasChanged ? "hidden-button" : ""}
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
