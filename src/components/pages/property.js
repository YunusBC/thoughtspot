import React from "react";
import "./css/property.css";
import { init, SearchEmbed, AuthType } from "@thoughtspot/visual-embed-sdk";
import SettingsContext from "../stateManagement/SettingsContext";

init({
  thoughtSpotHost: "https://blue-cloud.thoughtspot.cloud/",
  authType: AuthType.None,
});

const embedDiv = "#embed";

function makeSearch(datasourceGuid) {
  let embed = new SearchEmbed(embedDiv, {
    frameParams: {},
    disabledActions: [],
    disabledActionReason: "Reason for disabling",
    hiddenActions: [],
    dataSources: [datasourceGuid],
  });
  embed.render();
}

class Property extends React.Component {
  static contextType = SettingsContext;
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let myContext = this.context;
    myContext.setTitle('Property Management');
    myContext.setIsLandingPage(false);
    makeSearch("0e3cfc50-e2cb-44cf-bde7-32e1c9023aa3");
  }

  render() {
    return (
      <>
      <div className="row titleCss">Search Data</div>
      <div className="row">
        <div id="embed" className="iframeCss"></div>
      </div>
    </>
    );
  }
}

export default Property;
