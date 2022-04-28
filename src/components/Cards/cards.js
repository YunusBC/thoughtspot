import React from "react";
//import './index.css';

const Cards = () => {
  return (
    //       <div className="ui grid">
    //   <div className="four wide column">
    //     <iframe  title="Total Clients" src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8549c2cc-acc9-4d63-ad88-bc6ced42f8e0/b45efaa4-1522-43ed-9de2-203d848f5982"></iframe>
    //   </div>
    //   <div className="four wide column">
    //     <iframe  title="Total Paid Amount" src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8549c2cc-acc9-4d63-ad88-bc6ced42f8e0/4e90cb90-5d8a-4c42-8a5c-50bc92d87098"></iframe>
    //   </div>
    //   <div className="four wide column">
    //     <iframe className="iframeCssNew" title="Total Freight Amount" src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8549c2cc-acc9-4d63-ad88-bc6ced42f8e0/c6a2f9fc-7b09-452a-8f57-77b72575ff02"></iframe>
    //   </div>
    //   <div className="four wide column">
    //     <iframe className="iframeCssNew" title="Total Products" src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8549c2cc-acc9-4d63-ad88-bc6ced42f8e0/5f556da2-c2a2-47f8-ba1a-413e95701202"></iframe>
    //   </div>
    // </div>

    <div className="page-content">
      <div className="row">
        <div className="col-md-3">
          <div className="card card-box">
            <div className="iframe-container">
              <iframe
                title="Total Clients"
                src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/2c2f8672-3e53-4970-b0ab-c6f692bf9831"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card card-box">
            <div className="iframe-container">
              <iframe
                title="Total Paid Amount"
                src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/2221b7d0-26b1-4ec0-a817-2b2216d317bd"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card card-box">
            <div className="card-body min-ht300 iframe-container">
              <iframe
                title="Total Freight Amount"
                src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/c912ff79-8662-478e-8e8d-fdfb928c1d9d"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card card-box">
            <div className="card-body min-ht300 iframe-container">
              <iframe
                title="Total Products"
                src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/66e042e5-9e48-4933-b036-6293c92ac50d"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="card card-box">
            <div className="card-body min-ht300 iframe-container">
              <iframe
                title="Total Clients"
                src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/3aeff8dc-35d3-493c-b839-05a899a2b676"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card card-box">
            <div className="card-body min-ht300 iframe-container">
              <iframe
                title="Total Paid Amount"
                src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/e214c18a-24ca-43fb-a55a-b6cf947e76d5"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card card-box">
            <div className="card-body min-ht300 iframe-container">
              <iframe
                title="Total Freight Amount"
                src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/1c08accc-2a41-4094-9e37-157cfd91742d"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="container">
            <iframe
              class="responsive-iframe"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
