import React, { useEffect, useContext } from "react";
import SettingsContext from "../stateManagement/SettingsContext"

const Home = () => {
const context = useContext(SettingsContext);
useEffect(() => {
    context.setTitle('');
    context.setIsLandingPage(true);
}, []);
  return (
    <div className="ui grid">
        <div className="three column row">
            <div className="column">
                <iframe
                        title="Total Work Orders"
                        src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/2c2f8672-3e53-4970-b0ab-c6f692bf9831"
                        frameBorder="0">
                </iframe>
            </div>
            <div className="column">
                <iframe
                        title="Lease Expiring"
                        src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/b7489cf1-9581-4fab-9c46-292549772aa3/22b25a53-bd48-496c-aa3b-3b867bdfd2bc"
                        frameBorder="0">
                </iframe>
            </div>
            <div className="column">
                <iframe
                        title="Total Properties"
                        src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/b7489cf1-9581-4fab-9c46-292549772aa3/20dfe116-19ba-46a6-a7b1-fe24a9959a91"
                        frameBorder="0">
                </iframe>
            </div>
        </div>
    </div>
  )
}

export default Home;