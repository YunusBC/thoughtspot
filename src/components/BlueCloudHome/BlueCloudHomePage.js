import React, { useEffect, useContext } from "react";
import "./index.css";
import BcHeader from "./BcHeader";
import BcFeatures from "./BcFeatures";
import SettingsContext from "../stateManagement/SettingsContext";

const BlueCloudHomePage = () => {
  const context = useContext(SettingsContext);
  useEffect(() => {
    context.setIsBcHome(true);
    context.setIsLandingPage(false);
  }, []);
  return (
    <div className="parent">
      <div className="header grid-area">
        <BcHeader />
      </div>
      <div className="main grid-area"> </div>
      <div className="features grid-area">
        <BcFeatures />
      </div>
      <div className="bcfooter grid-area">
        © Copyright 2022 Blue.cloud Inc | All Rights Reserved
      </div>
    </div>
  );
};

export default BlueCloudHomePage;
