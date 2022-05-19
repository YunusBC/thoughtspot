import React from "react";
import "./index.css";
import { Icon } from "semantic-ui-react";

const ProfileMenu = () => {
  return (
    <div className="profile-menu two wide column four-icons">
      <div class="ui icon secondary stackable compact menu ">
        <a href="/" class="item">
          <Icon name="bell" size="big" inverted="true" />
        </a>
        <a href="/" class="item">
          <Icon name="setting" size="big" inverted="true" />
        </a>
        <a href="/" class="item">
          <img
            class="user-profile ui rounded image "
            src={require("../../assets/img/user.png")}
            alt=""
          ></img>
        </a>
      </div>
    </div>
  );
};

export default ProfileMenu;
