import React, { useState } from "react";
import Item from "../item/Item";

export default function ItemList({ items, onDeleteItem, onChangeItemState }) {
  return (
    <ul>
      {items.map((i) => (
        <Item
          key={i.id}
          item={i}
          onDeleteItem={onDeleteItem}
          onChangeItemState={onChangeItemState}
        />
      ))}
    </ul>
  );
}
