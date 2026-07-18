"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const AestheticContext = createContext();

export const AestheticProvider = ({ children }) => {
  const [aesthetic, setAesthetic] = useState("broadsheet");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("aesthetic") || "broadsheet";
    setAesthetic(saved);
    
    // Apply class to documentElement
    document.documentElement.classList.remove("aesthetic-hallmark", "aesthetic-original", "aesthetic-broadsheet");
    document.documentElement.classList.add(`aesthetic-${saved}`);
    setMounted(true);
  }, []);

  const setAestheticMode = (mode) => {
    document.documentElement.classList.remove("aesthetic-hallmark", "aesthetic-original", "aesthetic-broadsheet");
    document.documentElement.classList.add(`aesthetic-${mode}`);
    setAesthetic(mode);
    localStorage.setItem("aesthetic", mode);
  };

  return (
    <AestheticContext.Provider value={{ aesthetic, setAesthetic: setAestheticMode, mounted }}>
      {children}
    </AestheticContext.Provider>
  );
};

export const useAesthetic = () => {
  const context = useContext(AestheticContext);
  if (!context) {
    return { aesthetic: "broadsheet", setAesthetic: () => {}, mounted: false };
  }
  return context;
};
