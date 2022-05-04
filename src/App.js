import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MasterPage from "./components/MasterPage/masterpage";
import VerticalMenu from "./components/Menu/menu";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/footer";
import Facility from "./components/pages/facility";
import Lease from "./components/pages/lease";
import Property from "./components/pages/property";
import Liveboards from "./components/pages/liveboards";

const App = () => {
  return (
    <div className="page-wrapper">
      <BrowserRouter>
        <MasterPage />
        <div className="page-container">
          <VerticalMenu />
          <div className="page-content-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/facility" element={<Facility />} />
              <Route path="/lease" element={<Lease />} />
              <Route path="/property" element={<Property />} />
              <Route path="/liveboards" element={<Liveboards />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
