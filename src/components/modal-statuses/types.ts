import { OldStatus, Service } from "../../api/types";

export type ModalStatusesProps = {
  service: Service;
  onHide(): void;
  statuses: OldStatus[];
};
