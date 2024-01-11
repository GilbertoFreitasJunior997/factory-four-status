import { CardList } from "../components/card-list/card-list";
import { Topbar } from "./topbar";

export const Layout = () => {
  return (
    <div className="w-screen h-screen overflow-hidden px-10">
      <Topbar />
      <CardList />
    </div>
  );
};
