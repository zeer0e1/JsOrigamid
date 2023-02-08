const instrumentos = ["Guitarra", "Baixo", "Violao"];
const preco = [49, 99, 69, 80];

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 200 }],
  function andar(nome) {
    console.log(nome);
  },
];

const carros = new Array("For", "Fiat", "Honda");

carros[2] = "Ferrari";
carros[3] = "Kia";
carros[20] = "Gol";

console.log(carros);

const frutas = ["Banana", "Pera", ["Uva Roxa", "Uva verde"]];
console.log(frutas[2][0].length);

const instrumentos2 = ["Guitarra", "Bairro", "Violão"];

// Ordena em ordem alfabetica
instrumentos.sort();

const idades = [32, 21, 33, 43, 1, 12, 8];

// Ordena caractere por carectere
idades.sort();

const carros2 = ["Ford", "Fiat", "w"];

//Adiciona items no começo da array
carros2.unshift("Kia", "Ferrai");

// adiciona item no final da array
carros2.push("Fusca");

//remove o primeiro elemento da array e retorna o mesmo
const primeiroCarro = carros2.shift();

// remove o utlimo elemento da array e retorna o mesmo
const ultimoCarro = carros2.pop();

// Inverte todos os elementos da array
const arrayInvertida = carros2.reverse();
