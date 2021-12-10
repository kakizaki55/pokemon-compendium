export default async function fetchPokemon(quary, type, order) {
  const searchParams = new URLSearchParams();

  searchParams.set('pokemon', quary);
  !(type === 'all') && searchParams.set('type', type);
  searchParams.set('sort', 'pokemon');
  searchParams.set('direction', order);

  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${searchParams.toString()}&perPage=100`
  );
  const data = await response.json();
  return data;
}
