import React, { useEffect, useContext  } from "react";
import SettingsContext from "../stateManagement/SettingsContext"

const Liveboards = () => {
  const context = useContext(SettingsContext);
  useEffect(() => {
    context.setTitle('Liveboards');
    context.setIsLandingPage(false);
  }, []);
  return (
      <div>Liveboards Page</div>
  );
}

export default Liveboards;