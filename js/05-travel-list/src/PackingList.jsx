import { useState } from "react";
import { Item } from "./Item";

export const PackingList = ({ items, deleteItem, toggleItem, handleClear }) => {
  const [order, setOrder] = useState("input");
  let sortedItems;
  if (order === "input") sortedItems = items;
  if (order === "desc")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (order === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  const handleSelect = (e) => {
    setOrder(e.target.value);
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
