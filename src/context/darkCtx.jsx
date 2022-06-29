import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const DarkCtx = createContext({
  theme: "",
  toggleTheme() {},
});

const DarkCtxProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => {
    const updateTheme = isDarkTheme ? "light" : "dark";
    setTheme(updateTheme);
    window.localStorage.setItem("theme", updateTheme);
  };
  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window?.matchMedia(
      "(prefers-color-scheme:dark)"
    )?.matches;

    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const value = {
    theme,
    toggleTheme,
  };

  return <DarkCtx.Provider value={value}>{children}</DarkCtx.Provider>;
};

export default DarkCtxProvider;
