import { Friend } from "./Friend";
export const FriendList = ({ friends, currFriend, setCurrFriend }) => {
  return (
    <div className="list">
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          focus={currFriend === friend.id ? true : false}
          onFocus={setCurrFriend}
        />
      ))}
    </div>
  );
};
