export default async function fetchPokemon() {
  const response = await fetch(
    'https://pokedex-alchemy.herokuapp.com/api/pokedex?page=1&perPage=150'
  );
  const data = await response.json();
  return data;
}
