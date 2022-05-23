import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import SettingsContext from "../stateManagement/SettingsContext"

function TopMenuWithoutNav(props) {

  const context = useContext(SettingsContext);

  function collapseMenuClicked () {
    context.setIsMenuCollapsed(!context.settings.isMenuCollapsed)
  }
  return (
      <div className="alignCenter">
        <h2 className="breadCrumbHeader" onClick={collapseMenuClicked}>{ props.title }</h2>
      </div>
  );
}

const Submenu = () => {
  return (
      <div className="ui four item menu">
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

const TopMenuNav = () => {
  return (
    <SettingsContext.Consumer>
      {context => 
      (
        context.settings.isLandingPage === true ? <Submenu /> : 
        <TopMenuWithoutNav title={context.settings.title} />
      )}
    </SettingsContext.Consumer>
  )
};

export default TopMenuNav;
