import React, { useContext } from "react";
import { NightModeContext } from "../../context/NightMode";

export const Filter = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

export default function FilterHeader({ onFilter }) {
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
    <header>
      <button type="button" onClick={handleMode}>
        {nightMode ? "낮" : "밤"}
      </button>
      <button type="button" onClick={handleAll}>
        All
      </button>
      <button type="button" onClick={handleActive}>
        Active
      </button>
      <button type="button" onClick={handleCompleted}>
        Completed
      </button>
    </header>
  );
}
