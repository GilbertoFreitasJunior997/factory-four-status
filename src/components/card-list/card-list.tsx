import { Card } from "../card";
import { useGetStatuses } from "../../api";

export const CardList = () => {
  const statuses = useGetStatuses();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {statuses.map((status, index) => (
        <Card data={status} key={index} />
      ))}
    </div>
  );
};
