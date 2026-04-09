import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TierPage from './pages/TierPage';
import PokemonPage from './pages/PokemonPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Rss from './pages/Rss';
import { DataManager } from './components/DataManager';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tier/:tierId" element={<TierPage />} />
          <Route path="/pokemon/:pokemonId" element={<PokemonPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/rss" element={<Rss />} />
          <Route path="/datos" element={<DataManager />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;