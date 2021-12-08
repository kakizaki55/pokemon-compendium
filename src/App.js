import './App.css';
import { useState, useEffect } from 'react';
import fetchPokemon from './services/pokemon';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      console.log(data.results);
    };
    fetchData();
  }, []);

  return <div className="App">Pokemon App</div>;
}

export default App;
