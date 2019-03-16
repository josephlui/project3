import React from "react";
import { Link } from "react-router-dom";

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
            <Link
              to="/appointments"
              className={
                window.location.pathname === "/appointments"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Appointment{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/connections"
              className={
                window.location.pathname === "/connections"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Profile{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className={
                window.location.pathname === "/login"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Login{" "}
            </Link>{" "}
          </li>
          <li>
            <Link
              to="/register"
              className={
                window.location.pathname === "/register"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Register{" "}
            </Link>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
