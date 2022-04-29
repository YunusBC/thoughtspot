import React from "react";
import "./index.css";
import { init, SearchEmbed, AuthType } from "@thoughtspot/visual-embed-sdk";

// from 'https://cdn.jsdelivr.net/npm/@thoughtspot/visual-embed-sdk/dist/tsembed.es.js';

init({
  thoughtSpotHost: "http://blue-cloud.thoughtspot.cloud/",
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
    makeSearch("d2adc5cf-2475-4ef3-9e7a-b3ecb3abed3b");
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
