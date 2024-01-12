import { FC, useCallback, useState } from "react";

import { Badge } from "../badge";
import { CardProps } from "./types";
import { MdHistory } from "react-icons/md";
import { ModalStatuses } from "../modal-statuses";
import { OldStatus } from "../../api/types";
import { getHours } from "../../utils/get-hours";
import { useGetStatus } from "../../api/use-get-status";

export const Card: FC<CardProps> = ({ service }) => {
  const [showingStatuses, setShowingStatuses] = useState(false);

  const [statuses, setStatuses] = useState<OldStatus[]>([]);
  const onUpdate = useCallback((newStatus: OldStatus) => {
    setStatuses((old) => [...old, newStatus]);
  }, []);

  const { data, isError, isLoading } = useGetStatus({
    service,
    onUpdate,
  });

  const isSuccess = !isError && !!data?.success;
  const hours = getHours(data?.time);

  return (
    <>
      <div
        onClick={() => setShowingStatuses(true)}
        className="w-full min-h-[12.375rem] transition-colors bg-gray-50 hover:bg-gray-100 dark:bg-zinc-950 dark:hover:bg-zinc-800 border dark:border-zinc-100/50 rounded-md px-6 shadow-sm group cursor-pointer"
      >
        <div className="py-6">
          <div className="w-full flex items-center justify-between">
            <h2 className="text-xl font-semibold uppercase pb-1">{service} </h2>
            <MdHistory
              size={"1.3rem"}
              className="opacity-50 group-hover:opacity-100 transition-opacity"
            />
          </div>
          <Badge isLoading={isLoading} isSuccess={!!isSuccess} />
        </div>
        <div
          className={`py-3 transition-opacity ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        >
          <p>{isError ? "OUTAGE" : data?.hostname}</p>
          <p>{isError ? "403 Forbidden" : hours}</p>
        </div>
      </div>

      {showingStatuses && (
        <ModalStatuses
          service={service}
          statuses={statuses}
          onHide={() => setShowingStatuses(false)}
        />
      )}
    </>
  );
};
