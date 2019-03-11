import React from "react";

const Navbar = () => {
  return (
    <nav className="teal lighten-1">
      <div className="nav-wrapper">
        <a href="#about" className="brand-logo left">
          Project 3
        </a>
        <a
          href="#about"
          data-activates="mobile-demo"
          className="button-collapse right"
        >
          <i className="material-icons">menu</i>
        </a>
        <ul id="mobile-demo" className="right hide-on-med-and-down">
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#about">Appointment Booking App</a>
          </li>
          <li>
            <a href="#about">Who we are</a>
          </li>
          <li>
            <a href="#about">Login</a>
          </li>
          <li>
            <a href="#about">Create Account</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
