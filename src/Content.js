import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MasterPage from "./components/MasterPage/masterpage";
import VerticalMenu from "./components/LeftMenu/menu";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/footer";
import Facility from "./components/pages/facility";
import Lease from "./components/pages/lease";
import Property from "./components/pages/property";
import Liveboards from "./components/pages/liveboards";
import SettingsContext from "./components/stateManagement/SettingsContext";

import "./index.css";

const Content = () => {
  const context = useContext(SettingsContext);
  return (
    <div className="ui grid ">
      <BrowserRouter>
        <MasterPage />
        {!context.settings.isLandingPage && (
          <div
            className={`${
              context.settings.isMenuCollapsed ? "collapsedMenuWidth" : "two"
            } wide column`}
          >
            <VerticalMenu />
          </div>
        )}
        <div
          className={`${
            context.settings.isLandingPage ? "sixteen" : "fourteen"
          } wide column`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/facility" element={<Facility />} />
            <Route path="/lease" element={<Lease />} />
            <Route path="/property" element={<Property />} />
            <Route path="/liveboards" element={<Liveboards />} />
          </Routes>
        </div>
      </BrowserRouter>
      <div className="sixteen wide column">
        <Footer />
      </div>
    </div>
  );
};

export default Content;
