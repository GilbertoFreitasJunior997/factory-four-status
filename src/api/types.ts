import { SERVICES } from "./services";

export type Status = {
  success: boolean;
  message: string;
  hostname: string;
  time: number;
};

export type Service = (typeof SERVICES)[number];
