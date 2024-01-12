import { Badge } from "../badge";
import { FC } from "react";
import { OldStatusLineProps } from "./types";
import { getHours } from "../../utils/get-hours";

export const OldStatusLine: FC<OldStatusLineProps> = ({ status }) => {
  const isSuccess = "hostname" in status;
  const hours = getHours(status.time);

  return (
    <div className="flex gap-2 items-center">
      <Badge isSuccess={isSuccess} />
      <span>
        {isSuccess && status.hostname} - {hours}
      </span>
    </div>
  );
};
