import { useState, type ChangeEvent } from "react";
import type { ItemType } from "./Form";
import { Item } from "./Item";

type Props = {
  items: ItemType[];
  deleteItem: (id: number) => void;
  toggleItem: (id: number) => void;
  handleClear: () => void;
};

type SortByType = "input" | "desc" | "packed";

export const PackingList = ({
  items,
  deleteItem,
  toggleItem,
  handleClear,
}: Props) => {
  const [order, setOrder] = useState<SortByType>("input");
  const sortedItems: ItemType[] = (() => {
    if (order === "input") return items;
    if (order === "desc")
      return items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
    if (order === "packed")
      return items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    return items;
  })();

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value as SortByType);
  };

  return (
    <div className="list">
      <ul className="list">
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            toggleItem={toggleItem}
          ></Item>
        ))}
      </ul>
      <div className="actions">
        <select value={order} onChange={handleSelect}>
          <option value="input">Sort by input order</option>
          <option value="desc">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClear}>Clear list</button>
      </div>
    </div>
  );
};
