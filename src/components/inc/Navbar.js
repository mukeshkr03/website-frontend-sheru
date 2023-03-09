import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-white fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            style={{ cursor: "pointer", marginLeft: "15px"}}
            height="35px"
            src="https://demo.studiopress.com/monochrome/files/2017/03/logo.png"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Layouts">
                Layouts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Sample">
                Sample
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Getenberg">
                GetenbergOptimized
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
