const allImages = document.getElementsByTagName("img");
console.log(allImages);

const allImages2 = document.querySelectorAll('[src^="img/imagem"]');
console.log(allImages2);

const allLinks = document.querySelectorAll('[href^="#"]');

console.log(allLinks);

const firstH2 = document.querySelectorAll(".animais-descricao h2");
const firstH20 = document.querySelector(".animais-descricao h2");
console.log(firstH20);

const lastP = document.querySelectorAll("p");
console.log(lastP[lastP.length - 1]);
