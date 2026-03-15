import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaDiscord, FaFigma } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Acerca de</h3>
          <p>Este sitio web es una guía de estrategias competitivas para Pokémon Showdown que me sirve como práctica para aprender React.</p>
        </div>
        
        <div className="footer-section">
          <h4>Navegación</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/rss">Feed RSS</Link></li>
            <li><a href="https://play.pokemonshowdown.com/" target="_blank" rel="noreferrer">Pokémon Showdown</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Redes y Proyecto</h4>
          <div className="social-icons">
            <a href="https://github.com/alericohdez" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://figma.com" target="_blank" rel="noreferrer"><FaFigma /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://discord.com" target="_blank" rel="noreferrer"><FaDiscord /></a>
          </div>
          <p>pokebuildchampions@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Alejandro Rico Hernández. Todos los derechos reservados | <Link to="/privacy-policy">Política de Privacidad y Cookies</Link> | <Link to="/privacy-policy">Condiciones de Venta</Link></p>
      </div>
    </footer>
  );
};

export default Footer;