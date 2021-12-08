export default async function fetchPokemon(quary) {
  const searchParams = new URLSearchParams();
  searchParams.set('pokemon', quary);
  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${searchParams.toString()}`
  );
  const data = await response.json();
  return data;
}
