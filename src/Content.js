import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MasterPage from "./components/MasterPage/masterpage";
import BlueCloudHomePage from "./components/BlueCloudHome/BlueCloudHomePage";
import VerticalMenu from "./components/LeftMenu/menu";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/footer";
import Facility from "./components/pages/facility";
import Search from "./components/pages/search";
import Lease from "./components/pages/lease";
import Property from "./components/pages/property";
import Liveboards from "./components/pages/liveboards";
import SettingsContext from "./components/stateManagement/SettingsContext";

import "./index.css";

const Content = () => {
  const context = useContext(SettingsContext);
  return (
    <BrowserRouter>
      <div className="ui grid">
        {!context.settings.isLandingPage && (
          <React.Fragment>
            <div
              className={`${
                context.settings.isMenuCollapsed
                  ? "width05Percentage"
                  : "width20Percentage"
              } `}
            >
              <VerticalMenu />
            </div>
            <div
              className={`${
                context.settings.isMenuCollapsed
                  ? "width95Percentage"
                  : "width80Percentage"
              } `}
            >
              <BlueCloudHomePage />
              {/* <MasterPage /> */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/facility" element={<Facility />} />
                <Route path="/lease" element={<Lease />} />
                <Route path="/property" element={<Property />} />
                <Route path="/liveboards" element={<Liveboards />} />
                <Route path="/search" element={<Search />} />
              </Routes>
            </div>
          </React.Fragment>
        )}
        {context.settings.isLandingPage && (
          <React.Fragment>
            <div className="sixteen wide column">
              <BlueCloudHomePage />
              {/* <MasterPage /> */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/facility" element={<Facility />} />
                <Route path="/lease" element={<Lease />} />
                <Route path="/property" element={<Property />} />
                <Route path="/liveboards" element={<Liveboards />} />
                <Route path="/search" element={<Search />} />
              </Routes>
            </div>
          </React.Fragment>
        )}
        <div className="fullWidth">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Content;
