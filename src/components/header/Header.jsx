import React from "react";
import ME from "../../assets/me.png";
import CTA from "./CTA";
import "./header.css";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>
          Suzan<span className="header__logo-second">Chandra</span>
        </h1>
        <h5 className="text-light">Forntend Developer</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Me img" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

// 46.56
