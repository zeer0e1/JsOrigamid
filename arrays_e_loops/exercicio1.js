var copasBrasil = [1959, 1962, 1970, 1994, 2002];

copasBrasil.forEach(function (copa) {
  console.log(`O brasil ganhou a copa de ${copa}`);
});

var frutas = ["Banana", "Maça", "Pera", "Uva", "Melancia"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "Pera") {
    break;
  }
}

var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
