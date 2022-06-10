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
      <div className="header ">
        <BcHeader />
      </div>
      <div className="main "> </div>
      <div className="features ">
        <BcFeatures />
      </div>
      <div className="bcfooter ">
        © Copyright 2022 Blue.cloud Inc | All Rights Reserved
      </div>
    </div>
  );
};

export default BlueCloudHomePage;
