import React from "react";
import "./index.css";
import SettingsContext from "../stateManagement/SettingsContext";
import ProfileMenu from "./ProfileMenu";
import { ReactComponent as LogoDark } from "../../assets/img/logo-dark.svg";

function TopMenuWithoutNav(props) {
  return (
    <div className="alignCenter">
      <h2 className="breadCrumbHeader">{props.title}</h2>
    </div>
  );
}

const LandingMenu = () => {
  return (
    <div className="sub-menu">
      <div className="page-logo">
        <a href="/">
          <span className="logo-default">
            <LogoDark></LogoDark>
          </span>
        </a>
      </div>
      <ProfileMenu></ProfileMenu>
    </div>
  );
};

const TopMenuNav = () => {
  return (
    <div className="sixteen wide column no-padding-and-margin">
      <SettingsContext.Consumer>
        {(context) =>
          context.settings.isLandingPage === true ? (
            <LandingMenu />
          ) : (
            <TopMenuWithoutNav title={context.settings.title} />
          )
        }
      </SettingsContext.Consumer>
    </div>
  );
};

export default TopMenuNav;
