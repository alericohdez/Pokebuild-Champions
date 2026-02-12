import React from 'react';
import { useParams } from 'react-router-dom'; // Importamos el gancho del Router
import './TierPage.css';
import { TIERS_DATA } from '../data/mockData';
import { Link } from "react-router-dom";

const capitalize = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1);

const normalizeName = (name) =>
  name.toLowerCase().replace(/[^a-z0-9]/g, "");



const TierPage = () => {
  // 1. Leemos el parámetro de la URL (ej: "ou", "ubers")
  const { tierId } = useParams();

  // 2. Buscamos los datos. Convertimos a minúsculas para evitar errores
  const data = TIERS_DATA[tierId?.toLowerCase()];

  // 3. Si la tier no existe, mostramos aviso
  if (!data) {
    return (
      <div className="tier-page-container" style={{ textAlign: 'center', color: 'white' }}>
        <h1>⚠️ Tier no encontrada</h1>
        <p>Estás buscando: {tierId}</p>
      </div>
    );
  }

  // 4. Si existe, mostramos la página normal
  return (
    <div className="tier-page-container">
      <header className="tier-header">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </header>

      <div className="pokemon-grid">
        {data.pokemon.map((poke) => (
          <Link
            key={poke.id}
            to={`/pokemon/${normalizeName(poke.name)}`}
            className="pokemon-card"
          >

            <div className="poke-sprite">
              <img src={poke.sprite} alt={poke.name} />
            </div>
            <div className="poke-info">
              <h3>{poke.name}</h3>
              <div className="poke-types">
                {poke.types.map(type => (
                  <span key={type} className={`type-badge ${type.toLowerCase()}`}>
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TierPage;