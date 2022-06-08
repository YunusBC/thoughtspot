import React from "react";
import "./index.css";
import BcHeader from "./BcHeader";
import BcFeatures from "./BcFeatures";

const BlueCloudHomePage = () => {
  return (
    <>
      <div class="parent">
        <div class="header grid-area">
          <BcHeader />
        </div>
        <div class="main grid-area">Main</div>
        <div class="sidebar grid-area">Sidebar</div>
        <div class="features grid-area">
          <BcFeatures />
        </div>
        <div class="footer grid-area"> </div>
      </div>
    </>
  );
};

export default BlueCloudHomePage;
