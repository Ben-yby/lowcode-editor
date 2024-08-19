import AdaptorLink from "@/components/AdaptorLink";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/dist/styles.css";
import { ThemeConfig } from "@shopify/polaris/dist/types/latest/src/utilities/theme/types";
import en from "@shopify/polaris/locales/en.json";
import React from "react";
import LowcodeEditor from "./editor";

const theme: ThemeConfig = {
  colors: {
    primary: "#5c6ac4"
  }
};

const App = () => {
  return (
    <AppProvider linkComponent={AdaptorLink} theme={theme} i18n={en}>
      <LowcodeEditor />
    </AppProvider>
  );
};

export default App;
