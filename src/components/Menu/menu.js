import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Menu = () => {
  return (
    <table class="ui celled table">
    <thead>
      <tr><th>MENU</th>
    </tr></thead>
    <tbody>
      <tr>
        <td data-label="Name">
            <Link to="/" className="item">Home</Link>
        </td>
      </tr>
      <tr>
        <td data-label="Name">
            <Link to="/cards" className="item">Cards</Link>
        </td>
      </tr>
      <tr>
        <td data-label="Name">
            <Link to="/searchbar" className="item">Search Bar</Link>
        </td>
      </tr>
      <tr>
        <td data-label="Name">
            <Link to="/reports" className="item">Reports</Link>
        </td>
      </tr>
    </tbody>
  </table>
  )
}

export default Menu;