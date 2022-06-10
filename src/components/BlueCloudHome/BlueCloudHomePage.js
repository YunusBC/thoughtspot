import React, { useEffect, useContext } from "react";
import "./index.css";
import BcHeader from "./BcHeader";
import BcFeatures from "./BcFeatures";
import SettingsContext from "../stateManagement/SettingsContext"

const BlueCloudHomePage = () => {
  const context = useContext(SettingsContext);
  useEffect(() => {
    context.setIsBcHome(true);
    context.setIsLandingPage(false);
  }, []);
  return (
    <>
      <div className="parent">
        <div className="header grid-area">
          <BcHeader />
        </div>
        <div className="main grid-area">Main</div>
        <div className="sidebar grid-area">Sidebar</div>
        <div className="features grid-area">
          <BcFeatures />
        </div>
        <div className="footer grid-area"> </div>
      </div>
    </>
  );
};

export default BlueCloudHomePage;
