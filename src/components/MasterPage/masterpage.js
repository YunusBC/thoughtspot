import React from "react";
import "./index.css";
import { ReactComponent as LogoDark } from "../../assets/img/logo-dark.svg";
import TopMenuNav from "../TopMenuNav/TopMenuNav";
import Submenu from "../TopMenuNav/Submenu";

const MasterPage = () => {
  return (
    <>
      <div className="logo-row ui grid sixteen wide column no-padding-and-margin">
        <div className="two wide column">
          <div className="page-logo">
            <a href="/">
              <span className="logo-default">
                <LogoDark></LogoDark>
              </span>
            </a>
          </div>
        </div>
        <TopMenuNav></TopMenuNav>
      </div>

      <Submenu />
    </>
  );
};

export default MasterPage;
