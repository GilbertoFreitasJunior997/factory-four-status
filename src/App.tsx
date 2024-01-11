import { Layout } from "./layout";
import axios from "axios";

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

/**
const statuses = useQueries({
    queries,
  });
 */

export const App = () => {
  return <Layout />;
};
