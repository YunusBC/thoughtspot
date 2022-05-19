import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import SettingsContext from "../stateManagement/SettingsContext";
import ProfileMenu from "./ProfileMenu";

function TopMenuWithoutNav(props) {
  return (
    <div className="alignCenter">
      <h2 className="breadCrumbHeader">{props.title}</h2>
    </div>
  );
}

const Submenu = () => {
  return (
    <div className="sub-menu">
      <ProfileMenu></ProfileMenu>
    </div>
  );
};

const TopMenuNav = () => {
  return (
    <div className="fourteen wide column no-padding-and-margin">
      <SettingsContext.Consumer>
        {(context) =>
          context.settings.isLandingPage === true ? (
            <Submenu />
          ) : (
            <TopMenuWithoutNav title={context.settings.title} />
          )
        }
      </SettingsContext.Consumer>
    </div>
  );
};

export default TopMenuNav;
