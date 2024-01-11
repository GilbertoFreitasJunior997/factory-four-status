import { API_COMPLEMENT_URL, API_URL } from "./consts";

export const getEndpointUrl = (endpoint: string) =>
  `${API_URL}${endpoint}${API_COMPLEMENT_URL}`;
