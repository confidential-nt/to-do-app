import React, { createContext, useState } from "react";

export const NightModeContext = createContext();

export default function NightModeProvider({ children }) {
  const [nightMode, setNightMode] = useState(false);
  const toggleNightMode = () => setNightMode((prev) => !prev);

  return (
    <NightModeContext.Provider value={{ nightMode, toggleNightMode }}>
      {children}
    </NightModeContext.Provider>
  );
}
