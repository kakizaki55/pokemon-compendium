import './App.css';
import { useState, useEffect } from 'react';
import fetchPokemon from './services/pokemon';

function App() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokemon(data.results);
    };
    fetchData();
  }, []);

  console.log(pokemon);

  return <div className="App">Pokemon App</div>;
}

export default App;
