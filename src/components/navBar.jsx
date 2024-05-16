// import React from "react";
import "./NavBar.css"; // Import CSS file for custom styling

const NavBar = () => {

  return (
    <header className="navbar-light header-sticky">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="/">
            <img
              className="light-mode-item navbar-brand-item"
              src="https://www.face-symmetry-test.com/static/images/logo.svg"
              alt="logo"
            />
          </a>
          {/* Responsive navbar toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Main navbar */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* Nav item: Check Face Symmetry */}
              <li className="nav-item">
                <a
                  className="nav-link nav-item-style"
                  href="#check_face_symmetry"
                >
                  Check Face Symmetry
                </a>
              </li>
              {/* Nav item: FAQ */}
              <li className="nav-item">
                <a className="nav-link nav-item-style" href="#faq">
                  FAQ
                </a>
              </li>
              {/* Nav item: Tips */}
              <li className="nav-item">
                <a className="nav-link nav-item-style" href="#tipsSection">
                  Tips
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
