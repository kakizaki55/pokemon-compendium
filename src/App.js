import './App.css';
import { useState, useEffect } from 'react';
import fetchPokemon from './services/pokemon';
import PokemonCard from './components/PokemonCard/PokemonCard';
import Header from './components/Header/Header';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemon(data.results);
    };
    fetchData();
  }, []);

  console.log(pokemon);

  return (
    <div className="App">
      <Header />
      <div className="poke-list">
        {pokemon.map((poke) => {
          return <PokemonCard key={poke._id} {...poke} />;
        })}
      </div>
    </div>
  );
}

export default App;
