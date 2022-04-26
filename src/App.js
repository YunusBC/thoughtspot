import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MasterPage from './components/MasterPage/masterpage';
import Menu from './components/Menu/menu';
import Cards from './components/Cards/cards';
import Reports from './components/Reports/reports';
import Searchbar from './components/Searchbar/searchbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/footer';

const App = () => {
  return (
    <div className="page-wrapper">
      <BrowserRouter>
      <MasterPage/>
      <div className="page-container">
            <Menu/>
            <div className="page-content-wrapper">
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/cards" element={<Cards/>} />
                <Route path="/reports" element={<Reports/>} />
                <Route path="/searchbar" element={<Searchbar/>} />
              </Routes>
            </div>
      </div>
      </BrowserRouter>
      <Footer/>
      </div>
  );
};

export default App;
