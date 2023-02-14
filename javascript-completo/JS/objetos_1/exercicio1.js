var aluno = {
  nome: "Lucas",
  sobrenome: "Freitas",
  idade: 26,
  altura: 1.68,
  sexo: "m",
  nomeCompleto() {
    console.log(`{nome} {sobrenome}`);
  },
};
var carro = {
  preco: 1000,
  portas: 4,
  marca: "audi",
};

carro.preco = 3000;

var cachorro = {
  cor: "preto",
  idade: 10,
  latir(text) {
    if (text) {
      console.log("auau");
    } else {
      console.log("abanar o rabo");
    }
  },
};
