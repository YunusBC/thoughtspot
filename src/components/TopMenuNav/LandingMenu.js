import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import SettingsContext from "../stateManagement/SettingsContext";

const LandingMenuLinks = () => {
  return (
    <div className="alignCenter">
      <div className="ui blue ten item stackable inverted large menu no-padding-and-margin compact">
        <Link className="item hover" to="/facility">
          Facility Management
        </Link>
        <Link className="item hover" to="/lease">
          Lease Management
        </Link>
        <Link className="item hover" to="/property">
          Property Management
        </Link>
        <Link className="item hover" to="/liveboards">
          Personal Liveboards
        </Link>
      </div>
    </div>
  );
};
const LandingMenu = () => {
  return (
    <SettingsContext.Consumer>
      {(context) =>
        context.settings.isLandingPage === true ? <LandingMenuLinks /> : null
      }
    </SettingsContext.Consumer>
  );
};

export default LandingMenu;
