import React from "react";
import "./css/property.css";
import { init, SearchEmbed, AuthType } from "@thoughtspot/visual-embed-sdk";

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
  componentDidMount() {
    makeSearch("0e3cfc50-e2cb-44cf-bde7-32e1c9023aa3");
  }

  render() {
    return (
      <div className="margin20px">
        <div id="embed" className="embedSearch"></div>
      </div>
    );
  }
}

export default Property;
