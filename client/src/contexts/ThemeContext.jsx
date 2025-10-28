import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = () => {
  const state = {
    light: { background: "#fff", color: "#000" },
    dark: { background: "#000", color: "#fff" },
  };
};

export default ThemeProvider;
