import React, { useState } from 'react';
import { useNavigate, Link  } from "react-router-dom";
import SettingsContext from "../stateManagement/SettingsContext";
import topLeftFullLogo from "../../assets/img/logo.png";
import topLeftPartialLogo from "../../assets/img/icon.png";
import "./menu.css";

  const VerticalMenu = () => {

    const navigate = useNavigate ();
    const [activeItem, setActiveItem] = useState('');
    const handleItemClick = (name) => {
      setActiveItem(name);
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
          <div></div>
          <div>
            <div className={`${activeItem === 'facility' ? 'active' : 'hover'} `} onClick={() => handleItemClick('facility')}>
              <div className='menuIconDiv'>
                <i className="flaticon-facility-management"/>
              </div>
              <div className='menuText'>
                <p className='menuTitle'>Facility Management</p>
              </div>
            </div>
          </div>
          <div>
            <div className={`${activeItem === 'lease' ? 'active' : 'hover'} `} onClick={() => handleItemClick('lease')}>
              <div className='menuIconDiv'>
                <i className="flaticon-contract"/>
              </div>
              <div className='menuText'>
                <p className='menuTitle'>Lease Management</p>
              </div>
            </div>
          </div>
          <div>
            <div className={`${activeItem === 'property' ? 'active' : 'hover'} `} onClick={() => handleItemClick('property')}>
              <div className='menuIconDiv'>
                <i className="flaticon-property"/>
              </div>
              <div className='menuText'>
                <p className='menuTitle'>Property Management</p>
              </div>
            </div>
          </div>
          <div>
            <div className={`${activeItem === 'liveboards' ? 'active' : 'hover'} `} onClick={() => handleItemClick('liveboards')}>
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
        <div className="bgColor row">   
          <div>
            <div className={`${activeItem === 'facility' ? 'activeCollapsed' : 'hoverCollapsed'} `} onClick={() => handleItemClick('facility')}>
              <div className='menuIconDiv'>
                <i className="flaticon-facility-management"/>
              </div>
            </div>
          </div>
          <div>
            <div className={`${activeItem === 'lease' ? 'activeCollapsed' : 'hoverCollapsed'} `} onClick={() => handleItemClick('lease')}>
              <div className='menuIconDiv'>
                <i className="flaticon-contract"/>
              </div>
            </div>
          </div>
          <div>
            <div className={`${activeItem === 'property' ? 'activeCollapsed' : 'hoverCollapsed'} `} onClick={() => handleItemClick('property')}>
              <div className='menuIconDiv'>
                <i className="flaticon-property"/>
              </div>
            </div>
          </div>
          <div>
            <div className={`${activeItem === 'liveboards' ? 'activeCollapsed' : 'hoverCollapsed'} `} onClick={() => handleItemClick('liveboards')}>
              <div className='menuIconDiv'>
                <i className="flaticon-display"/>
              </div>
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