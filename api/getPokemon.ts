export const getPokemon = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const pokemon = await response.json().then((data) => data);

    const formattedPokemon = pokemon.results.map(async (poke) => {
      const fullPokemonDataResponse = await fetch(poke.url);

      const pokemonWithUrl = await fullPokemonDataResponse
        .json()
        .then((data) => {

          return {
            name: data.name.charAt(0).toUpperCase() + data.name.substring(1),
            image: data.sprites.front_default,
            height: data.height * 10 + "cm",
            weight: data.weight + "kg",
            pokedexNumber: data.id,
          };
        });

      
      return pokemonWithUrl;
    });

    return Promise.all(formattedPokemon);
  } catch (err) {
    console.log("error fetching initial data");
    return [];
  }
};

export const generateDescriptions = async () => {
  const descriptions = [];
  let x=1
  while(x < 152) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${x}/`);
    const pokemon = await response.json().then((data) => data);

    descriptions.push(pokemon.flavor_text_entries[0].flavor_text.split('\n').join(' '))
    x++
  }

  return descriptions
  
}
