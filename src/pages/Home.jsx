import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para la navegación
import './Home.css';
// Importamos tu imagen desde la carpeta assets
import fotoFondo from '../assets/fotoFondo.jpg'; 

const TIERS = [
  // Usamos IDs en minúscula para la URL (ej: /tier/ubers), pero Name en mayúscula para el título
  { id: 'ubers', name: 'Ubers', desc: 'El olimpo de los Pokémon legendarios.' },
  { id: 'ou', name: 'OU', desc: 'El estándar del juego competitivo.' },
  { id: 'uu', name: 'UU', desc: 'Grandes amenazas fuera del radar OU.' },
  { id: 'ru', name: 'RU', desc: 'Estrategias únicas y variadas.' }
];

function Home() {
  return (
    <div 
      className="home-container" 
      // Usamos el estilo en línea para cargar tu imagen importada + el filtro oscuro
      style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${fotoFondo})` 
      }}
    >
      <header className="home-hero">
        {/* Este texto se verá encima de la imagen */}
        <h2>Tu página de estrategias competitivas definitivas</h2>
      </header>

      <section className="tiers-grid">
        {TIERS.map(tier => (
          <div key={tier.id} className="tier-card">
            <h2>{tier.name}</h2>
            <p>{tier.desc}</p>
            
            {/* AQUÍ ESTÁ LA CLAVE: Usamos Link en vez de button */}
            {/* Esto lleva a /tier/ou, /tier/ubers, etc. */}
            <Link to={`/tier/${tier.id}`} className="enter-btn">
              Explorar Tier
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;