import { useState } from "react";
import { Button } from "./Button";

export const SplitBillForm = ({ currFriend, friends }) => {
  let friendName;
  const [billAmt, setBillAmt] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const [friendExpense, setFriendExpense] = useState(0);
  const [paidBy, setPaidBy] = useState("me");

  if (currFriend != null) {
    friendName = friends.find((friend) => friend.id === currFriend).friendName;
  }
  const splitBill = (e) => {
    e.preventDefault();

    setBillAmt(0);
    setMyExpense(0);
    setFriendExpense(0);
    setPaidBy("me");
  };
  return (
    <div>
      {currFriend != null && (
        <form className="split-form">
          <h2>SPLIT A BILL WITH {friendName.toUpperCase()}</h2>
          <div className="inline-group">
            <label>💰 Bill Value</label>
            <input
              type="number"
              value={billAmt}
              onChange={(e) => setBillAmt(Number(e.target.value))}
            ></input>
          </div>
          <div className="inline-group">
            <label>🧍‍♀️ Your expense</label>
            <input
              type="number"
              value={myExpense}
              onChange={(e) => setMyExpense(Number(e.target.value))}
            ></input>
          </div>
          <div className="inline-group">
            <label>👭 {friendName}'s Expense</label>
            <input
              type="number"
              value={friendExpense}
              onChange={(e) => setFriendExpense(Number(e.target.value))}
            ></input>
          </div>
          <div className="inline-group">
            <label>😜 Who is paying the bill?</label>
            <select
              className="bg-white"
              value={paidBy}
              onChange={(e) => setPaidBy(e.target.value)}
            >
              <option value="me">You</option>
              <option value={friendName}>{friendName}</option>
            </select>
          </div>
          <Button type="submit" onClick={splitBill} isHidden={false}>
            Split Bill
          </Button>
        </form>
      )}
    </div>
  );
};
