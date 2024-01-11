import { CardList } from "../components/card-list/card-list";
import { Topbar } from "./topbar";

export const Layout = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden px-10 py-5 bg-white dark:bg-zinc-950 text-gray-900 dark:text-gray-200">
      <Topbar />
      <CardList />
    </div>
  );
};
