const animaisList = document.querySelector(".animais-lista");
const height = animaisList.scrollHeight;
console.log(height);

const primeiroH2 = document.querySelector("h2");

const rect = primeiroH2.getBoundingClientRect();

console.log(rect);
