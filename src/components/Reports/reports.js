import React from 'react';
//import './index.css';

const Reports = () => {
  return (
    <div className="page-content">
        <div className="row">
        <div className="col-md-3">
                            <div className="card card-box">
                                <div className="card-body min-ht300">
                                    <iframe title="Total Clients" src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/3aeff8dc-35d3-493c-b839-05a899a2b676"></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card card-box">
                                <div className="card-body min-ht300">
                                <iframe title="Total Paid Amount" src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/e214c18a-24ca-43fb-a55a-b6cf947e76d5"></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card card-box">
                                <div className="card-body min-ht300">
                                <iframe title="Total Freight Amount" src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/c912ff79-8662-478e-8e8d-fdfb928c1d9d"></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card card-box">
                                <div className="card-body min-ht300">
                                <iframe title="Total Products" src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/66e042e5-9e48-4933-b036-6293c92ac50d"></iframe>
                                </div>
                            </div>
                        </div>
        </div>
        </div>
  )
}

export default Reports;