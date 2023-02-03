const comida = "pizza";
const agua = new String("agua");

// str.length
//str[0]

const frase = "a melhor comida";
console.log(frase[frase.length - 1]);
console.log(frase.charAt(0));

const frase2 = "é Pizza";

// concatena uma frase com a outra
const fraseFinal = frase.concat(frase2);

const fruta = "maça";

const listaFrutas = "melancia, Banada, laranja";

// verificar se existe uma palavra dentro de uma frase
listaFrutas.includes(fruta);

// Verifica se a frase/texto inicia com o texto que for informado no parametro
console.log(fruta.startsWith("ba"));

// Verifica se a frase/texto termina com o texto que for informado no parametro

console.log(fruta.endsWith("a"));

//Slice corta a string conforme o que for passado como parametro
const transacao1 = "Depósito do cliente";
const transacao2 = "Depósito do fornecedor";
const transacao3 = "Taxa de camisas";

console.log(transacao1.slice(1, 3));
console.log(transacao1.slice(12));
console.log(transacao1.slice(-8));

// IndexOf retorna onde está o valor que foi pssado por paramentro

console.log(fruta.indexOf("b"));
console.log(fruta.lastIndexOf("a"));

// aumenta a string no tamanho iformado (primeiro parametro) com o que for passado(segundo parametro)
const preco = "R$ 99.00";
console.log(preco.padStart(20, "."));

//Exemplo

const ListaPreco = ["R$ 100", "R$ 40", "R$ 3450"];
ListaPreco.forEach((preco) => {
  console.log(preco.padStart(8, "-"));
});

// Repete  a frase com o que for passado no parametro
const texto = "@";

console.log(texto.repeat(30));
