import React, { useState } from 'react';
import { Menu, List, Icon } from 'semantic-ui-react';
import { useNavigate, Link  } from "react-router-dom";
import SettingsContext from "../stateManagement/SettingsContext"
import "./index.css";

  const VerticalMenu = () => {

    const navigate = useNavigate ();
    const [activeItem, setActiveItem] = useState('facility');
    const handleItemClick = (e, { name }) => {
      setActiveItem(name);
      navigate(`/${name}`);
    }

    return (
      <SettingsContext.Consumer>
      { context => 
      (
        !context.settings.isMenuCollapsed === true ?
        <>
        {/* 
          Uncomment if you want align the icon to the right
          <div class="rightAlign">
          <Icon name='angle double left' link onClick={() => context.setIsMenuCollapsed(!context.settings.isMenuCollapsed)} />
        </div> 
        */}
        <Icon name='angle double left' link onClick={() => context.setIsMenuCollapsed(!context.settings.isMenuCollapsed)} />
        <Menu pointing vertical>
          <Menu.Item
            name='facility'
            active={activeItem === 'facility'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='lease'
            active={activeItem === 'lease'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='property'
            active={activeItem === 'property'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='liveboards'
            active={activeItem === 'liveboards'}
            onClick={handleItemClick}
          />
        </Menu>
        </>
      :
        <>
        <Icon name='angle double right' link onClick={() => context.setIsMenuCollapsed(!context.settings.isMenuCollapsed)}/>
        <List>
          <List.Item>
            <Link to="/facility">
              <List.Icon className='paddingBottom10px' name='users' size='large'/>
            </Link>
          </List.Item>
          <List.Item>
            <Link to="/lease">
              <List.Icon className='paddingBottom10px' name='marker' size='large'/>
            </Link>
          </List.Item>
          <List.Item>
            <Link to="/property">
              <List.Icon className='paddingBottom10px' name='mail' size='large'/>
            </Link>
          </List.Item>
          <List.Item>
            <Link to="/liveboards">
              <List.Icon className='paddingBottom10px' name='linkify' size='large'/>
            </Link>
          </List.Item>
        </List>
        </>
      )
      }
    </SettingsContext.Consumer>
    )
  }

export default VerticalMenu;