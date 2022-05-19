import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import SettingsContext from "../stateManagement/SettingsContext";

const SubmenuLinks = () => {
  return (
    <div className="ui blue four item inverted  menu no-padding-and-margin">
      <Link className="active item" to="/facility">
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

const Submenu = () => {
  return (
    <SettingsContext.Consumer>
      {(context) =>
        context.settings.isLandingPage === true ? <SubmenuLinks /> : null
      }
    </SettingsContext.Consumer>
  );
};

export default Submenu;
