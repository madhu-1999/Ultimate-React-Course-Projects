import { useState } from "react";
import { FriendForm } from "./FriendForm";
import { FriendList } from "./FriendList";
import { SplitBillForm } from "./SplitBillForm";
import "./index.css";
export default function App() {
  const [friends, setFriends] = useState([]);
  const [currFriend, setCurrFriend] = useState(null);

  const addFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
  };

  return (
    <div className="main-container">
      <div className="friend-container">
        <FriendList
          friends={friends}
          currFriend={currFriend}
          setCurrFriend={setCurrFriend}
        />
        <FriendForm addToFriends={addFriend} />
      </div>
      <SplitBillForm currFriend={currFriend} friends={friends} />
    </div>
  );
}
