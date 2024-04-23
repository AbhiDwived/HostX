import React from 'react';
import '../Style/Header.css';

const Header = () => {
  return (
    <div className="header row mx-auto ">
      {/* 1st part: col-sm-6 (changed from col-sm-7) */}
      <div className="col-sm-6 col-md-8 col-lg-7 ">
        <span className="title mb-2">Welcome To HostX </span>
        <span className="contact">
          <i className="fas fa-phone-alt"></i> 0330 - 043 - 8480
          <span className="email ">
            <i className="fas fa-envelope"></i> support@hostx.live
          </span>
        </span>
      </div>

      {/* 2nd part: col-sm-4 */}
      <div className="col-sm-4 col-md-4 col-lg-5 ">
        <span className="social-icons">
        <a href="https://www.instagram.com/hostxuk?igsh=MThjMnQxem5jaG1sZw==" target="_blank" class="social-link">
                <i className="fab fa-instagram fa-lg"></i>
              </a>

              <a href="https://www.facebook.com/profile.php?id=61554709028307" target="_blank" class="social-link">
                <i className="fab fa-facebook-f fa-lg "></i>
              </a>

              <a href="https://x.com/hostxuk/status/1749461725512945746?s=46" target="_blank" class="social-link">
                <i className="fab fa-twitter fa-lg "></i>
              </a>

              <a href="https://www.linkedin.com/company/hostxuk/" target="_blank" class="social-link">
                <i className="fab fa-linkedin-in fa-lg "></i>
              </a>
              <a href="https://youtube.com/@hostxuk?si=6VOyOWu8SA1p1K30" target="_blank" className="social-link">
                <i className="fab fa-youtube fa-lg "></i>
              </a>
              <a href="https://www.tiktok.com/@hostxuk?_t=8jJ3TcXAfyq&_r=1" target="_blank" className="social-link">
                <i className="fab fa-tiktok fa-lg "></i>
              </a>
        </span>
      </div>
    </div>
  );
};

export default Header;