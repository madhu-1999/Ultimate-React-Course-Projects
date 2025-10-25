import { useState, type ChangeEvent, type FormEvent } from "react";

type Props = {
  addItem: (item: ItemType) => void;
};

export interface ItemType {
  description: string;
  quantity: number;
  packed: boolean;
  id: number;
}

export const Form = ({ addItem }: Props) => {
  const itemCounts = [...Array(20).keys()].map((i) => i + 1);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!description) return;
    const newItem: ItemType = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);
    addItem(newItem);
    setDescription("");
    setQuantity(1);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleQuantityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <div className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your 😍 trip?</h3>
      <form>
        <select value={quantity} onChange={handleQuantityChange}>
          {itemCounts.map((count) => (
            <option value={count} key={count}>
              {count}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={handleDescriptionChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
