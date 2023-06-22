import React, { useContext, useState } from "react";
import { NightModeContext } from "../../context/NightMode";
import styles from "./Item.module.css";
import { IconContext } from "react-icons";
import { BsFillTrashFill, BsCheck } from "react-icons/bs";

export default function Item({ item, onDeleteItem, onChangeItemState }) {
  const { nightMode } = useContext(NightModeContext);
  const [completed, setCompleted] = useState(item.completed);
  const handleDelete = () => {
    onDeleteItem(item);
  };

  const handleChange = () => {
    onChangeItemState(item);
    setCompleted((prev) => !prev);
  };

  return (
    <li
      className={`${completed ? styles.completed : ""} ${
        !nightMode ? styles.day : ""
      } ${styles.item}`}
    >
      <input
        type="checkbox"
        id={`completed-check-${item.id}`}
        onChange={handleChange}
        checked={completed}
      />
      <div className={styles.itemLeft}>
        <label htmlFor={`completed-check-${item.id}`}>
          <IconContext.Provider value={{ size: "2rem" }}>
            <BsCheck className={styles.check} />
          </IconContext.Provider>
        </label>
        <h2>{item.content}</h2>
      </div>
      <button type="button" onClick={handleDelete}>
        <BsFillTrashFill className={styles.deleteBtn} />
      </button>
    </li>
  );
}
