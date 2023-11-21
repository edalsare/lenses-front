import React from "react";
import "./header.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className="containerHeader">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          > 
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="/">
              LENSES
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Test yourself
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/components/pqrs">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <a className="btn btn-outline-success" type="submit" href="/components/login">
                Login
              </a>
            </form>
          </div> 
        </div>
      </nav>
    </div>
  );
};
export default Header;
