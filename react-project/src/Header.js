// Header.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header-content">
        <div className="logo-container">
          <div className="animated-logo">🏏</div>
          <h1 className="header-title">
            <span className="title-gradient">Web Cricket</span>
          </h1>
        </div>

        <nav className="nav-menu active">
          <ul className="nav-list">
            {/* Make sure the Home link navigates to "/home" */}
            <li className="nav-item">
              <Link to="/matches" className="nav-link">
                <span className="link-icon">🎯</span>
                <span className="link-text">Game Content</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                <span className="link-icon">🏠</span>
                <span className="link-text">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <span className="link-icon">📖</span>
                <span className="link-text">About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                <span className="link-icon">📝</span>
                <span className="link-text">Register</span>
              </Link>
            </li>
          </ul>
          <button className="cta-button" onClick={() => navigate("/login")}>
            Play Now ➔
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
