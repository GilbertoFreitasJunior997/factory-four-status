import { Layout } from "./layout";
import { ThemeProvider } from "./components/theme-provider";

export const App = () => (
  <ThemeProvider>
    <Layout />
  </ThemeProvider>
);
