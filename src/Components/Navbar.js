import "./Style/Navbar.css";
import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bgn-${props.mode}`}>
      <div className="container-fluid">
        <a className={`navbar-brand nb-${props.mode}`} href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link nb-${props.mode}`}
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <Link className={`nav-link nb-${props.mode}`} to="/about">
                {props.about}
              </Link>
            </li> */}
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2 shadow-none border-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
          <div className="form-check form-switch">
            <input
              className={`form-check-input bg-${props.mode} mx-1 shadow-none border-0`}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set Title Here",
  about: "About",
};
