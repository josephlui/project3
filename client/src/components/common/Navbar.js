import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="teal lighten-1">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo left">
          Project 3
        </a>
        <a
          href="/"
          data-activates="mobile-demo"
          className="button-collapse right"
        >
          <i className="material-icons">menu</i>
        </a>
        <ul id="mobile-demo" className="right hide-on-med-and-down">
          <li>
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li>
            <Link to="/About">Appointment Booking App</Link>
          </li>
          <li>
            <Link to="/WhoWeLinkre">Who we are</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Register">Create Account</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
