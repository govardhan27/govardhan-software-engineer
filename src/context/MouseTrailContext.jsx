import React, { createContext, useState } from "react";

export const MouseTrailContext = createContext();

export function MouseTrailProvider({ children }) {
  const [isTrailPaused, setIsTrailPaused] = useState(false);

  return (
    <MouseTrailContext.Provider value={{ isTrailPaused, setIsTrailPaused }}>
      {children}
    </MouseTrailContext.Provider>
  );
}
