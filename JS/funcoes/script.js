function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
  return 3.14;
}

var total = 5 * pi();

console.log(total);

function imc(peso, altura) {
  return peso / (altura * 2);
}

console.log(imc(78, 1.68));

function corFavorita(cor) {
  if (cor == "Azul") {
    return "Eu gosto de verde";
  } else if (cor === "Verde") {
    return "Eu gosto de mato";
  } else {
    return "Eu n gosto de cores";
  }
}

console.log(corFavorita("Verde"));

function mostraConsole() {
  console.log("Olá");
}

addEventListener("click", mostraConsole);

let idade = 26;

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Por favor preencha um numero";
  } else if (idade >= 60) {
    return false;
  } else {
    return false;
  }
}
