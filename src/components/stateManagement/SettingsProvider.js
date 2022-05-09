import React, { Component } from "react";
import SettingsContext from './SettingsContext';

class SettingsProvider extends Component {
  state = {
    settings : {
      isLandingPage: true,
      isMenuCollapsed: false,
      title: ''
    }
  };

  render() {
    return (
        <SettingsContext.Provider
            value={{
                settings: this.state.settings,
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
                }
            }}
        >
            {this.props.children}
        </SettingsContext.Provider>
    );
  }
}

export default SettingsProvider;