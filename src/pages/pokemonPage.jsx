import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { TIERS_DATA} from "../data/mockData";
import "./PokemonPage.css";
const normalizeName = (name) =>
  name.toLowerCase().replace(/[^a-z0-9]/g, "");

const PokemonPage = () => {
  const { pokemonId } = useParams();

  const [builds, setBuilds] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔎 filtros
  const [selectedVersion, setSelectedVersion] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // 🔥 Leer desde Firebase
  useEffect(() => {
    const fetchBuilds = async () => {
      try {
        const q = query(
          collection(db, "pokemonBuilds"),
          where("pokemon", "==", pokemonId)
        );

        const snapshot = await getDocs(q);

        const buildsArray = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setBuilds(buildsArray);
        setLoading(false);
      } catch (error) {
        console.error("Error cargando builds:", error);
        setLoading(false);
      }
    };

    fetchBuilds();
  }, [pokemonId]);

  // 🔥 FILTRADO DINÁMICO (esto es lo que te da el 40%)
  const filteredBuilds = builds.filter(build => {
    const matchesVersion =
      selectedVersion === "all" || build.version === selectedVersion;

    const matchesSearch =
      build.version.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesVersion && matchesSearch;
  });
  let pokemonData = null;
  for (const tier in TIERS_DATA) {
    pokemonData = TIERS_DATA[tier].pokemon.find(
      (p) => normalizeName(p.name) === pokemonId
    );
    if (pokemonData) break;
  }

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Cargando builds...</h2>;
  }

  return (
    <div className="pokemon-page-container">
      <h1>Builds de {pokemonId}</h1>
      <img src={pokemonData.sprite} alt={pokemonData.name} style={{ width: "150px" }} />
      {/* 🔽 FILTROS */}
      <div className="filters-container">
        <select
          value={selectedVersion}
          onChange={(e) => setSelectedVersion(e.target.value)}
        >
          <option value="all">Todas las versiones</option>
          {[...new Set(builds.map(b => b.version))].map(version => (
            <option key={version} value={version}>
              {version}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Buscar versión..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 🔥 RESULTADOS */}
      <div className="builds-grid">
        {filteredBuilds.map(build => (
          <div key={build.id} className="build-card">
            <h3>{build.version}</h3>
            <p><strong>Objeto:</strong> {build.item}</p>
            <p><strong>Habilidad:</strong> {build.ability}</p>
            <p><strong>Naturaleza:</strong> {build.nature}</p>
            <p><strong>EVs:</strong> {build.evs}</p>
            <p><strong>Tera Tipo:</strong> {build.teraType}</p>

            <div className="moves">
              <strong>Movimientos:</strong>
              <ul>
                {build.moves.map((move, index) => (
                  <p key={index}>{move}</p>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonPage;