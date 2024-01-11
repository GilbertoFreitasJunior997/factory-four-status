import { Badge } from "../badge";
import { CardProps } from "./types";
import { FC } from "react";
import { format } from "date-fns";
import { useGetStatus } from "../../api/use-get-status";

export const Card: FC<CardProps> = ({ service }) => {
  const { data, isError, isLoading } = useGetStatus(service);

  const isSuccess = !isError && !!data?.success;
  const hours = data?.time
    ? format(new Date(data.time).toUTCString(), "H:mm:ss")
    : "";

  return (
    <div className="w-full min-h-[10rem] bg-gray-50 dark:bg-zinc-950 border dark:border-zinc-100/50 rounded-md px-6 shadow-sm">
      <div className="py-6">
        <h2 className="text-xl font-semibold uppercase pb-1">{service}</h2>
        <Badge isLoading={isLoading} isSuccess={!!isSuccess} />
      </div>
      <div
        className={`py-3 transition-opacity ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <p>{isError ? "OUTAGE" : data?.hostname}</p>
        <p>{isError ? "Deprecated" : hours}</p>
      </div>
    </div>
  );
};
