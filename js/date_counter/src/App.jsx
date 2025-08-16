import { useState } from "react";
import "./index.css";

function App() {
  const [step, setstep] = useState(1);
  const [count, setcount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  const incrementCount = () => {
    setcount((count) => count + step);
  };

  const decrementCount = () => {
    setcount((count) => count - step);
  };

  const incrementStep = () => {
    setstep((step) => step + 1);
  };

  const decrementStep = () => {
    if (step > 1) {
      setstep((step) => step - 1);
    }
  };
  return (
    <div className="App">
      <div>
        <button onClick={decrementStep}>-</button>
        <span>Step:{step}</span>
        <button onClick={incrementStep}>+</button>
      </div>
      <div>
        <button onClick={decrementCount}>-</button>
        <span>Count:{count}</span>
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
    </div>
  );
}

export default App;
