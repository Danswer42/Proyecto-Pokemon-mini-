/*Consume API of Pokemon*/

async function getPokemon() {
  try {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon");
    let data = await response.json();

    // Introduce pokemons en el HTML
    data.results.map(async (pokemon) => {
      try {
        let pokemonResponse = await fetch(pokemon.url);
        let pokemonData = await pokemonResponse.json();

        let div_pokemon = document.createElement("div");
        div_pokemon.classList.add(
          "flex",
          "justify-center",
          "items-center",
          "p-2",
          "bg-gray-200",
          "m-2",
          "rounded-md",
          "shadow-md",
          "text-center"
        );

        
        let img = document.createElement("img");
        img.src = pokemonData.sprites.front_default;
        img.alt = pokemon.name;
        div_pokemon.appendChild(img);

        
        let name = document.createElement("p");
        name.textContent = pokemon.name;
        div_pokemon.appendChild(name);

        
        let types = document.createElement("p");
        types.textContent = `Tipos: ${pokemonData.types
          .map((type) => type.type.name)
          .join(", ")}`;
        div_pokemon.appendChild(types);

        document.getElementById("lista").appendChild(div_pokemon);
      } catch (error) {
        console.error("Error al obtener datos del Pokémon:", error);
      }
    });
  } catch (error) {
    console.error("Error al obtener la lista de Pokémon:", error);
  }
}

getPokemon();

/*
  Mejorar el codigo para agregar la imagen de cada pokemon y el tipo

  Opcional: Crear una paginación para mostrar los pokemones de 20 en 20 hasta el final de la lista
*/