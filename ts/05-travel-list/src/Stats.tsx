import type { ItemType } from "./Form";

type Props = {
  items: ItemType[];
};
export const Stats = ({ items }: Props) => {
  const itemCount = items.length;
  const packedCount = items.filter((item) => item.packed).length;
  return (
    <footer className="stats">
      👜 You have {itemCount} items on your list, and you have already packed{" "}
      {packedCount} (
      {itemCount <= 0 ? 0 : ((packedCount / itemCount) * 100).toFixed(2)}%)
    </footer>
  );
};
