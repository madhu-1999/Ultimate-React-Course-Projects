import { useState } from "react";

export const Form = ({ addItem }) => {
  const itemCounts = [...Array(20).keys()].map((i) => i + 1);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    addItem(newItem);
    setDescription("");
    setQuantity(1);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleQuantityChange = (e) => {
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
