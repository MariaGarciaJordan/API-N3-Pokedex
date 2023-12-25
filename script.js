const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}
function createPokemonCard(pokemonId) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => response.json())
        .then(data => {
            const pokemonName = data.name;
            const pokemonId = data.id;
            const pokemonType = data.types[0].type.name;

            const pokemonCard = document.createElement('div');
            pokemonCard.classList.add('pokemon');

            const pokemonColor = colors[pokemonType];
            pokemonCard.style.backgroundColor = pokemonColor;

            pokemonCard.innerHTML = `
                <div class="img-container">
                    <img src="${data.sprites.front_default}" alt="${pokemonName}">
                </div>
                <div class="info">
                    <span class="number">${pokemonId.toString().padStart(3, '0')}</span>
                    <h3 class="name">${pokemonName}</h3>
                    <small class="type">Type: <span>${pokemonType}</span></small>
                </div>
            `;
            poke_container.appendChild(pokemonCard);
        })
        .catch(error => console.error(error));
}
for (let i = 1; i <= pokemon_count; i++) {
    createPokemonCard(i);
}

