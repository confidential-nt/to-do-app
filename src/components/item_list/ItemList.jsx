import React, { useState } from "react";
import Item from "../item/Item";

export default function ItemList({ items, onDeleteItem }) {
  return (
    <ul>
      {items.map((i) => (
        <Item key={i.id} item={i} onDeleteItem={onDeleteItem} />
      ))}
    </ul>
  );
}
