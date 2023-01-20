var pessoa = {
  nome: "Lucas",
  idade: 26,
};

console.log(pessoa.idade);

var quadrado = {
  lado: 4,
  area(lado) {
    return lado * lado;
  },
  perimitro(lado) {
    return this.lado * lado;
  },
};

// adicionando mais um atributo ao objeto quadrado
pessoa.sexo = "m";
