import React, { useEffect, useContext } from "react";
import "./css/facility.css";
import SettingsContext from "../stateManagement/SettingsContext"

const Facility = () => {
  const context = useContext(SettingsContext);
  useEffect(() => {
    context.setTitle('Facility Management');
    context.setIsLandingPage(false);
  }, []);
  return (
    <>
    <div className="row titleCss">Workorder Insights - 2022</div>
      <div className="width100Percentage">
        <div className="displayInlineBlock width30Percentage">
          <div className="displayBlock iframeDiv marginBottom10px">
            <iframe
                title="Total Work Orders"
                className="iframeSmallKPI iframeCss"
                src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/2c2f8672-3e53-4970-b0ab-c6f692bf9831"
                
            ></iframe>
          </div>
          <div className="displayBlock iframeDiv">
            <iframe
                title="Completed Ontime %"
                className="iframeSmallKPI iframeCss"
                src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/2221b7d0-26b1-4ec0-a817-2b2216d317bd"
                
            ></iframe>
          </div>
        </div>
        <div className="displayInlineBlock width40Percentage iframeDiv">
          <iframe
            title="Work Orders Trends"
            className="iframeBigKPI iframeCss"
            src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/c912ff79-8662-478e-8e8d-fdfb928c1d9d"
            
          ></iframe>
        </div>
        <div className="displayInlineBlock width30Percentage iframeDiv">
          <iframe
              title="Work Orders by Region"
              className="iframeBigKPI iframeCss"
              src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/1c08accc-2a41-4094-9e37-157cfd91742d"
              
          ></iframe>
        </div>
      </div>
      <div className="width100Percentage">
        <div className="displayInlineBlock width34Percentage iframeDiv">
          <iframe
              title="Satisfaction Rating by Provider Type"
              className="iframeBigKPI iframeCss"
              src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/66e042e5-9e48-4933-b036-6293c92ac50d"
              
          ></iframe>
        </div>
        <div className="displayInlineBlock width32Percentage iframeDiv">
          <iframe
            title="Top 10 Workorders by Specality"
            className="iframeBigKPI iframeCss"
            src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/e214c18a-24ca-43fb-a55a-b6cf947e76d5"
            
          ></iframe>
        </div>
        <div className="displayInlineBlock width34Percentage iframeDiv">
          <iframe
              title="Workorder volume by type"
              className="iframeBigKPI iframeCss"
              src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/3aeff8dc-35d3-493c-b839-05a899a2b676"
              
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Facility;
