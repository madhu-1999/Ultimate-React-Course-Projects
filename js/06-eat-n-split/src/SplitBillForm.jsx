import { useState } from "react";
import { Button } from "./Button";

export const SplitBillForm = ({ currFriend, friends, setOwedByMe }) => {
  let friend;
  const [billAmt, setBillAmt] = useState(0);
  const [myExpense, setMyExpense] = useState(0);
  const [friendExpense, setFriendExpense] = useState(0);
  const [paidBy, setPaidBy] = useState("me");

  if (currFriend != null) {
    friend = friends.find((friend) => friend.id === currFriend);
  }
  const splitBill = (e) => {
    e.preventDefault();

    let newOwed = friend.owedByMe;
    if (paidBy === "me") {
      newOwed = newOwed + -(billAmt - myExpense); // negate since I am owed money
    } else {
      newOwed = newOwed + myExpense; // add since I owe money
    }
    setOwedByMe(friend.id, "owedByMe", newOwed);
    setBillAmt(0);
    setMyExpense(0);
    setFriendExpense(0);
    setPaidBy("me");
  };
  return (
    <div>
      {currFriend != null && (
        <form className="split-form">
          <h2>SPLIT A BILL WITH {friend.friendName.toUpperCase()}</h2>
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
            <label>👭 {friend.friendName}'s Expense</label>
            <input
              type="number"
              value={friendExpense}
              onChange={(e) => setFriendExpense(Number(e.target.value))}
            ></input>
          </div>
          <div className="inline-group">
            <label>😜 Who is paying the bill?</label>
            <select value={paidBy} onChange={(e) => setPaidBy(e.target.value)}>
              <option value="me">You</option>
              <option value={friend.friendName}>{friend.friendName}</option>
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
