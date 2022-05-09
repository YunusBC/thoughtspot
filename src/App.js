import React from "react";
import SettingsProvider from "./components/stateManagement/SettingsProvider";
import Content from "./Content";

const App = () => {
  return (
    <SettingsProvider>
      <Content/>
    </SettingsProvider>
  );
};

export default App;
