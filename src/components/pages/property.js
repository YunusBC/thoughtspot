import React, { useEffect, useContext  } from "react";
import SettingsContext from "../stateManagement/SettingsContext"

const Property = () => {
  const context = useContext(SettingsContext);
  useEffect(() => {
    context.selectMenu('property');
    context.setTitle('Property');
    context.setIsLandingPage(false);
  }, []);
  return (
      <div>Property Page</div>
  );
}

export default Property;