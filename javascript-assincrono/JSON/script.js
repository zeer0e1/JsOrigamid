fetch("./dados.json")
  .then((r) => r.json())
  .then((json) => {
    json.forEach((aula) => {});
  });

const configuracoes = {
  player: "Google",
  tempo: 25.7,
  aula: "2.1 JavaScript",
};

localStorage.config = JSON.stringify(configuracoes);

console.log(JSON.parse(localStorage.config));
