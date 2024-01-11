import { API_COMPLEMENT_URL, API_URL } from "./config";

import { Status } from "./types";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getStatus = async (service: string): Promise<Status> =>
  (await axios.get<Status>(`${API_URL}${service}${API_COMPLEMENT_URL}`)).data;

export const useGetStatus = (service: string) => {
  return useQuery({
    queryKey: [service],
    queryFn: () => getStatus(service),
  });
};
