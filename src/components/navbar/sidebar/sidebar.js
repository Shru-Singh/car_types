import "./sidebar.css";

function Sidebar({ state, closeHandler }) {
  return (
    <>
      {state ? (
        <div className="sidebar">
          <div className="sidebarDrawer">
            <div className="cross">
              <img src="Images/cross.png" alt="" onClick={closeHandler} />
            </div>
            <div className="menuList">
              <div className="menuListItem">
                <p>
                  <a href="/">Refresh</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Sidebar;
