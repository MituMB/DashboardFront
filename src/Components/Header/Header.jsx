import React from 'react'
import './Header.scss'
import { AiOutlineAlignLeft } from "react-icons/ai";

const Header = ({toggleSidebar}) => {
  return (
    <div className="header">
        <button onClick={toggleSidebar} className="bar"><AiOutlineAlignLeft /></button>
        <div>
          <h2>Welcome to Dashboard Analysis System test</h2>
        </div>
        <div>
        Header widgets
        </div>
        
        </div>
  )
}

export default Header