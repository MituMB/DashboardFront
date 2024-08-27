import React from 'react'
import { Link } from 'react-router-dom'

const MenuItems = ({menu}) => {
  return (
    <>
    <li className="menu">
        {
            menu.submenus ? ( <>
              <p className="title">Parent menu || {menu.menuName}</p>
              <ul className="dropdown">
                {menu.submenus.map((submenu, index) => (
                    <li key={index} className="menu-items">
                    <Link to={submenu.url}>{submenu.title}</Link>
                    </li>
                ))}
                </ul>
            
            </>) : (

                <Link to={menu.pageURL}>{menu.menuName} </Link>
            )
        }
    </li>
    </>
  )
}

export default MenuItems