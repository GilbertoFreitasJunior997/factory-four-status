import { ENDPOINTS } from "./consts";
import { Status } from "./status";
import axios from "axios";
import { getEndpointUrl } from "./utils";
import { useQueries } from "@tanstack/react-query";

const getStatuses = async (endpoint: string) =>
  (await axios.get<Status>(getEndpointUrl(endpoint))).data;

const queries = ENDPOINTS.map((endpoint) => ({
  queryKey: [endpoint],
  queryFn: () => getStatuses(endpoint),
}));

export const useGetStatuses = () => {
  return useQueries({
    queries,
  });
};
