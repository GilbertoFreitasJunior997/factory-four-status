import { API_COMPLEMENT_URL, API_URL, REFRESH_DELAY } from "./config";
import { useCallback, useEffect, useState } from "react";

import { Status } from "./types";
import axios from "axios";

const getStatus = async (service: string): Promise<Status> =>
  (await axios.get<Status>(`${API_URL}${service}${API_COMPLEMENT_URL}`)).data;

export const useGetStatus = (service: string) => {
  const [data, setData] = useState<Status>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetStatus = useCallback(async () => {
    try {
      const data = await getStatus(service);
      setData(data);
      setIsError(false);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [service]);

  useEffect(() => {
    handleGetStatus();
    const intervalId = setInterval(handleGetStatus, REFRESH_DELAY * 1000);

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
