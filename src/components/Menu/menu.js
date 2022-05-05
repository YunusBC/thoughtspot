import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { useNavigate  } from "react-router-dom";

  const VerticalMenu = () => {

    const [activeItem, setActiveItem] = useState('facility');
    const navigate = useNavigate ();

    const handleItemClick = (e, { name }) => {
      setActiveItem(name);
      navigate(`/${name}`);
    }

    return (
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
    )
  }

export default VerticalMenu;