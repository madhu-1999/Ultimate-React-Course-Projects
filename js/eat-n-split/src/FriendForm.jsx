import { useState } from "react";
import { Button } from "./Button";

export const FriendForm = ({ addToFriends }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [friendName, setFriendName] = useState("");
  const [img, setImg] = useState("");
  const addFriend = (e) => {
    const newFriend = {
      id: Date.now(),
      friendName,
      img: img || "https://i.pravatar.cc/150?img=68",
    };
    e.preventDefault();
    console.log(newFriend);
    if (friendName) addToFriends(newFriend);
    setFriendName("");
    setImg("");
  };
  const handleClick = () => {
    setIsHidden((isHidden) => !isHidden);
  };
  return (
    <>
      <Button type="button" isHidden={!isHidden} onClick={handleClick}>
        Add Friend
      </Button>
      {!isHidden && (
        <form className="add-form">
          <div className="inline-group">
            <label> 👭 Friend Name</label>
            <input
              type="text"
              value={friendName}
              onChange={(e) => setFriendName(e.target.value)}
            />
          </div>
          <div className="inline-group">
            <label> 🏞️ Image URL</label>
            <input
              type="text"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
          <Button isHidden={isHidden} onClick={addFriend} type="submit">
            Add
          </Button>
          <Button
            isHidden={isHidden}
            onClick={() => setIsHidden(true)}
            type="button"
          >
            Close
          </Button>
        </form>
      )}
    </>
  );
};
