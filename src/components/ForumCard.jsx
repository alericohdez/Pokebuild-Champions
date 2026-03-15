import React from 'react';

function ForumCard({ post, onEdit, onDelete }) {
  return (
    <div className="forum-card">
      <h3>{post.pokemon} - <span>{post.category}</span></h3>
      <p><strong>Por:</strong> {post.author}</p>
      <p>{post.strategy}</p>
      <div className="card-actions">
        <button className="btn-edit" onClick={() => onEdit(post)}>Editar</button>
        <button className="btn-delete" onClick={() => onDelete(post.id)}>Borrar</button>
      </div>
    </div>
  );
}

export default ForumCard;