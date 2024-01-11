import { Card } from "../card";
import { SERVICES } from "../../api/services";

export const CardList = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {SERVICES.map((service) => (
        <Card service={service} key={service} />
      ))}
    </div>
  );
};
