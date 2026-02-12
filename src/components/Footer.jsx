import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";



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
          <h4>Enlaces</h4>
          <ul>
            <li><a href="https://github.com/alericohdez">GitHub</a></li>
            <li><a href="https://play.pokemonshowdown.com/">¡Prueba tus builds!</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p>pokebuildchampions@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Alejandro Rico Hernández. Todos los derechos reservados</p>
        <Link to="/privacyPolicy">Política de Privacidad y Cookies</Link>
      </div>
    </footer>
  );
};

export default Footer;