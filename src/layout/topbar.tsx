import { MdDarkMode, MdLightMode } from "react-icons/md";

import { useTheme } from "../components/theme-provider";

export const Topbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full flex justify-between items-center text-2xl font-bold mb-5">
      <div>Status Dashboard</div>
      <button onClick={toggleTheme}>
        {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </header>
  );
};
