import React, { createContext, useEffect, useState } from "react";

export const NightModeContext = createContext();

const localStorage_key = "nightMode";

export default function NightModeProvider({ children }) {
  const [nightMode, setNightMode] = useState(true);
  const toggleNightMode = () =>
    setNightMode((prev) => {
      localStorage.setItem(localStorage_key, JSON.stringify(!prev));
      return !prev;
    });

  useEffect(() => {
    const mode = localStorage.getItem(localStorage_key);
    if (mode) {
      setNightMode(JSON.parse(mode));
    }
  }, []);

  return (
    <NightModeContext.Provider value={{ nightMode, toggleNightMode }}>
      {children}
    </NightModeContext.Provider>
  );
}
