import { MdDarkMode, MdLightMode } from "react-icons/md";

import { FaGitlab } from "react-icons/fa6";
import { useTheme } from "../components/theme-provider";

export const Topbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full flex justify-between items-center text-2xl font-bold mb-5">
      <div>Status Dashboard</div>
      <div className="flex gap-4 items-center">
        <a
          href="https://gitlab.com/BetoFreitas/factory-four-status"
          target="_blank"
          title="Open in GitLab"
          className="cursor-alias"
        >
          <FaGitlab size={"1.3rem"} />
        </a>
        <button onClick={toggleTheme} title="Change theme">
          {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </div>
    </header>
  );
};
