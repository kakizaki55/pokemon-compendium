import React from 'react';
import './PokemonCard.css';

export default function PokemonCard({ pokemon, url_image, type_1, type_2, shape }) {
  return (
    <div className="pokeman-card">
      <h5>{pokemon}</h5>

      <img src={`${url_image}`}></img>
      <span>
        {type_1}/{type_2}
      </span>
      <span> {shape}</span>
    </div>
  );
}
