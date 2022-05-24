import React, { useEffect, useContext } from "react";
import SettingsContext from "../stateManagement/SettingsContext";
import "./index.css";

const Home = () => {
  const context = useContext(SettingsContext);
  useEffect(() => {
    context.setTitle("");
    context.setIsLandingPage(true);
  }, []);
  return (
    <div className="mainDiv">
      <div className="textBlock">
        <p>
          <span className="blueColor">Our Mission </span>is to provide
        </p>
        <p>extraordinary services and exceed</p>
        <p>our client's expectations by</p>
        <p>
          <span className="blueColor">always committing to the highest</span>
        </p>
        <p>
          <span className="blueColor">levels of professionalism, ethics</span>
        </p>
        <p>
          <span className="blueColor">and standards </span>in the real estate{" "}
        </p>
        <p>industry.</p>
      </div>

      <iframe
        title="Total Work Orders"
        className="topLeft"
        src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/b7489cf1-9581-4fab-9c46-292549772aa3/618d1d5f-a7eb-492c-a238-8624a984024a"
        frameBorder="0"
      ></iframe>

      <iframe
        title="Total Work Orders"
        className="topRight"
        src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/b7489cf1-9581-4fab-9c46-292549772aa3/3f1c3804-563e-4d4f-9ed5-89516a0a3f3a"
        frameBorder="0"
      ></iframe>

      <iframe
        title="Total Work Orders"
        className="bottomLeft"
        src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/b7489cf1-9581-4fab-9c46-292549772aa3/aea8d1c3-ddcd-4479-8223-7f464995d2d8"
        frameBorder="0"
      ></iframe>

      <iframe
        title="Total Work Orders"
        className="bottomRight"
        src="https://blue-cloud.thoughtspot.cloud/#/embed/viz/b7489cf1-9581-4fab-9c46-292549772aa3/22b25a53-bd48-496c-aa3b-3b867bdfd2bc"
        frameBorder="0"
      ></iframe>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Home;
