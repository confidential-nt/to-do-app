import React, { memo, useContext, useState } from "react";
import styles from "./itemForm.module.css";
import { NightModeContext } from "../../context/NightMode";

const ItemForm = memo(({ onAddItem }) => {
  const { nightMode } = useContext(NightModeContext);
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
    <form
      className={`${!nightMode ? styles.day : ""} ${styles.form}`}
      onSubmit={handleSumbit}
    >
      <input
        type="text"
        placeholder="Add Todo"
        value={item}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
});

export default ItemForm;
