// Retorne um número aleatório
// entre 1050 e 2000

const ramdomNumber = Math.floor(Math.random() * (1050 - 2000 + 1)) + 2000;
console.log(ramdomNumber);

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9, 300";

let arrayNumber1 = numeros.split(", ");

/*
let arrayNumber2 = [];
arrayNumber1.forEach((n) => {
  arrayNumber2.push(Number.parseInt(n));
});
*/

console.log("NOVA SOLUÇÃO");
const numberMax = Math.max(...arrayNumber1);

console.log(numberMax);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function clearPrice(array) {
  let newPrices = [];
  let totalArray = 0;
  array.forEach((item) => {
    let NumberOfArray = Math.round(
      Number.parseFloat(item.trim().toUpperCase().replace("R$", ""))
    );
    newPrices.push(NumberOfArray);
    totalArray += NumberOfArray;
  });
  return `Centavos arredondados: ${newPrices}\nSoma total: ${totalArray}`;
}
console.log(clearPrice(listaPrecos));

// SOLUÇÃO DO PROFESSOR
function limparPreco(price) {
  price = +price.toUpperCase().replace("R$", "").trim().replace(",", ".");
  price = +price.toFixed(2);
  return price;
}
let soma = 0;

listaPrecos.forEach((preco) => {
  soma += limparPreco(preco);
});

console.log(soma);
limparPreco(listaPrecos[1]);
