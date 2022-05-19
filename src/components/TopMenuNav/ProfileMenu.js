import React from "react";
import "./index.css";

const ProfileMenu = () => {
  return (
    <div className="profile-menu two wide column four-icons">
      <div class="ui icon borderless compact menu ">
        <a href="/" class="item">
          <i class="bell icon"></i>
        </a>
        <a href="/" class="item">
          <i class="video camera icon"></i>
        </a>
        <a href="/" class="item">
          <i class="sign-out icon"></i>
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
