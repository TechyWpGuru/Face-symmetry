import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-light py-4"
      
    >
      <div className="container">
        <div className="row">
          {/* Logo */}
          <div className="col-md-4">
            <div className="text-center text-md-start mb-3 mb-md-0">
              <a href="https://www.face-symmetry-test.com/">
                <img
                  className="h-30px"
                  src="https://www.face-symmetry-test.com/static/images/logo.svg"
                  alt="Face Symmetry Test Logo"
                />
              </a>
            </div>
          </div>
          {/* Navigation */}
          <div className="col-md-8">
            <ul className="list-inline mb-0 text-center text-md-end">
              <li className="list-inline-item me-md-4">
                <a
                  className="text-dark"
                  href="https://www.face-symmetry-test.com/"
                >
                  Home
                </a>
              </li>
              <li className="list-inline-item me-md-4">
                <a
                  className="text-dark"
                  href="https://www.face-symmetry-test.com/other-tools"
                >
                  Other Tools
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="text-dark"
                  href="https://www.face-symmetry-test.com/data_privacy"
                >
                  Data Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Additional Information */}
        <div className="row mt-3 text-dark">
          <div className="col text-center">
            <hr
              style={{
                height: "3px", // Adjust the height as needed
                width: "100%", // Set the width to 100% to span the entire container
                background:
                  "linear-gradient(261.84deg, #8A2BE2 30.58%, #A52A2A 81.26%, rgba(64, 224, 208, 0.81) 136.94%)",
                border: "none", // Remove default border
              }}
            />

            <p className="mb-0">
              &copy; {new Date().getFullYear()} Face Symmetry Test. All rights
              reserved.
            </p>
            {/* Social Icons */}
            <ul className="list-inline">
              <li className="list-inline-item me-3">
                <a href="https://twitter.com/" className="">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a href="https://www.instagram.com/" className="">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.facebook.com/" className="">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
