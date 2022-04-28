import React from "react";
import "./index2.css";

const Cards2 = () => {
  return (
    <div className="cards2Page">
      <div className="page-content">
        <div className="firstRow">
          <div className="firstRowCol1">
            <div className="ts-frame">
              <iframe
                title="Total Work Orders"
                className="iframeCssNew"
                src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/2c2f8672-3e53-4970-b0ab-c6f692bf9831"
                frameBorder="0"
              ></iframe>
            </div>
            <div className="ts-frame">
              <iframe
                title="Completed Ontime %"
                className="iframeCssNew"
                src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/2221b7d0-26b1-4ec0-a817-2b2216d317bd"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
          <div className="ts-frame">
            <iframe
              title="Work Orders Trends"
              className="iframeCssNew"
              src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/c912ff79-8662-478e-8e8d-fdfb928c1d9d"
              frameBorder="0"
            ></iframe>
          </div>
          <div className="ts-frame">
            <iframe
              title="Work Orders by Region"
              className="iframeCssNew"
              src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/1c08accc-2a41-4094-9e37-157cfd91742d"
              frameBorder="0"
            ></iframe>
          </div>
        </div>

        <div className="secondRow">
          <div className="ts-frame">
            <iframe
              title="Satisfaction Rating by Provider Type"
              className="iframeCssNew"
              src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/66e042e5-9e48-4933-b036-6293c92ac50d"
              frameBorder="0"
            ></iframe>
          </div>
          <div className="ts-frame">
            <iframe
              title="Top 10 Workorders by Specality"
              className="iframeCssNew"
              src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/e214c18a-24ca-43fb-a55a-b6cf947e76d5"
              frameBorder="0"
            ></iframe>
          </div>
          <div className="ts-frame">
            <iframe
              title="Workorder volume by type"
              className="iframeCssNew"
              src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/3aeff8dc-35d3-493c-b839-05a899a2b676"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards2;
