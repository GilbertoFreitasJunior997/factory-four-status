import { CardProps } from "./types";
import { FC } from "react";
import { useGetStatus } from "../../api/use-get-status";

export const Card: FC<CardProps> = ({ service }) => {
  const { data } = useGetStatus(service);

  return (
    <div className="w-full bg-gray-50">
      {service} <p> STATUS: {`${data?.success}`}</p>
    </div>
  );
};
