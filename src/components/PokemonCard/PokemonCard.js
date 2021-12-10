import React from 'react';
import './PokemonCard.css';

export default function PokemonCard({
  pokemon,
  url_image,
  type_1,
  hp,
  height,
  weight,
  ability_1,
  ability_2,
  attack,
  special_attack,
}) {
  return (
    <div className={`pokemon-card , ${type_1}`}>
      <div className="line-1">
        <span id="name">{pokemon}</span>
        <div>
          <span id="hp">{hp} HP</span>
          <img src={process.env.PUBLIC_URL + `/assests/${type_1}-attack.webp`} />
        </div>
      </div>
      <img src={`${url_image}`}></img>
      <div id="info-panel">{`${type_1} Pokemon. Length: ${height}, Weight:${weight} lbs.`}</div>
      <div className="moves">
        <div id="move-1">
          <h6>{ability_1}</h6>
          <h6>{attack}</h6>
        </div>
        <hr />
        <div id="move-2">
          <h6>{ability_2}</h6>
          <h6>{special_attack}</h6>
        </div>

        <hr />
      </div>
    </div>
  );
}
