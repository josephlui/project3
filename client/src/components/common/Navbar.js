import React from "react";

const Navbar = () => {
  return (
    <nav className="teal lighten-1">
      <div className="nav-wrapper">
        <a href="" className="brand-logo left">
          Project 3
        </a>
        <a
          href="#"
          data-activates="mobile-demo"
          className="button-collapse right"
        >
          <i className="material-icons">menu</i>
        </a>
        <ul id="mobile-demo" className="right hide-on-med-and-down">
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Appointment Booking App</a>
          </li>
          <li>
            <a href="">Who we are</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
          <li>
            <a href="">Create Account</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
