import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
export default function Navbar(props) {
  const navigate = useNavigate();

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <button
            className={`btn navbar-brand border-0 active mx-1 text-${
                       props.mode === "light" ? "dark" : "light"
              } `}
            aria-current="page"
            onClick={() => navigate("/")} // Use navigate to programmatically go to "/"
          >
            {props.title}
          </button>
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
                <button
                  className={`btn border-0 active mx-1 text-${props.mode === "light" ? "dark" : "light"} `}
                  aria-current="page"
                  onClick={() => navigate("/")} // Use navigate to programmatically go to "/"
                  >
                  Home
                </button>
              </li>
              <li className="nav-item ">
                <button
                  className={`btn border-0 active mx-1 text-${
                props.mode === "light" ? "dark" : "light"
              } `}
                  aria-current="page"
                  onClick={() => navigate("/About")} // Use navigate to programmatically go to "/"
                > 
                  {props.About}
                </button>
              </li>
            </ul>
            <button
              className={`btn btn-${
                props.mode === "light" ? "light" : "dark"
              } border-1 mx-3`}
              onClick={props.toggleMode}
            >
              {Text.mode}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };
