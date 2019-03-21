import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let token = sessionStorage.getItem("token");
  var loginDiv = token ? (
    ""
  ) : (
    <li>
      <a
        href="/login"
        className={
          window.location.pathname === "/login" ? "nav-link active" : "nav-link"
        }
      >
        Login{" "}
      </a>{" "}
    </li>
  );
  var appointmentDiv = token ? (
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
  ) : (
    ""
  );
  var connectionsDiv = token ? (
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
  ) : (
    ""
  );
  var logoutDiv = token ? (
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
  ) : (
    ""
  );
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
              AppointJS{" "}
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
            {loginDiv}
            {appointmentDiv}
            {connectionsDiv}
            {logoutDiv}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
