import * as Dialog from "@radix-ui/react-dialog";

import { FC } from "react";
import { MdClose } from "react-icons/md";
import { ModalStatusesProps } from "./types";
import { OldStatusLine } from "../old-status-line";

export const ModalStatuses: FC<ModalStatusesProps> = ({
  service,
  onHide,
  statuses,
}) => {
  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) onHide();
  };

  return (
    <Dialog.Root onOpenChange={handleOpenChange} open={true}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50 dark:bg-zinc-950 border dark:border-zinc-100/50 rounded-md px-6 shadow-md focus:outline-none z-10 text-gray-900 dark:text-gray-200">
          <Dialog.Title className="font-semibold text-xl py-5 flex items-center justify-between">
            <h4>Previous Statuses for {service.toUpperCase()} API</h4>

            <Dialog.Close asChild>
              <button className="rounded-full hover:bg-black/10 dark:hover:bg-white/10 p-1 flex items-center justify-center">
                <MdClose />
              </button>
            </Dialog.Close>
          </Dialog.Title>
          <div className="overflow-y-auto h-[40vh] max-h-[40rem] w-[25rem] space-y-2">
            {statuses.reverse().map((status) => (
              <OldStatusLine
                key={status.time.toLocaleString()}
                status={status}
              />
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
