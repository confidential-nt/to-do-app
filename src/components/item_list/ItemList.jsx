import { v4 as uuidv4 } from "uuid";
import React, { useContext } from "react";
import Item from "../item/Item";
import { Filter } from "../header/FilterHeader";
import styles from "./itemList.module.css";
import { NightModeContext } from "../../context/NightMode";
import { Droppable } from "react-beautiful-dnd";

export default function ItemList({
  items,
  onDeleteItem,
  onChangeItemState,
  filter,
}) {
  const { nightMode } = useContext(NightModeContext);

  return (
    <Droppable droppableId={uuidv4()}>
      {(provided, snapshot) => (
        <ul
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`${!nightMode ? styles.day : ""} ${styles.list}`}
        >
          {filter === Filter.ACTIVE
            ? items
                .filter((i) => !i.completed)
                .map((i, index) => (
                  <Item
                    key={i.id}
                    item={i}
                    onDeleteItem={onDeleteItem}
                    onChangeItemState={onChangeItemState}
                    index={index}
                  />
                ))
            : filter === Filter.COMPLETED
            ? items
                .filter((i) => i.completed)
                .map((i, index) => (
                  <Item
                    key={i.id}
                    item={i}
                    onDeleteItem={onDeleteItem}
                    onChangeItemState={onChangeItemState}
                    index={index}
                  />
                ))
            : items.map((i, index) => (
                <Item
                  key={i.id}
                  item={i}
                  onDeleteItem={onDeleteItem}
                  onChangeItemState={onChangeItemState}
                  index={index}
                />
              ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}
