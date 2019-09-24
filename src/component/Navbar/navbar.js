import React from "react";
import "./navbar.scss";
import logo from "../../image/city_tour.png";

function navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tour" width="80" height="80" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default navbar;
