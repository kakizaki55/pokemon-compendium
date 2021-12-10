import './App.css';
import { useState, useEffect } from 'react';
import fetchPokemon from './services/pokemon';
import PokemonCard from './components/PokemonCard/PokemonCard';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Selector from './components/Selector/Selector';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [type, setType] = useState('all');
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon(query, type, order);
      setPokemon(data.results);
      setIsLoading(false);
    };

    fetchData();
  }, [isLoading, type, order]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <Header />
      <Selector
        query={query}
        setQuery={setQuery}
        type={type}
        setType={setType}
        order={order}
        setOrder={setOrder}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <div className="poke-list">
        {pokemon.map((poke) => {
          return <PokemonCard key={poke._id} {...poke} />;
        })}
      </div>
    </div>
  );
}

export default App;
