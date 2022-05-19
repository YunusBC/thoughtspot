import React from "react";
import "./profileMenu.css";
import { Icon } from "semantic-ui-react";

const ProfileMenu = () => {
  return (
    <div className="two wide column three-icons">
      <Icon
        className="marginRight20px"
        name="user"
        size="large"
        tooltip="Add users to your feed"
        link
      />
      <Icon
        className="marginRight20px"
        name="bell"
        size="large"
        tooltip="Notifications"
        link
      />
      <Icon
        className="marginRight20px"
        name="sign-out"
        size="large"
        tooltip="Log Out"
        link
      />
    </div>
  );
};

export default ProfileMenu;
