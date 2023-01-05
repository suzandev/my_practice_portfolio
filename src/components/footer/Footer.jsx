import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="/" className="footer__logo">
        Suzan<span className="footer__logo-two">Chandra</span>
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <BsFacebook />
        </a>
        <a href="https://instagram.com">
          <BsInstagram />
        </a>
        <a href="https://twitter.com">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SuzanChandra, All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
