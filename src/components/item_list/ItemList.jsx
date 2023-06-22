import React, { useContext, useState } from "react";
import Item from "../item/Item";
import { Filter } from "../header/FilterHeader";
import styles from "./itemList.module.css";
import { NightModeContext } from "../../context/NightMode";

export default function ItemList({
  items,
  onDeleteItem,
  onChangeItemState,
  filter,
}) {
  const { nightMode } = useContext(NightModeContext);

  return (
    <ul className={`${!nightMode ? styles.day : ""} ${styles.list}`}>
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
