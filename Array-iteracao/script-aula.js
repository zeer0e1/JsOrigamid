const carros = ["Ford", "Fiat", "Honda"];

//[].forEach(callback(itemAtual,index,array)) - Essa função de callback vai ser utilizada em cada iteme e podemos passar para essa função 3 parametros
/**
 * 1 - Item atual
 * 2 - Index do valor atual
 * 3 - Array original
 */

carros.forEach(function (item, index, array) {
  console.log(item.toUpperCase());
});

// Com arowFunction
carros.forEach((item, index) => {
  console.log(item.replace("o", "0"));
});

// [].map - Basicamente é a mesma coisa do forEach porem essa função retorna cada item que vai ser interado

// Com o forEach a variavel  carroUper fica undefined por causa que o método forEach não retorna nada
const carroUper = carros.forEach((item) => {
  return item.toUpperCase();
});

// Já com o método map ele vai retornar o item
const carroUper2 = carros.map((item) => {
  return item.toUpperCase();
});

const numeros = [4, 2, 6, 8];

// Vamos utilizar o map para retornar os numero multiplicado por 2
const numerosX2 = numeros.map((numero) => numero * 2);

/**
 * map - quando quisermos adicionar algo e criar um novo array com isso
 * forEach - quando quisermos só adicionar algo na array existente
 */

console.log(carroUper);
console.log(carroUper2);
console.log(numerosX2);

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const tempoAulas = aulas.map((aula) => aula.min);

/**
 * [].reduce(acomulador,itemAtual,index)
 * Retorna o resultado da iteração do item atual
 */

const aulas2 = [10, 20, 30, 10, 2, 50];

const totaT = aulas2.reduce((tempo, aula) => {
  return tempo + aula;
});

console.log(totaT);

const maiorNumero = aulas2.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior;
});

console.log(maiorNumero);

const listaAulas = aulas.reduce((acomulador, aula, index) => {
  acomulador[index] = aula.nome;
  return acomulador;
}, {});

/**
 * [].reduceRight()
 * só mudar  a direção em que ele vai começar
 */

const frutas = ["banana", "Pera", "Uva"];

/**
 * [].some()
 * Veririca se o array possui o valor passado dentro da função
 */
const possuUva = frutas.some((item) => {
  return item == "Uva";
});

/**
 * [].every()
 * Verifica se todos os returns da função é um valor truthy
 */

const frutasCheias = frutas.every((fruta) => {
  return fruta;
});

// tm pode ser usado com numeros

const maiorQue3 = numeros.every((n) => n > 3);

//[].find() procura um valor da array e o primeiro que ele achar já encerra a função
//[].findIndex() ao inves de retonar o valor ele ira retonar o index de onde ele está

const buscaUva = frutas.findIndex((fruta) => {
  return fruta === "Uva";
});

console.log(buscaUva);

const buscaMaiorQue2 = numeros.find((numero) => numero > 2);
console.log(buscaMaiorQue2);

//[].filter()
/**
 * [].filter() - Retorna uma array com a lista de valores que durante a execução retornaram um valor truthy
 */

const frutas2 = ["Banana", undefined, null, "", "Uva", 0, "Maça"];

const arrayLimpa = frutas2.filter((item) => {
  return item;
});

console.log(arrayLimpa);

const numeroMaiorQue10 = numeros.filter((numero) => numero > 3);
console.log(numeroMaiorQue10);
