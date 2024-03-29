document.getElementById("searchButton").addEventListener("click", function () {
  const pokemonName = document
    .getElementById("pokemonInput")
    .value.trim()
    .toLowerCase();
  if (pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Pokémon not found");
        }
        return response.json();
      })
      .then((data) => {
        const pokemonDisplay = document.getElementById("pokemonDisplay");
        pokemonDisplay.innerHTML = `
                  <h2>${data.name.toUpperCase()}</h2>
                  <img src="${data.sprites.front_default}" alt="${data.name}">
                  <p>Height: ${data.height} | Weight: ${data.weight}</p>
              `;
      })
      .catch((error) => {
        document.getElementById("pokemonDisplay").textContent = error.message;
      });
  } else {
    document.getElementById("pokemonDisplay").textContent =
      "Please enter a Pokémon name";
  }
});
