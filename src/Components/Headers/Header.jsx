import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import main_logo from "../../assets/main_logo.png";
function Header() {
  return (
    <header onClick={() => window.scroll(0, 0)} className="header">
      <div>
        <img className="logo" src={main_logo} alt="" />
        <span className="slogan">DreamFlix</span>
      </div>
      
    </header>
  );
}

export default Header;
