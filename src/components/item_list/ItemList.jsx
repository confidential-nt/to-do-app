import React, { useState } from "react";
import Item from "../item/Item";

export default function ItemList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <Item key={i.id} title={i.item} />
      ))}
    </ul>
  );
}
