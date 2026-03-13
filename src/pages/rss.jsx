import React from "react";
import "./rss.css";

const RSS = () => {
  return (
    <div className="rss-page">
      <h1 className="rss-title">RSS Feed</h1>

      <p className="rss-text">
        Accede al feed RSS de Pokebuild Champions para recibir
        actualizaciones sobre cambios en tiers, nuevos builds y noticias.
      </p>

      <a
        href="/rss.xml"
        target="_blank"
        rel="noopener noreferrer"
        className="rss-button"
      >
        Ver RSS en XML
      </a>
    </div>
  );
};

export default RSS;


