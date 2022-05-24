import React, { useEffect, useContext  } from "react";
import SettingsContext from "../stateManagement/SettingsContext"

const Lease = () => {
  const context = useContext(SettingsContext);
  useEffect(() => {
    context.selectMenu('lease');
    context.setTitle('Lease Management');
    context.setIsLandingPage(false);
  }, []);

  return (
     <div>Lease Page</div>
  );
}

export default Lease;