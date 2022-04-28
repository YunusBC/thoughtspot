import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Menu = () => {
  return (
    //   <table className="ui celled table">
    //   <thead>
    //     <tr><th>MENU</th>
    //   </tr></thead>
    //   <tbody>
    //     <tr>
    //       <td data-label="Name">
    //           <Link to="/" className="item">Home</Link>
    //       </td>
    //     </tr>
    //     <tr>
    //       <td data-label="Name">
    //           <Link to="/cards" className="item">Cards</Link>
    //       </td>
    //     </tr>
    //     <tr>
    //       <td data-label="Name">
    //           <Link to="/searchbar" className="item">Search Bar</Link>
    //       </td>
    //     </tr>
    //     <tr>
    //       <td data-label="Name">
    //           <Link to="/reports" className="item">Reports</Link>
    //       </td>
    //     </tr>
    //   </tbody>
    // </table>
    <div className="sidebar-container">
      <div className="sidemenu-container navbar-collapse collapse fixed-menu">
        <div id="remove-scroll" className="left-sidemenu">
          <ul
            className="sidemenu  page-header-fixed slimscroll-style paddingTop20"
            data-keep-expanded="false"
            data-auto-scroll="true"
            data-slide-speed="200"
          >
            <li className="sidebar-toggler-wrapper hide">
              <div className="sidebar-toggler">
                <span></span>
              </div>
            </li>
            <li className="sidebar-user-panel">
              <div className="user-panel">
                <div className="pull-left image">
                  <img
                    src={require("../../assets/img/dp.jpg")}
                    className="img-circle user-img-circle"
                    alt=""
                  />
                </div>
                <div className="pull-left info">
                  <p> Uma Gutta </p>
                  <small>Admin</small>
                </div>
              </div>
            </li>
            <li className="nav-item active open">
              <Link to="/cards" className="nav-link nav-toggle">
                <i className="material-icons">how_to_reg</i>
                <span className="title">Facility Management</span>
                <span className="selected"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reports" className="nav-link nav-toggle">
                <i className="material-icons">group</i>
                <span className="title">Personal Liveboards</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/searchbar" href="#" className="nav-link nav-toggle">
                <i className="material-icons">recent_actors</i>
                <span className="title">Lease Management</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/iframe-sample"
                href="#"
                className="nav-link nav-toggle"
              >
                <i className="material-icons">recent_actors</i>
                <span className="title">Lease Management</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
