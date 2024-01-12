import { API_COMPLEMENT_URL, API_URL } from "./config";
import { Status, UseGetStatusParams } from "./types";
import { useCallback, useEffect, useState } from "react";

import { STATUS_REFRESH_DELAY_SECONDS } from "./status-refresh-delay";
import axios from "axios";

const getStatus = async (service: string): Promise<Status> =>
  (await axios.get<Status>(`${API_URL}${service}${API_COMPLEMENT_URL}`)).data;

export const useGetStatus = ({ service, onUpdate }: UseGetStatusParams) => {
  const [data, setData] = useState<Status>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetStatus = useCallback(async () => {
    try {
      const data = await getStatus(service);
      setData(data);
      setIsError(false);
      onUpdate(data);
    } catch (error) {
      setIsError(true);

      if (error instanceof Error) {
        onUpdate({
          error,
          time: new Date(),
        });
      }
    } finally {
      setIsLoading(false);
    }
  }, [onUpdate, service]);

  useEffect(() => {
    handleGetStatus();
    const intervalId = setInterval(
      handleGetStatus,
      STATUS_REFRESH_DELAY_SECONDS * 1000
    );

    return () => {
      clearInterval(intervalId);
    };
  }, [handleGetStatus]);

  return {
    data,
    isError,
    isLoading,
  };
};
