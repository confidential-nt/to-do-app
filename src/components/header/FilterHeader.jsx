import React, { useContext } from "react";
import { NightModeContext } from "../../context/NightMode";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import styles from "./FilterHeader.module.css";

export const Filter = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

export default function FilterHeader({ onFilter, filter }) {
  const { nightMode, toggleNightMode } = useContext(NightModeContext);

  const handleAll = () => {
    onFilter(Filter.ALL);
  };
  const handleActive = () => {
    onFilter(Filter.ACTIVE);
  };
  const handleCompleted = () => {
    onFilter(Filter.COMPLETED);
  };
  const handleMode = () => {
    toggleNightMode();
  };

  return (
    <header className={`${!nightMode ? styles.day : ""} ${styles.header}`}>
      <div className={styles.headerLeft}>
        <button type="button" onClick={handleMode}>
          {nightMode ? (
            <BsFillSunFill className={styles.mode} />
          ) : (
            <BsMoonFill className={`${styles.mode} ${styles.night}`} />
          )}
        </button>
      </div>
      <div className={styles.headerRight}>
        <button
          type="button"
          onClick={handleAll}
          className={filter === Filter.ALL ? styles.filterOn : ""}
        >
          All
        </button>
        <button
          type="button"
          onClick={handleActive}
          className={filter === Filter.ACTIVE ? styles.filterOn : ""}
        >
          Active
        </button>
        <button
          type="button"
          onClick={handleCompleted}
          className={filter === Filter.COMPLETED ? styles.filterOn : ""}
        >
          Completed
        </button>
      </div>
    </header>
  );
}
