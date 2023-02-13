// Crie uma função que verifique
// corretamente o tipo de dado
function typeOfValue(value) {
  console.log(Object.prototype.toString.call(value));
}

typeOfValue("lucas");

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {
  lados: {
    value: 4,
  },
};
quadrado.value = 10;

console.log(quadrado.lados.value);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

Object.freeze(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));
