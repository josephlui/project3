import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="teal lighten-1">
      <div className="nav-wrapper">
        <a href="#about" className="brand-logo left">
          <Link
            to="/"
            className={
              window.location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Project 3{" "}
          </Link>
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
              to="/"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home{" "}
            </Link>{" "}
          </li>
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
