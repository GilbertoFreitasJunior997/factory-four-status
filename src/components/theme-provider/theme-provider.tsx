import { FC, PropsWithChildren, createContext, useState } from "react";
import { Theme, ThemeProviderValue } from "./types";

import { THEME_STORAGE_KEY } from "./consts";

const initialState: ThemeProviderValue = {
  theme: "light",
  toggleTheme: () => null,
};

const updateRootTheme = (newTheme: Theme) => {
  const root = window.document.documentElement;
  root.classList.remove("light", "dark");

  root.classList.add(newTheme);
};

const getStorageTheme = () => {
  let theme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;

  if (!theme) {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  updateRootTheme(theme);

  return theme;
};

export const ThemeProviderContext =
  createContext<ThemeProviderValue>(initialState);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(() => getStorageTheme());

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    updateRootTheme(newTheme);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);

    setTheme(newTheme);
  };

  const value: ThemeProviderValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
};
