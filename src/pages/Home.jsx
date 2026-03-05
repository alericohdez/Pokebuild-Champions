import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import fotoFondo from '../assets/fotoFondo.jpg';

const TIERS = [
  { id: 'ubers', name: 'Ubers', desc: 'El olimpo de los Pokémon legendarios.' },
  { id: 'ou', name: 'OU', desc: 'El estándar del juego competitivo.' },
  { id: 'uu', name: 'UU', desc: 'Grandes amenazas fuera del radar OU.' },
  { id: 'ru', name: 'RU', desc: 'Estrategias únicas y variadas.' }
];

const initialForum = [
  { id: 1, author: 'Cintia', pokemon: 'Garchomp', category: 'Ofensiva', strategy: 'Danza Espada y Terremoto para barrer equipos.' },
  { id: 2, author: 'Máximo', pokemon: 'Metagross', category: 'Defensiva', strategy: 'Puño Meteoro y Defensa Férrea.' }
];

function Home() {
  const [posts, setPosts] = useState(initialForum);
  const [formData, setFormData] = useState({ id: '', author: '', pokemon: '', category: 'Ofensiva', strategy: '' });
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Todas');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      setPosts(posts.map(post => post.id === formData.id ? { ...formData } : post));
    } else {
      const newId = posts.length > 0 ? Math.max(...posts.map(p => p.id)) + 1 : 1;
      setPosts([...posts, { ...formData, id: newId }]);
    }
    setFormData({ id: '', author: '', pokemon: '', category: 'Ofensiva', strategy: '' });
  };

  const handleEdit = (post) => {
    setFormData(post);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.pokemon.toLowerCase().includes(search.toLowerCase()) || post.author.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = filter === 'Todas' || post.category === filter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div 
      className="home-container" 
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${fotoFondo})` }}
    >
      <header className="home-hero">
        <h2>Tu página de estrategias competitivas definitivas</h2>
      </header>

      <section className="tiers-grid">
        {TIERS.map(tier => (
          <div key={tier.id} className="tier-card">
            <h2>{tier.name}</h2>
            <p>{tier.desc}</p>
            <Link to={`/tier/${tier.id}`} className="enter-btn">
              Explorar Tier
            </Link>
          </div>
        ))}
      </section>

      <section className="forum-section">
        <h2 className="forum-title">Estrategias de la Comunidad</h2>
        
        <div className="forum-controls">
          <input 
            type="text" 
            placeholder="Buscar Pokémon o Autor..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="Todas">Todas las categorías</option>
            <option value="Ofensiva">Ofensiva</option>
            <option value="Defensiva">Defensiva</option>
            <option value="Soporte">Soporte</option>
          </select>
        </div>

        <form onSubmit={handleSubmit} className="forum-form">
          <input type="text" name="author" placeholder="Tu Nombre" value={formData.author} onChange={handleInputChange} required />
          <input type="text" name="pokemon" placeholder="Pokémon" value={formData.pokemon} onChange={handleInputChange} required />
          <select name="category" value={formData.category} onChange={handleInputChange} required>
            <option value="Ofensiva">Ofensiva</option>
            <option value="Defensiva">Defensiva</option>
            <option value="Soporte">Soporte</option>
          </select>
          <textarea name="strategy" placeholder="Estrategia..." value={formData.strategy} onChange={handleInputChange} required />
          <button type="submit">{formData.id ? 'Actualizar Estrategia' : 'Añadir Estrategia'}</button>
        </form>

        <div className="forum-list">
          {filteredPosts.map(post => (
            <div key={post.id} className="forum-card">
              <h3>{post.pokemon} - <span>{post.category}</span></h3>
              <p><strong>Por:</strong> {post.author}</p>
              <p>{post.strategy}</p>
              <div className="card-actions">
                <button className="btn-edit" onClick={() => handleEdit(post)}>Editar</button>
                <button className="btn-delete" onClick={() => handleDelete(post.id)}>Borrar</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;