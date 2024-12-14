import React, { useEffect, useState } from "react";
import { handleError } from "../../Utils";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import "./MainLayout.scss"
import '@progress/kendo-theme-default/dist/all.css';

const MainLayout = ({children}) => {
  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://localhost:7052/api/v1.0/Home/MenuList";
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setMenuList(result.menuList);
      } catch (err) {
        handleError("Error Fetching Data.");
      }
    };

    fetchData();
  }, []);


  const [isOpen, setIsOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    // <div>
    //   <h1>Menu List</h1>
    //   <ul>
    //     {menuList.map((menuItem, index) => (
    //       <li key={index} > {menuItem.menuName} </li>
    //     ))}
    //   </ul>
    // </div>

    <div className="layout">
      {/* <Sidebar isOpen={isOpen} menuList={menuList}/> */}
   
      <div className="main">
        <Header toggleSidebar={handleToggleSidebar}/>
        <div className="content">
          {/* <p>widgets will go here...</p> */}

          {children}
        </div>
      </div>
    </div>
    
  );
};

export default MainLayout;
