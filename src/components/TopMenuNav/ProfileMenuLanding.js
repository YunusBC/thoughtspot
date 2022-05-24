import React from "react";
import "./index.css";
import { Icon, Menu } from "semantic-ui-react";

const ProfileMenuLanding = () => {
  return (
    <div className="profile-menu-landing ">
      <Menu secondary stackable compact className="bgColor">
        <Menu.Item>
          <Icon name="bell" size="big" inverted title="bell" />
        </Menu.Item>
        <Menu.Item>
          <Icon name="setting" size="big" inverted title="Settings" />
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

export default ProfileMenuLanding;
