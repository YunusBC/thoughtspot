import React from "react";
import "./BcHeader.css";
import { useNavigate } from "react-router-dom";
import SettingsContext from "../stateManagement/SettingsContext";
import { ReactComponent as LogoDark } from "../../assets/img/logo-dark.svg";

const BcHeader = () => {
  const navigate = useNavigate ();
    const handleItemClick = (e) => {
      e.preventDefault();
      navigate('/home');
    }
  return (
    <SettingsContext.Consumer>
    { context => 
    (
    <div className="root">
      <div className="logo">
        <a href="/">
          <span className="logo-default-landing">
            <LogoDark></LogoDark>
          </span>
        </a>
      </div>
      <div> </div>
      <ul className="right-menu">
        <li className="right-menu-item">Services</li>
        <li className="right-menu-item">Insights</li>
        <li className="right-menu-item">About Us</li>
        <li className="right-menu-item">Newsroom</li>
        <li className="right-menu-item">Careers</li>
        <li className="right-menu-item last-menu-item">
          <a href="#" onClick={(e) => {context.setIsBcHome(false); context.setIsLandingPage(true); handleItemClick(e);}}>
            Portal <i className="arrow alternate circle right icon"></i>{" "}
          </a>
        </li>
      </ul>
    </div>
    )}
    </SettingsContext.Consumer>
  );
};

export default BcHeader;
