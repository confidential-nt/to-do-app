import React, { useState } from "react";
import Item from "../item/Item";
import { Filter } from "../header/FilterHeader";

export default function ItemList({
  items,
  onDeleteItem,
  onChangeItemState,
  filter,
}) {
  return (
    <ul>
      {filter === Filter.ACTIVE
        ? items
            .filter((i) => !i.completed)
            .map((i) => (
              <Item
                key={i.id}
                item={i}
                onDeleteItem={onDeleteItem}
                onChangeItemState={onChangeItemState}
              />
            ))
        : filter === Filter.COMPLETED
        ? items
            .filter((i) => i.completed)
            .map((i) => (
              <Item
                key={i.id}
                item={i}
                onDeleteItem={onDeleteItem}
                onChangeItemState={onChangeItemState}
              />
            ))
        : items.map((i) => (
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
