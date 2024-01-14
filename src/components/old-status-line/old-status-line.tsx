import { Badge } from "../badge";
import { FC } from "react";
import { OLD_STATUS_LINE_TESTID } from "./consts";
import { OldStatusLineProps } from "./types";
import { getHours } from "../../utils/get-hours";

export const OldStatusLine: FC<OldStatusLineProps> = ({ status }) => {
  const isSuccess = "hostname" in status;
  const hours = getHours(status.time);

  return (
    <div
      className="flex gap-2 items-center"
      data-testid={OLD_STATUS_LINE_TESTID}
    >
      <Badge isSuccess={isSuccess} />
      <span>
        {isSuccess && status.hostname} - {hours}
      </span>
    </div>
  );
};
