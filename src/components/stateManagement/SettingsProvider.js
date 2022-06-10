import React, { Component } from "react";
import SettingsContext from './SettingsContext';

class SettingsProvider extends Component {
  state = {
    settings : {
      isBcHome: true,
      isLandingPage: false,
      isMenuCollapsed: false,
      title: '',
      menuItem: ''
    }
  };

  render() {
    return (
        <SettingsContext.Provider
            value={{
                settings: this.state.settings,
                setIsBcHome: bool => {
                  const settings = this.state.settings;
                  settings.isBcHome = bool;
                  this.setState({
                    settings
                  });
                },
                setIsLandingPage: bool => {
                    const settings = this.state.settings;
                    settings.isLandingPage = bool;
                    this.setState({
                      settings
                    });
                },
                setIsMenuCollapsed: bool => {
                  const settings = this.state.settings;
                  settings.isMenuCollapsed = bool;
                  this.setState({
                    settings
                  });
                },
                setTitle: title => {
                  const settings = this.state.settings;
                  settings.title = title;
                  this.setState({
                    settings
                  });
                },
                selectMenu: title => {
                  const settings = this.state.settings;
                  settings.menuItem = title;
                  this.setState({
                    settings
                  });
                }
            }}
        >
            {this.props.children}
        </SettingsContext.Provider>
    );
  }
}

export default SettingsProvider;