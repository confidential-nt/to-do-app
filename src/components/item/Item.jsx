import React, { useState } from "react";

export default function Item({ item, onDeleteItem, onChangeItemState }) {
  const [completed, setCompleted] = useState(item.completed);
  const handleDelete = () => {
    onDeleteItem(item);
  };

  const handleChange = () => {
    onChangeItemState(item);
    setCompleted((prev) => !prev);
  };

  return (
    <li className={completed ? "completed" : ""}>
      <input
        type="checkbox"
        id="completed"
        onChange={handleChange}
        checked={completed}
      />
      <label htmlFor="completed"></label>
      <h2>{item.content}</h2>
      <button type="button" onClick={handleDelete}>
        삭제
      </button>
    </li>
  );
}
