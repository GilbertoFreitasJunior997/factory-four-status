import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { App } from "./app";
import React from "react";
import ReactDOM from "react-dom/client";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
