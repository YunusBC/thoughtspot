import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import SettingsContext from "../stateManagement/SettingsContext";

const LandingMenuLinks = () => {
  return (
    <div className="ui blue four item stackable inverted large menu no-padding-and-margin">
      <Link className="item" to="/facility">
        Facility Management
      </Link>
      <Link className="item" to="/lease">
        Lease Management
      </Link>
      <Link className="item" to="/property">
        Property Management
      </Link>
      <Link className="item" to="/liveboards">
        Personal Liveboards
      </Link>
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
