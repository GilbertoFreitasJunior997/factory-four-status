import { SERVICES } from "./services";

export type Status = {
  success: boolean;
  message: string;
  hostname: string;
  time: number;
};

export type Service = (typeof SERVICES)[number];

export type StatusError = {
  error: Error;
  time: Date;
};

export type OldStatus = Status | StatusError;

export type UseGetStatusParams = {
  service: Service;
  onUpdate(newStatus: OldStatus): void;
};
