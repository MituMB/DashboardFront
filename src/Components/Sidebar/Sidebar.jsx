import React, { useState } from 'react'
import './Sidebar.scss'
import MenuItems from '../MenuItems/MenuItems';
const Sidebar = ({isOpen, menuList}) => {
 
  return (
    <div className={`sidebar ${isOpen  ? 'active' : ''}`}>
      <div className="brand_name p-3">
        <h3>Masco Dashboards</h3>
      </div>

      <div className="menu_holder">
      <ul className="menus">
        {menuList.map((menu, index) => {
          return <MenuItems menu={menu} key={index} />;
        })}
      </ul>
      </div>
    </div>
  )
}

export default Sidebar