import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import Home from '../pages/Home';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <li><Link to="/"> <img src={logo} alt="PokeBuild Champions" className="header-logo-img" /> </Link></li>
        </div>

        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/tier/ubers">Ubers</Link></li>
            <li><Link to="/tier/ou">OU</Link></li>
            <li><Link to="/tier/uu">UU</Link></li>
            <li><Link to="/tier/ru">RU</Link></li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;