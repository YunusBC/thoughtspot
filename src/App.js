import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MasterPage from './components/MasterPage/masterpage';
import Menu from './components/Menu/menu';
import Cards from './components/Cards/cards';
import Reports from './components/Reports/reports';
import Searchbar from './components/Searchbar/searchbar';
import Home from './components/Home/Home';

const App = () => {
  return (
    <>
      <MasterPage/>
      <BrowserRouter>
      <div className="ui grid">
        <div className="left floated two wide column">
          <div className="ui segment">
            <Menu/>
          </div>
        </div>
        <div className="right floated ten wide column">
          <div className="ui segment">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/cards" element={<Cards/>} />
              <Route path="/reports" element={<Reports/>} />
              <Route path="/searchbar" element={<Searchbar/>} />
            </Routes>
          </div>
        </div>
      </div>
      </BrowserRouter>
      </>
  );
};

export default App;
