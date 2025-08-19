import { BillInput } from "./BillInput";
import { SelectPercentage } from "./SelectPercentage";
import { Output } from "./Output";
import { Reset } from "./Reset";
import { useState } from "react";

export default function App() {
  const [billAmt, setBillAmt] = useState(0);
  const [myTipPercent, setMyTipPercent] = useState(0);
  const [friendTipPercent, setFriendTipPercent] = useState(0);

  const handleReset = () => {
    setBillAmt(0);
    setMyTipPercent(0);
    setFriendTipPercent(0);
  };
  return (
    <div className="flex-container">
      <BillInput billAmt={billAmt} setBillAmt={setBillAmt} />
      <SelectPercentage
        text="How did you like the service?"
        tipPercent={myTipPercent}
        setTipPercent={setMyTipPercent}
      />
      <SelectPercentage
        text="How did your friend like the service?"
        tipPercent={friendTipPercent}
        setTipPercent={setFriendTipPercent}
      />
      {billAmt > 0 && (
        <>
          <Output
            billAmt={billAmt}
            myTipPercent={myTipPercent}
            friendTipPercent={friendTipPercent}
          />
          <Reset handleReset={handleReset} />
        </>
      )}
    </div>
  );
}
