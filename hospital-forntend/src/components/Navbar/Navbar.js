// components/Navbar/Navbar.js

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImage from "../../images/aayushakti.png";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img id="brand-logo" src={logoImage} alt="Logo" />
        </Link>

        <div className="justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/service">
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/doctors">
                Doctors
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            {isAuthenticated ? (
              <li className="nav-item">
                <button className="btn btn-logout" onClick={logout}>
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="btn btn-login" to="/login">
                  Login
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="btn btn-appointment" to="/appointment">
                Make an Appointment
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
