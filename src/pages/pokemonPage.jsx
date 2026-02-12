import React from "react";
import { useParams } from "react-router-dom";
import { TIERS_DATA, POKEMON_BUILDS } from "../data/mockData";
import "./PokemonPage.css";

const normalizeName = (name) =>
  name.toLowerCase().replace(/[^a-z0-9]/g, "");

const PokemonPage = () => {
  const { pokemonId } = useParams();

  let pokemonData = null;
  for (const tier in TIERS_DATA) {
    pokemonData = TIERS_DATA[tier].pokemon.find(
      (p) => normalizeName(p.name) === pokemonId
    );
    if (pokemonData) break;
  }

  const build = POKEMON_BUILDS[pokemonId];

  if (!pokemonData) {
    return (
      <div style={{ color: "white", textAlign: "center", marginTop: "50px" }}>
        <h1>⚠️ Pokémon no encontrado</h1>
        <p>Estás buscando: {pokemonId}</p>
      </div>
    );
  }

  return (
    <div className="pokemon-page-container" style={{ color: "white", textAlign: "center", marginTop: "50px" }}>
      <h1>{pokemonData.name}</h1>
      <img src={pokemonData.sprite} alt={pokemonData.name} style={{ width: "150px" }} />
      
      <div className="poke-types">
        {pokemonData.types.map(type => (
          <span key={type} className={`type-badge ${type.toLowerCase()}`}>
            {type}
          </span>
        ))}
      </div>

      {build ? (
        <div className="build-info" style={{ 
          marginTop: "30px", 
          backgroundColor: "#2a2a2a", 
          padding: "20px", 
          borderRadius: "12px",
          display: "inline-block",
          textAlign: "left",
          border: "1px solid #444",
          marginBottom: "50px"
        }}>
          <h2 style={{ borderBottom: "1px solid #555", paddingBottom: "10px" }}>Build Competitiva</h2>
          
          <p><strong>Objeto:</strong> {build.item}</p>
          <p><strong>Habilidad:</strong> {build.ability}</p>
          <p><strong>Naturaleza:</strong> {build.nature}</p>
          <p><strong>Tera Tipo:</strong> {build.teraType}</p>
          <p><strong>EVs:</strong> {build.evs}</p>
          
          <h3 style={{ marginTop: "15px" }}>Movimientos:</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {build.moves.map((move, index) => (
              <li key={index} style={{ 
                background: "#3d3d3d", 
                margin: "5px 0", 
                padding: "8px 15px", 
                borderRadius: "5px" 
              }}>
                {move}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div style={{ marginTop: "30px", color: "#aaa" }}>
          <p>No hay una estrategia registrada para este Pokémon.</p>
        </div>
      )}
    </div>
  );
};

export default PokemonPage;