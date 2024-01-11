import axios from "axios";
import { useQueries } from "@tanstack/react-query";

type Status = {
  success: boolean;
  message: string;
  hostname: string;
  time: Date;
};
const ENDPOINTS = [
  "accounts",
  "assets",
  "customers",
  "datapoints",
  "devices",
  "documents",
  "forms",
  "invites",
  "media",
  "messages",
  "namespaces",
  "orders",
  "patients",
  "relationships",
  "rules",
  "templates",
  "users",
  "workflows",
];

const getSampleStatus = async (endpoint: string) =>
  (
    await axios.get<Status>(
      `https://api.factoryfour.com/${endpoint}/health/status`
    )
  ).data;

const queries = ENDPOINTS.map((endpoint) => ({
  queryKey: [endpoint],
  queryFn: () => getSampleStatus(endpoint),
}));

export const App = () => {
  const statuses = useQueries({
    queries,
  });

  return (
    <div className="w-screen h-screen grid grid-cols-5">
      {statuses.map((status, index) => (
        <div key={index} className="w-full h-40">
          {status.isLoading
            ? "LOADING"
            : status.error
            ? "QUERY ERROR"
            : status.data?.success
            ? "SUCCESS"
            : "ERROR"}
        </div>
      ))}
    </div>
  );
};
