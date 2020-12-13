import React from 'react';
import './Footer.scss';

import { Link } from 'react-router-dom';

import cygnusLogo from '../../assets/images/cygnus-logo-2.png';

function Footer(): JSX.Element {
  return (
    <footer className="Footer">
      <div className="footer-contact-section">
        <Link to="home" className="footer-logo">
          <img src={cygnusLogo} alt="project cygnus logo" />
        </Link>
        <p>Iomancer Studios &copy; 2020</p>
        <p>+234908004116</p>
        <p>meljatau&#64;gmail.com</p>
      </div>

      <div className="footer-links-section">
        <div className="footer-links">
          <Link to="about" className="footer-link">
            About
          </Link>
          <Link to="worlds" className="footer-link">
            Worlds
          </Link>
          <Link to="missions" className="footer-link">
            Missions
          </Link>
          <Link to="starview" className="footer-link">
            Starview
          </Link>
        </div>
        <div className="footer-phrase-large">
          a step for you.
          <br />
          a leap for humanity.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
