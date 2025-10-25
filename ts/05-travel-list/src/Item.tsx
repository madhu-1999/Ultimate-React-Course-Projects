import type { ItemType } from "./Form";

type Props = {
  item: ItemType;
  deleteItem: (id: number) => void;
  toggleItem: (id: number) => void;
};
export const Item = ({ item, deleteItem, toggleItem }: Props) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => toggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
};
