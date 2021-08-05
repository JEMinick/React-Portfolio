import React from "react";
// eslint-disable-next-line
import { BrowserRouter, Route, Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row d-flex">
          <div className="col-md-5">
            <h1>
              <p className="hdr-left">James E. Minick</p>
            </h1>
          </div>
          <div className="col">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <Link
                  to="/about"
                  className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                    About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/projects"
                  className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
                    Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                    Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/resume"
                  className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}>
                    Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
