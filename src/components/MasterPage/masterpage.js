import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { ReactComponent as LogoDark } from "../../assets/img/logo-dark.svg";
import TopMenuNav from "../TopMenuNav/TopMenuNav";
const MasterPage = () => {
  return (
      <div className="ui secondary menu">
        <div className="left menu">
          <div className="page-logo">
            <a href="/">
              <span className="logo-default">
                <LogoDark></LogoDark>
              </span>
            </a>
          </div>
        </div>
        <TopMenuNav> </TopMenuNav>
          <div className="right-buttons">
            <div className="ui three column grid ">
              <div
                className="column"
                data-inverted=""
                data-tooltip="Add users to your feed"
                data-position="bottom left"
              >
                <i className="large user icon"></i>
              </div>
              <div
                className="column"
                data-inverted=""
                data-tooltip="Notifications"
                data-position="bottom center"
              >
                <i className="large bell icon"></i>
              </div>
              <div
                className="column"
                data-inverted=""
                data-tooltip="Log Out"
                data-position="bottom right"
              >
                <i className="large sign-out icon"></i>
              </div>
            </div>
          </div>
      </div>
  );
};

export default MasterPage;
