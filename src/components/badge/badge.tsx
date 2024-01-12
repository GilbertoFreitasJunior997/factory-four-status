import { BadgeProps } from "./types";
import { FC } from "react";

export const Badge: FC<BadgeProps> = ({ isLoading = false, isSuccess }) => {
  if (isLoading) {
    return <div className="w-20 h-5 animate-pulse bg-gray-300 rounded-full" />;
  }

  const message = isSuccess ? "Healthy" : "ERROR";

  return (
    <div
      className={`px-4 text-sm font-semibold rounded-full w-min select-none ${
        isSuccess
          ? "bg-green-500 dark:bg-green-700"
          : "bg-red-500 dark:bg-red-700"
      }`}
    >
      {message}
    </div>
  );
};
