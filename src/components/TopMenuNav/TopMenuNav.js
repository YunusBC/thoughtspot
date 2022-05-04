import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const TopMenuNav = () => {
  return (
    <div className="goUp">
      <ul className="topMenu">
        <li className="top-nav-item active open">
          <Link to="/cards2">
            <i className="material-icons">how_to_reg</i>
            <span>Facility Management</span>
            <span className="selected"></span>
          </Link>
        </li>
        <li className="top-nav-item">
          <Link to="/searchbar" href="#">
            <i className="material-icons">recent_actors</i>
            <span>Lease Management</span>
          </Link>
        </li>
        <li className="top-nav-item">
          <Link to="/searchbar" href="#">
            <i className="material-icons">real_estate_agent</i>
            <span>Property Management</span>
          </Link>
        </li>

        <li className="top-nav-item">
          <Link to="/reports">
            <i className="material-icons">group</i>
            <span>Personal Liveboards</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopMenuNav;
