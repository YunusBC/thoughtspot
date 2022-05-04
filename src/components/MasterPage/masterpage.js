import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { ReactComponent as LogoDark } from '../../assets/img/logo-dark.svg';

const MasterPage = () => {
  return (   
    <div className="page-header navbar navbar-fixed-top">
    <div className="page-header-inner">
        <div className="page-logo">
            <a href="/"> 
            <span className="logo-dark">
                <LogoDark></LogoDark> </span>
            </a>
        </div>
<ul className="nav navbar-nav navbar-left in">
  <li><a  className="menu-toggler sidebar-toggler font-size-20"><i className="fa fa-exchange" aria-hidden="true"></i></a></li>
</ul>
                
        <ul className="nav navbar-nav navbar-left in">
            <li><a  className="fullscreen-click font-size-20"><i className="fa fa-arrows-alt"></i></a></li>
        </ul>

        <ul className="nav navbar-nav navbar-left in">
  <li><Link to="/searchbar" className="menu-toggler sidebar-toggler font-size-20"><i className="fa fa-search" aria-hidden="true"></i></Link></li>
</ul>
        <a  className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
            <span></span>
        </a>
       <div className="top-menu">
       
        <ul className="nav navbar-nav pull-right">
            <li className="dropdown dropdown-extended dropdown-notification" >
                <a  className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                    <i className="material-icons">notifications</i>
                    <span className="notify"></span>
                </a>
                <ul className="dropdown-menu">
                    <li className="external">
                        <h3><span className="bold">Notifications</span></h3>
                        <span className="notification-label red-bgcolor">New 6</span>
                    </li>
                    <li>
                        <ul className="dropdown-menu-list small-slimscroll-style" data-handle-color="#637283">
                            <li>
                                <a>
                                    <span className="time">just now</span>
                                    <span className="details">
                                    <span className="notification-icon circle deepPink-bgcolor"><i className="fa fa-check"></i></span> Congratulations!. </span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span className="time">3 mins</span>
                                    <span className="details">
                                    <span className="notification-icon circle red-bgcolor"><i className="fa fa-user o"></i></span>
                                    <b>John Micle </b>is now following you. </span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span className="time">7 mins</span>
                                    <span className="details">
                                    <span className="notification-icon circle blue-bgcolor"><i className="fa fa-comments-o"></i></span>
                                    <b>Sneha Jogi </b>sent you a message. </span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span className="time">12 mins</span>
                                    <span className="details">
                                    <span className="notification-icon circle pink"><i className="fa fa-heart"></i></span>
                                    <b>Ravi Patel </b>like your photo. </span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span className="time">15 mins</span>
                                    <span className="details">
                                    <span className="notification-icon circle yellow"><i className="fa fa-warning"></i></span> Warning! </span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span className="time">10 hrs</span>
                                    <span className="details">
                                    <span className="notification-icon circle red"><i className="fa fa-times"></i></span> Application error. </span>
                                </a>
                            </li>
                        </ul>
                        <div className="dropdown-menu-footer">
                            <a> All notifications </a>
                        </div>
                    </li>
                </ul>
            </li>
             <li className="dropdown dropdown-user">
                <a  className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                    <img alt="" className="img-circle " src="assets/img/dp.jpg" />
                </a>
                <ul className="dropdown-menu dropdown-menu-default">
                    <li>
                        <a>
                            <i className="fa fa-user"></i> My Account </a>
                    </li>
                    <li>
                        <a>
                            <i className="fa fa-cogs"></i> Change Password
                        </a>
                    </li>
                </ul>
            </li>
            <li className="dropdown dropdown-quick-sidebar-toggler">
                 <a id="headerSettingButton" className="mdl-button mdl-js-button mdl-button--icon pull-right" data-upgraded="MaterialButton">
                   <i className="material-icons">logout</i>
                </a>
            </li>
        </ul>  
    </div>
      
    </div>
</div>
  )
}

export default MasterPage;