import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="teal lighten-1">
        <div className="nav-wrapper">
          <div className="brand-logo left">
            <Link
              to="/"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              QuickBook{" "}
            </Link>
          </div>
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
            <li>
              <Link
                to="/logout"
                className={
                  window.location.pathname === "/logout"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Logout{" "}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
