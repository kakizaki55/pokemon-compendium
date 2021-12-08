export default async function fetchPokemon() {
  const response = await fetch(
    'https://pokedex-alchemy.herokuapp.com/api/pokedex?page=3&perPage=50'
  );
  const data = await response.json();
  return data;
}
