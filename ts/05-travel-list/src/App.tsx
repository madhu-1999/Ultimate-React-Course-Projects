import { Logo } from "./Logo";
import { Form, type ItemType } from "./Form";
import { PackingList } from "./PacklingList";
import { Stats } from "./Stats";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState<ItemType[]>([]);

  const addItem = (item: ItemType) => {
    setItems((items) => [...items, item]);
  };

  const deleteItem = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const toggleItem = (id: number) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClear = () => {
    setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form addItem={addItem} />

      <PackingList
        items={items}
        deleteItem={deleteItem}
        toggleItem={toggleItem}
        handleClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
