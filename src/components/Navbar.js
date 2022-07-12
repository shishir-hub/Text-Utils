import "./navbar.css";
import React from "react";
import PropTypes from "prop-types";
import "./ColorPallet.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const changeTheme = (selTheme, selMode) => {
    console.log(selTheme);
    document.body.style.backgroundColor = selTheme;
    props.setMode(selMode);
  };
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div
              className={`form-check form-switch mx-2 my-2 text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
            </div>
            <div
              className="red mx-1 my-1"
              onClick={() => changeTheme("red", "danger")}
            ></div>
            <div
              className="blue mx-1 my-1"
              onClick={() => changeTheme("blue", "primary")}
            ></div>
            <div
              className="green mx-1 my-1"
              onClick={() => changeTheme("green", "success")}
            ></div>
            <div
              className="grey mx-1 my-1"
              onClick={() => changeTheme("grey", "secondary")}
            ></div>
            <div
              className="yellow mx-1 my-1"
              onClick={() => changeTheme("yellow", "warning")}
            ></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutTitle: PropTypes.string,
};

Navbar.defaultProps = {
  title: "set title here",
  aboutText: "set text here",
};
