import { format } from "date-fns";

export const getHours = (time?: number | Date) =>
  time ? format(new Date(time).toUTCString(), "H:mm:ss") : "";
