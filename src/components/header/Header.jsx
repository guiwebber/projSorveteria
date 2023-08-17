import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import './header.css'
function Header() {
  return (
    <header className="header">
      <div className="flex maxWidth">
        <div className="divLogo">
          <img className="logo" src={logo} alt="" />
        </div>
        <nav className="nav">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/sabores">
            Sabores
          </Link>
          <Link className="link" to="/sobre">
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
