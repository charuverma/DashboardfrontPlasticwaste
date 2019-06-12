import React from "react";
export default props => {
  return (
    <div className="sidebar" data-color="purple" data-background-color="white">
      <div className="sidebar-wrapper">
        <ul className="nav">
          <li className="nav-item active  ">
            <a className="nav-link" href="/Dashboard">
              <p>Dashboard</p>
            </a>
          </li>
         
            <li className="nav-item ">
              <a className="nav-link" href="./registerlist">
                <p>Customer Details</p>
              </a>
            </li>
      
          <li className="nav-item ">
            <a className="nav-link" href="/productlist">
              <p>Product List</p>
            </a>
          </li>

          <li className="nav-item ">
            <a className="nav-link" href="./map.html">
              <p>Maps</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./notifications.html">
              <p>Notifications</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
