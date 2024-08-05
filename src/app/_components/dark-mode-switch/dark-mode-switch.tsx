"use client"
import React, { useState, useEffect } from "react";
import { Switch } from "@nextui-org/switch";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export default function App() {
  // State to manage theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Update theme when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isDarkMode]);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Switch
        checked={isDarkMode}
        onChange={toggleTheme}
        size="lg"
        color="success"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
      >
        Dark mode
      </Switch>
    </div>
  );
}
