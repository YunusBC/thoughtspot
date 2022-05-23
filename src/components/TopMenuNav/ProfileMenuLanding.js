import React from "react";
import "./index.css";
import { Icon, Menu, Popup } from "semantic-ui-react";

const ProfileMenuLanding = () => {
  return (
    <div className="profile-menu-landing">
      <Menu secondary stackable compact>
        <Menu.Item>
          <Icon name="bell" size="big" inverted="true" title="bell" />
        </Menu.Item>
        <Menu.Item>
          <Icon name="setting" size="big" inverted="true" title="Settings" />
        </Menu.Item>
        <Menu.Item>
          <img
            class="user-profile ui rounded image "
            src={require("../../assets/img/user.png")}
            title="Profile"
          ></img>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default ProfileMenuLanding;
