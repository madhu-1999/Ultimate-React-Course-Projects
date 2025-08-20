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
        <p className="text-xs">You and {friend.friendName} are even</p>
      </div>
      <Button isHidden={false} onClick={showSplitBill} type="button">
        {focus ? "Close" : "Select"}
      </Button>
    </div>
  );
};
