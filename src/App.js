import './App.css';
import { useState, useEffect } from 'react';
import fetchPokemon from './services/pokemon';
import PokemonCard from './components/PokemonCard/PokemonCard';
import Header from './components/Header/Header';
import Selector from './components/Selector/Selector';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async (query) => {
      const data = await fetchPokemon(query);
      setPokemon(data.results);
    };

    fetchData(query);
  }, [query]);

  return (
    <div className="App">
      <Header />
      <Selector query={query} setQuery={setQuery} />
      <div className="poke-list">
        {pokemon.map((poke) => {
          return <PokemonCard key={poke._id} {...poke} />;
        })}
      </div>
    </div>
  );
}

export default App;
