"use client";
import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const sections = [
    "Opening",
    "Greeting",
    "Quote",
    "BrideGroom",
    "Ceremony",
    "Reception",
    "Location",
    "OurJourney",
    "Filter",
    "Gift",
    "Doa",
    "Wishes",
    "Closing",
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Deteksi perangkat (mobile / desktop)
  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 768);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <AppContext.Provider
      value={{ currentPage, setCurrentPage, sections, isMobile }}
    >
      {children}
    </AppContext.Provider>
  );
};
