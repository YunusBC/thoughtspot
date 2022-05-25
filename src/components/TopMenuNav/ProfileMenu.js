import React from "react";
import "./index.css";
import { Icon, Menu } from "semantic-ui-react";

const ProfileMenu = () => {
  return (
    <div className="profile-menu">
      <Menu secondary stackable compact>
        <Menu.Item>
          <Icon name="bell" size="big" color="blue" title="Alerts" />
        </Menu.Item>
        <Menu.Item>
          <Icon name="setting" size="big" color="blue" title="Settings" />
        </Menu.Item>
        <Menu.Item>
          <img
            className="user-profile ui rounded image "
            src={require("../../assets/img/user.png")}
            title="Profile"
            alt="Profile"
          ></img>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
