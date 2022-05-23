import React from "react";
import "./index.css";
import SettingsContext from "../stateManagement/SettingsContext";
import ProfileMenu from "./ProfileMenu";
import ProfileMenuLanding from "./ProfileMenuLanding";
import { ReactComponent as LogoDark } from "../../assets/img/logo-dark.svg";
import { Icon } from "semantic-ui-react";

function TopMenuWithoutNav(props) {
  return (
    <div>
      <div className="page-logo">
        <a href="/">
          <span className="logo-default">
            <LogoDark></LogoDark>
          </span>
        </a>
      </div>
      <div className=" alignCenter inline-block">
        <h2 className="breadCrumbHeader">
          <Icon name="exchange" color="blue" title="bell" />
          {props.title}
        </h2>
      </div>

      <ProfileMenu></ProfileMenu>
    </div>
  );
}

const LandingMenu = () => {
  return (
    <div className="sub-menu">
      <div className="page-logo-landing">
        <a href="/">
          <span className="logo-default-landing">
            <LogoDark></LogoDark>
          </span>
        </a>
      </div>
      <ProfileMenuLanding></ProfileMenuLanding>
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
