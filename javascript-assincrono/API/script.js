fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((r) => r.json())
  .then((pokemon) => {
    pokemon.results.forEach((poke) => {
      console.log(poke.name);
    });
  });

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
  method: "POST",
  body: '{"tittle" : "javacript"}',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((json) => console.log(json));
