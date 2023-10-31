import React from 'react';

const Card = ({ professor }) => {
  return (
    <div className="card">
      <img src={professor.foto} alt={professor.nome} />
      <h2>{professor.nome}</h2>
      <p>{professor.formacao}</p>
      <button onClick={() => window.open(professor.botao)}>Ver Currículo</button>
    </div>
  );
};

export default Card;
