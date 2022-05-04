import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

function TopMenuWithoutNav() {
  return (
    <div className="goUp">
      <h2 className="breadCrumbHeader">Facility Management</h2>
    </div>
  );
}

const TopMenuNav1 = () => {
  return (
    <div className="goUp">
      <div class="five item menu">
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
        <Link className="item" to="/cards2"></Link>
      </div>
    </div>
  );
};

// ...
const TopMenuNav = () => {
  const location = useLocation();
  console.log(
    "🚀 ~ file: topMenuNav.js ~ line 54 ~ TopMenuNav ~ location",
    location
  );

  return location.pathname === "/" ? <TopMenuNav1 /> : <TopMenuWithoutNav />;
};

export default TopMenuNav;
