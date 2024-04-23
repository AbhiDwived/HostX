import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../Style/Bottom.css';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Optional: Adds smooth scrolling animation
  });
};

const Card = ({ title, links }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`col-md-2 ${showDropdown ? 'dropdown' : ''}`}>
      <div className={` d-flex justify-content-between align-items-center w-100 ${isMobile ? 'mobile-view' : ''}`} onClick={isMobile ? toggleDropdown : undefined}>
        <div>
          <h5 style={{ fontWeight: 'Extra Bold' }}>{title}</h5>
        </div>
        {isMobile && (
          <div>
            {showDropdown ? <FaMinus /> : <FaPlus />}
          </div>
        )}
      </div>
      <ul className={`list-unstyled ${showDropdown ? 'show-dropdown' : ''}`}>
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  );
};
const Bottom = () => {
  // Define the content for each card
  const aboutHostXContent = {
    title: 'About HostX',
    links: [
      <Link to="/About"  className="bottom-link" onClick={scrollToTop} key="aboutUsLink"> About Us</Link>,
      'Investor Relations',
      'Career',
      'Corporate Responsibility',
      'Trust Center',
      'Legal',
    ],
  };

  const helpCenterContent = {
    title: 'Help Center',
    links: ['Help Center', <Link to="/Contact" className="bottom-link" onClick={scrollToTop} key="contactLink">Contact Us</Link>, 'Report Abuse', 'Resources'],
  };

  const resourcesContent = {
    title: 'Resources',
    links: [
      <a href="https://store.techx.live/products/professional-email?" target="_blank" className="bottom-link" onClick={scrollToTop} key="webmailLink">Webmail</a>,
      <a href="https://www.secureserver.net/whois?plid=589497" target="_blank" className="bottom-link" onClick={scrollToTop} key="whoisLink">WHOIS</a>,
      <Link to="/services/website-app-builder" className="bottom-link" onClick={scrollToTop} key="hostXAppLink">HostX Mobile App</Link>,
      <a href="https://www.icann.org/" target="_blank" className="bottom-link" onClick={scrollToTop} key="icannConfirmationLink">ICANN Confirmation</a>,
      <Link to="/services/domain-email-reg" className="bottom-link" onClick={scrollToTop} key="corporateDomainsLink">Corporate Domains</Link>,
      'Redeem Code',
    ],
  };

  const accountContent = {
    title: 'Account',
    links: ['My Products', 'Renewals & Billing', 'Create Account'],
  };

  const shoppingContent = {
    title: 'Shopping',
    links: [
      <Link to="/services/domain-email-reg" className="bottom-link" onClick={scrollToTop} key="domainEmailRegLink">Domain & Email Registration</Link>,
      <Link to="/services/web-hoisting" className="bottom-link" onClick={scrollToTop} key="webHostingLink">Web Hosting</Link>,
      <Link to="/services/ssl-certificates" className="bottom-link" onClick={scrollToTop} key="sslCertificatesLink">SSL Certificates</Link>,
      <Link to="/services/website-app-builder" className="bottom-link" onClick={scrollToTop} key="websiteAppBuilderLink">Website & App Builder</Link>,
      <Link to="/services/manage-services" className="bottom-link" onClick={scrollToTop} key="managedServicesLink">Managed Services</Link>,
      <Link to="/services/security-services" className="bottom-link" onClick={scrollToTop} key="securityServicesLink">Security Services</Link>,
      <Link to="/services/backup-solutions" className="bottom-link" onClick={scrollToTop} key="backupSolutionsLink">Backup Solutions</Link>,
    ],
  };

  return (
    <div className="background">
      <div className="container">
        <div className="row justify-content-between">
          <Card {...aboutHostXContent} />
          <Card {...helpCenterContent} />
          <Card {...resourcesContent} />
          <Card {...accountContent} />
          <Card {...shoppingContent} />
        </div>
      </div>

      <footer className="container mt-5">
        {/* 1st Row */}
        <div className="row">
          <div className="col-sm-2">
            {/* Logo */}
            <img src="images/Home/Footer.png" alt="Logo" height="40" />
            <p className='text-white'> <strong>Registered Co. No-12496203</strong></p>
          </div>
          <div className="col-sm-6">
            {/* Terms and Policies */}
            {/* <p className='text-white'>Terms of Use |Privacy Policy |Trademarks |License Agreements</p> */}
            <ul className="list-inline">
              <li className="list-inline-item">Terms of Use |</li>
              <li className="list-inline-item">Privacy Policy |</li>
              <li className="list-inline-item">Trademarks |</li>
              <li className="list-inline-item">License Agreements</li>
            </ul>
            <p className='Small-Text'> Copyright © 2024, HostX Operating Company, Ltd. All Rights Reserved. The HOSTX word mark is a registered trademark of HostX Operating Company.</p>
         
          </div>
          <div className="icon col-sm-3 mt-4 ">
            {/* Social Media Icons */}
            <div className="col-sm-2 mx-auto d-flex ">
              {/* Font Awesome Icons */}
              <a href="https://www.instagram.com/hostxuk?igsh=MThjMnQxem5jaG1sZw==" target="_blank" class="social-link">
                <i className="fab fa-instagram fa-lg px-3"></i>
              </a>

              <a href="https://www.facebook.com/profile.php?id=61554709028307" target="_blank" class="social-link">
                <i className="fab fa-facebook-f fa-lg px-3"></i>
              </a>

              <a href="https://x.com/hostxuk/status/1749461725512945746?s=46" target="_blank" class="social-link">
                <i className="fab fa-twitter fa-lg px-3"></i>
              </a>

              <a href="https://www.linkedin.com/company/hostxuk/" target="_blank" class="social-link">
                <i className="fab fa-linkedin-in fa-lg px-3"></i>
              </a>
              <a href="https://youtube.com/@hostxuk?si=6VOyOWu8SA1p1K30" target="_blank" className="social-link">
                <i className="fab fa-youtube fa-lg px-3"></i>
              </a>
              <a href="https://www.tiktok.com/@hostxuk?_t=8jJ3TcXAfyq&_r=1" target="_blank" className="social-link">
                <i className="fab fa-tiktok fa-lg px-3"></i>
              </a>
            </div>
          </div>
        </div>

        
        <div className="row mt-2">
          <div className="col-sm-10">
           
            <p className='Small-Text'>Use of this Site is subject to express terms of use.</p>
            <p className='Small-Text'> By using this site, you signify that you agree to be bound by these<strong style={{ marginLeft: '10px', color: '#fff' }}>Universal Terms of Service.</strong> </p>
          </div>
          <div className="col-sm-2 mx-auto d-flex justify-content-end">
            {/* Developed by TechX */}
            <p> Developed by </p> <strong style={{ marginLeft: '20px', color: '#fff' }}>HostX</strong>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Bottom;
