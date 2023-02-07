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
