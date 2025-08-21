import { Button } from "./Button";

export const Friend = ({ friend, focus, onFocus }) => {
  const showSplitBill = () => {
    onFocus((focus) => (focus ? null : friend.id));
  };
  return (
    <div className={`inline-group ${focus ? "bg-orange-100" : ""}`}>
      <div>
        <img
          src={friend.img}
          className="rounded-full w-16 h-16 object-cover m-2"
        />
      </div>
      <div className="flex flex-col p-4 items-start grow">
        <h3 className="font-bold">{friend.friendName}</h3>
        {friend.owedByMe === 0 ? (
          <p className="text-xs">You and {friend.friendName} are even</p>
        ) : friend.owedByMe > 0 ? (
          <p className="text-xs text-red-400">
            You owe {friend.friendName} ${friend.owedByMe}
          </p>
        ) : (
          <p className="text-xs text-green-500">
            {friend.friendName} owes you ${-friend.owedByMe}
          </p>
        )}
      </div>
      <Button isHidden={false} onClick={showSplitBill} type="button">
        {focus ? "Close" : "Select"}
      </Button>
    </div>
  );
};
