import { ThemeProviderContext } from "./theme-provider";
import { useContext } from "react";

export const useTheme = () => useContext(ThemeProviderContext);
