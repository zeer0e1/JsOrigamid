// Verifique a distância da primeira imagem
// em relação ao topo da página

const firstImage = document.querySelector("img");

console.log(firstImage.offsetTop);

// Retorne a soma da largura de todas as imagens
const larguraImgs = document.querySelectorAll("img");
let somaLaguraImgs = 0;

larguraImgs.forEach((img) => {
  somaLaguraImgs += img.getBoundingClientRect().width;
});

console.log(somaLaguraImgs);
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");

links.forEach((link) => {
  const linkWidth = link.offsetHeight;
  const linkHeight = link.offsetHeight;
  if (linkHeight >= 48 && linkWidth >= 48) {
    console.log(link, "possui boa acessibilidade");
  } else {
    console.log(link, "Nao possui boa acessibilidade");
  }
});
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const tamanhoTela = window.innerHeight;
const menuSite = document.querySelector(".menu");

console.log(tamanhoTela);
if (tamanhoTela < 1000) {
  menuSite.classList.add("menu-mobile");
}

const brownserSmall = window.matchMedia("max-width: 720px").matches;

