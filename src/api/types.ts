import { SERVICES } from "./services";

export type Status = {
  success: boolean;
  message: string;
  hostname: string;
  time: Date;
};

export type Service = (typeof SERVICES)[number];
