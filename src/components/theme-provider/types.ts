export type Theme = "dark" | "light";

export type ThemeProviderValue = {
  theme: Theme;
  toggleTheme(): void;
};
