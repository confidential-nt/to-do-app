import React from "react";

export default function Item({ item, onDeleteItem }) {
  const handleDelete = () => {
    onDeleteItem(item);
  };

  return (
    <li>
      <h2>{item.content}</h2>
      <button type="button" onClick={handleDelete}>
        삭제
      </button>
    </li>
  );
}
