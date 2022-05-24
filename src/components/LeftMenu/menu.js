import React from 'react';
import { useNavigate } from "react-router-dom";
import SettingsContext from "../stateManagement/SettingsContext";
import topLeftFullLogo from "../../assets/img/logo.png";
import topLeftPartialLogo from "../../assets/img/icon.png";
import "./menu.css";

  const VerticalMenu = () => {
    const navigate = useNavigate ();
    const handleItemClick = (name) => {
      navigate(`/${name}`);
    }

    return (
      <SettingsContext.Consumer>
      { context => 
      (
        !context.settings.isMenuCollapsed === true ?
        <>
        <div className='topLeftDiv bannerHeight' onClick={() => handleItemClick('')}>
            <img src={topLeftFullLogo} alt="blue cloud"></img>
        </div>
        <div className="bgColor row">
          <div className='paddingTop50px'></div>
          <div className={`${context.settings.menuItem === 'facility' ? 'active' : 'hover'} itemContainer`}>
            <div className='menu' onClick={() => {context.selectMenu('facility'); handleItemClick('facility')}}>
              <div className='menuIconDiv'>
                <i className="flaticon-facility-management"/>
              </div>
              <div className='menuText'>
                <p className='menuTitle'>Facility Management</p>
              </div>
            </div>
            </div>
            <div className={`${context.settings.menuItem === 'lease' ? 'active' : 'hover'} itemContainer`}>
              <div className='menu' onClick={() => {context.selectMenu('lease'); handleItemClick('lease')}}>
                <div className='menuIconDiv'>
                  <i className="flaticon-contract"/>
                </div>
                <div className='menuText'>
                  <p className='menuTitle'>Lease Management</p>
                </div>
              </div>
            </div>
            <div className={`${context.settings.menuItem === 'property' ? 'active' : 'hover'} itemContainer`}>
              <div className='menu' onClick={() => {context.selectMenu('property'); handleItemClick('property')}}>
                <div className='menuIconDiv'>
                  <i className="flaticon-property"/>
                </div>
                <div className='menuText'>
                  <p className='menuTitle'>Property Management</p>
                </div>
              </div>
            </div>
            <div className={`${context.settings.menuItem === 'liveboards' ? 'active' : 'hover'} itemContainer`}>
              <div className='menu' onClick={() => {context.selectMenu('liveboards'); handleItemClick('liveboards')}}>
                <div className='menuIconDiv'>
                  <i className="flaticon-display"/>
                </div>
                <div className='menuText'>
                  <p className='menuTitle'>Personal Liveboards</p>
                </div>
              </div>
            </div>
          </div>
        </>
      :
      <>
        <div className='topLeftDivCollapsed' onClick={() => handleItemClick('')}>
            <img src={topLeftPartialLogo} alt="blue cloud"></img>
        </div>
        <div className="bgColorCollapsed row">
        <div className='paddingTop50px'></div>  
          <div className={`${context.settings.menuItem === 'facility' ? 'activeCollapsed' : 'hoverCollapsed'} itemContainerCollapsed`}>
              <div className='collapsedMenu' onClick={() => {context.selectMenu('facility'); handleItemClick('facility')}}>
                  <i className="flaticon-facility-management"/>
                </div>
            </div>
            <div className={`${context.settings.menuItem === 'lease' ? 'activeCollapsed' : 'hoverCollapsed'} itemContainerCollapsed`}>
              <div className='collapsedMenu' onClick={() => {context.selectMenu('lease'); handleItemClick('lease')}}>
                  <i className="flaticon-contract"/>
              </div>
            </div>
            <div className={`${context.settings.menuItem === 'property' ? 'activeCollapsed' : 'hoverCollapsed'} itemContainerCollapsed`}>
              <div className='collapsedMenu' onClick={() => {context.selectMenu('property'); handleItemClick('property')}}>
                  <i className="flaticon-property"/>
              </div>
            </div>
            <div className={`${context.settings.menuItem === 'liveboards' ? 'activeCollapsed' : 'hoverCollapsed'} itemContainerCollapsed`}>
              <div className='collapsedMenu' onClick={() => {context.selectMenu('liveboards'); handleItemClick('liveboards')}}>
                  <i className="flaticon-display"/>
              </div>
            </div>
        </div>
      </>
      )
      }
    </SettingsContext.Consumer>
    )
  }

export default VerticalMenu;