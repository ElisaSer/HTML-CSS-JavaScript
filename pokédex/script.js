

let pokemonContainer = document.getElementById("pokemonContainer");
let bottone = document.getElementById("out");

bottone.addEventListener("click", function(){
  pokemonContainer.innerHTML = "";
  let pokemonId = document.getElementById("CS").value;

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((response) => response.json())
    .then((pokemon) => {
      
      // Costruisco la card html per il pokemon
      const pokemonCard = document.createElement("div");
      
    
      pokemonCard.innerHTML = `
      <div>
        <h2>Nome: ${pokemon.name}</h2>
        <h2>Tipo: ${pokemon.types.map(type => " " + type.type.name)}</h2>
        <img src="${pokemon.sprites.front_default}">
        <img src="${pokemon.sprites.front_shiny}">
      </div>
      `;
      

      // Aggiungo la card in pagina
      pokemonContainer.appendChild(pokemonCard);
    })
    .catch((error) => alert("Errore: Pokemon non trovato", error));
});



















