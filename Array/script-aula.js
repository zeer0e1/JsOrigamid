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

const carros3 = ["Ford", "Fiat", "Vw", "Honda"];

// SPLICE recebe 3 paremetros
/*
1 - o index de onde ele vai começar 
2- a quantidade de itens que ele vai remover
3 - o que ele vai adicionar
*/

carros3.splice(3, 1, "fuca");
console.log(carros3);

//copyWithin
/**
 * Array que será copiado
 * de onde vai começar a copia
 * final da copia
 */

console.log(["item1", "item2", "item3", "item4"].copyWithin(2, 0, 3));

//fill
/**
 * Valor que vai ser usado para preencher o array
 * index de onde vai começar
 * index de onde vai parar
 */
console.log(["item1", "item2", "item3", "item4"].fill("Banana", 1));

// METODOS DE ACESSO
// Esses metodos a seguir não modificam a array somente retornam uma array modificada

//Concat
const transporte1 = ["Barco", "Aviao"];
const transporte2 = ["Carro", "Moto"];

//Modo 1
const transportes = transporte1.concat(transporte2);
console.log(transportes);

//Modo 2
const maisTransportes = [].concat(transporte1, transporte2, "Bike");
console.log(maisTransportes);

/**
  [].includes(valor)
 * Verifica se o array possui o valor passado no parametro e retorna true ou false
  
  [].indexOf(valor)
 *Verifica se o array possui o valor passado por parametro e retorna o index do primeiro valor da array
 
 * [].lastIndexOf
 * Verifica se o array possui o valor passado poe parametro e retorna o index do último valor encontrada
 */

const linguages = ["html", "css", "js", "php", "python"];
console.log(linguages.includes("js"));
console.log(linguages.indexOf("js"));
console.log(linguages.lastIndexOf("python"));

// join - junta todos os valores da array e retorna uma string com os valores,podemos passar por parametro um valor que será utilizado como separador
console.log(linguages.join("@"));

let htmlString = "<h2>Titulo principal </h2>";
htmlString = htmlString.split("h2");
htmlString = htmlString.join("h3");

console.log(htmlString);

// Slice - retorna os itens da array começando pelo inicio e aindo até o valor final

const cloneLinguagens = linguages.slice();

console.log(linguages.slice(3));
console.log(linguages.slice(2, 4));
