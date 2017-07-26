import React from "react";
// import { browserHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () =>
  <div className="container-fluid">
    <div className="row">
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">
                Home{" "}
                <span className="glyphicon glyphicon-home" aria-hidden="true" />
              </Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/Register">
                Register{" "}
                <span className="glyphicon glyphicon-user" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link to="/">
                Login{" "}
                <span
                  className="glyphicon glyphicon-log-in"
                  aria-hidden="true"
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                Logout{" "}
                <span
                  className="glyphicon glyphicon-log-out"
                  aria-hidden="true"
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>;

export default NavBar;
