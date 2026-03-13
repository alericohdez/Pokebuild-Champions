import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="PokeBuild Champions" className="header-logo-img" />
          </Link>
        </div>

        <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
            <li><Link to="/tier/ubers" onClick={closeMenu}>Ubers</Link></li>
            <li><Link to="/tier/ou" onClick={closeMenu}>OU</Link></li>
            <li><Link to="/tier/uu" onClick={closeMenu}>UU</Link></li>
            <li><Link to="/tier/ru" onClick={closeMenu}>RU</Link></li>
            <li><Link to="/rss" onClick={closeMenu}>RSS</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;