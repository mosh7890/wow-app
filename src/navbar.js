import React from "react";

const NavBar = () =>
  <div className="container-fluid">
    <div className="row">
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li>
              <a href="#">
                Home<span
                  className="glyphicon glyphicon-home"
                  aria-hidden="true"
                />
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-user" /> Register
              </a>
            </li>
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-log-in" /> Login
              </a>
            </li>
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-log-out" /> Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div ui-view />
    </div>
  </div>;

export default NavBar;
