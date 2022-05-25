import React, { useEffect, useContext  } from "react";
import SettingsContext from "../stateManagement/SettingsContext";
import "./css/liveboards.css";

const Liveboards = () => {
  const context = useContext(SettingsContext);
  useEffect(() => {
    context.selectMenu('liveboards');
    context.setTitle('Liveboards');
    context.setIsLandingPage(false);
  }, []);
  return (
      <div>
                            <iframe width="98%" height="1500px" className="paddingTop30px"
                            title="Total Work Orders"
                            src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/8af809cb-88c3-4586-97ab-e062088d84e9/"
                            frameBorder="0">
                    </iframe>
      </div>
  );
}

export default Liveboards;