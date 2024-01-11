import { CardProps } from "./types";
import { FC } from "react";

export const Card: FC<CardProps> = ({ data }) => {
  const service = data.data?.hostname.split("-")[0];

  return <div> {service} </div>;
};
