import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import '../Style/Navbar.css';
import 'font-awesome/css/font-awesome.min.css';
import NavLogo from "../assets/Images/Navbar-Logo.png"

function Navbar() {
  const [navbarShow, setNavbarShow] = useState(false);
  const [exploreShow, setExploreShow] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarShow(!navbarShow);
    setExploreShow(false); // Close Explore when Navbar is toggled
  };

  const handleExploreToggle = () => {
    setExploreShow(!exploreShow);
    setNavbarShow(false); // Close Navbar when Explore is toggled
  };

  const handleNavLinkClick = () => {
    setNavbarShow(false);
    setExploreShow(false);
  };

  return (
    <div>
      <Header />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid fstyle">
          <NavLink to="/" className="navbar-logo-link">
            <img
              className="navbar-logo img-fluid"
              src={NavLogo} // Replace with the actual path to your image
              alt=""
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleNavbarToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${navbarShow ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page" onClick={handleNavLinkClick}>
                  HOME
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  id="featuresDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICES
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="featuresDropdown">
                  <li>
                    <NavLink to="/services/domain-email-reg" className="dropdown-item" onClick={handleNavLinkClick}  >
                      Domain & Email Registration
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/services/web-hoisting' className="dropdown-item" onClick={handleNavLinkClick} >
                      Web Hosting
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to='/services/ssl-certificates' className="dropdown-item" onClick={handleNavLinkClick} >
                      SSL Certificates
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/website-app-builder" className="dropdown-item" onClick={handleNavLinkClick} >
                      Website $ App Builder
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/manage-services" className="dropdown-item" onClick={handleNavLinkClick} >
                      Managed Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/security-services" className="dropdown-item" onClick={handleNavLinkClick} >
                      Security Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/backup-solutions" className="dropdown-item" onClick={handleNavLinkClick} >
                      Backup Solutions
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink to="/suport" className="nav-link" onClick={handleNavLinkClick}>
                  SUPPORT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" onClick={handleNavLinkClick}>
                  CONTACT
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" onClick={handleExploreToggle}>
                  EXPLORE
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link" onClick={handleNavLinkClick}>
                  LOGIN
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Sidebar show={exploreShow} onClose={() => setExploreShow(false)} />
      {/* <hr /> */}
    </div>
  );
}

export default Navbar;