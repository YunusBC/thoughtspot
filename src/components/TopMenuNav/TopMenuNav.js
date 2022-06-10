import React from "react";
import SettingsContext from "../stateManagement/SettingsContext";
import ProfileMenu from "./ProfileMenu";
import ProfileMenuLanding from "./ProfileMenuLanding";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LogoDark } from "../../assets/img/logo-dark.svg";
import SearchPng from "../../assets/img/search.png";
import { Link } from "react-router-dom";
import { Icon, Grid } from "semantic-ui-react";
import "./index.css";

function TopMenuWithoutNav(props) {
  return (
    <SettingsContext.Consumer>
      {(context) => (
        <div className="bannerHeight top-menu-without-nav">
          <Grid padded stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column>
                <button
                  className="collapse-button"
                  onClick={() =>
                    context.setIsMenuCollapsed(
                      !context.settings.isMenuCollapsed
                    )
                  }
                >
                  <Icon
                    name="exchange"
                    size="big"
                    color="blue"
                    title={`${
                      context.settings.isMenuCollapsed ? "Expand" : "Collapse"
                    } `}
                  />
                </button>
              </Grid.Column>
              <Grid.Column width={5}>
                <h2 className="breadCrumbHeader">
                  {context.settings.title !== "Search Data"
                    ? props.title
                    : "Facility Management"}
                </h2>
              </Grid.Column>
              <Grid.Column width={4}>
                {context.settings.title !== "Search Data" ? (
                  <Link to="/search">
                    <img src={SearchPng} alt="Search" className="search-png" />
                  </Link>
                ) : (
                  <Link to="/search">
                    <img
                      src={SearchPng}
                      alt="Search"
                      className="search-png"
                      style={{ opacity: 0 }}
                    />
                  </Link>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <ProfileMenu></ProfileMenu>
        </div>
      )}
    </SettingsContext.Consumer>
  );
}

const LandingMenu = () => {
  const navigate = useNavigate ();
  const handleItemClick = (e) => {
    e.preventDefault();
    navigate('/home');
  }
  return (
    <div className="sub-menu">
      <div className="page-logo-landing">
        <a href="#" onClick={(e) => handleItemClick(e)}>
          <span className="logo-default-landing">
            <LogoDark></LogoDark>
          </span>
        </a>
      </div>
      <ProfileMenuLanding></ProfileMenuLanding>
    </div>
  );
};

const TopMenuNav = () => {
  return (
    <div className="sixteen wide column no-padding-and-margin">
      <SettingsContext.Consumer>
        {(context) =>
          context.settings.isLandingPage === true ? (
            <LandingMenu />
          ) : (
            <TopMenuWithoutNav title={context.settings.title} />
          )
        }
      </SettingsContext.Consumer>
    </div>
  );
};

export default TopMenuNav;
