import React from "react";
import "./index.css";
import { init, SearchEmbed, AuthType } from "@thoughtspot/visual-embed-sdk";

// from 'https://cdn.jsdelivr.net/npm/@thoughtspot/visual-embed-sdk/dist/tsembed.es.js';

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

class SearchBar extends React.Component {
  componentDidMount() {
    makeSearch("0e3cfc50-e2cb-44cf-bde7-32e1c9023aa3");
  }

  render() {
    return (
      <div className="page-content">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-box">
              <div className="card-body">
                <div id="embed" className="embedSearch"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
