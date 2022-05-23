import React from "react";
import "./index.css";
import TopMenuNav from "../TopMenuNav/TopMenuNav";
import LandingMenu from "../TopMenuNav/LandingMenu";

const MasterPage = () => {
  return (
    <>
      <div className="logo-row ui grid sixteen wide column no-padding-and-margin">
        <TopMenuNav></TopMenuNav>
      </div>

      <LandingMenu />
    </>
  );
};

export default MasterPage;
