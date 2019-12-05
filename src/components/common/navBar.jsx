import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/movies">
              Movies
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/customers">
              Customers
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/rentals">
              Rentals
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
