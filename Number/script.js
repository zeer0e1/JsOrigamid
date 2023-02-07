Number.isNaN("1");
// Verifica se o valor é um número
console.log(Number.isNaN("a"));

//Verifica se é um numero inteiro
Number.isInteger(20); //true
Number.isInteger(20.3); // falso pois é um double

//Transforma o numero de string para float
Number.parseFloat("20.3");

//Tranforma o numero de string para inteiro
Number.parseInt("2");

//se existir um caracter após o numero ele ignora
console.log(Number.parseInt("100 reais"));

// arredonda o  numero para as casa decimais do argumento
const preco = 2.99;
preco.toFixed(); // 3

const carro = 1000.455;
preco.toFixed(2); // 1000.46

const preco2 = 1499.49;
preco2.toFixed();

// Tranformar para o numeração padrão do local
let valor = 40.4;

valor = valor.toLocaleString("pt-BR", { style: "currency", currency });
