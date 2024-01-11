import { Status } from "../../api";
import { UseQueryResult } from "@tanstack/react-query";

export type CardProps = {
  data: UseQueryResult<Status, Error>;
};
