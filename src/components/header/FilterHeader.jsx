import React from "react";

export const Filter = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

export default function FilterHeader({ onFilter }) {
  const handleAll = () => {
    onFilter(Filter.ALL);
  };
  const handleActive = () => {
    onFilter(Filter.ACTIVE);
  };
  const handleCompleted = () => {
    onFilter(Filter.COMPLETED);
  };

  return (
    <header>
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
