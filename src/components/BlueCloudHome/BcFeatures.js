import React from "react";
import "./BcFeatures.css";

const BcFeatures = () => {
  return (
    <ul className="features">
      <li className="feature-item ">
        <div className="feature-row1 ">200+</div>
        <div className="feature-row2 ">AI and Analytics Implementations </div>
        <div className="feature-row3 ">Across Industries</div>
      </li>
      <li className="feature-item ">
        <div className="feature-row1 ">10+ </div>
        <div className="feature-row2 ">Fortune 500 Clients</div>
        <div className="feature-row3 ">Multi Year Engagements </div>
      </li>
      <li className="feature-item ">
        <div className="feature-row1 ">400+ </div>
        <div className="feature-row2 "> Consultants</div>
        <div className="feature-row3 ">Worldwide </div>
      </li>
      <li className="feature-item ">
        <div className="feature-row1 "> 7+</div>
        <div className="feature-row2 "> Technology Partners</div>
        <div className="feature-row3 ">
          <div>
            <img
              className="partner-logo"
              src="https://blue.cloud/assets/images/partners/snowflake-emblem.svg"
              alt=""
            />
            <img
              className="partner-logo"
              src="https://blue.cloud/assets/images/partners/thoughtspot-emblem.svg"
              alt=""
            />
            <img
              className="partner-logo"
              src="https://blue.cloud/assets/images/partners/starburst-emblem.svg"
              alt=""
            />
            <img
              className="partner-logo-long"
              src="https://blue.cloud/assets/images/partners/DataRobot-emblem.svg"
              alt=""
            />

            <img
              className="partner-logo"
              src="https://blue.cloud/assets/images/partners/aws-emblem.svg"
              alt=""
            />
            <img
              className="partner-logo"
              src="https://blue.cloud/assets/images/partners/azure-emblem.svg"
              alt=""
            />
            <img
              className="partner-logo"
              src="https://blue.cloud/assets/images/partners/gcloud-emblem.svg"
              alt=""
            />
          </div>
        </div>
      </li>
    </ul>
  );
};

export default BcFeatures;
