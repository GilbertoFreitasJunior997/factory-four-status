import { BADGE_ERROR_TEXT, BADGE_SUCCESS_TEXT } from "./consts";

import { BadgeProps } from "./types";
import { FC } from "react";

export const Badge: FC<BadgeProps> = ({ isLoading = false, isSuccess = false }) => {
  if (isLoading) {
    return <div className="w-20 h-5 animate-pulse bg-gray-300 rounded-full" />;
  }

  const message = isSuccess ? BADGE_SUCCESS_TEXT : BADGE_ERROR_TEXT;

  return (
    <div
      id="test"
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
