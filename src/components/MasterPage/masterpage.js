import React from "react";
import "./index.css";
import { ReactComponent as LogoDark } from "../../assets/img/logo-dark.svg";
import TopMenuNav from "../TopMenuNav/TopMenuNav";
import { Icon } from 'semantic-ui-react';

const MasterPage = () => {
  return (
    <>
      <div className="two wide column">
        <div className="page-logo">
          <a href="/">
            <span className="logo-default">
              <LogoDark></LogoDark>
            </span>
          </a>
        </div>
      </div>
      <div className="twelve wide column">
        <TopMenuNav></TopMenuNav>
      </div>
      <div className="two wide column three-icons">
        <Icon className="marginRight20px" name='user' size='large' tooltip='Add users to your feed' link />
        <Icon className="marginRight20px" name='bell' size='large' tooltip='Notifications' link />
        <Icon className="marginRight20px" name='sign-out' size='large' tooltip='Log Out' link />
      </div>
    </>
  );
};

export default MasterPage;
