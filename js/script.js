const pokeContainer = document.getElementById("pokeContainer");
//Le paso el id del container de html

const pokemonsNumber = 150; // numero de pokemones que van aparecer
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const mainTypes = Object.keys(colors);

const fetchPokemons = async () => { //funcion para retornar los pokemons
  for (let i = 1; i <= pokemonsNumber; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => { // funcion que requiere un id para traer al pokemon
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`; // trayendo la api con el id del pokemon
  const res = await fetch(url); //buscar la url con la api fetch
  const pokemon = await res.json(); //devuelvamelo en json
  createPokemonCard(pokemon); //crear el pokemon
};

fetchPokemons(); // retorna los pokemones

function createPokemonCard(pokemon) {
  const pokemonEl = document.createElement("div"); //crea el div del pokemon
  pokemonEl.classList.add("pokemon"); //pasarle la clase pokemon para el estilo

  const pokeTypes = pokemon.types.map((el) => el.type.name); //funcion para mapear el tipo de pokemon
  const type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1);// 
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);//poner la primera letra en mayuscula
  const color = colors[type]; // llame los colores por tipo
  pokemonEl.style.backgroundColor = color;
  
  const pokeInnerHTML = `
		<div class="img-container">
			<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/
			${pokemon.id}.png" />
		</div>
    <div class="info">
        <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
    </div>
	`;

  pokemonEl.innerHTML = pokeInnerHTML; // se le pasa el pokemon + el div que contiene al pokemon con el estilo

  pokeContainer.appendChild(pokemonEl);
}

/*Social*/
const floating_btn = document.querySelector(".floating-btn");
const close_btn = document.querySelector(".close-btn");
const social_panel_container = document.querySelector(
  ".social-panel-container"
);

floating_btn.addEventListener("click", () => {
  social_panel_container.classList.toggle("visible");
});

close_btn.addEventListener("click", () => {
  social_panel_container.classList.remove("visible");
});