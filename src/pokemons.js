// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons) {
    return pokemons.filter(pokemon => pokemon.type.includes('Fire'));
}
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemons) {
    if (pokemons.length === 0) return 0;
    let shortest = pokemons[0];
    pokemons.forEach(pokemon => {
        if (parseFloat(pokemon.height) < parseFloat(shortest.height)) {
            shortest = pokemon;
        }
    });
    return shortest.name;
}
// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemons) {
    if (pokemons.length === 0) return 0;

    const candies = pokemons.map(pokemon => pokemon.candy_count || 0);
    const total = candies.reduce((sum, count) => sum + count, 0);
    const average = total / candies.length;

    return parseFloat(average.toFixed(2));
}
// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(pokemons) {
    if (pokemons.length === 0) return 0;
    const groundPokemons = pokemons.filter(pokemon => pokemon.type.includes('Ground')).slice(0, 10);
    return groundPokemons.map(pokemon => pokemon.img);
}

// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(pokemons) {
    if (pokemons.length === 0) return 0;

    const pikachu = pokemons.find(pokemon => pokemon.name === 'Pikachu');
    if (!pikachu) return 0;

    const pikachuWeight = parseFloat(pikachu.weight);

    return pokemons
        .filter(pokemon => parseFloat(pokemon.weight) > pikachuWeight)
        .map(pokemon => pokemon.name);
}
// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(pokemons) {
    const sortedPokemons = [...pokemons].sort((a, b) => a.name.localeCompare(b.name));
    return sortedPokemons.slice(0, 20).map(pokemon => pokemon.name);
}
// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
function strongPokemons(pokemons) {
    const strongPokemons = pokemons.filter(pokemon => pokemon.weaknesses.length === 1);
    return strongPokemons.slice(0, 15).map(pokemon => pokemon.name);
}