import React from "react";
import "./index.css";
import TopMenuNav from "../TopMenuNav/TopMenuNav";
import { Icon } from 'semantic-ui-react';

const MasterPage = () => {
  return (
    <>
      <div className="width75Percentage">
        <TopMenuNav></TopMenuNav>
      </div>
      <div className="width25Percentage three-icons">
        <Icon className="marginRight20px" name='user' size='large' tooltip='Add users to your feed' link />
        <Icon className="marginRight20px" name='bell' size='large' tooltip='Notifications' link />
        <Icon className="marginRight20px" name='sign-out' size='large' tooltip='Log Out' link />
      </div>
    </>
  );
};

export default MasterPage;
