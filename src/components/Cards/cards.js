import React from 'react';
import './index.css';

const Cards = () => {
  return (
      <div className="page-content">
        <div className="row">
        <div className="col-md-3">
                            <div className="card card-box">
                                <div className="card-body min-ht300">
                                <iframe title="Total Clients" className="iframeCssNew" src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/2c2f8672-3e53-4970-b0ab-c6f692bf9831"></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card card-box">
                                <div className="card-body min-ht300">
                                <iframe title="Total Paid Amount" className="iframeCssNew"  src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/2221b7d0-26b1-4ec0-a817-2b2216d317bd"></iframe>
                                </div>
                            </div>
                        </div>
        </div>
      </div>
  )
}

export default Cards;