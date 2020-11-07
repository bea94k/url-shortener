import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      © Bea Kuśnierz
      <a
        href="https://github.com/bea94k/url-shortener"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className="footer-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/beatakusnierz94/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
      </a>
    </footer>
  );
};

export default Footer;
