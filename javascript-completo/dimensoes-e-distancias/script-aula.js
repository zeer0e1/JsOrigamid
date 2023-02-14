const animaisList = document.querySelector(".animais-lista");
const height = animaisList.scrollHeight;
console.log(height);

const primeiroH2 = document.querySelector("h2");

const rect = primeiroH2.getBoundingClientRect();

console.log(rect.top);

console.log(window.innerWidth);

const small = window.matchMedia("max-width: 600px");

if (small) {
  console.log("usuario mobile");
} else {
  console.log("usuario desktop");
}
