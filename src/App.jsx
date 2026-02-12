import React from 'react';
import { Routes, Route } from 'react-router-dom'; // <--- Importante
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TierPage from './pages/tierPage';
import './App.css';
import PokemonPage from "./pages/pokemonPage";
import PrivacyPolicy from "./pages/privacyPolicy";


function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <Routes>
          {/* Ruta para la página principal */}
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          {/* Ruta dinámica: :tierId cambiará según la URL */}
          <Route path="/tier/:tierId" element={<TierPage />} />
          <Route path="/pokemon/:pokemonId" element={<PokemonPage />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;