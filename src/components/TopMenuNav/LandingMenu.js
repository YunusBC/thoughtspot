import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import SettingsContext from "../stateManagement/SettingsContext";

const LandingMenuLinks = () => {
  return (
    <div className="alignCenter">
      <div className="simple-menu">
        <Link to="/facility">Facility Management</Link>

        <Link to="/lease">Lease Management</Link>

        <Link to="/property">Property Management</Link>

        <Link to="/liveboards">Personal Liveboards</Link>
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
