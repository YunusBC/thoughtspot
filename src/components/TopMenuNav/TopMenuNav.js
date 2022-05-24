import "./index.css";
import SettingsContext from "../stateManagement/SettingsContext";
import ProfileMenu from "./ProfileMenu";
import ProfileMenuLanding from "./ProfileMenuLanding";
import { ReactComponent as LogoDark } from "../../assets/img/logo-dark.svg";
import SearchPng from "../../assets/img/search.png";

import { Icon, Grid } from "semantic-ui-react";

function TopMenuWithoutNav(props) {
  const handleClick = (context) => {
    console.log(
      "🚀 ~ file: TopMenuNav.js ~ line 13 ~ handleClick ~ context.settings.isMenuCollapsed ",
      context.settings.isMenuCollapsed
    );
    context.settings.isMenuCollapsed = !context.settings.isMenuCollapsed;
  };

  return (
    <SettingsContext.Consumer>
      {(context) => (
        <div>
          <Grid padded stackable verticalAlign="bottom">
            <Grid.Row>
              <Grid.Column>
                <button
                  style={{
                    outline: "none",
                    border: 0,
                    background: "transparent",
                  }}
                  onClick={(_) => {
                    handleClick(context);
                  }}
                >
                  <Icon name="exchange" size="big" color="blue" title="bell" />
                </button>
              </Grid.Column>
              <Grid.Column width={5}>
                <h2 className="breadCrumbHeader">{props.title}</h2>
              </Grid.Column>
              <Grid.Column width={4}>
                <img src={SearchPng} alt="Search" className="search-png" />
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
  return (
    <div className="sub-menu">
      <div className="page-logo-landing">
        <a href="/">
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
