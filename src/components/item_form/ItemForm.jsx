import React, { useState } from "react";

export default function ItemForm({ onAddItem }) {
  const [item, setItem] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    onAddItem(item);
    setItem("");
  };

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  return (
    <form onSubmit={handleSumbit}>
      <input
        type="text"
        placeholder="Add Todo"
        value={item}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}
