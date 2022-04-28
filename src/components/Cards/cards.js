import React from "react";
import "./index.css";

const Cards = () => {
  return (
    <div class="page-content-wrapper">
      <div class="page-content">
        <div class="row">
          <div class="col-md-3">
            <div class="row no-gutters">
              <div class="col-md-12 no-padding">
                <div class="card card-box">
                  <div class="card-body min-ht100">
                    <iframe
                      title="Total Clients"
                      className="iframeCssNew"
                      src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/2c2f8672-3e53-4970-b0ab-c6f692bf9831"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div class="col-md-12">
                <div class="card card-box">
                  <div class="card-body min-ht100">
                    <iframe
                      title="Total Paid Amount"
                      className="iframeCssNew"
                      src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/2221b7d0-26b1-4ec0-a817-2b2216d317bd"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card card-box">
              <div class="card-body min-ht200">
                <iframe
                  title="Work Orders Trends"
                  className="iframeCssNew"
                  src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/c912ff79-8662-478e-8e8d-fdfb928c1d9d"
                ></iframe>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="card card-box">
              <div class="card-body min-ht200">
                <iframe
                  title="Work Orders by Region"
                  className="iframeCssNew"
                  src=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <div class="card card-box">
              <div class="card-body min-ht300">
                <iframe
                  title="Satisfaction Rating by Provider Type"
                  className="iframeCssNew"
                  src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/66e042e5-9e48-4933-b036-6293c92ac50d"
                ></iframe>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-box">
              <div class="card-body min-ht300">
                <iframe
                  title="Top 10 Workorders by Specality"
                  className="iframeCssNew"
                  src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/e214c18a-24ca-43fb-a55a-b6cf947e76d5"
                ></iframe>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card card-box">
              <div class="card-body min-ht300">
                <iframe
                  title="Workorder volume by type"
                  className="iframeCssNew"
                  src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/3aeff8dc-35d3-493c-b839-05a899a2b676"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
