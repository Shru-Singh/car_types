import './navbar.css';
import React, { useState } from "react";
import Sidebar from "./sidebar/sidebar";
import Backdrop from "./backdrop";


function Navbar({ page }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const drawerOpenHandler = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const backdropClickHandler = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerLeft">
          <div className="carOptions">Car<span>Options</span></div>
        </div>
        <div className="headerRight">
          <div className="menuList">
            <div className="menuListItem">
              <p><a href="/">Refresh</a></p>
            </div>
          </div>

          <div className="drawerOpener" onClick={drawerOpenHandler}>
            <img src="Images/menu.png" alt="" />
          </div>
          {sidebarOpen ? <Sidebar state={true} closeHandler={backdropClickHandler}/> : <Sidebar state={false} />}
          {sidebarOpen ? (
            <Backdrop closeHandler={backdropClickHandler} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;