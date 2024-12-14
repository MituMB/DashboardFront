import React, { useEffect, useState } from "react";
import { handleError } from "../../Utils";
import Sidebar from "../../SharedComp/Sidebar/Sidebar";
import Header from "../../SharedComp/Header/Header";
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


  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (


    <div className="layout">
      <Sidebar isOpen={isOpen} menuList={menuList}/>
   
      <div className="main" style={{paddingLeft: isOpen ? "0px" : "300px"}}>
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
