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
            QuickBook{" "}
          </Link>
        </a>

        <ul id="mobile-demo" className="right hide-on-med-and-down">
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
