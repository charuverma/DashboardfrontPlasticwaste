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
            <a className="nav-link" href="/Rolelist">
              <p>Role</p>
            </a>
          </li>

          <li className="nav-item ">
            <a className="nav-link" href="/categorylist">
              <p>CategoryList</p>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/showproduct">
              <p>Productlist</p>
            </a>
          </li>
         
        </ul>
      </div>
    </div>
  );
};
